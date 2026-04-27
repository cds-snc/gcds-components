# gcds-pagination



<!-- Auto Generated Below -->


## Overview

Pagination is a division of content into multiple linked pages.

## Properties

| Property             | Attribute        | Description                                                             | Type                 | Default     |
| -------------------- | ---------------- | ----------------------------------------------------------------------- | -------------------- | ----------- |
| `currentPage`        | `current-page`   | List display - Current page number                                      | `number`             | `undefined` |
| `display`            | `display`        | Determines the pagination display style.                                | `"list" \| "simple"` | `'list'`    |
| `label` _(required)_ | `label`          | Navigation element label                                                | `string`             | `undefined` |
| `nextHref`           | `next-href`      | Simple display - href for next link                                     | `string`             | `undefined` |
| `nextLabel`          | `next-label`     | Simple display - lable for next link                                    | `string`             | `undefined` |
| `previousHref`       | `previous-href`  | Simple display - href for previous link                                 | `string`             | `undefined` |
| `previousLabel`      | `previous-label` | Simple display - label for previous link                                | `string`             | `undefined` |
| `totalPages`         | `total-pages`    | List display - Total number of pages                                    | `number`             | `undefined` |
| `url`                | `url`            | List display - URL object to create query strings and fragment on links | `object \| string`   | `undefined` |


## Events

| Event       | Description                                                                                                                                                   | Type                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `gcdsBlur`  | Emitted when the link loses focus.                                                                                                                            | `CustomEvent<void>`             |
| `gcdsClick` | Emitted when the link has been clicked. Contains the href in event detail when using simple display, or an object with page and href when using list display. | `CustomEvent<object \| string>` |
| `gcdsFocus` | Emitted when the link has focus.                                                                                                                              | `CustomEvent<void>`             |


## Dependencies

### Used by

 - [gcds-table](../gcds-table)
 - [gcds-table-slots](../gcds-table-slots)

### Depends on

- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-pagination --> gcds-icon
  gcds-table --> gcds-pagination
  gcds-table-slots --> gcds-pagination
  style gcds-pagination fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
