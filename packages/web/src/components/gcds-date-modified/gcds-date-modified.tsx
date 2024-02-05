import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-date-modified',
  styleUrl: 'gcds-date-modified.css',
  shadow: true,
})
export class GcdsDateModified {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Set date modified type. Default is date.
   */
  @Prop({ mutable: true }) type: 'date' | 'version' = 'date';

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

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  render() {
    const { lang, type } = this;

    return (
      <Host>
        <dl class="gcds-date-modified">
          <dt>{type === 'version' ? 'Version ' : i18n[lang].term}</dt>
          <dd>
            {type === 'version' ? (
              <slot></slot>
            ) : (
              <time>
                <slot></slot>
              </time>
            )}
          </dd>
        </dl>
      </Host>
    );
  }
}
