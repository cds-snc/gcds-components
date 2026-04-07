/** Table column definition
 * @interface TableColumn
 * @property {string} field - The key of the data object to display in this column.
 * @property {string} header - The text to display in the column header.
 * @property {'asc' | 'desc'} [sortDirection] - The current sort direction of the column on load.
 * @property {'start' | 'center' | 'end'} [align] - The alignment of the cell content.
 * @property {boolean} [sort] - Whether the column is sortable.
 * @property {(value: unknown, row: Record<string, unknown>) => any} [renderCell] - A function to customize cell rendering.
 * @property {boolean} [rowHeader] - Whether this column should be treated as a row header (for accessibility).
 */
interface TableColumn {
  field: string;
  header: string;
  sortDirection?: 'asc' | 'desc';
  align?: 'start' | 'center' | 'end';
  sort?: boolean;
  renderCell?: (value: unknown, row: Record<string, unknown>) => any;
  rowHeader?: boolean;
}

// ─── Render helpers ───────────────────────────────────────────────────────

const getSortIcon = column => {
  if (!column?.getCanSort()) return '';
  const sorted = column.getIsSorted();
  if (sorted === 'asc') return ' ▲';
  if (sorted === 'desc') return ' ▼';
  return ' ⇅';
};

export { TableColumn, getSortIcon };
