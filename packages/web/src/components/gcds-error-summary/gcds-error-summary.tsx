import {
  Component,
  Host,
  Element,
  Prop,
  Watch,
  State,
  Listen,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';
import i18n from './i18n/i18n';

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
   * Specifies if the error summary should listen for GcdsError event to generate error list.
   */
  @Prop({ mutable: true }) listen?: boolean = true;
  @Watch('listen')
  listenChanged() {
    if (this.errorLinks) {
      this.listen = false;
    }
  }

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
  errorLinksChanged(newErrorLinks: string | object) {
    if (typeof newErrorLinks == 'string') {
      this.errorLinks = JSON.parse(newErrorLinks);
    } else if (typeof newErrorLinks == 'object') {
      this.errorLinks = newErrorLinks;
    }

    // Turn off listen if error-links is being used
    if (this.listen) {
      this.listen = false;
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

  @State() hasSubmitted: boolean = false;

  @Listen('gcdsError', { target: 'document' })
  errorListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
      this.errorLinksObject[e.detail.id] = e.detail.message;
    }
  }

  @Listen('gcdsValid', { target: 'document' })
  validListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
      if (this.errorLinksObject && this.errorLinksObject[e.detail.id]) {
        delete this.errorLinksObject[e.detail.id];
      }

      if (this.errorQueue) {
        const sortedErrorList = this.sortErrors();

        this.errorQueue = { ...sortedErrorList };
      }
    }
  }

  @Listen('submit', { target: 'document' })
  submitListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
      this.hasSubmitted = true;

      // Time out to collect gcdsError events before rendering
      setTimeout(() => {
        const sortedErrorList = this.sortErrors();

        this.errorQueue = { ...sortedErrorList };

        // Time out to let list render
        setTimeout(() => {
          this.shadowElement.focus();
        }, 50);
      }, 100);
    }
  }

  /*
   * Sort error object based on the order form compoennts appear in the form
   */
  sortErrors() {
    const sortable = [];
    for (const id in this.errorLinksObject) {
      sortable.push([
        id,
        this.errorLinksObject[id],
        document.querySelector(id).getBoundingClientRect().y,
      ]);
    }

    sortable.sort(function (a, b) {
      return a[2] - b[2];
    });

    const objSorted = {};
    sortable.forEach(function (item) {
      objSorted[item[0]] = item[1];
    });

    return objSorted;
  }

  /*
   * Focus element on error link click with label visible
   */
  focusElement(event, id) {
    event.preventDefault();

    const element = document.querySelector(id);

    let target = `[for=${id.replace('#', '')}]`;

    if (element.nodeName == 'FIELDSET') {
      target = `#legend-${id.replace('#', '')}`;
    }

    element.closest('form').querySelector(target).scrollIntoView();
    element.focus();
  }

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
    this.listenChanged();

    // Format error-links string / object
    if (this.errorLinks && typeof this.errorLinks == 'string') {
      this.errorQueue = { ...JSON.parse(this.errorLinks) };
    } else if (this.errorLinks && typeof this.errorLinks == 'object') {
      this.errorQueue = { ...this.errorLinks };
    }
  }

  render() {
    const { heading, errorQueue, lang, hasSubmitted, errorLinks } = this;
    return (
      <Host>
        <div
          role="alert"
          tabindex="-1"
          ref={element => (this.shadowElement = element as HTMLElement)}
          class={`gcds-error-summary ${
            (hasSubmitted || errorLinks) && Object.keys(errorQueue).length > 0
              ? 'gcds-show'
              : ''
          }`}
        >
          <h2 class="summary__heading">{heading ?? i18n[lang].heading}</h2>
          <ol class="summary__errorlist">
            {(hasSubmitted || errorLinks) &&
              Object.keys(errorQueue).length > 0 &&
              Object.keys(errorQueue).map(key => {
                return (
                  <li class="summary__listitem">
                    <a
                      onClick={e => this.focusElement(e, key)}
                      class="summary__link"
                      href={key}
                    >
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
