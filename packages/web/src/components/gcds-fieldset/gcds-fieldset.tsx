import {
  Component,
  Prop,
  Element,
  Method,
  Event,
  EventEmitter,
  Listen,
  State,
  Host,
  Watch,
  h,
} from '@stencil/core';
import {
  assignLanguage,
  observerConfig,
  inheritAttributes,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import { validateFieldsetElements } from '../../validators/fieldset-validators/fieldset-validators';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-fieldset',
  styleUrl: 'gcds-fieldset.css',
  shadow: { delegatesFocus: true },
})
export class GcdsFieldset {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  isDateInput: boolean = false;

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * The unique identifier for the component
   */
  @Prop({ reflect: true, mutable: false }) fieldsetId!: string;

  /**
   * The title for the contents of the fieldset
   */
  @Prop({ reflect: true, mutable: false }) legend!: string;

  /**
   * Flag the contents are required
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Error message for invalid form elements in group.
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
   * Hint displayed below the legend.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Flag to disable fieldset and its contents
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  @Watch('disabled')
  validateDisabledFieldset() {
    if (this.required) {
      this.disabled = false;
    }

    if (this.disabled == true) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute('disabled', '');
      }
    }
  }

  @Watch('disabled')
  handleDisabledChange(newValue: boolean, _oldValue: boolean) {
    if (_oldValue && newValue != _oldValue) {
      for (let i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute('disabled');
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
   * State to handle errors
   */
  @State() hasError: boolean;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Events
   */

  /**
   * Emitted when the fieldset has a validation error.
   */
  @Event({}) gcdsGroupError!: EventEmitter<string>;

  /**
   * Emitted when the fieldset has a validation error.
   */
  @Event() gcdsGroupErrorClear!: EventEmitter<void>;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (
      !this._validator.validate(this.fieldsetId) &&
      this._validator.errorMessage
    ) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsGroupError.emit(this.errorMessage);
      this.gcdsError.emit({
        id: `#${this.fieldsetId}`,
        message: `${this.legend} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsGroupErrorClear.emit();
      this.gcdsValid.emit({ id: `#${this.fieldsetId}` });
    }
  }

  @Listen('gcdsBlur')
  blurValidate() {
    if (
      this.validator &&
      this.validateOn == 'blur' &&
      !this.el.matches(':focus-within')
    ) {
      this.validate();
    }
  }

  /**
   * Event listener for gcds-fieldset errors
   */
  @Listen('gcdsGroupError', { target: 'body' })
  gcdsParentGroupError(e) {
    if (
      e.srcElement == this.el &&
      validateFieldsetElements(this.el, this.el.children).includes(false)
    ) {
      this.hasError = true;
    }
  }

  @Listen('gcdsGroupErrorClear', { target: 'body' })
  gcdsParentGroupErrorClear(e) {
    if (e.srcElement == this.el && this.hasError) {
      this.hasError = false;
    }
  }

  /**
   * Emitted when the fieldset has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the fieldset has a validation error.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  @Listen('submit', { target: 'document' })
  submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }

      if (this.hasError) {
        e.preventDefault();
      }
    }
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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    this.validateDisabledFieldset();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    if (this.el.getAttribute('data-date')) {
      this.isDateInput = true;
    } else {
      requiredValidator(this.el, 'fieldset');
    }

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

  render() {
    const {
      lang,
      fieldsetId,
      legend,
      required,
      errorMessage,
      hasError,
      hint,
      disabled,
      inheritedAttributes,
    } = this;

    const fieldsetAttrs = {
      disabled,
      ...inheritedAttributes,
    };

    if (errorMessage) {
      fieldsetAttrs['aria-describedby'] = `error-message-${fieldsetId} ${
        fieldsetAttrs['aria-describedby']
          ? ` ${fieldsetAttrs['aria-describedby']}`
          : ''
      }`;
    }

    return (
      <Host>
        <fieldset
          class={`gcds-fieldset ${hasError ? 'gcds-fieldset--error' : ''}`}
          id={fieldsetId}
          {...fieldsetAttrs}
          aria-labelledby={
            hint
              ? `legend-${fieldsetId} hint-${fieldsetId}`
              : `legend-${fieldsetId}`
          }
          tabindex="-1"
          ref={element => (this.shadowElement = element as HTMLElement)}
        >
          <legend id={`legend-${fieldsetId}`} part="legend">
            {legend}
            {required ? (
              <span class="legend__required">({i18n[lang].required})</span>
            ) : null}
          </legend>

          {hint ? <gcds-hint hint-id={fieldsetId}>{hint}</gcds-hint> : null}

          {errorMessage ? (
            <gcds-error-message messageId={fieldsetId}>
              {errorMessage}
            </gcds-error-message>
          ) : null}
          <slot></slot>
        </fieldset>
      </Host>
    );
  }
}
