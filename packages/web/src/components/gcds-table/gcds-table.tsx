import {
  Component,
  Host,
  Prop,
  State,
  Watch,
  h,
  Element,
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

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  activeSorting?: 'asc' | 'desc';
  align?: 'start' | 'center' | 'end';
}

@Component({
  tag: 'gcds-table',
  styleUrl: 'gcds-table.css',
  shadow: true,
})
export class GcdsTable {
  @Element() el: HTMLElement;
  private shadowElement: HTMLTableElement;

  // ─── Props ────────────────────────────────────────────────────────────────

  /** Table caption */
  @Prop() caption: string;

  /** Column definitions */
  @Prop() columns: TableColumn[] = [];

  /** Row data */
  @Prop() data: Record<string, unknown>[] = [];

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
  @Prop() paginationSizeOptions: number[] = [10, 25, 50, 0];

  /** Enable global search / filter */
  @Prop() search: boolean = false;

  /** Current search string */
  @Prop({ mutable: true }) searchValue: string = '';

  // ─── Internal state ───────────────────────────────────────────────────────

  @State() private sorting: SortingState = [];
  @State() private columnFilters: ColumnFiltersState = [];
  @State() private globalFilter: string = '';
  @State() private paginationState: PaginationState = {
    pageIndex: 0,
    pageSize: 10,
  };

  // TanStack table instance (not reactive – mutations trigger re-renders via @State)
  private table: Table<Record<string, unknown>> | null = null;

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  componentWillLoad() {
    this.paginationState = {
      pageIndex: Math.max(0, this.paginationCurrentPage - 1),
      pageSize: this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize,
    };

    // Seed initial sort from activeSorting column definitions
    this.sorting = this.buildInitialSorting();

    this.initTable();
  }

  // ─── Watchers ─────────────────────────────────────────────────────────────

  @Watch('columns')
  @Watch('data')
  onDataChange() {
    if (this.table) {
      this.table.setOptions(prev => ({
        ...prev,
        ...this.buildTableOptions(),
      }));
      // Force re-render by touching a @State property
      this.sorting = [...this.sorting];
    }
  }

  @Watch('sort')
  onSortableChange() {
    this.onDataChange();
  }

  @Watch('pagination')
  onPaginationChange() {
    this.onDataChange();
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

  @Watch('searchValue')
  onSearchValueChange(newVal: string) {
    this.globalFilter = newVal;
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, globalFilter: this.globalFilter },
    }));
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildInitialSorting(): SortingState {
    return (this.columns ?? [])
      .filter(col => col.activeSorting)
      .map(col => ({
        id: col.field,
        desc: col.activeSorting === 'desc',
      }));
  }

  private buildColumnDefs(): ColumnDef<Record<string, unknown>>[] {
    return (this.columns ?? []).map(col => ({
      id: col.field,
      accessorKey: col.field,
      header: col.header,
      // Per-column sortable: falls back to global `sortable` prop
      enableSorting: col.sortable !== undefined ? col.sortable : this.sort,
    }));
  }

  private sortEnabled(): boolean {
    return this.sort || (this.columns ?? []).some(col => col.sortable);
  }

  private buildTableOptions(): TableOptionsResolved<Record<string, unknown>> {
    return {
      data: this.data ?? [],
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
      enableFilters: this.search,
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
      getFilteredRowModel: this.search ? getFilteredRowModel() : undefined,
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
    * Handle search input by updating table state
   */
  private handleSearchInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.searchValue = input.value;
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
  private handlePaginationClick(e) {
    this.table?.setPageIndex(e.detail.page - 1);
    this.paginationCurrentPage = e.detail.page;

    // focus table here to ensure keyboard users can navigate from pagination controls to table rows
    this.shadowElement.focus();
  }

  // ─── Render helpers ───────────────────────────────────────────────────────

  private getSortIcon(columnId: string): string {
    const col = this.table?.getColumn(columnId);
    if (!col?.getCanSort()) return '';
    const sorted = col.getIsSorted();
    if (sorted === 'asc') return ' ▲';
    if (sorted === 'desc') return ' ▼';
    return ' ⇅';
  }

  private getAlignClass(field: string): string {
    const colDef = (this.columns ?? []).find(c => c.field === field);
    if (!colDef?.align) return '';
    return `align-${colDef.align}`;
  }

  private getSortTitle(column) {
    let sortText = '';
    if (column.getIsSorted() === 'asc') {
      sortText = 'activate for descending sort';
    } else if (column.getIsSorted() === 'desc') {
      sortText = 'activate to remove sorting';
    } else if (column.getIsSorted() === false) {
      sortText = 'activate for ascending sort';
    }

    return `${column.columnDef.header as string}: ${sortText}`;
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  render() {
    if (!this.table) return null;

    const totalRows = this.table.getPreFilteredRowModel().rows.length;

    const headerGroups = this.table.getHeaderGroups();
    const rows = this.pagination
      ? this.table.getPaginationRowModel().rows
      : this.table.getRowModel().rows;
    const currentPageIndex = this.paginationState.pageIndex;

    return (
      <Host>
        <section class="gcds-table">
          {/* ── Search bar ─────────────────────────── */}
          {this.search && (
            <div class="gcds-table__toolbar">
              <gcds-input
                type="search"
                label="Search table"
                name="search"
                inputId="gcds-table-search"
                value={this.searchValue}
                onInput={e => this.handleSearchInput(e)}
              />
            </div>
          )}

          {this.pagination && (
            <div class="gcds-table__page-size">
              <gcds-select
                label="Rows per page"
                name="page-size"
                selectId="gcds-table-page-size"
                value={this.paginationSize.toString()}
                onChange={e => this.handlePageSizeSelect(e)}
              >
                {(this.paginationSizeOptions ?? [10, 25, 50, 0]).map(opt => (
                  <option key={opt} value={opt}>
                    {opt === 0 ? 'All' : opt}
                  </option>
                ))}
              </gcds-select>

              {/* Page info */}
              <span class="gcds-table__page-info" role="status" aria-live="polite">
                Showing {currentPageIndex * this.paginationSize + 1} to {Math.min((currentPageIndex + 1) * this.paginationSize, totalRows)} of {totalRows} entries
              </span>
            </div>
          )}

          {/* ── Table ──────────────────────────────── */}
          <table class="gcds-table__table" tabindex="-1" ref={el => (this.shadowElement = el)}>
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
                    const colDef = (this.columns ?? []).find(
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
                            title={this.getSortTitle(header.column)}
                          >
                            {header.column.columnDef.header as string}
                            {/* Replace icons with something better */}
                            <span
                              class="gcds-table__sort-icon"
                              aria-hidden="true"
                            >
                              {this.getSortIcon(header.id)}
                            </span>
                          </button>
                          :
                          header.column.columnDef.header as string
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
                    No data available.
                  </td>
                </tr>
              ) : (
                rows.map(row => (
                  <tr key={row.id} class="gcds-table__row">
                    {row.getVisibleCells().map(cell => (
                      <td
                        key={cell.id}
                        class={`gcds-table__td ${this.getAlignClass(cell.column.id)}`}
                      >
                        {cell.getValue() as any}
                      </td>
                    ))}
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
              label="table pagination"
              onGcdsClick={(e) => this.handlePaginationClick(e)}
            />
          )}
        </section>
      </Host>
    );
  }
}