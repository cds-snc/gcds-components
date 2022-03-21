import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-label',
  styleUrl: 'gcds-label.css',
  shadow: false,
  scoped: true,
})
export class GcdsLabel {
  @Element() el: HTMLElement;

  /**
   * Specifies if the label is hidden or not.
   */
  @Prop() hideLabel?: boolean;

  /**
   * Form field label
   */
  @Prop() label: string;

  /**
   * Defines the label's for attribute.
   */
  @Prop() labelFor: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean;

  render() {
    const { hideLabel, labelFor, label, required } = this;

    return (
      <Host id={`label-for-${labelFor}`}>
        <label
          htmlFor={labelFor}
          class={`${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}`}
        >
          <span>{label}</span>
          {required ?
            <strong class="required">(required)</strong>
          : null}
        </label>
      </Host>
    );
  }
}
