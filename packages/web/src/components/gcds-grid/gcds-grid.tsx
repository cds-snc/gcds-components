import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

export type ContentValues =
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

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
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

  /**
   * Defines if grid container is centered or not
   */
  @Prop() centered?: boolean = false;

  /**
   * Defines element as grid or inline-grid container
   */
  @Prop() display?: 'grid' | 'inline-grid' = 'grid';

  /**
   * Sets all grid items to have an equal height,
   * based on the tallest item.
   */
  @Prop() equalRowHeight?: boolean = false;

  /**
   * Set tag for grid container
   */
  @Prop({ mutable: true }) tag?:
    | 'article'
    | 'aside'
    | 'div'
    | 'dl'
    | 'main'
    | 'nav'
    | 'ol'
    | 'section'
    | 'ul' = 'div';

  @Watch('tag')
  validateTag(newValue: string) {
    const values = [
      'article',
      'aside',
      'div',
      'dl',
      'main',
      'nav',
      'ol',
      'section',
      'ul',
    ];

    if (!values.includes(newValue)) {
      this.tag = 'div';
    }
  }

  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the block (column) axis
   */
  @Prop() alignContent?: ContentValues;

  /**
   * If total grid size is less than the size of its grid container,
   * this property aligns the grid along the inline (row) axis
   */
  @Prop() justifyContent?: ContentValues;

  /**
   * Sets both the align-content + justify-content properties
   */
  @Prop() placeContent?: ContentValues;

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

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTag(this.tag);
  }

  render() {
    const {
      alignContent,
      alignItems,
      columns,
      columnsDesktop,
      columnsTablet,
      container,
      centered,
      display,
      equalRowHeight,
      justifyContent,
      justifyItems,
      placeContent,
      placeItems,
      tag,
    } = this;

    const Tag = tag;
    const classNames = `
      gcds-grid
      ${alignContent ? `align-content-${alignContent}` : ''}
      ${alignItems ? `align-items-${alignItems}` : ''}
      ${
        (columns || columnsTablet || columnsDesktop) === undefined
          ? `display-grid-with-cols`
          : `display-${display}`
      }
      ${equalRowHeight ? 'equal-row-height' : ''}
      ${justifyContent ? `justify-content-${justifyContent}` : ''}
      ${justifyItems ? `justify-items-${justifyItems}` : ''}
      ${placeContent ? `place-content-${placeContent}` : ''}
      ${placeItems ? `place-items-${placeItems}` : ''}
    `;

    // Set CSS variables in style attribute based on passed column properties
    function handleColumns() {
      const responsiveColumns = {};

      if (columns) {
        responsiveColumns['--gcds-grid-columns'] = columns;
      }

      if (columnsTablet) {
        responsiveColumns['--gcds-grid-columns-tablet'] = columnsTablet;
      }

      if (columnsDesktop) {
        responsiveColumns['--gcds-grid-columns-desktop'] = columnsDesktop;
      }

      return responsiveColumns;
    }

    return (
      <Host>
        {container ? (
          <gcds-container size={container} centered={centered}>
            <Tag class={classNames} style={handleColumns()}>
              <slot />
            </Tag>
          </gcds-container>
        ) : (
          <Tag class={classNames} style={handleColumns()}>
            <slot />
          </Tag>
        )}
      </Host>
    );
  }
}
