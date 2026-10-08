import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  forceUpdate,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import {
  currentBranchIds,
  domId,
  markCurrent,
  parseItems,
  readChildren,
  readItems,
  readJsonScript,
  signature,
  isHashRouteHref,
  toRouterPath,
  validate,
  warnOnce,
} from '../../utils/nav/model';
import {
  MobileRole,
  NavInstance,
  getCurrentHref,
  getNavigationHandler,
  getPrefetchHandler,
  getSections,
  isMobile,
  lockScroll,
  nextUid,
  notifyAll,
  register,
  unlockScroll,
  unregister,
} from '../../utils/nav/registry';
import {
  GcdsNavClickDetail,
  NavItem,
  NavNode,
  NavVariant,
} from '../../utils/nav/types';
import { IconNames } from '../gcds-icon/gcds-icon';
import I18N from './i18n/i18n';

type OpenState = Record<string, boolean>;

/**
 * Rendering context so the same tree renderer works for the desktop side nav
 * and for every section of the combined mobile menu.
 */
interface TreeContext {
  source: NavInstance;
  key: string;
  open: OpenState;
  toggle: (key: string) => void;
}

/**
 * Navigation for a site or section. Use `variant="top"` for a horizontal header navigation
 * and `variant="side"` for a vertical navigation next to the page content.
 * On small screens every gcds-nav on the page is combined into a single menu button.
 *
 * Links can be passed as `<gcds-nav-link>` and `<gcds-nav-group>` children,
 * as an `items` array (property or JSON attribute), or as a `<script type="application/json">` child.
 */
@Component({
  tag: 'gcds-nav',
  styleUrl: 'gcds-nav.css',
  shadow: true,
})
export class GcdsNav implements NavInstance {
  @Element() el: HTMLElement;

  uid: number = nextUid();

  private baseModel: NavNode[] = [];
  private modelSignature = '';
  private childObserver?: MutationObserver;
  private langObserver?: MutationObserver;
  private rebuildQueued = false;
  private dialog?: HTMLDialogElement;
  private menuTrigger?: HTMLButtonElement;
  private dropdownElements: Record<string, HTMLElement> = {};
  private prefetched = new Set<string>();

  /**
   * Props
   */

  /**
   * Navigation style: horizontal top navigation or vertical side navigation
   */
  @Prop({ reflect: true, mutable: true }) variant: NavVariant = 'side';

  @Watch('variant')
  validateVariant() {
    if (!['top', 'side'].includes(this.variant)) {
      warnOnce(
        `variant "${this.variant}" is not supported, use "top" or "side". Falling back to "side".`,
      );
      this.variant = 'side';
      return;
    }
    this.buildModel();
    register(this);
  }

  /**
   * Label for the navigation landmark
   */
  @Prop() label!: string;

  @Watch('label')
  labelChanged() {
    if (!this.label) {
      warnOnce('"label" is required to name the navigation landmark.');
    }
    notifyAll();
  }

  /**
   * Alignment of the links in a top navigation
   */
  @Prop({ mutable: true }) alignment: 'start' | 'end' = 'start';

  @Watch('alignment')
  validateAlignment() {
    if (!['start', 'end'].includes(this.alignment)) {
      warnOnce(
        `alignment "${this.alignment}" is not supported, use "start" or "end".`,
      );
      this.alignment = 'start';
    }
  }

  /**
   * Navigation items. Accepts an array (JavaScript property) or a JSON string (HTML attribute).
   * Format: [{ "label": "About", "href": "/about" }, { "label": "Group", "children": [...] }]
   */
  @Prop() items?: string | NavItem[];

  @Watch('items')
  itemsChanged() {
    this.buildModel();
  }

  /**
   * On small screens, combine this navigation with the other navigations on the page
   * into one menu ("combined") or give it its own menu button ("separate").
   */
  @Prop() mobileMenu: 'combined' | 'separate' = 'combined';

  @Watch('mobileMenu')
  mobileMenuChanged() {
    register(this);
  }

  /**
   * URL of the current page. Defaults to the browser URL, or the value passed to setCurrentHref().
   */
  @Prop() currentHref?: string;

  @Watch('currentHref')
  currentHrefChanged() {
    this.applyCurrent();
  }

  /**
   * Events
   */

  /**
   * Emitted when a link is clicked. Fired on the source `<gcds-nav-link>` when links are
   * passed as children, otherwise on gcds-nav. Call preventDefault() to handle navigation yourself.
   */
  @Event() gcdsClick!: EventEmitter<GcdsNavClickDetail>;

  /**
   * State
   */

  @State() lang: string;

  @State() model: NavNode[] = [];

  @State() mobile: boolean = false;

  @State() role: MobileRole = 'owner';

  @State() menuOpen: boolean = false;

  /** Open groups of the desktop navigation */
  @State() open: OpenState = {};

  /** Open groups in the mobile menu, keys are prefixed with the section uid */
  @State() panelOpen: OpenState = {};

  /**
   * Close top navigation dropdowns when clicking outside of them
   */
  @Listen('click', { target: 'document' })
  documentClick(e: MouseEvent) {
    if (this.variant !== 'top' || this.mobile) return;

    const path = e.composedPath();
    const openIds = Object.keys(this.open).filter(id => this.open[id]);
    const outside = openIds.filter(
      id => !path.includes(this.dropdownElements[id]),
    );

    if (outside.length) {
      const open = { ...this.open };
      outside.forEach(id => (open[id] = false));
      this.open = open;
    }
  }

  /**
   * Registry interface
   */

  getModel(): NavNode[] {
    return this.model;
  }

  setMobileRole(role: MobileRole) {
    this.role = role;
  }

  registryChanged() {
    this.mobile = isMobile();
    this.applyCurrent(false);
    forceUpdate(this);
  }

  closeMobileMenu() {
    if (this.dialog?.open) {
      this.dialog.close();
    }
    if (this.menuOpen) {
      this.menuOpen = false;
      unlockScroll();
    }
  }

  /**
   * Handle a link click for a node of this nav, wherever it is rendered.
   * Returns true when the browser navigation was cancelled.
   */
  activateItem(e: MouseEvent, node: NavNode): boolean {
    const base = window.location.href;
    const target = node.attributes.target;
    const modified =
      e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    const path = toRouterPath(node.href, base);
    const sameOrigin = !/^[a-z][a-z0-9+.-]*:/i.test(path);

    const detail: GcdsNavClickDetail = {
      href: node.href,
      path,
      label: node.label,
      item: node.source,
      external: node.external,
      shouldRoute:
        !modified &&
        !node.external &&
        sameOrigin &&
        (!target || target === '_self') &&
        !('download' in node.attributes) &&
        // In-page anchors and hash router links (#/about) only change the hash:
        // the browser handles them and hash routers react to the change
        !node.href.startsWith('#') &&
        !isHashRouteHref(node.href, base),
    };

    let prevented: boolean;

    // `Element` is shadowed by the Stencil decorator, check for a DOM node instead
    const sourceElement =
      'nodeType' in node.source ? (node.source as HTMLElement) : null;

    if (sourceElement?.isConnected) {
      // Fire on the original child so framework bindings on it (routerLink, onGcdsClick) keep working
      prevented = !sourceElement.dispatchEvent(
        new CustomEvent('gcdsClick', {
          detail,
          bubbles: true,
          composed: true,
          cancelable: true,
        }),
      );
    } else {
      prevented = this.gcdsClick.emit(detail).defaultPrevented;
    }

    if (prevented) {
      e.preventDefault();
      return true;
    }

    const navigate = getNavigationHandler();
    if (detail.shouldRoute && navigate) {
      e.preventDefault();
      navigate(detail.path, detail);
      return true;
    }

    return false;
  }

  /**
   * Model
   */

  private buildModel() {
    const fromItems = parseItems(this.items);
    const fromScript = readJsonScript(this.el);
    const hasChildren = Array.from(this.el.children).some(child =>
      ['GCDS-NAV-LINK', 'GCDS-NAV-GROUP'].includes(child.nodeName),
    );

    const inputs = [fromItems, fromScript, hasChildren || null].filter(Boolean);
    if (inputs.length > 1) {
      warnOnce(
        'Navigation was passed more than once. Using "items" first, then <script type="application/json">, then child elements.',
      );
    }

    let nodes: NavNode[];
    if (fromItems) {
      nodes = readItems(fromItems);
    } else if (fromScript) {
      nodes = readItems(fromScript);
    } else {
      nodes = readChildren(this.el);
    }

    this.baseModel = validate(nodes, this.variant);
    this.modelSignature = '';
    this.applyCurrent();
  }

  /**
   * Mark the current page. Only updates state when something visible changed.
   */
  private applyCurrent(notify = true) {
    const base =
      typeof window !== 'undefined'
        ? window.location.href
        : 'http://localhost/';
    const current = this.currentHref ?? getCurrentHref();
    const model = markCurrent(this.baseModel, current, base);
    const sig = signature(model);

    if (sig === this.modelSignature) return;

    this.modelSignature = sig;
    this.model = model;

    // Expand the branch of the current page in the side navigation
    if (this.variant === 'side') {
      const open = { ...this.open };
      currentBranchIds(model).forEach(id => (open[id] = true));
      this.open = open;
    }

    // The owner of the mobile menu may render this nav too
    if (notify) notifyAll();
  }

  private queueRebuild = () => {
    if (this.rebuildQueued) return;
    this.rebuildQueued = true;
    queueMicrotask(() => {
      this.rebuildQueued = false;
      this.buildModel();
    });
  };

  /**
   * Lifecycle
   */

  private updateLang() {
    this.langObserver = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    this.langObserver.observe(this.el, observerConfig);
  }

  connectedCallback() {
    if (typeof MutationObserver !== 'undefined') {
      // Frameworks and CMSs can change the child elements at any time
      this.childObserver = new MutationObserver(this.queueRebuild);
      this.childObserver.observe(this.el, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
    register(this);
  }

  disconnectedCallback() {
    this.childObserver?.disconnect();
    this.langObserver?.disconnect();
    // Also closes this nav's mobile menu and releases the scroll lock
    unregister(this);
  }

  componentWillLoad() {
    this.lang = assignLanguage(this.el);
    this.updateLang();

    if (!['top', 'side'].includes(this.variant)) {
      this.validateVariant();
    }
    this.validateAlignment();
    if (!this.label) {
      warnOnce('"label" is required to name the navigation landmark.');
    }

    this.mobile = isMobile();
    this.buildModel();

    // Frameworks like Angular set props after the element is connected and watchers
    // do not run before load, so elect the menu owner again with the final props
    register(this);
  }

  componentDidLoad() {
    // Listen on the shadow root so focus and click targets are not retargeted.
    // The shadow root lives as long as the element, so nothing to clean up.
    const root = this.el.shadowRoot;
    root.addEventListener('keydown', this.onShadowKeyDown);
    root.addEventListener('focusout', this.onShadowFocusOut);
    root.addEventListener('click', this.onDialogClick);
  }

  /**
   * Interaction
   */

  private toggleDesktop = (key: string) => {
    const opening = !this.open[key];
    const open = { ...this.open };

    // Only one dropdown open at a time in the top navigation
    if (this.variant === 'top') {
      Object.keys(open).forEach(id => (open[id] = false));
    }
    open[key] = opening;
    this.open = open;
  };

  private togglePanel = (key: string) => {
    this.panelOpen = { ...this.panelOpen, [key]: !this.panelOpen[key] };
  };

  private openMenu = () => {
    if (!this.dialog) return;

    // Expand the current branch of every section
    const panelOpen = { ...this.panelOpen };
    getSections(this).forEach(section => {
      currentBranchIds(section.getModel()).forEach(
        id => (panelOpen[`${section.uid}:${id}`] = true),
      );
    });
    this.panelOpen = panelOpen;

    this.dialog.showModal();
    lockScroll();
    this.menuOpen = true;
  };

  private onDialogClose = () => {
    this.menuOpen = false;
    unlockScroll();
    this.menuTrigger?.focus();
  };

  private onDialogClick = (e: MouseEvent) => {
    // Click on the backdrop
    if (e.target === this.dialog) {
      this.closeMobileMenu();
    }
  };

  private onLinkClick(e: MouseEvent, node: NavNode, source: NavInstance) {
    source.activateItem(e, node);

    const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    if (!modified) {
      this.closeMobileMenu();
      if (this.variant === 'top') this.open = {};
    }
  }

  private prefetch(node: NavNode) {
    const prefetch = getPrefetchHandler();
    if (!prefetch || node.external || !node.href) return;

    const base = window.location.href;
    const path = toRouterPath(node.href, base);
    if (
      /^[a-z][a-z0-9+.-]*:/i.test(path) ||
      isHashRouteHref(node.href, base) ||
      this.prefetched.has(path)
    ) {
      return;
    }

    this.prefetched.add(path);
    prefetch(path);
  }

  /**
   * Open top navigation dropdown that contains the event target
   */
  private openDropdownFor(e: Event): string | undefined {
    if (this.variant !== 'top' || this.mobile) return undefined;
    const path = e.composedPath();
    return Object.keys(this.dropdownElements).find(
      key => this.open[key] && path.includes(this.dropdownElements[key]),
    );
  }

  /**
   * Escape closes the dropdown and returns focus to its trigger
   */
  private onShadowKeyDown = (e: KeyboardEvent) => {
    const key = e.key === 'Escape' && this.openDropdownFor(e);
    if (!key) return;

    e.preventDefault();
    this.open = { ...this.open, [key]: false };
    (
      this.dropdownElements[key].querySelector(
        '.gcds-nav__trigger',
      ) as HTMLElement
    )?.focus();
  };

  /**
   * Close the dropdown when keyboard focus moves outside of it
   */
  private onShadowFocusOut = (e: FocusEvent) => {
    const key = this.openDropdownFor(e);
    const next = e.relatedTarget as Node | null;
    if (key && next && !this.dropdownElements[key].contains(next)) {
      this.open = { ...this.open, [key]: false };
    }
  };

  /**
   * Rendering
   */

  private renderLink(node: NavNode, source: NavInstance, className: string) {
    const { lang } = this;
    const attributes = { ...node.attributes };
    const newTab = attributes.target === '_blank';

    if (newTab) {
      const rel = new Set((attributes.rel || '').split(' ').filter(Boolean));
      rel.add('noopener');
      attributes.rel = Array.from(rel).join(' ');
    }

    return (
      <a
        {...attributes}
        class={`gcds-nav__link ${className}`}
        href={node.href}
        aria-current={node.current ? 'page' : undefined}
        onClick={(e: MouseEvent) => this.onLinkClick(e, node, source)}
        onMouseEnter={() => this.prefetch(node)}
        onFocus={() => this.prefetch(node)}
      >
        {node.label}
        {newTab && <gcds-sr-only tag="span"> {I18N[lang].newTab}</gcds-sr-only>}
      </a>
    );
  }

  /**
   * Vertical tree used by the side navigation and the mobile menu
   */
  private renderTree(nodes: NavNode[], level: number, ctx: TreeContext) {
    return nodes.map(node => {
      if (!node.children.length) {
        return (
          <li class="gcds-nav__item">
            {this.renderLink(
              node,
              ctx.source,
              node.home ? 'gcds-nav__link--home' : 'gcds-nav__link--side',
            )}
          </li>
        );
      }

      const key = `${ctx.key}${node.id}`;
      const listId = domId(`gcds-nav-${this.uid}`, key);
      const open = !!ctx.open[key];

      return (
        <li
          class={`gcds-nav__item gcds-nav__group gcds-nav__group--level-${level}`}
        >
          <button
            type="button"
            class={`gcds-nav__trigger gcds-nav__trigger--expandable${node.containsCurrent ? ' gcds-nav__trigger--contains-current' : ''}`}
            aria-expanded={open ? 'true' : 'false'}
            aria-controls={listId}
            onClick={() => ctx.toggle(key)}
          >
            <gcds-icon
              name={(open ? 'chevron-down' : 'chevron-right') as IconNames}
            ></gcds-icon>
            <span>{node.label}</span>
          </button>
          <ul id={listId} class="gcds-nav__sublist" hidden={!open}>
            {this.renderTree(node.children, level + 1, ctx)}
          </ul>
        </li>
      );
    });
  }

  private renderTopDesktop(home: NavNode | undefined, nodes: NavNode[]) {
    const { alignment, label } = this;

    return (
      <nav class="gcds-nav gcds-nav--top" aria-label={label}>
        <div class="gcds-nav__container">
          {home && this.renderLink(home, this, 'gcds-nav__link--home')}
          <ul
            class={`gcds-nav__list gcds-nav__list--top gcds-nav__list--${alignment}`}
          >
            {nodes.map(node => {
              if (!node.children.length) {
                return (
                  <li class="gcds-nav__item">
                    {this.renderLink(node, this, 'gcds-nav__link--top')}
                  </li>
                );
              }

              const key = node.id;
              const listId = domId(`gcds-nav-${this.uid}`, key);
              const open = !!this.open[key];

              return (
                <li
                  class={`gcds-nav__item gcds-nav__dropdown gcds-nav__dropdown--${alignment}`}
                  ref={el => (this.dropdownElements[key] = el)}
                >
                  <button
                    type="button"
                    class={`gcds-nav__trigger gcds-nav__trigger--dropdown${node.containsCurrent ? ' gcds-nav__trigger--contains-current' : ''}`}
                    aria-expanded={open ? 'true' : 'false'}
                    aria-controls={listId}
                    onClick={() => this.toggleDesktop(key)}
                  >
                    <span>{node.label}</span>
                    <gcds-icon
                      name={(open ? 'chevron-up' : 'chevron-down') as IconNames}
                    ></gcds-icon>
                  </button>
                  <ul
                    id={listId}
                    class="gcds-nav__dropdown-list"
                    hidden={!open}
                  >
                    {node.children.map(child => (
                      <li class="gcds-nav__item">
                        {this.renderLink(
                          child,
                          this,
                          'gcds-nav__link--dropdown',
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }

  private renderSideDesktop(home: NavNode | undefined, nodes: NavNode[]) {
    const { label } = this;
    const headingId = `gcds-nav-${this.uid}-heading`;

    return (
      <nav
        class="gcds-nav gcds-nav--side"
        aria-label={home ? label : undefined}
        aria-labelledby={home ? undefined : headingId}
      >
        {home ? (
          this.renderLink(home, this, 'gcds-nav__link--home')
        ) : (
          <p class="gcds-nav__heading" id={headingId}>
            {label}
          </p>
        )}
        <ul class="gcds-nav__list gcds-nav__list--side">
          {this.renderTree(nodes, 1, {
            source: this,
            key: '',
            open: this.open,
            toggle: this.toggleDesktop,
          })}
        </ul>
      </nav>
    );
  }

  private renderMobile() {
    const { lang, menuOpen } = this;
    const sections = getSections(this);
    const dialogId = `gcds-nav-${this.uid}-menu`;

    return (
      <div class="gcds-nav__mobile">
        <button
          type="button"
          class="gcds-nav__menu-trigger"
          aria-haspopup="dialog"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls={dialogId}
          ref={el => (this.menuTrigger = el)}
          onClick={this.openMenu}
        >
          {I18N[lang].menu}
        </button>
        <dialog
          id={dialogId}
          class="gcds-nav__panel"
          aria-label={I18N[lang].menuDialog}
          ref={el => (this.dialog = el)}
          onClose={this.onDialogClose}
        >
          <div class="gcds-nav__panel-content">
            <div class="gcds-nav__panel-header">
              <button
                type="button"
                class="gcds-nav__close"
                onClick={() => this.closeMobileMenu()}
              >
                <gcds-icon name="close"></gcds-icon>
                <span>{I18N[lang].close}</span>
              </button>
            </div>
            {sections.map(section => {
              const model = section.getModel();
              const home = model.find(n => n.home);
              const nodes = model.filter(n => !n.home);
              const labelId = `gcds-nav-${this.uid}-section-${section.uid}`;
              // The home link already introduces a section, only show the label without one
              const showLabel = sections.length > 1 && !home;

              return (
                <nav
                  class="gcds-nav__section"
                  aria-label={showLabel ? undefined : section.label}
                  aria-labelledby={showLabel ? labelId : undefined}
                >
                  {showLabel && (
                    <p class="gcds-nav__section-label" id={labelId}>
                      {section.label}
                    </p>
                  )}
                  <ul class="gcds-nav__list gcds-nav__list--panel">
                    {home && (
                      <li class="gcds-nav__item">
                        {this.renderLink(home, section, 'gcds-nav__link--home')}
                      </li>
                    )}
                    {this.renderTree(nodes, 1, {
                      source: section,
                      key: `${section.uid}:`,
                      open: this.panelOpen,
                      toggle: this.togglePanel,
                    })}
                  </ul>
                </nav>
              );
            })}
          </div>
        </dialog>
      </div>
    );
  }

  render() {
    const { mobile, role, model, variant } = this;
    const home = model.find(n => n.home);
    const nodes = model.filter(n => !n.home);

    // Merged into another nav's mobile menu
    if (mobile && role === 'merged') {
      return <Host hidden></Host>;
    }

    return (
      <Host>
        {mobile
          ? this.renderMobile()
          : variant === 'top'
            ? this.renderTopDesktop(home, nodes)
            : this.renderSideDesktop(home, nodes)}
      </Host>
    );
  }
}
