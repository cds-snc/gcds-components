# gcds-site-menu1



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                   | Type                                       | Default     |
| -------------------- | ----------- | ----------------------------- | ------------------------------------------ | ----------- |
| `alignment`          | `alignment` | Menu alignment                | `"center" \| "left" \| "right" \| "split"` | `'left'`    |
| `label` _(required)_ | `label`     | Label for navigation landmark | `string`                                   | `undefined` |
| `position`           | `position`  | Sticky navigation flag        | `"static" \| "sticky"`                     | `'static'`  |


## Methods

### `updateMenuItemQueue(el: any, includeElement?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `updateMenuSize(size: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [gcds-menu-group](../gcds-menu-group)

### Graph
```mermaid
graph TD;
  gcds-site-menu --> gcds-menu-group
  style gcds-site-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
