# gcds-grid-col



<!-- Auto Generated Below -->


## Overview

A grid column is a single column in a grid layout, allowing for flexible content arrangement.

## Properties

| Property  | Attribute | Description                                                                                                                                                                           | Type                                                          | Default     |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------- |
| `desktop` | `desktop` | Optimize grid column size for desktop (1024px and above). Desktop grid column sizes are based on a 12 column grid.                                                                    | `1 \| 10 \| 11 \| 12 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9` | `undefined` |
| `tablet`  | `tablet`  | Optimize grid column size for tablet (768px - 1023px). Tablet grid column sizes are based on a 6 column grid. The tablet size will also be used for desktop, if desktop is undefined. | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                                  | `6`         |
| `tag`     | `tag`     | Set tag for grid column                                                                                                                                                               | `string`                                                      | `'div'`     |


## Slots

| Slot        | Description                                    |
| ----------- | ---------------------------------------------- |
| `"default"` | Slot for the main content of the grid coloumn. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
