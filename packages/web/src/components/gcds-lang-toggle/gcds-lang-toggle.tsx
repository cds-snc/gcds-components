import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

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
    const { lang, href } = this;

    return (
      <Host>
        {lang === "fr" ? (
          <div>
            <h2>Sélection de la langue</h2>
            <a href={href} lang="en">
              <span>English</span>
              <abbr title="English">en</abbr>
            </a>
          </div>
        ) : (
          <div>
            <h2>Language Selection</h2>
            <a href={href} lang="fr">
              <span>Français</span>
              <abbr title="Français">fr</abbr>
            </a>
          </div>
        )}
      </Host>
    );
  }
}
