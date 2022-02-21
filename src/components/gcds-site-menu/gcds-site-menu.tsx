import { Component, Element, Host, Prop, h } from '@stencil/core';
import { 
  h2MenuAddUpDownArrowsToMainMenuItems, 
  h2MenuTabOrder, 
  h2MenuAddRightArrowToMainMenuItems, 
  h2MenuEnableSubmenuTriggers, 
  h2MenuAddMobileMenuTrigger, 
  h2MenuAddPageAnchor 
} from "./utils/module";

import styles from './menu-list.css';

@Component({
  tag: 'gcds-site-menu',
  styleUrl: 'gcds-site-menu.css',
  shadow: true,
})
export class GcdsSiteMenu {

  private lang: string;

  @Element() el: HTMLElement;

  /**
   * Desktop layout
   */
   @Prop() desktopTask: 'topbar' | 'sidebar' = 'topbar';

  /**
   * Mobile layout
   */
   @Prop() mobileTask: 'drawer' | 'toolbar' = 'drawer';

  /**
   * Variant
   */
   @Prop() variant: 'left' | 'center' | 'right' | 'split' = 'left';

  /**
   * Sticky navigation flag
   */
   @Prop() sticky: boolean;

  private setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  private appendSubMenuButton(el) {
    var button = document.createElement("button");
    this.setAttributes(button, {"aria-expanded": "false", "data-h2-submenu-trigger": ""});

    var a11yText = document.createElement("span");
    a11yText.innerHTML = `Open or close ${el.textContent}'s submenu.`;
    a11yText.setAttribute("data-h2-submenu-trigger-accessibility-text", "");

    var addIcon = document.createElement("span");
    this.setAttributes(addIcon, {"aria-hidden": "true", "data-h2-submenu-trigger-add-icon": ""});
    addIcon.textContent = "+";

    var removeIcon = document.createElement("span");
    this.setAttributes(removeIcon, {"aria-hidden": "true", "data-h2-submenu-trigger-remove-icon": ""});
    removeIcon.textContent = "-";

    button.append(a11yText, addIcon, removeIcon);
    el.parentNode.append(button);
  }

  private async configureMenu() {
    var elementChildren = this.el.children;
    for (var i = 0; i < elementChildren.length; i++) {
      if (elementChildren[i].nodeName == "UL") {
        this.setAttributes(elementChildren[i], {"data-h2-menulist": "", "role": "menu"});
        elementChildren[i].querySelectorAll("ul").forEach((list) => {
          this.setAttributes(list, {"data-h2-menulist": "", "role": "menu"});
        });
        elementChildren[i].querySelectorAll("li").forEach((listitem) => {
          listitem.setAttribute("role", "presentation");
        });
        elementChildren[i].querySelectorAll("a").forEach((menuitem) => {
          menuitem.setAttribute("role", "menuitem");
          if (menuitem.parentNode.children.length > 1) {
            this.setAttributes(menuitem, {"aria-expanded": "false", "aria-haspopup": "true"});
            this.appendSubMenuButton(menuitem);
            if (menuitem.closest("ul").parentNode.nodeName == "li") {
              menuitem.setAttribute("tabindex", "-1");
            }
          }
        });
      }
    }
  }

  async componentWillLoad() {

    if(this.el.getAttribute("lang") == "en" || !this.el.getAttribute("lang")) {
      this.lang = "en";
    } else {
      this.lang = "fr";
    }

    let style = document.createElement('style');
    style.textContent = styles;
    this.el.append(style);

    await this.configureMenu();
  }

  componentDidLoad() {
    h2MenuAddUpDownArrowsToMainMenuItems("all");
    h2MenuTabOrder("all");
    h2MenuAddRightArrowToMainMenuItems("all");
    h2MenuEnableSubmenuTriggers("all");
    h2MenuAddMobileMenuTrigger("all");
    h2MenuAddPageAnchor("all");
  }

  render() {
    const desktopTask = this.desktopTask == 'topbar' ? 'top' : 'side';
    const sticky = this.sticky ? 'sticky' : '';
    return (
      <Host
        data-h2-menu-wrapper={`${desktopTask}(${this.variant}, ${sticky})`}
        lang={this.lang}
      >
        <button 
          aria-expanded="false"
          aria-label="Use the enter key to open or close the main menu."
          aria-haspopup="true"
          data-h2-mobile-menu-trigger
          type="button" role="button">
          <span data-h2-mobile-menu-trigger-open-label>Menu</span><span data-h2-mobile-menu-trigger-close-label>Close</span>
        </button>
        <nav 
          aria-label="Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu."
          data-h2-menu
        >
          <div data-h2-menu-container>
            <slot />
          </div>
        </nav>
        <slot name="main" />
      </Host>
    );
  }

}
