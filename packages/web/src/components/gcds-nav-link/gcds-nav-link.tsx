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
import i18n from '../gcds-link/i18n/i18n'

/**
 * Navigation link within a navigation group or menu, allowing users to navigate to different sections of a website or application.
 *
 * @slot default - Slot for the navigation link content.
 */
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
   * Whether the link is external or not
   */
  @Prop() external?: boolean = false;

  /**
   * Emitted when the link has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<string>;

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

  /**
   * Returns the correct icon for the link, if applicable.
   * If none of these conditions match, no icon is rendered.
   */
  private getIcon() {
    const { external, lang } = this;
    const isExternal = external;

    if (isExternal) {
      return <gcds-icon name="external" label={i18n[lang].external} />;
    }

    return null;
  }

  render() {
    const { current, external, href } = this;

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
          tabIndex={0}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => emitEvent(e, this.gcdsClick, href)}
          ref={element => (this.linkElement = element as HTMLElement)}
        >
          <slot></slot>
          {this.getIcon() && (
            <span class="text-icon-group">&nbsp;{this.getIcon()}</span>
          )}
        </a>
      </Host>
    );
  }
}
