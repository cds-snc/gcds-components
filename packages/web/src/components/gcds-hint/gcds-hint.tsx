import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-hint',
  styleUrl: 'gcds-hint.css',
  shadow: true,
})
export class GcdsHint {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Id attribute for the hint.
   */
  @Prop() hintId: string;

  render() {
    const { hintId } = this;

    return (
      <Host id={`hint-${hintId}`}>
        <gcds-text class="gcds-hint" margin-bottom="0" part="hint">
          <slot></slot>
        </gcds-text>
      </Host>
    );
  }
}
