import { Component, Element, Prop, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-checkbox',
  styleUrl: 'gcds-checkbox.css',
  shadow: false,
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
  }

  render() {

    const { lang, checkboxId, label, name, required, disabled, value, hint, errorMessage } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${checkboxId}` : "";
      let errorID = errorMessage ? `error-${checkboxId}` : "";
      attrsInput["aria-describedby"] = `${hintID} ${errorID}`;
    }

    return (
      <Host>
        <fieldset>
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
          {hint ? <p id={`hint-${checkboxId}`}>{hint}</p> : null}
          {errorMessage ? <p id={`error-${checkboxId}`}>{errorMessage}</p> : null}
        </fieldset>
      </Host>
    );
  }

}
