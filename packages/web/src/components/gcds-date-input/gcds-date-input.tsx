import {
  Component,
  Host,
  Element,
  AttachInternals,
  Prop,
  State,
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
   * Language of rendered date input
   */
  @State() lang: string;

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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
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
