import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';
import { SpacingValues, SpacingArray } from '../../utils/types/spacing';

/**
 * A heading is a title that establishes levels of hierarchy to organize page content into a structure.
 *
 * @slot default - Slot for the heading content
 */
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
   * Adds margin above the heading. The default margin-top for h1 is set to 0,
   * while for h2 to h6 headings, it's 600.
   */
  @Prop({ mutable: true }) marginTop?: SpacingValues;

  @Watch('marginTop')
  validateMarginTop(newValue: string) {
    if (
      !this.marginTop ||
      (this.marginTop && !SpacingArray.includes(newValue as SpacingValues))
    ) {
      this.marginTop = this.tag === 'h1' ? '0' : '600';
    }
  }

  /**
   * Adds margin below the heading. The default margin-botttom is 300.
   */
  @Prop({ mutable: true }) marginBottom?: SpacingValues = '300';

  @Watch('marginBottom')
  validateMarginBottom(newValue: string) {
    if (
      this.marginBottom &&
      !SpacingArray.includes(newValue as SpacingValues)
    ) {
      this.marginBottom = '300';
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
