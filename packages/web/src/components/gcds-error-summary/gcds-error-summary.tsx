import { Component, Host, Element, Prop, Watch, State, Listen, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-error-summary',
  styleUrl: 'gcds-error-summary.css',
  shadow: true,
})
export class GcdsErrorSummary {
  @Element() el: HTMLElement;

  private shadowElement?: HTMLElement;

  /**
   * Set error summary heading
   */
  @Prop({ reflect: true }) heading?: string;

  /**
   * Set error summary message
   */
  @Prop({ reflect: true }) message?: string;

  /**
   * Specifies if the error summary should listen for GcdsError event to generate error list.
   */
  @Prop() listen?: boolean = false;

  /**
  * Object of list items for error list. Format: { link-href: link-label }
  */
  @Prop({ reflect: false, mutable: true }) errorLinks: string | object;
  errorLinksObject: object = {};

  /**
   * Convert contextual links prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  @Watch('errorLinks')
  contextualLinksChanged(newErrorLinks: string | object) {
    if (typeof newErrorLinks == "string") {
      this.errorLinks = JSON.parse(newErrorLinks);
    } else if (typeof newErrorLinks == "object") {
      this.errorLinks = newErrorLinks;
    }
  }

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
  * Queue of erros
  */
  @State() errorQueue: object = {};

  @State()

  @Listen("gcdsError", { target: "document"})
  errorListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      this.errorLinksObject[e.detail.id] = e.detail.message;
    }
  }

  @Listen("gcdsValid", { target: "document"})
  validListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      if (this.errorLinksObject && this.errorLinksObject[e.detail.id]) {
        delete this.errorLinksObject[e.detail.id];
      }
    }
  }

  @Listen("submit", { target: "document"})
  submitListener(e) {
    if (this.listen && e.target.closest("form") == this.el.closest("form")) {
      setTimeout(() => {
        this.errorQueue = {};
        this.errorQueue = this.errorLinksObject;
        this.shadowElement.focus();
      }, 100);
    }
  }

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

    if (this.errorLinks && typeof this.errorLinks == "string") {
      this.errorQueue = JSON.parse(this.errorLinks);
    } else if (this.errorLinks && typeof this.errorLinks == "object") {
      this.errorQueue = this.errorLinks;
    }
  }

  render() {
    const { heading, message, errorQueue } = this;
    return (
      <Host>
        <div
          role="alert"
          tabindex="-1"
          ref={element => this.shadowElement = element as HTMLElement}
        >
          <h2>
            {heading ?
              heading
            :
              "There was a problem"
            }
          </h2>
          <p>
            {message ?
              message
            :
              "Errors were found on this page:"
            }
          </p>
          <ol>
          {errorQueue && Object.keys(errorQueue).map((key) => {
            return (
              <li>
                <a href={key}>
                  {errorQueue[key]}
                </a>
              </li>
            );
          })}
          </ol>
        </div>
      </Host>
    );
  }

}
