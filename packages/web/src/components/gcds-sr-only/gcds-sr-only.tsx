import { Component, Host, Watch, h, Prop } from '@stencil/core';

@Component({
  tag: 'gcds-sr-only',
  styleUrl: 'gcds-sr-only.css',
  shadow: true,
})
export class GcdsSrOnly {
  /**
   * Sets the appropriate HTML tag for the content.
   */
  @Prop({ mutable: true }) tag?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span' = 'p';

  @Watch('tag')
  validateTag(newValue: string) {
    const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

    if (!values.includes(newValue)) {
      this.tag = 'p';
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTag(this.tag);
  }

  render() {
    const Tag = this.tag;

    return (
      <Host>
        <Tag>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}
