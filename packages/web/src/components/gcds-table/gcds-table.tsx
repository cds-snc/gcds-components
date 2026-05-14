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
import I18N from './i18n/i18n';

import {
  TableColumn,
  GcdsTableStateChange,
  buildInitialSorting,
  buildTableOptions,
  updateTableOptions,
} from './utils/table-helpers';
import {
  getSortIcon,
  getSortTitle,
  renderTableStatus,
  renderFilterSortModal,
  renderFilterPills,
  renderSortPills,
} from './utils/render-helpers';

@Component({
  tag: 'gcds-table',
  styleUrl: './gcds-table.css',
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
  // @ts-ignore - this is used in building table options
  @State() private columnFilters: ColumnFiltersState = [];
  @State() private globalFilter: string = this.filterValue;
  @State() private paginationState: PaginationState = {
    pageIndex: Math.max(0, this.paginationCurrentPage - 1),
    pageSize: this.pagination
      ? (this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize)
      : Number.MAX_SAFE_INTEGER,
  };
  @State() lang: string;

  @Event() gcdsTableStateChange: EventEmitter<GcdsTableStateChange>;

  // TanStack table instance (not reactive – mutations trigger re-renders via @State)
  private table: Table<Record<string, unknown>> | null = null;

  private lastEmittedRowIds: string = '';

  // Flags to help stop multiple rendering on first load
  private isInitializing = true;
  private hasRenderedOnce = false;

  // Store initial values to determine if they have been changed by the user
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialFilter = this.filterValue;
  // @ts-ignore - these are used in event handlers to reset filter/sort state
  private initialSorting: SortingState = [];

  // ─── Watchers ─────────────────────────────────────────────────────────────

  @Watch('columns')
  onColumnsChange(newVal: string | TableColumn[]) {
    if (this.isInitializing) return;
    if (typeof newVal === 'string') {
      try {
        this.columns = JSON.parse(newVal);
      } catch (e) {
        console.error('[gcds-table] Invalid JSON in column-data:', e);
      }
    }
    updateTableOptions(this);
    this.syncSlottedElements();
  }

  @Watch('data')
  onDataChange(newVal: string | object[]) {
    if (this.isInitializing) return;
    if (typeof newVal === 'string') {
      try {
        this.data = JSON.parse(newVal);
      } catch (e) {
        console.error('[gcds-table] Invalid JSON in column-data:', e);
      }
    }
    updateTableOptions(this);
    this.syncSlottedElements();
  }

  @Watch('sort')
  onSortChange() {
    if (this.isInitializing) return;
    this.onDataChange(this.data);
  }

  @Watch('pagination')
  onPaginationChange(newVal: boolean) {
    if (this.isInitializing) return;
    if (newVal) {
      this.paginationState = {
        pageIndex: Math.max(0, this.paginationCurrentPage - 1),
        pageSize:
          this.paginationSize === 0 ? Number.MAX_SAFE_INTEGER : this.paginationSize,
      };
    } else {
      this.paginationState = {
        pageIndex: Math.max(0, this.paginationCurrentPage - 1),
        pageSize: Number.MAX_SAFE_INTEGER,
      };
    }
    this.onDataChange(this.data);
  }

  @Watch('paginationCurrentPage')
  onPageChange(newPage: number) {
    if (this.isInitializing) return;
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
    if (this.isInitializing) return;
    const totalRows = this.table?.getPreFilteredRowModel()?.rows.length ?? 0;

    if (newSize === 0) {
      this.paginationState = {
        pageIndex: 0,
        pageSize: totalRows === 0 ? 1 : totalRows,
      };
    } else {
      this.paginationState = {
        pageIndex:
          this.paginationState.pageIndex + 1 >
            Math.ceil(totalRows / newSize)
            ? 0
            : this.paginationState.pageIndex,
        pageSize: newSize === 0 ? totalRows : newSize,
      };
    }

    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, pagination: this.paginationState },
    }));
  }

  @Watch('paginationSizeOptions')
  onSizeOptionsChange(newVal: number[]) {
    if (this.isInitializing) return;
    if (!Array.isArray(newVal)) {
      this.paginationSizeOptions = [10, 25, 50, 0];
      return;
    }
    updateTableOptions(this);
  }

  @Watch('filterValue')
  onFilterValueChange(newVal: string) {
    if (this.isInitializing) return;
    this.globalFilter = newVal;
    this.table?.setOptions(prev => ({
      ...prev,
      state: { ...prev.state, globalFilter: this.globalFilter },
    }));
  }

  @Watch('lang')
  onLangChange(newVal: string) {
    if (this.isInitializing) return;
    this.lang = newVal;
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private initTable() {
    this.table = createTable(
      buildTableOptions(this) as TableOptionsResolved<Record<string, unknown>>,
    );
  }

  private emitStateChangeIfDirty(): void {
    const rows = this.table?.getRowModel().rows ?? [];

    // Compute a stable fingerprint of the current visible row set
    const rowIdFingerprint = rows.map(r => r.id).join(',');

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
    return (
      this.sort ||
      ((this.columns ?? []) as TableColumn[]).some(col => col.sort)
    );
  }

  private getTemplate(columnKey: string): HTMLTemplateElement | null {
    return this.el.querySelector<HTMLTemplateElement>(
      `template[slot="cell:${columnKey}"]`,
    );
  }

  private applyBindings(el: HTMLElement, row: Record<string, unknown>): void {
    const bindings = Array.from(el.attributes).filter(attr =>
      attr.name.startsWith('data-bind-'),
    );

    for (const binding of bindings) {
      let prop: string;
      let value: unknown;

      if (binding.name.startsWith('data-bind-template-')) {
        prop = binding.name.replace('data-bind-template-', '');
        value = binding.value.replace(/\{(\w+)\}/g, (_, field) =>
          String(row[field] ?? ''),
        );
      } else {
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

  /*
   * Clone elements from templates to use in slots
   */
  private createSlottedElements() {
    const slottedColumns = (this.columns as TableColumn[]).filter(
      s => s.slotted && !s.managed
    );
    const rows = this.table?.getCoreRowModel().rows ?? [];

    rows.forEach(row => {
      slottedColumns.forEach(column => {
        const slotName = this.getManagedSlotName(row.id, column.field);
        const template = this.getTemplate(column.field);
        if (!template) return;

        const clone = template.content.cloneNode(true) as DocumentFragment;
        const wrapper = document.createElement('span');
        wrapper.setAttribute('slot', slotName);
        wrapper.appendChild(clone);

        const child = wrapper.querySelector('*') as HTMLElement | null;
        if (child) {
          this.applyBindings(child, row.original);
          (child as any).row = row.original;
          (child as any).column = column;
          (child as any).rowIndex = row.index;
          (child as any).value = row.getValue(column.field);
        }

        this.el.appendChild(wrapper);
      });
    });
  }

  private syncSlottedElements() {
    const slottedColumns = (this.columns as TableColumn[]).filter(
      s => s.slotted && !s.managed
    );
    if (slottedColumns.length === 0) return;

    const rows = this.table?.getCoreRowModel().rows ?? [];

    // Index slotted elements
    const existingMap = new Map<string, Element>();
    this.el.querySelectorAll('[slot^="cell-"]').forEach(el => {
      existingMap.set(el.getAttribute('slot')!, el);
    });

    // Check if slotted elements already exist or need to be created based on rows
    rows.forEach(row => {
      slottedColumns.forEach(column => {
        const slotName = this.getManagedSlotName(row.id, column.field);
        const existing = existingMap.get(slotName);

        if (existing) {
          // Slot already in the DOM — just refresh its bindings.
          const child = existing.querySelector('*') as HTMLElement | null;
          if (child) {
            this.applyBindings(child, row.original);
            (child as any).row = row.original;
            (child as any).column = column;
            (child as any).rowIndex = row.index;
            (child as any).value = row.getValue(column.field);
          }
          // Mark as handled so it isn't removed below.
          existingMap.delete(slotName);
        } else {
          // New row/column combination — create from scratch.
          const template = this.getTemplate(column.field);
          if (!template) return;

          const clone = template.content.cloneNode(true) as DocumentFragment;
          const wrapper = document.createElement('span');
          wrapper.setAttribute('slot', slotName);
          wrapper.appendChild(clone);

          const child = wrapper.querySelector('*') as HTMLElement | null;
          if (child) {
            this.applyBindings(child, row.original);
            (child as any).row = row.original;
            (child as any).column = column;
            (child as any).rowIndex = row.index;
            (child as any).value = row.getValue(column.field);
          }

          this.el.appendChild(wrapper);
        }
      });
    });

    // Remove stale slotted elements
    existingMap.forEach(el => el.remove());
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
    this.paginationCurrentPage = e.detail.page;

    // focus table here to ensure keyboard users can navigate from pagination controls to table rows
    this.shadowElement?.focus();
    this.shadowElement?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  private getManagedSlotName(
    row: string,
    columnField: string,
  ): string {
    return `cell-${row}-${columnField}`;
  }

  // ─── Methods ────────────────────────────────────────────────────────────

  @Method()
  async getVisibleRows() {
    return (
      this.table?.getRowModel().rows.map(row => ({
        rowId: row.id,
        rowIndex: row.index,
        original: row.original,
      })) ?? []
    );
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  componentWillLoad() {
    this.isInitializing = true;
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    // Validate if information is being passed as JSON strings and parse it
    if (typeof this.columns === 'string') {
      try { this.columns = JSON.parse(this.columns); } catch (e) { console.error(e); }
    }
    if (typeof this.data === 'string') {
      try { this.data = JSON.parse(this.data); } catch (e) { console.error(e); }
    }

    // Seed initial sort from sortDirection column definitions
    if (this.sortEnabled()) {
      this.sorting = buildInitialSorting(this.columns as TableColumn[]);
    }
    this.initialSorting = this.sorting;

    this.initTable();

    if (this.table) {
      this.createSlottedElements();
    }

    this.isInitializing = false;
  }

  componentDidRender() {
    if (!this.hasRenderedOnce) {
      this.hasRenderedOnce = true;
      return;
    }
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
          {this.el.querySelector('[slot="caption"]') && (
            <div id="gcds-table__caption">
              <slot name="caption"></slot>
            </div>
          )}

          {/* Filter and sort controls */}
          {(this.filter || this.sortEnabled()) && renderFilterSortModal(this)}

          {/* Active pills section */}
          <div class="gcds-table__active-pills">
            {/* Filter pills */}
            {renderFilterPills(this.filterValue, this.lang, () => {
              this.filterValue = '';
              updateTableOptions(this);
            })}

            {/* Sort pills */}
            {renderSortPills(
              this.sorting,
              this.table,
              this.lang,
              (columnId: string) => {
                this.sorting = this.sorting.filter(s => s.id !== columnId);
                updateTableOptions(this);
              },
            )}
          </div>

          <div class="gcds-table__row-management">
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
            <span
              class="gcds-table__page-info"
              role="status"
              aria-live="polite"
            >
              {renderTableStatus(
                this.el,
                this.table,
                this.paginationState,
                this.lang,
              )}
            </span>
          </div>

          {/* ── Table ──────────────────────────────── */}
          <table
            class="gcds-table__table"
            tabindex="-1"
            aria-labelledby={this.el.querySelector('[slot="caption"]') ? 'gcds-table__caption' : undefined}
            ref={el => {
              if (el) this.shadowElement = el;
            }}
          >
            <thead>
              {headerGroups.map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => {
                    const colDef = (
                      (this.columns ?? []) as TableColumn[]
                    ).find(c => c.field === header.id);
                    const canSort = header.column.getCanSort();
                    const alignmentClass = colDef?.alignment
                      ? `alignment-${colDef.alignment}`
                      : '';

                    return (
                      <th
                        key={header.id}
                        class={`gcds-table__th ${alignmentClass}`}
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
                        {canSort ? (
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
                        ) : (
                          colDef?.header
                        )}
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
                    {this.filter && this.filterValue !== '' ?
                      <div>
                        <gcds-heading tag="h3" heading-role='secondary'>
                          {I18N[this.lang].noResultsHeading}
                        </gcds-heading>
                        <gcds-text text-role='secondary'>
                          {I18N[this.lang].noResultsText}
                        </gcds-text>
                        <gcds-button
                          onClick={() => this.filterValue = this.initialFilter}
                        >
                          {I18N[this.lang].noResultsClearFilter}
                        </gcds-button>
                      </div>
                      :
                      <div>
                        <gcds-heading tag="h3" heading-role='secondary'>
                          {I18N[this.lang].noDataHeading}
                        </gcds-heading>
                        <gcds-text text-role='secondary'>
                          {I18N[this.lang].noDataText}
                        </gcds-text>
                      </div>
                    }
                  </td>
                </tr>
              ) : (
                rows.map(row => (
                  <tr key={row.id} data-test={row.id} class="gcds-table__row">
                    {row.getVisibleCells().map(cell => {
                      const colDef = (
                        (this.columns ?? []) as TableColumn[]
                      ).find(c => c.field === cell.column.id);
                      const isSlotted = colDef?.slotted;

                      let cellContent: any;
                      let Tag = 'td';
                      let scope = {};

                      // Check if table header in row
                      if (colDef?.rowHeader) {
                        Tag = 'th';
                        scope = {
                          scope: 'row',
                        };
                      }

                      const fallbackValue = String(cell.getValue() ?? '');

                      cellContent = !isSlotted
                        ? fallbackValue
                        : (
                          <slot
                            name={this.getManagedSlotName(
                              row.id,
                              cell.column.id,
                            )}
                          >
                            {fallbackValue}
                          </slot>
                        );

                      return (
                        <Tag
                          key={cell.id}
                          class={`gcds-table__td${colDef?.alignment ? ` alignment-${colDef.alignment}` : ''}`}
                          data-column={colDef?.header}
                          data-cell={`${cell.column.id}-${row.id}`}
                          {...scope}
                        >
                          {cellContent}
                        </Tag>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ── Pagination ─────────────────────────── */}
          {this.pagination && this.paginationSize !== 0 && (
            <gcds-pagination
              display="list"
              currentPage={this.paginationState.pageIndex + 1}
              totalPages={this.table.getPageCount()}
              label={I18N[this.lang].paginationLabel}
              onGcdsClick={e => this.handlePaginationClick(e)}
            />
          )}
        </section>
        <slot />
      </Host>
    );
  }
}
