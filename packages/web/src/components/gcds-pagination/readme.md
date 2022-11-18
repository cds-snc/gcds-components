# gcds-pagination



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute        | Description                                                          | Type                 | Default     |
| -------------------- | ---------------- | -------------------------------------------------------------------- | -------------------- | ----------- |
| `currentPage`        | `current-page`   | List type - Current page number                                      | `number`             | `undefined` |
| `label` _(required)_ | `label`          | Navigation element label                                             | `string`             | `undefined` |
| `nextHref`           | `next-href`      | Simple type - href for next link                                     | `string`             | `undefined` |
| `nextLabel`          | `next-label`     | Simple type - lable for next link                                    | `string`             | `undefined` |
| `onPageChange`       | `on-page-change` | Function to fire when pageChange event is called                     | `string`             | `undefined` |
| `previousHref`       | `previous-href`  | Simple type - href for previous link                                 | `string`             | `undefined` |
| `previousLabel`      | `previous-label` | Simple type - label for previous link                                | `string`             | `undefined` |
| `totalPages`         | `total-pages`    | List type - Total number of pages                                    | `number`             | `undefined` |
| `type`               | `type`           | Navigation element label                                             | `"list" \| "simple"` | `"list"`    |
| `url`                | --               | List type - URL object to create query strings and fragment on links | `URL`                | `undefined` |


## Events

| Event        | Description                       | Type                |
| ------------ | --------------------------------- | ------------------- |
| `pageChange` | Update value based on user input. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
