import { Component, Host, Element, Watch, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import I18N from './i18n/i18n';

@Component({
  tag: 'gcds-footer',
  styleUrl: 'gcds-footer.css',
  shadow: true,
})
export class GcdsFooter {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
  * Display mode of the footer
  */
  @Prop({ reflect: true, mutable: true }) display: 'compact' | 'full';

  @Watch('display')
  validateDisplay(newValue: string) {
    if (newValue != 'compact' && newValue != 'full') {
      this.display = 'compact';
    }
  }

  /**
  * GcdsSignature - The variant of the Government of Canada wordmark
  */
  @Prop({ reflect: false, mutable: false }) wordmarkVariant: 'colour' | 'white';

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisplay;
  }

  private get renderSignature() {
    let signVariant = this.wordmarkVariant ? this.wordmarkVariant : "colour";

    if (!!this.el.querySelector('[slot="signature"]')) {
      return <slot name="wordmark"></slot>;
    } else {
      return (<div class="brand__wordmark">
          <gcds-signature
            type="wordmark"
            variant={signVariant}
            lang={this.lang}
          ></gcds-signature>
        </div>);
    }
  }

  private get hasList() {
    return !!this.el.querySelector('[slot="list"]');
  }

  private get hasContextual() {
    return !!this.el.querySelector('[slot="contextual"]');
  }

  render() {
    const { lang, display, hasList, hasContextual, renderSignature } = this;
    const govNav = I18N[lang].gov.menu;
    const themeNav = I18N[lang].themes.menu;
    const siteNav = I18N[lang].site.menu;

    return (
      <Host role="contentinfo">
        <div class="top__container">
          <slot name="top"></slot>
        </div>

        {display === "full" ?
          (<div>
            {hasContextual && 
              <div class="gcds-footer__contextual">
                <div class="contextual__container">
                  <slot name="contextual"></slot>
                </div>
              </div>
            }
            <div class="gcds-footer__landscape">
              <div class="landscape__container">
                <nav class="landscape__govnav" aria-label={I18N[lang].gov.heading}>
                  <h3>{I18N[lang].gov.heading}</h3>
                  <ul>
                    {Object.keys(govNav).map((value) =>
                      <li>
                        <a href={govNav[value].link}>{govNav[value].text}</a>
                      </li>
                    )}
                  </ul>
                </nav>
                <nav class="landscape__themenav" aria-label={I18N[lang].themes.heading}>
                  <h4>{I18N[lang].themes.heading}</h4>
                  <ul>
                    {Object.keys(themeNav).map((value) =>
                      <li>
                        <a href={themeNav[value].link}>{themeNav[value].text}</a>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>)
        : null }

        <div class="gcds-footer__brand">
          <div class="brand__container">
            {hasList ?
              <slot name="list"></slot>
            :
              (<nav aria-label={I18N[lang].site.heading}>
                <h2>{I18N[lang].site.heading}</h2>
                <ul>
                  {Object.keys(siteNav).map((value) =>
                    <li>
                      <a href={siteNav[value].link}>{siteNav[value].text}</a>
                    </li>
                  )}
                </ul>
              </nav>)
            }

            {renderSignature}
          </div>
        </div>
      </Host>
    );
  }
}
