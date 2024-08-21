import {
  Element,
  Component,
  Host,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { assignLanguage, observerConfig, logError } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-card',
  styleUrl: 'gcds-card.css',
  shadow: true,
})
export class GcdsCard {
  @Element() el: HTMLElement;

  /**
   * The card title attribute specifies the title that appears on the card
   */
  @Prop({ reflect: true }) cardTitle!: string;
  @Watch('cardTitle')
  validateCardTitle() {
    if (!this.cardTitle || this.cardTitle.trim() == '') {
      this.errors.push('cardTitle');
    } else if (this.errors.includes('cardTitle')) {
      this.errors.splice(this.errors.indexOf('cardTitle'), 1);
    }
  }

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop({ reflect: true }) href!: string;
  @Watch('href')
  validateHref() {
    if (!this.href || this.href.trim() == '') {
      this.errors.push('href');
    } else if (this.errors.includes('href')) {
      this.errors.splice(this.errors.indexOf('href'), 1);
    }
  }

  /**
   * The card title tag attribute specifies HTML element the title renders as
   */
  @Prop() cardTitleTag: 'h3' | 'h4' | 'h5' | 'h6' | 'a' = 'a';

  /**
   * The description attribute specifies the body of text that appears on the card
   */
  @Prop({ reflect: true }) description: string;

  /**
   * The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit.
   */
  @Prop({ reflect: true, mutable: true }) badge: string;
  @Watch('badge')
  validateBadge() {
    if (this.badge && this.badge.length > 20) {
      console.error(`${i18n['en'].badgeError} | ${i18n['fr'].badgeError}`);
      this.errors.push('badge');
    } else if (this.errors.includes('badge')) {
      this.errors.splice(this.errors.indexOf('badge'), 1);
    }
  }

  /**
   * The img src attribute specifies the path to the image
   */
  @Prop({ reflect: true }) imgSrc: string;

  /**
   * The img alt attribute specifies the alt text for the image provided, if none, image will be decorative
   */
  @Prop({ reflect: true }) imgAlt: string;

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

  /**
   * Events
   */

  /**
   * Emitted when the card has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the card loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the card has been clicked.
   */
  @Event() gcdsClick!: EventEmitter<void>;

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

  /*
   * Validate required properties
   */
  private validateRequiredProps() {
    this.validateCardTitle();
    this.validateHref();

    if (this.errors.includes('href') || this.errors.includes('cardTitle')) {
      return false;
    }

    return true;
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    this.validateBadge();

    let valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-card', this.errors, ['badge']);
    }
  }

  private get renderDescription() {
    if (this.el.innerHTML.trim() != '') {
      return <div class="gcds-card__description"><slot></slot></div>;
    } else if (this.description) {
      return <div class="gcds-card__description"><gcds-text margin-bottom='0'>{this.description}</gcds-text></div>;
    } else {
      return null;
    }
  }

  render() {
    const {
      cardTitle,
      cardTitleTag,
      href,
      badge,
      imgSrc,
      imgAlt,
      renderDescription,
      lang,
      errors,
    } = this;

    const Element = cardTitleTag;

    const taggedAttr = {};

    if (badge) {
      taggedAttr['aria-describedby'] = 'gcds-badge';
    }

    if (this.validateRequiredProps()) {
      return (
        <Host>
          <div class="gcds-card">
            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt ? imgAlt : ''}
                class="gcds-card__image"
              />
            )}
            {badge && !errors.includes('badge') && (
              <gcds-text
                id="gcds-badge"
                class="gcds-badge"
                text-role="light"
                margin-bottom="0"
                size="caption"
              >
                <strong>
                  <gcds-sr-only>{i18n[lang].tagged}</gcds-sr-only>
                  {badge}
                </strong>
              </gcds-text>
            )}
            {Element != 'a' ? (
              <Element class="gcds-card__title" {...taggedAttr}>
                <gcds-link href={href}>{cardTitle}</gcds-link>
              </Element>
            ) : (
              <gcds-link href={href} class="gcds-card__title" {...taggedAttr}>
                {cardTitle}
              </gcds-link>
            )}
            {renderDescription}
          </div>
        </Host>
      );
    }
  }
}
