# gcds-lang-toggle

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description                                                        | Type     | Default     |
| ------------------- | --------- | ------------------------------------------------------------------ | -------- | ----------- |
| `href` _(required)_ | `href`    | The href attribute specifies the URL of the opposite language page | `string` | `undefined` |


## Dependencies

### Used by

 - [gcds-header](../gcds-header)

### Depends on

- [gcds-sr-only](../gcds-sr-only)
- [gcds-link](../gcds-link)

### Graph
```mermaid
graph TD;
  gcds-lang-toggle --> gcds-sr-only
  gcds-lang-toggle --> gcds-link
  gcds-link --> gcds-icon
  gcds-header --> gcds-lang-toggle
  style gcds-lang-toggle fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
