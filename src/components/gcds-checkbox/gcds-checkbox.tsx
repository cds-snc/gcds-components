import { Component, Element, Prop, Watch, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-checkbox',
  styleUrl: 'gcds-checkbox.css',
  shadow: false,
  scoped: true,
})
export class GcdsCheckbox {

  @Element() el: HTMLElement;

  private lang: string;

  /**
   * Id attribute for an input element.
   */
  @Prop({ reflect: true, mutable: true }) checkboxId!: string;
  /**
   * Form field label
   */
  @Prop({ reflect: true, mutable: false }) label!: string;

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;
  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Watch('disabled')
  validateDisabledCheckbox() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Value for an input element.
   */
  @Prop({ reflect: true, mutable: false }) value: string;

  /**
   * Specifies if an input element is checked.
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  /**
   * Specifies if the input is invalid.
   */
  @Prop({ reflect: true, mutable: true }) hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Error message for an invalid input element.
   */
  @Prop({ reflect: true, mutable: true }) errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    }
  }
  /**
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();

  }

  private onChange = () => {
    this.checked = !this.checked;
  };

  render() {

    const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
      checked,
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${checkboxId}` : "";
      let errorID = errorMessage ? `error-message-${checkboxId}` : "";
      attrsInput["aria-describedby"] = `${hintID} ${errorID}`;
    }

    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }

    return (
      <Host>
        <div class={`gcds-checkbox-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <input
            id={checkboxId}
            type="checkbox"
            {...attrsInput}
            onChange={() => this.onChange()}
          />
          <gcds-label
            {...attrsLabel}
            label-for={checkboxId}
            lang={lang}
          >
          </gcds-label>
          {hint ? <gcds-hint hint={hint} hint-id={checkboxId} />: null}
          {errorMessage ? <gcds-error-message message-id={checkboxId} message={errorMessage} /> : null}
        </div>
      </Host>
    );
  }

}
