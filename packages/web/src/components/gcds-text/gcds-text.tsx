import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

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
  @Prop({ mutable: true }) marginTop?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

  @Watch('marginTop')
  validateMarginTop(newValue: string) {
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];

    if (this.marginTop && !values.includes(newValue)) {
      console.error('Not a valid margin.');
    }
  }

  /**
   * Adds margin below the text.
   */
  @Prop({ mutable: true }) marginBottom?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

  @Watch('marginBottom')
  validateMarginBottom(newValue: string) {
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];

    if (this.marginBottom && !values.includes(newValue)) {
      console.error('Not a valid margin.');
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
