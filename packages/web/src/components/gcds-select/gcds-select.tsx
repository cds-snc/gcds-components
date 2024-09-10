import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch,
  State,
  Method,
  Host,
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

@Component({
  tag: 'gcds-select',
  styleUrl: 'gcds-select.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsSelect {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  private shadowElement?: HTMLSelectElement;

  _validator: Validator<string> = defaultValidator;

  /**
   * Props
   */

  /**
   * Id attribute for a select element.
   */
  @Prop({ reflect: true, mutable: true }) selectId!: string;

  /**
   * Form field label.
   */
  @Prop({ reflect: true, mutable: false }) label!: string;

  /**
   * Name attribute for select form element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required?: boolean = false;

  /**
   * Specifies if a select element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;

  @Watch('disabled')
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * The default value is an optional value that gets displayed before the user selects an option.
   */
  @Prop({ reflect: true, mutable: false }) defaultValue?: string;

  /**
   * Value for a select element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Error message for an invalid select element.
   */
  @Prop({ reflect: true, mutable: true }) errorMessage?: string;
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
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint?: string;

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
   * Specifies if the select is invalid.
   */
  @State() hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * List of passed options
   */
  @State() options: Element[];

  /**
   * Watch HTML attribute aria-invalid to inherit changes
   */
  @Watch('aria-invalid')
  ariaInvalidWatcher() {
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }
  @Watch('aria-description')
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  /**
   * Events
   */

  /**
   * Emitted when the select value has changed.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Emitted when the select has received input.
   */
  @Event() gcdsInput: EventEmitter;

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val);

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    }

    customEvent.emit(this.value);
  };

  /**
   * Emitted when the select has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the select loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn === 'blur') {
      this.validate().catch( ()=> { /* do nothing */ });
    }

    this.gcdsBlur.emit();
  };

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.selectId}`,
        message: `${this.label} - ${this.errorMessage}`,
      });
	  throw new Error( `Validation of: ${this.label} - ${this.errorMessage}` );
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit({ id: `#${this.selectId}` });
    }
  }

  /**
   * Emitted when the select has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when the select has a validation error.
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

  /**
   * Check if an option is selected or value matches an option's value
   */
  private checkValueOrSelected(option) {
    const value = option.getAttribute('value');

    if (this.value === value) {
      option.setAttribute('selected', 'true');
      this.internals.setFormValue(value);
      this.initialValue = this.value;
    }

    if (option.hasAttribute('selected')) {
      this.value = value;
      this.initialValue = this.value ? this.value : null;
    }
  }

  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
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

    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'select');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    if (this.el.children) {
      this.options = Array.from(this.el.children);

      this.options.forEach(option => {
        if (option.nodeName === 'OPTION') {
          this.checkValueOrSelected(option);
        } else if (option.nodeName === 'OPTGROUP') {
          const subOptions = Array.from(option.children);

          subOptions.map(sub => {
            this.checkValueOrSelected(sub);
          });
        }
      });
    }
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const {
      lang,
      selectId,
      label,
      required,
      disabled,
      defaultValue,
      value,
      hint,
      errorMessage,
      inheritedAttributes,
      hasError,
      name,
      options,
    } = this;

    const attrsSelect = {
      name,
      disabled,
      required,
      value,
      ...inheritedAttributes,
    };

    const attrsLabel = {
      label,
      required,
    };

    if (hint || errorMessage) {
      const hintID = hint ? `hint-${selectId} ` : '';
      const errorID = errorMessage ? `error-message-${selectId} ` : '';

      attrsSelect['aria-describedby'] = `${hintID}${errorID}${
        attrsSelect['aria-describedby']
          ? `${attrsSelect['aria-describedby']}`
          : ''
      }`;
    }

    return (
      <Host>
        <div
          class={`gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${
            hasError ? 'gcds-error' : ''
          }`}
        >
          <gcds-label {...attrsLabel} label-for={selectId} lang={lang} />

          {hint ? <gcds-hint hint-id={selectId}>{hint}</gcds-hint> : null}

          {errorMessage ? (
            <gcds-error-message messageId={selectId}>
              {errorMessage}
            </gcds-error-message>
          ) : null}

          <select
            {...attrsSelect}
            id={selectId}
            onBlur={() => this.onBlur()}
            onFocus={() => this.gcdsFocus.emit()}
            onInput={e => this.handleInput(e, this.gcdsInput)}
            onChange={e => this.handleInput(e, this.gcdsChange)}
            aria-invalid={
              inheritedAttributes['aria-invalid'] === 'true'
                ? inheritedAttributes['aria-invalid']
                : errorMessage
                  ? 'true'
                  : 'false'
            }
            part="select"
            ref={element => (this.shadowElement = element as HTMLSelectElement)}
          >
            {defaultValue ? (
              <option value="" disabled selected>
                {defaultValue}
              </option>
            ) : null}
            {options.map(opt => {
              if (opt.nodeName === 'OPTION') {
                const selected = opt.hasAttribute('selected')
                  ? { selected: true }
                  : null;

                return (
                  <option value={opt.getAttribute('value')} {...selected}>
                    {opt.innerHTML}
                  </option>
                );
              } else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                  const selected = sub.hasAttribute('selected')
                    ? { selected: true }
                    : null;

                  return (
                    <option value={sub.getAttribute('value')} {...selected}>
                      {sub.innerHTML}
                    </option>
                  );
                });

                return (
                  <optgroup label={opt.getAttribute('label')}>
                    {optGroupChildren}
                  </optgroup>
                );
              }
            })}
          </select>
        </div>
      </Host>
    );
  }
}
