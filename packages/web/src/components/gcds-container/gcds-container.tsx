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
   * Defines container size
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'full';

  /**
   * Defines if container is centered or not
   */
  @Prop() centered?: boolean = false;

  /**
   * Set tag for container
   */
  @Prop() tag?: string = 'div';

  render() {
    const { centered, container, tag } = this;

    const Tag = tag;

    return (
      <Host>
        <Tag
          class={`
            gcds-container
            ${centered ? `container-centered` : ''}
            ${container ? `container-${container}` : ''}
          `}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
