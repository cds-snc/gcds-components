import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-textarea',
  styleUrl: 'gcds-textarea.css',
  shadow: false,
  scoped: true,
})
export class GcdsTextarea {
  @Element() el: HTMLElement;

  private lang: string;

  /**
   * Textarea props
   */

  /**
   * Default value for textarea cols (the min-width for textarea's is 50%).
   */
  @Prop() cols?: number;

  /**
   * Specifies if a textarea element is disabled or not.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Error message for an invalid textarea element.
   */
  @Prop() errorMessage?: string;

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
    this.gcdsBlur.emit();
  }

  /**
    * Update value based on user input.
    */
  @Event() gcdsChange: EventEmitter;

  handleChange(e) {
    let val = e.target && e.target.value;

    this.value = val;
    this.gcdsChange.emit(this.value);
  }

  async componentWillLoad() {
    // Define lang attribute
    if(!this.el.getAttribute('lang')) {
      if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
        this.lang = 'en';
      } else {
        this.lang = 'fr';
      }
    } else if(this.el.getAttribute('lang') == 'en') {
      this.lang = 'en';
    } else {
      this.lang = 'fr';
    }
  }

  render() {
    const { cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaCharacterCount, textareaId, value, lang } = this;
    
    const attrsLabel = {
      label,
      required,
    }

    const attrsTextarea = {
      cols,
      disabled,
      required,
      rows,
    };

    return (
      <Host>
        <fieldset class={`${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}`}>
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
            class={errorMessage ? 'error' : null}
            id={textareaId}
            name={textareaId}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onInput={(e) => this.handleChange(e)}
            aria-labelledby={`label-for-${textareaId}`}
            aria-describedby={`${hint ? `hint-${textareaId}` : ''} ${errorMessage ? `error-message-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            maxlength={textareaCharacterCount ? textareaCharacterCount : null}
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
        </fieldset>
      </Host>
    );
  }
}
