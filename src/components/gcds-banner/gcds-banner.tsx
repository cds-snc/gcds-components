import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-banner',
  styleUrl: 'gcds-banner.css',
  shadow: true,
})
export class GcdsBanner {
  @Element() el: HTMLElement;

  /**
   * Defines banner role.
   */
  @Prop() bannerRole?: 'destructive' | 'primary' | 'secondary' | 'warning' = 'primary';

  /**
   * Defines the max width of the banner content.
   */
  @Prop() maxContentWidth?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'lg';

  /**
   * Defines if the banner's position is fixed.
   */
  @Prop() positionFixed?: boolean;

  render() {
    const { bannerRole, maxContentWidth, positionFixed } = this;

    return (
      <Host>
        <div
          class={`banner role-${bannerRole} ${positionFixed ? 'is-fixed' : ''}`}
          role={bannerRole === 'destructive' ? 'alert' : 'status'}
          aria-label="Banner"
        >
          <div class={`banner-content ${maxContentWidth ? `container-${maxContentWidth}` : ''}`}>
            <figure class="banner-icon icon-left">
              <slot name="banner-icon-left" />
            </figure>

            <div class="banner-details">
              <p><slot name="banner-text" /></p>
              <slot name="banner-cta" />
            </div>

            <figure class="banner-icon icon-right">
              <slot name="banner-icon-right" />
            </figure>
          </div>
        </div>
      </Host>
    );
  }
}