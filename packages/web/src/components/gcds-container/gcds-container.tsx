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
   * Defines if the container has a border.
   */
  @Prop() border?: boolean = false;

  /**
   * Defines if the container is centered.
   */
  @Prop() centered?: boolean = false;

  /**
   * Defines if the container is the main page container. When true,
   * the width will be set to 90% for smaller screens to ensure consistency
   * with the responsiveness of other core layout components (header + footer).
   */
  @Prop() mainContainer?: boolean = false;

  /**
   * Container margin. Left and right margins won't be applied
   * if the container is centered.
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
    const { border, centered, mainContainer, margin, padding, size, tag } =
      this;

    const Tag = tag;

    return (
      <Host>
        <Tag
          class={`
            gcds-container
            ${border ? 'container-border' : ''}
            ${centered ? 'container-centered' : ''}
            ${mainContainer ? 'container-main' : ''}
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
