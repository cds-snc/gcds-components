# gcds-pagination



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description                                                             | Type                 | Default     |
| -------------------- | ---------------- | ----------------------------------------------------------------------- | -------------------- | ----------- |
| `currentPage`        | `current-page`   | List display - Current page number                                      | `number`             | `undefined` |
| `display`            | `display`        | Navigation element label                                                | `"list" \| "simple"` | `"list"`    |
| `label` _(required)_ | `label`          | Navigation element label                                                | `string`             | `undefined` |
| `nextHref`           | `next-href`      | Simple display - href for next link                                     | `string`             | `undefined` |
| `nextLabel`          | `next-label`     | Simple display - lable for next link                                    | `string`             | `undefined` |
| `pageChangeHandler`  | --               | Function to fire when pageChange event is called                        | `Function`           | `undefined` |
| `previousHref`       | `previous-href`  | Simple display - href for previous link                                 | `string`             | `undefined` |
| `previousLabel`      | `previous-label` | Simple display - label for previous link                                | `string`             | `undefined` |
| `totalPages`         | `total-pages`    | List display - Total number of pages                                    | `number`             | `undefined` |
| `url`                | --               | List display - URL object to create query strings and fragment on links | `Object`             | `undefined` |


## Events

| Event            | Description                       | Type                |
| ---------------- | --------------------------------- | ------------------- |
| `gcdsPageChange` | Update value based on user input. | `CustomEvent<void>` |


## Dependencies

### Depends on

- [gcds-icon](../gcds-icon)
- [gcds-menu-group](../gcds-menu-group)

### Graph
```mermaid
graph TD;
  gcds-pagination --> gcds-icon
  gcds-pagination --> gcds-menu-group
  gcds-menu-group --> gcds-menu-group
  style gcds-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
