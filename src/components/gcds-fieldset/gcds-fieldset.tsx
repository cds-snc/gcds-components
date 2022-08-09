import { Component, Prop, Element, Host, Watch, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-fieldset',
  styleUrl: 'gcds-fieldset.css',
  shadow: true,
})
export class GcdsFieldset {

  private lang: string;

  @Element() el: HTMLElement;

  /**
   * The unique identifier for the component
   */
  @Prop({ reflect: true, mutable: false }) fieldsetId!: string;
  /**
   * The title for the contents of the fieldset
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;

  /**
   * Flag the contents are required
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;
  /**
   * Error message for invalid form elements in group.
   */
  @Prop({ reflect: true, mutable: true }) errorMessage: string;

  @Watch('errorMessage')
  validateErrorFieldset() {
    if (this.disabled) {
      this.errorMessage = "";
    }
  }

  /**
    * Hint displayed below the legend.
    */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Flag to disable fieldset and its contents
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Watch('disabled')
  validateDisabledFieldset() {
    if (this.required) {
      this.disabled = false;
    }
    if (this.disabled == true) {
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute("disabled", "");
      }
    }
  }
  @Watch('disabled')
  handleDisabledChange(newValue: boolean, _oldValue: boolean) {
    if (_oldValue && newValue != _oldValue) {
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute("disabled");
      }
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledFieldset();
    this.validateErrorFieldset();
  }

  render() {
    const { lang, fieldsetId, legend, required, errorMessage, hint, disabled } = this;

    const fieldsetAttrs = {
      disabled
    }

    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (
      <Host>
        <fieldset
          class={errorMessage ? "gcds-error" : null}
          id={fieldsetId}
          {...fieldsetAttrs}
          aria-labelledby={hint ? `legend-${fieldsetId} hint-${fieldsetId}` : `legend-${fieldsetId}`}
        >
          <legend
            id={`legend-${fieldsetId}`}
          >
            {legend}
            {required ?
                <strong class="required">({requiredText})</strong>
              :
                null
            }
          </legend>
          {hint ? <gcds-hint hint={hint} hint-id={fieldsetId} /> : null}
          {errorMessage ? <gcds-error-message message-id={fieldsetId} message={errorMessage} /> : null}
          <slot></slot>
        </fieldset>
      </Host>
    );
  }

}
