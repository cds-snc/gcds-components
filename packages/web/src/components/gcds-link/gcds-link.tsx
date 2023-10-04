import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
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
   * Set the main style
   */
  @Prop({ mutable: true }) linkRole:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'skip-to-content' = 'primary';

  @Watch('linkRole')
  validatelinkRole(newValue: string) {
    const values = ['primary', 'secondary', 'danger', 'skip-to-content'];

    if (!values.includes(newValue)) {
      this.linkRole = 'primary';
    }
  }

  /**
   * Set the style variant
   */
  @Prop({ mutable: true }) linkStyle: 'solid' | 'text-only' = 'solid';

  @Watch('linkStyle')
  validatelinkStyle(newValue: string) {
    const values = ['solid', 'text-only'];

    if (!values.includes(newValue)) {
      this.linkStyle = 'solid';
    }
  }

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

  /**
   * The linkId attribute specifies the id for a <link> element.
   */
  @Prop() linkId: string;

  /**
   * The name attribute specifies the name for a <link> element.
   */
  @Prop() name: string | undefined;

  /**
   * The disabled attribute for a <link> element.
   */
  @Prop() disabled: boolean;

  /**
   * Link props
   */

  /**
   * The href attribute specifies the URL of the page the link goes to
   */
  @Prop() href: string | undefined;

  /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  @Prop() rel: string | undefined;

  /**
   * The target attribute specifies where to open the linked document
   */
  @Prop() target: string | undefined;

  /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  @Prop() download: string | undefined;

  /**
   * Custom callback function on click event
   */
  @Prop() clickHandler: Function;

  /**
   * Custom callback function on focus event
   */
  @Prop() focusHandler: Function;

  /**
   * Custom callback function on blur event
   */
  @Prop() blurHandler: Function;

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
    this.validatelinkRole(this.linkRole);
    this.validatelinkStyle(this.linkStyle);
    this.validateSize(this.size);

    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);

    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  /**
   * Focus element
   */
  @Method()
  async focusElement() {
    this.shadowElement.focus();
  }

  private handleClick = (e: Event) => {
    if (this.clickHandler) {
      this.clickHandler(e);
    } else {
      // if (!this.disabled && this.type != 'link' && this.type != 'link') {
      //   // Attach link to form
      //   const form = this.el.closest('form');
      //
      //   if (form) {
      //     e.preventDefault();
      //
      //     const formlink = document.createElement('link');
      //     formlink.type = this.type;
      //     if (this.name) {
      //       formlink.name = this.name;
      //     }
      //     formlink.style.display = 'none';
      //     form.appendChild(formlink);
      //     formlink.click();
      //     formlink.remove();
      //   }
      // }
    }

    // Has any inherited attributes changed on click
    this.inheritedAttributes = inheritAttributes(this.el, this.shadowElement);
  };

  private onFocus = e => {
    if (this.focusHandler) {
      this.focusHandler(e);
    }

    this.gcdsFocus.emit();
  };

  private onBlur = e => {
    if (this.blurHandler) {
      this.blurHandler(e);
    }

    this.gcdsBlur.emit();
  };

  render() {
    const {
      linkRole,
      linkStyle,
      size,
      linkId,
      // disabled,
      lang,
      // name,
      href,
      rel,
      target,
      download,
      inheritedAttributes,
    } = this;

    const Tag = 'a';
    const attrs = {
      href,
      rel,
      target,
      download,
    };

    return (
      <Host>
        <Tag
          {...attrs}
          id={linkId}
          onBlur={e => this.onBlur(e)}
          onFocus={e => this.onFocus(e)}
          onClick={e => this.handleClick(e)}
          class={`link--role-${linkRole} link--${linkStyle} link--${size}`}
          ref={element => (this.shadowElement = element as HTMLElement)}
          {...inheritedAttributes}
          part="link"
        >
          <slot name="left"></slot>

          <slot></slot>

          {target === '_blank' ? (
            <gcds-icon
              name="external-link"
              label={i18n[lang].label}
              margin-left="200"
            />
          ) : (
            <slot name="right"></slot>
          )}
        </Tag>
      </Host>
    );
  }
}
