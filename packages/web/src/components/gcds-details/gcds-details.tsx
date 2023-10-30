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
<<<<<<< HEAD
  @Prop({mutable: true, reflect: true}) open?: boolean = false;
=======
  @Prop({ mutable: true, reflect: true }) open?: boolean = false;
>>>>>>> develop

  render() {
    const { detailsTitle, open } = this;

    return (
      <Host>
        <button
          aria-expanded={open.toString()}
          aria-controls="details__panel"
<<<<<<< HEAD
          onClick={() => this.open = !open}
          class="details__summary"
          id="details__summary"
        >
          { detailsTitle }
=======
          onClick={() => (this.open = !open)}
          class="details__summary"
          id="details__summary"
        >
          {detailsTitle}
>>>>>>> develop
        </button>
        <div
          id="details__panel"
          class="details__panel"
          aria-labelledby="details__summary"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
