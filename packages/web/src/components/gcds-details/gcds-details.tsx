import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-details',
  styleUrl: 'gcds-details.css',
  shadow: true,
})
export class GcdsDetails {
  @Element() el: HTMLElement;


  /**
   * Props
   */

  /**
   * The details title summarizes the panel content.
   */
  @Prop() detailsTitle!: string;

  /**
   * Defines if the details panel is open by default or not.
   */
  @Prop({mutable: true, reflect: true}) open?: boolean = false;

  render() {
    const { detailsTitle, open } = this;

    return (
      <Host>
        <button
          aria-expanded={open.toString()}
          onClick={() => this.open = !open}
          class="details__summary"
        >
          { detailsTitle }
        </button>
        <div class="details__panel">
          <slot></slot>
        </div>
      </Host>
    );
  }
}