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
  @Prop({ mutable: true, reflect: true }) open?: boolean = false;

  render() {
    const { detailsTitle, open } = this;

    return (
      <Host>
        <div class="gcds-details">
          <button
            aria-expanded={open.toString()}
            aria-controls="details__panel"
            onClick={() => (this.open = !open)}
            class="details__summary"
            id="details__summary"
          >
            {detailsTitle}
          </button>
          <div
            id="details__panel"
            class="details__panel"
            aria-labelledby="details__summary"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
