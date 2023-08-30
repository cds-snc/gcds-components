# gcds-grid



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute         | Description                                                                                                                 | Type                                                                                                                                         | Default     |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `alignContent`         | `align-content`   | If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                           | `undefined` |
| `alignItems`           | `align-items`     | Aligns grid items along the block (column) axis                                                                             | `"baseline" \| "center" \| "end" \| "start" \| "stretch"`                                                                                    | `undefined` |
| `centered`             | `centered`        | Defines if grid container is centered or not                                                                                | `boolean`                                                                                                                                    | `false`     |
| `columns` _(required)_ | `columns`         | Defines the columns of the grid Option to set different layouts for desktop \| tablet \| default (includes mobile)          | `string`                                                                                                                                     | `undefined` |
| `columnsDesktop`       | `columns-desktop` |                                                                                                                             | `string`                                                                                                                                     | `undefined` |
| `columnsTablet`        | `columns-tablet`  |                                                                                                                             | `string`                                                                                                                                     | `undefined` |
| `container`            | `container`       | Defines grid container size                                                                                                 | `"full" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"`                                                                                             | `undefined` |
| `display`              | `display`         | Defines element as grid or inline-grid container                                                                            | `"grid" \| "inline-grid"`                                                                                                                    | `'grid'`    |
| `gap`                  | `gap`             | Shorthand for column-gap + row-gap Specifies the width of the gutters between columns and rows                              | `"0" \| "100" \| "1000" \| "150" \| "200" \| "250" \| "300" \| "400" \| "450" \| "50" \| "500" \| "550" \| "600" \| "700" \| "800" \| "900"` | `undefined` |
| `justifyContent`       | `justify-content` | If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis   | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                           | `undefined` |
| `justifyItems`         | `justify-items`   | Aligns grid items along the inline (row) axis                                                                               | `"center" \| "end" \| "start" \| "stretch"`                                                                                                  | `undefined` |
| `placeContent`         | `place-content`   | Sets both the align-content + justify-content properties                                                                    | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                           | `undefined` |
| `placeItems`           | `place-items`     | Sets both the align-items + justify-items properties                                                                        | `"center" \| "end" \| "start" \| "stretch"`                                                                                                  | `undefined` |
| `tag`                  | `tag`             | Set tag for grid container                                                                                                  | `string`                                                                                                                                     | `'div'`     |


## Dependencies

### Used by

 - [gcds-verify-banner](../gcds-verify-banner)

### Depends on

- [gcds-container](../gcds-container)

### Graph
```mermaid
graph TD;
  gcds-grid --> gcds-container
  gcds-verify-banner --> gcds-grid
  style gcds-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
