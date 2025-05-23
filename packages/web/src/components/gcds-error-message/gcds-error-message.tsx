import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-error-message',
  styleUrl: 'gcds-error-message.css',
  shadow: true,
})
export class GcdsErrorMessage {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Id attribute for the error message.
   */
  @Prop() messageId!: string;

  render() {
    const { messageId } = this;

    return (
      <Host
        id={`error-message-${messageId}`}
        class="gcds-error-message-wrapper"
      >
        <gcds-text class="error-message" role="alert" margin-bottom="75">
          <gcds-icon name="warning-triangle" margin-right="50"></gcds-icon>
          <strong>
            <slot></slot>
          </strong>
        </gcds-text>
      </Host>
    );
  }
}
