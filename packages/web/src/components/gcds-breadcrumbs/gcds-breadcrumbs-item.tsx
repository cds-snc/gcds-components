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
  @Prop() href?: string | undefined;

  /**
   * Defines if the breadcrumb item is the current page or not.
   */
  @Prop() isCurrentPage?: boolean = false;

  render() {
    const { href, isCurrentPage } = this;

    return (
      <Host>
        {isCurrentPage ?
          <li class="gcds-breadcrumbs-item" aria-current="page">
            <slot></slot>
          </li>
        :
          <li class="gcds-breadcrumbs-item">
            <a href={href}>
              <slot></slot>
            </a>
          </li>
        }
      </Host>
    );
  }
}
