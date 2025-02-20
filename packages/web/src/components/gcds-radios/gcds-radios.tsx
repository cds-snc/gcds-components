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

import { assignLanguage, inheritAttributes, logError } from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import i18n from './i18n/i18n';

export type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
};

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
    let validObject = true;
    // Assign optionsObject from passed options string/object
    if (typeof this.options == 'object') {
      this.optionObject = this.options;
    } else if (typeof this.options == 'string') {
      this.optionObject = JSON.parse(this.options);
    } else {
      this.optionObject = null;
    }

    // Validate options has type RadioObject
    if (this.optionObject) {
      this.optionObject.map(radio => {
        if (!isRadioObject(radio)) {
          validObject = false;
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
    if (
      (!this.optionObject && !this.errors.includes('options')) ||
      !validObject
    ) {
      this.errors.push('options');
    } else if (this.errors.includes('options')) {
      this.errors.splice(this.errors.indexOf('options'), 1);
    }
  }

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Watch('name')
  validateName() {
    if (
      (!this.name || this.name.trim() === '') &&
      !this.errors.includes('name')
    ) {
      this.errors.push('name');
    } else if (this.errors.includes('name')) {
      this.errors.splice(this.errors.indexOf('name'), 1);
    }
  }

  /**
   * Name of the form field group.
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;
  @Watch('legend')
  validateLegend() {
    if (
      (!this.legend || this.legend.trim() === '') &&
      !this.errors.includes('legend')
    ) {
      this.errors.push('legend');
    } else if (this.errors.includes('legend')) {
      this.errors.splice(this.errors.indexOf('legend'), 1);
    }
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
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == '') {
      this.hasError = false;
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

  /*
   * Validate required properties
   */
  private validateRequiredProps() {
    this.validateLegend();
    this.validateName();

    if (
      this.errors.includes('name') ||
      this.errors.includes('legend') ||
      this.errors.includes('options')
    ) {
      return false;
    }

    return true;
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
                  <div
                    class={`gcds-radio ${
                      disabled ? 'gcds-radio--disabled' : ''
                    } ${hasError ? 'gcds-radio--error' : ''}`}
                  >
                    <input
                      id={radio.id}
                      type="radio"
                      {...attrsInput}
                      onChange={e => this.onChange(e)}
                      onBlur={() => this.onBlur()}
                      onFocus={() => this.gcdsFocus.emit()}
                      ref={element =>
                        (this.shadowElement = element as HTMLInputElement)
                      }
                    />

                    <gcds-label
                      label={radio.label}
                      label-for={radio.id}
                      lang={lang}
                    ></gcds-label>

                    {radio.hint ? (
                      <gcds-hint hint-id={radio.id}>{radio.hint}</gcds-hint>
                    ) : null}
                  </div>
                );
              })}
          </fieldset>
        </Host>
      );
    }
  }
}

function isRadioObject(obj: any): obj is RadioObject {
  if (typeof obj !== 'object' || obj === null) return false;

  const validKeys = [
    'id',
    'label',
    'value',
    'hint',
    'checked',
    'required',
    'disabled',
  ];
  const objKeys = Object.keys(obj);

  // Check if all properties match the expected type
  const hasValidTypes =
    typeof obj.id === 'string' &&
    typeof obj.label === 'string' &&
    typeof obj.value === 'string' &&
    (obj.hint === undefined || typeof obj.hint === 'string') &&
    (obj.checked === undefined || typeof obj.checked === 'boolean') &&
    (obj.required === undefined || typeof obj.required === 'boolean') &&
    (obj.disabled === undefined || typeof obj.disabled === 'boolean');

  // Ensure no extra properties exist
  const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));

  return hasValidTypes && hasOnlyValidKeys;
}
