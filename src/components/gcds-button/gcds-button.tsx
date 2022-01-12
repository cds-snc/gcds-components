import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

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
   * Set button types
   */
  @Prop({ mutable: true }) type: 'submit' | 'reset' | 'button' = undefined;

  /**
   * Disable button if 'true'
   */
  @Prop({ reflect: true }) disabled = false;

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
   * Emitted when the button has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

   /**
    * Emitted when the button loses focus.
    */
  @Event() gcdsBlur!: EventEmitter<void>;

  private handleClick = (ev: Event) => {
    if (!this.disabled && this.type != 'button' && this.type != undefined) {
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

  render() {

    const { type, disabled, href, rel, target, download } = this;

    const Tag = type != undefined ? 'button' : 'a';
    const attrs = (Tag === 'button')
    ? {
      type,
      disabled
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
        >
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </Tag>
      </Host>
    );
  }
}
