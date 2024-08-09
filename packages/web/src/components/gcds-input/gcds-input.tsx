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
  inheritAttributes,
  observerConfig,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';

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

  private shadowElement?: HTMLElement;

  _validator: Validator<string> = defaultValidator;

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
   * Size attribute for an input element.
   * Defines max-length as well.
   */
  @Prop() size?: number;

  /**
   * Set Input types
   */
  // prettier-ignore
  @Prop() type?: 'email' | 'number' | 'password' | 'search' | 'text' | 'url' = 'text';

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * String to have autocomplete enabled
   */
  @Prop() autocomplete?: string;

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<
    string | ValidatorEntry | Validator<string>
  >;

  @Watch('validator')
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
    }
  }

  /**
   * Set event to call validator
   */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other';

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
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);
  }
  @Watch('aria-description')
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);
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

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val ? val : null);

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
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
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.inputId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.inputId}` });
    }
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

      if (this.hasError) {
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
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'input', this.type);

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);

    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
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
      inheritedAttributes,
      lang,
    } = this;

    // Use max-width to keep field responsive
    const style = {
      maxWidth: `calc(${size * 2}ch + (2 * var(--gcds-input-padding)))`,
    };

    const attrsInput = {
      disabled,
      required,
      type,
      value,
      autocomplete,
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
            ref={element => (this.shadowElement = element as HTMLElement)}
          />
        </div>
      </Host>
    );
  }
}
