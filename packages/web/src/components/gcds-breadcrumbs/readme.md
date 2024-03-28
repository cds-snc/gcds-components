# gcds-breadcrumbs



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description                                | Type     | Default     |
| ------------------- | --------- | ------------------------------------------ | -------- | ----------- |
| `href` _(required)_ | `href`    | Specifies the href of the breadcrumb item. | `string` | `undefined` |


## Dependencies

### Used by

 - [gcds-breadcrumbs](.)

### Depends on

- [gcds-link](../gcds-link)

### Graph
```mermaid
graph TD;
  gcds-breadcrumbs-item --> gcds-link
  gcds-link --> gcds-icon
  gcds-breadcrumbs --> gcds-breadcrumbs-item
  style gcds-breadcrumbs-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
