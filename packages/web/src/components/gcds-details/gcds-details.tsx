import {
  Component,
  Element,
  Host,
  Prop,
  Method,
  Event,
  EventEmitter,
  Listen,
  h,
} from '@stencil/core';
import { emitEvent } from '../../utils/utils';

/**
 * Details is an interactive switch for a person to expand or collapse content.
 *
 * @slot default - Slot for the main content of the details panel.
 */
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
   * Listen to beforeprint and afterprint events to handle details state
   * when printing. This ensures that the details are open when printing,
   * and closed after printing if they were closed before.
   */
  @Listen('beforeprint', { target: 'window' })
  handleBeforePrint() {
    if (!this.open) {
      this.toggle();
      this.detailsElement.setAttribute('data-was-closed', 'true');
    }
  }
  @Listen('afterprint', { target: 'window' })
  handleAfterPrint() {
    if (this.detailsElement?.getAttribute('data-was-closed') === 'true') {
      this.toggle();
      this.detailsElement.removeAttribute('data-was-closed');
    }
  }

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
