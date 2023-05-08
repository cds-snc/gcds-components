import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

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
