import { h } from '@stencil/core';
import {
  type Table,
  type Column,
  type PaginationState
} from '@tanstack/table-core';

import I18N from '../i18n/i18n';

/** Table column definition
 * @interface TableColumn
 * @property {string} field - The key of the data object to display in this column.
 * @property {string} header - The text to display in the column header.
 * @property {'asc' | 'desc'} [sortDirection] - The current sort direction of the column on load.
 * @property {'start' | 'center' | 'end'} [align] - The alignment of the cell content.
 * @property {boolean} [sort] - Whether the column is sortable.
 * @property {(value: unknown, row: Record<string, unknown>) => any} [renderCell] - A function to customize cell rendering.
 * @property {boolean} [rowHeader] - Whether this column should be treated as a row header (for accessibility).
 */
interface TableColumn {
  field: string;
  header: string;
  sortDirection?: 'asc' | 'desc';
  align?: 'start' | 'center' | 'end';
  sort?: boolean;
  renderCell?: (value: unknown, row: Record<string, unknown>) => any;
  rowHeader?: boolean;
}

// ─── Render helpers ───────────────────────────────────────────────────────

/* Get appropriate sort icon based on column's sort state
 * @param column - the column to get the sort icon for
 * Returns an empty string if the column is not sortable, an up arrow if sorted ascending, a down arrow if sorted descending, and a generic sort icon if sortable but not currently sorted.
 */
const getSortIcon = (column: Column<Record<string, unknown>>): string => {
  if (!column?.getCanSort()) return '';
  const sorted = column.getIsSorted();
  if (sorted === 'asc') return ' ▲';
  if (sorted === 'desc') return ' ▼';
  return ' ⇅';
};

/* Get appropriate sort button title based on column's sort state
 * @param column - the column to get the sort title for
 * @param lang - the current language for internationalization
 * Returns a string indicating the current sort state and the action that will be taken if the button is pressed.
 */
const getSortTitle = (column, lang: string): string => {
  let sortText = '';
  if (column.getIsSorted() === 'asc') {
    sortText = I18N[lang].headingActivateDesc;
  } else if (column.getIsSorted() === 'desc') {
    sortText = I18N[lang].headingRemoveSort;
  } else if (column.getIsSorted() === false) {
    sortText = I18N[lang].headingActivateAsc;
  }

  return `${column.columnDef.header as string} ${sortText}`;
};

/* Get the current active sort badge based on the number of active sorting columns
 * @param count - the number of active sorting columns
 * @param lang - the current language for internationalization
 * Returns a badge element with the count of active sorting columns.
 */
const renderActiveBadge = (count: number, lang: string): HTMLSpanElement => {
  return (
    <span class="gcds-table__active-count" aria-label={`${I18N[lang].activeBadgeLabel.replace('{count}', count)}`}>
      {count}
    </span>
  );
};

/* Get the current table status text based on the pagination and filtering state
 * @param el - the table element containing the current filter and pagination state
 * @param table - the TanStack Table instance to get row counts from
 * @param paginationState - the current pagination state to determine page index and size
 * @param lang - the current language for internationalization
 * Returns a string describing the current table status, such as how many rows are being shown, how many total rows there are, and how many match the current filter.
 */
const renderTableStatus = (
  el: HTMLGcdsTableElement,
  table: Table<Record<string, unknown>>,
  paginationState: PaginationState | undefined,
  lang: string
): string => {
  const currentPageIndex = paginationState?.pageIndex;
  const totalRows = table.getPreFilteredRowModel().rows.length;
  const filteredRows = table.getFilteredRowModel().rows.length;
  const paginationSize = paginationState?.pageSize;

  // Filtered results with multiple pages
  if (el.filterValue && (el.pagination && table.getPageCount() > 1)) {
    return I18N[lang].showingMatchesPagination
      .replace('{start}', currentPageIndex * paginationSize + 1)
      .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
      .replace('{filtered}', filteredRows);

    // Filtered results on singular page
  } else if (el.filterValue && (el.pagination && table.getPageCount() === 1)) {
    return I18N[lang].showingMatches.replace('{matchNumber}', filteredRows);

    // Rows across multiple pages
  } else if (!el.filterValue && (el.pagination && table.getPageCount() > 1)) {
    return I18N[lang].showingPages
      .replace('{start}', currentPageIndex * paginationSize + 1)
      .replace('{end}', Math.min((currentPageIndex + 1) * paginationSize, totalRows))
      .replace('{total}', totalRows);

    // Rows on one page
  } else {
    return I18N[lang].showingAllRows.replace('{total}', totalRows);
  }
}

const renderSortRadios = (
  el: HTMLGcdsTableElement,
  table: Table<Record<string, unknown>>,
  lang: string
) => {
  const radioOptions = [];
  let isSorted = 'null';

  ((el.columns ?? []) as TableColumn[]).filter(col => col.sort !== false).map(col => {
    if (table?.getColumn(col.field)?.getIsSorted()) {
      isSorted = table?.getColumn(col.field)?.getIsSorted() === 'asc' ? `asc-${col.field}` : `desc-${col.field}`;
    }

    radioOptions.push({
      id: `asc-${col.field}`,
      label: `${col.header} (asc)`,
      value: `asc-${col.field}`,
    });

    radioOptions.push({
      id: `desc-${col.field}`,
      label: `${col.header} (desc)`,
      value: `desc-${col.field}`,
    });
  });

  radioOptions.push(
    {
      id: 'nosort',
      label: I18N[lang].radioLabelNoSort,
      value: 'null',
    }
  );

  return (
    <gcds-radios
      legend={I18N[lang].sort}
      hideLegend
      name="sort"
      autoFocus
      options={radioOptions}
      value={isSorted}
    />
  )
}

export {
  TableColumn,
  getSortIcon,
  getSortTitle,
  renderActiveBadge,
  renderTableStatus,
  renderSortRadios,
};
