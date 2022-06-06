import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

const i18n = {
  "en": {
    "skip": "Skip to main content"
  },
  "fr": {
    "skip": "Passer au contenu principal"
  }
}

@Component({
  tag: 'gcds-header',
  styleUrl: 'gcds-header.css',
  shadow: true,
})
export class GcdsHeader {

  private lang: string;

  @Element() el: HTMLElement;

  /**
  * GcdsLangToggle - The href attribute specifies the URL of the opposite language page
  */
  @Prop({ reflect: false, mutable: false }) langHref: string;

  /**
  * GcdsSignature - The variant of the Government of Canada signature
  */
  @Prop({ reflect: false, mutable: false }) signatureVariant: 'colour' | 'white';
  /**
  * GcdsSignature - GCDS signature links to Canada.ca
  */
  @Prop({ reflect: false, mutable: false }) signatureHasLink: boolean = true;
  
  /**
  * Top navigation - Skip to content href
  */
  @Prop({ reflect: false, mutable: false }) skipToHref: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  private get renderTopNav() {
    if (!!this.el.querySelector('[slot="topnav"]')) {
      return <slot name="topnav"></slot>;
    } else if(this.skipToHref) {
      return (
      <nav class="topnav">
        <gcds-button
          button-type="link"
          button-role="skip-to-content"
          href={this.skipToHref}
        >
          {i18n[this.lang].skip}
        </gcds-button>
      </nav>);
    } else {
      return;
    }
  }

  private get renderToggle() {
    if (!!this.el.querySelector('[slot="toggle"]')) {
      return <slot name="toggle"></slot>;
    } else if(this.langHref) {
      return (
        <section class="toggle">
          <gcds-lang-toggle
            lang={this.lang}
            href={this.langHref}
          ></gcds-lang-toggle>
        </section>);
    } else {
      return;
    }
  }

  private get renderSignature() {
    let signVariant = this.signatureVariant ? this.signatureVariant : "white";

    if (!!this.el.querySelector('[slot="signature"]')) {
      return <slot name="signature"></slot>;
    } else {
      return (
      <div class="signature">
        <gcds-signature
          type="signature"
          variant={signVariant}
          has-link={this.signatureHasLink}
          lang={this.lang}
        ></gcds-signature>
      </div>);
    }
  }

  private get renderSearch() {
    if (!!this.el.querySelector('[slot="search"]')) {
      return <slot name="search"></slot>;
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
    const { renderTopNav, renderToggle, renderSignature, renderSearch, hasSearch, hasBanner, hasBreadcrumb } = this;
    return (
      <Host
        role="banner"
      >
        {renderTopNav}
        {hasBanner ?
          <slot name="banner"></slot>
        :
          null
        } 
        <div class="brand">
          <div class={`brand__container ${!hasSearch ? 'simple' : '' }`}>
            {renderToggle}
            {renderSignature}
            {renderSearch}
          </div>
        </div>
        <slot name="menu"></slot>
        {hasBreadcrumb ? 
            <div class="container">
              <slot name="breadcrumb"></slot>
            </div>
          :
            null
        }
        
      </Host>
    );
  }

}
