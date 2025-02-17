import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';
import { SpacingValues } from '../../utils/types/spacing';
import i18n from './i18n/i18n';

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

  // TODO: Will be removed in separate pull request
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
  @Prop({ mutable: true }) name!:
    | 'checkmark-circle'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'close'
    | 'download'
    | 'email'
    | 'exclamation-circle'
    | 'external'
    | 'info-circle'
    | 'phone'
    | 'search'
    | 'warning-triangle';

  @Watch('name')
  validateName(newValue: string) {
    const values = [
      'checkmark-circle',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'close',
      'download',
      'email',
      'exclamation-circle',
      'external',
      'info-circle',
      'phone',
      'search',
      'warning-triangle',
    ];

    if (!values.includes(newValue)) {
      console.error(`${i18n['en'].nameError} | ${i18n['fr'].nameError}`);
    }
  }

  // TODO: Will be removed in separate pull request
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

  @Watch('size')
  validateSize(newValue: string) {
    const values = [
      'inherit',
      'text-small',
      'text',
      'h6',
      'h5',
      'h4',
      'h3',
      'h2',
      'h1',
    ];

    if (!values.includes(newValue)) {
      this.size = 'text';
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateName(this.name);
    this.validateSize(this.size);
  }

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
            gcds-icon gcds-icon-${name}
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
