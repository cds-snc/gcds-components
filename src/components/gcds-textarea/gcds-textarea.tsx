import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'gcds-textarea',
  styleUrl: 'gcds-textarea.css',
  shadow: true,
})
export class GcdsTextarea {
  @Element() el: HTMLElement;

  /**
   * Textarea props
   */

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
   * Sets the maxlength attribute for the textarea element.
   */
  @Prop() textareaCharacterCount?: number;

  /**
   * Default value for textarea cols.
   */
  @Prop() textareaCols?: number = 45;

  /**
   * Id + name attribute for a textarea element.
   */
  @Prop() textareaId: string;

  /**
   * Default value for textarea rows.
   */
  @Prop() textareaRows?: number = 5;

  /**
   * Default value for a textarea element.
   */
  @Prop() textareaValue?: string;

  /**
   * State
   */
  @State() value: string;


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
  handleChange(e) {
    this.textareaValue = e.target.value;
  }

  render() {
    const { disabled, errorMessage, hideLabel, hint, label, required, textareaCharacterCount, textareaCols, textareaId, textareaRows, textareaValue } = this;

    
    const attrsLabel = {
      label,
      required,
    }

    const attrsTextarea = {
      disabled,
      required,
    };

    return (
      <Host>
        <gcds-label
          {...attrsLabel}
          hide-label={hideLabel}
          label-for={textareaId}
        />

        {hint ? <gcds-hint hint={hint} hint-id={textareaId} /> : null}

        {errorMessage ? 
          <gcds-error-message message-id={textareaId} message={errorMessage} />
        : null}

        <textarea
          {...attrsTextarea}
          id={textareaId}
          class={errorMessage ? 'error' : null}
          name={textareaId}
          cols={textareaCols}
          rows={textareaRows}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={(e) => this.handleChange(e)}
          aria-labelledby={`label-for-${textareaId}`}
          aria-describedby={`${errorMessage ? `error-message-${textareaId}` : ''} ${hint ? `hint-${textareaId}` : ''} ${textareaCharacterCount ? `count-${textareaId}` : ''}`}
          aria-invalid={errorMessage ? 'true' : 'false'}
          maxlength={textareaCharacterCount ? textareaCharacterCount : null}
        >{textareaValue}</textarea>

        {textareaCharacterCount ?
          <p id={`count-${textareaId}`} aria-live="polite">
            {textareaValue  == undefined ? `${textareaCharacterCount} characters allowed`
            : `${textareaCharacterCount - textareaValue.length} characters left`}
          </p>
        : null}
      </Host>
    );
  }
}
