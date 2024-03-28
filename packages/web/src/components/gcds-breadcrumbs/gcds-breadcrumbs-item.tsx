import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-breadcrumbs-item',
  styleUrl: 'gcds-breadcrumbs-item.css',
  shadow: true,
})
export class GcdsBreadcrumbsItem {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Specifies the href of the breadcrumb item.
   */
  @Prop() href!: string | undefined;

  render() {
    const { href } = this;

    return (
      <Host role="listitem" class="gcds-breadcrumbs-item">
        <gcds-link size="regular" href={href}>
          <slot></slot>
        </gcds-link>
      </Host>
    );
  }
}
