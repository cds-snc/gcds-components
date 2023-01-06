import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-breadcrumbs',
  styleUrl: 'gcds-breadcrumbs.css',
  shadow: true,
})
export class GcdsBreadcrumbs {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
   * Defines if the default canada.ca link should be displayed or not.
   */
  @Prop({ reflect: false, mutable: false }) hideCanadaLink: boolean = false;


  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { hideCanadaLink, lang } = this;

    return (
      <Host>
        <nav
          aria-label={lang == 'en' ? 'Breadcrumb' : 'Fil d\'Ariane'}
          class="gcds-breadcrumbs"
        >
          <ol>
            { !hideCanadaLink ?
              <gcds-breadcrumbs-item
                href={`https://www.canada.ca/${lang == 'en' ? 'en' : 'fr'}.html`}
              >
                Canada.ca
              </gcds-breadcrumbs-item>
            : null }

            <slot></slot>
          </ol>
        </nav>
      </Host>
    );
  }
}
