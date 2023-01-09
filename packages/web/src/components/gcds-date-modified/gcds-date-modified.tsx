import { Component, Element, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

@Component({
  tag: 'gcds-date-modified',
  styleUrl: 'gcds-date-modified.css',
  shadow: false,
  scoped: true
})
export class GcdsDateModified {
  @Element() el: HTMLElement;

  private lang: string;

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);
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
