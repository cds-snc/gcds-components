import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Hint provides additional information or context to help users understand the content or functionality of a related element.
 *
 * @slot default - Slot for the hint content.
 */
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
