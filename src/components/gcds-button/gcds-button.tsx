import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

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
  
  @Element() el: HTMLElement;

  /**
   * Button props
   */

  /**
   * Set button types
   */
  @Prop({ mutable: true }) buttonType: 'submit' | 'reset' | 'button' | 'link' = 'button';

  /**
   * Set component states
   */
  @Prop() interactionState: 'default' | 'hover' | 'active' | 'focus' | 'disabled' = 'default';

  /**
   * Set the main style
   */
  @Prop() buttonRole: 'primary' | 'secondary' | 'danger' | 'skip-to-content' = 'primary';

  /**
   * Set the style variant
   */
  @Prop() buttonStyle: 'solid' | 'outline' | 'text-only' = 'solid';

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
  }

  private onFocus = () => {
    this.gcdsFocus.emit();
  }

  private onBlur = () => {
    this.gcdsBlur.emit();
  }

  componentWillLoad() {
    // Default to type 'button' if no identifying properties are passed
    if(this.buttonType === undefined && this.href === undefined) {
      this.buttonType = 'button';
    }
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

  render() {

    const { buttonType, buttonRole, buttonStyle, interactionState, name, href, rel, target, download } = this;

    const Tag = buttonType != 'link' ? 'button' : 'a';
    const disabled = interactionState === 'disabled' ? true : false;
    const stateClass = interactionState !== "default" ? interactionState : "";
    const attrs = (Tag === 'button')
    ? {
      buttonType,
      disabled,
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
          class={`${buttonRole} ${buttonStyle} ${stateClass}`}
        >
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </Tag>
      </Host>
    );
  }
}
