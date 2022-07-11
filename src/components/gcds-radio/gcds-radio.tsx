import { Component, Element, Event, EventEmitter, Prop, Listen, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

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

  @Prop({ reflect: true, mutable: true }) radioId!: string;
  @Prop({ reflect: true, mutable: false }) label!: string;
  @Prop({ reflect: true, mutable: false }) name!: string;

  @Prop({ reflect: true, mutable: false }) required: boolean;
  @Prop({ reflect: true, mutable: true }) disabled: boolean;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Prop({ reflect: true, mutable: false }) value: string;
  @Prop({ reflect: true, mutable: true }) hasError: boolean;
  @Prop({ reflect: true, mutable: false }) hint: string;

  /**
   * Emitted when the radio button is checked
   */
  @Event() gcdsRadioChange!: EventEmitter<void>;

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

  render() {
    const { lang, radioId, label, name, required, disabled, value, checked, hint, hasError } = this;

    const attrsInput = {
      name,
      disabled,
      required,
      value,
      checked
    };

    if (hint) {
      let hintID = hint ? `hint-${radioId}` : "";
      attrsInput["aria-describedby"] = `${hintID}`;
    }

    return (
      <Host>
        <div class={`gcds-radio-wrapper ${disabled ? 'gcds-disabled' : ''} ${hasError ? 'gcds-error' : ''}`}>
          <input
            id={radioId}
            type="radio"
            {...attrsInput}
            onChange={() => this.onChange(name)}
            ref={element => this.shadowElement = element as HTMLInputElement}
          />
          <gcds-label
            label={label}
            label-for={radioId}
            lang={lang}
          >
          </gcds-label>
          {hint ? <gcds-hint hint={hint} hint-id={radioId} />: null}
        </div>
      </Host>
    );
  }

}
