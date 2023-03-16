import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-grid',
  styleUrl: 'gcds-grid.css',
  shadow: true,
})
export class GcdsGrid {
  @Element() el: HTMLElement;


  /**
   * Props
   */

  /**
   * Defines the columns of the grid
   * Option to set different layouts for desktop | tablet | default (includes mobile)
   */
  @Prop() columns?: string;
  @Prop() columnsTablet?: string;
  @Prop() columnsDesktop?: string;

  /**
   * Defines grid container size
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'full';

  /**
   * Defines element as grid or inline-grid container
   */
  @Prop() display?: 'grid' | 'inline-grid' = 'grid';

  /**
   * Shorthand for column-gap + row-gap
   * Specifies the width of the gutters between columns and rows
   */
  @Prop() gap?: '0' | '50' | '100' | '150' | '200' | '250' | '300' | '400' | '450' | '500' | '550' | '600' | '700' | '800' | '900' | '1000';

  /**
   * Set tag for grid container
   */
  @Prop() tag?: string = 'div';

  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the block (column) axis
   */
  @Prop() alignContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';

  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the inline (row) axis
   */
  @Prop() justifyContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';

  /**
   * Sets both the align-content + justify-content properties
   */
  @Prop() placeContent?: 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch';

  /**
   * Aligns grid items along the block (column) axis
   */
  @Prop() alignItems?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';

  /**
    * Aligns grid items along the inline (row) axis
    */
  @Prop() justifyItems?: 'center' | 'end' | 'start' | 'stretch';

  /**
    * Sets both the align-items + justify-items properties
    */
  @Prop() placeItems?: 'center' | 'end' | 'start' | 'stretch';

  render() {
    const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, display, gap, justifyContent, justifyItems, placeContent, placeItems, tag } = this;

    const Tag = tag;

    // Set CSS variables in style attribute based on passed column properties
    function handleColumns() {
      let responsiveColumns = {};

      if (columnsDesktop) {
        responsiveColumns["--gcds-grid-columns-desktop"] = columnsDesktop;
      }
      if (columnsTablet) {
        responsiveColumns["--gcds-grid-columns-tablet"] = columnsTablet;
      }
      if (columns) {
        responsiveColumns["--gcds-grid-columns"] = columns
      }

      return responsiveColumns;
    }

    return (
      <Host>
        <Tag
          class={`
            gcds-grid
            ${alignContent ? `align-content-${alignContent}` : ''}
            ${alignItems ? `align-items-${alignItems}` : ''}
            ${gap ? `gap-${gap}` : ''}
            ${container ? `container-${container}` : ''}
            ${display ? `display-${display}` : ''}
            ${justifyContent ? `justify-content-${justifyContent}` : ''}
            ${justifyItems ? `justify-items-${justifyItems}` : ''}
            ${placeContent ? `place-content-${placeContent}` : ''}
            ${placeItems ? `place-items-${placeItems}` : ''}
          `}
          style={handleColumns()}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
