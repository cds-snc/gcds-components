import {
  Component,
  Element,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  h,
} from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import i18n from './i18n/i18n';

/**
 * The language toggle is a link to the same content in the other Official Language.
 */
@Component({
  tag: 'gcds-lang-toggle',
  styleUrl: 'gcds-lang-toggle.css',
  shadow: true,
})
export class GcdsLangToggle {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * The href attribute specifies the URL of the opposite language page
   */
  @Prop({ reflect: true, mutable: false }) href!: string;

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
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  @Event() gcdsClick!: EventEmitter<string>;

  /**
   * Language of rendered component
   */
  @State() lang: string;
  @Watch('lang')
  onLangChange(newValue: string) {
    this.lang = newValue.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
  }

  render() {
    const { lang, href } = this;

    return (
      <Host>
        <div class="gcds-lang-toggle">
          <gcds-sr-only id="lang-toggle__heading" tag="h2">
            {i18n[lang].heading}
          </gcds-sr-only>
          <gcds-link size="regular" href={href} lang={i18n[lang].abbreviation}>
            <span>{i18n[lang].language}</span>
            <abbr title={i18n[lang].language}>{i18n[lang].abbreviation}</abbr>
          </gcds-link>
        </div>
      </Host>
    );
  }
}
