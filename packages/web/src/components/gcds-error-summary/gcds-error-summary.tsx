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

    this.errorQueue = this.errorLinks as Object;

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
      this.errorLinksObject[e.detail.message] = e.target;
    }
  }

  @Listen('gcdsValid', { target: 'document' })
  validListener(e) {
    if (this.listen && e.target.closest('form') == this.el.closest('form')) {
      for (const [key, value] of Object.entries(this.errorLinksObject)) {
        if (value == e.target) {
          delete this.errorLinksObject[key];
        }
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
    const sortable = Object.entries(this.errorLinksObject).map(
      ([key, value]) => [
        key,
        value,
        (value as HTMLElement).getBoundingClientRect().y,
      ],
    );

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
  focusElement(id) {
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
          <gcds-heading tag="h2" margin-top="0" margin-bottom="300">
            {heading ?? i18n[lang].heading}
          </gcds-heading>
          <ol class="summary__errorlist">
            {(hasSubmitted || errorLinks) &&
              Object.keys(errorQueue).length > 0 &&
              Object.keys(errorQueue).map(key => {
                return (
                  <li class="summary__listitem">
                    <gcds-link
                      size="regular"
                      href={errorLinks ? key : '#'}
                      onClick={e => {
                        e.preventDefault();
                        errorLinks
                          ? this.focusElement(key)
                          : (errorQueue[key] as HTMLElement).focus();
                      }}
                    >
                      {errorLinks ? errorQueue[key] : key}
                    </gcds-link>
                  </li>
                );
              })}
          </ol>
        </div>
      </Host>
    );
  }
}
