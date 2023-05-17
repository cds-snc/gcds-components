# gcds-header



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute            | Description                                                                         | Type                  | Default     |
| ------------------------- | -------------------- | ----------------------------------------------------------------------------------- | --------------------- | ----------- |
| `langHref` _(required)_   | `lang-href`          | GcdsLangToggle - The href attribute specifies the URL of the opposite language page | `string`              | `undefined` |
| `signatureHasLink`        | `signature-has-link` | GcdsSignature - GCDS signature links to Canada.ca                                   | `boolean`             | `true`      |
| `signatureVariant`        | `signature-variant`  | GcdsSignature - The variant of the Government of Canada signature                   | `"colour" \| "white"` | `undefined` |
| `skipToHref` _(required)_ | `skip-to-href`       | Top navigation - Skip to content href                                               | `string`              | `undefined` |


## Dependencies

### Depends on

- [gcds-button](../gcds-button)
- [gcds-lang-toggle](../gcds-lang-toggle)
- [gcds-signature](../gcds-signature)
- [gcds-menu-group](../gcds-menu-group)

### Graph
```mermaid
graph TD;
  gcds-header --> gcds-button
  gcds-header --> gcds-lang-toggle
  gcds-header --> gcds-signature
  gcds-header --> gcds-menu-group
  gcds-button --> gcds-icon
  gcds-button --> gcds-menu-group
  gcds-menu-group --> gcds-menu-group
  gcds-lang-toggle --> gcds-menu-group
  gcds-signature --> gcds-menu-group
  style gcds-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
