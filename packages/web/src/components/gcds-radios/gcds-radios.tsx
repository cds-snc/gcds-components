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
  Fragment,
  h,
  AttachInternals,
} from '@stencil/core';

import { RadioObject, isRadioObject } from './radio';
import {
  assignLanguage,
  logError,
  handleErrors,
  isValid,
  handleValidationResult,
  validateRadioCheckboxGroup
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
 * Radios provide a set of options for a single response.
 */
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

  private shadowElement?: HTMLInputElement[];

  private initialValue?: string;

  private optionsArr;

  private radioTitle: string = '';

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * Options to render radio buttons
   */
  @Prop({ mutable: true }) options!: string | Array<RadioObject>;

  @Watch('options')
  validateOptions() {
    let invalidObject = false;
    // Assign optionsArr from passed options string or array
    if (typeof this.options === 'string' && this.options.trim() !== '') {
      try {
        this.options = JSON.parse(this.options as string);
      } catch (e) {
        logError('gcds-radios', ['Invalid JSON string for options']);
        this.options = null;
      }
    }

    if (Array.isArray(this.options)) {
      this.optionsArr = this.options;
    } else {
      this.optionsArr = null;
    }

    // Validate options has type RadioObject
    if (this.optionsArr && this.optionsArr.length > 1) {
      invalidObject = this.optionsArr.some(radio => !isRadioObject(radio));
    } else {
      invalidObject = true;
    }

    // Assign value if passed options has a checked radio
    if (this.optionsArr && !this.value) {
      this.optionsArr.forEach(radio => {
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
      this.optionsArr,
      invalidObject,
    );
  }

  /**
   * The `name` attribute for the radios, used to group radio elements together
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Watch('name')
  validateName() {
    this.errors = handleErrors(this.errors, 'name', this.name);
  }

  /**
   * If true, the input will be focused on component render
   */
  @Prop({ reflect: true }) autofocus: boolean;

  /**
   * The ID of the form that the radios belong to.
   */
  @Prop({ reflect: true }) form?: string;

  /**
   * Label or legend for the group of radio elements
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
   * Hint displayed below the label and above the radio elements
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Set this to display an error message for invalid radios
   */
  @Prop({ reflect: false, mutable: true }) errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    } else {
      this.hasError = this.errorMessage ? true : false;
    }
  }

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  /**
   * Default value for the element
   */
  @Prop({ reflect: true, mutable: true }) value: string;
  @Watch('value')
  validateValue() {
    if (this.optionsArr && this.value !== null) {
      let isValidValue = false;
      this.optionsArr.map(radio => {
        if (radio.value == this.value) {
          isValidValue = true;
        }
      });

      // unset value if no radio button with value available
      if (!isValidValue) {
        this.value = null;
        this.internals.setFormValue(this.value);
      }

      this.updateValidity();
    }
  }

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
   * Specifies if the legend is hidden or not.
   */
  @Prop() hideLegend?: boolean = false;

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
    handleValidationResult(
      this.el as HTMLGcdsRadiosElement,
      this._validator.validate(this.value),
      this.legend,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
    );

    this.radioTitle = this.errorMessage;
  }

  /**
   * Check the validity of gcds-radios
   */
  @Method()
  public async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  /**
   * Get validationMessage of gcds-radios
   */
  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  /**
   * Events
   */

  /**
   * Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail
   */
  @Event() gcdsInput!: EventEmitter<string>;

  /**
   * Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail
   */
  @Event() gcdsChange!: EventEmitter<string>;

  /**
   * Emitted when radios has received focus
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the radios has lost focus
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
   * Emitted when radios has passed validation
   */
  @Event() gcdsValid!: EventEmitter<void>;

  /**
   * Emitted when radios has a validation error
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

  /**
   * Update gcds-input's validity using internal input
   */
  private updateValidity() {
    if (this.shadowElement?.length > 1) {
      const validity = validateRadioCheckboxGroup(this.shadowElement);

      let validationMessage = null;

      if (validity?.valueMissing) {
        validationMessage = this.lang === 'en' ? 'Choose an option to continue.' : 'Choisissez une option pour continuer.';
      }

      this.internals.setValidity(
        validity,
        validationMessage,
        this.shadowElement[0],
      );

      // Set input title when HTML error occruring
      this.radioTitle = validationMessage;
    }
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

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val ? val : null, 'checked');

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    } else {
      this.updateValidity();
    }

    customEvent.emit(this.value);
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

    // Assign required validator if needed
    requiredValidator(this.el, 'radio');

    this.validateValidator();

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

  async componentDidLoad() {
    this.updateValidity();

    // Logic to enable autofocus
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.shadowElement[0].focus();
      });
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
      radioTitle,
      form,
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
              {this.hideLegend ? (
                <gcds-sr-only tag="span">
                  {legend}
                  {required && <span class="legend__required">{i18n[lang].required}</span>}
                </gcds-sr-only>
              ) : (
                <Fragment>
                  {legend}
                  {required && <span class="legend__required">{i18n[lang].required}</span>}
                </Fragment>
              )}
            </legend>

            {hint ? (
              <gcds-hint id="radios-hint" hint-id="radios">
                {hint}
              </gcds-hint>
            ) : null}

            {errorMessage ? (
              <gcds-error-message id="radios-error" messageId="radios">
                {errorMessage}
              </gcds-error-message>
            ) : null}

            {this.optionsArr &&
              this.optionsArr.map(radio => {
                const attrsInput = {
                  name,
                  disabled: disabled,
                  required: required,
                  value: radio.value,
                  checked: radio.value === value,
                  title: radioTitle,
                  form: form,
                  ...inheritedAttributes,
                };

                if (radio.hint) {
                  const hintID = radio.hint ? `hint-${radio.id} ` : '';
                  attrsInput['aria-describedby'] = `${hintID}${attrsInput['aria-describedby']
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
                    class={`gcds-radio ${disabled ? 'gcds-radio--disabled' : ''
                      } ${hasError ? 'gcds-radio--error' : ''}`}
                  >
                    <input
                      id={radio.id}
                      type="radio"
                      {...attrsInput}
                      onInput={e => this.handleInput(e, this.gcdsInput)}
                      onChange={e => this.handleInput(e, this.gcdsChange)}
                      onBlur={() => this.onBlur()}
                      onFocus={() => this.gcdsFocus.emit()}
                      ref={(el) => (this.shadowElement = [...(this.shadowElement || []), el])}
                    />

                    <gcds-label
                      label={radio.label}
                      label-for={radio.id}
                      lang={lang}
                      onClick={e => e.stopPropagation()}
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
