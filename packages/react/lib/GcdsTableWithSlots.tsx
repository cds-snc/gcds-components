import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { GcdsTable as GcdsTableBase } from './components';
import type {
  TableColumn,
  GcdsTableStateChange,
} from '@gcds-core/components';

type GcdsTableElement = React.ElementRef<typeof GcdsTableBase>;
type CellRenderer<T> = (row: T, rowId: string) => React.ReactNode;

export interface ReactTableColumn<T = Record<string, unknown>>
  extends TableColumn {
  renderCell?: CellRenderer<T>;
}

interface GcdsTableWithCellsProps<T extends Record<string, unknown>> {
  columns: ReactTableColumn<T>[];
  data: T[];
  filter?: boolean;
  filterValue?: string;
  pagination?: boolean;
  paginationCurrentPage?: number;
  paginationSize?: number;
  paginationSizeOptions?: number[];
  sort?: boolean;
  children?: React.ReactNode;
}

export function GcdsTableWithSlots<T extends Record<string, unknown>>({
  columns,
  data,
  filter = false,
  filterValue = '',
  pagination = false,
  paginationCurrentPage = 1,
  paginationSize = 10,
  paginationSizeOptions = [10, 25, 50],
  sort = false,
  children,
}: GcdsTableWithCellsProps<T>) {
  const tableRef = useRef<GcdsTableElement>(null);
  const resolvedElRef = useRef<HTMLElement | null>(null);
  const portalRoots = useRef<Map<string, ReactDOM.Root>>(new Map());
  const observerRef = useRef<MutationObserver | null>(null);
  // Track pending setTimeout handles so we can cancel on unmount
  const pendingTimers = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  function resolveEl(): HTMLElement | null {
    const val = tableRef.current as any;
    return val?.$el ?? (val as HTMLElement) ?? null;
  }

  const wcColumns = useMemo<TableColumn[]>(
    () =>
      columns.map(({ renderCell, ...col }) => ({
        ...col,
        managed: col.slotted ? true : undefined,
      })),
    [columns]
  );

  function waitForCells(
    shadowRoot: ShadowRoot,
    selector: string
  ): Promise<void> {
    return new Promise((resolve) => {
      if (shadowRoot.querySelector(selector)) {
        resolve();
        return;
      }
      observerRef.current?.disconnect();
      observerRef.current = new MutationObserver(() => {
        if (shadowRoot.querySelector(selector)) {
          observerRef.current?.disconnect();
          observerRef.current = null;
          resolve();
        }
      });
      observerRef.current.observe(shadowRoot, {
        childList: true,
        subtree: true,
      });
    });
  }

  function scheduleAfterRender(fn: () => void): void {
    const timer = setTimeout(() => {
      pendingTimers.current.delete(timer);
      fn();
    }, 0);
    pendingTimers.current.add(timer);
  }

  const mountCells = useCallback(
    async (visibleRows: GcdsTableStateChange['visibleRows']) => {
      const tableEl = resolvedElRef.current;
      if (!tableEl) return;

      const shadowRoot = tableEl.shadowRoot;
      if (!shadowRoot) return;

      const visibleRowIds = new Set(visibleRows.map((r) => r.rowId));

      const staleKeys: string[] = [];
      portalRoots.current.forEach((_, key) => {
        const rowId = key.split('||')[1];
        if (!visibleRowIds.has(rowId)) {
          staleKeys.push(key);
        }
      });

      if (!visibleRows.length) {
        scheduleAfterRender(() => {
          staleKeys.forEach((key) => {
            portalRoots.current.get(key)?.unmount();
            portalRoots.current.delete(key);
          });
        });
        return;
      }

      const firstCol = columns.find((c) => c.renderCell);
      if (!firstCol) return;

      const firstSelector = `[data-cell="${firstCol.field}-${visibleRows[0].rowId}"]`;
      await waitForCells(shadowRoot, firstSelector);

      scheduleAfterRender(() => {
        staleKeys.forEach((key) => {
          portalRoots.current.get(key)?.unmount();
          portalRoots.current.delete(key);
        });

        visibleRows.forEach(({ rowId, original }) => {
          columns
            .filter((col) => col.renderCell)
            .forEach((col) => {
              const key = `${col.field}||${rowId}`;
              const td = shadowRoot.querySelector(
                `[data-cell="${col.field}-${rowId}"]`
              );
              if (!td) return;

              if (portalRoots.current.has(key)) {
                portalRoots.current.get(key)!.unmount();
                portalRoots.current.delete(key);
              }

              const root = ReactDOM.createRoot(td);
              portalRoots.current.set(key, root);
              root.render(col.renderCell!(original as T, rowId));
            });
        });
      });
    },
    [columns]
  );

  useEffect(() => {
    const rawEl = resolveEl();
    if (!rawEl) return;

    const handleStateChange = (e: Event) => {
      mountCells((e as CustomEvent<GcdsTableStateChange>).detail.visibleRows);
    };

    customElements.whenDefined('gcds-table').then(async () => {
      await (rawEl as any).componentOnReady?.();

      resolvedElRef.current = rawEl;

      rawEl.addEventListener('gcdsTableStateChange', handleStateChange);

      const state = await (rawEl as any).getVisibleRows?.();
      if (state?.length) {
        mountCells(state);
      }
    });

    return () => {
      pendingTimers.current.forEach((timer) => clearTimeout(timer));
      pendingTimers.current.clear();

      resolvedElRef.current?.removeEventListener(
        'gcdsTableStateChange',
        handleStateChange
      );
      resolvedElRef.current = null;
      observerRef.current?.disconnect();
      portalRoots.current.forEach((root) => root.unmount());
      portalRoots.current.clear();
    };
  }, [mountCells]);

  return (
    <GcdsTableBase
      ref={tableRef}
      columns={wcColumns}
      data={data}
      filter={filter}
      filterValue={filterValue}
      pagination={pagination}
      paginationCurrentPage={paginationCurrentPage}
      paginationSize={paginationSize}
      paginationSizeOptions={paginationSizeOptions}
      sort={sort}
    >
      {children}
    </GcdsTableBase>
  );
}