import { Component, Prop, Element, Method, Event, EventEmitter, Listen, State, Host, Watch, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator } from '../../validators';
import { validateFieldsetElements } from '../../validators/fieldset-validators/fieldset-validators';

@Component({
  tag: 'gcds-fieldset',
  styleUrl: 'gcds-fieldset.css',
  shadow: true,
})
export class GcdsFieldset {
  @Element() el: HTMLElement;

  private lang: string;

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
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
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
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].setAttribute("disabled", "");
      }
    }
  }

  @Watch('disabled')
  handleDisabledChange(newValue: boolean, _oldValue: boolean) {
    if (_oldValue && newValue != _oldValue) {
      for (var i = 0; i < this.el.children.length; i++) {
        this.el.children[i].removeAttribute("disabled");
      }
    }
  }

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
   * State to handle errors
   */
  @State() hasError: boolean;


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
    if (!this._validator.validate(this.fieldsetId) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsGroupError.emit(this.errorMessage);
    } else {
      this.errorMessage = "";
      this.gcdsGroupErrorClear.emit();
    }
  }

  @Listen('gcdsBlur')
  blurValidate() {
    if (this.validator && this.validateOn == "blur" && !this.el.matches(':focus-within')) {
      this.validate();
    }
  }

  /**
   * Event listener for gcds-fieldset errors
   */
  @Listen('gcdsGroupError', { target: 'body'})
  gcdsParentGroupError(e) {
    if (e.srcElement.contains(this.el) && validateFieldsetElements(this.el, this.el.children).includes(false)) {
      this.hasError = true;
    } else if (e.srcElement.contains(this.el) && !validateFieldsetElements(this.el, this.el.children).includes(false)) {
      this.hasError = false;
    }
  }

  @Listen('gcdsGroupErrorClear', { target: 'body'})
  gcdsParentGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledFieldset();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "fieldset");

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
    const { lang, fieldsetId, legend, required, errorMessage, hasError, hint, disabled } = this;

    const fieldsetAttrs = {
      disabled
    }

    const requiredText = lang == "en" ? "required" : "obligatoire";
    return (
      <Host>
        <fieldset
          class={hasError ? "gcds-error" : null}
          id={fieldsetId}
          {...fieldsetAttrs}
          aria-labelledby={hint ? `legend-${fieldsetId} hint-${fieldsetId}` : `legend-${fieldsetId}`}
        >
          <legend
            id={`legend-${fieldsetId}`}
          >
            {legend}
            {required ?
                <strong class="required">({requiredText})</strong>
              :
                null
            }
          </legend>

          {hint ? <gcds-hint hint={hint} hint-id={fieldsetId} /> : null}

          {errorMessage ? <gcds-error-message message-id={fieldsetId} message={errorMessage} /> : null}
          <slot></slot>
        </fieldset>
      </Host>
    );
  }
}
