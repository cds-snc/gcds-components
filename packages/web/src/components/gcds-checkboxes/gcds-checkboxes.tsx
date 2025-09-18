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
  handleValidationResult,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import {
  CheckboxObject,
  cleanUpValues,
  renderCheckbox,
  validateOptionsArray,
} from './checkbox';

/**
 * Checkboxes provide a set of options for multiple responses.
 */
@Component({
  tag: 'gcds-checkboxes',
  styleUrl: 'gcds-checkboxes.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsCheckboxes {
  @Element() el: HTMLGcdsCheckboxesElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialState?: string | string[];

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
   * Options to render checkboxes buttons
   */
  @Prop({ mutable: true }) options!: string | Array<CheckboxObject>;

  @Watch('options')
  validateOptions() {
    let invalidOptions = false;

    // Assign optionsArr based on valid options property
    invalidOptions = this.assignOptionsArray();

    // Check if each checkbox object is formatted correctly
    if (this.optionsArr && !invalidOptions) {
      invalidOptions = validateOptionsArray(this.optionsArr);

      // Assign if isGroup logic more than one checkbox object
      if (this.optionsArr && this.optionsArr.length > 1) {
        this.isGroup = true;
      }
    }

    // Log error if invalidOptions
    this.errors = handleErrors(
      this.errors,
      'options',
      this.optionsArr,
      invalidOptions,
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
    } else if (this.optionsArr) {
      // Remove any manually set values that do not match available inputs
      cleanUpValues(this.optionsArr, this.el);

      // Set form value only when a value is assigned
      if ((this.value as string[]).length > 0) {
        this.internals.setFormValue(this.value.toString());
      }
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
   * Emitted when a checkbox has been inputted. Contains the new value in the event detail.
   */
  @Event() gcdsInput: EventEmitter<string[]>;

  /**
   * Emitted when a checkbox has been changed. Contains the new value in the event detail.
   */
  @Event() gcdsChange: EventEmitter<string[]>;

  /**
   * Emitted when the checkbox has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the checkbox has a validation error.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    handleValidationResult(
      this.el as HTMLGcdsCheckboxesElement,
      this._validator.validate(this.value),
      this.isGroup ? this.legend : this.optionsArr[0].label,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
    );
  }

  /*
   * FormData listener to append values like native checkboxes
   */
  @Listen('formdata', { target: 'document' })
  formdataListener(e) {
    const data = e.formData;

    (this.value as string[]).forEach(value => {
      // Set formdata for first entry to remove array
      if ((this.value as string[]).indexOf(value) === 0) {
        data.set(this.name, value);
      } else {
        data.append(this.name, value);
      }
    });
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
    if (this.value != this.initialState) {
      this.value = this.initialState;
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = [...state.split(',')];
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

    // Assign required validator if needed
    requiredValidator(
      this.el,
      this.isGroup ? 'checkboxGroup' : 'checkboxSingle',
    );

    this.validateValidator();

    // Assign checkbox hint to component hint if not group
    if (
      !this.isGroup &&
      this.optionsArr &&
      this.optionsArr[0]?.hint &&
      !this.hint
    ) {
      this.hint = this.optionsArr[0].hint;
    }

    if (!valid) {
      logError('gcds-checkboxes', this.errors);
    }

    this.initialState = this.value;
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  async componentDidUpdate() {
    // Validate props again if changed after render
    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-checkboxes', this.errors);
    }
  }

  // Handle input and change events
  private handleInput = (e, customEvent) => {
    const isInputEvent = e.type === 'input';
    if (isInputEvent) {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        this.value = [...(this.value as Array<string>), target.value];
      } else {
        // Modify options to prevent re-adding prechecked values when user unchecks
        this.options = (
          typeof this.options === 'string'
            ? JSON.parse(this.options as string)
            : (this.options as CheckboxObject[])
        ).map(check =>
          check.value === target.value ? { ...check, checked: false } : check,
        );

        // Remove item from value array when unchecked
        this.value = (this.value as Array<string>).filter(
          item => item !== target.value,
        );
      }

      // Keep form-associated value in sync
      if ((this.value as string[]).length > 0) {
        this.internals.setFormValue(this.value.toString());
      } else {
        this.internals.setFormValue(null);
      }
    }

    customEvent.emit([...(this.value as string[])]);
  };

  /*
   * Validate passed options and assign optionsArr if proper formatting
   */
  private assignOptionsArray() {
    let invalidOptions = false;

    if (Array.isArray(this.options)) {
      this.optionsArr = this.options;
    } else if (typeof this.options === 'string' && this.options.trim() !== '') {
      try {
        // Assign to random variable to not restart options validation
        const optionsCheck = JSON.parse(this.options as string);

        if (Array.isArray(optionsCheck)) {
          this.optionsArr = optionsCheck;
        } else {
          this.optionsArr = null;
          invalidOptions = true;
        }
      } catch (e) {
        logError('gcds-checkboxes', ['Invalid JSON string for options']);
        this.options = null;
        invalidOptions = true;
      }
    }

    return invalidOptions;
  }

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
            this.optionsArr &&
            this.optionsArr.length > 0 &&
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
