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
  @Prop() container?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'fluid';

  /**
   * Defines element as grid or inline-grid container
   */
  @Prop() display?: 'grid' | 'inline-grid' = 'grid';

  /**
   * Shorthand for column-gap + row-gap
   * Specifies the width of the gutters between columns and rows
   */
  @Prop() gap?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';

  /**
   * Set tag for grid container
   */
  @Prop() tag: string = 'div';

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

    // Set gridTemplateColumns based on screen size
    const mediaQueryDesktop = window.matchMedia('(min-width: 991px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');

    function handleColumns() {
      if (columnsDesktop && mediaQueryDesktop.matches) {
        return {gridTemplateColumns: columnsDesktop}
      } else if (columnsTablet && mediaQueryTablet.matches) {
        return {gridTemplateColumns: columnsTablet}
      } else {
        return {gridTemplateColumns: columns}
      }
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
