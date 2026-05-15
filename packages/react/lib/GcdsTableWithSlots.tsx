// GcdsTable.tsx
import React, { useMemo } from 'react';
import { GcdsTable as GcdsTableBase } from './components';
import type { TableColumn } from '@gcds-core/components';

type CellRenderer<T> = (props: CellSlotProps<T>) => React.ReactNode;
export interface ReactTableColumn<T = Record<string, unknown>>
  extends TableColumn {
  renderCell?: CellRenderer<T>;
}

export interface CellSlotProps<T = Record<string, unknown>> {
  row: T;
  rowIndex: number;
  column: ReactTableColumn<T>;
  value: unknown;
}

export interface GcdsTableProps extends React.HTMLAttributes<HTMLElement> {
  columns?: ReactTableColumn[];
  data?: Record<string, unknown>[];
  filter?: boolean;
  filterValue?: string;
  pagination?: boolean;
  paginationCurrentPage?: number;
  paginationSize?: number;
  paginationSizeOptions?: number[];
  sort?: boolean;
  captionSlot?: React.ReactNode;
  children?: React.ReactNode;
}

function getCellValue(row: Record<string, unknown>, field: string): unknown {
  return row?.[field];
}

function getRowKey(row: Record<string, unknown>, rowIndex: number): string {
  const candidate = row?.['id'];
  if (candidate === null || candidate === undefined || candidate === '') {
    return String(rowIndex);
  }
  return String(candidate);
}

function getSlotName(
  row: Record<string, unknown>,
  column: ReactTableColumn,
  rowIndex: number,
): string {
  return `cell-${getRowKey(row, rowIndex)}-${column.field}`;
}

export function GcdsTableWithSlots({
  columns = [],
  data = [],
  filter = false,
  filterValue = '',
  pagination = false,
  paginationCurrentPage = 1,
  paginationSize = 10,
  paginationSizeOptions = [10, 25, 50, 0],
  sort = false,
  children,
  ...rest
}: GcdsTableProps) {
  const wcColumns = useMemo(() =>
    columns.map(({ renderCell, ...col }) => ({
      ...col,
      managed: renderCell ? true : undefined,
    })),
    [columns]
  );

  const columnSlots = useMemo(() =>
    data.flatMap((row, rowIndex) =>
      columns
        .filter(col => !!col.renderCell)
        .map(col => (
          <span
            key={getSlotName(row, col, rowIndex)}
            slot={getSlotName(row, col, rowIndex)}
          >
            {col.renderCell?.({
              row,
              rowIndex,
              column: col,
              value: getCellValue(row, col.field),
            })}
          </span>
        ))
    ),
    [data, columns]
  );

  return (
    <GcdsTableBase
      {...rest}
      columns={wcColumns}
      data={data}
      filter={filter}
      filter-value={filterValue}
      pagination={pagination}
      pagination-current-page={paginationCurrentPage}
      pagination-size={paginationSize}
      pagination-size-options={JSON.stringify(paginationSizeOptions)}
      sort={sort}
    >
      {children}
      {columnSlots}
    </GcdsTableBase>
  );
}