import { Component, Element, Event, EventEmitter, Prop, Watch, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-select',
  styleUrl: 'gcds-select.css',
  shadow: false,
  scoped: true,
})
export class GcdsSelect {
  @Element() el: HTMLElement;

  private lang: string;

  /**
   * Id attribute for a select element.
   */
  @Prop({ reflect: true, mutable: true }) selectId!: string;

  /**
   * Form field label.
   */
  @Prop({ reflect: true, mutable: false }) label!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Specifies if a select element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Watch('disabled')
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * The default value is an optional value that gets displayed before the user selects an option.
   */
  @Prop({ reflect: true, mutable: false }) defaultValue: string;

  /**
   * Value for a select element.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Specifies if the select is invalid.
   */
  @Prop({ reflect: true, mutable: true }) hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

  /**
   * Error message for an invalid select element.
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

  /**
    * Update value based on user selection.
    */
  @Event() gcdsSelectChange: EventEmitter;

  handleChange = (e) => {
    let val = e.target && e.target.value;

    this.value = val;
    this.gcdsSelectChange.emit(this.value);
  };

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
  }

  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, hasError } = this;

    const attrsInput = {
      disabled,
      required,
      value,
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${selectId}` : "";
      let errorID = errorMessage ? `error-message-${selectId}` : "";

      attrsInput["aria-describedby"] = `${hintID} ${errorID}`;
    }

    return (
      <Host>
        <div class={`gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <gcds-label
            {...attrsLabel}
            label-for={selectId}
            lang={lang}
          />

          {hint ? <gcds-hint hint={hint} hint-id={selectId} />: null}

          {errorMessage ?
            <gcds-error-message message-id={selectId} message={errorMessage} />
          : null}

          <select
            {...attrsInput}
            id={selectId}
            name={selectId}
            onChange={(e) => this.handleChange(e)}
            aria-invalid={hasError ? 'true' : 'false'}
          >
            { defaultValue ?
              <option value="" disabled selected>{defaultValue}</option>
            : null }

            <slot></slot>
          </select>
        </div>
      </Host>
    );
  }
}
