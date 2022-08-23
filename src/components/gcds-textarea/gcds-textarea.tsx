import { Component, Element, Event, Method, Watch, EventEmitter, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
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

  _validator: Validator<string> = defaultValidator;

  /**
   * Textarea props
   */

  /**
   * Defines width for textarea cols (the min-width for textarea's is 50%).
   */
  @Prop() cols?: number;

  /**
   * Specifies if a textarea element is disabled or not.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Error message for an invalid textarea element.
   */
  @Prop({ mutable: true }) errorMessage?: string;

  /**
   * Specifies if the label is hidden or not.
   */
  @Prop() hideLabel?: boolean;

  /**
   * Hint displayed below the label and above the textarea field.
   */
  @Prop() hint?: string;

  /**
   * Form field label
   */
  @Prop() label: string;

  /**
    * Specifies if a form field is required or not.
    */
  @Prop() required?: boolean;

  /**
   * Default value for textarea rows.
   */
  @Prop() rows?: number = 5;

  /**
   * Sets the maxlength attribute for the textarea element.
   */
  @Prop() textareaCharacterCount?: number;

  /**
   * Id + name attribute for a textarea element.
   */
  @Prop() textareaId: string;

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value: string;

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
  * Events
  */

  /**
    * Emitted when the textarea has focus.
    */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  /**
    * Emitted when the textarea loses focus.
    */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == "blur") {
      this.validate();
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
    let val = e.target && e.target.value;

    this.value = val;
    this.gcdsChange.emit(this.value);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    // Assign required validator if needed
    requiredValidator(this.el, "input");

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const { cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaCharacterCount, textareaId, value, lang } = this;

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
    };

    if (hint || errorMessage || textareaCharacterCount) {
      let hintID = hint ? `hint-${textareaId}` : "";
      let errorID = errorMessage ? `error-message-${textareaId}` : "";
      let countID = textareaCharacterCount ? `count-${textareaId}` : "";
      attrsTextarea["aria-describedby"] = `${hintID} ${errorID} ${countID}`;
    }

    return (
      <Host>
        <div class={`gcds-textarea-wrapper ${disabled ? 'gcds-disabled' : ''} ${errorMessage ? 'gcds-error' : ''}`}>
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
            class={errorMessage ? 'gcds-error' : null}
            id={textareaId}
            name={textareaId}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onInput={(e) => this.handleChange(e)}
            aria-labelledby={`label-for-${textareaId}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            maxlength={textareaCharacterCount ? textareaCharacterCount : null}
            style={cols ? style : null}
          >{value}</textarea>

          {textareaCharacterCount ?
            <p id={`count-${textareaId}`} aria-live="polite">
              {this.lang == 'en'?
                value  == undefined ? `${textareaCharacterCount} characters allowed`
                : `${textareaCharacterCount - value.length} characters left`
              :
                value  == undefined ? `${textareaCharacterCount} caractères maximum`
                : `${textareaCharacterCount - value.length} caractères restants`
              }
            </p>
          : null}
        </div>
      </Host>
    );
  }
}
