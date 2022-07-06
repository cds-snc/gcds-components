import { Component, Element, Prop, Host, h } from '@stencil/core';
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

  @Prop({ reflect: true, mutable: true }) checkboxId!: string;
  @Prop({ reflect: true, mutable: false }) label!: string;
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Prop({ reflect: true, mutable: false }) required: boolean;
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Prop({ reflect: true, mutable: false }) value: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Prop({ reflect: true, mutable: true }) hasError: boolean;
  @Prop({ reflect: true, mutable: true }) errorMessage: string;
  @Prop({ reflect: true, mutable: false }) hint: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    if (this.errorMessage) {
      this.hasError = true;
    }
  }

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
            {...attrsInput}
            id={checkboxId}
            type="checkbox"
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
