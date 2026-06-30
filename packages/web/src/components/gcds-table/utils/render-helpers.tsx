import { h, Fragment } from '@stencil/core';
import {
  type Table,
  type Column,
  type PaginationState,
  type SortingState,
} from '@tanstack/table-core';

import { TableColumn, updateTableOptions } from './table-helpers';
import I18N from '../i18n/i18n';

// ─── Render helpers ───────────────────────────────────────────────────────

/* Get appropriate sort icon based on column's sort state
 * @param column - the column to get the sort icon for
 * Returns an empty string if the column is not sortable, an up arrow if sorted ascending, a down arrow if sorted descending, and a generic sort icon if sortable but not currently sorted.
 */
const getSortIcon = (
  column: Column<Record<string, unknown>>,
): 'arrow-up' | 'arrow-down' | 'arrow-up-down' | '' => {
  if (!column?.getCanSort()) return '';

  const sorted = column.getIsSorted();

  if (sorted === 'asc') return 'arrow-up';
  if (sorted === 'desc') return 'arrow-down';

  return 'arrow-up-down';
};

/* Get appropriate sort button title based on column's sort state
 * @param column - the column to get the sort title for
 * @param lang - the current language for internationalization
 * Returns a string indicating the current sort state and the action that will be taken if the button is pressed.
 */
const getSortTitle = (
  column: Column<Record<string, unknown>>,
  lang: string,
): string => {
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
    <span
      class="gcds-table__active-count"
      aria-label={`${I18N[lang].activeBadgeLabel.replace('{count}', count)}`}
    >
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
  lang: string,
): string => {
  const currentPageIndex = paginationState?.pageIndex ?? 0;
  const totalRows = table.getPreFilteredRowModel().rows.length;
  const filteredRows = table.getFilteredRowModel().rows.length;
  const paginationSize = paginationState?.pageSize ?? 0;

  // Filtered results with multiple pages
  if (
    el.filter &&
    el.filterValue &&
    el.pagination &&
    table.getPageCount() > 1
  ) {
    return I18N[lang].showingMatchesPagination
      .replace('{start}', currentPageIndex * paginationSize + 1)
      .replace(
        '{end}',
        Math.min((currentPageIndex + 1) * paginationSize, totalRows),
      )
      .replace('{filtered}', filteredRows);

    // Filtered results on singular page
  } else if (
    el.filter &&
    el.filterValue &&
    table.getPageCount() === 1
  ) {
    return I18N[lang].showingMatches.replace('{matchNumber}', filteredRows);

    // No results match filter
  } else if (el.filter && el.filterValue && filteredRows === 0) {
    return I18N[lang].showingNoMatches;

    // Rows across multiple pages
  } else if (!el.filterValue && el.pagination && table.getPageCount() > 1) {
    return I18N[lang].showingPages
      .replace('{start}', currentPageIndex * paginationSize + 1)
      .replace(
        '{end}',
        Math.min((currentPageIndex + 1) * paginationSize, totalRows),
      )
      .replace('{total}', totalRows);

    // No rows avalable
  } else if (table.getRowCount() === 0) {
    return I18N[lang].showingNoRows;
    // Rows on one page
  } else {
    return I18N[lang].showingAllRows.replace('{total}', totalRows);
  }
};

const renderSortRadios = (element: {
  initialSorting?: SortingState;
  sortRadios?: HTMLGcdsRadiosElement;
  el?: HTMLGcdsTableElement;
  table?: Table<Record<string, unknown>>;
  lang?: string;
}) => {
  const { el, table, lang } = element;
  const radioOptions = [
    {
      id: 'nosort',
      label: `${I18N[lang].radioLabelNoSort}${element.initialSorting?.length === 0 ? ` — ${I18N[lang].default}` : ''}`,
      value: 'null',
    },
  ];
  let isSorted = 'null';

  ((el?.columns ?? []) as TableColumn[])
    .filter(col => col.sort !== false)
    .map(col => {
      if (table?.getColumn(col.field)?.getIsSorted()) {
        isSorted =
          table?.getColumn(col.field)?.getIsSorted() === 'asc'
            ? `asc-${col.field}`
            : `desc-${col.field}`;
      }

      let ascDefaultLabel = '';
      let descDefaultLabel = '';

      if (element.initialSorting?.[0]?.id === col.field) {
        if (element.initialSorting[0].desc) {
          descDefaultLabel = ` — ${I18N[lang].default}`;
        } else {
          ascDefaultLabel = ` — ${I18N[lang].default}`;
        }
      }

      radioOptions.push({
        id: `asc-${col.field}`,
        label: `${col.header} (${I18N[lang].ascending})${ascDefaultLabel}`,
        value: `asc-${col.field}`,
      });

      radioOptions.push({
        id: `desc-${col.field}`,
        label: `${col.header} (${I18N[lang].descending})${descDefaultLabel}`,
        value: `desc-${col.field}`,
      });
    });

  return (
    <div class="gcds-table__modal-sort">
      <gcds-heading tag="h3" margin-top="0" margin-bottom="0">
        <div>
          <gcds-icon
            name="sort"
            size="h6"
            margin-right="100"
            aria-hidden="true"
          />
          {I18N[lang].sort}
        </div>
      </gcds-heading>
      <gcds-radios
        legend={I18N[lang].sort}
        hide-legend
        name="sort"
        autoFocus
        options={radioOptions}
        value={isSorted}
        ref={el => (element.sortRadios = el)}
      />
    </div>
  );
};

const getSortValue = (sort: SortingState) => {
  if (!sort?.length) return 'null';
  const { id, desc } = sort[0];
  return `${desc ? 'desc' : 'asc'}-${id}`;
};

const renderFilterSortModal = element => {
  const { filter, filterValue, lang } = element;
  let justOpened = false;
  return (
    <div class="gcds-table__filters">
      <gcds-button
        size="small"
        button-role="primary"
        onClick={() => {
          justOpened = true;
          element.filterSortModal.showModal();
        }}
      >
        <div>
          {element.filter && element.sortEnabled() ? (
            <gcds-icon name="tune" size="h5" margin-right="50" />
          ) : element.filter ? (
            <gcds-icon name="filter" size="h5" margin-right="50" />
          ) : (
            <gcds-icon name="sort" size="h5" margin-right="50" />
          )}

          {element.filter && element.sortEnabled()
            ? I18N[lang].filterAndSort
            : element.filter
              ? I18N[lang].filter
              : I18N[lang].sort}
          {/* Currently only shows one when filter is active, will need to be expanded when filter queries are expanded */}
          {filter && filterValue && (
            <Fragment>
              <gcds-sr-only tag="span">:</gcds-sr-only>
              <span
                class="gcds-table__active-count"
                aria-label={`${I18N[lang].activeBadgeLabel.replace('{count}', 1)}`}
              >
                1
              </span>
            </Fragment>
          )}
        </div>
      </gcds-button>

      <dialog
        class="gcds-table__modal"
        aria-modal="true"
        aria-labelledby="gcds-table__modal-heading"
        ref={el => (element.filterSortModal = el)}
      >
        <div class="gcds-table__modal-header">
          <gcds-heading
            tag="h2"
            id="gcds-table__modal-heading"
            marginTop="0"
            marginBottom="0"
          >
            {I18N[lang].filterAndSort}
          </gcds-heading>
          <gcds-button
            button-role="secondary"
            onClick={() => {
              element.filterSortModal.close();
              if (element.filter) {
                element.filterInput.value = element.initialFilter;
              }
              if (element.sortEnabled()) {
                element.sortRadios.value = getSortValue(element.initialSorting);
              }
            }}
          >
            {I18N[lang].modalClose}
          </gcds-button>
        </div>

        <form
          class="gcds-table__modal-body"
          onKeyUp={ev => {
            if (ev.key === 'Enter') {
              if (justOpened) {
                justOpened = false;
                return;
              }

              if (document.activeElement?.shadowRoot?.activeElement === element.filterInput ||
                document.activeElement?.shadowRoot?.activeElement === element.sortRadios
              ) {
                ev.preventDefault();
                element.filterSortModal.querySelector('form')?.dispatchEvent(
                  new Event('submit', { cancelable: true, bubbles: true }),
                );
              }
            }
          }}
          onSubmit={ev => {
            ev.preventDefault();

            if (element.filter) {
              element.filterValue = element.filterInput.value;
            }

            if (element.sortEnabled()) {
              const sortValue = element.sortRadios.value;
              if (sortValue === 'null') {
                element.sorting = [];
              } else {
                const [direction, field] = sortValue.split('-');
                element.sorting = [
                  {
                    id: field,
                    desc: direction === 'desc',
                  },
                ];
              }
            }

            updateTableOptions(element);

            element.filterSortModal.close();
            element.shadowElement?.focus();
          }}
        >
          <div class="gcds-table__modal-content">
            {element.filter && (
              <gcds-input
                class="gcds-table__modal-filter"
                type="search"
                label={I18N[lang].filter}
                name="filter"
                inputId="gcds-table-filter"
                autoFocus
                value={filterValue}
                ref={el => (element.filterInput = el)}
              />
            )}

            {element.sortEnabled() && renderSortRadios(element)}
          </div>

          <div class="gcds-table__modal-footer">
            <gcds-button
              button-role="secondary"
              onClick={() => {
                if (element.filter) {
                  element.filterInput.value = element.initialFilter;
                }
                if (element.sortEnabled()) {
                  element.sortRadios.value = getSortValue(
                    element.initialSorting,
                  );
                }
              }}
            >
              {I18N[lang].modalResetAllButton}
            </gcds-button>
            <gcds-button button-role="primary" type="submit">
              {I18N[lang].modalApplyButton}
            </gcds-button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

const renderFilterPills = (
  filterValue: string,
  lang: string,
  onRemove: () => void,
) => {
  if (!filterValue) return null;

  return (
    <div class="gcds-table__active-filter">
      <button
        class="gcds-table__pill"
        onClick={onRemove}
        title={I18N[lang].pillRemoveFilter}
      >
        <gcds-sr-only tag="span">{I18N[lang].pillFilter}</gcds-sr-only>
        {filterValue}
        <gcds-icon name="close" size="text-small"></gcds-icon>
      </button>
    </div>
  );
};

const renderSortPills = (
  sorting: SortingState,
  table: Table<Record<string, unknown>>,
  lang: string,
  onRemove: (columnId: string) => void,
) => {
  if (sorting?.length === 0) return null;

  return (
    <div class="gcds-table__active-sorting">
      <span class="gcds-table__sort-label">{I18N[lang].pillSort}</span>
      {sorting?.map(sort => {
        const column = table.getColumn(sort.id);
        if (!column) return null;

        return (
          <button
            class="gcds-table__pill"
            onClick={() => onRemove(column.id)}
            title={I18N[lang].pillRemoveSort}
          >
            {/* We want to put an icon beside the column header name */}
            {`${column.columnDef.header as string} (${sort.desc ? I18N[lang].descending : I18N[lang].ascending})`}
            <gcds-icon name="close" size="text-small"></gcds-icon>
          </button>
        );
      })}
    </div>
  );
};

export {
  getSortIcon,
  getSortTitle,
  renderActiveBadge,
  renderTableStatus,
  renderSortRadios,
  renderFilterSortModal,
  renderFilterPills,
  renderSortPills,
};
