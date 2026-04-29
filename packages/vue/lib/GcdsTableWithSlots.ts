import {
  defineComponent,
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  h,
  render,
  type PropType,
} from 'vue';
import { GcdsTableSlots as GcdsTableBase } from './components';
import type {
  TableColumnSlots,
  GcdsTableStateChange,
} from '@gcds-core/components';

export const GcdsTableWithSlots = defineComponent({
  name: 'GcdsTableWithSlots',

  props: {
    columns: {
      type: Array as PropType<TableColumnSlots[]>,
      default: () => [],
    },
    data: {
      type: Array as PropType<Record<string, unknown>[]>,
      default: () => [],
    },
    filter: { type: Boolean, default: false },
    filterValue: { type: String, default: '' },
    pagination: { type: Boolean, default: false },
    paginationCurrentPage: { type: Number, default: 1 },
    paginationSize: { type: Number, default: 10 },
    paginationSizeOptions: {
      type: Array as PropType<number[]>,
      default: () => [10, 25, 50],
    },
    sort: { type: Boolean, default: false },
  },

  setup(props, { slots }) {
    const tableRef = ref<HTMLElement | null>(null);
    const mountedContainers = ref(new Map<string, HTMLElement>());
    let observer: MutationObserver | null = null;

    const wcColumns = computed<TableColumnSlots[]>(() =>
      props.columns.map((col) => ({
        ...col,
        managed: col.slotted ? true : undefined,
      }))
    );

    const slottedColumns = computed(() =>
      props.columns.filter((col) => col.slotted)
    );

    function resolveEl(): HTMLElement | null {
      const val = tableRef.value as any;
      return val?.$el ?? val ?? null;
    }

    function unmountContainer(container: HTMLElement): void {
      render(null, container);
    }

    function removeStaleContainers(visibleRowIds: Set<string>): void {
      mountedContainers.value.forEach((container, key) => {
        const rowId = key.split('||')[1];
        if (!visibleRowIds.has(rowId)) {
          unmountContainer(container);
          mountedContainers.value.delete(key);
        }
      });
    }

    function waitForCells(
      shadowRoot: ShadowRoot,
      selector: string
    ): Promise<void> {
      return new Promise((resolve) => {
        if (shadowRoot.querySelector(selector)) {
          resolve();
          return;
        }
        observer?.disconnect();
        observer = new MutationObserver(() => {
          if (shadowRoot.querySelector(selector)) {
            observer?.disconnect();
            observer = null;
            resolve();
          }
        });
        observer.observe(shadowRoot, {
          childList: true,
          subtree: true,
        });
      });
    }

    async function mountCells(
      visibleRows: GcdsTableStateChange['visibleRows']
    ): Promise<void> {
      const tableEl = resolvedEl.value;
      if (!tableEl) return;

      const shadowRoot = tableEl.shadowRoot;
      if (!shadowRoot) return;

      const visibleRowIds = new Set(visibleRows.map((r) => r.rowId));
      removeStaleContainers(visibleRowIds);

      if (!visibleRows.length || !slottedColumns.value.length) return;

      const firstCol = slottedColumns.value[0];
      const firstSelector = `[data-cell="${firstCol.field}-${visibleRows[0].rowId}"]`;
      await waitForCells(shadowRoot, firstSelector);

      visibleRows.forEach(({ rowId, original }) => {
        slottedColumns.value.forEach((col) => {
          const slotFn = slots[`cell:${col.field}`];
          if (!slotFn) return;

          const key = `${col.field}||${rowId}`;
          const td = shadowRoot.querySelector(
            `[data-cell="${col.field}-${rowId}"]`
          );
          if (!td) return;

          if (mountedContainers.value.has(key)) {
            unmountContainer(mountedContainers.value.get(key)!);
            mountedContainers.value.delete(key);
            td.innerHTML = '';
          }

          const container = document.createElement('div');
          td.appendChild(container);

          render(h('div', slotFn({ row: original, rowId })), container);
          mountedContainers.value.set(key, container);
        });
      });
    }

    function handleStateChange(e: Event): void {
      const detail = (e as CustomEvent<GcdsTableStateChange>).detail;
      mountCells(detail.visibleRows);
    }

    const resolvedEl = ref<HTMLElement | null>(null);

    onMounted(() => {
      const rawEl = resolveEl();
      if (!rawEl) return;

      customElements.whenDefined('gcds-table-slots').then(async () => {
        await (rawEl as any).componentOnReady?.();

        // Cache after ready — mountCells uses this ref, never calls componentOnReady
        resolvedEl.value = rawEl;

        rawEl.addEventListener('gcdsTableStateChange', handleStateChange);

        const visibleRows = await (rawEl as any).getVisibleRows();
        if (visibleRows?.length) {
          mountCells(visibleRows);
        }
      });
    });

    onBeforeUnmount(() => {
      const tableEl = resolveEl();
      tableEl?.removeEventListener('gcdsTableStateChange', handleStateChange);
      observer?.disconnect();
      observer = null;
      mountedContainers.value.forEach((container) =>
        unmountContainer(container)
      );
      mountedContainers.value.clear();
    });

    return () =>
      h(GcdsTableBase,
        {
        ref: tableRef,
        columns: wcColumns.value,
        data: props.data,
        filter: props.filter,
        filterValue: props.filterValue,
        pagination: props.pagination,
        paginationCurrentPage: props.paginationCurrentPage,
        paginationSize: props.paginationSize,
        paginationSizeOptions: props.paginationSizeOptions,
        sort: props.sort,
      },
    slots
  );
  },
});