import { Component, Element, Host, Prop, State, Listen, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig, handleKeyDownMenu, getMenuItems } from '../../utils/utils';

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
  @Prop() label: string;

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
        await this.updateMenuItemQueue(this.el, true);
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

  @Method()
  async updateMenuItemQueue(el, includeElement?: boolean) {
    if (includeElement) {
      let childElements = await getMenuItems(el);
      this.menuItems = [el, ...childElements];
    } else {
      this.menuItems = await getMenuItems(el);
    }
    console.log(this.menuItems)
  }
  
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    await this.updateMenuItemQueue(this.el);
  }

  render() {
    const { label } = this;
    return (
      <Host
        role="navigation"
        aria-label={label}
      >
        <ul
          role="menu"
          class="gcds-sidebar-menu__list"
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
