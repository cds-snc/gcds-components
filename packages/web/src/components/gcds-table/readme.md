# gcds-table



<!-- Auto Generated Below -->


## Overview

A table is a structured layout of related data in rows and columns.

## Properties

| Property                | Attribute                 | Description                                                 | Type                      | Default           |
| ----------------------- | ------------------------- | ----------------------------------------------------------- | ------------------------- | ----------------- |
| `columns`               | `columns`                 | Column definitions                                          | `TableColumn[] \| string` | `[]`              |
| `data`                  | `data`                    | Row data                                                    | `object[] \| string`      | `[]`              |
| `filter`                | `filter`                  | Enable global filter                                        | `boolean`                 | `false`           |
| `filterValue`           | `filter-value`            | Current filter string                                       | `string`                  | `''`              |
| `pagination`            | `pagination`              | Enable pagination                                           | `boolean`                 | `false`           |
| `paginationCurrentPage` | `pagination-current-page` | Current page index                                          | `number`                  | `1`               |
| `paginationSize`        | `pagination-size`         | Number of rows per page                                     | `number`                  | `10`              |
| `paginationSizeOptions` | `pagination-size-options` | Available page-size options. Use 0 to represent "All rows". | `number[] \| string`      | `[10, 25, 50, 0]` |
| `sort`                  | `sort`                    | Enable global column sorting (can be overridden per column) | `boolean`                 | `false`           |


## Events

| Event                  | Description | Type                                |
| ---------------------- | ----------- | ----------------------------------- |
| `gcdsTableStateChange` |             | `CustomEvent<GcdsTableStateChange>` |


## Methods

### `getVisibleRows() => Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>`



#### Returns

Type: `Promise<{ rowId: string; rowIndex: number; original: Record<string, unknown>; }[]>`




## Slots

| Slot             | Description                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `"caption"`      | Slot to give an accessible name to the table, so that assistive technologies can identify it and announce it.          |
| `"cell:<field>"` | Slot to assign HTML content to a table cell, where <field> corresponds to the `field` property of a column definition. |


## Dependencies

### Depends on

- [gcds-select](../gcds-select)
- [gcds-heading](../gcds-heading)
- [gcds-text](../gcds-text)
- [gcds-button](../gcds-button)
- [gcds-pagination](../gcds-pagination)
- [gcds-radios](../gcds-radios)
- [gcds-sr-only](../gcds-sr-only)
- [gcds-input](../gcds-input)
- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-table --> gcds-select
  gcds-table --> gcds-heading
  gcds-table --> gcds-text
  gcds-table --> gcds-button
  gcds-table --> gcds-pagination
  gcds-table --> gcds-radios
  gcds-table --> gcds-sr-only
  gcds-table --> gcds-input
  gcds-table --> gcds-icon
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  gcds-button --> gcds-icon
  gcds-pagination --> gcds-icon
  gcds-radios --> gcds-sr-only
  gcds-radios --> gcds-hint
  gcds-radios --> gcds-error-message
  gcds-radios --> gcds-label
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  style gcds-table fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
