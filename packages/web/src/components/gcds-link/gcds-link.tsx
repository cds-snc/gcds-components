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
import { inheritAttributes } from '../../utils/utils';
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
   * Set the link size
   */
  @Prop({ mutable: true }) size: 'regular' | 'small' = 'regular';

  @Watch('size')
  validateSize(newValue: string) {
    const values = ['regular', 'small'];

    if (!values.includes(newValue)) {
      this.size = 'regular';
    }
  }

  private handleClick = (e: Event) => {
    if (this.clickHandler) {
      this.clickHandler(e);
    }
  };

  /**
   * Link props
   */

  /**
   * Sets the display behavior of the link
   */
  @Prop() display: string | undefined;

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop() href = '#';

  /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  @Prop() rel: string | undefined;

  /**
   * The target attribute specifies where to open the linked document
   */
  @Prop() target: string | undefined;

  /**
   * Whether the link is external or not
   */
  @Prop() external: false;

  /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  @Prop() download: string | undefined;

  /**
   * The type specifies the media type of the linked document
   */
  @Prop() type: string | undefined;

  /**
   * Custom callback function on click event
   */
  @Prop() clickHandler: Function;

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
    this.validateSize(this.size);

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
    } = this;

    const Tag = 'a';
    const attrs = {
      display,
      href,
      rel,
      target,
      download,
      type,
    };

    const isExternal = target === '_blank' || external;

    return (
      <Host>
        <Tag
          {...attrs}
          onClick={e => this.handleClick(e)}
          class={`link--${size}`}
          ref={element => (this.shadowElement = element as HTMLElement)}
          target={isExternal ? '_blank' : target}
          rel={isExternal ? 'noopener' : rel}
          {...inheritedAttributes}
          part="link"
        >
          <slot name="left"></slot>

          <slot></slot>

          {target === '_blank' || external ? (
            <gcds-icon
              name="external-link"
              label={i18n[lang].label}
              margin-left="200"
            />
          ) : download ? (
            <gcds-icon
              name="download"
              label={i18n[lang].label}
              margin-left="200"
            />
          )
            : (
            <slot name="right"></slot>
          )}
        </Tag>
      </Host>
    );
  }
}
