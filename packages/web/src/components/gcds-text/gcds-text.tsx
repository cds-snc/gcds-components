import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';
import { SpacingValues, SpacingArray } from '../../utils/types/spacing';

@Component({
  tag: 'gcds-text',
  styleUrl: 'gcds-text.css',
  shadow: true,
})
export class GcdsText {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the main style of the text.
   */
  @Prop({ mutable: true }) textRole?: 'light' | 'primary' | 'secondary' =
    'primary';

  @Watch('textRole')
  validateTextRole(newValue: string) {
    const values = ['light', 'primary', 'secondary'];

    if (!values.includes(newValue)) {
      this.textRole = 'primary';
    }
  }

  /**
   * Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.
   */
  @Prop() characterLimit?: boolean = true;

  /**
   * Specifies the display behaviour of the text.
   */
  @Prop({ mutable: true }) display?:
    | 'block'
    | 'flex'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'none' = 'block';

  @Watch('display')
  validateDisplay(newValue: string) {
    const values = [
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'none',
    ];

    if (!values.includes(newValue)) {
      this.display = 'block';
    }
  }

  /**
   * Adds margin above the text.
   */
  @Prop({ mutable: true }) marginTop?: SpacingValues = '0';

  @Watch('marginTop')
  validateMarginTop(newValue: string) {
    if (!SpacingArray.includes(newValue as SpacingValues)) {
      this.marginTop = '0';
    }
  }

  /**
   * Adds margin below the text.
   */
  @Prop({ mutable: true }) marginBottom?: SpacingValues = '300';

  @Watch('marginBottom')
  validateMarginBottom(newValue: string) {
    if (!SpacingArray.includes(newValue as SpacingValues)) {
      this.marginBottom = '300';
    }
  }

  /**
   * Sets the appropriate HTML tags for the selected size.
   */
  @Prop({ mutable: true }) size?: 'body' | 'caption' = 'body';

  @Watch('size')
  validateSize(newValue: string) {
    const values = ['body', 'caption'];

    if (!values.includes(newValue)) {
      this.size = 'body';
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTextRole(this.textRole);
    this.validateDisplay(this.display);
    this.validateMarginTop(this.marginTop);
    this.validateMarginBottom(this.marginBottom);
    this.validateSize(this.size);
  }

  render() {
    const { characterLimit, display, marginTop, marginBottom, size, textRole } =
      this;

    return (
      <Host class={`${display != 'block' ? `d-${display}` : ''}`}>
        <p
          class={`
            gcds-text
            ${textRole ? `role-${textRole}` : ''}
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          `}
          part="text"
        >
          {size === 'caption' ? (
            <small>
              <slot />
            </small>
          ) : (
            <slot />
          )}
        </p>
      </Host>
    );
  }
}
