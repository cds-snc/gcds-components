import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-label',
  styleUrl: 'gcds-label.css',
  shadow: false,
  scoped: true,
})
export class GcdsLabel {
  @Element() el: HTMLElement;

  private lang: string;

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
    if(!this.el.getAttribute('lang')) {
      if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
        this.lang = 'en';
      } else {
        this.lang = 'fr';
      }
    } else if(this.el.getAttribute('lang') == 'en') {
      this.lang = 'en';
    } else {
      this.lang = 'fr';
    }
  }

  render() {
    const { hideLabel, labelFor, label, required, lang } = this;
    const requiredText = lang == "en" ? "required" : "obligatoire";

    return (
      <Host id={`label-for-${labelFor}`}>
        <label
          htmlFor={labelFor}
          class={`${hideLabel ? 'hidden' : ''} ${required ? 'required' : ''}`}
        >
          <span>{label}</span>
          {required ?
            <strong class="required">({requiredText})</strong>
          : null}
        </label>
      </Host>
    );
  }
}