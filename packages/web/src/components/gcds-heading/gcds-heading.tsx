import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-heading',
  styleUrl: 'gcds-heading.css',
  shadow: true,
})
export class GcdsHeading {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the appropriate HTML tag for the selected level.
   */
  @Prop({ mutable: true }) tag!: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  @Watch('tag')
  validateTag(newValue: string) {
    const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if (!values.includes(newValue)) {
      console.error('Not a valid tag.');
    }
  }

  /**
   * Sets the line length to a maximum amount of characters per line for
   * each heading level, ensuring a comfortable, accessible reading length.
   */
  @Prop() characterLimit?: boolean = true;

  /**
   * Adds margin above the heading.
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
    | '1000' = '500';

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
      this.marginTop = '500';
    }
  }

  /**
   * Adds margin below the heading.
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
    | '1000' = '400';

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
      this.marginBottom = '400';
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTag(this.tag);
    this.validateMarginTop(this.marginTop);
    this.validateMarginBottom(this.marginBottom);
  }

  render() {
    const { characterLimit, marginTop, marginBottom, tag } = this;

    const Tag = tag;

    return (
      <Host>
        <Tag
          class={`
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          `}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
