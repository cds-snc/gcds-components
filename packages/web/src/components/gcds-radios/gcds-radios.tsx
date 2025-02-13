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

import { assignLanguage, inheritAttributes } from '../../utils/utils';
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
    if (typeof this.options == 'object') {
      this.optionObject = this.options;
    } else if (typeof this.options == 'string') {
      this.optionObject = JSON.parse(this.options);
    }

    if (this.optionObject && !this.value) {
      this.optionObject.forEach(radio => {
        if (radio.checked) {
          this.value = radio.value;
          this.internals.setFormValue(radio.value, 'checked');
        }
      });
    }

    console.log(this.optionObject);
  }

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Name of the form field group.
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;

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
  @Prop({ reflect: true, mutable: true }) errorMessage: string;
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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateOptions();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'radio');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    this.initialValue = this.value ? this.value : null;
  }

  private onChange = e => {
    this.gcdsChange.emit(e.target.value);
    this.value = e.target.value;
    this.internals.setFormValue(e.target.value, 'checked');

    const changeEvt = new e.constructor(e.type, e);
    this.el.dispatchEvent(changeEvt);
  };

  render() {
    const {
      lang,
      name,
      legend,
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
                checked:
                  (radio.checked === 'true' || radio.checked === true) &&
                  radio.checked,
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
