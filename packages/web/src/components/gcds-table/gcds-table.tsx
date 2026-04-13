import {
  Component,
  Host,
  Prop,
  State,
  Watch,
  h,
  Element,
  Fragment,
} from '@stencil/core';

import {
  createTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  type Table,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type PaginationState,
  type TableOptionsResolved,
} from '@tanstack/table-core';

import { assignLanguage } from '../../utils/utils';
import I18N from './i18n/i18n';

import {
  TableColumn,
  getSortIcon,
  getSortTitle,
  renderTableStatus,
  renderFilterSortModal,
} from './utils/utils';

@Component({
  tag: 'gcds-table',
  styleUrl: 'gcds-table.css',
  shadow: true,
})
export class GcdsTable {
  @Element() el: HTMLGcdsTableElement;
  private shadowElement: HTMLTableElement | undefined;

  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private sortRadios: HTMLGcdsRadiosElement;
  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private filterInput: HTMLGcdsInputElement;
  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private filterSortModal: HTMLDialogElement;

  // ─── Props ────────────────────────────────────────────────────────────────

  /** Table caption */
  @Prop() caption: string;

  /** Column definitions */
  @Prop({ mutable: true }) columns: string | TableColumn[] = [];

  /** Row data */
  @Prop({ mutable: true }) data: string | object[] = [];

  /** Enable global column sorting (can be overridden per column) */
  @Prop() sort: boolean = false;

  /** Enable pagination */
  @Prop() pagination: boolean = false;

  /** Current page index */
  @Prop({ mutable: true }) paginationCurrentPage: number = 1;

  /** Number of rows per page */
  @Prop({ mutable: true }) paginationSize: number = 10;

  /**
   * Available page-size options.
   * Use 0 to represent "All rows".
   */
  @Prop({ mutable: true }) paginationSizeOptions: string | number[] = [10, 25, 50, 0];

  /** Enable global filter */
  @Prop() filter: boolean = false;

  /** Current filter string */
  @Prop({ mutable: true }) filterValue: string = '';

  // ─── Internal state ───────────────────────────────────────────────────────

  @State() private sorting: SortingState = [];
  @State() private columnFilters: ColumnFiltersState = [];
  @State() private globalFilter: string = this.filterValue;
  @State() private paginationState: PaginationState = {
    pageIndex: Math.max(0, this.paginationCurrentPage - 1),
    pageSize: this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize,
  };
  @State() lang: string;

  // TanStack table instance (not reactive – mutations trigger re-renders via @State)
  private table: Table<Record<string, unknown>> | null = null;

  // Store initial values to determine if they have been changed by the user
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialFilter = this.filterValue;
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialSorting: SortingState = [];

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    // Validate if information is being passed as JSON strings and parse it
    this.onColumnsChange(this.columns);
    this.onDataChange(this.data);

    // Seed initial sort from sortDirection column definitions
    this.sorting = this.buildInitialSorting();
    this.initialSorting = this.sorting;

    this.initTable();
  }

  // ─── Watchers ─────────────────────────────────────────────────────────────

  @Watch('columns')
  onColumnsChange(newVal: string | TableColumn[]) {
    if (typeof newVal === 'string') {
      try {
        this.columns = JSON.parse(newVal);
      } catch (e) {
        console.error('[gcds-table] Invalid JSON in column-data:', e);
      }
    }
    this.updateTableOptions();
  }

  @Watch('data')
  onDataChange(newVal: string | object[]) {
    if (typeof newVal === 'string') {
      try {
        this.data = JSON.parse(newVal);
      } catch (e) {
        console.error('[gcds-table] Invalid JSON in column-data:', e);
      }
    }
    this.updateTableOptions();
  }

  @Watch('sort')
  onsortChange() {
    this.onDataChange(this.data);
  }

  @Watch('pagination')
  onPaginationChange() {
    this.onDataChange(this.data);
  }

  @Watch('paginationCurrentPage')
  onPageChange(newPage: number) {
    this.paginationState = {
      ...this.paginationState,
      pageIndex: Math.max(0, newPage - 1),
    };
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, pagination: this.paginationState },
    }));
  }

  @Watch('paginationSize')
  onPageSizeChange(newSize: number) {
    this.paginationState = {
      pageIndex: this.paginationState.pageIndex + 1 > Math.ceil(this.table?.getPreFilteredRowModel().rows.length / newSize) ? 0
        : this.paginationState.pageIndex,
      pageSize: newSize === 0 ? Number.MAX_SAFE_INTEGER : newSize,
    };
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, pagination: this.paginationState },
    }));
  }

  @Watch('filterValue')
  onFilterValueChange(newVal: string) {
    this.globalFilter = newVal;
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, globalFilter: this.globalFilter },
    }));
  }

  @Watch('lang')
  onLangChange(newVal: string) {
    this.lang = newVal;
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildInitialSorting(): SortingState {
    return ((this.columns ?? []) as TableColumn[])
      .filter(col => col.sortDirection)
      .map(col => ({
        id: col.field,
        desc: col.sortDirection === 'desc',
      }));
  }

  private buildColumnDefs(): ColumnDef<Record<string, unknown>>[] {
    return ((this.columns ?? []) as TableColumn[]).map(col => ({
      id: col.field,
      accessorKey: col.field,
      header: col.header,
      // Per-column sort: falls back to global `sort` prop
      enableSorting: col.sort !== undefined ? col.sort : this.sort,
    }));
  }

  private sortEnabled(): boolean {
    return this.sort || ((this.columns ?? []) as TableColumn[]).some(col => col.sort);
  }

  private updateTableOptions() {
    if (this.table) {
      this.table.setOptions(prev => ({
        ...prev,
        ...this.buildTableOptions(),
      }));
      // Force re-render by touching a @State property
      this.sorting = [...this.sorting];
    }
  }

  private buildTableOptions(): TableOptionsResolved<Record<string, unknown>> {
    return {
      data: (this.data ?? []) as Record<string, unknown>[],
      columns: this.buildColumnDefs(),
      state: {
        sorting: this.sorting,
        columnFilters: this.columnFilters,
        globalFilter: this.globalFilter,
        pagination: this.paginationState,
        columnPinning: {},
      },
      // Required by TableOptionsResolved – framework adapters normally inject these
      onStateChange: () => { },
      renderFallbackValue: null,
      // Sorting
      enableSorting: this.sortEnabled(),
      sortDescFirst: false,
      manualSorting: false,
      onSortingChange: updater => {
        this.sorting =
          typeof updater === 'function' ? updater(this.sorting) : updater;
        this.table?.setOptions(prev => ({
          ...prev,
          state: { ...prev.state, sorting: this.sorting },
        }));
      },
      // Filtering
      enableFilters: this.filter,
      onGlobalFilterChange: updater => {
        this.globalFilter =
          typeof updater === 'function'
            ? updater(this.globalFilter)
            : updater;
        this.table?.setOptions(prev => ({
          ...prev,
          state: { ...prev.state, globalFilter: this.globalFilter },
        }));
      },
      // Pagination
      manualPagination: false,
      onPaginationChange: updater => {
        this.paginationState =
          typeof updater === 'function'
            ? updater(this.paginationState)
            : updater;
        this.paginationCurrentPage = this.paginationState.pageIndex + 1;
        this.table?.setOptions(prev => ({
          ...prev,
          state: { ...prev.state, pagination: this.paginationState },
        }));
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: this.pagination
        ? getPaginationRowModel()
        : undefined,
      getFilteredRowModel: this.filter ? getFilteredRowModel() : undefined,
      // Keep pagination active even when disabled so state is consistent
      autoResetPageIndex: true,
    };
  }

  private initTable() {
    this.table = createTable(this.buildTableOptions());
  }

  // ─── Event handlers ───────────────────────────────────────────────────────

  /*
    * Handle sort toggling by updating table state
   */
  private handleSortToggle(columnId: string) {
    const col = this.table?.getColumn(columnId);
    if (!col?.getCanSort()) return;
    col.toggleSorting();
  }

  /*
    * Handle page size selection by updating table state and focusing the table
   */
  private handlePageSizeSelect(e: Event) {
    const select = e.target as HTMLSelectElement;
    const val = Number(select.value);
    this.paginationSize = val;
  }

  /*
    * Handle pagination control clicks by updating table state and focusing the table
    */
  private handlePaginationClick(e: CustomEvent) {
    this.table?.setPageIndex(e.detail.page - 1);
    this.paginationCurrentPage = e.detail.page;

    // focus table here to ensure keyboard users can navigate from pagination controls to table rows
    this.shadowElement?.focus();
    this.shadowElement?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  render() {
    if (!this.table) return null;

    const headerGroups = this.table.getHeaderGroups();
    const rows = this.pagination
      ? this.table.getPaginationRowModel().rows
      : this.table.getRowModel().rows;

    return (
      <Host>
        <section class="gcds-table">

          {/* Filter and sort controls */}
          {(this.filter || this.sortEnabled()) && renderFilterSortModal(this)}

          <hr />

          {/* Active chips section */}
          <div class="gcds-table__active-chips">
            <div class="gcds-table__active-filter">
              {this.filterValue && (
                <Fragment>
                  <span>{I18N[this.lang].pillFilter}</span>
                  <button
                    onClick={() => {
                      this.filterValue = '';
                      this.updateTableOptions();
                    }}
                    title={I18N[this.lang].pillRemoveFilter}
                  >
                    {this.filterValue}
                    <gcds-icon name="close" size="text"></gcds-icon>
                  </button>
                </Fragment>
              )}
            </div>

            <div class="gcds-table__active-sorting">
              {this.sorting.map(sort => {
                const col = this.table?.getColumn(sort.id);
                if (!col) return null;
                const colDef = ((this.columns ?? []) as TableColumn[]).find(c => c.field === sort.id);
                const header = colDef?.header || sort.id;
                const direction = sort.desc ? 'desc' : 'asc';
                return (
                  <Fragment>
                    <span>{I18N[this.lang].pillSort}</span>
                    <button
                      onClick={() => {
                        this.sorting = this.sorting.filter(s => s.id !== sort.id);
                        this.updateTableOptions();
                      }}
                      title={I18N[this.lang].pillRemoveSort}
                    >
                      {header} ({<abbr title={I18N[this.lang][`${direction}ending`]}>{I18N[this.lang][direction]}</abbr>})
                      <gcds-icon name="close" size="text"></gcds-icon>
                    </button>
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* Pagination size selector */}
          {this.pagination && (
            <div class="gcds-table__page-size">
              <gcds-select
                label={I18N[this.lang].rowsPerPage}
                name="page-size"
                selectId="gcds-table-page-size"
                value={this.paginationSize.toString()}
                onChange={e => this.handlePageSizeSelect(e)}
              >
                {(this.paginationSizeOptions as number[]).map(opt => (
                  <option key={opt} value={opt}>
                    {opt === 0 ? 'All' : opt}
                  </option>
                ))}
              </gcds-select>
            </div>
          )}

          {/* Table status */}
          <span class="gcds-table__page-info" role="status" aria-live="polite">
            {renderTableStatus(this.el, this.table, this.paginationState, this.lang)}
          </span>

          {/* ── Table ──────────────────────────────── */}
          <table class="gcds-table__table" tabindex="-1" ref={el => { if (el) this.shadowElement = el; }}>
            {/* Caption slot has higher priority than caption prop */}
            {this.el.querySelector('[slot="caption"]') || this.caption ? (
              <caption>
                <slot name="caption">
                  {this.caption}
                </slot>
              </caption>
            ) : null}
            <thead>
              {headerGroups.map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => {
                    const colDef = ((this.columns ?? []) as TableColumn[]).find(
                      c => c.field === header.id,
                    );
                    const canSort = header.column.getCanSort();
                    const alignClass = colDef?.align
                      ? `align-${colDef.align}`
                      : '';

                    return (
                      <th
                        key={header.id}
                        class={`gcds-table__th ${alignClass}`}
                        scope="col"
                        aria-sort={
                          header.column.getIsSorted() === 'asc'
                            ? 'ascending'
                            : header.column.getIsSorted() === 'desc'
                              ? 'descending'
                              : canSort
                                ? 'none'
                                : undefined
                        }
                      >
                        {canSort ?
                          <button
                            onClick={() => this.handleSortToggle(header.id)}
                            title={getSortTitle(header.column, this.lang)}
                          >
                            {colDef?.header}
                            {/* Replace icons with something better */}
                            <span
                              class="gcds-table__sort-icon"
                              aria-hidden="true"
                            >
                              {getSortIcon(header.column)}
                            </span>
                          </button>
                          :
                          colDef?.header
                        }
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    class="gcds-table__empty"
                    colSpan={(this.columns ?? []).length}
                  >
                    {I18N[this.lang].noData}
                  </td>
                </tr>
              ) : (
                rows.map(row => (
                  <tr key={row.id} class="gcds-table__row">
                    {row.getVisibleCells().map(cell => {
                      const colDef = ((this.columns ?? []) as TableColumn[]).find(c => c.field === cell.column.id);

                      let cellContent: any;
                      let Tag = 'td';
                      let scope = {};

                      // Check if table header in row
                      if (colDef?.rowHeader) {
                        Tag = 'th';
                        scope = {
                          scope: 'row',
                        }
                      }

                      if (colDef?.renderCell) {
                        const rendered = colDef.renderCell(cell.getValue(), row.original);

                        if (rendered instanceof HTMLElement) {
                          cellContent = (
                            <span
                              ref={el => {
                                if (el) {
                                  el.innerHTML = '';
                                  el.appendChild(rendered);
                                }
                              }}
                            />
                          );
                        } else if (rendered !== null && rendered !== undefined) {
                          cellContent = rendered;
                        }
                      } else {
                        cellContent = cell.getValue() as any;
                      }

                      return (
                        <Tag
                          key={cell.id}
                          class={`gcds-table__td${colDef?.align ? ` align-${colDef.align}` : ''}`}
                          data-column={colDef?.header}
                          {...scope}
                        >
                          {cellContent}
                        </Tag>
                      )
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ── Pagination ─────────────────────────── */}
          {this.pagination && (
            <gcds-pagination
              display="list"
              totalPages={this.table.getPageCount()}
              currentPage={this.paginationState.pageIndex + 1}
              label={I18N[this.lang].paginationLabel}
              onGcdsClick={(e) => this.handlePaginationClick(e)}
            />
          )}
        </section>
      </Host >
    );
  }
}