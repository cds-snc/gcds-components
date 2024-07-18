import {
  Component,
  Host,
  Element,
  AttachInternals,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

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

  // private initialValue?: string;

  /**
   * Name attribute for the date input.
   */
  @Prop() name!: string;

  /**
   * Form field label
   */
  @Prop() label!: string;

  /**
   * Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements.
   */
  @Prop() format!: 'full' | 'compact';

  /**
   * Default value for the date input element. Format: YYYY-MM-DD
   */
  @Prop({ mutable: true }) value?: string;

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
  @Prop() errorMessage?: string;

  /**
   * Specifies if the date input is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;

  /**
   * States
   */

  /**
   * State to track individual month value
   */
  @State() monthValue: string;

  /**
   * State to track individual month value
   */
  @State() dayValue: string;

  /**
   * State to track individual month value
   */
  @State() yearValue: string;

  /**
   * Language of rendered date input
   */
  @State() lang: string;

  /**
   * Events
   */

  /**
   * Emitted when an element has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when an element loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the element has received input.
   */
  @Event() gcdsInput: EventEmitter;

  /**
   * Emitted when an element has changed.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Emitted when an element has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when an element has validated.
   */
  @Event() gcdsValid!: EventEmitter<object>;

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
    const { yearValue, dayValue, monthValue, format } = this;

    // All form elements have something entered
    if (yearValue && monthValue && dayValue && format == 'full') {
      // Is the combined value a valid date
      if (!isNaN(Date.parse(`${yearValue}-${monthValue}-${dayValue}`))) {
        this.value = `${yearValue}-${monthValue}-${dayValue}`;
        this.internals.setFormValue(this.value);
      }
    } else if (yearValue && monthValue && format == 'compact') {
      // Is the combined value a valid date
      if (!isNaN(Date.parse(`${yearValue}-${monthValue}`))) {
        this.value = `${yearValue}-${monthValue}`;
        this.internals.setFormValue(this.value);
      }
    } else {
      this.value = null;
      this.internals.setFormValue(null);

      return false;
    }

    return true;
  }

  /**
   * Split YYYY-MM-DD value into parts depending on format
   */
  private splitFormValue() {
    if (this.value && !isNaN(Date.parse(this.value))) {
      if (this.format == 'compact') {
        let splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
      } else {
        let splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
        this.dayValue = splitValue[2];
      }
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.splitFormValue();
    if (this.setValue()) {
      // this.initialValue = this.value;
    }
  }

  render() {
    const {
      label,
      name,
      format,
      required,
      hint,
      errorMessage,
      disabled,
      lang,
    } = this;

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
      >
        <option value="01">{i18n[lang].january}</option>
        <option value="02">{i18n[lang].february}</option>
        <option value="03">{i18n[lang].march}</option>
        <option value="04">{i18n[lang].april}</option>
        <option value="05">{i18n[lang].may}</option>
        <option value="06">{i18n[lang].june}</option>
        <option value="07">{i18n[lang].july}</option>
        <option value="08">{i18n[lang].august}</option>
        <option value="09">{i18n[lang].september}</option>
        <option value="10">{i18n[lang].october}</option>
        <option value="11">{i18n[lang].november}</option>
        <option value="12">{i18n[lang].december}</option>
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
      ></gcds-input>
    );

    return (
      <Host name={name}>
        <gcds-fieldset
          legend={label}
          fieldsetId="date-input"
          hint={hint}
          errorMessage={errorMessage}
          required={required}
          lang={lang}
        ></gcds-fieldset>
        {format == 'compact'
          ? [month, year]
          : lang == 'en'
            ? [month, day, year]
            : [day, month, year]}
      </Host>
    );
  }
}
