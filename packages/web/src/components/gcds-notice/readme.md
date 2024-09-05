# gcds-notice



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute      | Description               | Type                                           | Default     |
| -------------------------- | -------------- | ------------------------- | ---------------------------------------------- | ----------- |
| `noticeTitle` _(required)_ | `notice-title` | Defines the notice title. | `string`                                       | `undefined` |
| `type` _(required)_        | `type`         | Defines notice role.      | `"danger" \| "info" \| "success" \| "warning"` | `undefined` |


## Dependencies

### Depends on

- [gcds-heading](../gcds-heading)
- [gcds-sr-only](../gcds-sr-only)

### Graph
```mermaid
graph TD;
  gcds-notice --> gcds-heading
  gcds-notice --> gcds-sr-only
  style gcds-notice fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
