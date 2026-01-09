import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  Listen,
  h,
} from '@stencil/core';
import {
  assignLanguage,
  observerConfig,
  emitEvent,
  closestElement,
} from '../../utils/utils';

/**
 * Navigational group with expandable or dropdown functionality, allowing for better organization of navigation links.
 *
 * @slot default - Slot for the list of navigation links.
 */
@Component({
  tag: 'gcds-nav-group',
  styleUrl: 'gcds-nav-group.css',
  shadow: true,
})
export class GcdsNavGroup {
  @Element() el: HTMLElement;

  private triggerElement?: HTMLElement;

  /**
   *  Label for the expanded button trigger
   */
  @Prop({ reflect: true }) closeTrigger?: string;

  /**
   * Label for the nav group menu
   */
  @Prop({ reflect: true }) menuLabel!: string;

  /**
   *  Label for the collapsed button trigger
   */
  @Prop({ reflect: true }) openTrigger!: string;

  /**
   * Has the nav group been expanded
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
   * Emitted when the button has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Emitted when the button has been focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the button blurs.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Style of nav to render based on parent
   */
  @State() navStyle: string;

  /**
   * Position of nav for mobile menu logic
   */
  @State() navPosiiton: number;

  // Close dropdowns on focusout when on desktop screen size
  @Listen('focusout', { target: 'document' })
  async focusOutListener(e) {
    if (
      (e.target === this.el || this.el.contains(e.target)) &&
      !this.el.contains(e.relatedTarget) &&
      this.navStyle.includes('dropdown') &&
      this.open &&
      window.innerWidth >= 1024
    ) {
      setTimeout(() => this.toggleNav(), 200);
    }
  }

  /**
   * Focus button element
   */
  @Method()
  async focusTrigger() {
    this.triggerElement.focus();
  }

  /**
   * Toggle the nav open or closed
   */
  @Method()
  async toggleNav() {
    this.open = !this.open;

    // Close any child nav-groups
    for (let i = 0; i < this.el.children.length; i++) {
      if (
        this.el.children[i].nodeName == 'GCDS-NAV-GROUP' &&
        this.el.children[i].hasAttribute('open')
      ) {
        (this.el.children[i] as HTMLGcdsNavGroupElement).toggleNav();
      }
    }

    // Dropdown exception - Close child dropdown nav-groups if opened in mobile menu
    if (this.el.classList.contains('gcds-mobile-nav-topnav')) {
      const topnav = closestElement('gcds-top-nav', this.el);
      const childNavGroups = topnav.querySelectorAll('gcds-nav-group');
      childNavGroups.forEach(navGroup => {
        if (navGroup.hasAttribute('open')) {
          navGroup.toggleNav();
        }
      });
    }

    // Remove ability to scroll page when mobile menu is open
    if (this.el.classList.contains('gcds-mobile-nav')) {
      if (this.open) {
        this.navPosiiton = window.scrollY;
        document.body.style.position = 'fixed';
      } else {
        document.body.style.removeProperty('position');
        window.scrollTo(0, this.navPosiiton);
      }
    }
  }

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
      // Set the navStyle to 'dropdown' and add a class for alignment if specified
      this.navStyle = 'dropdown';

      // Get the alignment value from the parent + append the corresponding class
      const alignment = (this.el.parentNode as HTMLElement).getAttribute(
        'align',
      );

      if (alignment === 'end') {
        this.navStyle += ' dropdown-right';
      }

      if (this.open) {
        this.open = false;
      }
    } else {
      this.navStyle = 'expandable';
    }

    if (
      this.el.parentNode.nodeName == 'GCDS-NAV-GROUP' &&
      !(this.el.parentNode as HTMLElement).classList.contains(
        'gcds-mobile-nav',
      ) &&
      this.el.closest('gcds-top-nav')
    ) {
      this.el.remove();
    }
  }

  render() {
    const { closeTrigger, menuLabel, open, openTrigger } = this;

    return (
      <Host role="listitem" open={open}>
        <button
          aria-haspopup="true"
          tabIndex={0}
          aria-expanded={open.toString()}
          ref={element => (this.triggerElement = element as HTMLElement)}
          class={`gcds-nav-group__trigger gcds-trigger--${this.navStyle}`}
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => {
            const event = emitEvent(e, this.gcdsClick);
            if (event) {
              this.toggleNav();
            }
          }}
        >
          <gcds-icon
            name={
              this.navStyle === 'expandable'
                ? open
                  ? 'chevron-down'
                  : 'chevron-right'
                : open
                  ? 'chevron-up'
                  : 'chevron-down'
            }
          ></gcds-icon>
          {closeTrigger && open ? closeTrigger : openTrigger}
        </button>
        <ul
          aria-label={menuLabel}
          class={`gcds-nav-group__list gcds-nav--${this.navStyle}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
