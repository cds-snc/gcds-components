import { Component, Element, Host, Prop, h } from '@stencil/core';
import { SpacingValues } from '../../utils/types/spacing';

/**
 * A container is a basic box layout with a set width for its contents.
 *
 * @slot default - Slot for the main content of the container.
 */
@Component({
  tag: 'gcds-container',
  styleUrl: 'gcds-container.css',
  shadow: true,
})
export class GcdsContainer {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines the container's alignment.
   * This property is ignored when `layout` is set to `page`,
   * as the page layout has higher priority.
   */
  @Prop() alignment?: 'start' | 'center' | 'end';

  /**
   * Defines if the container has a border.
   */
  @Prop() border?: boolean = false;

  /**
   * Controls how the container aligns with the page layout.
   * When set to `page`, the container uses a max width of 1140px and
   * switches to 90% width on smaller screens to scale consistently with
   * core page layout components such as the header and footer.
   * When set to `full`, the container spans the full width (100%)
   * of its parent.
   */
  @Prop() layout?: 'full' | 'page';

  /**
   * Container margin. Horizontal margins (left and right) are not
   * applied if the container’s alignment property is defined, since
   * alignment has higher priority.
   */
  @Prop() margin?: SpacingValues;

  /**
   *  Defines the container's padding.
   */
  @Prop() padding?: SpacingValues;

  /**
   * Defines container size.
   */
  @Prop() size?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'full';

  /**
   * Set tag for container.
   */
  @Prop() tag?: string = 'div';

  render() {
    const { alignment, border, layout, margin, padding, size, tag } = this;

    const Tag = tag;

    return (
      <Host>
        <Tag
          class={`
            gcds-container
            ${border ? 'container-border' : ''}
            ${alignment && layout != 'page' ? `alignment-${alignment}` : ''}
            ${layout ? `layout-${layout}` : ''}
            ${margin ? `m-${margin}` : ''}
            ${padding ? `p-${padding}` : ''}
            ${size ? `size-${size}` : ''}
          `}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
