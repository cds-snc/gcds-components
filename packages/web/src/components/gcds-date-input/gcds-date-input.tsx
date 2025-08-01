import {
  Component,
  Host,
  Element,
  AttachInternals,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Method,
  Listen,
  h,
} from '@stencil/core';
import {
  assignLanguage,
  observerConfig,
  isValidDate,
  logError,
  handleValidationResult,
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
 * A date input is a space to enter a known date.
 */
@Component({
  tag: 'gcds-date-input',
  styleUrl: 'gcds-date-input.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsDateInput {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  _validator: Validator<string> = defaultValidator;

  /**
   * Name attribute for the date input.
   */
  @Prop() name!: string;
  @Watch('name')
  validateName() {
    if (!this.name) {
      this.errors.push('name');
    } else if (this.errors.includes('name')) {
      this.errors.splice(this.errors.indexOf('name'), 1);
    }
  }

  /**
   * Fieldset legend
   */
  @Prop() legend!: string;
  @Watch('legend')
  validateLegend() {
    if (!this.legend) {
      this.errors.push('legend');
    } else if (this.errors.includes('legend')) {
      this.errors.splice(this.errors.indexOf('legend'), 1);
    }
  }

  /**
   * Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements.
   */
  @Prop() format!: 'full' | 'compact';
  @Watch('format')
  validateFormat() {
    if (!this.format || (this.format != 'full' && this.format != 'compact')) {
      this.errors.push('format');
    } else if (this.errors.includes('format')) {
      this.errors.splice(this.errors.indexOf('format'), 1);
    }
  }

  /**
   * Default value for the date input element. Format: YYYY-MM-DD
   */
  @Prop({ mutable: true }) value?: string;
  @Watch('value')
  validateValue() {
    if (this.value && !isValidDate(this.value)) {
      this.errors.push('value');
      this.value = null;
      console.error(
        `${i18n['en'].valueError}${i18n['en'][`valueFormat${this.format}`]} | ${i18n['fr'].valueError}${i18n['fr'][`valueFormat${this.format}`]}`,
      );
    } else if (this.errors.includes('value')) {
      this.errors.splice(this.errors.indexOf('value'), 1);
    }

    if (this.value) {
      this.splitFormValue();
      this.internals.setFormValue(this.value);
    }
  }

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean = false;

  /**
   * Hint displayed below the legend and above form fields.
   */
  @Prop() hint?: string;

  /**
   * Error message displayed below the legend and above form fields.
   */
  @Prop({ mutable: true }) errorMessage?: string;

  /**
   * Specifies if the date input is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;

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
   * States
   */

  /**
   * State to track individual month value
   */
  @State() monthValue: string = '';

  /**
   * State to track individual month value
   */
  @State() dayValue: string = '';

  /**
   * State to track individual month value
   */
  @State() yearValue: string = '';

  /**
   * Specifies if the date input is invalid.
   */
  @State() hasError: object = {
    day: false,
    month: false,
    year: false,
  };

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

  /**
   * Language of rendered date input
   */
  @State() lang: string;

  /**
   * Events
   */

  /**
   * Emitted when an date-input has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when an date-input loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }
  };

  /**
   * Emitted when the date-input has received input. Contains the new value in the event detail.
   */
  @Event() gcdsInput: EventEmitter<string>;

  /**
   * Emitted when an date-input has changed. Contains the new value in the event detail.
   */
  @Event() gcdsChange: EventEmitter<string>;

  /**
   * Emitted when an date-input has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when an date-input has validated.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    this.hasError = handleValidationResult(
      this.el as HTMLGcdsDateInputElement,
      this._validator.validate(
        this.format === 'full'
          ? `${this.yearValue}-${this.monthValue}-${this.dayValue}`
          : `${this.yearValue}-${this.monthValue}`,
      ),
      this.legend,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
      { day: false, month: false, year: false },
    );
  }

  /*
   * Event listeners
   */

  @Listen('submit', { target: 'document' })
  async submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }

      for (const key in this.hasError) {
        if (this.hasError[key] && this.validateOn != 'other') {
          e.preventDefault();
        }
      }
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

  /*
   * Handle input event to update state
   */
  private handleInput = (e, type) => {
    const val = e.target && e.target.value;

    if (type === 'year') {
      this.yearValue = val;
    } else if (type === 'month') {
      this.monthValue = val;
    } else if (type === 'day') {
      this.dayValue = val;
    }

    this.setValue();

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    }
  };

  /**
   * Logic to combine all input values together based on format
   */
  private setValue() {
    const { yearValue, monthValue, format } = this;
    let { dayValue } = this;

    // Logic to make sure the day input is registered correctly
    if (dayValue && dayValue.length === 1 && dayValue != '0') {
      dayValue = '0' + dayValue;
      this.dayValue = dayValue;
    } else if (dayValue && dayValue.length == 3 && dayValue[0] === '0') {
      dayValue = dayValue.substring(1);
      this.dayValue = dayValue;
    }

    // All form elements have something entered
    if (yearValue && monthValue && dayValue && format == 'full') {
      // Is the combined value a valid date
      if (isValidDate(`${yearValue}-${monthValue}-${dayValue}`, format)) {
        this.value = `${yearValue}-${monthValue}-${dayValue}`;
        this.internals.setFormValue(this.value);
      } else {
        this.value = null;
        this.internals.setFormValue(null);

        return false;
      }
    } else if (yearValue && monthValue && format == 'compact') {
      // Is the combined value a valid date
      if (isValidDate(`${yearValue}-${monthValue}`, format)) {
        this.value = `${yearValue}-${monthValue}`;
        this.internals.setFormValue(this.value);
      } else {
        this.value = null;
        this.internals.setFormValue(null);

        return false;
      }
    } else {
      this.value = null;
      this.internals.setFormValue(null);

      return false;
    }

    return true;
  }

  /**
   * Split value into parts depending on format
   */
  private splitFormValue() {
    if (this.value && isValidDate(this.value, this.format)) {
      if (this.format == 'compact') {
        const splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
      } else {
        const splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
        this.dayValue = splitValue[2];
      }
    }
  }

  private validateRequiredProps() {
    this.validateName();
    this.validateLegend();
    this.validateFormat();

    if (
      this.errors.includes('name') ||
      this.errors.includes('legend') ||
      this.errors.includes('format')
    ) {
      return false;
    }
    return true;
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    // Assign required validator if needed
    requiredValidator(this.el, 'date-input');

    this.validateValidator();

    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-date-input', this.errors);
    }

    this.validateValue();
    if (this.value && isValidDate(this.value)) {
      this.splitFormValue();
      this.setValue();

      this.initialValue = this.value;
    }
  }

  render() {
    const {
      legend,
      name,
      format,
      required,
      hint,
      errorMessage,
      disabled,
      lang,
      hasError,
    } = this;

    const requiredAttr = {};

    if (required) {
      requiredAttr['aria-required'] = 'true';
    }

    const fieldsetAttrs = {
      'tabindex': '-1',
      'aria-labelledby': 'date-input-legend',
    };

    if (hint) {
      const hintID = this.hint ? `date-input-hint ` : '';
      fieldsetAttrs['aria-labelledby'] =
        `${fieldsetAttrs['aria-labelledby']} ${hintID}`.trim();
    }

    // Array of months 01 - 12
    const options = Array.from({ length: 12 }, (_, i) =>
      i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
    );

    const month = (
      <gcds-select
        label={i18n[lang].month}
        selectId="month"
        name="month"
        defaultValue={i18n[lang].selectmonth}
        disabled={disabled}
        onInput={e => this.handleInput(e, 'month')}
        onChange={e => this.handleInput(e, 'month')}
        value={this.monthValue}
        class={`gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['month'].toString()}
        aria-description={hasError['month'] && errorMessage}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {i18n[lang]['months'][option]}
          </option>
        ))}
      </gcds-select>
    );

    const year = (
      <gcds-input
        name="year"
        label={i18n[lang].year}
        inputId="year"
        type="number"
        size={4}
        disabled={disabled}
        value={this.yearValue}
        onInput={e => this.handleInput(e, 'year')}
        onChange={e => this.handleInput(e, 'year')}
        class={`gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['year'].toString()}
        aria-description={hasError['year'] && errorMessage}
      ></gcds-input>
    );

    const day = (
      <gcds-input
        name="day"
        label={i18n[lang].day}
        inputId="day"
        type="number"
        size={2}
        disabled={disabled}
        value={this.dayValue}
        onInput={e => this.handleInput(e, 'day')}
        onChange={e => this.handleInput(e, 'day')}
        class={`gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['day'].toString()}
        aria-description={hasError['day'] && errorMessage}
      ></gcds-input>
    );

    return (
      <Host name={name} onBlur={() => this.onBlur()}>
        {this.validateRequiredProps() && (
          <fieldset class="gcds-date-input__fieldset" {...fieldsetAttrs}>
            <legend id="date-input-legend">
              {legend}
              {required ? (
                <span class="legend__required">{i18n[lang].required}</span>
              ) : null}
            </legend>
            {hint ? (
              <gcds-hint id="date-input-hint" hint-id="date-input">
                {hint}
              </gcds-hint>
            ) : null}
            {errorMessage ? (
              <div>
                <gcds-error-message
                  id="date-input-error"
                  messageId="date-input"
                >
                  {errorMessage}
                </gcds-error-message>
              </div>
            ) : null}
            {format == 'compact'
              ? [month, year]
              : lang == 'en'
                ? [month, day, year]
                : [day, month, year]}
          </fieldset>
        )}
      </Host>
    );
  }
}
