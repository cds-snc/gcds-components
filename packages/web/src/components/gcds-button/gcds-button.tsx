import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Watch,
  Prop,
  State,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { inheritAttributes, emitEvent } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-button',
  styleUrl: 'gcds-button.css',
  shadow: { delegatesFocus: true },
})
export class GcdsButton {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  /**
   * Props
   */

  /**
   * Set button types
   */
  // prettier-ignore
  @Prop({ mutable: true }) type: 'submit' | 'reset' | 'button' | 'link' = 'button';
  @Watch('type')
  validateType(newValue: string) {
    const values = ['submit', 'reset', 'button', 'link'];

    if (!values.includes(newValue)) {
      this.type = 'button';
    }
  }

  /**
   * Set the main style
   */
  @Prop({ mutable: true }) buttonRole:
    | 'start'
    | 'primary'
    | 'secondary'
    | 'danger' = 'primary';

  @Watch('buttonRole')
  validateButtonRole(newValue: string) {
    const values = ['start', 'primary', 'secondary', 'danger'];

    if (!values.includes(newValue)) {
      this.buttonRole = 'primary';
    } else if (newValue === 'start' && this.size === 'small') {
      this.size = 'regular';
    }
  }

  /**
   * Set the button size
   */
  @Prop({ mutable: true }) size: 'regular' | 'small' = 'regular';

  @Watch('size')
  validateSize(newValue: string) {
    const values = ['regular', 'small'];

    if (!values.includes(newValue) || this.buttonRole === 'start') {
      this.size = 'regular';
    }
  }

  /**
   * The buttonId attribute specifies the id for a <button> element.
   */
  @Prop() buttonId: string;

  /**
   * The name attribute specifies the name for a <button> element.
   */
  @Prop() name: string | undefined;

  /**
   * The disabled attribute for a <button> element.
   */
  @Prop() disabled: boolean;

  /**
   * The value attribute specifies the value for a <button> element.
   */
  @Prop() value: string;

  /**
   * Link props
   */

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop() href: string | undefined;

  /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  @Prop() rel: string | undefined;

  /**
   * The target attribute specifies where to open the linked document
   */
  @Prop() target: string | undefined;

  /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  @Prop() download: string | undefined;

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
   * Emitted when the button has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Emitted when the button has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

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

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateType(this.type);
    this.validateButtonRole(this.buttonRole);
    this.validateSize(this.size);

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  private handleClick = (e: Event) => {
    // Check button type, only emit value if type is "submit"
    const emitValue = this.type === 'submit' ? this.value : undefined;
    const event = emitEvent(e, this.gcdsClick, emitValue);

    if (event) {
      if (!this.disabled && this.type != 'button' && this.type != 'link') {
        // Attach button to form
        const form = this.el.closest('form');

        if (form) {
          e.preventDefault();

          const formButton = document.createElement('button');
          formButton.type = this.type;
          if (this.name) {
            formButton.name = this.name;
          }
          if (this.value) {
            formButton.value = this.value;
          }
          formButton.style.display = 'none';
          form.appendChild(formButton);
          formButton.click();
          formButton.remove();
        }
      }

      // Has any inherited attributes changed on click
      this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
    }
  };

  render() {
    const {
      type,
      buttonRole,
      size,
      buttonId,
      disabled,
      lang,
      name,
      href,
      rel,
      target,
      download,
      value,
      inheritedAttributes,
    } = this;

    const Tag = type != 'link' ? 'button' : 'a';
    const attrs =
      Tag === 'button'
        ? {
            type: type,
            ariaDisabled: disabled,
            name,
            value,
          }
        : {
            href,
            rel,
            target,
            download,
          };

    return (
      <Host>
        <Tag
          {...attrs}
          id={buttonId}
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => !disabled && this.handleClick(e)}
          class={`gcds-button button--role-${buttonRole} button--${size}`}
          ref={element => (this.shadowElement = element as HTMLElement)}
          {...inheritedAttributes}
          part="button"
        >
          <slot></slot>

          {type === 'link' && target === '_blank' ? (
            <gcds-icon
              name="external-link"
              label={i18n[lang].label}
              margin-left="150"
            />
          ) : null}
        </Tag>
      </Host>
    );
  }
}
