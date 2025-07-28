import {
  Component,
  Element,
  Event,
  Watch,
  EventEmitter,
  State,
  Method,
  Host,
  Prop,
  h,
  Listen,
  AttachInternals,
} from '@stencil/core';
import {
  assignLanguage,
  handleValidationResult,
  inheritAttributes,
  observerConfig,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
  ValidatorOld,
} from '../../validators';

import I18N from './i18n/i18n.js';

@Component({
  tag: 'gcds-input',
  styleUrl: 'gcds-input.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsInput {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  private shadowElement?: HTMLInputElement;

  // Array to store which native HTML errors are happening on the input
  private htmlValidationErrors = [];

  private inputTitle: string = '';

  _validator: Validator<string> | ValidatorOld<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;
  @Watch('disabled')
  validateDisabledInput() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Error message for an invalid input element.
   */
  @Prop({ mutable: true }) errorMessage?: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == '') {
      this.hasError = false;
    }
  }

  /**
   * Specifies if the label is hidden or not.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * Hint displayed below the label and above the input field.
   */
  @Prop() hint?: string;

  /**
   * Id  attribute for an input element.
   */
  @Prop() inputId!: string;

  /**
   * Name attribute for an input element.
   */
  @Prop() name!: string;

  /**
   * Form field label
   */
  @Prop() label!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean = false;

  /**
   * Size attribute for an input element to provide a visual indication
   * of the expected text length to the user.
   */
  @Prop() size?: number;

  /**
   * Set Input types
   */
  // prettier-ignore
  @Prop() type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' = 'text';

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value?: string;

  @Watch('value')
  watchValue(val) {
    this.internals.setFormValue(val ? val : null);
  }

  /**
   * String to have autocomplete enabled.
   */
  @Prop() autocomplete?: string;

  /**
   * If true, the input will be focused on component render
   */
  @Prop({ reflect: true }) autofocus: boolean;

  /**
   * The ID of the form that the input field belongs to.
   */
  @Prop({ reflect: true }) form?: string;

  /**
   * The maximum value that the input field can accept.
   * Only applies to number input type.
   */
  @Prop({ reflect: true }) max?: number | string;

  /**
   * The maximum number of characters that the input field can accept.
   */
  @Prop({ reflect: true }) maxlength?: number;

  /**
   * The minimum value that the input field can accept.
   * Only applies to number input type.
   */
  @Prop({ reflect: true }) min?: number | string;

  /**
   * The minimum number of characters that the input field can accept.
   */
  @Prop({ reflect: true }) minlength?: number;

  /**
   * Specifies a regular expression the form control's value should match.
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
   */
  @Prop({ reflect: true }) pattern?: string;

  /**
   * If true, the input field cannot be modified.
   */
  @Prop({ reflect: true }) readonly?: boolean;

  /**
   * A number that specifies the granularity that the value must adhere to.
   * Valid for number type.
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
   */
  @Prop({ reflect: true }) step?: number | 'any';

  /**
   * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in.
   */
  @Prop()
  get validity() {
    return this.internals.validity;
  }

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<
    string | ValidatorEntry | Validator<string>
  >;

  @Watch('validator')
  validateValidator() {
    this._validator = getValidator(this.validator);
  }

  /**
   * Set event to call validator
   */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other' = 'blur';

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Specifies if the input is invalid.
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
   * Watch HTML attributes to inherit changes
   */
  @Watch('aria-invalid')
  ariaInvalidWatcher() {
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  @Watch('aria-description')
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  /**
   * Events
   */

  /**
   * Emitted when the input has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Emitted when the element has received input.
   */
  @Event() gcdsInput: EventEmitter;

  /**
   * Handling input and change events on input
   */
  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val ? val : null);

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    } else {
      this.updateValidity();
    }

    customEvent.emit(this.value);
  };

  /**
   * Emitted when the input has changed.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    handleValidationResult(
      this.el as HTMLGcdsInputElement,
      this._validator.validate(this.value),
      this.label,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
    );

    // Native HTML validation
    if (
      (this.required && !this.internals.checkValidity()) ||
      !this.internals.checkValidity()
    ) {
      if (!this.internals.validity.valueMissing) {
        this.errorMessage = this.formatHTMLErrorMessage();
        this.inputTitle = this.errorMessage;
      }
    }
  }

  /**
   * Check the validity of gcds-input
   */
  @Method()
  public async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  /**
   * Get validationMessage of gcds-input
   */
  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  /**
   * Emitted when the input has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the input has a validation error.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  @Listen('submit', { target: 'document' })
  submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }

      if (this.hasError && this.validateOn != 'other') {
        e.preventDefault();
      }
    }
  }

  @Listen('keydown', { target: 'document' })
  keyDownListener(e) {
    if (e.target == this.el && e.key === 'Enter') {
      const formButton = document.createElement('button');
      formButton.type = 'submit';
      formButton.style.display = 'none';
      this.el.closest('form').appendChild(formButton);
      formButton.click();
      formButton.remove();
    }
  }

  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = state;
  }

  /**
   * Update gcds-input's validity using internal input
   */
  private updateValidity(override?) {
    const validity = this.shadowElement.validity;
    this.htmlValidationErrors = [];

    for (const key in validity) {
      // Do not include valid or missingValue keys
      if (validity[key] === true && key !== 'valid') {
        this.htmlValidationErrors.push(key);
      }
    }

    // Add override values to HTML errors array
    for (const key in override) {
      this.htmlValidationErrors.push(key);
    }

    const validityState = override
      ? { ...this.shadowElement.validity, ...override }
      : this.shadowElement.validity;

    const validationMessage =
      this.htmlValidationErrors.length > 0
        ? this.formatHTMLErrorMessage()
        : null;

    this.internals.setValidity(
      validityState,
      validationMessage,
      this.shadowElement,
    );

    // Set input title when HTML error occruring
    this.inputTitle =
      this.htmlValidationErrors.length > 0 ? this.formatHTMLErrorMessage() : '';
  }

  /**
   * Format HTML error message based off assigned attributes
   * This lets us assign custom error messages
   */
  private formatHTMLErrorMessage() {
    switch (this.htmlValidationErrors[0]) {
      case 'valueMissing':
        return I18N[this.lang][this.htmlValidationErrors[0]];
      case 'typeMismatch':
        if (this.type === 'url' || this.type === 'email') {
          return I18N[this.lang][this.htmlValidationErrors[0]][this.type];
        } else {
          return I18N[this.lang][this.htmlValidationErrors[0]];
        }
      case 'tooLong':
        return I18N[this.lang][this.htmlValidationErrors[0]]
          .replace('{max}', this.maxlength)
          .replace('{current}', this.value.length);
      case 'tooShort':
        return I18N[this.lang][this.htmlValidationErrors[0]]
          .replace('{min}', this.minlength)
          .replace('{current}', this.value.length);
      case 'rangeUnderflow':
        return I18N[this.lang][this.htmlValidationErrors[0]].replace(
          '{min}',
          this.min,
        );
      case 'rangeOverflow':
        return I18N[this.lang][this.htmlValidationErrors[0]].replace(
          '{max}',
          this.max,
        );
      case 'stepMismatch':
        return I18N[this.lang][this.htmlValidationErrors[0]]
          .replace(
            '{lower}',
            Math.floor(Number(this.value) / Number(this.step)) *
              Number(this.step),
          )
          .replace(
            '{upper}',
            Math.floor(Number(this.value) / Number(this.step)) *
              Number(this.step) +
              Number(this.step),
          );
      case 'badInput':
      case 'patternMismatch':
      default:
        return I18N[this.lang][this.htmlValidationErrors[0]];
    }
  }

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

    this.validateDisabledInput();
    this.validateHasError();
    this.validateErrorMessage();

    // Assign required validator if needed
    requiredValidator(this.el, 'input', this.type);

    this.validateValidator();

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
  }

  componentDidLoad() {
    let lengthValidity;
    // maxlength/minlength validation on load
    if (this.value && (this.minlength || this.maxlength)) {
      if (this.minlength && this.value.length < this.minlength) {
        lengthValidity = { tooShort: true };
      } else if (this.maxlength && this.value.length > this.maxlength) {
        lengthValidity = { tooLong: true };
      }
    }

    this.updateValidity(lengthValidity);

    // Logic to enable autofocus
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.shadowElement?.focus();
      });
    }
  }

  render() {
    const {
      disabled,
      errorMessage,
      hideLabel,
      hint,
      inputId,
      name,
      label,
      required,
      size,
      type,
      value,
      hasError,
      autocomplete,
      autofocus,
      form,
      max,
      maxlength,
      min,
      minlength,
      pattern,
      readonly,
      step,
      inputTitle,
      inheritedAttributes,
      lang,
    } = this;

    // Use max-width to keep field responsive
    const style = {
      maxWidth: `calc(${size * 2}ch + 1.5rem)`,
    };

    const attrsInput = {
      disabled,
      required,
      type,
      autocomplete,
      autofocus,
      form,
      max,
      maxlength,
      min,
      minlength,
      pattern,
      readonly,
      step,
      value,
      title: inputTitle,
      ...inheritedAttributes,
    };

    const attrsLabel = {
      label,
      required,
    };

    if (hint || errorMessage) {
      const hintID = hint ? `hint-${inputId} ` : '';
      const errorID = errorMessage ? `error-message-${inputId} ` : '';
      attrsInput['aria-describedby'] = `${hintID}${errorID}${
        attrsInput['aria-describedby']
          ? ` ${attrsInput['aria-describedby']}`
          : ''
      }`;
    }

    return (
      <Host>
        <div
          class={`gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${
            hasError ? 'gcds-error' : ''
          }`}
        >
          <gcds-label
            {...attrsLabel}
            hide-label={hideLabel}
            label-for={inputId}
            lang={lang}
          />

          {hint ? <gcds-hint hint-id={inputId}>{hint}</gcds-hint> : null}

          {errorMessage ? (
            <gcds-error-message messageId={inputId}>
              {errorMessage}
            </gcds-error-message>
          ) : null}

          <input
            {...attrsInput}
            class={hasError ? 'gcds-error' : null}
            id={inputId}
            name={name}
            onBlur={() => this.onBlur()}
            onFocus={() => this.gcdsFocus.emit()}
            onInput={e => this.handleInput(e, this.gcdsInput)}
            onChange={e => this.handleInput(e, this.gcdsChange)}
            aria-labelledby={`label-for-${inputId}`}
            aria-invalid={
              inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                  ? 'true'
                  : 'false'
            }
            size={size}
            style={size ? style : null}
            part="input"
            ref={element => (this.shadowElement = element)}
          />
        </div>
      </Host>
    );
  }
}
