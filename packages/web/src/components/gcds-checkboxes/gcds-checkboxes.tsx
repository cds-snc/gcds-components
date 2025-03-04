import {
  Component,
  Element,
  Event,
  EventEmitter,
  Listen,
  Method,
  State,
  Prop,
  Watch,
  Host,
  h,
  AttachInternals,
} from '@stencil/core';
import {
  assignLanguage,
  emitEvent,
  inheritAttributes,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import { CheckboxObject, isCheckboxObject } from './checkbox';

@Component({
  tag: 'gcds-checkboxes',
  styleUrl: 'gcds-checkboxes.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsCheckboxes {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialState?: boolean;

  private shadowElement?: HTMLElement;

  private optionObject;
  private isGroup = false;

  _validator: Validator<unknown> = defaultValidator;

  /**
   * Props
   */

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Name of the form field group.
   */
  @Prop({ reflect: true, mutable: false }) legend: string;

  /**
   * Options to render radio buttons
   */
  @Prop() options!: string | Array<CheckboxObject>;

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

    // Validate options has type CheckboxObject
    if (this.optionObject) {
      this.optionObject.map(radio => {
        if (!isCheckboxObject(radio)) {
          validObject = false;
        }
      });
    }

    if (this.optionObject.length > 1) {
      this.isGroup = true;
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
  }

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
      this.errorMessage = '';
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == '') {
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
   * Emitted when the checkbox has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Update value based on user input.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Emitted when the input has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the input has a validation error.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (
      !this._validator.validate(this.checked) &&
      this._validator.errorMessage
    ) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        message: `${this.legend} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit();
    }
  }

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
    if (this.checked != this.initialState) {
      this.checked = this.initialState;
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.checked = state;
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
    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'checkbox');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    this.internals.setFormValue(this.checked ? this.value : null);
    this.initialState = this.checked ? this.checked : null;
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  private onChange = e => {
    this.checked = !this.checked;
    this.internals.setFormValue(e.target.value, 'checked');

    if (!this.checked) {
      this.internals.setFormValue(null, 'checked');
    }

    const changeEvt = new e.constructor(e.type, e);
    this.el.dispatchEvent(changeEvt);

    this.gcdsChange.emit(this.checked);
  };

  render() {
    const {
      lang,
      legend,
      name,
      required,
      disabled,
      value,
      hint,
      errorMessage,
      hasError,
      inheritedAttributes,
    } = this;

    // const attrsInput = {
    //   name,
    //   disabled,
    //   required,
    //   value,
    //   checked,
    //   ...inheritedAttributes,
    // };

    const fieldsetAttrs = {
      'tabindex': '-1',
      'aria-labelledby': 'checkboxes-legend',
    };

    if (hint) {
      const hintID = this.hint ? `checkboxes-hint ` : '';
      fieldsetAttrs['aria-labelledby'] =
        `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
    }

    // if (hint || errorMessage) {
    //   const hintID = hint ? `hint-${checkboxId} ` : '';
    //   const errorID = errorMessage ? `error-message-${checkboxId} ` : '';
    //   attrsInput['aria-describedby'] = `${hintID}${errorID}${
    //     attrsInput['aria-describedby']
    //       ? `${attrsInput['aria-describedby']}`
    //       : ''
    //   }`;
    // }

    // if (hasError) {
    //   attrsInput['aria-invalid'] = 'true';
    // }

    return (
      <Host>
        <fieldset class="gcds-checkboxes__fieldset" {...fieldsetAttrs}>
          <legend id="checkboxes-legend" class="gcds-checkboxes__legend">
            {legend}
            {required ? (
              <span class="legend__required"> (required)</span>
            ) : null}
          </legend>
          {hint ? (
            <gcds-hint id="checkboxes-hint" hint-id="checkboxes">
              {hint}
            </gcds-hint>
          ) : null}

          {errorMessage ? (
            <div>
              <gcds-error-message id="checkboxes-error" messageId="checkboxes">
                {errorMessage}
              </gcds-error-message>
            </div>
          ) : null}

          {this.optionObject &&
            this.optionObject.map(checkbox => {
              const attrsInput = {
                name,
                disabled: disabled,
                required: checkbox.required,
                value: checkbox.value,
                checked: checkbox.value === value && true,
                ...inheritedAttributes,
              };

              if (checkbox.hint) {
                const hintID = checkbox.hint ? `hint-${checkbox.id} ` : '';
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
                  class={`gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${
                    hasError ? 'gcds-checkbox--error' : ''
                  }`}
                >
                  <input
                    id={checkbox.id}
                    type="checkbox"
                    {...attrsInput}
                    onBlur={() => this.onBlur()}
                    onFocus={() => this.gcdsFocus.emit()}
                    onChange={e => this.onChange(e)}
                    onClick={e => emitEvent(e, this.gcdsClick)}
                  />

                  <gcds-label
                    label={checkbox.label}
                    // required
                    label-for={checkbox.id}
                    lang={lang}
                  ></gcds-label>

                  {checkbox.hint ? (
                    <gcds-hint hint-id={checkbox.id}>{checkbox.hint}</gcds-hint>
                  ) : null}

                  {!this.isGroup && errorMessage ? (
                    <gcds-error-message messageId={checkbox.id}>
                      {checkbox.errorMessage}
                    </gcds-error-message>
                  ) : null}
                </div>
              );
            })}
        </fieldset>
      </Host>
    );
  }
}
