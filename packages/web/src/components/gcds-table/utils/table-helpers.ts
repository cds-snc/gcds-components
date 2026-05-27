import {
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  type SortingState,
  type ColumnDef,
} from '@tanstack/table-core';

/** Table column definition
 * @interface TableColumn
 * @property {string} field - The key of the data object to display in GcdsTable column.
 * @property {string} header - The text to display in the column header.
 * @property {'asc' | 'desc'} [sortDirection] - The current sort direction of the column on load.
 * @property {'start' | 'center' | 'end'} [alignment] - The alignment of the cell content.
 * @property {boolean} [sort] - Whether the column is sortable.
 * @property {boolean} [rowHeader] - Whether GcdsTable column should be treated as a row header (for accessibility).
 * @property {boolean} [slotted] - Whether the column content is provided via a named slot instead of the data prop.
 * @property {boolean} [managed] - Internal-only property. Not intended for public use. Automatically set to `true` when dynamic slots are managed by the framework.
 */
interface TableColumn {
  field: string;
  header: string;
  sortDirection?: 'asc' | 'desc';
  alignment?: 'start' | 'center' | 'end';
  sort?: boolean;
  rowHeader?: boolean;
  slotted?: boolean;
  managed?: boolean;
}

export interface GcdsTableStateChange {
  visibleRows: Array<{
    rowId: string; // stable TanStack row id — does not change with sort/filter
    rowIndex: number; // current visible position in the table
    original: unknown; // the original data object for this row
  }>;
  page: number;
  pageSize: number;
  filterValue: string;
  sorting: SortingState | null;
}

const buildInitialSorting = (
  columns: TableColumn[] | undefined,
): SortingState => {
  return ((columns ?? []) as TableColumn[])
    .filter(col => col.sortDirection)
    .map(col => ({
      id: col.field,
      desc: col.sortDirection === 'desc',
    }));
};

const buildColumnDefs = (
  columns: TableColumn[] | undefined,
  sort: boolean,
): ColumnDef<Record<string, unknown>>[] => {
  return ((columns ?? []) as TableColumn[]).map(col => ({
    id: col.field,
    accessorKey: col.field,
    header: col.header,
    // Per-column sort: falls back to global `sort` prop
    enableSorting: col.sort !== undefined ? col.sort : sort,
  }));
};

const buildTableOptions = (GcdsTable: any) => {
  return {
    data: (GcdsTable.data ?? []) as Record<string, unknown>[],
    columns: buildColumnDefs(
      GcdsTable.columns as TableColumn[],
      GcdsTable.sort,
    ),
    state: {
      sorting: GcdsTable.sorting,
      columnFilters: GcdsTable.columnFilters,
      globalFilter: GcdsTable.globalFilter,
      pagination: GcdsTable.paginationState,
      columnPinning: {},
    },
    onStateChange: () => {},
    renderFallbackValue: null,
    // Sorting
    enableSorting: GcdsTable.sortEnabled(),
    sortDescFirst: false,
    manualSorting: false,
    onSortingChange: (updater: (arg0: any) => any) => {
      GcdsTable.sorting =
        typeof updater === 'function' ? updater(GcdsTable.sorting) : updater;
      GcdsTable.table?.setOptions((prev: { state: any }) => ({
        ...prev,
        state: { ...prev.state, sorting: GcdsTable.sorting },
      }));
    },
    // Filtering
    enableFilters: GcdsTable.filter,
    onGlobalFilterChange: (updater: (arg0: any) => any) => {
      GcdsTable.globalFilter =
        typeof updater === 'function'
          ? updater(GcdsTable.globalFilter)
          : updater;
      GcdsTable.table?.setOptions((prev: { state: any }) => ({
        ...prev,
        state: { ...prev.state, globalFilter: GcdsTable.globalFilter },
      }));
    },
    // Pagination
    manualPagination: false,
    onPaginationChange: (updater: (arg0: any) => any) => {
      GcdsTable.paginationState =
        typeof updater === 'function'
          ? updater(GcdsTable.paginationState)
          : updater;
      GcdsTable.paginationCurrentPage = GcdsTable.paginationState.pageIndex + 1;
      GcdsTable.table?.setOptions((prev: { state: any }) => ({
        ...prev,
        state: { ...prev.state, pagination: GcdsTable.paginationState },
      }));
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: GcdsTable.pagination
      ? getPaginationRowModel()
      : undefined,
    getFilteredRowModel: GcdsTable.filter ? getFilteredRowModel() : undefined,
    // Keep pagination active even when disabled so state is consistent
    autoResetPageIndex: true,
  };
};

const updateTableOptions = (GcdsTable: any) => {
  if (GcdsTable.table) {
    GcdsTable.table.setOptions((prev: any) => ({
      ...prev,
      ...(buildTableOptions(GcdsTable) as any),
    }));
    // Force re-render by touching the sorting property
    GcdsTable.sorting = [...GcdsTable.sorting];
  }
};

const parseSizeOptions = (options: string | number[]): number[] => {
  const defaultValue = [10, 25, 50, 0];

  if (typeof options === 'string') {
    try {
      const parsed = JSON.parse(options);
      if (
        Array.isArray(parsed) &&
        parsed.every(opt => typeof opt === 'number')
      ) {
        return parsed;
      } else {
        console.error(
          '[gcds-table] Invalid pagination-size-options format. Expected JSON array of numbers.',
        );
        return defaultValue;
      }
    } catch (e) {
      console.error('[gcds-table] Error parsing pagination-size-options:', e);
      return defaultValue;
    }
  }

  if (Array.isArray(options) && options.every(v => typeof v === 'number')) {
    return options;
  }

  console.error(
    '[gcds-table] Invalid pagination-size-options type. Expected string or array of numbers.',
  );
  return defaultValue;
};

export {
  TableColumn,
  buildInitialSorting,
  buildColumnDefs,
  buildTableOptions,
  updateTableOptions,
  parseSizeOptions,
};
