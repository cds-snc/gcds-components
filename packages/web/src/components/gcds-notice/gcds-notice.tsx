import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig, logError } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-notice',
  styleUrl: 'gcds-notice.css',
  shadow: true,
})
export class GcdsNotice {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Set notice type.
   */
  @Prop() type!: 'danger' | 'info' | 'success' | 'warning';
  validateType() {
    if (!this.type) {
      this.errors.push('type');
    } else if (this.errors.includes('type')) {
      this.errors.splice(this.errors.indexOf('type'), 1);
    }
  }

  /**
   * Set the notice title.
   */
  @Prop() noticeTitle!: string;
  validateNoticeTitle() {
    if (!this.noticeTitle || this.noticeTitle === '') {
      this.errors.push('noticeTitle');
    } else if (this.errors.includes('noticeTitle')) {
      this.errors.splice(this.errors.indexOf('noticeTitle'), 1);
    }
  }

  /**
   * The notice title tag property specifies the HTML heading element for the title.
   * This property does not modify the font size. It is used to assign the heading level
   * in order to maintain heading hierarchy and accessibility for assistive technologies.
   */
  @Prop() noticeTitleTag!: 'h2' | 'h3' | 'h4' | 'h5';
  validateNoticeTitleTag() {
    if (
      !this.noticeTitleTag ||
      !['h2', 'h3', 'h4', 'h5'].includes(this.noticeTitleTag)
    ) {
      this.errors.push('noticeTitleTag');
    } else if (this.errors.includes('noticeTitleTag')) {
      this.errors.splice(this.errors.indexOf('noticeTitleTag'), 1);
    }
  }

  /**
   * States
   */

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

  /**
   * Language of rendered component
   */
  @State() lang: string;

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

  private validateChildren() {
    if (this.el.innerHTML.trim() == '') {
      this.errors.push('children');
    } else if (this.errors.includes('children')) {
      this.errors.splice(this.errors.indexOf('children'), 1);
    }
  }

  private validateRequiredProps() {
    this.validateNoticeTitle();
    this.validateType();
    this.validateNoticeTitleTag();
    this.validateChildren();

    if (
      this.errors.includes('type') ||
      this.errors.includes('noticeTitle') ||
      this.errors.includes('noticeTitleTag') ||
      this.errors.includes('children')
    ) {
      return false;
    }
    return true;
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    let valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-notice', this.errors);
    }
  }

  render() {
    const { type, noticeTitle, noticeTitleTag } = this;

    const iconTypes = {
      danger: 'exclamation-circle',
      info: 'info-circle',
      success: 'check-circle',
      warning: 'exclamation-triangle',
    };

    return (
      <Host>
        {this.validateRequiredProps() && (
          <section class={`gcds-notice notice--type-${type}`}>
            <gcds-icon class="notice__icon" size="h4" name={iconTypes[type]} />
            <div>
              <gcds-heading
                tag={noticeTitleTag}
                margin-top="0"
                margin-bottom="100"
                class="notice__heading"
              >
                <gcds-sr-only tag="span">{i18n[this.lang][type]}</gcds-sr-only>
                {noticeTitle}
              </gcds-heading>
              <slot></slot>
            </div>
          </section>
        )}
      </Host>
    );
  }
}
