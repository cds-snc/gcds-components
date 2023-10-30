import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gcds-sr-only',
  styleUrl: 'gcds-sr-only.css',
  shadow: true,
})
export class GcdsSrOnly {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
