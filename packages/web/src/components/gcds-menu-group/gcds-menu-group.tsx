import { Component, Element, Host, Prop, State, h } from '@stencil/core';
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
    const { heading } = this;
    return (
      <Host
        role="presentation"
      >
        <button
          aria-haspopup="true"
          aria-expanded="false"
          role="menuitem"
          ref={element => this.triggerElement = element as HTMLElement}
          class="gcds-menu-group__trigger"
        >
          {heading}
        </button>
        <ul
          role="menu"
          ref={element => this.listElement = element as HTMLElement}
          class="gcds-menu-group__list"
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
