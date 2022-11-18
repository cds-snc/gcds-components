import { Component, Element, Prop, Event, EventEmitter, State, Watch, Host, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';

interface PaginationUrl {
  queryStrings: Object;
  fragment?: string;
}

@Component({
  tag: 'gcds-pagination',
  styleUrl: 'gcds-pagination.css',
  shadow: false,
  scoped: true
})
export class GcdsPagination {
  @Element() el: HTMLElement;

  private lang: string;
  private listitems = [];

  /*
   * Props
   */

  /**
   * Navigation element label
   */
  @Prop() type: "list" | "simple" = "list";

  /**
   * Navigation element label
   */
  @Prop() label!: string;

  /**
   * Simple type - href for previous link
   */
  @Prop() previousHref: string;

  /**
   * Simple type - label for previous link
   */
  @Prop({ reflect: true }) previousLabel: string;

  /**
   * Simple type - href for next link
   */
  @Prop() nextHref: string;

  /**
   * Simple type - lable for next link
   */
  @Prop({ reflect: true }) nextLabel: string;

  /**
   * List type - Total number of pages
   */
  @Prop() totalPages: number;

  /**
   * List type - Current page number
   */
  @Prop({ reflect: true }) currentPage: number;

  @Watch('currentPage')
  watchCurrentPage(newValue) {
    this.currentStep = newValue;
  }

  /**
   * List type - URL object to create query strings and fragment on links
   */
   @Prop() url: PaginationUrl;

  /**
   * Function to fire when pageChange event is called
   */
  @Prop() pageChangeHandler: Function;

  @State() currentStep: number;

  /*
   * Events
   */

  /**
   * Update value based on user input.
   */
  @Event() gcdsPageChange: EventEmitter<void>;

  private onPageChange = (e) => {
    if (this.pageChangeHandler) {
      this.pageChangeHandler(e);
    }

    this.gcdsPageChange.emit();
  }

  /**
   * Function to constuct href attribute from url object
   * Also looks for ::offset and ::match to increment query string values
   */
  private constructHref(page: number, end?: "next" | "previous" | null) {
    var fragment = "";
    var qs = "";

    if (this.url) {
      var count = 0;
      for (const key in this.url.queryStrings) {
        var queryKey = key;
        var queryValue = this.url.queryStrings[key];

        if (key.includes("::")) {
          var incrementer = key.split("::")[1];
          var regExp = /\{\{([^)]+)\}\}/;
          var matches = regExp.exec(this.url.queryStrings[key]);

          // Offeset numbers
          if (incrementer == "offset") {
            var pageNumber = page;

            if (end == "next") {
              ++pageNumber;
            }
            else if (end == "previous") {
              --pageNumber;
            }

            queryValue = matches ?
              this.url.queryStrings[key].replace(`{{${matches[1]}}}`, `${((pageNumber-1) * Number(matches[1]))}`)
            :
              ((pageNumber-1) * this.url.queryStrings[key]);

            queryKey = queryKey.replace("::offset", "");
          }

          // Match page number
          if (incrementer == "match") {
            var pageNumber = page;

            if (end == "next") {
              ++pageNumber;
            }
            else if (end == "previous") {
              --pageNumber;
            }

            queryValue = matches ?
              this.url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber * Number(matches[1]))}`)
            :
              (pageNumber * this.url.queryStrings[key]);

            queryKey = queryKey.replace("::match", "");
          }
        }

        if (count == 0) {
          qs += `?${queryKey}=${queryValue}`
        } else {
          qs += `&${queryKey}=${queryValue}`
        }
        ++count;
      }

      if (this.url.fragment) {
        fragment = `#${this.url.fragment}`;
      }

    }

    var href = `${qs}${fragment}`;

    return href;
  }

  /**
   * Function to constuct <li> and <a> tags for type="list" pagination
   */
  private configurePaginationStep(page: number, end?: "next" | "previous") {

    var linkAttrs = {
      onClick: (e) => this.onPageChange(e),
      href: this.url ? this.constructHref(page, end) : "javascript:void(0)",
      ariaLabel: !end ?
        `Page ${page} of ${this.label}`
      :
        end == "next" ?
          `Next page: page ${page} of ${this.label}`
        :
          `Previous page: page ${page} of ${this.label}`,
    }

    if (page == this.currentPage && !end) {
      linkAttrs['aria-current'] = "page";
    }

    if (end == "next") {
      return(<li><a {...linkAttrs}>Next</a></li>);
    }
    else if (end == "previous") {
      return(<li><a {...linkAttrs}>Previous</a></li>);
    }
    else {
      return (<li><a {...linkAttrs}>{page}</a></li>);
    }

  }

  /**
   * Function to render the right steps for type="list" pagination
   */
  private configureListPagination() {
    this.listitems = [];

    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "previous"))
    }

    // Flags to see if ellipses already rendered
    var previousEllipses = false;
    var nextEllipses = false;

    for (var i = 1; i <= this.totalPages; i++) {

      // Current page
      if (i == this.currentPage) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Total pages less than 7
      else if (this.totalPages <= 7) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // First or last page
      else if (i == 1 || i == this.totalPages) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Previous and next page
      else if (i >= (this.currentPage-1) && i <= (this.currentPage+1)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Second page when within 4
      else if (this.currentPage <= 4 && i == 2) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Up to 5 when less than 4
      else if (this.currentPage < 4 && i <= 5) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Second last page when within 4
      else if (this.currentPage > this.totalPages - 4 && i == this.totalPages - 1) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Show last numbers within 5
      else if (this.currentPage > this.totalPages - 3 && i >= this.totalPages - 4) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Left ellipses
      else if (!previousEllipses && i < (this.currentPage-2)) {
        this.listitems.push(<li><span>...</span></li>);
        previousEllipses = true;
      }
      // Right ellipses
      else if (!nextEllipses && i > (this.currentPage+1) && i < this.totalPages - 1) {
        this.listitems.push(<li><span>...</span></li>);
        nextEllipses = true;
      }

      
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "next"))
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    if (this.type == "list") {
      this.configureListPagination();
    }
  }

  componentDidUpdate() {
    if (this.type == "list") {
      this.configureListPagination();
    }
  }

  render() {
    const { type, label, previousHref, previousLabel, nextHref, nextLabel } = this;

    return (
      <Host
        role="navigation"
        aria-label={label}
      >
        {type === "list" ?
          <ul>
            {this.listitems}
          </ul>
        :
          <ul>
            <li>
              <a
                href={previousHref}
              >
                Previous
                <span>
                  {previousLabel}
                </span>
              </a>
            </li>
            <li>
              <a
                href={nextHref}
              >
                Next
                <span>
                  {nextLabel}
                </span>
              </a>
            </li>
          </ul>
        }
      </Host>
    );
  }

}
