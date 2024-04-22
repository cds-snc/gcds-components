import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Method,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig, emitEvent } from '../../utils/utils';

@Component({
  tag: 'gcds-nav-link',
  styleUrl: 'gcds-nav-link.css',
  shadow: true,
})
export class GcdsNavLink {
  @Element() el: HTMLElement;

  private linkElement: HTMLElement;

  /**
   * Link href
   */
  @Prop({ reflect: true }) href!: string;

  /**
   * Current page flag
   */
  @Prop({ reflect: true }) current: boolean;

  /**
   * Emitted when the link has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Emitted when the link has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the link loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

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
    const observer = new MutationObserver(mutations => {
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

    if (this.el.closest('gcds-top-nav')) {
      if (this.el.parentNode.nodeName == 'GCDS-TOP-NAV') {
        this.navStyle = 'topnav';
      } else {
        this.navStyle = 'dropdown';
      }
    } else {
      this.navStyle = 'sidenav';
    }
  }

  render() {
    const { current, href } = this;

    const linkAttrs = {};

    if (current) {
      linkAttrs['aria-current'] = 'page';
    }

    return (
      <Host role="listitem">
        <a
          class={`gcds-nav-link gcds-nav-link--${this.navStyle}`}
          href={href}
          {...linkAttrs}
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => emitEvent(e, this.gcdsClick, href)}
          ref={element => (this.linkElement = element as HTMLElement)}
        >
          <slot></slot>
        </a>
      </Host>
    );
  }
}
