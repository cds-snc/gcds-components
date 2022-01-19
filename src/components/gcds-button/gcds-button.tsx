import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

const styleAPI = {
  'customBorderWeight': 'width',
  'customBorderStyle': 'style',
  'customBorderColor': 'colour'
}

@Component({
  tag: 'gcds-button',
  styleUrl: 'gcds-button.css',
  shadow: true,
})
export class GcdsButton {
  
  @Element() el: HTMLElement;

  /**
   * The button label
   */
  @Prop() label: string;

  /**
   * Button props
   */

  /**
   * Set button types
   */
  @Prop({ mutable: true }) type: 'submit' | 'reset' | 'button' | 'link' = 'button';

  /**
   * Set component states
   */
  @Prop() state: 'default' | 'hover' | 'active' | 'focus' | 'disabled' = 'default';

  /**
   * Set the main style
   */
  @Prop() task: 'primary' | 'secondary' | 'danger' = 'primary';

  /**
   * Set the style variant
   */
  @Prop() variant: 'solid' | 'outline' | 'text-only' = 'solid';

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
    if (this.state !== 'disabled' && this.type != 'button' && this.type != 'link') {
      // Attach button to form
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const formButton = document.createElement('button');
        formButton.type = this.type;
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
    if(this.type === undefined && this.href === undefined) {
      this.type = 'button';
    }
  }

  componentDidLoad() {
    const Tag = this.type != 'link' ? 'button' : 'a';
    //StyleAPI
    for (let [key, value] of Object.entries(styleAPI)) {
      if(this[key] !== undefined) {
        this.el.shadowRoot.querySelector(Tag).style.setProperty(`--custom-gcds-style-border-${value}`, this[key]);
      }
    }
  }

  render() {

    const { type, task, variant, state, name, href, rel, target, download } = this;

    const Tag = type != 'link' ? 'button' : 'a';
    const disabled = state === 'disabled' ? true : false;
    const attrs = (Tag === 'button')
    ? {
      type,
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
          class={`${task}--${variant}`}
        >
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </Tag>
      </Host>
    );
  }
}
