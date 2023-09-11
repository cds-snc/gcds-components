import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-phase-banner',
  styleUrl: 'gcds-phase-banner.css',
  shadow: true,
})
export class GcdsPhaseBanner {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines banner role.
   */
  @Prop() bannerRole?: 'primary' | 'secondary' = 'primary';

  /**
   * Defines the container width of the phase banner content
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'xl';

  /**
   * Defines if the banner's position is fixed.
   */
  @Prop() isFixed?: boolean;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Events
   */

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
    const { bannerRole, container, isFixed, lang } = this;

    return (
      <Host>
        <div
          class={`gcds-phase-banner banner--role-${bannerRole} ${
            isFixed ? 'banner--is-fixed' : ''
          }`}
          role="status"
          aria-label={i18n[lang].label}
        >
          <gcds-container size={container} centered>
            <div class="banner__content">
              <figure class="banner__icon icon--left">
                <slot name="banner-icon-left" />
              </figure>

              <div class="banner__details">
                <slot name="banner-text" />
                <slot name="banner-cta" />
              </div>

              <figure class="banner__icon icon--right">
                <slot name="banner-icon-right" />
              </figure>
            </div>
          </gcds-container>
        </div>
      </Host>
    );
  }
}
