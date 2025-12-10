# gcds-grid



<!-- Auto Generated Below -->


## Overview

A grid is a responsive, flexible column layout to position elements on a page.

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                                                 | Type                                                                                                                                           | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `alignContent`   | `align-content`    | If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis                                                                                                                 | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                             | `undefined` |
| `alignItems`     | `align-items`      | Aligns grid items along the block (column) axis                                                                                                                                                                                             | `"baseline" \| "center" \| "end" \| "start" \| "stretch"`                                                                                      | `undefined` |
| `centered`       | `centered`         | Defines if grid container is centered or not                                                                                                                                                                                                | `boolean`                                                                                                                                      | `false`     |
| `columns`        | `columns`          | Defines the default number of grid columns for all viewports if columns-tablet and columns-desktop are not defined. Option to set different layouts for desktop with columns-desktop and for tablet with columns-tablet.                    | `string`                                                                                                                                       | `undefined` |
| `columnsDesktop` | `columns-desktop`  | Provides option to set a different number of grid columns for desktop screens.                                                                                                                                                              | `string`                                                                                                                                       | `undefined` |
| `columnsTablet`  | `columns-tablet`   | Provides option to set a different number of grid columns for tablet screens. If columns-desktop is not defined, columns-tablet will be used to define the number of columns for desktop as well.                                           | `string`                                                                                                                                       | `undefined` |
| `container`      | `container`        | Defines grid container size                                                                                                                                                                                                                 | `"full" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"`                                                                                               | `undefined` |
| `display`        | `display`          | Defines element as grid or inline-grid container                                                                                                                                                                                            | `"grid" \| "inline-grid"`                                                                                                                      | `'grid'`    |
| `equalRowHeight` | `equal-row-height` | Sets all grid items to have an equal height, based on the tallest item.                                                                                                                                                                     | `boolean`                                                                                                                                      | `false`     |
| `gap`            | `gap`              | Defines the horizontal and vertical spacing between items in a grid container for all viewports if gap-tablet and gap-desktop are not defined. Option to set different spacing for desktop with gap-desktop and for tablet with gap-tablet. | `"150" \| "175" \| "200" \| "225" \| "250" \| "300" \| "350" \| "400" \| "450" \| "500" \| "550" \| "600" \| "650" \| "700" \| "750" \| "800"` | `'300'`     |
| `gapDesktop`     | `gap-desktop`      | Provides option to set horizontal and vertical spacing between items in a grid container for desktop screens.                                                                                                                               | `"150" \| "175" \| "200" \| "225" \| "250" \| "300" \| "350" \| "400" \| "450" \| "500" \| "550" \| "600" \| "650" \| "700" \| "750" \| "800"` | `undefined` |
| `gapTablet`      | `gap-tablet`       | Provides option to set horizontal and vertical spacing between items in a grid container for tablet screens. If gap-desktop is not defined, gap-tablet will be used to define the spacing for desktop screens as well.                      | `"150" \| "175" \| "200" \| "225" \| "250" \| "300" \| "350" \| "400" \| "450" \| "500" \| "550" \| "600" \| "650" \| "700" \| "750" \| "800"` | `undefined` |
| `justifyContent` | `justify-content`  | If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis                                                                                                                   | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                             | `undefined` |
| `justifyItems`   | `justify-items`    | Aligns grid items along the inline (row) axis                                                                                                                                                                                               | `"center" \| "end" \| "start" \| "stretch"`                                                                                                    | `undefined` |
| `placeContent`   | `place-content`    | Sets both the align-content + justify-content properties                                                                                                                                                                                    | `"center" \| "end" \| "space-around" \| "space-between" \| "space-evenly" \| "start" \| "stretch"`                                             | `undefined` |
| `placeItems`     | `place-items`      | Sets both the align-items + justify-items properties                                                                                                                                                                                        | `"center" \| "end" \| "start" \| "stretch"`                                                                                                    | `undefined` |
| `tag`            | `tag`              | Set tag for grid container                                                                                                                                                                                                                  | `"article" \| "aside" \| "div" \| "dl" \| "main" \| "nav" \| "ol" \| "section" \| "ul"`                                                        | `'div'`     |


## Slots

| Slot        | Description                            |
| ----------- | -------------------------------------- |
| `"default"` | Slot for the main content of the grid. |


## Dependencies

### Depends on

- [gcds-container](../gcds-container)

### Graph
```mermaid
graph TD;
  gcds-grid --> gcds-container
  style gcds-grid fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
