import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';
import i18n from './i18n/i18n';

export type ContentValues =
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch';

export type GridGapValues =
  | '150'
  | '175'
  | '200'
  | '225'
  | '250'
  | '300'
  | '350'
  | '400'
  | '450'
  | '500'
  | '550'
  | '600'
  | '650'
  | '700'
  | '750'
  | '800';

const GridGapArray = [
  '150',
  '175',
  '200',
  '225',
  '250',
  '300',
  '350',
  '400',
  '450',
  '500',
  '550',
  '600',
  '650',
  '700',
  '750',
  '800',
];

/**
 * A grid is a responsive, flexible column layout to position elements on a page.
 *
 * @slot default - Slot for the main content of the grid.
 */
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
   * Defines the default number of grid columns for all viewports if columns-tablet
   * and columns-desktop are not defined. Option to set different layouts for
   * desktop with columns-desktop and for tablet with columns-tablet.
   */
  @Prop() columns?: string;

  /**
   * Provides option to set a different number of grid columns for tablet screens.
   * If columns-desktop is not defined, columns-tablet will be used to define the
   * number of columns for desktop as well.
   */
  @Prop() columnsTablet?: string;

  /**
   * Provides option to set a different number of grid columns for desktop screens.
   */
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
   * Defines the horizontal and vertical spacing between items in
   * a grid container for all viewports if gap-tablet and gap-desktop
   * are not defined. Option to set different spacing for desktop
   * with gap-desktop and for tablet with gap-tablet.
   */
  @Prop({ mutable: true }) gap?: GridGapValues = '300';

  @Watch('gap')
  validateGap(newValue: string) {
    const values = GridGapArray;

    if (!values.includes(newValue)) {
      this.gap = '300';
    }
  }

  /**
   * Provides option to set horizontal and vertical spacing between items in a
   * grid container for tablet screens. If gap-desktop is not defined, gap-tablet
   * will be used to define the spacing for desktop screens as well.
   */
  @Prop({ mutable: true }) gapTablet?: GridGapValues;

  @Watch('gapTablet')
  validateGapTablet(newValue: string) {
    const values = GridGapArray;

    if (newValue != undefined && !values.includes(newValue)) {
      this.gapTablet = undefined;
      console.error(
        `${i18n['en'].gapTabletError} | ${i18n['fr'].gapTabletError}`,
      );
    }
  }

  /**
   * Provides option to set horizontal and vertical spacing between items
   * in a grid container for desktop screens.
   */
  @Prop({ mutable: true }) gapDesktop?: GridGapValues;

  @Watch('gapDesktop')
  validateGapDesktop(newValue: string) {
    const values = GridGapArray;

    if (newValue != undefined && !values.includes(newValue)) {
      this.gapDesktop = undefined;
      console.error(
        `${i18n['en'].gapDesktopError} | ${i18n['fr'].gapDesktopError}`,
      );
    }
  }

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
    this.validateGap(this.gap);
    this.validateGapTablet(this.gapTablet);
    this.validateGapDesktop(this.gapDesktop);
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
      gap,
      gapTablet,
      gapDesktop,
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

    // Set CSS variables in style attribute based on passed column + gap properties
    function handleGridStyles() {
      const gridStyles = {};

      const setGridProperty = (value, property, suffix = '') => {
        const gapValue = `var(--gcds-grid-gap-${value})`;
        const tokenValue = property === 'gap' ? gapValue : value;

        if (value) {
          gridStyles[`--gcds-grid-${property}${suffix}`] = tokenValue;
        }
      };

      // Handle columns
      setGridProperty(columns, 'columns');
      setGridProperty(columnsTablet, 'columns', '-tablet');
      setGridProperty(columnsDesktop, 'columns', '-desktop');

      // Handle gap
      setGridProperty(gap, 'gap');
      setGridProperty(gapTablet, 'gap', '-tablet');
      setGridProperty(gapDesktop, 'gap', '-desktop');

      return gridStyles;
    }

    return (
      <Host>
        {container ? (
          <gcds-container size={container} centered={centered}>
            <Tag class={classNames} style={handleGridStyles()}>
              <slot />
            </Tag>
          </gcds-container>
        ) : (
          <Tag class={classNames} style={handleGridStyles()}>
            <slot />
          </Tag>
        )}
      </Host>
    );
  }
}
