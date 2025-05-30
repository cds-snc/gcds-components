import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-label',
  styleUrl: 'gcds-label.css',
  shadow: false,
  scoped: true,
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

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
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
