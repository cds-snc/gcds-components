import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-icon',
  styleUrl: 'gcds-icon.css',
  shadow: true,
})
export class GcdsIcon {
  @Element() el: HTMLElement;

  /**
   * Add margin to the left of the icon
   */
  @Prop() marginLeft?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';

  /**
   * Add margin to the right of the icon
   */
  @Prop() marginRight?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';

  /**
   * Name of the icon.
   */
  @Prop() name!: string;

  /**
   * Defines the size of the icon.
   */
  @Prop() size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'inherit';

  render() {
    const { marginLeft, marginRight, name, size } = this;

    return (
      <Host>
        <i class={`
          gcds-icon fa fa-regular fa-${name}
          ${marginLeft ? `ml-${marginLeft}` : ''}
          ${marginRight ? `mr-${marginRight}` : ''}
          ${size ? `size-${size}` : ''}
        `}></i>
      </Host>
    );
  }
}
