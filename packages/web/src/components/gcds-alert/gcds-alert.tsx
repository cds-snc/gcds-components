import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-alert',
  styleUrl: 'gcds-alert.css',
  shadow: true,
})

export class GcdsAlert {
  @Element() el: HTMLElement;

  private lang: string;


  /**
   * Props
   */

  /**
   * Defines alert role.
   */
  @Prop() alertRole?: 'destructive' | 'info' | 'success' | 'warning' = 'info';

  /**
   * Callback when the close button is clicked.
   */
  @Prop() dismissHandler: Function;

  /**
   * Defines the alert heading.
   */
  @Prop() heading!: string;

  /**
   * Defines if the alert's close button is displayed or not.
   */
  @Prop() hideCloseBtn?: boolean = false;

  /**
   * Defines if the alert's position is fixed.
   */
  @Prop() isFixed?: boolean = true;

  /**
   * Defines the max width of the alert content.
   */
  @Prop() maxContentWidth?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'lg';


  /**
   * States
   */

  /**
   * Specifies if the alert is open or not.
   */
  @State() isOpen: boolean = true;


  /**
   * Events
   */

  @Event() gcdsDismiss!: EventEmitter<void>;

  private onDismiss = (e) => {
    this.gcdsDismiss.emit();

    if ( this.dismissHandler ) {
      this.dismissHandler(e);
    } else {
      this.isOpen = false;
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { alertRole, heading, hideCloseBtn, isFixed, isOpen, lang, maxContentWidth } = this;

    return (
      <Host>
        { isOpen ?
          <div
            class={`gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`}
            role="alert"
            aria-label={
              lang == 'en' ?
                `This is ${
                  alertRole === 'destructive' ? 'a critical'
                  : alertRole === 'info' ? 'an info'
                  : alertRole === 'success' ? 'a success'
                  : alertRole === 'warning' ? 'a warning'
                  : null } alert.`
              : `Ceci est une alerte ${
                  alertRole === 'destructive' ? 'd\'effacement'
                  : alertRole === 'info' ? 'd\'information'
                  : alertRole === 'success' ? 'de succès'
                  : alertRole === 'warning' ? 'd\'avertissement'
                  : null }.`
            }
          >
            <div class={`${isFixed && maxContentWidth ? `container-${maxContentWidth}` : ''}`}>
              <h2 class="alert__heading">
                <gcds-icon aria-hidden="true" class="alert__icon" size="md" name={
                  alertRole === 'destructive' ? 'exclamation-circle'
                  : alertRole === 'info' ? 'info-circle'
                  : alertRole === 'success' ? 'check-circle'
                  : alertRole === 'warning' ? 'exclamation-triangle'
                  : null }
                />

                <span>{heading}</span>

                { !hideCloseBtn ?
                  <button
                    class="alert__close-btn"
                    onClick={(e) => this.onDismiss(e)}
                    aria-label={ lang == 'en' ? 'Close alert.' : 'Fermer l\'alerte.'}
                  >
                    <gcds-icon aria-hidden="true" name="times" size="sm" />
                  </button>
                : null }
              </h2>

              <div class="alert__content">
                <slot></slot>
              </div>
            </div>
          </div>
        : null }
      </Host>
    );
  }
}
