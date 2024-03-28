import { Component, Host, Element, Watch, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import I18N from './i18n/i18n';

@Component({
  tag: 'gcds-footer',
  styleUrl: 'gcds-footer.css',
  shadow: true,
})
export class GcdsFooter {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Display mode of the footer
   */
  @Prop({ reflect: true, mutable: true }) display?: 'compact' | 'full' =
    'compact';

  /**
   * GcdsSignature - The variant of the Government of Canada wordmark
   */
  @Prop({ reflect: false, mutable: false }) wordmarkVariant: 'colour' | 'white';

  /**
   * Heading for contextual slot and nav landmark
   */
  @Prop({ reflect: false, mutable: false }) contextualHeading: string;

  /**
   * Object of list items for contextual band. Format: { link-label: link-href }
   */
  @Prop({ reflect: false, mutable: true }) contextualLinks: string | object;
  contextualLinksObject: object;

  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  @Watch('contextualLinks')
  contextualLinksChanged(newContextualLinks: string | object) {
    if (typeof newContextualLinks == 'string') {
      this.contextualLinksObject = JSON.parse(newContextualLinks);
    } else if (typeof newContextualLinks == 'object') {
      this.contextualLinksObject = newContextualLinks;
    }
  }

  /**
   * Object of list items for sub-footer. Format: { link-label: link-href }
   */
  @Prop({ reflect: false, mutable: true }) subLinks: string | object;
  subLinksObject: object;

  /**
   * Convert sub links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  @Watch('subLinks')
  subLinksChanged(newSubLinks: string | object) {
    if (typeof newSubLinks == 'string') {
      this.subLinksObject = JSON.parse(newSubLinks);
    } else if (typeof newSubLinks == 'object') {
      this.subLinksObject = newSubLinks;
    }
  }

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

    if (this.contextualLinks && typeof this.contextualLinks == 'string') {
      this.contextualLinksObject = JSON.parse(this.contextualLinks);
    } else if (
      this.contextualLinks &&
      typeof this.contextualLinks == 'object'
    ) {
      this.contextualLinksObject = this.contextualLinks;
    }

    if (this.subLinks && typeof this.subLinks == 'string') {
      this.subLinksObject = JSON.parse(this.subLinks);
    } else if (this.subLinks && typeof this.subLinks == 'object') {
      this.subLinksObject = this.subLinks;
    }
  }

  private get renderSignature() {
    const signVariant = this.wordmarkVariant ? this.wordmarkVariant : 'colour';

    if (this.el.querySelector('[slot="signature"]')) {
      return <slot name="wordmark"></slot>;
    } else {
      return (
        <div class="sub__wordmark">
          <gcds-signature
            type="wordmark"
            variant={signVariant}
            lang={this.lang}
          ></gcds-signature>
        </div>
      );
    }
  }

  render() {
    const {
      lang,
      display,
      contextualHeading,
      contextualLinksObject,
      subLinks,
      subLinksObject,
      renderSignature,
    } = this;
    const govNav = I18N[lang].gov.menu;
    const themeNav = I18N[lang].themes.menu;
    const siteNav = I18N[lang].site.menu;

    let contextualLinkCount = 0;
    let subLinkCount = 0;

    return (
      <Host role="contentinfo" aria-label="Footer">
        <gcds-sr-only tag="h2">{I18N[lang].about}</gcds-sr-only>
        {contextualLinksObject && contextualHeading && (
          <div class="gcds-footer__contextual">
            <div class="contextual__container">
              <nav aria-labelledby="contextual__heading">
                <h3 id="contextual__heading" class="contextual__heading">
                  {contextualHeading}
                </h3>
                <ul class="contextual__list">
                  {Object.keys(contextualLinksObject).map(key => {
                    if (contextualLinkCount < 3) {
                      contextualLinkCount++;

                      return (
                        <li>
                          <gcds-link
                            size="small"
                            href={contextualLinksObject[key]}
                          >
                            {key}
                          </gcds-link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </nav>
            </div>
          </div>
        )}
        {display === 'full' ? (
          <div class="gcds-footer__main">
            <div class="main__container">
              <nav class="main__govnav" aria-labelledby="govnav__heading">
                <h3 id="govnav__heading">{I18N[lang].gov.heading}</h3>
                <ul class="govnav__list">
                  {Object.keys(govNav).map(value => (
                    <li>
                      <gcds-link size="small" href={govNav[value].link}>
                        {govNav[value].text}
                      </gcds-link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav class="main__themenav" aria-labelledby="themenav__heading">
                <gcds-sr-only tag="h4" id="themenav__heading">
                  {I18N[lang].themes.heading}
                </gcds-sr-only>
                <ul class="themenav__list">
                  {Object.keys(themeNav).map(value => (
                    <li>
                      <gcds-link size="small" href={themeNav[value].link}>
                        {themeNav[value].text}
                      </gcds-link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}

        <div class="gcds-footer__sub">
          <div class="sub__container">
            <nav aria-labelledby="sub__heading">
              <gcds-sr-only tag="h3" id="sub__heading">
                {I18N[lang].site.heading}
              </gcds-sr-only>
              <ul>
                {subLinks
                  ? Object.keys(subLinksObject).map(key => {
                      if (subLinkCount < 5) {
                        subLinkCount++;

                        return (
                          <li>
                            <gcds-link size="small" href={subLinksObject[key]}>
                              {key}
                            </gcds-link>
                          </li>
                        );
                      }
                    })
                  : Object.keys(siteNav).map(value => {
                      return (
                        <li>
                          <gcds-link size="small" href={siteNav[value].link}>
                            {siteNav[value].text}
                          </gcds-link>
                        </li>
                      );
                    })}
              </ul>
            </nav>

            {renderSignature}
          </div>
        </div>
      </Host>
    );
  }
}
