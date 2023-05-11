import { Component, Element, Host, Prop, State, Listen, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

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
  * Language of rendered component
  */
  @State() menuItems = [];

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

  @Listen("keydown", {target: 'document'})
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      let key = e.keyCode || e.which;
      let currentIndex = this.menuItems.indexOf(document.activeElement);
      let activeElement = this.menuItems[currentIndex];

      // Down arrow
      if (key == 40) {
        e.preventDefault();

        // If on last item, jump to first item
        if (currentIndex + 1 > this.menuItems.length - 1) {

          if (this.menuItems[0].nodeName == "GCDS-MENU-LINK") {
            (this.menuItems[0] as HTMLGcdsMenuLinkElement).focusLink();
          } else if (this.menuItems[0].nodeName == "GCDS-MENU-GROUP") {
            (this.menuItems[0] as HTMLGcdsMenuGroupElement).focusTrigger();
          }

        // Jump to next item
        } else {

          if (this.menuItems[currentIndex + 1].nodeName == "GCDS-MENU-LINK") {
            (this.menuItems[currentIndex + 1] as HTMLGcdsMenuLinkElement).focusLink();
          } else if (this.menuItems[currentIndex + 1].nodeName == "GCDS-MENU-GROUP") {
            (this.menuItems[currentIndex + 1] as HTMLGcdsMenuGroupElement).focusTrigger();
          }

        }
        
      // Up arrow
      } else if (key == 38) {
        e.preventDefault();

        // If on first item, jump to last
        if (currentIndex - 1 < 0) {

          if (this.menuItems[this.menuItems.length - 1].nodeName == "GCDS-MENU-LINK") {
            (this.menuItems[this.menuItems.length - 1] as HTMLGcdsMenuLinkElement).focusLink();
          } else if (this.menuItems[this.menuItems.length - 1].nodeName == "GCDS-MENU-GROUP") {
            (this.menuItems[this.menuItems.length - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
          }

        // Jump to previous item
        } else {

          if (this.menuItems[currentIndex - 1].nodeName == "GCDS-MENU-LINK") {
            (this.menuItems[currentIndex - 1] as HTMLGcdsMenuLinkElement).focusLink();
          } else if (this.menuItems[currentIndex - 1].nodeName == "GCDS-MENU-GROUP") {
            (this.menuItems[currentIndex - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
          }

        }

      // Right arrow
      } else if (key == 39) {
        e.preventDefault();

        // If current item is group-menu trigger
        if (activeElement.nodeName == "GCDS-MENU-GROUP") {
          let groupTrigger = activeElement as HTMLGcdsMenuGroupElement;

          if (!groupTrigger.open) {
            await groupTrigger.toggleMenu();

            if (groupTrigger.children[0].nodeName == "GCDS-MENU-GROUP") {
              setTimeout(() => {
                (groupTrigger.children[0] as HTMLGcdsMenuGroupElement).focusTrigger();
              }, 10);
            } else if (groupTrigger.children[0].nodeName == "GCDS-MENU-LINK") {
              setTimeout(() => {
                (groupTrigger.children[0] as HTMLGcdsMenuLinkElement).focusLink();
              }, 10);
            }

            this.updateMenuItemQueue(groupTrigger, true)
          }
        }

      // Left || ESC
      } else if (key == 37 || key == 27) {
        e.preventDefault();

        if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
          let groupTrigger = activeElement as HTMLGcdsMenuGroupElement;

          await groupTrigger.toggleMenu();

          if (groupTrigger.parentNode.nodeName == "GCDS-MENU-GROUP") {
            this.updateMenuItemQueue(groupTrigger.parentNode, true);
          } else if (groupTrigger.parentNode.nodeName == "GCDS-SITE-MENU1") {
            this.updateMenuItemQueue(groupTrigger.parentNode);
          }
          
        } else if (activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {

          let groupTrigger = activeElement.parentNode as HTMLGcdsMenuGroupElement;
          await groupTrigger.toggleMenu();
          groupTrigger.focusTrigger();

          if (groupTrigger.parentNode.nodeName == "GCDS-MENU-GROUP") {
            this.updateMenuItemQueue(groupTrigger.parentNode, true);
          } else if (groupTrigger.parentNode.nodeName == "GCDS-SITE-MENU1") {
            this.updateMenuItemQueue(groupTrigger.parentNode);
          }
        }

      // Tab
      } else if (key == 9) {
        if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
          //(activeElement as HTMLGcdsMenuGroupElement).toggleMenu();
        } else if(activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {

          e.preventDefault();

          let groupTrigger = activeElement.parentNode as HTMLGcdsMenuGroupElement;
          await groupTrigger.toggleMenu();
          groupTrigger.focusTrigger();

          if (groupTrigger.parentNode.nodeName == "GCDS-MENU-GROUP") {
            this.updateMenuItemQueue(groupTrigger.parentNode, true);
          } else if (groupTrigger.parentNode.nodeName == "GCDS-SITE-MENU1") {
            this.updateMenuItemQueue(groupTrigger.parentNode);
          }
        }
      
      // Enter || Spacebar
      } else if (key == 13 || key == 32) {
        if (activeElement.nodeName == "GCDS-MENU-GROUP") {
          e.preventDefault();

          if (activeElement.hasAttribute("open")) {
            await (activeElement as HTMLGcdsMenuGroupElement).toggleMenu();

            if (activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {
              this.updateMenuItemQueue(activeElement.parentNode, true);
            } else if (activeElement.parentNode.nodeName == "GCDS-SITE-MENU1") {
              this.updateMenuItemQueue(activeElement.parentNode);
            }

          } else {
            await (activeElement as HTMLGcdsMenuGroupElement).toggleMenu();

            if (activeElement.children[0].nodeName == "GCDS-MENU-GROUP") {
              setTimeout(() => {
                (activeElement.children[0] as HTMLGcdsMenuGroupElement).focusTrigger();
              }, 10);
            } else if (activeElement.children[0].nodeName == "GCDS-MENU-LINK") {
              setTimeout(() => {
                (activeElement.children[0] as HTMLGcdsMenuLinkElement).focusLink();
              }, 10);
            }

            this.updateMenuItemQueue(activeElement, true);
          }

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
  * Index available menu-items
  */
  async getMenuItems(el) {
    let indexedItems: Array<any> = Array.from(el.children);
    let length = indexedItems.length;

    for (let i = 0; i < length; i++) {
      if (indexedItems[i].nodeName == "GCDS-MENU-GROUP" && (indexedItems[i] as HTMLGcdsMenuGroupElement).open) {
        let groupChildren = await this.getMenuItems(indexedItems[i]);
        indexedItems.splice(i +1, 0, ...groupChildren);
      }
    }

    return indexedItems;
  }

  @Method()
  async updateMenuItemQueue(el, includeElement?: boolean) {
    if (includeElement) {
      let childElements = await this.getMenuItems(el);
      this.menuItems = [el, ...childElements];
    } else {
      this.menuItems = await this.getMenuItems(el);
    }
    console.log(this.menuItems)
  }

  // async getMenuItems(el) {
  //   let indexedItems: Array<any> = Array.from(el.children);

  //   for (let i = 0; i < indexedItems.length; i++) {
  //     if (indexedItems[i].nodeName == "GCDS-MENU-GROUP") {
  //       let groupElement = indexedItems[i];
  //       let groupChildren = await this.getMenuItems(groupElement);
  //       indexedItems[i] = [groupElement, ...groupChildren];
  //     }
  //   }

  //   return indexedItems;
  // }
  
  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    await this.updateMenuItemQueue(this.el);
  }

  render() {
    const { label, alignment } = this;
    return (
      <Host
        role="navigation"
        aria-label={label}
      >
        <div class="gcds-site-menu__container">
          <ul
            role="menu"
            class={`menu-container__list menu-list--${alignment}`}
          >
            <slot></slot>
          </ul>
        </div>
      </Host>
    );
  }

}
