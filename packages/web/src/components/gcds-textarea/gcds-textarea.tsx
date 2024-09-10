import {
  Component,
  Element,
  Event,
  Method,
  Watch,
  EventEmitter,
  Host,
  State,
  Prop,
  h,
  Listen,
  AttachInternals,
} from '@stencil/core';
import {
  assignLanguage,
  inheritAttributes,
  observerConfig,
} from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-textarea',
  styleUrl: 'gcds-textarea.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsTextarea {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  private shadowElement?: HTMLTextAreaElement;

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * Sets the maxlength attribute for the textarea element.
   */
  @Prop() characterCount?: number;

  /**
   * Defines width for textarea cols (the min-width for textarea's is 50%).
   */
  @Prop() cols?: number;

  /**
   * Specifies if a textarea element is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;
  @Watch('disabled')
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Error message for an invalid textarea element.
   */
  @Prop({ mutable: true }) errorMessage?: string;
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
   * Specifies if the label is hidden or not.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * Hint displayed below the label and above the textarea field.
   */
  @Prop() hint?: string;

  /**
   * Form field label
   */
  @Prop() label!: string;

  /**
   * Name attribute for a textarea element.
   */
  @Prop() name!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean = false;

  /**
   * Default value for textarea rows.
   */
  @Prop() rows?: number = 5;

  /**
   * Id attribute for a textarea element.
   */
  @Prop() textareaId!: string;

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value?: string;

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
   * Specifies if the textarea is invalid.
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
   * Emitted when the textarea has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the textarea loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Emitted when the textarea has changed.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Emitted when the textarea has received input.
   */
  @Event() gcdsInput: EventEmitter;

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val ? val : null);

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    }

    customEvent.emit(this.value);
  };

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.textareaId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.textareaId}` });
    }
  }

  /**
   * Emitted when the textarea has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the textarea has a validation error.
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
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
      this.shadowElement.value = this.initialValue;
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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'textarea');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'placeholder',
    ]);

    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const {
      characterCount,
      cols,
      disabled,
      errorMessage,
      hideLabel,
      hint,
      label,
      required,
      rows,
      textareaId,
      value,
      hasError,
      inheritedAttributes,
      lang,
      name,
    } = this;

    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`,
    };

    const attrsLabel = {
      label,
      required,
    };

    const attrsTextarea = {
      name,
      disabled,
      required,
      rows,
      ...inheritedAttributes,
    };

    if (hint || errorMessage || characterCount) {
      const hintID = hint ? `hint-${textareaId} ` : '';
      const errorID = errorMessage ? `error-message-${textareaId} ` : '';
      const countID = characterCount ? `textarea__count-${textareaId} ` : '';
      attrsTextarea['aria-describedby'] = `${hintID}${errorID}${countID}${
        attrsTextarea['aria-describedby']
          ? `${attrsTextarea['aria-describedby']}`
          : ''
      }`;
    }

    return (
      <Host name={name}>
        <div
          class={`gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${
            hasError ? 'gcds-error' : ''
          }`}
        >
          <gcds-label
            {...attrsLabel}
            hide-label={hideLabel}
            label-for={textareaId}
            lang={lang}
          />

          {hint ? <gcds-hint hint-id={textareaId}>{hint}</gcds-hint> : null}

          {errorMessage ? (
            <gcds-error-message messageId={textareaId}>
              {errorMessage}
            </gcds-error-message>
          ) : null}

          <textarea
            {...attrsTextarea}
            class={hasError ? 'gcds-error' : null}
            id={textareaId}
            onBlur={() => this.onBlur()}
            onFocus={() => this.gcdsFocus.emit()}
            onInput={e => this.handleInput(e, this.gcdsInput)}
            onChange={e => this.handleInput(e, this.gcdsChange)}
            aria-labelledby={`label-for-${textareaId}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            maxlength={characterCount ? characterCount : null}
            style={cols ? style : null}
            ref={element =>
              (this.shadowElement = element as HTMLTextAreaElement)
            }
          >
            {value}
          </textarea>

          {characterCount ? (
            <gcds-text id={`textarea__count-${textareaId}`} aria-live="polite">
              {value == undefined
                ? `${characterCount} ${i18n[lang].characters.allowed}`
                : `${characterCount - value.length} ${
                    i18n[lang].characters.left
                  }`}
            </gcds-text>
          ) : null}
        </div>
      </Host>
    );
  }
}
