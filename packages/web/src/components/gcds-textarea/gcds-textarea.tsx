import { Component, Element, Event, Method, Watch, EventEmitter, Host, State, Prop, h } from '@stencil/core';
import { assignLanguage, inheritAttributes } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator } from '../../validators';

@Component({
  tag: 'gcds-textarea',
  styleUrl: 'gcds-textarea.css',
  shadow: false,
  scoped: true,
})
export class GcdsTextarea {
  @Element() el: HTMLElement;

  private lang: string;
  private shadowElement?: HTMLElement;

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
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
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
    * Specifies if a form field is required or not.
    */
  @Prop() required?: boolean = false;

  /**
   * Default value for textarea rows.
   */
  @Prop() rows?: number = 5;

  /**
   * Id + name attribute for a textarea element.
   */
  @Prop() textareaId!: string;

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<string | ValidatorEntry | Validator<string>>;

  @Watch('validator')
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }

  /**
   * Set event to call validator
   */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other';

  /**
   * Custom callback function on change event
   */
  @Prop() changeHandler: Function;

  /**
    * Custom callback function on focus event
    */
  @Prop() focusHandler: Function;

  /**
    * Custom callback function on blur event
    */
  @Prop() blurHandler: Function;

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
   * Events
   */

  /**
    * Emitted when the textarea has focus.
    */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  /**
    * Emitted when the textarea loses focus.
    */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = (e) => {
    if (this.blurHandler) {
      this.blurHandler(e);
    } else {
      if (this.validateOn == "blur") {
        this.validate();
      }
    }

    this.gcdsBlur.emit();
  }

  /**
    * Update value based on user input.
    */
  @Event() gcdsChange: EventEmitter;

  /**
  * Call any active validators
  */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
    } else {
      this.errorMessage = "";
    }
  }

  handleChange(e) {
    if (this.changeHandler) {
      this.changeHandler(e);
    } else {
      let val = e.target && e.target.value;
      this.value = val;
    }

    this.gcdsChange.emit(this.value);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "textarea");


    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, ['aria-describedby', 'placeholder']);
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang } = this;

    // Use max-width instead of cols attribute to keep field responsive
    const style = {
      maxWidth: `${cols * 1.5}ch`
    }

    const attrsLabel = {
      label,
      required,
    }

    const attrsTextarea = {
      disabled,
      required,
      rows,
      ...inheritedAttributes
    };

    if (hint || errorMessage || characterCount) {
      let hintID = hint ? `hint-${textareaId}` : "";
      let errorID = errorMessage ? ` error-message-${textareaId}` : "";
      let countID = characterCount ? ` textarea__count-${textareaId}` : "";
      attrsTextarea["aria-describedby"] = `${hintID}${errorID}${countID}${attrsTextarea["aria-describedby"] ? ` ${attrsTextarea["aria-describedby"]}` : ""}`;
    }

    return (
      <Host>
        <div class={`gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <gcds-label
            {...attrsLabel}
            hide-label={hideLabel}
            label-for={textareaId}
            lang={lang}
          />

          {hint ? <gcds-hint hint={hint} hint-id={textareaId} /> : null}

          {errorMessage ?
            <gcds-error-message message-id={textareaId} message={errorMessage} />
          : null}

          <textarea
            {...attrsTextarea}
            class={hasError ? 'gcds-error' : null}
            id={textareaId}
            name={textareaId}
            onBlur={(e) => this.onBlur(e)}
            onFocus={(e) => this.onFocus(e)}
            onInput={(e) => this.handleChange(e)}
            aria-labelledby={`label-for-${textareaId}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            maxlength={characterCount ? characterCount : null}
            style={cols ? style : null}
            ref={element => this.shadowElement = element as HTMLElement}
          >{value}</textarea>

          {characterCount ?
            <p id={`textarea__count-${textareaId}`} aria-live="polite">
              {this.lang == 'en'?
                value  == undefined ? `${characterCount} characters allowed`
                : `${characterCount - value.length} characters left`
              :
                value  == undefined ? `${characterCount} caractères maximum`
                : `${characterCount - value.length} caractères restants`
              }
            </p>
          : null}
        </div>
      </Host>
    );
  }
}
