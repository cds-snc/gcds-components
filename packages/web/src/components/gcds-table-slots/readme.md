# gcds-table-slots



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                 | Type                           | Default           |
| ----------------------- | ------------------------- | ----------------------------------------------------------- | ------------------------------ | ----------------- |
| `columns`               | `columns`                 | Column definitions                                          | `TableColumnSlots[] \| string` | `[]`              |
| `data`                  | `data`                    | Row data                                                    | `object[] \| string`           | `[]`              |
| `filter`                | `filter`                  | Enable global filter                                        | `boolean`                      | `false`           |
| `filterValue`           | `filter-value`            | Current filter string                                       | `string`                       | `''`              |
| `pagination`            | `pagination`              | Enable pagination                                           | `boolean`                      | `false`           |
| `paginationCurrentPage` | `pagination-current-page` | Current page index                                          | `number`                       | `1`               |
| `paginationSize`        | `pagination-size`         | Number of rows per page                                     | `number`                       | `10`              |
| `paginationSizeOptions` | `pagination-size-options` | Available page-size options. Use 0 to represent "All rows". | `number[] \| string`           | `[10, 25, 50, 0]` |
| `sort`                  | `sort`                    | Enable global column sorting (can be overridden per column) | `boolean`                      | `false`           |


## Events

| Event                  | Description | Type                                |
| ---------------------- | ----------- | ----------------------------------- |
| `gcdsTableStateChange` |             | `CustomEvent<GcdsTableStateChange>` |


## Methods

### `getVisibleRows() => Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>`



#### Returns

Type: `Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>`




## Dependencies

### Depends on

- [gcds-select](../gcds-select)
- [gcds-pagination](../gcds-pagination)
- [gcds-radios](../gcds-radios)
- [gcds-button](../gcds-button)
- [gcds-sr-only](../gcds-sr-only)
- [gcds-heading](../gcds-heading)
- [gcds-input](../gcds-input)
- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-table-slots --> gcds-select
  gcds-table-slots --> gcds-pagination
  gcds-table-slots --> gcds-radios
  gcds-table-slots --> gcds-button
  gcds-table-slots --> gcds-sr-only
  gcds-table-slots --> gcds-heading
  gcds-table-slots --> gcds-input
  gcds-table-slots --> gcds-icon
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  gcds-pagination --> gcds-icon
  gcds-radios --> gcds-sr-only
  gcds-radios --> gcds-hint
  gcds-radios --> gcds-error-message
  gcds-radios --> gcds-label
  gcds-button --> gcds-icon
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  style gcds-table-slots fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
