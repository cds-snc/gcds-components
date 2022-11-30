/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(el, page: number, end?: "next" | "previous" | null) {
  let fragment = "";
  let qs = "";

  if (el.url) {
    let count = 0;
    for (const key in el.url.queryStrings) {
      let queryKey = key;
      let queryValue = el.url.queryStrings[key];

      if (key.includes("::")) {
        let incrementer = key.split("::")[1];
        let regExp = /\{\{([^)]+)\}\}/;
        let matches = regExp.exec(el.url.queryStrings[key]);

        // Offeset numbers
        if (incrementer == "offset") {
          let pageNumber = page;

          if (end == "next") {
            ++pageNumber;
          }
          else if (end == "previous") {
            --pageNumber;
          }

          queryValue = matches ?
            el.url.queryStrings[key].replace(`{{${matches[1]}}}`, `${((pageNumber-1) * Number(matches[1]))}`)
          :
            ((pageNumber-1) * el.url.queryStrings[key]);

          queryKey = queryKey.replace("::offset", "");
        }

        // Match page number
        if (incrementer == "match") {
          let pageNumber = page;

          if (end == "next") {
            ++pageNumber;
          }
          else if (end == "previous") {
            --pageNumber;
          }

          queryValue = matches ?
            el.url.queryStrings[key].replace(`{{${matches[1]}}}`, `${(pageNumber * Number(matches[1]))}`)
          :
            (pageNumber * el.url.queryStrings[key]);

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

    if (el.url.fragment) {
      fragment = `#${el.url.fragment}`;
    }

  }

  let href = `${qs}${fragment}`;

  return href;
}

/**
 * Function to constuct classes to help with mobile sizing
 */
function constructClasses(page: number, current: number, total: number) {
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
      case 6:
      case -6:
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

export {
  constructClasses,
  constructHref
};