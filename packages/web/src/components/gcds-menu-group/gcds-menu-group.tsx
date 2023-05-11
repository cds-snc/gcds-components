import { Component, Element, Host, Prop, State, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-menu-group',
  styleUrl: 'gcds-menu-group.css',
  shadow: true,
})
export class GcdsMenuGroup {
  @Element() el: HTMLElement;

  private triggerElement?: HTMLElement;
  private listElement?: HTMLElement;

  /**
   * heading for the menu group
   */
  @Prop({ reflect: true }) heading!: string;

  /**
   * Has the menu group been expanded
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
  * Style of menu to render based on parent
  */
  @State() menuStyle: string;

  @Method()
  focusTrigger() {
    this.triggerElement.focus();
  }

  @Method()
  async toggleMenu() {
    this.open = !this.open

    for (let i = 0; i < this.el.children.length; i++) {
      if (this.el.children[i].nodeName == "GCDS-MENU-GROUP" && (this.el.children[i].hasAttribute("open"))) {
        (this.el.children[i] as HTMLGcdsMenuGroupElement).toggleMenu();
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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    if (this.el.parentNode.nodeName == "GCDS-SITE-MENU1") {
        this.menuStyle = "dropdown"
    } else {
        this.menuStyle = "expandable"
    }

    // if (this.menuStyle == "dropdown") {
    //   for (let i = 0; i < this.el.children.length; i++) {
    //     if (this.el.children[i].nodeName == "GCDS-MENU-GROUP") {
    //       this.el.children[i].remove();
    //     }
    //   }
    // }
  }

  render() {
    const { heading, open } = this;
    return (
      <Host
        role="presentation"
        open={open}
      >
        <button
          aria-haspopup="true"
          aria-expanded={open.toString()}
          role="menuitem"
          ref={element => this.triggerElement = element as HTMLElement}
          class={`gcds-menu-group__trigger gcds-trigger--${this.menuStyle}`}
          onClick={() => this.toggleMenu()}
        >
          {heading}
        </button>
        <ul
          role="menu"
          ref={element => this.listElement = element as HTMLElement}
          class={`gcds-menu-group__list gcds-menu--${this.menuStyle}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
