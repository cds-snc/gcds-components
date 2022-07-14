import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-input',
  styleUrl: 'gcds-input.css',
  shadow: false,
  scoped: true,
})
export class GcdsInput {
  @Element() el: HTMLElement;

  private lang: string;

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
  @Prop() inputId: string;

  /**
   * Form field label
   */
  @Prop() label: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean;

  /**
   * Size attribute for an input element.
   * Defines max-length as well.
   */
  @Prop() size?: number;

  /**
   * Set Input types
   */
  @Prop() type: 'email' | 'number' | 'password' | 'search' | 'text' | 'url' = 'text';

  /**
   * Default value for an input element.
   */
  @Prop({ mutable: true }) value: string;


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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { disabled, errorMessage, hideLabel, hint, inputId, label, required, size, type, value, lang } = this;

    // Use max-width instead of size attribute to keep field responsive
    const style = {
      maxWidth: `${size * 1.5}ch`
    }

    const attrsInput = {
      disabled,
      required,
      type,
      value,
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${inputId}` : "";
      let errorID = errorMessage ? `error-message-${inputId}` : "";
      attrsInput["aria-describedby"] = `${hintID} ${errorID}`;
    }

    return (
      <Host>
        <div class={`gcds-input-wrapper ${disabled ? 'gcds-disabled' : ''} ${errorMessage ? 'gcds-error' : ''}`}>
          <gcds-label
            {...attrsLabel}
            hide-label={hideLabel}
            label-for={inputId}
            lang={lang}
          />

          {hint ? <gcds-hint hint={hint} hint-id={inputId} /> : null}

          {errorMessage ?
            <gcds-error-message message-id={inputId} message={errorMessage} />
          : null}

          <input
            {...attrsInput}
            class={errorMessage ? 'gcds-error' : null}
            id={inputId}
            name={inputId}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onInput={(e) => this.handleChange(e)}
            aria-labelledby={`label-for-${inputId}`}
            aria-invalid={errorMessage ? 'true' : 'false'}
            maxlength={size}
            style={size ? style : null}
          />
        </div>
      </Host>
    );
  }
}
