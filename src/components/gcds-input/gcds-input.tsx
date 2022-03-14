import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-input',
  styleUrl: 'gcds-input.css',
  shadow: true,
})
export class GcdsInput {
  @Element() el: HTMLElement;

  /**
   * Input props
   */

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Error message for an invalid input element.
   */
  @Prop() errorMessage?: string;

  /**
   * Specifies if the label is hidden or not.
   */
  @Prop() hideLabel?: boolean;

  /**
   * Hint displayed below the label and above the input field.
   */
  @Prop() hint?: string;

  /**
   * Id + name attribute for an input element.
   */
  @Prop() id: string;

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Form field label
   */
  @Prop() label: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean;

  /**
   * Set Input types
   */
  @Prop() type: 'email' | 'number' | 'password' | 'search' | 'text' | 'url' = 'text';


  /**
  * Events
  */

  /**
    * Emitted when the input has focus.
    */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  /**
    * Emitted when the input loses focus.
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

  render() {
    const { disabled, errorMessage, hideLabel, hint, id, label, required, type, value } = this;

    const attrsInput = {
      disabled,
      id,
      required,
      type,
      value,
    };

    const attrsLabel = {
      label,
      required,
    }

    return (
      <Host>
        <gcds-label
          {...attrsLabel}
          hide-label={hideLabel}
          label-for={id}
        />

        {hint ? <gcds-hint hint={hint} hint-id={id} /> : null}

        {errorMessage ? 
          <gcds-error-message message-id={id} message={errorMessage} />
        : null}

        <input
          {...attrsInput}
          class={errorMessage ? 'error' : null}
          name={id}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={(e) => this.handleChange(e)}
          aria-labelledby={`label-for-${id}`}
          aria-describedby={`${errorMessage ? `error-message-${id}` : ''} ${hint ? `hint-${id}` : ''}`}
          aria-invalid={errorMessage ? 'true' : 'false'}
        />
      </Host>
    );
  }
}
