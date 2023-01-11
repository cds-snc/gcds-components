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
  @Prop({ reflect: true, mutable: true }) display!: 'compact' | 'full';

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

  /**
  * Heading for contextual slot and nav landmark
  */
  @Prop({ reflect: false, mutable: false }) contextualHeading: string;

  /**
  * Object of list items
  */
  @Prop({ reflect: false, mutable: true }) contextualLinks: string | object;
  linksObject: object;

  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  @Watch('contextualLinks')
  contextualLinksChanged(newContextualLinks: string | object) {
    if (typeof newContextualLinks == "string") {
      this.linksObject = JSON.parse(newContextualLinks);
    } else if (typeof newContextualLinks == "object") {
      this.linksObject = newContextualLinks;
    }

  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisplay;

    if (this.contextualLinks && typeof this.contextualLinks == "string") {
      this.linksObject = JSON.parse(this.contextualLinks);
    } else if (this.contextualLinks && typeof this.contextualLinks == "object") {
      this.linksObject = this.contextualLinks;
    }
  }

  private get renderSignature() {
    let signVariant = this.wordmarkVariant ? this.wordmarkVariant : "colour";

    if (!!this.el.querySelector('[slot="signature"]')) {
      return <slot name="wordmark"></slot>;
    } else {
      return (<div class="sub__wordmark">
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
    const { lang, display, contextualHeading, linksObject, hasList, renderSignature } = this;
    const govNav = I18N[lang].gov.menu;
    const themeNav = I18N[lang].themes.menu;
    const siteNav = I18N[lang].site.menu;

    let contextualLinkCount = 0;

    return (
      <Host role="contentinfo">
        {(linksObject && contextualHeading) &&
          <div class="gcds-footer__contextual">
            <div class="contextual__container">
              <nav aria-label={contextualHeading}>
                <h3 class="contextual__header">
                  {contextualHeading}
                </h3>
                <ul class="contextual__list">
                  {Object.keys(linksObject).map((key) => {
                    if (contextualLinkCount < 3) {
                      contextualLinkCount++;

                      return (
                        <li>
                          <a href={linksObject[key]}>
                            {key}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>
            </div>
          </div>}
        {display === "full" ?
          (<div class="gcds-footer__main">
            <div class="main__container">
              <nav class="main__govnav" aria-label={I18N[lang].gov.heading}>
                <h3>{I18N[lang].gov.heading}</h3>
                <ul class="govnav__list">
                  {Object.keys(govNav).map((value) =>
                    <li>
                      <a href={govNav[value].link}>{govNav[value].text}</a>
                    </li>
                  )}
                </ul>
              </nav>
              <nav class="main__themenav" aria-label={I18N[lang].themes.heading}>
                <h4 class="themenav__header">{I18N[lang].themes.heading}</h4>
                <ul class="themenav__list">
                  {Object.keys(themeNav).map((value) =>
                    <li>
                      <a href={themeNav[value].link}>{themeNav[value].text}</a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>)
        : null }

        <div class="gcds-footer__sub">
          <div class="sub__container">
            {hasList ?
              <slot name="list"></slot>
            :
              (<nav aria-label={I18N[lang].site.heading}>
                <h3 class="sub__header">{I18N[lang].site.heading}</h3>
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
