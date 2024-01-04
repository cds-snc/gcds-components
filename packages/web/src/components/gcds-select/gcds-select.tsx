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
   * Events
   */

  /**
   * Update value based on user selection.
   */
  @Event() gcdsSelectChange: EventEmitter;

  /**
   * Emitted when the select has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = () => {
    this.gcdsFocus.emit();
  };

  /**
   * Emitted when the select loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
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

  handleChange = e => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val);

    this.gcdsSelectChange.emit(this.value);
  };

  /*
   * Form internal functions
   */
  formResetCallback() {
    this.internals.setFormValue('');
    this.value = '';
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
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  componentDidLoad() {
    if (this.el.children) {
      const options = Array.from(this.el.children);
      for (let opt = 0; opt < this.el.children.length + opt; opt++) {
        if (options[opt].hasAttribute('selected')) {
          this.value = options[opt].getAttribute('value');
        }
        this.shadowElement.appendChild(options[opt]);
      }
    }

    if (this.value) {
      for (let opt = 0; opt < this.shadowElement.options.length; opt++) {
        if (this.shadowElement.options[opt].value == this.value) {
          this.shadowElement.options[opt].setAttribute('selected', '');
          this.internals.setFormValue(this.shadowElement.options[opt].value);
        }
      }
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

          {hint ? <gcds-hint hint={hint} hint-id={selectId} /> : null}

          {errorMessage ? (
            <gcds-error-message messageId={selectId} message={errorMessage} />
          ) : null}

          <select
            {...attrsSelect}
            id={selectId}
            onBlur={() => this.onBlur()}
            onFocus={() => this.onFocus()}
            onChange={e => this.handleChange(e)}
            aria-invalid={hasError ? 'true' : 'false'}
            ref={element => (this.shadowElement = element as HTMLSelectElement)}
          >
            {defaultValue ? (
              <option value="" disabled selected>
                {defaultValue}
              </option>
            ) : null}
          </select>
        </div>
      </Host>
    );
  }
}
