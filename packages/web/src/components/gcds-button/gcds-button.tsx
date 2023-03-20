import { Component, Element, Event, EventEmitter, Method, Host, Watch, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { inheritAttributes} from '../../utils/utils';

@Component({
  tag: 'gcds-button',
  styleUrl: 'gcds-button.css',
  shadow: true,
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
  @Prop({ mutable: true }) buttonRole: 'primary' | 'secondary' | 'danger' | 'skip-to-content' = 'primary';

  @Watch('buttonRole')
  validateButtonRole(newValue: string) {
    const values = ['primary', 'secondary', 'danger', 'skip-to-content'];

    if (!values.includes(newValue)) {
      this.buttonRole = 'primary';
    }
  }

  /**
   * Set the style variant
   */
  @Prop({ mutable: true }) buttonStyle: 'solid' | 'text-only' = 'solid';

  @Watch('buttonStyle')
  validateButtonStyle(newValue: string) {
    const values = ['solid', 'text-only'];

    if (!values.includes(newValue)) {
      this.buttonStyle = 'solid';
    }
  }

  /**
   * Set the button size
   */
  @Prop({ mutable: true }) size: 'regular' | 'small' = 'regular';

  @Watch('size')
  validateSize(newValue: string) {
    const values = ['regular', 'small'];

    if (!values.includes(newValue)) {
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
   * Custom callback function on click event
   */
  @Prop() clickHandler: Function;

  /**
  * Custom callback function on focus event
  */
  @Prop() focusHandler: Function;

  /**
  * Custom callback function on blur event
  */
  @Prop() blurHandler: Function;

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
    const observer = new MutationObserver((mutations) => {
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
    this.validateButtonStyle(this.buttonStyle);
    this.validateSize(this.size);

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  /**
    * Focus element
    */
  @Method()
  async focusElement() {
    this.shadowElement.focus();
  }

  private handleClick = (e: Event) => {
    if (this.clickHandler) {
      this.clickHandler(e);
    } else {
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
          formButton.style.display = 'none';
          form.appendChild(formButton);
          formButton.click();
          formButton.remove();
        }
      }
    }

    // Has any inherited attributes changed on click
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  }

  private onFocus = (e) => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  }

  private onBlur = (e) => {
    if (this.blurHandler) {
      this.blurHandler(e);
    }

    this.gcdsBlur.emit();
  }

  render() {
    const { type, buttonRole, buttonStyle, size, buttonId, disabled, lang, name, href, rel, target, download, inheritedAttributes } = this;

    const Tag = type != 'link' ? 'button' : 'a';
    const attrs = (Tag === 'button') ? {
      type: type,
      ariaDisabled: disabled,
      name
    } : {
      href,
      rel,
      target,
      download
    };

    return (
      <Host>
        <Tag
          {...attrs}
          id={buttonId}
          onBlur={(e) => this.onBlur(e)}
          onFocus={(e) => this.onFocus(e)}
          onClick={(e) => this.handleClick(e)}
          class={`button--role-${buttonRole} button--${buttonStyle} button--${size}`}
          ref={element => this.shadowElement = element as HTMLElement}
          {...inheritedAttributes}
        >
          <slot name="left"></slot>

          <slot></slot>

          { type === 'link' && target === '_blank' ?
            <gcds-icon
              name="external-link"
              label={ lang == 'en' ? 'Opens in a new tab.' : 'S\'ouvre dans un nouvel onglet.' }
              margin-left="200"
            />
          : <slot name="right"></slot> }
        </Tag>
      </Host>
    );
  }
}
