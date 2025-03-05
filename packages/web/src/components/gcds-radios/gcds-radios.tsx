import {
  Component,
  Element,
  Event,
  EventEmitter,
  State,
  Prop,
  Watch,
  Listen,
  Method,
  Host,
  h,
  AttachInternals,
} from '@stencil/core';

import { Radio, RadioObject, isRadioObject } from './radio';
import {
  assignLanguage,
  inheritAttributes,
  logError,
  handleErrors,
  isValid,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-radios',
  styleUrl: 'gcds-radios.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsRadios {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private shadowElement?: HTMLInputElement;

  private initialValue?: string;

  private optionObject;

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * Options to render radio buttons
   */
  @Prop() options!: string | Array<RadioObject>;

  @Watch('options')
  validateOptions() {
    let invalidObject = false;
    // Assign optionsObject from passed options string/object
    if (typeof this.options == 'object') {
      this.optionObject = this.options;
    } else if (typeof this.options == 'string' && this.options.trim() !== '') {
      this.optionObject = JSON.parse(this.options);
    } else {
      this.optionObject = null;
    }

    // Validate options has type RadioObject
    if (this.optionObject) {
      this.optionObject.map(radio => {
        if (!isRadioObject(radio)) {
          invalidObject = true;
        }
      });
    }

    // Assign value if passed options has a checked radio
    if (this.optionObject && !this.value) {
      this.optionObject.forEach(radio => {
        if (radio.checked === 'true' || radio.checked === true) {
          this.value = radio.value;
          this.internals.setFormValue(radio.value, 'checked');
        }
      });
    }

    // Log error if no or invalid optionsObject
    this.errors = handleErrors(
      this.errors,
      'options',
      this.optionObject,
      invalidObject,
    );
  }

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Watch('name')
  validateName() {
    this.errors = handleErrors(this.errors, 'name', this.name);
  }

  /**
   * Name of the form field group.
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;
  @Watch('legend')
  validateLegend() {
    this.errors = handleErrors(this.errors, 'legend', this.legend);
  }

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Error message for invalid radio buttons.
   */
  @Prop({ reflect: false, mutable: true }) errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    } else {
      this.hasError = this.errorMessage ? !this.hasError : false;
    }
  }

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) value: string;
  @Watch('value')
  validateValue() {
    if (this.optionObject && this.value !== null) {
      let isValidValue = false;
      this.optionObject.map(radio => {
        if (radio.value == this.value) {
          isValidValue = true;
          radio.checked = true;
        }
      });

      // unset value if no radio button with value available
      if (!isValidValue) {
        this.value = null;
      }
    }
  }

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
   * Specifies if the radio is invalid.
   */
  @State() hasError: boolean;

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        message: `${this.legend} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit();
    }
  }

  /**
   * Events
   */

  /**
   * Emitted when the radio button is checked
   */
  @Event() gcdsInput!: EventEmitter<void>;

  /**
   * Emitted when the radio button is checked
   */
  @Event() gcdsChange!: EventEmitter<void>;

  /**
   * Emitted when the radio has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    this.gcdsBlur.emit();
  };

  private onBlurValidate = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Emitted when the radios has passed validation.
   */
  @Event() gcdsValid!: EventEmitter<void>;

  /**
   * Emitted when the radios has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

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
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue, 'checked');
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
  @Watch('lang')
  watchLang(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.lang = newValue;
    }
  }

  private onChange = e => {
    this.gcdsChange.emit(e.target.value);
    this.value = e.target.value;
    this.internals.setFormValue(e.target.value, 'checked');

    const changeEvt = new e.constructor(e.type, e);
    this.el.dispatchEvent(changeEvt);
  };

  private onInput = e => {
    this.gcdsInput.emit(e.target.value);
    this.value = e.target.value;
    this.internals.setFormValue(e.target.value, 'checked');
  };

  /*
   * Validate required properties
   */
  private validateRequiredProps() {
    this.validateLegend();
    this.validateName();

    return isValid(this.errors, ['name', 'legend', 'options']);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateOptions();
    this.validateRequiredProps();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'radio');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    this.initialValue = this.value ? this.value : null;

    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-radios', this.errors);
    }
  }

  async componentDidUpdate() {
    // Validate props again if changed after render
    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-radios', this.errors);
    }
  }

  render() {
    const {
      lang,
      name,
      legend,
      value,
      required,
      hint,
      errorMessage,
      disabled,
      hasError,
      inheritedAttributes,
    } = this;

    const fieldsetAttrs = {
      'tabindex': '-1',
      'aria-labelledby': 'radios-legend',
    };

    if (hint) {
      const hintID = this.hint ? `radios-hint ` : '';
      fieldsetAttrs['aria-labelledby'] =
        `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
    }

    if (this.validateRequiredProps()) {
      return (
        <Host onBlur={() => this.onBlurValidate()}>
          <fieldset class="gcds-radios__fieldset" {...fieldsetAttrs}>
            <legend id="radios-legend" class="gcds-radios__legend">
              {legend}
              {required ? (
                <span class="legend__required">{i18n[lang].required}</span>
              ) : null}
            </legend>

            {hint ? (
              <gcds-hint id="radios-hint" hint-id="radios">
                {hint}
              </gcds-hint>
            ) : null}

            {errorMessage ? (
              <div>
                <gcds-error-message id="radios-error" messageId="radios">
                  {errorMessage}
                </gcds-error-message>
              </div>
            ) : null}

            {this.optionObject &&
              this.optionObject.map(radio => {
                const attrsInput = {
                  name,
                  disabled: disabled,
                  required: radio.required,
                  value: radio.value,
                  checked: radio.value === value && true,
                  ...inheritedAttributes,
                };

                if (radio.hint) {
                  const hintID = radio.hint ? `hint-${radio.id} ` : '';
                  attrsInput['aria-describedby'] = `${hintID}${
                    attrsInput['aria-describedby']
                      ? `${attrsInput['aria-describedby']}`
                      : ''
                  }`;
                }

                if (hasError) {
                  attrsInput['aria-invalid'] = 'true';
                  attrsInput['aria-description'] = errorMessage;
                }

                return (
                  <Radio
                    radio={radio}
                    disabled={disabled}
                    hasError={hasError}
                    lang={lang}
                    gcdsFocus={this.gcdsFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onInput={this.onInput}
                    attrsInput={attrsInput}
                  />
                );
              })}
          </fieldset>
        </Host>
      );
    }
  }
}
