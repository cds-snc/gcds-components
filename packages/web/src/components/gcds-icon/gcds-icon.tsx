import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-icon',
  styleUrl: 'gcds-icon.css',
  shadow: true,
})
export class GcdsIcon {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Style of the icon.
   */
  @Prop() iconStyle?: 'regular' | 'solid' = 'solid';

  /**
   * Add icon description.
   */
  @Prop() label?: string;

  /**
   * Add margin to the left of the icon
   */
  @Prop() marginLeft?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';

  /**
   * Add margin to the right of the icon
   */
  @Prop() marginRight?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';

  /**
   * Name of the icon.
   */
  @Prop() name!: string;

  /**
   * Defines the size of the icon.
   */
  @Prop() padding?: 'none' | 'fixed-width' = 'none';

  /**
   * Defines the size of the icon.
   */
  @Prop() size?: 'inherit' | 'caption' | 'text' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' = 'text';

  render() {
    const { iconStyle, label, marginLeft, marginRight, name, padding, size } = this;

    return (
      <Host>
        <span
          class={`
            gcds-icon fa fa-${iconStyle} fa-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
            padding-${padding}
          `}
          role="img"
          aria-label={label ? label : false}
          aria-hidden={label ? 'false' : 'true'}
        ></span>
      </Host>
    );
  }
}
