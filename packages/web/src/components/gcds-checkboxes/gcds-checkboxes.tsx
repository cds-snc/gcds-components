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
  logError,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import { CheckboxObject, isCheckboxObject, renderCheckbox } from './checkbox';

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

  private initialState?: string;

  private shadowElement?: HTMLElement;

  private optionsArr;
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
  @Prop({ mutable: true }) options!: string | Array<CheckboxObject>;

  @Watch('options')
  validateOptions() {
    let invalidObject = false;
    // Assign optionsArr from passed options string or array
    if (typeof this.options === 'string' && this.options.trim() !== '') {
      try {
        // Assign to random variable to not restart options validation
        const optionsCheck = JSON.parse(this.options as string);

        if (Array.isArray(optionsCheck)) {
          this.optionsArr = optionsCheck;
        } else {
          this.optionsArr = null;
        }
      } catch (e) {
        logError('gcds-checkboxes', ['Invalid JSON string for options']);
        this.options = null;
      }
    }

    // Validate options has type CheckboxObject
    if (this.optionsArr && this.optionsArr.length >= 1) {
      invalidObject = this.optionsArr.some(
        checkbox => !isCheckboxObject(checkbox),
      );
    }

    // Setup group rendering flag
    if (this.optionsArr.length > 1) {
      this.isGroup = true;
    }

    // Error logging will be here
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
   * Value for an checkboxes component.
   */
  @Prop({ reflect: true, mutable: true }) value: string | Array<string> = [];
  @Watch('value')
  validateValue(newValue) {
    // Convert string to array
    if (!Array.isArray(newValue)) {
      try {
        this.value = JSON.parse(newValue);
      } catch (e) {
        logError('gcds-checkboxes', ['Invalid array for value']);
        this.value = [];
      }
    } else {
      // Check options with matching values
      if (this.optionsArr) {
        const availableValues = [];
        this.optionsArr.map(checkbox => {
          availableValues.push(checkbox.value ? checkbox.value : 'on');

          // Passed checkbox is not marked as checked
          if ((this.value as Array<string>).includes(checkbox.value)) {
            checkbox.checked = true;
            // Checked checkbox is not in value
          } else if (
            (checkbox.checked == 'true' || checkbox.checked === true) &&
            !(this.value as Array<string>).includes(checkbox.value || 'on')
          ) {
            (this.value as Array<string>).push(
              checkbox.value ? checkbox.value : 'on',
            );
          }
        });

        // Remove any values that are not available in the inputs
        (this.value as Array<string>)
          .filter(value => !availableValues.includes(value))
          .map(value => {
            this.value = (this.value as Array<string>).filter(
              item => item !== value,
            );
          });
      }

      this.internals.setFormValue(this.value.toString());
      this.initialState = this.value.toString();
    }
  }

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
   * Emmitted when a checkbox has been inputted.
   */
  @Event() gcdsInput: EventEmitter;

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
    if (this.value.toString() != this.initialState) {
      this.value = this.initialState;
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
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
    this.validateValue(this.value);
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
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  private handleInput = (e, customEvent) => {
    if (e.target.checked) {
      (this.value as Array<string>).push(e.target.value);
    } else {
      // Uncheck checkbox in optionsArr
      this.optionsArr.map(checkbox => {
        if (checkbox.id === e.target.id) {
          checkbox.checked = false;
        }
      });
      // Remove value from value array
      this.value = (this.value as Array<string>).filter(
        item => item !== e.target.value,
      );
    }

    this.internals.setFormValue(this.value.toString());

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    }

    customEvent.emit(this.value);
  };

  render() {
    const { legend, required, hint, errorMessage } = this;

    const fieldsetAttrs = {
      'tabindex': '-1',
      'aria-labelledby': 'checkboxes-legend',
    };

    if (hint) {
      const hintID = this.hint ? `checkboxes-hint ` : '';
      fieldsetAttrs['aria-labelledby'] =
        `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
    }

    return (
      <Host>
        {this.isGroup ? (
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
                <gcds-error-message
                  id="checkboxes-error"
                  messageId="checkboxes"
                >
                  {errorMessage}
                </gcds-error-message>
              </div>
            ) : null}

            {this.optionsArr &&
              this.optionsArr.map(checkbox => {
                return renderCheckbox(checkbox, this, emitEvent);
              })}
          </fieldset>
        ) : (
          renderCheckbox(this.optionsArr[0], this, emitEvent)
        )}
      </Host>
    );
  }
}
