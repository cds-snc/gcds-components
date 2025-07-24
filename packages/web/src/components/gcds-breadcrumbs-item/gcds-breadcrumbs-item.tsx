import {
  Component,
  Element,
  Host,
  Prop,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';

/**
 * Breadcrumbs item represents a single link in the breadcrumbs navigation.
 *
 * @slot - Slot for the breadcrumb item link label.
 */
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

  /**
   * Events
   */

  /**
   * Emitted when the link has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the link loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  @Event() gcdsClick!: EventEmitter<string>;

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
