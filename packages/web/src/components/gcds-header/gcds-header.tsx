import { Component, Element, Host, Prop, h, State } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

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
   * GcdsSignature - The variant of the Government of Canada signature
   */
  @Prop({ reflect: false, mutable: false }) signatureVariant:
    | 'colour'
    | 'white';
  /**
   * GcdsSignature - GCDS signature links to Canada.ca
   */
  @Prop({ reflect: false, mutable: false }) signatureHasLink: boolean = true;

  /**
   * Top navigation - Skip to content href
   */
  @Prop({ reflect: false, mutable: false }) skipToHref!: string;

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
    const signVariant = this.signatureVariant
      ? this.signatureVariant
      : 'colour';

    if (this.el.querySelector('[slot="signature"]')) {
      return <slot name="signature"></slot>;
    } else {
      return (
        <div class="brand__signature">
          <gcds-signature
            type="signature"
            variant={signVariant}
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

  render() {
    const {
      renderSkipToNav,
      renderToggle,
      renderSignature,
      renderSearch,
      hasSearch,
      hasBanner,
      hasBreadcrumb,
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
        <slot name="menu"></slot>
        {hasBreadcrumb ? (
          <div class="gcds-header__container">
            <slot name="breadcrumb"></slot>
          </div>
        ) : null}
      </Host>
    );
  }
}
