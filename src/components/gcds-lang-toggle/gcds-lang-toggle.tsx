import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-lang-toggle',
  styleUrl: 'gcds-lang-toggle.css',
  shadow: true,
})
export class GcdsLangToggle {

  private lang: string;
  private targetHref: string;

  @Element() el: HTMLElement;

  /**
   * The href attribute specifies the URL of the opposite language page
   */
  @Prop({ reflect: false }) href!: 'string';

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    // Since reflect: false on prop is not working
    // Remove href from Host element for cleaner display
    if (this.el.hasAttribute("href")) {
      this.targetHref = this.href;
      this.el.removeAttribute("href");
    }
  }

  render() {
    const { lang, targetHref } = this;

    return (
      <Host>
        {lang === "fr" ? (
          <div>
            <h2>Sélection de la langue</h2>
            <a href={targetHref} lang="en">
              <span>English</span>
              <abbr title="English">en</abbr>
            </a>
          </div>
        ) : (
          <div>
            <h2>Language Selection</h2>
            <a href={targetHref} lang="fr">
              <span>Français</span>
              <abbr title="Français">fr</abbr>
            </a>
          </div>
        )}
      </Host>
    );
  }
}
