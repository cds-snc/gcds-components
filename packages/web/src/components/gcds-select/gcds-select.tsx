import { Component, Element, Event, EventEmitter, Prop, Watch, State, Method, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator } from '../../validators';

@Component({
  tag: 'gcds-select',
  styleUrl: 'gcds-select.css',
  shadow: false,
  scoped: true,
})
export class GcdsSelect {
  @Element() el: HTMLElement;

  private lang: string;

  _validator: Validator<string> = defaultValidator;

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
   * Error message for an invalid select element.
   */
  @Prop({ reflect: true, mutable: true }) errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }

  /**
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<string | ValidatorEntry | Validator<string>>;


  @Watch('validator')
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }

  /**
  * Set event to call validator
  */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other';

  /**
   * Specifies if the select is invalid.
   */
  @State() hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

  /**
    * Update value based on user selection.
    */
  @Event() gcdsSelectChange: EventEmitter;

  /**
  * Emitted when the select has focus.
  */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  /**
   * Emitted when the select loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == "blur") {
      this.validate();
    }

    this.gcdsBlur.emit();

  }

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
    } else {
      this.errorMessage = "";
    }
  }

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
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "select");

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, hasError } = this;

    const attrsSelect = {
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

      attrsSelect["aria-describedby"] = `${hintID} ${errorID}`;
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
            {...attrsSelect}
            id={selectId}
            name={selectId}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
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
