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

  private detailsElement?: HTMLDetailsElement;

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
    this.detailsElement.open = this.open;
  }

  /*
   * Handle the details being toggled by other means (e.g., ctrl+f)
   */
  private handleToggle = (ev: Event) => {
    this.open = !this.open;
    this.open = (ev.target as HTMLDetailsElement).open;
  };

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
          <details
            open={open}
            id="details__panel"
            class="details__panel"
            aria-labelledby="details__summary"
            onToggle={ev => this.handleToggle(ev)}
            ref={element =>
              (this.detailsElement = element as HTMLDetailsElement)
            }
          >
            <summary>{detailsTitle}</summary>
            <slot></slot>
          </details>
        </div>
      </Host>
    );
  }
}
