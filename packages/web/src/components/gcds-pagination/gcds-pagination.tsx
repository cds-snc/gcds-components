import {
  Component,
  Element,
  Prop,
  Event,
  EventEmitter,
  State,
  Watch,
  Host,
  h,
} from '@stencil/core';

import { assignLanguage, observerConfig, emitEvent } from '../../utils/utils';
import I18N from './i18n/i18n';
import { constructHref, constructClasses } from './utils/render';

@Component({
  tag: 'gcds-pagination',
  styleUrl: 'gcds-pagination.css',
  shadow: true,
})
export class GcdsPagination {
  @Element() el: HTMLElement;

  private listitems = [];
  private mobilePrevNext = [];

  /*
   * Props
   */

  /**
   * Navigation element label
   */
  @Prop() display: 'list' | 'simple' = 'list';

  /**
   * Navigation element label
   */
  @Prop() label!: string;

  /**
   * Simple display - href for previous link
   */
  @Prop() previousHref: string;

  /**
   * Simple display - label for previous link
   */
  @Prop({ reflect: true }) previousLabel: string;

  /**
   * Simple display - href for next link
   */
  @Prop() nextHref: string;

  /**
   * Simple display - lable for next link
   */
  @Prop({ reflect: true }) nextLabel: string;

  /**
   * List display - Total number of pages
   */
  @Prop() totalPages: number;

  /**
   * List display - Current page number
   */
  @Prop({ reflect: true }) currentPage: number;

  @Watch('currentPage')
  watchCurrentPage(newValue) {
    this.currentStep = newValue;
  }

  /**
   * List display - URL object to create query strings and fragment on links
   */
  @Prop() url: string | object;
  urlObject: object;

  /**
   * Convert url prop to object
   * (Object props get treated as string when using Stencil components without a framework)
   */
  @Watch('url')
  urlChanged(newUrl: string | object) {
    if (typeof newUrl == 'string') {
      this.urlObject = JSON.parse(newUrl);
    } else if (typeof newUrl == 'object') {
      this.urlObject = newUrl;
    }
  }

  @State() currentStep: number;

  /**
   * Language of rendered component
   */
  @State() lang: string;
  @Watch('lang')
  watchLang() {
    if (this.display == 'list') {
      this.configureListPagination();
    }
  }

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

  /**
   * Function to constuct <li> and <a> tags for display="list" pagination
   */
  private configurePaginationStep(
    page: number,
    end?: 'next' | 'previous' | null,
    mobile?: boolean,
  ) {
    const href = this.urlObject
      ? constructHref(this.urlObject, page, end)
      : 'javascript:void(0)';
    const linkAttrs = {
      'href': href,
      'aria-label': !end
        ? I18N[this.lang].pageNumberOf
            .replace('{#}', page)
            .replace('{total}', this.totalPages)
            .replace('{label}', this.label)
        : end == 'next'
          ? `${I18N[this.lang].nextPage}: ${I18N[this.lang].pageNumberOf
              .replace('{#}', ++page)
              .replace('{total}', this.totalPages)
              .replace('{label}', this.label)}`
          : `${I18N[this.lang].previousPage}: ${I18N[this.lang].pageNumberOf
              .replace('{#}', --page)
              .replace('{total}', this.totalPages)
              .replace('{label}', this.label)}`,
      'onBlur': () => this.gcdsBlur.emit(),
      'onFocus': () => this.gcdsFocus.emit(),
      'onClick': e => emitEvent(e, this.gcdsClick, { page: page, href }),
    };

    if (page == this.currentPage && !end) {
      linkAttrs['aria-current'] = 'page';
    }

    if (end) {
      return (
        <li>
          {end === 'next' ? (
            <a
              {...linkAttrs}
              class={
                !mobile
                  ? 'gcds-pagination-end-button'
                  : 'gcds-pagination-end-button-mobile'
              }
            >
              {I18N[this.lang].next}
              <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
            </a>
          ) : (
            <a
              {...linkAttrs}
              class={
                !mobile
                  ? 'gcds-pagination-end-button'
                  : 'gcds-pagination-end-button-mobile'
              }
            >
              <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
              {mobile
                ? I18N[this.lang].previousMobile
                : I18N[this.lang].previous}
            </a>
          )}
        </li>
      );
    } else {
      return (
        <li
          class={
            page != 1 && page != this.totalPages
              ? constructClasses(page, this.currentPage, this.totalPages)
              : ''
          }
        >
          <a {...linkAttrs}>{page}</a>
        </li>
      );
    }
  }

  /**
   * Function to render the right steps for display="list" pagination
   */
  private configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];

    if (this.currentPage != 1) {
      this.listitems.push(
        this.configurePaginationStep(this.currentPage, 'previous'),
      );
      this.mobilePrevNext.push(
        this.configurePaginationStep(this.currentPage, 'previous', true),
      );
    }

    // Flags to see if ellipses already rendered
    let previousEllipses = false;
    let nextEllipses = false;

    for (let i = 1; i <= this.totalPages; i++) {
      // Left side mobile ellipses
      if (
        i == 2 &&
        this.currentPage < 6 &&
        this.currentPage > 3 &&
        this.totalPages > 9
      ) {
        this.listitems.push(
          <li class={`gcds-pagination-list-mobile-ellipses`} aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );
      } else if (
        i == 2 &&
        this.totalPages < 10 &&
        this.totalPages > 5 &&
        this.currentPage > 3
      ) {
        this.listitems.push(
          <li class={`gcds-pagination-list-mobile-ellipses`} aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );
      }

      if (
        i == this.currentPage ||
        i == 1 ||
        i == this.totalPages ||
        (i >= this.currentPage - 2 && i <= this.currentPage + 2) ||
        this.totalPages < 10
      ) {
        this.listitems.push(this.configurePaginationStep(i));
      } else if (
        (this.currentPage <= 5 && i <= 7) ||
        (this.currentPage >= this.totalPages - 4 && i >= this.totalPages - 6)
      ) {
        this.listitems.push(this.configurePaginationStep(i));
      } else if (
        (this.currentPage == 5 && i == 2) ||
        (this.currentPage == this.totalPages - 4 && i == this.totalPages - 1)
      ) {
        this.listitems.push(this.configurePaginationStep(i));
      } else if (!previousEllipses && i < this.currentPage - 2) {
        this.listitems.push(
          <li aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );

        previousEllipses = true;
      } else if (
        !nextEllipses &&
        i > this.currentPage + 2 &&
        i < this.totalPages
      ) {
        this.listitems.push(
          <li aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );

        nextEllipses = true;
      }

      // Right side mobile ellipses
      if (
        i == this.totalPages - 1 &&
        this.currentPage > this.totalPages - 5 &&
        this.currentPage < this.totalPages - 2 &&
        this.totalPages > 9
      ) {
        this.listitems.push(
          <li class={`gcds-pagination-list-mobile-ellipses`} aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );
      } else if (
        i == this.totalPages - 1 &&
        this.totalPages < 10 &&
        this.totalPages > 5 &&
        this.currentPage < this.totalPages - 2
      ) {
        this.listitems.push(
          <li class={`gcds-pagination-list-mobile-ellipses`} aria-hidden="true">
            <span class="gcds-pagination-list-ellipses">...</span>
          </li>,
        );
      }
    }

    if (this.currentPage != this.totalPages) {
      this.listitems.push(
        this.configurePaginationStep(this.currentPage, 'next'),
      );
      this.mobilePrevNext.push(
        this.configurePaginationStep(this.currentPage, 'next', true),
      );
    }
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

    if (this.url && typeof this.url == 'string') {
      this.urlObject = JSON.parse(this.url);
    } else if (this.url && typeof this.url == 'object') {
      this.urlObject = this.url;
    }

    if (this.display == 'list') {
      this.configureListPagination();
    }
  }

  componentDidUpdate() {
    if (this.display == 'list') {
      this.configureListPagination();
    }
  }

  render() {
    const {
      display,
      label,
      previousHref,
      previousLabel,
      nextHref,
      nextLabel,
      lang,
    } = this;

    return (
      <Host role="navigation" aria-label={label}>
        <div class="gcds-pagination">
          {display === 'list' ? (
            <div>
              <ul class="gcds-pagination-list">{this.listitems}</ul>
              <ul class="gcds-pagination-list-mobile-prevnext">
                {this.mobilePrevNext}
              </ul>
            </div>
          ) : (
            <ul class="gcds-pagination-simple">
              {previousHref && (
                <li class="gcds-pagination-simple-previous">
                  <a
                    href={previousHref}
                    aria-label={`${I18N[lang].previousPage}${
                      previousLabel ? `: ${previousLabel}` : ''
                    }`}
                    onBlur={() => this.gcdsBlur.emit()}
                    onFocus={() => this.gcdsFocus.emit()}
                    onClick={e => emitEvent(e, this.gcdsClick, previousHref)}
                  >
                    <gcds-icon margin-right="200" name="arrow-left"></gcds-icon>
                    <div class="gcds-pagination-simple-text">
                      {I18N[lang].previous}
                    </div>
                    <span>{previousLabel}</span>
                  </a>
                </li>
              )}
              {nextHref && (
                <li class="gcds-pagination-simple-next">
                  <a
                    href={nextHref}
                    aria-label={`${I18N[lang].nextPage}${
                      nextLabel ? `: ${nextLabel}` : ''
                    }`}
                    onBlur={() => this.gcdsBlur.emit()}
                    onFocus={() => this.gcdsFocus.emit()}
                    onClick={e => emitEvent(e, this.gcdsClick, nextHref)}
                  >
                    <div class="gcds-pagination-simple-text">
                      {I18N[lang].next}
                    </div>
                    <span>{nextLabel}</span>
                    <gcds-icon margin-left="200" name="arrow-right"></gcds-icon>
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </Host>
    );
  }
}
