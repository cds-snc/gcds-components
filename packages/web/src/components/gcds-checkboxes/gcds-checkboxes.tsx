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

  _validator: Validator<string | string[]> = defaultValidator;

  /**
   * Props
   */

  /**
   * Name attribute for a checkboxes element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Watch('name')
  validateName() {
    this.errors = handleErrors(this.errors, 'name', this.name);
  }

  /**
   * Set the legend for fieldset form group.
   */
  @Prop({ reflect: true, mutable: false }) legend: string;

  @Watch('legend')
  validateLegend() {
    if (this.isGroup) {
      this.errors = handleErrors(this.errors, 'legend', this.legend);
    }
  }

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
          invalidObject = true;
        }
      } catch (e) {
        logError('gcds-checkboxes', ['Invalid JSON string for options']);
        this.options = null;
        invalidObject = true;
        this.errors = handleErrors(
          this.errors,
          'options',
          this.optionsArr,
          invalidObject,
        );
      }
    } else if (Array.isArray(this.options)) {
      this.optionsArr = this.options;
    }

    // Validate options has type CheckboxObject
    if (this.optionsArr && this.optionsArr.length >= 1) {
      invalidObject = this.optionsArr.some(
        checkbox => !isCheckboxObject(checkbox),
      );
    } else if (this.optionsArr && this.optionsArr.length == 0) {
      invalidObject = true;
    }

    // Setup group rendering flag
    if (this.optionsArr && this.optionsArr.length > 1) {
      this.isGroup = true;
    }

    // Log error if no or invalid optionsArr
    this.errors = handleErrors(
      this.errors,
      'options',
      this.optionsArr,
      invalidObject,
    );
  }

  /**
   * Specifies if the checkboxes are required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Specifies if the checkboxes are disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Watch('disabled')
  validateDisabledCheckbox() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Value for checkboxes component.
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

          if (
            (checkbox.checked == 'true' || checkbox.checked === true) &&
            !(this.value as Array<string>).includes(checkbox.value || 'on')
          ) {
            this.value = [
              ...(this.value as Array<string>),
              checkbox.value ? checkbox.value : 'on',
            ];
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
   * Set this to display an error message for invalid <gcds-checkboxes>
   */
  @Prop({ reflect: true, mutable: true }) errorMessage: string;
  @Watch('errorMessage')
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = '';
    } else {
      this.hasError = this.errorMessage ? !this.hasError : false;
    }
  }

  /**
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: true }) hint: string;

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
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

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

  private onBlurValidate = () => {
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
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        message: `${this.isGroup ? this.legend : this.optionsArr[0].label} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit();
    }
  }

  // Submit validation handler
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

  /*
   * Validate required properties
   */
  private validateRequiredProps() {
    this.validateOptions();
    this.validateValue(this.value);
    this.validateLegend();
    this.validateName();

    return isValid(this.errors, ['name', 'legend', 'options']);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    const valid = this.validateRequiredProps();

    this.validateDisabledCheckbox();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    console.log(this.name, this.isGroup)
    requiredValidator(
      this.el,
      this.isGroup ? 'checkboxGroup' : 'checkboxSingle',
    );

    // Assign checkbox hint to component hint if not group
    if (
      !this.isGroup &&
      this.optionsArr &&
      this.optionsArr[0]?.hint &&
      !this.hint
    ) {
      this.hint = this.optionsArr[0].hint;
    }

    if (this.validator) {
      console.log(this.name, this.validator);
      this._validator = getValidator(this.validator);
    }

    if (!valid) {
      logError('gcds-checkboxes', this.errors);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  async componentDidUpdate() {
    // Validate props again if changed after render
    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-checkboxes', this.errors);
    }
  }

  private handleInput = (e, customEvent) => {
    if (e.target.checked) {
      this.value = [...(this.value as Array<string>), e.target.value];
    } else {
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

    if (this.validateRequiredProps()) {
      return (
        <Host onBlur={() => this.isGroup && this.onBlurValidate()}>
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
                  return renderCheckbox(
                    checkbox,
                    this,
                    emitEvent,
                    this.handleInput,
                  );
                })}
            </fieldset>
          ) : (
            renderCheckbox(
              this.optionsArr[0],
              this,
              emitEvent,
              this.handleInput,
            )
          )}
        </Host>
      );
    }
  }
}
