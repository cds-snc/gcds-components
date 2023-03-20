import { Component, Element, Event, EventEmitter, Listen, Method, State, Prop, Watch, Host, h } from '@stencil/core';
import { assignLanguage, elementGroupCheck, inheritAttributes, observerConfig } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator, IGcdsError } from '../../validators';

@Component({
  tag: 'gcds-checkbox',
  styleUrl: 'gcds-checkbox.css',
  shadow: false,
  scoped: true,
})
export class GcdsCheckbox {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  _validator: Validator<any> = defaultValidator;


  /**
   * Props
   */

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
   * Error message for an invalid input element.
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
  * Event listener for gcds-fieldset errors
  */
  @Listen('gcdsGroupError', { target: 'body'})
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    } else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }

  @Listen('gcdsGroupErrorClear', { target: 'body'})
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }

  /**
   * Custom callback function on click event
   */
  @Prop() clickHandler: Function;

  /**
  * Custom callback function on focus event
  */
  @Prop() focusHandler: Function;

  /**
  * Custom callback function on blur event
  */
  @Prop() blurHandler: Function;

  /**
   * State to handle when errors are passed down to component
   */
  @State() parentError: string;

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Specifies if the checkbox is invalid.
   */
  @State() hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
   * Events
   */

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = (e) => {
    if (this.blurHandler) {
      this.blurHandler(e);
    } else {
      if (this.validateOn == "blur") {
        this.validate();
      }
    }

    this.gcdsBlur.emit();
  }

  /**
   * Update value based on user input.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.checked) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.checkboxId}`, message: this.errorMessage });
    } else {
      this.errorMessage = "";
    }
  }

  /**
    * Emitted when the input has a validation error.
    */
  @Event() gcdsError!: EventEmitter<IGcdsError>;

  @Listen("submit", { target: 'document' })
  submitListener(e) {
    if (e.srcElement == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }

      if (this.hasError) {
        e.preventDefault();
      }
    }
  }
  
  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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

    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "checkbox");

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  private onChange = () => {
    this.checked = !this.checked;

    this.gcdsChange.emit(this.value);
  };

  render() {
    const { lang, checkboxId, label, name, required, disabled, value, checked, hint, errorMessage, hasError, parentError, inheritedAttributes } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
      checked,
      ...inheritedAttributes
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage || parentError) {
      let hintID = hint ? `hint-${checkboxId}` : "";
      let errorID = errorMessage ? ` error-message-${checkboxId}` : "";
      let parentErrorID = parentError ? ` parent-error-${checkboxId}` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${parentErrorID}${attrsInput["aria-describedby"] ? ` ${attrsInput["aria-describedby"]}` : ""}`;
    }

    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }

    return (
      <Host>
        <div class={`gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${hasError ? 'gcds-checkbox--error' : ''}`}>
          <input
            id={checkboxId}
            type="checkbox"
            {...attrsInput}
            onBlur={(e) => this.onBlur(e)}
            onFocus={(e) => this.onFocus(e)}
            onChange={() => this.onChange()}
            onClick={(e) => { this.clickHandler && this.clickHandler(e) }}
            ref={element => this.shadowElement = element as HTMLElement}
          />

          <gcds-label
            {...attrsLabel}
            label-for={checkboxId}
            lang={lang}
          >
          </gcds-label>

          {hint ? <gcds-hint hint={hint} hint-id={checkboxId} />: null}

          {errorMessage ? <gcds-error-message messageId={checkboxId} message={errorMessage} /> : null}

          {parentError ? <span id={`parent-error-${checkboxId}`} hidden>{parentError}</span> : null}
        </div>
      </Host>
    );
  }
}
