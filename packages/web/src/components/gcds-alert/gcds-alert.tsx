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
            role="alert"
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
            <gcds-container size={isFixed ? container : 'full'} centered>
              <div class="alert__container">
                {!hideRoleIcon && (
                  <gcds-icon
                    aria-hidden="true"
                    class="alert__icon"
                    size="h5"
                    margin-right="250"
                    name={
                      alertRole === 'danger'
                        ? 'exclamation-circle'
                        : alertRole === 'info'
                          ? 'info-circle'
                          : alertRole === 'success'
                            ? 'check-circle'
                            : alertRole === 'warning'
                              ? 'exclamation-triangle'
                              : null
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
                  <button
                    class="alert__close-btn"
                    onClick={e => {
                      const event = emitEvent(e, this.gcdsDismiss);
                      if (event) {
                        this.isOpen = false;
                      }
                    }}
                    aria-label={i18n[lang].closeBtn}
                  >
                    <gcds-icon aria-hidden="true" name="times" size="text" />
                  </button>
                )}
              </div>
            </gcds-container>
          </div>
        ) : null}
      </Host>
    );
  }
}
