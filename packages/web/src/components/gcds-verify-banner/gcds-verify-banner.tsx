import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

import CanadaFlag from './assets/canada-flag.svg';
import ContentToggleArrow from './assets/content-toggle-arrow.svg';

@Component({
  tag: 'gcds-verify-banner',
  styleUrl: 'gcds-verify-banner.css',
  shadow: true,
})
export class GcdsVerifyBanner {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines the container width of the verify banner content
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'xl';

  /**
   * Defines if the banner's position is fixed.
   */
  @Prop() isFixed?: boolean = false;

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
    const { container, isFixed, lang } = this;

    return (
      <Host>
        <details
          class={`gcds-verify-banner ${
            isFixed ? 'verify-banner--is-fixed' : ''
          }`}
        >
          <summary
            class={container ? `container-${container}` : ''}
            aria-expanded="false"
            role="button"
          >
            <span class="svg-container" innerHTML={CanadaFlag} />
            <p>
              <small>{i18n[lang].summary.text}</small>
              <button class="verify-banner__toggle">
                <small>{i18n[lang].summary.link}</small>
                <span class="svg-container" innerHTML={ContentToggleArrow} />
              </button>
            </p>
          </summary>
          <div
            class={`verify-banner__content ${
              container ? `container-${container}` : ''
            }`}
          >
            <p>
              <small>{i18n[lang].content.description}</small>
            </p>
            <br />
            <gcds-grid
              tag="ul"
              container="lg"
              columns="1fr"
              columns-tablet={
                container === 'xs' || container === 'sm' ? '1fr' : '1fr 1fr'
              }
            >
              <li>
                <h4>{i18n[lang].content.url.heading}</h4>
                <p>
                  <small>{i18n[lang].content.url.text}</small>
                </p>
              </li>
              <li>
                <h4>{i18n[lang].content.languages.heading}</h4>
                <p>
                  <small>{i18n[lang].content.languages.text}</small>
                </p>
              </li>
              <li>
                <h4>{i18n[lang].content.https.heading}</h4>
                <p>
                  <small>
                    {i18n[lang].content.https.text} <strong>https://</strong>.
                  </small>
                </p>
              </li>
              <li>
                <h4>{i18n[lang].content.contact.heading}</h4>
                <p>
                  <small>{i18n[lang].content.contact.text}</small>
                </p>
              </li>
            </gcds-grid>
          </div>
        </details>
      </Host>
    );
  }
}
