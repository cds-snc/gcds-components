import { h, Fragment } from '@stencil/core';
import {
  type Table,
  type Column,
  type PaginationState,
  type SortingState,
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
const getSortTitle = (column: Column<Record<string, unknown>>, lang: string): string => {
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

const renderSortRadios = element => {
  const { el, table, lang } = element;
  const radioOptions = [{
    id: 'nosort',
    label: I18N[lang].radioLabelNoSort,
    value: 'null',
  }];
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

  return (
    <gcds-radios
      legend={I18N[lang].sort}
      hideLegend
      name="sort"
      autoFocus
      options={radioOptions}
      value={isSorted}
      ref={el => element.sortRadios = el}
    />
  )
}

const getSortValue = (sort: SortingState) => {
  if (!sort?.length) return 'null';
  const { id, desc } = sort[0];
  return `${desc ? 'desc' : 'asc'}-${id}`;
}

const renderFilterSortModal = element => {
  const { filterValue, lang } = element;
  return (
    <div>
      <gcds-button
        size="small"
        buttonRole='primary'
        onClick={() => element.filterSortModal.showModal()}
      >
        {I18N[lang].filterAndSort}

        {/* Currently only shows one when filter is active, will need to be expanded when filter queries are expanded */}
        {(filterValue) && (
          <Fragment>
            <gcds-sr-only tag='span'>
              :
            </gcds-sr-only>
            <span class="gcds-table__active-count" aria-label={`${I18N[lang].activeBadgeLabel.replace('{count}', 1)}`}>
              1
            </span>
          </Fragment>
        )
        }
      </gcds-button>

      <dialog
        class="gcds-table__modal"
        aria-modal="true"
        aria-labelledby="gcds-table__modal-heading"
        ref={el => (element.filterSortModal = el)}
      >
        <div>
          <gcds-heading
            tag="h1"
            id="gcds-table__modal-heading"
            marginTop='0'
          >
            {I18N[lang].filterAndSort}
          </gcds-heading>
        </div>

        <gcds-button
          size="small"
          button-role="secondary"
          onClick={() => {
            element.filterSortModal.close();
            element.filterInput.value = element.filterValue;
            element.sortRadios.value = getSortValue(element.sorting);
          }}
        >
          {I18N[lang].modalClose}
        </gcds-button>

        <form
          class="gcds-table__modal-body"
          onSubmit={ev => {
            ev.preventDefault();

            element.filterValue = element.filterInput.value;

            const sortValue = element.sortRadios.value;
            if (sortValue === 'null') {
              element.sorting = [];
            } else {
              const [direction, field] = sortValue.split('-');
              element.sorting = [{
                id: field,
                desc: direction === 'desc',
              }];
            }

            element.updateTableOptions();

            element.filterSortModal.close();
          }}
        >

          {element.filter && (
            <Fragment>
              <gcds-input
                type="search"
                label={I18N[lang].filterLabel}
                name="filter"
                inputId="gcds-table-filter"
                autoFocus
                value={filterValue}
                ref={el => (element.filterInput = el)}
              />

              <hr />
            </Fragment>
          )}

          {element.sortEnabled() && renderSortRadios(element)}

          <div class="gcds-table__modal-footer">
            <gcds-button
              button-role="secondary"
              onClick={() => {
                element.filterInput.value = element.initialFilter;
                element.sortRadios.value = getSortValue(element.initialSorting);
              }}
            >
              {I18N[lang].modalResetAllButton}
            </gcds-button>
            <gcds-button
              button-role="primary"
              type="submit"
            >
              {I18N[lang].modalApplyButton}
            </gcds-button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export {
  TableColumn,
  getSortIcon,
  getSortTitle,
  renderActiveBadge,
  renderTableStatus,
  renderSortRadios,
  renderFilterSortModal,
};
