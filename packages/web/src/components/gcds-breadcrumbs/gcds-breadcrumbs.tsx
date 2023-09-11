import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-breadcrumbs',
  styleUrl: 'gcds-breadcrumbs.css',
  shadow: true,
})
export class GcdsBreadcrumbs {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines if the default canada.ca link is displayed or omitted.
   */
  @Prop({ reflect: false, mutable: false }) hideCanadaLink: boolean = false;

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
    const { hideCanadaLink, lang } = this;

    return (
      <Host>
        <nav aria-label={i18n[lang].label} class="gcds-breadcrumbs">
          <ol class={hideCanadaLink ? '' : 'has-canada-link'}>
            {!hideCanadaLink ? (
              <gcds-breadcrumbs-item href={i18n[lang].link}>
                Canada.ca
              </gcds-breadcrumbs-item>
            ) : null}

            <slot></slot>
          </ol>
        </nav>
      </Host>
    );
  }
}
