import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-grid-col',
  styleUrl: 'gcds-grid-col.css',
  shadow: true,
})
export class GcdsGridCol {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Set tag for grid column
   */
  @Prop() tag?: string = 'div';

  /**
   * Optimize grid column size for tablet (768px - 1023px).
   * Tablet grid column sizes are based on a 6 column grid.
   * The tablet size will also be used for desktop, if desktop is undefined.
   */
  @Prop({ mutable: true }) tablet?: 1 | 2 | 3 | 4 | 5 | 6 = 6;

  @Watch('tablet')
  validateTablet(newValue: number) {
    const values = [1, 2, 3, 4, 5, 6];

    if (!values.includes(newValue)) {
      this.tablet = 6;
    }
  }

  /**
   * Optimize grid column size for desktop (1024px and above).
   * Desktop grid column sizes are based on a 12 column grid.
   */
  @Prop({ mutable: true }) desktop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

  @Watch('desktop')
  validateDesktop(newValue: number) {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if (this.desktop && !values.includes(newValue)) {
      this.desktop = 12;
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTablet(this.tablet);
    this.validateDesktop(this.desktop);
  }

  render() {
    const { desktop, tablet, tag } = this;

    const Tag = tag;

    function handleColSize() {
      const colSize = {};

      if (tablet) {
        colSize['--gcds-grid-col-tablet'] = tablet;
      }

      if (desktop) {
        colSize['--gcds-grid-col-desktop'] = desktop;
      } else if (tablet) {
        colSize['--gcds-grid-col-desktop'] = tablet * 2;
      }

      return colSize;
    }

    return (
      <Host style={handleColSize()}>
        <Tag class="gcds-grid-col">
          <slot />
        </Tag>
      </Host>
    );
  }
}
