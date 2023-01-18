import { Component, Element, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-label',
  styleUrl: 'gcds-label.css',
  shadow: false,
  scoped: true,
})
export class GcdsLabel {
  @Element() el: HTMLElement;

  private lang: string;
  private focusEl?: HTMLElement;


  /**
   * Props
   */

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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  /**
   * Click label if host element is clicked
   */
  private clickEl() {
    if (this.focusEl) {
      this.focusEl.click();
    }
  }

  private onClick = (ev: any) => {
    if (ev.srcElement.tagName == "GCDS-LABEL") {
      this.clickEl();
    }
  };

  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";

    return (
      <Host
        id={`label-for-${labelFor}`}
        onClick={this.onClick}
      >
        <label
          htmlFor={labelFor}
          class={`gcds-label ${hideLabel ? 'label--hidden' : ''}`}
          ref={(focusEl) => (this.focusEl = focusEl)}
        >
          <span>{label}</span>
          {required ?
            <span class="label--required">({requiredText})</span>
          : null}
        </label>
      </Host>
    );
  }
}
