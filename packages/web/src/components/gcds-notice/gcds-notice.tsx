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
    this.validateChildren();

    if (
      this.errors.includes('type') ||
      this.errors.includes('noticeTitle') ||
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
    const { type, noticeTitle, lang } = this;

    return (
      <Host>
        {this.validateRequiredProps() && (
          <section class={`gcds-notice notice--type-${type}`}>
            <gcds-heading tag="h2" marginTop="0" class="notice__heading">
              <strong class="notice__type">
                {i18n[lang]['type'][type]}
              </strong>
              {/* Hidden colon to provide pause between caption and heading text for assistive technology */}
              <gcds-sr-only tag="span"> : </gcds-sr-only>
              {noticeTitle}
            </gcds-heading>
            <slot></slot>
          </section>
        )}
      </Host>
    );
  }
}
