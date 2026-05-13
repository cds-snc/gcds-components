import { computed, defineComponent, h, useAttrs } from 'vue';
import type { TableColumn } from '@gcds-core/components';

export const GcdsTableWithSlots = defineComponent({
  name: 'GcdsTable',
  inheritAttrs: false,
  props: {
    columns: {
      type: Array as () => TableColumn[],
      default: () => [],
    },
    data: {
      type: Array as () => Record<string, unknown>[],
      default: () => [],
    },
    filter: {
      type: Boolean,
      default: false,
    },
    filterValue: {
      type: String,
      default: '',
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    paginationCurrentPage: {
      type: Number,
      default: 1,
    },
    paginationSize: {
      type: Number,
      default: 10,
    },
    paginationSizeOptions: {
      type: Array as () => number[],
      default: () => [10, 25, 50, 0],
    },
    sort: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    const attrs = useAttrs();
    function hasSlot(field: string): boolean {
      return !!slots[field];
    }

    const wcColumns = computed(() =>
      props.columns.map(col => ({
        ...col,
        managed: hasSlot(col.field) ? true : undefined,
      })),
    );

    function getCellValue(
      row: Record<string, unknown>,
      field: string,
    ): unknown {
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
      column: TableColumn,
      rowIndex: number,
    ): string {
      return `cell-${getRowKey(row, rowIndex)}-${column.field}`;
    }

    return () => {
      const columnSlots = props.data.flatMap((row, rowIndex) =>
        props.columns
          .filter(col => hasSlot(col.field))
          .map(col =>
            h(
              'span',
              { slot: getSlotName(row, col, rowIndex) },
              slots[col.field]?.({
                row,
                rowIndex,
                column: col,
                value: getCellValue(row, col.field),
              }),
            ),
          ),
      );

      return h(
        'gcds-table',
        {
          ...attrs,
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
        [slots['caption']?.(), ...columnSlots, slots['default']?.()],
      );
    };
  },
});
