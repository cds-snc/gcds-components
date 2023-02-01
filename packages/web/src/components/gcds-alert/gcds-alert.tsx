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
  @Prop() alertRole?: 'danger' | 'info' | 'success' | 'warning' = 'info';

  /**
   * Defines the max width of the alert content.
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'full';

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
   * Defines if the alert's role icon is displayed or not.
   */
  @Prop() hideRoleIcon?: boolean = false;

  /**
   * Defines if the alert's position is fixed.
   */
  @Prop({ mutable: true }) isFixed?: boolean = false;


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
    const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang } = this;

    return (
      <Host>
        { isOpen ?
          <div
            class={`gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`}
            role="alert"
            aria-label={
              lang == 'en' ?
                `This is ${
                  alertRole === 'danger' ? 'a critical'
                  : alertRole === 'info' ? 'an info'
                  : alertRole === 'success' ? 'a success'
                  : alertRole === 'warning' ? 'a warning'
                  : null } alert.`
              : `Ceci est une alerte ${
                  alertRole === 'danger' ? 'd\'effacement'
                  : alertRole === 'info' ? 'd\'information'
                  : alertRole === 'success' ? 'de succès'
                  : alertRole === 'warning' ? 'd\'avertissement'
                  : null }.`
            }
          >
            <div class={`alert__container ${isFixed && container ? `container-${container}` : ''}`}>
              {( !hideRoleIcon &&
                <gcds-icon aria-hidden="true" class="alert__icon" name={
                  alertRole === 'danger' ? 'exclamation-circle'
                  : alertRole === 'info' ? 'info-circle'
                  : alertRole === 'success' ? 'check-circle'
                  : alertRole === 'warning' ? 'exclamation-triangle'
                  : null }
                />
              )}

              <div class="alert__content">
                <h5 class="alert__heading">{heading}</h5>
                <slot></slot>
              </div>

              {( !hideCloseBtn &&
                <button
                  class="alert__close-btn"
                  onClick={(e) => this.onDismiss(e)}
                  aria-label={ lang == 'en' ? 'Close alert.' : 'Fermer l\'alerte.'}
                >
                  <gcds-icon aria-hidden="true" name="times" size="sm" />
                </button>
              )}
            </div>
          </div>
        : null }
      </Host>
    );
  }
}
