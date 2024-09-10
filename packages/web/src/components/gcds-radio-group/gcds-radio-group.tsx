import {
  Component,
  Element,
  Event,
  EventEmitter,
  State,
  Prop,
  Listen,
  Watch,
  Host,
  h,
  AttachInternals,
} from '@stencil/core';
import {
  assignLanguage,
  inheritAttributes,
  observerConfig,
} from '../../utils/utils';

export type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
};

@Component({
  tag: 'gcds-radio-group',
  styleUrl: 'gcds-radio-group.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsRadioGroup {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private shadowElement?: HTMLInputElement;

  private optionObject;

  /**
   * Props
   */

  /**
   * Options to render radio buttons
   */
  @Prop() options!: string | Array<RadioObject>;
  @Watch('options')
  validateOptions() {
    if (typeof this.options == 'object') {
      this.optionObject = this.options;
    } else if (typeof this.options == 'string') {
      this.optionObject = JSON.parse(this.options);
    }
  }

  /**
   * Name attribute for an input element.
   */
  @Prop({ reflect: true, mutable: false }) name!: string;

  /**
   * Value for the selected radio element.
   */
  @Prop({ mutable: true }) value?: string;

  /**
   * Specifies if the radio is invalid.
   */
  @State() hasError: boolean;

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
  @Event() gcdsChange!: EventEmitter<void>;

  /**
   * Emitted when the radio has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    this.gcdsBlur.emit();
  };

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
    this.validateOptions();

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    this.optionObject &&
      this.optionObject.map(radio => {
        if (radio.checked) {
          this.internals.setFormValue(radio.value, 'checked');
        }
      });
  }

  private onChange = e => {
	this.value = e.target.value;
    this.gcdsChange.emit(e.target.value);
    this.internals.setFormValue(e.target.value, 'checked');

    const changeEvt = new e.constructor(e.type, e);
    this.el.dispatchEvent(changeEvt);
  };

  /**
   * Event listener for gcds-fieldset errors
   */
  @Listen('gcdsGroupError', { target: 'body' })
  gcdsGroupError(e) {
    if (e.srcElement.contains(this.el)) {
      this.hasError = true;
      this.parentError = e.detail;
    }
  }
  @Listen('gcdsGroupErrorClear', { target: 'body' })
  gcdsGroupErrorClear(e) {
    if (e.srcElement.contains(this.el) && this.hasError) {
      this.hasError = false;
      this.parentError = '';
    }
  }

  render() {
    const { lang, name, hasError, parentError, inheritedAttributes } = this;

    return (
      <Host>
        {this.optionObject &&
          this.optionObject.map(radio => {
            const attrsInput = {
              name,
              disabled: radio.disabled,
              required: radio.required,
              value: radio.value,
              checked: radio.checked,
              ...inheritedAttributes,
            };

            if (radio.hint || parentError) {
              const hintID = radio.hint ? `hint-${radio.id} ` : '';
              const errorID = parentError ? `parent-error ` : '';
              attrsInput['aria-describedby'] = `${hintID}${errorID}${
                attrsInput['aria-describedby']
                  ? `${attrsInput['aria-describedby']}`
                  : ''
              }`;
            }

            if (hasError) {
              attrsInput['aria-invalid'] = 'true';
            }

            return (
              <div
                class={`gcds-radio ${
                  radio.disabled ? 'gcds-radio--disabled' : ''
                } ${hasError ? 'gcds-radio--error' : ''}`}
              >
                <input
                  id={radio.id}
                  type="radio"
                  {...attrsInput}
                  onChange={e => this.onChange(e)}
                  onBlur={() => this.onBlur()}
                  onFocus={() => this.gcdsFocus.emit()}
                  ref={element =>
                    (this.shadowElement = element as HTMLInputElement)
                  }
                />

                <gcds-label
                  label={radio.label}
                  label-for={radio.id}
                  lang={lang}
                ></gcds-label>

                {radio.hint ? (
                  <gcds-hint hint-id={radio.id}>{radio.hint}</gcds-hint>
                ) : null}
              </div>
            );
          })}
        {parentError && (
          <span id={`parent-error`} hidden>
            {parentError}
          </span>
        )}
      </Host>
    );
  }
}
