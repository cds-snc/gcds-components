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

  /**
   * Error message for an invalid form field.
   */
  @Prop() message!: string;

  render() {
    const { messageId, message } = this;

    return (
      <Host
        id={`error-message-${messageId}`}
        class="gcds-error-message-wrapper"
      >
        <gcds-text class="error-message" role="alert" margin-bottom="0">
          {message}
        </gcds-text>
      </Host>
    );
  }
}
