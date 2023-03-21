import { Component, Element, Event, EventEmitter, Prop, Watch, State, Method, Host, h, Listen } from '@stencil/core';
import { assignLanguage, inheritAttributes, observerConfig } from '../../utils/utils';
import { Validator, defaultValidator, ValidatorEntry, getValidator, requiredValidator, GcdsErrorInterface } from '../../validators';

@Component({
  tag: 'gcds-file-uploader',
  styleUrl: 'gcds-file-uploader.css',
  shadow: false,
  scoped: true,
})
export class GcdsFileUploader {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  _validator: Validator<any> = defaultValidator;


  /**
   * Props
   */

  /**
   * Id attribute for a file uploader element.
   */
  @Prop({ reflect: true, mutable: true }) uploaderId!: string;

  /**
   * Form field label.
   */
  @Prop({ reflect: true, mutable: false }) label!: string;

  /**
   * Specifies if a form field is required or not.
   */
  @Prop({ reflect: true, mutable: false }) required: boolean = false;

  /**
   * Specifies if a file uploader element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean = false;

  @Watch('disabled')
  validateDisabledSelect() {
    if (this.required) {
      this.disabled = false;
    }
  }

  /**
   * Value for a file uploader element.
   */
  @Prop({  reflect: true, mutable: true }) value: string[] = [];

  /**
   * Defines the file types the file uploader accepts.
   */
  @Prop({ reflect: true, mutable: false }) accept: string;

  /**
   * Boolean that specifies if the user is allowed to select more than one file.
   */
  @Prop({ reflect: true, mutable: false }) multiple: boolean;

  /**
   * Error message for an invalid file uploader element.
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
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

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
   * Custom callback function on change event
   */
  @Prop() changeHandler: Function;

  /**
  * Custom callback function on focus event
  */
  @Prop() focusHandler: Function;

  /**
  * Custom callback function on blur event
  */
  @Prop() blurHandler: Function;

  /**
   * Specifies if the file uploader is invalid.
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
   * Emitted when the uploader has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  /**
   * Emitted when the uploader loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = (e) => {
    if (this.blurHandler) {
      this.blurHandler(e);
    } else {
      if (this.validateOn == "blur") {
        this.validate();
      }
    }

    this.gcdsBlur.emit();
  }

  /**
   * Update value based on user selection.
   */
  @Event() gcdsFileUploaderChange: EventEmitter;

  handleChange = (e) => {
    if (this.changeHandler) {
      this.changeHandler(e);
    } else {
      let filesContainer: string[] = [];
      let files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        filesContainer.push(files[i].name);
      }

      this.value = [...filesContainer];

      // Validate since the input loses focus when dialog opens
      if (this.validateOn == "blur") {
        this.validate();
      }
    }

    this.gcdsFileUploaderChange.emit(this.value);
  };

  /**
   * Remove file and update value.
   */
  @Event() gcdsRemoveFile: EventEmitter;
  removeFile = (e) => {
    e.preventDefault();
    
    let filesContainer = this.value;
    const file = filesContainer.indexOf(e.target.closest('.file-uploader__uploaded-file').childNodes[0].textContent);

    if (file > -1) {
      filesContainer.splice(file, 1);
    }

    this.value = [...filesContainer];
    this.gcdsRemoveFile.emit(this.value);
  };

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    if (!this._validator.validate(this.value.length) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({ id: `#${this.uploaderId}`, message: this.errorMessage });
    } else {
      this.errorMessage = "";
    }
  }

  /**
    * Emitted when the input has a validation error.
    */
  @Event() gcdsError!: EventEmitter<GcdsErrorInterface>;

  @Listen("submit", { target: 'document' })
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }

      if (this.hasError) {
        e.preventDefault();
      }
    }
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

    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, "file");

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

  render() {
    const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, required, uploaderId, value, inheritedAttributes } = this;

    const attrsInput = {
      accept,
      disabled,
      multiple,
      required,
      value,
      ...inheritedAttributes
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${uploaderId}` : "";
      let errorID = errorMessage ? ` error-message-${uploaderId}` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID} file-uploader__summary${attrsInput["aria-describedby"] ? ` ${attrsInput["aria-describedby"]}` : ""}`;
    }

    return (
      <Host>
        <div class={`gcds-file-uploader-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <gcds-label
            {...attrsLabel}
            label-for={uploaderId}
            lang={lang}
          />

          {hint ? <gcds-hint hint={hint} hint-id={uploaderId} />: null}

          {errorMessage ?
            <gcds-error-message messageId={uploaderId} message={errorMessage} />
          : null}

          <div class={`file-uploader__input ${value.length > 0 ? "uploaded-files" : ''}`}>
            <button tabindex="-1">
              { lang == 'en' ? 'Upload a file' : 'Téléverser un fichier'}
              <gcds-icon name="upload" margin-left="200" />
            </button>
            <input
              type="file"
              id={uploaderId}
              name={uploaderId}
              {...attrsInput}
              onBlur={(e) => this.onBlur(e)}
              onFocus={(e) => this.onFocus(e)}
              onChange={(e) => this.handleChange(e)}
              aria-invalid={hasError ? 'true' : 'false'}
            />
            { value.length > 0 ?
              <p id="file-uploader__summary">
                <span>{ lang == 'en' ? 'Currently selected:' : 'Actuellement sélectionné:'} </span>
                { value.map(file => ( <span>{file} </span> )) }
              </p>
            :
              <p id="file-uploader__summary">
                { lang == 'en' ? 'No file currently selected' : 'Aucun fichier actuellement sélectionné' }
              </p>
            }
          </div>

          { value.length > 0 ? value.map(file => (
            <div
              class="file-uploader__uploaded-file"
              aria-label={ lang == 'en' ? `Remove file ${file}` : `Supprimer le fichier ${file}` }
            >
              <span>{file}</span>
              <button onClick={(e) => this.removeFile(e)}>
                <span>{ lang == 'en' ? 'Remove' : 'Supprimer' }</span>
                <gcds-icon name="times" size="text" margin-left="200" />
              </button>
            </div>
          )) : null }
        </div>
      </Host>
    );
  }
}
