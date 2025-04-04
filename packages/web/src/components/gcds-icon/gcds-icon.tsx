import { Component, Element, Host, Prop, h } from '@stencil/core';
import { SpacingValues } from '../../utils/types/spacing';

@Component({
  tag: 'gcds-icon',
  styleUrl: 'gcds-icon.scss',
  shadow: true,
})
export class GcdsIcon {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Style of the icon. 'regular' icons are outlined. Some icons have 'solid' variation.
   */
  @Prop() iconStyle?: 'regular' | 'solid' = 'solid';

  /**
   * Add icon description.
   */
  @Prop() label?: string;

  /**
   * Add margin to the left of the icon
   */
  @Prop() marginLeft?: SpacingValues;

  /**
   * Add margin to the right of the icon
   */
  @Prop() marginRight?: SpacingValues;

  /**
   * Name of the icon.
   */
  @Prop() name!: string;

  /**
   * If the icon should render as a fixed-width square, or their natural width.
   */
  @Prop() fixedWidth: boolean = false;

  /**
   * Defines the size of the icon.
   */
  @Prop() size?:
    | 'inherit'
    | 'text-small'
    | 'text'
    | 'h6'
    | 'h5'
    | 'h4'
    | 'h3'
    | 'h2'
    | 'h1' = 'text';

  render() {
    const {
      iconStyle,
      label,
      marginLeft,
      marginRight,
      name,
      fixedWidth,
      size,
    } = this;

    return (
      <Host>
        <span
          class={`
            gcds-icon fa fa-${iconStyle} fa-${name}
            ${marginLeft ? `ml-${marginLeft}` : ''}
            ${marginRight ? `mr-${marginRight}` : ''}
            ${size ? `size-${size}` : ''}
            ${fixedWidth ? `fixed-width` : ''}
          `}
          role="img"
          aria-label={label ? label : false}
          aria-hidden={label ? 'false' : 'true'}
        ></span>
      </Host>
    );
  }
}
