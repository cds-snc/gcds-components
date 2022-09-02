import { Component, Host, Element, Watch, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import I18N from './i18n/i18n';

@Component({
  tag: 'gcds-footer',
  styleUrl: 'gcds-footer.css',
  shadow: true,
})
export class GcdsFooter {

  private lang: string;

  @Element() el: HTMLElement;

  /**
  * The type of graphic to render
  */
   @Prop({ reflect: true, mutable: true }) type: 'compact' | 'full';

   @Watch('type')
   validateType(newValue: string) {
     if (newValue != 'compact' && newValue != 'full') {
       this.type = 'compact';
     }
   }

  /**
  * GcdsSignature - The variant of the Government of Canada wordmark
  */
  @Prop({ reflect: false, mutable: false }) wordmarkVariant: 'colour' | 'white';

  /**
  * Top of page href
  */
  @Prop({ reflect: false, mutable: false }) topHref: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateType;
  }

  private get renderSignature() {
    let signVariant = this.wordmarkVariant ? this.wordmarkVariant : "colour";

    if (!!this.el.querySelector('[slot="signature"]')) {
      return <slot name="wordmark"></slot>;
    } else {
      return (<div class="wordmark">
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

  render() {
    const { lang, type, topHref, hasList, renderSignature } = this;
    const govNav = I18N[lang].gov.menu;
    const siteNav = I18N[lang].site.menu;
    return (
      <Host role="contentinfo">
        <div class="container">
          <slot name="top"></slot>
        </div>
        {type === "full" ? 
          (<div class="landscape">
            <nav class="container" aria-label={I18N[lang].gov.heading}>
              <h2>{I18N[lang].gov.heading}</h2>
              <ul>
                {Object.keys(govNav).map((value) => 
                  <li>
                    <a href={govNav[value].link}>{govNav[value].text}</a>
                  </li>
                )}
              </ul>
            </nav>
          </div>)
        :
          null
        }
        <div class="brand">
          <div class="container">
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
            {topHref ?
              (<div class="top">
                <a href={topHref}>{I18N[lang].topofpage}</a>
              </div>)
            :
              null
            }
            {renderSignature}
          </div>
        </div>
      </Host>
    );
  }

}
