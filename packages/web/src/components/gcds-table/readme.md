# gcds-table



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                                 | Type                      | Default           |
| ----------------------- | ------------------------- | ----------------------------------------------------------- | ------------------------- | ----------------- |
| `caption`               | `caption`                 | Table caption                                               | `string`                  | `undefined`       |
| `columns`               | `columns`                 | Column definitions                                          | `TableColumn[] \| string` | `[]`              |
| `data`                  | `data`                    | Row data                                                    | `object[] \| string`      | `[]`              |
| `filter`                | `filter`                  | Enable global filter                                        | `boolean`                 | `false`           |
| `filterValue`           | `filter-value`            | Current filter string                                       | `string`                  | `''`              |
| `pagination`            | `pagination`              | Enable pagination                                           | `boolean`                 | `false`           |
| `paginationCurrentPage` | `pagination-current-page` | Current page index                                          | `number`                  | `1`               |
| `paginationSize`        | `pagination-size`         | Number of rows per page                                     | `number`                  | `10`              |
| `paginationSizeOptions` | `pagination-size-options` | Available page-size options. Use 0 to represent "All rows". | `number[] \| string`      | `[10, 25, 50, 0]` |
| `sort`                  | `sort`                    | Enable global column sorting (can be overridden per column) | `boolean`                 | `false`           |


## Dependencies

### Depends on

- [gcds-radios](../gcds-radios)
- [gcds-button](../gcds-button)
- [gcds-heading](../gcds-heading)
- [gcds-input](../gcds-input)
- [gcds-text](../gcds-text)
- [gcds-select](../gcds-select)
- [gcds-pagination](../gcds-pagination)

### Graph
```mermaid
graph TD;
  gcds-table --> gcds-radios
  gcds-table --> gcds-button
  gcds-table --> gcds-heading
  gcds-table --> gcds-input
  gcds-table --> gcds-text
  gcds-table --> gcds-select
  gcds-table --> gcds-pagination
  gcds-radios --> gcds-sr-only
  gcds-radios --> gcds-hint
  gcds-radios --> gcds-error-message
  gcds-radios --> gcds-label
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  gcds-button --> gcds-icon
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-pagination --> gcds-icon
  style gcds-table fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
