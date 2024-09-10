import { Component, Element, Host, Prop, h } from '@stencil/core';

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
   * Defines if container has a border or not.
   */
  @Prop() border?: boolean = false;

  /**
   * Defines if container is centered or not.
   */
  @Prop() centered?: boolean = false;

  /**
   * Defines if the container is the main page container or not. If set to true,
   * the width will be set to 90% for smaller screens to ensure consistency
   * with the responsiveness of other core layout components (header + footer).
   */
  @Prop() mainContainer?: boolean = false;

  /**
   * Defines the container's margin. Note that left and right margin will not be applied if the container is centered.
   */
  @Prop() margin?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

  /**
   *  Defines the container's padding.
   */
  @Prop() padding?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

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
      <Host
		size={size}>
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
