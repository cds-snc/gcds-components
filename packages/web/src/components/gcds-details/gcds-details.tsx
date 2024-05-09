import {
  Component,
  Element,
  Host,
  Prop,
  Method,
  Event,
  EventEmitter,
  h,
} from '@stencil/core';
import { emitEvent } from '../../utils/utils';

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

  /**
   * Events
   */

  /**
   * Emitted when the details has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the details loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the details has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
   * Methods
   */

  /*
   * Toggle details open or closed
   */
  @Method()
  async toggle() {
    this.open = !this.open;
  }

  render() {
    const { detailsTitle, open } = this;

    return (
      <Host>
        <div class="gcds-details">
          <button
            aria-expanded={open.toString()}
            aria-controls="details__panel"
            onBlur={() => this.gcdsBlur.emit()}
            onFocus={() => this.gcdsFocus.emit()}
            onClick={e => {
              const event = emitEvent(e, this.gcdsClick);
              if (event) {
                this.toggle();
              }
            }}
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
