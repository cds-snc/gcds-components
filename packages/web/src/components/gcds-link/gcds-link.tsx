import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Watch,
  Prop,
  State,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import { inheritAttributes, emitEvent } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-link',
  styleUrl: 'gcds-link.css',
  shadow: true,
})
export class GcdsLink {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the main style of the link.
   */
  @Prop({ mutable: true }) variant?: 'default' | 'light' = 'default';

  @Watch('variant')
  validateVariant(newValue: string) {
    const values = ['default', 'light'];

    if (!values.includes(newValue)) {
      this.variant = 'default';
    }
  }

  /**
   * Set the link size
   */
  @Prop({ mutable: true }) size?: 'regular' | 'small' | 'inherit' = 'inherit';
  @Watch('size')
  validateSize(newValue: string) {
    const values = ['regular', 'small', 'inherit'];

    if (!values.includes(newValue)) {
      this.size = 'inherit';
    }
  }

  /**
   * Sets the display behavior of the link
   */
  @Prop({ mutable: true }) display?: 'block' | 'inline' = 'inline';
  @Watch('display')
  validateDisplay(newValue: string) {
    const values = ['block', 'inline'];

    if (!values.includes(newValue)) {
      this.display = 'inline';
    }
  }
  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop() href!: string;

  /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  @Prop() rel?: string | undefined;

  /**
   * The target attribute specifies where to open the linked document
   */
  @Prop() target?: string = '_self';

  /**
   * Whether the link is external or not
   */
  @Prop() external?: boolean = false;

  /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  @Prop() download?: string | undefined;

  /**
   * The type specifies the media type of the linked document
   */
  @Prop() type?: string | undefined;

  /**
   * Set additional HTML attributes not available in component properties
   */
  @State() inheritedAttributes: Object = {};

  /**
   * Language of rendered component
   */
  @State() lang: string;

  /**
   * Events
   */

  /**
   * Emitted when the link has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when the link loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  /**
   * Emitted when the link has been clicked.
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

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateVariant(this.variant);
    this.validateSize(this.size);
    this.validateDisplay(this.display);

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement, [
      'referrerpolicy',
    ]);

    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  render() {
    const {
      size,
      lang,
      display,
      href,
      rel,
      target,
      external,
      download,
      type,
      inheritedAttributes,
      variant,
    } = this;

    const attrs = {
      href,
      rel,
      target,
      download,
      type,
    };

    const isExternal = target === '_blank' || external;

    return (
      <Host>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <a
          role="link"
          tabIndex={0}
          {...attrs}
          class={`gcds-link link--${size} ${
            display != 'inline' ? `d-${display}` : ''
          } ${variant != 'default' ? `variant-${variant}` : ''}`}
          ref={element => (this.shadowElement = element as HTMLElement)}
          target={isExternal ? '_blank' : target}
          rel={isExternal ? 'noopener noreferrer' : rel}
          {...inheritedAttributes}
          part="link"
          onBlur={() => this.gcdsBlur.emit()}
          onFocus={() => this.gcdsFocus.emit()}
          onClick={e => emitEvent(e, this.gcdsClick, href)}
        >
          <slot></slot>
          {target === '_blank' || external ? (
            <gcds-icon
              name="external-link"
              label={i18n[lang].external}
              margin-left="100"
            />
          ) : download !== undefined ? (
            <gcds-icon
              name="download"
              label={i18n[lang].download}
              margin-left="100"
            />
          ) : href && href.toLowerCase().startsWith('mailto:') ? (
            <gcds-icon
              icon-style="regular"
              name="envelope"
              label={i18n[lang].email}
              margin-left="100"
            />
          ) : (
            href &&
            href.toLowerCase().startsWith('tel:') && (
              <gcds-icon
                name="phone"
                label={i18n[lang].phone}
                margin-left="100"
              />
            )
          )}
        </a>
      </Host>
    );
  }
}
