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
  activeSorting?: 'asc' | 'desc';
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
  renderCell?: (value: unknown, row: Record<string, unknown>) => any;
  rowHeader?: boolean;
}

@Component({
  tag: 'gcds-table',
  styleUrl: 'gcds-table.css',
  shadow: true,
})
export class GcdsTable {
  @Element() el: HTMLElement;
  private shadowElement: HTMLTableElement;
  private filterInput: HTMLGcdsInputElement;
  private sortRadios: HTMLGcdsRadiosElement;
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
  @State() private globalFilter: string = '';
  @State() private paginationState: PaginationState = {
    pageIndex: 0,
    pageSize: 10,
  };

  // TanStack table instance (not reactive – mutations trigger re-renders via @State)
  private table: Table<Record<string, unknown>> | null = null;

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  componentWillLoad() {
    if (this.pagination) {
      this.paginationState = {
        pageIndex: Math.max(0, this.paginationCurrentPage - 1),
        pageSize: this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize,
      };
    }

    // Validate if information is being passed as JSON strings and parse it
    this.onColumnsChange(this.columns);
    this.onDataChange(this.data);

    // Seed initial sort from activeSorting column definitions
    this.sorting = this.buildInitialSorting();

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
  onSortableChange() {
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

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildInitialSorting(): SortingState {
    return ((this.columns ?? []) as TableColumn[])
      .filter(col => col.activeSorting)
      .map(col => ({
        id: col.field,
        desc: col.activeSorting === 'desc',
      }));
  }

  private buildColumnDefs(): ColumnDef<Record<string, unknown>>[] {
    return ((this.columns ?? []) as TableColumn[]).map(col => ({
      id: col.field,
      accessorKey: col.field,
      header: col.header,
      // Per-column sortable: falls back to global `sortable` prop
      enableSorting: col.sortable !== undefined ? col.sortable : this.sort,
    }));
  }

  private sortEnabled(): boolean {
    return this.sort || ((this.columns ?? []) as TableColumn[]).some(col => col.sortable);
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
    const colDef = ((this.columns ?? []) as TableColumn[]).find(c => c.field === field);
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

  private renderActivewBadge() {
    const activeCount = (this.filterValue ? 1 : 0) + this.sorting.length;
    return (
      <span class="gcds-table__active-count" aria-label={`${activeCount} active filters/sorts`}>
        {activeCount}
      </span>
    );
  }

  private renderSortRadios() {
    const radioOptions = [];
    let isSorted = 'null';

    ((this.columns ?? []) as TableColumn[]).filter(col => col.sortable !== false).map(col => {
      if (this.table?.getColumn(col.field)?.getIsSorted()) {
        isSorted = this.table?.getColumn(col.field)?.getIsSorted() === 'asc' ? `asc-${col.field}` : `desc-${col.field}`;
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
        id: 'none',
        label: 'None',
        value: 'null',
      }
    );

    return (
      <gcds-radios
        legend="Sort"
        hideLegend
        name="sort"
        autoFocus
        options={radioOptions}
        value={isSorted}
        ref={el => (this.sortRadios = el)}
      />
    )
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
          {(this.sortEnabled() || this.filter) && (
            <div>
              <gcds-button
                size="small"
                onClick={() => this.filterSortModal.showModal()}
              >
                Filter and sort
                {(this.filterValue || this.sorting.length > 0) && this.renderActivewBadge()
                }
              </gcds-button>

              <dialog
                class="gcds-table__modal"
                aria-modal="true"
                aria-labelledby="gcds-table__modal-heading"
                ref={el => (this.filterSortModal = el)}
              >
                <div>
                  <gcds-heading
                    tag="h1"
                    id="gcds-table__modal-heading"
                    marginTop='0'
                  >
                    Filter and sort
                  </gcds-heading>
                </div>

                <gcds-button
                  size="small"
                  button-role="secondary"
                  onClick={() => this.filterSortModal.close()}
                >
                  Close
                </gcds-button>

                <form
                  class="gcds-table__modal-body"
                  onSubmit={ev => {
                    ev.preventDefault();

                    this.filterValue = this.filterInput.value;

                    const sortValue = this.sortRadios.value;
                    if (sortValue === 'null') {
                      this.sorting = [];
                    } else {
                      const [direction, field] = sortValue.split('-');
                      this.sorting = [{
                        id: field,
                        desc: direction === 'desc',
                      }];
                    }

                    this.updateTableOptions();

                    this.filterSortModal.close();
                  }}
                >
                  {this.filter && (
                    <gcds-input
                      type="search"
                      label="Filter items"
                      name="filter"
                      inputId="gcds-table-filter"
                      autoFocus
                      value={this.filterValue}
                      ref={el => (this.filterInput = el)}
                    />
                  )}

                  {this.sortEnabled() && (
                    <div>
                      {/* This will be an expand button to hide the radios */}
                      <gcds-text>Sort</gcds-text>

                      {this.renderSortRadios()}
                    </div>
                  )}

                  <div class="gcds-table__modal-footer">

                    <gcds-button
                      button-role="primary"
                      type="submit"
                    >
                      Apply
                    </gcds-button>
                    <gcds-button
                      button-role="secondary"
                      onGcdsClick={ev => {
                        ev.preventDefault();
                        this.filterInput.value = '';
                        this.sortRadios.value = 'null';
                      }}
                    >
                      Clear all
                    </gcds-button>
                  </div>
                </form>
              </dialog>
            </div>
          )}

          <hr />

          {/* Active section */}
          <div class="gcds-table__active-filters">
            {this.filterValue && (
              <button
                onClick={() => this.filterValue = ''}
                title="Click to remove filter"
              >
                Filter: {this.filterValue}
                <span aria-hidden="true"> ×</span>
              </button>
            )}

            {this.sorting.map(sort => {
              const col = this.table?.getColumn(sort.id);
              if (!col) return null;
              const colDef = ((this.columns ?? []) as TableColumn[]).find(c => c.field === sort.id);
              const header = colDef?.header || sort.id;
              const direction = sort.desc ? 'desc' : 'asc';
              return (
                <button
                  onClick={() => {
                    this.sorting = this.sorting.filter(s => s.id !== sort.id);
                    this.updateTableOptions();
                  }}
                  title="Click to remove sorting"
                >
                  Sort: {header} ({direction})
                  <span aria-hidden="true"> ×</span>
                </button>
              );
            })}
          </div>

          {/* Table status */}
          <span class="gcds-table__page-info" role="status" aria-live="polite">
            Showing {currentPageIndex * this.paginationSize + 1} to {Math.min((currentPageIndex + 1) * this.paginationSize, totalRows)} of {totalRows} entries
          </span>

          {this.pagination && (
            <div class="gcds-table__page-size">
              <gcds-select
                label="Rows per page"
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
                            title={this.getSortTitle(header.column)}
                          >
                            {colDef.header}
                            {/* Replace icons with something better */}
                            <span
                              class="gcds-table__sort-icon"
                              aria-hidden="true"
                            >
                              {this.getSortIcon(header.id)}
                            </span>
                          </button>
                          :
                          colDef.header
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
                          class={`gcds-table__td ${this.getAlignClass(cell.column.id)}`}
                          data-column={colDef.header}
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
              label="table pagination"
              onGcdsClick={(e) => this.handlePaginationClick(e)}
            />
          )}
        </section>
      </Host>
    );
  }
}