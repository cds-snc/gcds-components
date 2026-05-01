/**
 * Function to construct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
function constructHref(url, page: number, end?: 'next' | 'previous' | null) {
  let fragment = '';
  let qs = '';

  let count = 0;

  for (const key in url.queryStrings) {
    let queryKey = key;
    let queryValue = url.queryStrings[key];

    if (key.includes('::')) {
      const incrementer = key.split('::')[1];
      const regExp = /\{\{([^)]+)\}\}/;
      const matches = regExp.exec(url.queryStrings[key]);

      // Offeset numbers
      if (incrementer == 'offset') {
        let pageNumber = page;

        if (end == 'next') {
          ++pageNumber;
        } else if (end == 'previous') {
          --pageNumber;
        }

        queryValue = matches
          ? url.queryStrings[key].replace(
              `{{${matches[1]}}}`,
              `${(pageNumber - 1) * Number(matches[1])}`,
            )
          : (pageNumber - 1) * url.queryStrings[key];

        queryKey = queryKey.replace('::offset', '');
      }

      // Match page number
      if (incrementer == 'match') {
        let pageNumber = page;

        if (end == 'next') {
          ++pageNumber;
        } else if (end == 'previous') {
          --pageNumber;
        }

        queryValue = matches
          ? url.queryStrings[key].replace(
              `{{${matches[1]}}}`,
              `${pageNumber * Number(matches[1])}`,
            )
          : pageNumber * url.queryStrings[key];

        queryKey = queryKey.replace('::match', '');
      }
    }

    if (count == 0) {
      qs += `?${queryKey}=${queryValue}`;
    } else {
      qs += `&${queryKey}=${queryValue}`;
    }
    ++count;
  }

  if (url.fragment) {
    fragment = `#${url.fragment}`;
  }

  const href = `${qs}${fragment}`;

  return href;
}

function constructClasses(
  page: number,
  current: number,
  total: number,
): string {
  /**
   * Pages that should always remain visible in the pagination:
   * - First page.
   * - Last page.
   * - Current page.
   * - Immediate neighbors of the current page.
   */
  const alwaysVisibleSet = new Set([
    1,
    total,
    current,
    current - 1,
    current + 1,
  ]);

  const alwaysVisible =
    page === 1 ||
    page === total ||
    page === current ||
    page === current - 1 ||
    page === current + 1;

  /**
   * Pages that should always remain visible in the pagination:
   * - First page.
   * - Last page.
   * - Current page.
   * - Immediate neighbors of the current page.
   */
  if (alwaysVisible) return '';

  const prevVisible = alwaysVisibleSet.has(page - 1);
  const nextVisible = alwaysVisibleSet.has(page + 1);

  /**
   * If both neighbors are visible, this page sits between visible pages,
   * and can't be collapsed.
   */
  if (prevVisible && nextVisible) {
    return '';
  }

  /**
   * Determine which side of the current page this page is on.
   * Used for directional collapsing (left vs right).
   */
  const side = page < current ? 'left' : 'right';

  /**
   * Calculate how far this page is from the current page.
   * Determines how aggressively it should be collapsed.
   */
  const distance = Math.abs(page - current);

  /**
   * Group pages into collapse levels:
   * - Group 1: closest hidden pages.
   * - Group 2: further away.
   * - Group 3: farthest away.
   */
  const group = Math.ceil((distance - 1) / 2);

  return `collapse-${side}-${group}`;
}

export { constructClasses, constructHref };
