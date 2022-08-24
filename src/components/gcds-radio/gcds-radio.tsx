import { Component, Element, Event, EventEmitter, State, Prop, Listen, Watch, Host, h } from '@stencil/core';
import { assignLanguage, elementGroupCheck } from '../../utils/utils';

@Component({
  tag: 'gcds-radio',
  styleUrl: 'gcds-radio.css',
  shadow: false,
  scoped: true,
})
export class GcdsRadio {

  @Element() el: HTMLElement;

  private lang: string;
  private shadowElement?: HTMLInputElement;

  /**
   * Id attribute for an input element.
   */
  @Prop({ reflect: true, mutable: true }) radioId!: string;

  /**
   * Form field label
   */
  @Prop({ reflect: true, mutable: false }) label!: string;

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

  /**
   * Specifies if an input element is checked.
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  /**
   * Value for an input element.
   */
  @Prop({ reflect: true, mutable: false }) value: string;

  /**
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Specifies if the radio is invalid.
   */
   @State() hasError: boolean;
   @Watch('hasError')
   validateHasError() {
     if (this.disabled) {
       this.hasError = false;
     }
   }
   
  /**
   * State to handle when errors are passed down to component
   */
  @State() parentError: string;

  /**
   * Emitted when the radio button is checked
   */
  @Event() gcdsRadioChange!: EventEmitter<void>;

  /**
   * Emitted when the radio has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  /**
  * Emitted when the radio loses focus.
  */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    this.gcdsBlur.emit();

  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  private onChange = (name) => {
    this.gcdsRadioChange.emit(name);
    this.checked = this.shadowElement.checked;
  };

  @Listen('gcdsRadioChange', { target: 'document' })
  gcdsradioChangeEventHandler(event) {
    if (event.detail == this.name && event.srcElement != this.shadowElement) {
      if (this.checked) {
        this.checked = false;
      }
    }
  }

  /**
  * Event listener for gcds-fieldset errors
  */
  @Listen('gcdsGroupError', { target: 'body'})
  gcdsgroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    } else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  @Listen('gcdsGroupErrorClear', { target: 'body'})
  gcdsgroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }

  render() {
    const { lang, radioId, label, name, required, disabled, value, checked, hint, hasError, parentError } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
      checked
    };

    if (hint || parentError) {
      let hintID = hint ? `hint-${radioId}` : "";
      let errorID = parentError ? `parent-error-${radioId}` : "";
      attrsInput["aria-describedby"] = `${hintID} ${errorID}`;
    }

    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }

    return (
      <Host>
        <div class={`gcds-radio-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <input
            id={radioId}
            type="radio"
            {...attrsInput}
            onChange={() => this.onChange(name)}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            ref={element => this.shadowElement = element as HTMLInputElement}
          />
          <gcds-label
            label={label}
            label-for={radioId}
            lang={lang}
          >
          </gcds-label>
          {hint ? <gcds-hint hint={hint} hint-id={radioId} />: null}
          {parentError && <span id={`parent-error-${radioId}`} hidden>{parentError}</span>}
        </div>
      </Host>
    );
  }

}
