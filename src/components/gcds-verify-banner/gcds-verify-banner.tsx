import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

import CanadaFlag from './assets/canada-flag.svg';
import ContentToggleArrow from './assets/content-toggle-arrow.svg';

@Component({
  tag: 'gcds-verify-banner',
  styleUrl: 'gcds-verify-banner.css',
  shadow: true,
})
export class GcdsVerifyBanner {
  @Element() el: HTMLElement;

  private lang: string;

  /**
   * Defines the max width of the banner content
   */
  @Prop() maxContentWidth?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'lg';

  /**
   * Defines if the banner's position is fixed.
   */
  @Prop() positionFixed?: boolean;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { lang, maxContentWidth, positionFixed } = this;

    return (
      <Host>
        <details class={`banner-verify ${positionFixed ? 'is-fixed' : ''}`}>
          <summary
            class={maxContentWidth ? `container-${maxContentWidth}` : ''}
            aria-expanded="false"
            role="button"
          >
            <span class='svg-container' innerHTML={CanadaFlag} />
            <p>
              <small>{lang === 'en' ? 'An official website of the Government of Canada' : 'TO DO french content'}</small>
              <a class="content-toggle">
                <small>{lang === 'en' ? 'Find out how to recognize them' : 'TO DO french content'}</small>
                <span class='svg-container' innerHTML={ContentToggleArrow} />
              </a>
            </p>
          </summary>
          <div class={`verify-content ${maxContentWidth ? `container-${maxContentWidth}` : ''}`}>
            {lang === 'en' ?
              <gcds-grid grid-tag="ul" grid-container="lg" grid-template-columns="1fr" grid-template-columns-tablet={maxContentWidth != 'xs' ? '1fr 1fr' : '1fr'}>
                <li>
                  <h4>Official websites use canada.ca or gc.ca</h4>
                  <p><small>Federal government websites most often either use canada.ca or gc.ca. Before sharing sensitive information, make sure you're on a federal government site.</small></p>
                </li>
                <li>
                  <h4>Secure Government of Canada websites use HTTPS</h4>
                  <p><small>The https:// ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.</small></p>
                </li>
              </gcds-grid>
            :
              <gcds-grid grid-tag="ul" grid-container="lg" grid-template-columns="1fr" grid-template-columns-tablet={maxContentWidth != 'xs' ? '1fr 1fr' : '1fr'}>
                <li>
                  <h4>TO DO french content</h4>
                  <p><small>TO DO french content</small></p>
                </li>
                <li>
                  <h4>TO DO french content</h4>
                  <p><small>TO DO french content</small></p>
                </li>
              </gcds-grid>
            }
          </div>
        </details>
      </Host>
    );
  }
}
