import {
  Component,
  Host,
  Prop,
  State,
  Watch,
  h,
  Element,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core';

import {
  createTable,
  type Table,
  type SortingState,
  type ColumnFiltersState,
  type PaginationState,
  type TableOptionsResolved,
} from '@tanstack/table-core';

import { assignLanguage } from '../../utils/utils';
import I18N from '../gcds-table/i18n/i18n';

import {
  TableColumnSlots,
  GcdsTableStateChange,
  buildInitialSorting,
  buildTableOptions,
  updateTableOptions,
} from '../gcds-table/utils/table-helpers';
import {
  getSortIcon,
  getSortTitle,
  renderTableStatus,
  renderFilterSortModal,
  renderFilterPills,
  renderSortPills,
} from '../gcds-table/utils/render-helpers';

@Component({
  tag: 'gcds-table-slots',
  styleUrl: '../gcds-table/gcds-table.css',
  shadow: true,
})
export class GcdsTableSlots {
  @Element() el: HTMLGcdsTableSlotsElement;
  private shadowElement: HTMLTableElement | undefined;

  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private sortRadios: HTMLGcdsRadiosElement;
  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private filterInput: HTMLGcdsInputElement;
  // @ts-ignore - these are assigned in renderFilterSortModal and used in event handlers
  private filterSortModal: HTMLDialogElement;

  // ─── Props ────────────────────────────────────────────────────────────────

  /** Column definitions */
  @Prop({ mutable: true }) columns: string | TableColumnSlots[] = [];

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
  // @ts-ignore - this is used in building table options
  @State() private columnFilters: ColumnFiltersState = [];
  @State() private globalFilter: string = this.filterValue;
  @State() private paginationState: PaginationState = {
    pageIndex: Math.max(0, this.paginationCurrentPage - 1),
    pageSize: this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize,
  };
  @State() lang: string;

  @Event() gcdsTableStateChange: EventEmitter<GcdsTableStateChange>;

  // TanStack table instance (not reactive – mutations trigger re-renders via @State)
  private table: Table<Record<string, unknown>> | null = null;

  private lastEmittedRowIds: string = '';

  // Store initial values to determine if they have been changed by the user
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialFilter = this.filterValue;
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialSorting: SortingState = [];

  // ─── Watchers ─────────────────────────────────────────────────────────────

  @Watch('columns')
  onColumnsChange(newVal: string | TableColumnSlots[]) {
    if (typeof newVal === 'string') {
      try {
        this.columns = JSON.parse(newVal);
      } catch (e) {
        console.error('[gcds-table] Invalid JSON in column-data:', e);
      }
    }
    updateTableOptions(this);
    // this.emitStateChange();
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
    updateTableOptions(this);
    // this.emitStateChange();
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
    // this.emitStateChange();
  }

  @Watch('paginationSize')
  onPageSizeChange(newSize: number) {
    this.paginationState = {
      pageIndex: this.paginationState.pageIndex + 1 > Math.ceil((this.table?.getPreFilteredRowModel()?.rows.length ?? 0) / newSize) ? 0
        : this.paginationState.pageIndex,
      pageSize: newSize === 0 ? Number.MAX_SAFE_INTEGER : newSize,
    };
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, pagination: this.paginationState },
    }));
    // this.emitStateChange();
  }

  @Watch('filterValue')
  onFilterValueChange(newVal: string) {
    this.globalFilter = newVal;
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, globalFilter: this.globalFilter },
    }));
    // this.emitStateChange();
  }

  @Watch('lang')
  onLangChange(newVal: string) {
    this.lang = newVal;
  }


  // ─── Helpers ──────────────────────────────────────────────────────────────

  private initTable() {
    this.table = createTable(buildTableOptions(this) as TableOptionsResolved<Record<string, unknown>>);
  }

  private emitStateChangeIfDirty(): void {
    const rows = this.table?.getRowModel().rows ?? [];

    // Compute a stable fingerprint of the current visible row set
    const rowIdFingerprint = rows.map((r) => r.id).join(',');

    // Only emit if the visible rows have actually changed
    if (rowIdFingerprint === this.lastEmittedRowIds) return;

    this.lastEmittedRowIds = rowIdFingerprint;

    this.gcdsTableStateChange.emit({
      visibleRows: rows.map((row, rowIndex) => ({
        rowId: row.id,
        rowIndex,
        original: row.original,
      })),
      page: this.paginationState.pageIndex + 1,
      pageSize: this.paginationSize,
      filterValue: this.filterValue,
      sortKey: this.sorting[0]?.id ?? null,
      sortDirection: this.sorting[0]?.desc ? 'desc' : 'asc',
    });
  }

  private sortEnabled(): boolean {
    return this.sort || ((this.columns ?? []) as TableColumnSlots[]).some(col => col.sort);
  }

  private getTemplate(columnKey: string): HTMLTemplateElement | null {
    return this.el.querySelector<HTMLTemplateElement>(
      `template[slot="cell:${columnKey}"]`
    );
  }

  private applyBindings(
    el: HTMLElement,
    row: Record<string, unknown>
  ): void {
    const bindings = Array.from(el.attributes).filter((attr) =>
      attr.name.startsWith('data-bind-')
    );

    for (const binding of bindings) {
      let prop: string;
      let value: unknown;

      if (binding.name.startsWith('data-bind-template-')) {
        // data-bind-template-src="/avatars/{id}.png"
        // Replaces {fieldName} tokens with the corresponding row values
        prop = binding.name.replace('data-bind-template-', '');
        value = binding.value.replace(
          /\{(\w+)\}/g,
          (_, field) => String(row[field] ?? '')
        );
      } else {
        // data-bind-src="avatarUrl" — existing direct mapping
        prop = binding.name.replace('data-bind-', '');
        value = row[binding.value];
      }

      if (prop in el) {
        (el as any)[prop] = value;
      } else {
        el.setAttribute(prop, String(value ?? ''));
      }
    }
  }

  private applyListeners(
    el: HTMLElement,
    row: Record<string, unknown>,
    rowId: string
  ): void {
    const listeners = Array.from(el.attributes).filter((attr) =>
      attr.name.startsWith('data-on-')
    );
    for (const listener of listeners) {
      const eventName = listener.name.replace('data-on-', '');
      const dispatchName = listener.value;
      el.addEventListener(eventName, () => {
        this.el.dispatchEvent(
          new CustomEvent(dispatchName, {
            bubbles: true,
            composed: true,
            detail: { row, rowId },
          })
        );
      });
    }
  }

  private cloneAndInject(
    columnKey: string,
    row: Record<string, unknown>,
    rowId: number
  ): HTMLElement | null {
    const template = this.getTemplate(columnKey);
    if (!template) return null;

    const fragment = template.content.cloneNode(true) as DocumentFragment;
    const wrapper = document.createElement('div');
    wrapper.appendChild(fragment);
    const child = wrapper.firstElementChild as HTMLElement;

    if (child) {
      if (child.tagName.includes('-')) {
        this.applyBindings(child, row);
        this.applyListeners(child, row, String(rowId));
        (child as any).rowData = row;
        (child as any).columnKey = columnKey;
        (child as any).rowId = rowId;
      } else {
        this.applyBindings(child, row);
        this.applyListeners(child, row, String(rowId));
        child.dataset.rowId = String(rowId);
        child.dataset.columnKey = columnKey;
      }
    }
    return wrapper;
  }

  private mountSlottedCell(
    tdEl: HTMLElement | null,
    columnKey: string,
    row: Record<string, unknown>,
    rowId: number
  ): void {
    if (!tdEl) return;
    tdEl.innerHTML = '';
    const clone = this.cloneAndInject(columnKey, row, rowId);
    if (clone) tdEl.appendChild(clone);
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

  // ─── Methods ────────────────────────────────────────────────────────────

  @Method()
  async getVisibleRows() {
    return this.table?.getRowModel().rows.map(row => ({
      rowId: row.id,
      rowIndex: row.index,
      original: row.original,
    })) ?? [];
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    // Validate if information is being passed as JSON strings and parse it
    this.onColumnsChange(this.columns);
    this.onDataChange(this.data);

    // Seed initial sort from sortDirection column definitions
    this.sorting = buildInitialSorting(this.columns as TableColumnSlots[]);
    this.initialSorting = this.sorting;

    this.initTable();
  }

  componentDidRender() {
    this.emitStateChangeIfDirty();
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

          {/* Active pills section */}
          <div class="gcds-table__active-pills">
            {/* Filter pills */}
            {renderFilterPills(this.filterValue, this.lang, () => {
              this.filterValue = '';
              updateTableOptions(this);
            })}

            {/* Sort pills */}
            {renderSortPills(this.sorting, this.table, this.lang, (columnId: string) => {
              this.sorting = this.sorting.filter(s => s.id !== columnId);
              updateTableOptions(this);
            })}
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
            {this.el.querySelector('[slot="caption"]') && (
              <caption>
                <slot name="caption">
                </slot>
              </caption>
            )}
            <thead>
              {headerGroups.map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => {
                    const colDef = ((this.columns ?? []) as TableColumnSlots[]).find(
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
                rows.map((row) => (
                  <tr key={row.id} class="gcds-table__row">
                    {row.getVisibleCells().map(cell => {
                      const colDef = ((this.columns ?? []) as TableColumnSlots[]).find(c => c.field === cell.column.id);
                      const isSlotted = colDef?.slotted;
                      const isManaged = colDef?.managed;

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

                      cellContent = !isSlotted ? String(cell.getValue() ?? '') : null;

                      return (
                        <Tag
                          key={cell.id}
                          class={`gcds-table__td${colDef?.align ? ` align-${colDef.align}` : ''}`}
                          data-column={colDef?.header}
                          data-cell={`${cell.column.id}-${row.id}`}
                          ref={
                            isSlotted && !isManaged
                              ? (tdEl) =>
                                this.mountSlottedCell(
                                  tdEl,
                                  cell.column.id,
                                  row.original,
                                  Number(row.id)
                                )
                              : undefined
                          }
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
        <slot />
      </Host >
    );
  }
}