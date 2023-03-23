import { Component, Element, Host, Prop, h } from '@stencil/core';

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

  render() {
    const { bannerRole, container, isFixed } = this;

    return (
      <Host>
        <div
          class={`gcds-phase-banner banner--role-${bannerRole} ${isFixed ? 'banner--is-fixed' : ''}`}
          role="status"
          aria-label="Banner"
        >
          <gcds-container container={container} centered>
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
