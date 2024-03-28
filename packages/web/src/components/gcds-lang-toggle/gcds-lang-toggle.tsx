import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-lang-toggle',
  styleUrl: 'gcds-lang-toggle.css',
  shadow: true,
})
export class GcdsLangToggle {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * The href attribute specifies the URL of the opposite language page
   */
  @Prop({ reflect: true, mutable: false }) href!: string;

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

  render() {
    const { lang, href } = this;

    return (
      <Host>
        <div class="gcds-lang-toggle">
          <gcds-sr-only id="lang-toggle__heading" tag="h2">
            {i18n[lang].heading}
          </gcds-sr-only>
          <gcds-link size="regular" href={href} lang={i18n[lang].abbreviation}>
            <span>{i18n[lang].language}</span>
            <abbr title={i18n[lang].language}>{i18n[lang].abbreviation}</abbr>
          </gcds-link>
        </div>
      </Host>
    );
  }
}
