import { Component, Element, Event, EventEmitter, Method, Host, Watch, Prop, State, h } from '@stencil/core';
import { inheritAttributes} from '../../utils/utils';

const styleAPI = {
  'customBorderWeight': 'border-width',
  'customBorderStyle': 'border-style',
  'customBorderColor': 'border-color',
  'customMargin': 'margin',
  'customDisplay': 'display',
  'customBackgroundColor': 'background-color',
  'customBoxShadow': 'box-shadow',
  'customCapitalization': 'text-transform'
}

@Component({
  tag: 'gcds-button',
  styleUrl: 'gcds-button.css',
  shadow: true,
})
export class GcdsButton {
  private shadowElement?: HTMLElement;

  @Element() el: HTMLElement;

  /**
   * Button props
   */

  /**
   * Set button types
   */
  @Prop({ mutable: true }) buttonType: 'submit' | 'reset' | 'button' | 'link';

  @Watch('buttonType')
  validateButtonType(newValue: string) {
    const values = ['submit', 'reset', 'button', 'link'];
    if (!values.includes(newValue)) {
      this.buttonType = 'button';
    }
  }

  /**
   * Set component states
   */
  @Prop({ mutable: true }) interactionState: 'default' | 'hover' | 'active' | 'focus' | 'disabled';

  @Watch('interactionState')
  validateInteractionState(newValue: string) {
    const values = ['default', 'hover', 'active', 'focus', 'disabled'];
    if (!values.includes(newValue)) {
      this.interactionState = 'default';
    }
  }

  /**
   * Set the main style
   */
  @Prop({ mutable: true }) buttonRole: 'primary' | 'secondary' | 'destructive' | 'skip-to-content' = 'primary';

  @Watch('buttonRole')
  validateButtonRole(newValue: string) {
    const values = ['primary', 'secondary', 'destructive', 'skip-to-content'];
    if (!values.includes(newValue)) {
      this.buttonRole = 'primary';
    }
  }

  /**
   * Set the style variant
   */
  @Prop({ mutable: true }) buttonStyle: 'solid' | 'outline' | 'text-only';

  @Watch('buttonStyle')
  validateButtonStyle(newValue: string) {
    const values = ['solid', 'outline', 'text-only'];
    if (!values.includes(newValue)) {
      this.buttonStyle = 'solid';
    }
  }

  /**
   * The name attribute specifies the name for a <button> element.
   */
  @Prop() name: string | undefined;

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
   * Style props
   */

  /**
   * StyleAPI: custom border weight.
   */
  @Prop() customBorderWeight: string | undefined;

  /**
   * StyleAPI: custom border style.
   */
  @Prop() customBorderStyle: string | undefined;

  /**
   * StyleAPI: custom border color.
   */
  @Prop() customBorderColor: string | undefined;

  /**
   * StyleAPI: custom margin.
   */
  @Prop() customMargin: string | undefined;

  /**
   * StyleAPI: custom display.
   */
  @Prop() customDisplay: string | undefined;

  /**
   * StyleAPI: custom background color.
   */
  @Prop() customBackgroundColor: string | undefined;

  /**
   * StyleAPI: custom box shadow.
   */
  @Prop() customBoxShadow: string | undefined;

  /**
   * StyleAPI: custom btext transform.
   */
  @Prop() customCapitalization: string | undefined;

  @State() inheritedAttributes: Object = {};

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

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateButtonType(this.buttonType);
    this.validateButtonRole(this.buttonRole);
    this.validateButtonStyle(this.buttonStyle);
    this.validateInteractionState(this.interactionState);

    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'aria-expanded', 'aria-haspopup']);
  }

  componentDidLoad() {
    const Tag = this.buttonType != 'link' ? 'button' : 'a';
    //StyleAPI
    for (let [key, value] of Object.entries(styleAPI)) {
      if(this[key] !== undefined) {
        this.el.shadowRoot.querySelector(Tag).style.setProperty(`--custom-gcds-style-${value}`, this[key]);
      }
    }
  }

  /**
    * Focus element
    */
  @Method()
  async focusElement() {
    this.shadowElement.focus();
  }

  private handleClick = (ev: Event) => {
    if (this.interactionState !== 'disabled' && this.buttonType != 'button' && this.buttonType != 'link') {
      // Attach button to form
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const formButton = document.createElement('button');
        formButton.type = this.buttonType;
        formButton.style.display = 'none';
        form.appendChild(formButton);
        formButton.click();
        formButton.remove();
      }
    }

    // Has any inherited attributes changed on click
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'aria-expanded', 'aria-haspopup']);
  }

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  private onBlur = () => {
    this.gcdsBlur.emit();
  }

  render() {

    const { buttonType, buttonRole, buttonStyle, interactionState, name, href, rel, target, download, inheritedAttributes } = this;

    const Tag = buttonType != 'link' ? 'button' : 'a';
    const disabled = interactionState === 'disabled' ? true : false;
    const stateClass = interactionState !== "default" ? `gcds-button-${interactionState}` : "";
    const styleClass = `gcds-button-${buttonStyle}`;
    const roleClass = `gcds-button-${buttonRole}`;
    const attrs = (Tag === 'button')
    ? {
      type: buttonType,
      ariaDisabled: disabled,
      name
    }
    : {
      href,
      rel,
      target,
      download
    };

    return (
      <Host
        onClick={this.handleClick}
      >
        <Tag
          {...attrs}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          class={`${roleClass} ${styleClass} ${stateClass}`}
          ref={element => this.shadowElement = element as HTMLElement}
          {...inheritedAttributes}
        >
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </Tag>
      </Host>
    );
  }
}
