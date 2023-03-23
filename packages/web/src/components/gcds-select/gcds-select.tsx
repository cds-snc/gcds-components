import { Component, Element, Event, EventEmitter, Prop, Watch, State, Method, Host, h, Listen } from '@stencil/core';
import { assignLanguage, inheritAttributes, observerConfig } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator } from '../../validators';

@Component({
  tag: 'gcds-select',
  styleUrl: 'gcds-select.css',
  shadow: false,
  scoped: true,
})
export class GcdsSelect {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  _validator: Validator<string> = defaultValidator;


  /**
   * Props
   */

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
  @Prop({ reflect: true, mutable: false }) required?: boolean = false;

  /**
   * Specifies if a select element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  @Watch('disabled')
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * The default value is an optional value that gets displayed before the user selects an option.
   */
  @Prop({ reflect: true, mutable: false }) defaultValue?: string;

  /**
   * Value for a select element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Error message for an invalid select element.
   */
  @Prop({ reflect: true, mutable: true }) errorMessage?: string;
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
  @Prop({ reflect: true, mutable: false }) hint?: string;

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
  * Custom callback function on change event
  */
  @Prop() changeHandler: Function;

  /**
  * Custom callback function on focus event
  */
  @Prop() focusHandler: Function;

  /**
  * Custom callback function on blur event
  */
  @Prop() blurHandler: Function;

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
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
  * Language of rendered component
  */
  @State() lang: string;


  /**
   * Events
   */

  /**
    * Update value based on user selection.
    */
  @Event() gcdsSelectChange: EventEmitter;

  /**
  * Emitted when the select has focus.
  */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  /**
   * Emitted when the select loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    } else {
      if (this.validateOn == "blur") {
        this.validate();
      }
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
      this.gcdsError.emit({ id: `#${this.selectId}`, message: this.errorMessage });
    } else {
      this.errorMessage = "";
    }
  }

  /**
    * Emitted when the input has a validation error.
    */
  @Event() gcdsError!: EventEmitter<object>;

  @Listen("submit", { target: 'document' })
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }

      if (this.hasError) {
        e.preventDefault();
      }
    }
  }

  handleChange = (e) => {
    if (this.changeHandler) {
      this.changeHandler(e);
    } else {
      let val = e.target && e.target.value;
      this.value = val;
    }

    this.gcdsSelectChange.emit(this.value);
  };

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

    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "select");

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

  render() {
    const { lang, selectId, label, required, disabled, defaultValue, value, hint, errorMessage, inheritedAttributes, hasError } = this;

    const attrsSelect = {
      disabled,
      required,
      value,
      ...inheritedAttributes
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${selectId}` : "";
      let errorID = errorMessage ? ` error-message-${selectId}` : "";

      attrsSelect["aria-describedby"] = `${hintID}${errorID}${attrsSelect["aria-describedby"] ? ` ${attrsSelect["aria-describedby"]}` : ""}`;
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
            <gcds-error-message messageId={selectId} message={errorMessage} />
          : null}

          <select
            {...attrsSelect}
            id={selectId}
            name={selectId}
            onBlur={(e) => this.onBlur(e)}
            onFocus={(e) => this.onFocus(e)}
            onChange={(e) => this.handleChange(e)}
            aria-invalid={hasError ? 'true' : 'false'}
            ref={element => this.shadowElement = element as HTMLElement}
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
