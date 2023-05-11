import { Component, Element, Host, Prop, State, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-menu-link',
  styleUrl: 'gcds-menu-link.css',
  shadow: true
})
export class GcdsMenuLink {
  @Element() el: HTMLElement;

  private linkElement: HTMLElement

  /**
   * Link href
   */
  @Prop({ reflect: true }) href!: string;

  /**
   * Current page flag
   */
  @Prop({ reflect: true }) current: boolean;

  /**
  * Language of rendered component
  */
  @State() lang: string;

  @Method()
  focusLink() {
    this.linkElement.focus();
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
  }

  render() {
    const { current, href } = this;

    let linkAttrs = {};

    if (current) {
      linkAttrs["aria-current"] = "page";
    }

    return (
      <Host
        role="presentation"
      >
        <a
          class="gcds-menu-link"
          href={href}
          {...linkAttrs}
          role="menuitem"
          ref={element => this.linkElement = element as HTMLElement}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }

}
