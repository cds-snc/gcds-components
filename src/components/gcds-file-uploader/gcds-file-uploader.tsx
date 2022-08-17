import { Component, Element, Event, EventEmitter, Prop, Watch, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-file-uploader',
  styleUrl: 'gcds-file-uploader.css',
  shadow: false,
  scoped: true,
})
export class GcdsFileUploader {
  @Element() el: HTMLElement;

  private lang: string;

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
  @Prop({ reflect: true, mutable: false }) required: boolean;

  /**
   * Specifies if a file uploader element is disabled or not.
   */
  @Prop({ reflect: true, mutable: true }) disabled: boolean;

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
   * Specifies if the file uploader is invalid.
   */
  @Prop({ reflect: true, mutable: true }) hasError: boolean;
  @Watch('hasError')
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }

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
    }
  }

  /**
   * Hint displayed below the label.
   */
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
    * Update value based on user selection.
    */
  @Event() gcdsFileUploaderChange: EventEmitter;
  handleChange = (e) => {
    let filesContainer: string[] = [];
    let files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      filesContainer.push(files[i].name);
    }

    this.value = [...filesContainer];
    this.gcdsFileUploaderChange.emit(this.value);
  };

  /**
    * Remove file and update value.
    */
  @Event() gcdsRemoveFile: EventEmitter;
  removeFile = (e) => {
    let filesContainer = this.value;
    const file = filesContainer.indexOf(e.target.textContent);

    if (file > -1) {
      filesContainer.splice(file, 1);
    }

    this.value = [...filesContainer];
    this.gcdsRemoveFile.emit(this.value);
  };

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
  }

  render() {
    const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, required, uploaderId, value } = this;

    const attrsInput = {
      accept,
      disabled,
      multiple,
      required,
      value,
    };

    const attrsLabel = {
      label,
      required,
    }

    if (hint || errorMessage) {
      let hintID = hint ? `hint-${uploaderId}` : "";
      let errorID = errorMessage ? `error-message-${uploaderId}` : "";
      // let fileSelected = "No file currently selected.";

      attrsInput["aria-describedby"] = `${hintID} ${errorID} summary-uploaded-files`;
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
            <gcds-error-message message-id={uploaderId} message={errorMessage} />
          : null}

          <div class="file-input">
            <button tabindex="-1">
              Upload a file
              <gcds-icon name="upload" margin-left="spacing-400" />
            </button>
            <input
              type="file"
              id={uploaderId}
              name={uploaderId}
              {...attrsInput}
              onChange={(e) => this.handleChange(e)}
              aria-invalid={hasError ? 'true' : 'false'}
            />
            { value.length > 0 ?
              <p id="summary-uploaded-files">
                <span>Currently selected: </span> { value.map(file => ( <span>{file} </span> )) }
              </p>
            :
              <p id="summary-uploaded-files">No file currently selected</p>
            }
          </div>

          { value.length > 0 ? value.map(file => (
            <button
              class="uploaded-file"
              onClick={(e) => this.removeFile(e)}
              aria-label={`Remove file ${file}`}
            >
              <span>{file}</span>
              <gcds-icon name="times-circle" size="md" />
            </button>
          )) : null }
        </div>
      </Host>
    );
  }
}
