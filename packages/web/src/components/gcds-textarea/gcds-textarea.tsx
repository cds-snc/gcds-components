import {
  Component,
  Element,
  Event,
  Method,
  Watch,
  EventEmitter,
  Host,
  State,
  Prop,
  h,
  Listen,
  AttachInternals,
  Fragment,
} from '@stencil/core';
import {
  assignLanguage,
  handleValidationResult,
  inheritAttributes,
  observerConfig,
  formatHTMLErrorMessage,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import i18n from './i18n/i18n';

/**
 * A text area is a space to enter long-form information in response to a question or instruction.
 */
@Component({
  tag: 'gcds-textarea',
  styleUrl: 'gcds-textarea.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsTextarea {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  private shadowElement?: HTMLTextAreaElement;

  // Array to store which native HTML errors are happening on the textarea
  private htmlValidationErrors = [];

  private textareaTitle: string = '';

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * If true, the textarea will be focused on component render.
   */
  @Prop({ reflect: true }) autofocus: boolean;

  /**
   * If true, character limt counter will not be displayed under the textarea.
   */
  @Prop() hideLimit?: boolean = false;

  /**
   * The maximum number of characters that the textarea field can accept.
   */
  @Prop({ reflect: true }) maxlength?: number;

  /**
   * The minimum number of characters that the textarea field can accept.
   */
  @Prop({ reflect: true }) minlength?: number;

  /**
   * Defines width for textarea cols (the min-width for textarea's is 50%).
   */
  @Prop() cols?: number;

  /**
   * Specifies if a textarea element is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;
  @Watch('disabled')
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Error message for an invalid textarea element.
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
   * Hint displayed below the label and above the textarea field.
   */
  @Prop() hint?: string;

  /**
   * Form field label
   */
  @Prop() label!: string;

  /**
   * Name attribute for a textarea element.
   */
  @Prop() name!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean = false;

  /**
   * Default value for textarea rows.
   */
  @Prop() rows?: number = 5;

  /**
   * Id attribute for a textarea element.
   */
  @Prop() textareaId!: string;

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Set value on internal textarea to allow proper resets
   */
  @Watch('value')
  watchValue(val) {
    // Update DOM textarea if it exists
    if (this.shadowElement) {
      this.shadowElement.value = val || '';
    }

    // Update form value for form association
    this.internals.setFormValue(val || null);
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
   * Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in.
   */
  @Prop()
  get validity() {
    return this.internals.validity;
  }

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Specifies if the textarea is invalid.
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
   * Emitted when the textarea has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the textarea loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Emitted when the textarea has changed.
   */
  @Event() gcdsChange: EventEmitter<string>;

  /**
   * Emitted when the textarea has received input.
   */
  @Event() gcdsInput: EventEmitter<string>;

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val ? val : null);
    this.shadowElement.value = val;

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    } else {
      this.updateValidity();

      if (this.maxlength) {
        setTimeout(() => {
          this.el.shadowRoot.querySelector(`#textarea__sr-count-${this.textareaId}`).textContent = `${i18n[this.lang].characters.left}${this.value == undefined ? this.maxlength : this.maxlength - this.value.length}`
        }, 1500)
      }
    }

    customEvent.emit(this.value);
  };

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    handleValidationResult(
      this.el as HTMLGcdsTextareaElement,
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
        this.errorMessage = formatHTMLErrorMessage(
          this.htmlValidationErrors[0],
          this.lang,
          this.el,
        );
        this.textareaTitle = this.errorMessage;
      }
    }
  }

  /**
   * Check the validity of gcds-textarea
   */
  @Method()
  public async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  /**
   * Get validationMessage of gcds-textarea
   */
  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  /**
   * Emitted when the textarea has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the textarea has a validation error.
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

  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value !== this.initialValue) {
      // Update all relevant values to initialValue
      this.value = this.initialValue;

      // Update DOM element if available
      if (this.shadowElement) {
        this.shadowElement.value = this.initialValue || '';
      }

      // Update form value
      this.internals.setFormValue(this.initialValue || null);
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = state;
  }

  /**
   * Update gcds-textarea's validity using internal textarea validity
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

    let validationMessage = null;
    if (this.htmlValidationErrors.length > 0) {
      validationMessage = formatHTMLErrorMessage(
        this.htmlValidationErrors[0],
        this.lang,
        this.el,
      );
    }

    this.internals.setValidity(
      validityState,
      validationMessage,
      this.shadowElement,
    );

    // Set textarea title when HTML error occruring
    this.textareaTitle = validationMessage;
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

    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();

    // Assign required validator if needed
    requiredValidator(this.el, 'textarea');

    this.validateValidator();

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);

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
      autofocus,
      cols,
      disabled,
      errorMessage,
      hideLabel,
      hideLimit,
      hint,
      label,
      maxlength,
      minlength,
      required,
      rows,
      textareaId,
      value,
      hasError,
      inheritedAttributes,
      lang,
      name,
      textareaTitle,
    } = this;

    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`,
    };

    const attrsLabel = {
      label,
      required,
    };

    const attrsTextarea = {
      name,
      autofocus,
      disabled,
      maxlength,
      minlength,
      required,
      rows,
      title: textareaTitle,
      ...inheritedAttributes,
    };

    if (hint || errorMessage || maxlength) {
      const hintID = hint ? `hint-${textareaId} ` : '';
      const errorID = errorMessage ? `error-message-${textareaId} ` : '';
      const countID =
        maxlength ? `textarea__count-${textareaId} ` : '';
      attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${attrsTextarea['aria-describedby']
        ? `${attrsTextarea['aria-describedby']}`
        : ''
        }`;
    }

    return (
      <Host>
        <div
          class={`gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''
            }`}
        >
          <gcds-label
            {...attrsLabel}
            hide-label={hideLabel}
            label-for={textareaId}
            lang={lang}
          />

          {hint ? <gcds-hint hint-id={textareaId}>{hint}</gcds-hint> : null}

          {errorMessage ? (
            <gcds-error-message messageId={textareaId}>
              {errorMessage}
            </gcds-error-message>
          ) : null}

          <textarea
            {...attrsTextarea}
            class={hasError ? 'gcds-error' : null}
            id={textareaId}
            onBlur={() => this.onBlur()}
            onFocus={() => this.gcdsFocus.emit()}
            onInput={e => this.handleInput(e, this.gcdsInput)}
            onChange={e => this.handleInput(e, this.gcdsChange)}
            aria-labelledby={`label-for-${textareaId}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            style={cols ? style : null}
            ref={element =>
              (this.shadowElement = element as HTMLTextAreaElement)
            }
          >
            {value}
          </textarea>

          {maxlength ? (
            <Fragment>
              <gcds-sr-only tag="span" id={`textarea__count-${textareaId}`}>
                {i18n[lang].characters.maxlength.replace('{{num}}', maxlength)}
              </gcds-sr-only>
              {!hideLimit &&
                <gcds-text id={`textarea__visual-count-${textareaId}`} aria-hidden="true">
                  {i18n[lang].characters.left}
                  {value == undefined ? maxlength : maxlength - value.length}
                </gcds-text>
              }
              <gcds-sr-only tag="span">
                <span id={`textarea__sr-count-${textareaId}`} role="status" aria-atomic="true"></span>
              </gcds-sr-only>
            </Fragment>
          ) : null}
        </div>
      </Host>
    );
  }
}
