import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import i18n from './i18n/i18n';

/**
 * Label for form fields, providing accessibility and context for users.
 *
 * @slot - Slot for the label content.
 */
@Component({
  tag: 'gcds-label',
  styleUrl: 'gcds-label.css',
  shadow: false,
  scoped: false,
})
export class GcdsLabel {
  @Element() el: HTMLElement;

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

  /**
   * Language of rendered component
   */
  @State() lang: string;
  @Watch('lang')
  onLangChange(newValue: string) {
    this.lang = newValue.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { hideLabel, labelFor, label, required, lang } = this;

    return (
      <Host id={`label-for-${labelFor}`}>
        <label
          htmlFor={labelFor}
          class={`gcds-label ${hideLabel ? 'label--hidden' : ''}`}
        >
          <span>{label}</span>
          {required ? (
            <span aria-hidden="true" class="label--required">
              ({i18n[lang].required})
            </span>
          ) : null}
        </label>
      </Host>
    );
  }
}
