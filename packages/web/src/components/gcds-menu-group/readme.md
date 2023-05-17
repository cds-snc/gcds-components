# gcds-menu-group



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                      | Type      | Default     |
| ---------------------- | --------- | -------------------------------- | --------- | ----------- |
| `heading` _(required)_ | `heading` | heading for the menu group       | `string`  | `undefined` |
| `open`                 | `open`    | Has the menu group been expanded | `boolean` | `false`     |


## Events

| Event       | Description                        | Type                |
| ----------- | ---------------------------------- | ------------------- |
| `gcdsClick` | Emitted when the button has focus. | `CustomEvent<void>` |


## Methods

### `focusTrigger() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggleMenu() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [gcds-alert](../gcds-alert)
 - [gcds-breadcrumbs](../gcds-breadcrumbs)
 - [gcds-button](../gcds-button)
 - [gcds-checkbox](../gcds-checkbox)
 - [gcds-date-modified](../gcds-date-modified)
 - [gcds-error-summary](../gcds-error-summary)
 - [gcds-fieldset](../gcds-fieldset)
 - [gcds-file-uploader](../gcds-file-uploader)
 - [gcds-footer](../gcds-footer)
 - [gcds-header](../gcds-header)
 - [gcds-input](../gcds-input)
 - [gcds-label](../gcds-label)
 - [gcds-lang-toggle](../gcds-lang-toggle)
 - [gcds-menu-group](.)
 - [gcds-menu-link](../gcds-menu-link)
 - [gcds-pagination](../gcds-pagination)
 - [gcds-radio](../gcds-radio)
 - [gcds-select](../gcds-select)
 - [gcds-sidebar-menu](../gcds-sidebar-menu)
 - [gcds-signature](../gcds-signature)
 - [gcds-site-menu](../gcds-site-menu)
 - [gcds-stepper](../gcds-stepper)
 - [gcds-textarea](../gcds-textarea)
 - [gcds-verify-banner](../gcds-verify-banner)

### Depends on

- [gcds-menu-group](.)

### Graph
```mermaid
graph TD;
  gcds-menu-group --> gcds-menu-group
  gcds-alert --> gcds-menu-group
  gcds-breadcrumbs --> gcds-menu-group
  gcds-button --> gcds-menu-group
  gcds-checkbox --> gcds-menu-group
  gcds-date-modified --> gcds-menu-group
  gcds-error-summary --> gcds-menu-group
  gcds-fieldset --> gcds-menu-group
  gcds-file-uploader --> gcds-menu-group
  gcds-footer --> gcds-menu-group
  gcds-header --> gcds-menu-group
  gcds-input --> gcds-menu-group
  gcds-label --> gcds-menu-group
  gcds-lang-toggle --> gcds-menu-group
  gcds-menu-link --> gcds-menu-group
  gcds-pagination --> gcds-menu-group
  gcds-radio --> gcds-menu-group
  gcds-select --> gcds-menu-group
  gcds-sidebar-menu --> gcds-menu-group
  gcds-signature --> gcds-menu-group
  gcds-site-menu --> gcds-menu-group
  gcds-stepper --> gcds-menu-group
  gcds-textarea --> gcds-menu-group
  gcds-verify-banner --> gcds-menu-group
  style gcds-menu-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
