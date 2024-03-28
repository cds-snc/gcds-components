import { Component, Host, Element, Watch, State, Prop, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

import SignatureEn from './assets/sig-blk-en.svg';
import SignatureFr from './assets/sig-blk-fr.svg';
import WordmarkEn from './assets/wmms-spl-en.svg';
import WordmarkFr from './assets/wmms-spl-fr.svg';

@Component({
  tag: 'gcds-signature',
  styleUrl: 'gcds-signature.css',
  shadow: true,
})
export class GcdsSignature {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * The type of graphic to render
   */
  @Prop({ reflect: true, mutable: true }) type: 'signature' | 'wordmark' =
    'signature';

  @Watch('type')
  validateType(newValue: string) {
    if (newValue != 'signature' && newValue != 'wordmark') {
      this.type = 'signature';
    }
  }

  /**
   * The colour variant to render
   */
  @Prop({ reflect: true, mutable: true }) variant: 'colour' | 'white' =
    'colour';

  @Watch('variant')
  validateVariant(newValue: string) {
    if (newValue != 'colour' && newValue != 'white') {
      this.variant = 'colour';
    }
  }

  /**
   * Has link to canada.ca. Only applies to signature
   */
  @Prop({ mutable: true }) hasLink: boolean = false;

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

    this.validateType;
    this.validateVariant;

    this.updateLang();
  }

  private get selectSVG() {
    switch (this.type) {
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

    return (
      <Host>
        {hasLink && type === 'signature' ? (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            class="gcds-signature"
            href={i18n[lang].link}
            innerHTML={selectSVG}
          ></a>
        ) : (
          <div class="gcds-signature" innerHTML={selectSVG}></div>
        )}
      </Host>
    );
  }
}
