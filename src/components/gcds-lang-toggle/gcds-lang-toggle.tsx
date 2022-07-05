import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-lang-toggle',
  styleUrl: 'gcds-lang-toggle.css',
  shadow: true,
})
export class GcdsLangToggle {

  private lang: string;

  @Element() el: HTMLElement;

  /**
   * The href attribute specifies the URL of the opposite language page
   */
  @Prop({ reflect: false, mutable: false }) href!: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

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
