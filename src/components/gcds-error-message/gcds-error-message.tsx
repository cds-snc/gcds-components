import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-error-message',
  styleUrl: 'gcds-error-message.css',
  shadow: true,
})
export class GcdsErrorMessage {
  @Element() el: HTMLElement;

  /**
   * Id attribute for the error message.
   */
  @Prop() messageId: string;

  /**
   * Error message for an invalid form field.
   */
  @Prop() message: string;

  render() {
    const { messageId, message } = this;

    return (
      <Host id={`error-message-${messageId}`}>
        <p
          class="error-message"
          role="alert"
        >
          <strong>{message}</strong>
        </p>
      </Host>
    );
  }
}
