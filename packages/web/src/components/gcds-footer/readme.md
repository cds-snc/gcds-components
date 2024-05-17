# gcds-footer

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                 | Type                  | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------- | --------------------- | ----------- |
| `contextualHeading` | `contextual-heading` | Heading for contextual slot and nav landmark                                | `string`              | `undefined` |
| `contextualLinks`   | `contextual-links`   | Object of list items for contextual band. Format: { link-label: link-href } | `object \| string`    | `undefined` |
| `display`           | `display`            | Display mode of the footer                                                  | `"compact" \| "full"` | `'compact'` |
| `subLinks`          | `sub-links`          | Object of list items for sub-footer. Format: { link-label: link-href }      | `object \| string`    | `undefined` |
| `wordmarkVariant`   | `wordmark-variant`   | GcdsSignature - The variant of the Government of Canada wordmark            | `"colour" \| "white"` | `undefined` |


## Dependencies

### Depends on

- [gcds-signature](../gcds-signature)
- [gcds-sr-only](../gcds-sr-only)
- [gcds-link](../gcds-link)

### Graph
```mermaid
graph TD;
  gcds-footer --> gcds-signature
  gcds-footer --> gcds-sr-only
  gcds-footer --> gcds-link
  gcds-link --> gcds-icon
  style gcds-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
