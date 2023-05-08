import { Component, Element, Host, Prop, State, h } from '@stencil/core';
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
