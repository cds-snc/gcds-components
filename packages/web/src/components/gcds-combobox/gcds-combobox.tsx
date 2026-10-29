import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
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
  ValidatorOld,
  getValidator,
  requiredValidator,
} from '../../validators';
import {
  isSuggestionObject,
  SuggestionOption,
} from '../gcds-input/suggestion-option';
import i18n from './i18n/i18n';

/**
 * A searchable multi-select field that displays selected options as removable tags.
 */
@Component({
  tag: 'gcds-combobox',
  styleUrl: 'gcds-combobox.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsCombobox {
  @Element() el: HTMLElement;
  @AttachInternals() internals: ElementInternals;

  /**
   * Props
   */

  /**
   * Id attribute for the combobox input element.
   */
  @Prop() inputId!: string;

  /**
   * Name attribute for the combobox input element.
   */
  @Prop() name!: string;

  /**
   * Form field label
   */
  @Prop() label!: string;

  /**
   * If true, the label will be visually hidden but still accessible to screen readers.
   */
  @Prop() hideLabel = false;

  /**
   * Hint displayed below the label and above the input field.
   */
  @Prop() hint?: string;

  /**
   * JSON option array, or URL returning objects with `name` and `tag` fields.
   */
  @Prop() options?: string | SuggestionOption[];

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required = false;
  private requiredValidatorAdded = false;

  @Watch('required')
  validateRequired() {
    this.syncRequiredValidator();
    this.validateValidator();
    this.updateFormValue();
    if (this.hasError) this.validate();
  }

  /**
   * Specifies if an input element is disabled or not.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Specifies if an input element should be focused on component render.
   */
  @Prop({ reflect: true }) autofocus = false;

  /**
   * The ID of the form that the input field belongs to.
   */
  @Prop({ reflect: true }) form?: string;

  /**
   * If true, a "Select All" option will be displayed at the top of the list of options.
   */
  @Prop() enableSelectAll = false;

  /**
   * Error message for an invalid input element.
   */
  @Prop({ mutable: true }) errorMessage?: string;
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

  /** Initial selected values. */
  @Prop() value?: string | string[];

  /** Selected options, available for programmatic updates. */
  @Prop({ mutable: true }) selectedOptions: SuggestionOption[] = [];

  /**
   * Read-only property of the combobox, returns a ValidityState object that represents the validity states this element is in.
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
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Specifies if the input is invalid.
   */
  @State() hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * List of options filtered by the search query, excluding selected options.
   */
  @State() filteredOptions: SuggestionOption[] = [];

  /**
   * Indicates whether the list of options is open or closed.
   */
  @State() isOpen = false;

  /**
   * Index of the currently active option in the list, or -1 if no option is active.
   */
  @State() activeIndex = -1;

  /**
   * Live message for screen readers, updated when an option is selected or removed.
   */
  @State() private liveMessage = '';

  private optionsList: SuggestionOption[] = [];
  private _validator: Validator<string> | ValidatorOld<string> = defaultValidator;
  private inputElement?: HTMLInputElement;
  private listId: string;
  private mutationObserver?: MutationObserver;
  private initialSelection: SuggestionOption[] = [];

  /**
   * Events
   */

  /**
   * Emitted when the input has changed.
   */
  @Event() gcdsChange: EventEmitter<SuggestionOption[]>;

  /**
   * Emitted when the element has received input.
   */
  @Event() gcdsInput: EventEmitter<string>;

  /**
   * Emitted when the input has focus.
   */
  @Event() gcdsFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() gcdsBlur: EventEmitter<void>;

  /**
   * Emitted when the element is invalid.
   */
  @Event() gcdsError: EventEmitter<object>;

  /**
   * Emitted when the input has a validation error.
   */
  @Event() gcdsValid: EventEmitter<object>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }

    this.gcdsBlur.emit();
  };

  /**
   * Focus the search field and open its list of options.
   */
  @Method()
  async setFocus() {
    if (this.disabled) {
      return;
    }

    this.filteredOptions = this.availableOptions();
    this.activeIndex = -1;
    this.isOpen = true;
    this.inputElement?.focus();
  }

  private get strings() {
    return i18n[this.lang] || i18n.en;
  }

  @Watch('selectedOptions')
  onSelectedOptionsChange() {
    this.updateFormValue();
  }

  @Watch('options')
  async onOptionsChange() {
    await this.loadOptions();
  }

  async componentWillLoad() {
    this.lang = assignLanguage(this.el);
    this.updateLang();

    this.validateHasError();
    this.validateErrorMessage();

    this.listId = `${this.inputId}-listbox`;
    this.inheritedAttributes = inheritAttributes(this.el, null);

    // Reuse the select validator: a non-empty set of selected values satisfies required.
    this.syncRequiredValidator();
    this.validateValidator();

    await this.loadOptions();
    this.updateFormValue();
    this.initialSelection = [...this.selectedOptions];
  }

  componentDidLoad() {
    // Set validity again after the input exists so it can anchor native validation UI.
    this.updateFormValue();

    // Logic to enable autofocus
    if (this.autofocus) {
      requestAnimationFrame(() => {
        this.inputElement?.focus();
      });
    }
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
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

  /**
   * Load options from a property, URL, or the provided select slot.
   */
  private async loadOptions() {
    let options: SuggestionOption[] = [];
    const toOptions = (items) =>
      items.flatMap(item =>
        Object.entries(item || {})
          .filter(([, value]) => value !== undefined && value !== null)
          .map(([label, value]) => ({
            value: String(value),
            label,
          })),
      );

    if (Array.isArray(this.options)) {
      options = toOptions(this.options);
    } else if (typeof this.options === 'string' && this.options.trim()) {
      try {
        const parsed = JSON.parse(this.options);

        if (Array.isArray(parsed)) {
          options = toOptions(parsed);
        } else {
          const response = await fetch(this.options);

          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }

          const data = await response.json();
          options = toOptions(data);
        }
      } catch (error) {
        if (!this.options.trim().startsWith('[')) {
          try {
            const response = await fetch(this.options);

            if (!response.ok) {
              throw new Error(`${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            options = toOptions(data);
          } catch (fetchError) {
            console.error('gcds-combobox: Unable to load options.', fetchError);
          }
        } else {
          console.error('gcds-combobox: Invalid options JSON.', error);
        }
      }
    } else {
      const select = this.el.querySelector(
        '[slot="options"]',
      ) as HTMLSelectElement;
      if (select) {
        options = Array.from(select.options).map(option => ({
          label: option.value,
          value: option.textContent.trim(),
        }));
      }
    }

    this.optionsList = options.filter(
      option => isSuggestionObject(option) && option.value !== undefined && option.value !== "",
    );
    this.filteredOptions = this.availableOptions();
  }

  /** Return options that have not already been selected. */
  private availableOptions() {
    const selectedValues = new Set(
      this.selectedOptions.map(option => option.value!),
    );

    return this.optionsList.filter(option => !selectedValues.has(option.value!));
  }

  /**
   * Keep ElementInternals value and validity in sync with the selection.
   */
  private updateFormValue() {
    if (!this.internals) {
      return;
    }

    const formValue = new FormData();
    if (this.allSelected) {
      formValue.append(this.name || 'value', 'all');
    } else {
      this.selectedOptions.forEach(option => {
        formValue.append(this.name || 'value', option.value!);
      });
    }

    this.internals.setFormValue(formValue, this.selectedOptions.map(option => option.value!).join(','));
    this.internals.setValidity(
      this.required && this.selectedOptions.length === 0 ? { valueMissing: true } : {},
      this.required && this.selectedOptions.length === 0 ? this.strings.requiredError : undefined,
      this.inputElement,
    );
  }

  private syncRequiredValidator() {
    const validators = this.validator || [];
    if (this.required && !validators.includes('requiredSelectField')) {
      requiredValidator(this.el, 'select');
      this.requiredValidatorAdded = true;
    } else if (!this.required && this.requiredValidatorAdded) {
      this.validator = validators.filter(
        validator => validator !== 'requiredSelectField',
      );
      this.requiredValidatorAdded = false;
    }
  }

  private get validationValue() {
    return this.selectedOptions.map(option => option.value!).join(',');
  }

  /**
   * Run configured validators against the selected values.
   */
  @Method()
  async validate() {
    const result = this._validator.validate(this.validationValue);
    handleValidationResult(
      this.el as unknown as HTMLGcdsSelectElement,
      result,
      this.label,
      this.gcdsError,
      this.gcdsValid,
      this.lang,
    );

    const missingSelection = this.required && this.selectedOptions.length === 0;
    this.internals.setValidity(
      result.valid ? {} : missingSelection ? { valueMissing: true } : { customError: true },
      result.valid ? undefined : result.reason[this.lang],
      this.inputElement,
    );
  }

  private get allSelected() {
    return (
      this.optionsList.length > 0 &&
      this.selectedOptions.length === this.optionsList.length
    );
  }

  /**
   * Return the selected option values for form and application code.
   */
  @Method()
  async getSelectedValues(): Promise<string[]> {
    return this.selectedOptions.map(option => option.value!);
  }

  /**
   * Return a copy of the selected option objects.
   */
  @Method()
  async getSelectedOptions(): Promise<SuggestionOption[]> {
    return [...this.selectedOptions];
  }

  /**
   * Set selected options, ignoring values that are not in the option list.
   */
  @Method()
  async setSelectedOptions(items: SuggestionOption[]) {
    const values = new Set(items.map(item => item.value).filter((value): value is string => value !== undefined));
    this.selectedOptions = this.optionsList.filter(option =>
      values.has(option.value),
    );
    this.selectionChanged();
  }

  /**
   * Replace the option list using objects whose keys are labels and values
   * are option values, then retain selections that still exist.
   */
  @Method()
  async setOptions(options: Array<Record<string, unknown>>) {
    this.optionsList = options
      .flatMap(item =>
        item && typeof item === 'object'
          ? Object.entries(item)
              .filter(([, value]) => value !== undefined && value !== null)
              .map(([label, value]) => ({ label, value: String(value) }))
          : [],
      )
      .filter(option => isSuggestionObject(option) && option.value !== undefined && option.value !== '');
    this.selectedOptions = this.optionsList.filter(option =>
      this.selectedOptions.some(selected => selected.value === option.value),
    );
    this.filteredOptions = this.availableOptions();
    this.selectionChanged();
  }

  /**
   * Select every option and collapse the list.
   */
  @Method()
  async selectAll() {
    this.selectedOptions = [...this.optionsList];
    this.closeList();
    this.selectionChanged();
    this.announce(this.strings.allOptions);
  }

  /**
   * Clear all selected options.
   */
  @Method()
  async unselectAll() {
    this.selectedOptions = [];
    this.selectionChanged();
    this.announce(`${this.strings.allOptions} ${this.strings.removeAllOptions}`);
  }

  @Method()
  async checkValidity(): Promise<boolean> {
    return this.internals.checkValidity();
  }

  @Method()
  async getValidationMessage(): Promise<string> {
    return this.internals.validationMessage;
  }

  /**
   * Validate on submit when native constraint validation allows the submit event.
   */
  @Listen('submit', { target: 'document' })
  submitListener(event: Event) {
    if (event.target !== this.el.closest('form')) {
      return;
    }

    if (this.validateOn && this.validateOn !== 'other') {
      this.validate();
      if (this.hasError || !this.internals.checkValidity()) {
        event.preventDefault();
        this.inputElement?.focus();
        this.internals.reportValidity();
      }
    }
  }

  @Listen('invalid', { target: 'document', capture: true })
  invalidListener(event: Event) {
    const eventPath = event.composedPath();
    if (
      (event.target !== this.el && !eventPath.includes(this.el)) ||
      this.validateOn === 'other'
    ) {
      return;
    }

    // Keep the browser from showing its native validation tooltip.
    event.preventDefault();
    this.validate();
  }

  /**
   * Restore the initial selection when the form resets.
   */
  formResetCallback() {
    this.selectedOptions = [...this.initialSelection];
    if (this.inputElement) {
      this.inputElement.value = '';
    }
    this.selectionChanged();
  }

  /**
   * Restore selection state saved by the browser.
   */
  formStateRestoreCallback(state: string | File) {
    const values =
      typeof state === 'string' ? state.split(',').filter(Boolean) : [];
    this.selectedOptions = this.optionsList.filter(option =>
      values.includes(option.value!),
    );
    this.selectionChanged();
  }

  /**
   * Close the options list when the user clicks outside this component.
   */
  @Listen('click', { target: 'document' })
  onDocumentClick(event: MouseEvent) {
    if (!event.composedPath().includes(this.el)) {
      this.closeList();
    }
  }

  /**
   * Update form values and notify listeners after a selection change.
   */
  private selectionChanged() {
    this.filteredOptions = this.availableOptions();
    this.updateFormValue();
    this.gcdsChange.emit([...this.selectedOptions]);
    if (this.hasError) this.validate();
  }

  private onInput = (event: InputEvent) => {
    const query = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase(this.lang);

    this.filteredOptions = this.availableOptions().filter(option =>
      option.label.toLocaleLowerCase(this.lang).includes(query),
    );
    this.activeIndex = -1;
    this.isOpen = true;
    this.gcdsInput.emit((event.target as HTMLInputElement).value);

    if (!this.filteredOptions.length) {
      this.announce(this.strings.noMatchingOptions);
    }
  };

  /**
   * Handle keyboard input on the combobox search field.
   */
  private onKeyDown = (event: KeyboardEvent) => {
    const choices = this.optionCount;
    if ((event.key === 'ArrowLeft' || event.key === 'Backspace') && !this.inputElement.value && this.selectedOptions.length) {
      event.preventDefault();
      this.tagElements[this.tagElements.length - 1]?.focus();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.isOpen = true;

      if (choices) {
        this.activeIndex = (this.activeIndex + (event.key === 'ArrowDown' ? 1 : choices - 1)) % choices;
      }
    } else if (event.key === 'Enter' && this.isOpen) {
      event.preventDefault();

      if (this.enableSelectAll && this.activeIndex === 0) {
        this.selectAll();
      } else {
        const index = this.activeIndex - (this.enableSelectAll ? 1 : 0);

        if (this.filteredOptions[index]) {
          this.chooseOption(this.filteredOptions[index]);
        }
      }
    } else if (event.key === 'Escape' && this.isOpen) {
      event.preventDefault();
      this.closeList();
    } else if (event.key === 'Tab') {
      this.closeList();
    }
  };

  private get optionCount() {
    return (this.filteredOptions.length + (this.enableSelectAll && !this.allSelected ? 1 : 0));
  }

  private get tagElements(): HTMLButtonElement[] {
    return Array.from(
      this.el.shadowRoot?.querySelectorAll<HTMLButtonElement>(
        '.gcds-combobox__tag',
      ) || [],
    );
  }

  /**
   * Handle keyboard navigation for tags.
   */
  private onTagKeyDown = (event: KeyboardEvent, option?: SuggestionOption) => {
    const tag = event.currentTarget as HTMLButtonElement;
    const tags = this.tagElements;
    const index = tags.indexOf(tag);
    if (event.key === 'ArrowLeft' && tags[index - 1]) {
      event.preventDefault();
      tags[index - 1].focus();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (tags[index + 1]) tags[index + 1].focus();
      else this.inputElement?.focus();
    } else if ((event.key === 'Backspace' || event.key === 'Delete') && option) {
      event.preventDefault();
      this.removeOption(option, false);
      requestAnimationFrame(() => {
        const remainingTags = this.tagElements;
        (remainingTags[Math.min(index, remainingTags.length - 1)] || this.inputElement)?.focus();
      });
    } else if ((event.key === 'Backspace' || event.key === 'Delete') && this.allSelected) {
      event.preventDefault();
      this.removeAllTag();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.inputElement?.focus();
    }
  };

  /**
   * Add an option to the selection and return focus to the search field.
   */
  private chooseOption(option: SuggestionOption) {
    this.selectedOptions = [...this.selectedOptions, option];
    this.inputElement.value = '';
    this.activeIndex = -1;
    this.selectionChanged();
    this.isOpen = !this.allSelected;
    this.announce(`${option.value!} ${this.strings.selected}`);
    this.inputElement.focus();
  }

  /**
   * Remove an option from the selection and return focus to the search field.
   */
  private removeOption(option: SuggestionOption, focusInput = true) {
    this.selectedOptions = this.selectedOptions.filter(
      item => item.value !== option.value,
    );
    this.selectionChanged();
    this.announce(
      `${option.value!} ${this.strings.removed}. ${this.selectedOptions.length} ${this.selectedOptions.length >= 1 ? this.strings.itemSelected : this.strings.itemsSelected}.`,
    );
    if (focusInput) this.inputElement?.focus();
  }

  /**
   * Remove the all-options tag and return to the open options list.
   */
  private removeAllTag() {
    this.unselectAll();
    this.activeIndex = -1;
    this.isOpen = true;
    this.inputElement?.focus();
  }

  /**
   * Close the list and reset the active option.
   */
  private closeList() {
    this.isOpen = false;
    this.activeIndex = -1;
  }

  /**
   * Update the live region with an accessible status message.
   */
  private announce(message: string) {
    this.liveMessage = message;
  }

  /**
   * Render one option with its current active state.
   */
  private renderOption(option: SuggestionOption, index: number) {
    const active = index === this.activeIndex;
    const id = `${this.listId}-option-${index}`;

    return (
      <li
        id={id}
        role="option"
        class={{ 'gcds-combobox__option': true, active }}
        onMouseDown={event => event.preventDefault()}
        onMouseEnter={() => (this.activeIndex = index)}
        onClick={() => this.chooseOption(option)}
      >
        {option.value!}
      </li>
    );
  }

  render() {
    const { strings } = this;
    const inputId = this.inputId;
    const labelId = `label-for-${inputId}`;
    const selectionId = `${inputId}-selection`;
    const allSelected = this.allSelected;
    const activeDescendant = this.activeIndex >= 0 ? `${this.listId}-option-${this.activeIndex}` : undefined;

    const selectedTags = allSelected ? (
      <button
        type="button"
        class="gcds-combobox__tag gcds-combobox__tag-all-options"
        part="tag"
        aria-label={`${strings.remove} ${strings.allOptions}`}
        disabled={this.disabled}
        tabIndex={-1}
        onKeyDown={event => this.onTagKeyDown(event)}
        onClick={() => this.removeAllTag()}
      >
        {strings.allOptions}
        <gcds-icon name="close"></gcds-icon>
      </button>
    ) : (
      this.selectedOptions.map(option => (
        <button
          type="button"
          class="gcds-combobox__tag"
          part="tag"
          aria-label={`${strings.remove} ${option.value!}`}
          disabled={this.disabled}
          tabIndex={-1}
          onKeyDown={event => this.onTagKeyDown(event, option)}
          onClick={() => this.removeOption(option)}
        >
          {option.value!}
          <gcds-icon name="close"></gcds-icon>
        </button>
      ))
    );

    const selectAllOption =
      this.enableSelectAll && !allSelected ? (
        <li
          id={`${this.listId}-option-0`}
          role="option"
          class={{
            'gcds-combobox__option': true,
            'gcds-combobox__option-select-all': true,
            'active': this.activeIndex === 0,
          }}
          onMouseDown={event => event.preventDefault()}
          onMouseEnter={() => (this.activeIndex = 0)}
          onClick={() => this.selectAll()}
        >
          {strings.selectAllOptions}
        </li>
      ) : null;

    const optionList = this.filteredOptions.length ? (
      this.filteredOptions.map((option, index) =>
        this.renderOption(
          option,
          index + (this.enableSelectAll && !allSelected ? 1 : 0),
        ),
      )
    ) : (
      <li class="gcds-combobox__empty" role="presentation">
        {strings.noMatchingOptions}
      </li>
    );

    return (
      <Host id={this.el.id || inputId}>
        <div
          class={`gcds-combobox ${this.disabled ? 'gcds-disabled' : ''} ${
            this.hasError ? 'gcds-error' : ''
          }`}
        >
          <gcds-label
            label={this.label}
            required={this.required}
            hide-label={this.hideLabel}
            label-for={inputId}
            lang={this.lang}
          />

          {this.hint ? (<gcds-hint hint-id={inputId}>{this.hint}</gcds-hint>) : null}

          {this.errorMessage ? (
            <gcds-error-message messageId={inputId}>
              {this.errorMessage}
            </gcds-error-message>
          ) : null}

          <div class="gcds-combobox__wrapper" part="control">
            <div
              class="gcds-combobox__control"
              role={this.selectedOptions.length ? 'group' : undefined}
            >
              {selectedTags}

              <input
                {...this.inheritedAttributes}
                ref={element => (this.inputElement = element)}
                id={inputId}
                type="text"
                tabIndex={0}
                role="combobox"
                aria-labelledby={labelId}
                aria-describedby={`${this.hint ? `hint-${inputId} ` : ''}${selectionId}${this.errorMessage ? ` error-message-${inputId}` : ''}`}
                aria-controls={this.listId}
                aria-expanded={this.isOpen ? 'true' : 'false'}
                aria-haspopup="listbox"
                aria-autocomplete="list"
                aria-activedescendant={activeDescendant}
                aria-required={this.required ? 'true' : undefined}
                aria-invalid={
                  this.inheritedAttributes['aria-invalid'] === 'true' ? 'true' : this.errorMessage ? 'true' : 'false'
                }
                title={this.errorMessage}
                autocomplete="off"
                disabled={this.disabled}
                form={this.form}
                onInput={this.onInput}
                onKeyDown={this.onKeyDown}
                onFocus={() => {
                  this.gcdsFocus.emit();
                  setTimeout(() => {
                    this.isOpen = true;
                    this.filteredOptions = this.availableOptions();
                  }, 1);
                }}
                onBlur={this.onBlur}
              />
            </div>

            <ul
              id={this.listId}
              role="listbox"
              aria-labelledby={labelId}
              aria-multiselectable="true"
              hidden={!this.isOpen}
              class="gcds-combobox__list"
              part="listbox"
            >
              {selectAllOption}
              {optionList}
            </ul>
          </div>

          <span id={selectionId} class="visually-hidden">
            {this.selectedOptions.length
              ? `${this.selectedOptions.length} ${this.selectedOptions.length === 1 ? strings.itemSelected : strings.itemsSelected}`
              : ''}
          </span>

          <span class="visually-hidden" aria-live="polite" aria-atomic="true">
            {this.liveMessage}
          </span>
        </div>
      </Host>
    );
  }
}
