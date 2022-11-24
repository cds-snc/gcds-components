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
  private mobilePrevNext = [];

  /*
   * Props
   */

  /**
   * Navigation element label
   */
  @Prop() display: "list" | "simple" = "list";

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
   * Function to constuct classes to help with mobile sizing
   */
  private constructClasses(page: number, current: number, total: number) {
    if (total <= 6) {

    }
    else if (total < 10 && (current == 1 || current == total)) {
      switch(current - page) {
        case 4:
        case -4:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-360";
          }
          break;
        case 5:
        case -5:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-420";
          }
          break;
        case 6:
        case -6:
        case 7:
        case -7:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    else if (total < 10 && (current == 2 || current == (total-1))) {
      switch(current - page) {
        case 3:
        case -3:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-360";
          }
          break;
        case 4:
        case -4:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-420";
          }
          break;
        case 5:
        case -5:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    else if (total < 10 && (current > 2 && current < (total-1))) {
      switch(current - page) {
        case 2:
        case -2:
            if (page != 1 && page != total ){
              return "gcds-pagination-list-breakpoint-420";
            }
            break;
        case 3:
        case -3:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-460";
          }
          break;
        case 4:
        case -4:
        case 5:
        case -5:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    else if (current == 2 || current == (total-1)) {
      switch(current - page) {
        case 3:
        case -3:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-360";
          }
          break;
        case 4:
        case -4:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-420";
          }
          break;
        case 5:
        case -5:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    else if (current < 3 || current > (total-2)) {
      switch(current - page) {
        case 4:
        case -4:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-420";
          }
          break;
        case 5:
        case -5:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-460";
          }
          break;
        case 6:
        case -6:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    else {
      switch(current - page) {
        case 2:
        case -2:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-420";
          }
          break;
        case 3:
        case -3:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-460";
          }
          break;
        case 4:
        case -4:
          if (page != 1 && page != total ){
            return "gcds-pagination-list-breakpoint-488";
          }
          break;
      }
    }
    return "";
  }

  /**
   * Function to constuct <li> and <a> tags for display="list" pagination
   */
  private configurePaginationStep(page: number, end?: "next" | "previous" | null, mobile?: boolean) {

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
      return(<li><a  {...linkAttrs} class={!mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile"}>Next<gcds-icon class="gcds-pagination-arrow-right" name="arrow-right"></gcds-icon></a></li>);
    }
    else if (end == "previous") {
      return(<li><a  {...linkAttrs} class={!mobile ? "gcds-pagination-end-button" : "gcds-pagination-end-button-mobile"}><gcds-icon class="gcds-pagination-arrow-left" name="arrow-left"></gcds-icon>Previous</a></li>);
    }
    else {
      return (<li class={this.constructClasses(page, this.currentPage, this.totalPages)}><a {...linkAttrs}>{page}</a></li>);
    }

  }

  /**
   * Function to render the right steps for display="list" pagination
   */
  private configureListPagination() {
    this.listitems = [];
    this.mobilePrevNext = [];

    if (this.currentPage != 1) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "previous"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentStep, "previous", true));
    }

    // Flags to see if ellipses already rendered
    var previousEllipses = false;
    var nextEllipses = false;

    for (var i = 1; i <= this.totalPages; i++) {

      // Current page
      if (i == this.currentPage) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Total pages less than 10
      else if (this.totalPages < 10) {
        if (this.totalPages > 6 && this.currentPage > 3 && i == 2) {
          var breakpoint = "";
          switch(this.currentPage - i) {
            case 2:
              breakpoint = "420"
              break;
            case 3:
              breakpoint = "460"
              break;
            case 4:
            case 5:
            case 6:
            case 7:
              breakpoint = "488"
              break;
          }
          this.listitems.push(<li class={`gcds-pagination-list-mobile-ellipses-${breakpoint}`}><span class="gcds-pagination-list-ellipses">...</span></li>);
        }

        this.listitems.push(this.configurePaginationStep(i));

        if (this.totalPages > 6 && this.currentPage < (this.totalPages - 2) && i == this.totalPages - 1) {
          var breakpoint = "";
          switch(this.currentPage - i) {
            case -2:
              breakpoint = "420"
              break;
            case -3:
              breakpoint = "460"
              break;
            case -4:
            case -5:
            case -6:
            case -7:
              breakpoint = "488"
              break;
          }
          this.listitems.push(<li class={`gcds-pagination-list-mobile-ellipses-${breakpoint}`}><span class="gcds-pagination-list-ellipses">...</span></li>);
        }
      }
      // First or last page
      else if (i == 1 || i == this.totalPages) {
        this.listitems.push(this.configurePaginationStep(i));
      }

      // // Second page when within 4
      // else if (this.currentPage <= 4 && i == 2) {
      //   this.listitems.push(this.configurePaginationStep(i));
      // }
      // Up to 5 when less than 4
      else if (this.currentPage < 6 && i <= 7) {
        this.listitems.push(this.configurePaginationStep(i));
        if (i==2 && (this.currentPage == 4 || this.currentPage == 5)) {
          var breakpoint = "";
          switch(this.currentPage - i) {
            case 2:
              breakpoint = "420"
              break;
            case 3:
              breakpoint = "460"
              break;
            case 4:
              breakpoint = "488"
              break;
          }
          this.listitems.push(<li class={`gcds-pagination-list-mobile-ellipses-${breakpoint}`}><span class="gcds-pagination-list-ellipses">...</span></li>);
        }
      }
      // // Second last page when within 4
      // else if (this.currentPage > this.totalPages - 4 && i == this.totalPages - 1) {
      //   this.listitems.push(this.configurePaginationStep(i));
      // }
      // Show last numbers within 5
      else if (this.currentPage > this.totalPages - 5 && i >= this.totalPages - 6) {
        if (i == this.totalPages - 1 && (this.currentPage == this.totalPages - 3 || this.currentPage == this.totalPages - 4)) {
          var breakpoint = "";
          switch(this.currentPage - i) {
            case -2:
              breakpoint = "420"
              break;
            case -3:
              breakpoint = "460"
              break;
            case -4:
              breakpoint = "488"
              break;
          }
          this.listitems.push(<li class={`gcds-pagination-list-mobile-ellipses-${breakpoint}`}><span class="gcds-pagination-list-ellipses">...</span></li>);
        }
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Previous and next page
      else if (i >= (this.currentPage-2) && i <= (this.currentPage+2)) {
        this.listitems.push(this.configurePaginationStep(i));
      }
      // Left ellipses
      else if (!previousEllipses && i < (this.currentPage-2)) {
        this.listitems.push(<li><span class="gcds-pagination-list-ellipses">...</span></li>);
        previousEllipses = true;
      }
      // Right ellipses
      else if (!nextEllipses && i > (this.currentPage+1) && i < this.totalPages - 1) {
        this.listitems.push(<li><span class="gcds-pagination-list-ellipses">...</span></li>);
        nextEllipses = true;
      }

      
    }
    if (this.currentPage != this.totalPages) {
      this.listitems.push(this.configurePaginationStep(this.currentPage, "next"));
      this.mobilePrevNext.push(this.configurePaginationStep(this.currentStep, "next", true));
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    if (this.display == "list") {
      this.configureListPagination();
    }
  }

  componentDidUpdate() {
    if (this.display == "list") {
      this.configureListPagination();
    }
  }

  render() {
    const { display, label, previousHref, previousLabel, nextHref, nextLabel } = this;

    return (
      <Host
        role="navigation"
        aria-label={label}
      >
        {display === "list" ?
          <div>
            <ul
              class="gcds-pagination-list"
            >
              {this.listitems}
            </ul>
            <ul
              class="gcds-pagination-list-mobile-prevnext"
            >
              {this.mobilePrevNext}
            </ul>
          </div>
        :
          <ul
            class="gcds-pagination-simple"
          >
            <li>
              <a
                href={previousHref}
                aria-label={`Previous page: ${previousLabel}`}
                onClick={(e) => this.onPageChange(e)}
              >
                <gcds-icon class="gcds-pagination-arrow-left" name="arrow-left"></gcds-icon>
                <b>
                  Previous
                </b>
                <span>
                  {previousLabel}
                </span>
              </a>
            </li>
            <li>
              <a
                href={nextHref}
                aria-label={`Next page: ${nextLabel}`}
                onClick={(e) => this.onPageChange(e)}
              >
                <gcds-icon class="gcds-pagination-arrow-right" name="arrow-right"></gcds-icon>
                <b>
                  Next
                </b>
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
