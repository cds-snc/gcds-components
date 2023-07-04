import { Component, Element, Host, Prop, State, Method, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-nav-link',
  styleUrl: 'gcds-nav-link.css',
  shadow: true
})
export class GcdsNavLink {
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

  /**
  * Style of nav to render based on parent
  */
  @State() navStyle: string;

  /**
  * Focus the link element
  */
  @Method()
  async focusLink() {
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

    if (this.el.closest("gcds-top-nav")) {
      if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
        this.navStyle = this.el.slot == "home" ? "topnav gcds-nav-link--home" : "topnav";
      } else {
        this.navStyle = "dropdown";
      }
    } else {
      this.navStyle = "sidenav";
    }
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
        class={`gcds-nav-link--${this.navStyle}`}
      >
        <a
          class="gcds-nav-link"
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
