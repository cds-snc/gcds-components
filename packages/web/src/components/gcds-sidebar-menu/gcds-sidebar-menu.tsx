import { Component, Element, Host, Prop, State, Listen, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { handleKeyDownMenu, getMenuItems, configureMobileMenu, unpackMobileMenu } from '../../utils/menus/utils';

@Component({
  tag: 'gcds-sidebar-menu',
  styleUrl: 'gcds-sidebar-menu.css',
  shadow: true,
})
export class GcdsSidebarMenu {
  @Element() el: HTMLElement;

  /**
   * Label for navigation landmark
   */
  @Prop() label!: string;

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
  * Current size based on widnow size
  */
  @State() menuSize: 'desktop' | 'mobile';

  @Listen("keydown", {target: 'document'})
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
    const menu = this.el as HTMLGcdsSidebarMenuElement;

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
    const { label } = this;
    return (
      <Host>
        <nav
          aria-label={label}
        >
          <h2 class="gcds-sidebar-menu__heading">
            {label}
          </h2>
          <ul
            role="menu"
            class="gcds-sidebar-menu__list"
          >
            <slot></slot>
          </ul>
        </nav>
      </Host>
    );
  }
}
