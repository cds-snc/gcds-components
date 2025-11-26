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
  handleValidationResult,
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

/**
 * A select provides a large list of options for single selection.
 *
 * @slot default - Slot for options and option groups.
 */
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

  private selectTitle: string = '';

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
   * If true, the select will be focused on component render
   */
  @Prop({ reflect: true }) autofocus?: boolean;

  /**
   * The ID of the form that the select field belongs to.
   */
  @Prop({ reflect: true }) form?: string;

  /**
   * String to have autocomplete enabled.
   */
  @Prop() autocomplete?: string;

  /**
   * Value for a select element.
   */
  @Prop({ mutable: true }) value?: string;

  @Watch('value')
  watchValue(val) {
    if (!this.shadowElement) return;

    if (val && this.checkIfValidValue(val)) {
      this.internals.setFormValue(val);
      this.shadowElement.value = val;
    } else {
      this.internals.setFormValue(null);
      this.value = null;
    }

    this.updateValidity();
  }

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
   * Read-only property of the select, returns a ValidityState object that represents the validity states this element is in.
   */
  @Prop()
  get validity() {
    return this.internals.validity;
  }

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<
    string | ValidatorEntry | Validator<string>
  >;

  @Watch('validator')
  validateValidator() {
    this._validator = getValidator(this.validator);
  }

  /**
   * Set event to call validator
   */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other' = 'blur';

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
  @Event() gcdsChange: EventEmitter<string>;

  /**
   * Emitted when the select has received input.
   */
  @Event() gcdsInput: EventEmitter<string>;

  private handleInput = (e, customEvent) => {
    const val = e.target && e.target.value;
    this.value = val;
    this.internals.setFormValue(val);

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    } else {
      this.updateValidity();
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
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    handleValidationResult(
      this.el as HTMLGcdsSelectElement,
      this._validator.validate(this.value),
      this.label,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
    );


    this.selectTitle = this.errorMessage;
  }

  /**
   * Check the validity of gcds-select
   */
  @Method()
  public async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  /**
   * Get validationMessage of gcds-select
   */
  @Method()
  public async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
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

      if (this.hasError && this.validateOn != 'other') {
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
    } else if (option.hasAttribute('selected')) {
      this.value = value;
      this.internals.setFormValue(value);
      this.initialValue = this.value ? this.value : null;
    }
  }

  private checkIfValidValue(value: string) {
    let isValid = false;

    this.options.forEach(option => {
      if (option.nodeName === 'OPTION') {
        const optionValue = option.getAttribute('value');

        if (optionValue === value) {
          isValid = true;
        }
      } else if (option.nodeName === 'OPTGROUP') {
        const subOptions = Array.from(option.children);

        subOptions.map(sub => {
          const subOptionValue = sub.getAttribute('value');

          if (subOptionValue === value) {
            isValid = true;
          }
        });
      }
    });

    return isValid;
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

  /**
   * Update gcds-select's validity using internal select
   */
  private updateValidity() {
    if (!this.shadowElement) return;

    const validity = this.shadowElement.validity;

    let validationMessage = null;
    if (validity?.valueMissing) {
      validationMessage = this.lang === 'en' ? 'Choose an option to continue.' : 'Choisissez une option pour continuer.';
    }

    this.internals.setValidity(
      validity,
      validationMessage,
      this.shadowElement,
    );

    // Set select title when HTML error occruring
    this.selectTitle = validationMessage;
  }

  /*
   * Observe passed options and update if change
   */
  observeOptions() {
    const config = {
      attributes: false,
      childList: true,
      characterData: true,
      subtree: true,
    };
    const observer = new MutationObserver(() => {
      this.options = Array.from(this.el.children);
      // Reset value to null to prevent unwanted selection
      this.value = null;
    });
    observer.observe(this.el, config);
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

    // Assign required validator if needed
    requiredValidator(this.el, 'select');

    this.validateValidator();

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
      this.value = this.checkIfValidValue(this.value) ? this.value : null;
    }
  }

  async componentDidLoad() {
    this.observeOptions();

    this.updateValidity();

    // Logic to enable autofocus
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.shadowElement?.focus();
      });
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
      selectTitle,
      autofocus,
      form,
      autocomplete,
    } = this;

    const attrsSelect = {
      name,
      disabled,
      required,
      value,
      title: selectTitle,
      autofocus,
      form,
      autocomplete,
      ...inheritedAttributes,
    };

    const attrsLabel = {
      label,
      required,
    };

    if (hint || errorMessage) {
      const hintID = hint ? `hint-${selectId} ` : '';
      const errorID = errorMessage ? `error-message-${selectId} ` : '';

      attrsSelect['aria-describedby'] = `${hintID}${errorID}${attrsSelect['aria-describedby']
        ? `${attrsSelect['aria-describedby']}`
        : ''
        }`;
    }

    return (
      <Host>
        <div
          class={`gcds-select-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''
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
                    {opt.textContent}
                  </option>
                );
              } else if (opt.nodeName === 'OPTGROUP') {
                const optGroupChildren = Array.from(opt.children).map(sub => {
                  const selected = sub.hasAttribute('selected')
                    ? { selected: true }
                    : null;

                  return (
                    <option value={sub.getAttribute('value')} {...selected}>
                      {sub.textContent}
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
