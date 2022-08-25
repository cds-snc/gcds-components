import { Component, Element, Host, Prop, h } from '@stencil/core';
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
   * Defines the alert heading.
   */
  @Prop() alertHeading!: string;

  /**
   * Defines alert role.
   */
  @Prop() alertRole?: 'destructive' | 'info' | 'success' | 'warning' = 'info';

  /**
   * Defines if the alert's close button is displayed or not.
   */
  @Prop() hideCloseBtn?: boolean = false;

  /**
   * Defines the max width of the alert content.
   */
  @Prop() maxContentWidth?: 'fluid' | 'lg' | 'md' | 'sm' | 'xs' = 'lg';

  /**
   * Defines if the alert's position is fixed.
   */
  @Prop() positionFixed?: boolean = true;


  /**
  * Events
  */

  /**
   * Callback when the close button is clicked.
   */
  @Prop() onDismiss: () => void;

  if ( onDismiss ) {
    onDismiss();
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { alertHeading, alertRole, hideCloseBtn, lang, maxContentWidth, onDismiss, positionFixed } = this;

    return (
      <Host>
        <div
          class={`gcds-alert role-${alertRole} ${positionFixed ? 'is-fixed' : ''}`}
          role="alert"
          aria-label={
            lang == 'en' ?
              `This is ${ alertRole == 'info' ? 'an' : 'a'} ${alertRole} alert.`
            : 'TO DO FRENCH'
          }
        >
          <div class={`alert-container ${positionFixed && maxContentWidth ? `container-${maxContentWidth}` : ''}`}>
            <h2 class="alert-heading">
              <gcds-icon aria-hidden="true" class="alert-icon" size="md" name={
                alertRole === 'destructive' ? 'exclamation-circle'
                : alertRole === 'info' ? 'info-circle'
                : alertRole === 'success' ? 'check-circle'
                : alertRole === 'warning' ? 'exclamation-triangle'
                : null }
              />

              <span>{alertHeading}</span>

              { !hideCloseBtn ?
                <button
                  class="alert-close-btn"
                  onClick={onDismiss ? onDismiss : null}
                  aria-label={ lang == 'en' ? 'Close alert.' : 'TO DO FRENCH'}
                >
                  <gcds-icon aria-hidden="true" name="times" size="sm" />
                </button>
              : null }
            </h2>

            <div class="alert-content">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}