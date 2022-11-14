import { Component, Host, Element, Watch, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

import SignatureEn from './assets/sig-blk-en.svg';
import SignatureFr from './assets/sig-blk-fr.svg';
import WordmarkEn from './assets/wmms-spl-en.svg';
import WordmarkFr from './assets/wmms-spl-fr.svg';

@Component({
  tag: 'gcds-signature',
  styleUrl: 'gcds-signature.css',
})
export class GcdsSignature {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
  * The type of graphic to render
  */
  @Prop({ reflect: true, mutable: true }) type: 'signature' | 'wordmark';

  @Watch('type')
  validateType(newValue: string) {
    if (newValue != 'signature' && newValue != 'wordmark') {
      this.type = 'signature';
    }
  }

  /**
  * The colour variant to render
  */
  @Prop({ reflect: true, mutable: true }) variant: 'colour' | 'white';

  @Watch('variant')
  validateVariant(newValue: string) {
    if (newValue != 'colour' && newValue != 'white') {
      this.variant = 'colour';
    }
  }

  /**
  * Has link to canada.ca. Only applies to signature
  */
  @Prop({ mutable: true }) hasLink: boolean;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateType;
    this.validateVariant;
  }

  private get selectSVG() {
    switch(this.type) {
      case 'wordmark':
        if (this.lang == 'en') {
          return WordmarkEn;
        } else {
          return WordmarkFr;
        }
      case 'signature':
      default:
        if (this.lang == 'en') {
          return SignatureEn;
        } else {
          return SignatureFr;
        }
    }
  }

  render() {
    const { type, hasLink, lang, selectSVG } = this;
    const linkText = lang == "en" ? "https://canada.ca/en.html" : "https://canada.ca/fr.html";

    return (
      <Host>
        {hasLink && type === 'signature' ? (
          <a href={linkText} innerHTML={selectSVG}></a>
        ) : (
          <div innerHTML={selectSVG}></div>
        )}
      </Host>
    );
  }
}
