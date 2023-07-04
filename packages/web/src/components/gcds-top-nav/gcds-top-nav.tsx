import { Component, Element, Host, Prop, State, Listen, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { handleKeyDownNav, getNavItems } from '../../utils/menus/utils';

@Component({
  tag: 'gcds-top-nav',
  styleUrl: 'gcds-top-nav.css',
  shadow: true,
})
export class GcdsTopNav {
  @Element() el: HTMLElement;

  /**
   * Label for navigation landmark
   */
  @Prop() label!: string;

  /**
   * Nav alignment
   */
  @Prop() alignment: 'left' | 'center' | 'right' = 'left';

  /**
   * Sticky navigation flag
   */
  @Prop() position: 'static' | 'sticky' = 'static';

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
  * Queue of nav items for keyboard navigation
  */
  @State() navItems = [];

  /**
  * Current size state based on widnow size
  */
  @State() navSize: 'desktop' | 'mobile';

  @Listen("focusout", { target: "document" })
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      for (let i = 0; i < this.el.children.length; i++) {
        if (this.el.children[i].nodeName == "GCDS-NAV-GROUP" && (this.el.children[i].hasAttribute("open"))) {
          await (this.el.children[i] as HTMLGcdsNavGroupElement).toggleNav();
          await this.updateNavItemQueue(this.el);
        }
      }
    }
  }

  @Listen("keydown", { target: 'document' })
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      handleKeyDownNav(e, this.el, this.navItems);
    }
  }

  @Listen("gcdsClick", { target: 'document' })
  async gcdsClickListener(e) {
    if (this.el.contains(e.target)) {
      if (e.target.hasAttribute("open")) {
        await this.updateNavItemQueue(this.el);
        (e.target as HTMLGcdsNavGroupElement).focusTrigger();
      } else {
        await this.updateNavItemQueue(e.target, true);
        if (e.target.children[0].nodeName == "GCDS-NAV-GROUP") {
          setTimeout(() => {
            (e.target.children[0] as HTMLGcdsNavGroupElement).focusTrigger();
          }, 10);
        } else if (e.target.children[0].nodeName == "GCDS-NAV-LINK") {
          setTimeout(() => {
            (e.target.children[0] as HTMLGcdsNavLinkElement).focusLink();
          }, 10);
        }
      }
    }
  }

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  /*
  * Pass new window size: desktop or mobile
  */
  @Method()
  async updateNavSize(size) {
    this.navSize = size;
  }

  /*
  * Update item queue for keyboard navigation based on passed element
  */
  @Method()
  async updateNavItemQueue(el, includeElement?: boolean) {
    if (includeElement) {
      let childElements = await getNavItems(el);
      this.navItems = [el, ...childElements];
    } else {
      this.navItems = await getNavItems(el);
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');

    if (mediaQuery.matches) {
      this.navSize = 'desktop';
    } else {
      this.navSize = 'mobile';
    }
  }

  async componentDidLoad() {
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    const nav = this.el as HTMLGcdsTopNavElement;

    await this.updateNavItemQueue(this.el);

    mediaQuery.addEventListener("change", async function(e) {
      if (e.matches) {
        nav.updateNavSize("desktop");
        await nav.updateNavItemQueue(nav);
      } else {
        nav.updateNavSize("mobile");
        await nav.updateNavItemQueue(nav);
      }
    });
  }

  render() {
    const { label, alignment } = this;
    return (
      <Host>
        <nav
          aria-label={label}
          class="gcds-top-nav__container"
        >
          <gcds-nav-group
            heading="Menu"
            class="gcds-mobile-nav gcds-mobile-nav-topnav"
          >
            <slot name="home"></slot>
            <ul
              role="menu"
              class={`nav-container__list nav-list--${alignment}`}
            >
              <slot></slot>
            </ul>
          </gcds-nav-group>
        </nav>
      </Host>
    );
  }
}
