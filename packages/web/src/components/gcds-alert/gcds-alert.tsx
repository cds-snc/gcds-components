import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig, emitEvent } from '../../utils/utils';
import i18n from './i18n/i18n';
import { IconNames } from '../gcds-icon/gcds-icon';

/**
 * Alert displays an alert message with an optional heading, icon, and close button.
 *
 * @slot default - Slot for the main content of the alert.
 */
@Component({
  tag: 'gcds-alert',
  styleUrl: 'gcds-alert.css',
  shadow: true,
})
export class GcdsAlert {
  @Element() el: HTMLElement;

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
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Events
   */

  @Event() gcdsDismiss!: EventEmitter<void>;

  /*
   * Add or get live region for success/info alerts
   */
  private getLiveRegion(): HTMLElement {
    let liveRegion = document.querySelector('.gcds-alert-announcement') as HTMLElement;

    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.classList.add('gcds-alert-announcement');
      Object.assign(liveRegion.style, {
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        whiteSpace: 'nowrap',
      });
      document.body.appendChild(liveRegion);
    }

    return liveRegion;
  }

  /*
   * Add heading/message to live region to announce success/info alerts
   */
  private announce(message: string) {
    const region = this.getLiveRegion();
    region.textContent = '';
    window.setTimeout(() => {
      region.textContent = message;
    }, 350);
  }

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  componentDidLoad() {
    if (this.alertRole === 'info' || this.alertRole === 'success') {
      const message = `${this.heading}. ${this.el.textContent.trim()}`;
      this.announce(message);
    }
  }

  render() {
    const {
      alertRole,
      container,
      heading,
      hideCloseBtn,
      hideRoleIcon,
      isFixed,
      isOpen,
      lang,
    } = this;

    return (
      <Host>
        {isOpen ? (
          <div
            class={`gcds-alert alert--role-${alertRole} ${
              isFixed ? 'alert--is-fixed' : ''
            }`}
            role={
              alertRole === 'info' || alertRole === 'success'
                ? 'status'
                : 'alert'
            }
            aria-atomic="true"
            aria-label={
              alertRole === 'danger'
                ? i18n[lang].label.danger
                : alertRole === 'info'
                  ? i18n[lang].label.info
                  : alertRole === 'success'
                    ? i18n[lang].label.success
                    : alertRole === 'warning'
                      ? i18n[lang].label.warning
                      : null
            }
          >
            <gcds-container
              size={isFixed ? container : 'full'}
              alignment="center"
            >
              <div class="alert__container">
                {!hideRoleIcon && (
                  <gcds-icon
                    aria-hidden="true"
                    class="alert__icon"
                    size="h6"
                    name={
                      (alertRole === 'danger'
                        ? 'exclamation-circle'
                        : alertRole === 'info'
                          ? 'info-circle'
                          : alertRole === 'success'
                            ? 'checkmark-circle'
                            : alertRole === 'warning'
                              ? 'warning-triangle'
                              : undefined) as IconNames
                    }
                  />
                )}

                <div class="alert__content">
                  <p class="alert__heading">
                    <strong>{heading}</strong>
                  </p>
                  <slot></slot>
                </div>

                {!hideCloseBtn && (
                  <gcds-button
                    button-role="secondary"
                    size="small"
                    onClick={e => {
                      const event = emitEvent(e, this.gcdsDismiss);
                      if (event) {
                        this.isOpen = false;
                      }
                    }}
                  >
                    {i18n[lang].closeBtn}
                  </gcds-button>
                )}
              </div>
            </gcds-container>
          </div>
        ) : null}
      </Host>
    );
  }
}
