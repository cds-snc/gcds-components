import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-grid',
  styleUrl: 'gcds-grid.css',
  shadow: true,
})
export class GcdsGrid {
  @Element() el: HTMLElement;

  /**
   * Grid props
   */

  /**
   * Defines grid container size
   */
  @Prop() gridContainer?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'fluid';

  /**
   * Defines element as grid or inline-grid container
   */
  @Prop() gridDisplay?: 'grid' | 'inline-grid' = 'grid';

  /**
   * Set tag for grid container
   */
  @Prop() gridTag: string = 'div';

  /**
   * Defines the columns of the grid
   * Option to set different layouts for desktop | tablet | default
   */
  @Prop() gridTemplateColumns?: string;
  @Prop() gridTemplateColumnsTablet?: string;
  @Prop() gridTemplateColumnsDesktop?: string;

  /**
   * Shorthand for column-gap + row-gap
   * Specifies the width of the gutters between columns and rows
   */
  @Prop() gap?: 'spacing-50'| 'spacing-100'| 'spacing-200'| 'spacing-300' | 'spacing-400' | 'spacing-500' | 'spacing-600' | 'spacing-700' | 'spacing-800' | 'spacing-900' | 'spacing-1000';

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
    const { alignContent, alignItems, gap, gridContainer, gridDisplay, gridTag, gridTemplateColumns, gridTemplateColumnsDesktop, gridTemplateColumnsTablet, justifyContent, justifyItems, placeContent, placeItems } = this;
  
    const Tag = gridTag;

    // Set gridTemplateColumns based on screen size
    const mediaQueryDesktop = window.matchMedia('(min-width: 991px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');

    function handleGridTemplateColumns() {
      if (gridTemplateColumnsDesktop && mediaQueryDesktop.matches) {
        return {gridTemplateColumns: gridTemplateColumnsDesktop}
      } else if (gridTemplateColumnsTablet && mediaQueryTablet.matches) {
        return {gridTemplateColumns: gridTemplateColumnsTablet}
      } else {
        return {gridTemplateColumns: gridTemplateColumns}
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
            ${gridContainer ? `container-${gridContainer}` : ''}
            ${gridDisplay ? `display-${gridDisplay}` : ''}
            ${justifyContent ? `justify-content-${justifyContent}` : ''}
            ${justifyItems ? `justify-items-${justifyItems}` : ''}
            ${placeContent ? `place-content-${placeContent}` : ''}
            ${placeItems ? `place-items-${placeItems}` : ''}
          `}
          style={handleGridTemplateColumns()}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
