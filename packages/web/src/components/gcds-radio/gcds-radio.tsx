import { Component, Element, Event, EventEmitter, State, Prop, Listen, Watch, Host, h } from '@stencil/core';
import { assignLanguage, elementGroupCheck, inheritAttributes, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-radio',
  styleUrl: 'gcds-radio.css',
  shadow: false,
  scoped: true,
})
export class GcdsRadio {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLInputElement;


  /**
   * Props
   */

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
   * Custom callback function on click event
   */
  @Prop() clickHandler: Function;

  /**
  * Custom callback function on focus event
  */
  @Prop() focusHandler: Function;

  /**
  * Custom callback function on blur event
  */
  @Prop() blurHandler: Function;

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
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
  * Language of rendered component
  */
  @State() lang: string;



  /**
   * Events
   */

  /**
   * Emitted when the radio button is checked
   */
  @Event() gcdsRadioChange!: EventEmitter<void>;

  /**
   * Emitted when the radio has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  /**
  * Emitted when the radio loses focus.
  */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = (e) => {
    if (this.blurHandler) {
      this.blurHandler(e);
    }

    this.gcdsBlur.emit();
  }

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
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
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el) && elementGroupCheck(this.name)) {
      this.hasError = true;
      this.parentError = e.detail;
    } else if (!elementGroupCheck(this.name)) {
      this.hasError = false;
      this.parentError = "";
    }
  }
  @Listen('gcdsGroupErrorClear', { target: 'body'})
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = "";
    }
  }

  render() {
    const { lang, radioId, label, name, required, disabled, value, checked, hint, hasError, parentError, inheritedAttributes } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
      checked,
      ...inheritedAttributes
    };

    if (hint || parentError) {
      const hintID = hint ? `hint-${radioId} ` : "";
      const errorID = parentError ? `parent-error-${radioId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"] ? `${attrsInput["aria-describedby"]}` : ""}`;
    }

    if (hasError) {
      attrsInput["aria-invalid"] = "true";
    }

    return (
      <Host>
        <div class={`gcds-radio ${disabled ? 'gcds-radio--disabled' : ''} ${hasError ? 'gcds-radio--error' : ''}`}>
          <input
            id={radioId}
            type="radio"
            {...attrsInput}
            onChange={() => this.onChange(name)}
            onBlur={(e) => this.onBlur(e)}
            onFocus={(e) => this.onFocus(e)}
            onClick={(e) => { this.clickHandler && this.clickHandler(e) }}
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
