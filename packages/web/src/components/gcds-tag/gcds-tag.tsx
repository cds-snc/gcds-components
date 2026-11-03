import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

/**
 * A tag is a static label used to categorize, identify, or describe content.
 *
 * @slot default - Slot for the tag text. Text longer than 20 characters is truncated with an ellipsis.
 */
@Component({
  tag: 'gcds-tag',
  styleUrl: 'gcds-tag.css',
  shadow: true,
})
export class GcdsTag {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the colour of the tag.
   * Tag colours are decorative and don't carry meaning.
   */
  @Prop({ mutable: true }) color?:
    | 'blue'
    | 'gray'
    | 'green'
    | 'purple'
    | 'red'
    | 'yellow' = 'gray';

  @Watch('color')
  validateColor(newValue: string) {
    const values = ['blue', 'gray', 'green', 'purple', 'red', 'yellow'];

    if (!values.includes(newValue)) {
      this.color = 'gray';
    }
  }

  /**
   * Sets the size of the tag.
   */
  @Prop({ mutable: true }) size?: 'regular' | 'small' = 'regular';

  @Watch('size')
  validateSize(newValue: string) {
    const values = ['regular', 'small'];

    if (!values.includes(newValue)) {
      this.size = 'regular';
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateColor(this.color);
    this.validateSize(this.size);
  }

  render() {
    const { color, size } = this;

    return (
      <Host>
        <span class={`gcds-tag color-${color} size-${size}`}>
          <span class="gcds-tag-text">
            <slot></slot>
          </span>
        </span>
      </Host>
    );
  }
}
