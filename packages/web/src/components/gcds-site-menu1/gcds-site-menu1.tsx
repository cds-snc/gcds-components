import { Component, Element, Host, Prop, State, Listen, Method, h } from '@stencil/core';
import { assignLanguage, handleKeyDownMenu, observerConfig, getMenuItems, configureMobileMenu, unpackMobileMenu } from '../../utils/utils';

@Component({
  tag: 'gcds-site-menu1',
  styleUrl: 'gcds-site-menu1.css',
  shadow: true,
})
export class GcdsSiteMenu1 {
  @Element() el: HTMLElement;

  /**
   * Label for navigation landmark
   */
  @Prop() label: string;

  /**
   * Menu alignment
   */
  @Prop() alignment: 'left' | 'center' | 'right' | 'split' = 'left';

  /**
   * Sticky navigation flag
   */
  @Prop() position: 'static' | 'sticky' = 'static';

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
  * Queue of menu items for keyboard navigation
  */
  @State() menuItems = [];

  /**
  * Current size state based on widnow size
  */
  @State() menuSize: 'desktop' | 'mobile';

  @Listen("focusout", { target: "document" })
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      for (let i = 0; i < this.el.children.length; i++) {
        if (this.el.children[i].nodeName == "GCDS-MENU-GROUP" && (this.el.children[i].hasAttribute("open"))) {
          await (this.el.children[i] as HTMLGcdsMenuGroupElement).toggleMenu();
          await this.updateMenuItemQueue(this.el);
        }
      }
    }
  }

  @Listen("keydown", { target: 'document' })
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      handleKeyDownMenu(e, this.el, this.menuItems);
    }
  }

  @Listen("gcdsClick", { target: 'document' })
  async gcdsClickListener(e) {
    if (this.el.contains(e.target)) {
      if (e.target.hasAttribute("open")) {
        await this.updateMenuItemQueue(this.el);
        (e.target as HTMLGcdsMenuGroupElement).focusTrigger();
      } else {
        await this.updateMenuItemQueue(e.target, true);
        if (e.target.children[0].nodeName == "GCDS-MENU-GROUP") {
          setTimeout(() => {
            (e.target.children[0] as HTMLGcdsMenuGroupElement).focusTrigger();
          }, 10);
        } else if (e.target.children[0].nodeName == "GCDS-MENU-LINK") {
          setTimeout(() => {
            (e.target.children[0] as HTMLGcdsMenuLinkElement).focusLink();
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
  async updateMenuSize(size) {
    this.menuSize = size;
  }

  /*
  * Update item queue for keyboard navigation based on passed element
  */
  @Method()
  async updateMenuItemQueue(el, includeElement?: boolean) {
    if (includeElement) {
      let childElements = await getMenuItems(el);
      this.menuItems = [el, ...childElements];
    } else {
      this.menuItems = await getMenuItems(el);
    }
  }
  
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');

    if (mediaQuery.matches) {
      this.menuSize = 'desktop';
    } else {
      this.menuSize = 'mobile';
      await configureMobileMenu(this.el);
    }
  }

  async componentDidLoad() {
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');
    const menu = this.el as HTMLGcdsSiteMenu1Element;

    await this.updateMenuItemQueue(this.el);

    mediaQuery.addEventListener("change", async function(e) {
      if (e.matches) {
        menu.updateMenuSize("desktop");
        await unpackMobileMenu(menu);
        await menu.updateMenuItemQueue(menu);
      } else {
        menu.updateMenuSize("mobile");
        await configureMobileMenu(menu);
        await menu.updateMenuItemQueue(menu);
      }
    });
  }

  render() {
    const { label, alignment } = this;
    return (
      <Host
        role="navigation"
        aria-label={label}
      >
        <slot name="left"></slot>
        <div class="gcds-site-menu__container">
          <ul
            role="menu"
            class={`menu-container__list menu-list--${alignment}`}
          >
            <slot></slot>
          </ul>
        </div>
        <slot name="right"></slot>
      </Host>
    );
  }
}
