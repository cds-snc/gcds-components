import {
  Component,
  Element,
  Host,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

/**
 * The header is the responsive Government of Canada branded header landmark.
 *
 * @slot banner - Slot to add a banner across the top of the header.
 * @slot breadcrumb - Slot to add breadcrumbs at the bottom of the header.
 * @slot menu - Slot to add a menu below the divider line.
 * @slot search - Slot to add a search field to the right of the header.
 * @slot skip-to-nav - Slot to add a hidden skip to content navigation at the top of the header.
 * @slot signature - Slot to replace Government of Canada signature.
 * @slot toggle - Slot to add a custom language toggle in the top-right of the header.
 * @slot account - Slot to add a custom account link in the bottom-right of the header.
 */
@Component({
  tag: 'gcds-header',
  styleUrl: 'gcds-header.css',
  shadow: true,
})
export class GcdsHeader {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * GcdsLangToggle - The href attribute specifies the URL of the opposite language page
   */
  @Prop({ reflect: true, mutable: false }) langHref!: string;

  /**
   * GcdsSignature - GCDS signature links to Canada.ca
   */
  @Prop({ reflect: false, mutable: false }) signatureHasLink: boolean = true;

  /**
   * Top navigation - Skip to content href
   */
  @Prop({ reflect: false, mutable: false }) skipToHref!: string;

  /**
   * Events
   */

  /**
   * Emitted when the link has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the link loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  @Event() gcdsClick!: EventEmitter<string>;

  /**
   * Language of rendered component
   */
  @State() lang: string;

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
  }

  private get renderSkipToNav() {
    if (this.el.querySelector('[slot="skip-to-nav"]')) {
      return <slot name="skip-to-nav"></slot>;
    } else if (this.skipToHref) {
      return (
        <nav
          class="gcds-header__skip-to-nav"
          aria-label={i18n[this.lang].skipLabel}
        >
          <gcds-link href={this.skipToHref}>{i18n[this.lang].skip}</gcds-link>
        </nav>
      );
    } else {
      return;
    }
  }

  private get renderToggle() {
    if (this.el.querySelector('[slot="toggle"]')) {
      return <slot name="toggle"></slot>;
    } else if (this.langHref) {
      return (
        <section class="brand__toggle">
          <gcds-lang-toggle
            lang={this.lang}
            href={this.langHref}
          ></gcds-lang-toggle>
        </section>
      );
    } else {
      return;
    }
  }

  private get renderSignature() {
    if (this.el.querySelector('[slot="signature"]')) {
      return <slot name="signature"></slot>;
    } else {
      return (
        <div class="brand__signature">
          <gcds-signature
            type="signature"
            has-link={this.signatureHasLink}
            lang={this.lang}
          ></gcds-signature>
        </div>
      );
    }
  }

  private get renderSearch() {
    if (this.el.querySelector('[slot="search"]')) {
      return (
        <div class="brand__search">
          <slot name="search"></slot>
        </div>
      );
    } else {
      return;
    }
  }

  private get hasSearch() {
    return !!this.el.querySelector('[slot="search"]');
  }

  private get hasBanner() {
    return !!this.el.querySelector('[slot="banner"]');
  }

  private get hasBreadcrumb() {
    return !!this.el.querySelector('[slot="breadcrumb"]');
  }

  private get hasAccount() {
    return !!this.el.querySelector('[slot="account"]');
  }

  private get hasThemeTopicMenu() {
    return !!this.el.querySelector('gcds-topic-menu[slot="menu"]');
  }

  render() {
    const {
      renderSkipToNav,
      renderToggle,
      renderSignature,
      renderSearch,
      hasSearch,
      hasBanner,
      hasBreadcrumb,
      hasAccount,
      hasThemeTopicMenu,
    } = this;
    return (
      <Host role="banner">
        {renderSkipToNav}
        {hasBanner ? <slot name="banner"></slot> : null}
        <div class="gcds-header__brand">
          <div
            class={`brand__container ${!hasSearch ? 'container--simple' : ''}`}
          >
            {renderToggle}
            {renderSignature}
            {renderSearch}
          </div>
        </div>

        {hasThemeTopicMenu ? (
          <div class="gcds-header__container--menu">
            <slot name="menu"></slot>
            {hasAccount ? <slot name="account"></slot> : null}
          </div>
        ) : <slot name="menu"></slot>}

        {hasBreadcrumb || (!hasBreadcrumb && !hasThemeTopicMenu && hasAccount) ? (
          <div class="gcds-header__container--breadcrumbs">
            {hasBreadcrumb ? <slot name="breadcrumb"></slot> : null}
            {hasAccount && !hasThemeTopicMenu ? <slot name="account"></slot> : null}
          </div>
        ) : null}
      </Host>
    );
  }
}
