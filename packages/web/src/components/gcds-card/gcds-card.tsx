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

/**
 * A card is a box containing structured, actionable content on a single topic.
 *
 * @slot title - Slot for the card title. Accepts rich text, so markup such as
 * `<abbr>`, `<em>` or an icon can be used where the card-title prop cannot. Falls back to
 * the card-title prop, which is mirrored into the light DOM so the title text stays
 * readable by DOM-text extraction tools.
 * @slot default - Slot for the card description. Accepts rich text and overwrites the
 * description prop if used. The description prop is mirrored into this slot for the same
 * DOM-text reason when nothing is slotted.
 */
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
   * The card title tag property specifies the HTML heading element for the title.
   * This property does not modify the font size. It is used to assign the heading level
   * in order to maintain heading hierarchy and accessibility for assistive technologies.
   */
  @Prop() cardTitleTag?: 'h3' | 'h4' | 'h5' | 'h6';

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
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  @Prop() rel?: string | undefined;

  /**
   * The target attribute specifies where to open the linked document
   */
  @Prop() target?: string;

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
   * Emitted when the card has been clicked. Contains the href in the event detail.
   */
  @Event() gcdsClick!: EventEmitter<string>;

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

  /**
   * Whether the consumer supplied their own title or description through a slot.
   * Captured once, before any mirror node is added, so that the mirrors this
   * component writes into the light DOM can never be mistaken for author content.
   */
  private hasSlottedTitle = false;
  private hasSlottedDescription = false;

  /*
   * Author content assigned to one slot, ignoring this component's own mirrors.
   *
   * Checking `innerHTML` is not sufficient once `title` is a public slot: a card
   * that slots only a title would read as having a slotted description too, and
   * the description prop would be silently dropped.
   */
  private hasSlottedContent(slotName?: string) {
    return Array.from(this.el.childNodes).some(node => {
      // Numeric node types — Stencil's mock-doc does not expose the Node constants.
      if (node.nodeType === 3) {
        return !slotName && !!node.textContent?.trim();
      }

      if (node.nodeType !== 1) {
        return false;
      }

      const child = node as Element;

      if (child.hasAttribute('data-gcds-text-mirror')) {
        return false;
      }

      const assigned = child.getAttribute('slot');

      return slotName ? assigned === slotName : !assigned;
    });
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    this.validateBadge();

    // Must be read before syncTextMirrors() adds anything to the light DOM.
    this.hasSlottedTitle = this.hasSlottedContent('title');
    this.hasSlottedDescription = this.hasSlottedContent();

    const valid = this.validateRequiredProps();

    if (!valid) {
      logError('gcds-card', this.errors, ['badge']);
    }

    this.syncTextMirrors();
  }

  componentWillUpdate() {
    this.syncTextMirrors();
  }

  /*
   * A card that fails validation renders nothing, so it must not leave mirror
   * text behind in the light DOM for textContent to pick up.
   */
  private get shouldMirrorText() {
    return !this.errors.includes('href') && !this.errors.includes('cardTitle');
  }

  /*
   * Mirror attribute-provided text into the light DOM.
   *
   * card-title and description are rendered through named slots, so without a
   * light DOM node to fill them the text only ever exists inside the shadow root.
   * textContent does not pierce a shadow root, which makes the card invisible to
   * DOM-text extraction — including the browser-native read-aloud features on
   * Android and iOS, which stop at the first unreadable card. The ARIA tree is
   * unaffected either way, so screen readers behave the same before and after.
   */
  private syncTextMirrors() {
    const active = this.shouldMirrorText;

    // Only mirror a prop when the consumer has not slotted their own content,
    // otherwise the card would render the author's markup and the prop text.
    this.upsertTextMirror(
      'title',
      active && !this.hasSlottedTitle ? this.cardTitle : undefined,
    );
    this.upsertTextMirror(
      undefined,
      active && !this.hasSlottedDescription ? this.description : undefined,
    );
  }

  private upsertTextMirror(slot: string | undefined, value?: string) {
    const doc = this.el.ownerDocument;
    if (!doc) {
      return;
    }

    // Direct children only, and without :scope — Stencil's mock-doc selector
    // engine does not support that pseudo-class.
    const existing = Array.from(this.el.children).find(
      child =>
        (slot ? child.getAttribute('slot') === slot : !child.getAttribute('slot')) &&
        child.hasAttribute('data-gcds-text-mirror'),
    );

    if (!value) {
      existing?.remove();
      return;
    }

    if (existing) {
      if (existing.textContent !== value) {
        existing.textContent = value;
      }
      return;
    }

    const mirror = doc.createElement('span');
    if (slot) {
      mirror.setAttribute('slot', slot);
    }
    mirror.setAttribute('data-gcds-text-mirror', '');
    mirror.textContent = value;
    this.el.appendChild(mirror);
  }

  private get renderDescription() {
    if (this.hasSlottedDescription) {
      return (
        <div class="gcds-card__description">
          <slot></slot>
        </div>
      );
    } else if (this.description) {
      return (
        <div class="gcds-card__description">
          <gcds-text margin-bottom="0">
            <slot>{this.description}</slot>
          </gcds-text>
        </div>
      );
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
      rel,
      target,
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
            {badge && !errors.includes('badge') && (
              <gcds-text
                id="gcds-badge"
                class="gcds-badge"
                text-role="light"
                margin-bottom="0"
                size="small"
              >
                <strong>
                  <gcds-sr-only tag="span">{i18n[lang].tagged}</gcds-sr-only>
                  {badge}
                </strong>
              </gcds-text>
            )}
            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt ? imgAlt : ''}
                class="gcds-card__image"
              />
            )}
            {Element ? (
              <Element class="gcds-card__title" {...taggedAttr}>
                <gcds-link href={href}>
                  <slot name="title">{cardTitle}</slot>
                </gcds-link>
              </Element>
            ) : (
              <gcds-link
                href={href}
                class="gcds-card__title"
                rel={rel}
                target={target}
                {...taggedAttr}
              >
                <slot name="title">{cardTitle}</slot>
              </gcds-link>
            )}
            {renderDescription}
          </div>
        </Host>
      );
    }
  }
}
