import { Component, Element, Host, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-date-modified',
  styleUrl: 'gcds-date-modified.css',
  shadow: false,
  scoped: true
})
export class GcdsDateModified {
  @Element() el: HTMLElement;

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
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
    return (
      <Host>
        <dl class="gcds-date-modified">
          <dt>
            {this.lang == "en" ? 
              "Date modified:"
            : 
              "Date de modification :"
            }
            </dt>
          <dd>
            <time>
              <slot></slot>
            </time>
          </dd>
        </dl>
      </Host>
    );
  }
}
