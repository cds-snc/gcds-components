# gcds-date-input



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute       | Description                                                     | Type      | Default     |
| -------------------- | --------------- | --------------------------------------------------------------- | --------- | ----------- |
| `disabled`           | `disabled`      | Specifies if the date input is disabled or not.                 | `boolean` | `false`     |
| `errorMessage`       | `error-message` | Error message displayed below the legend and above form fields. | `string`  | `undefined` |
| `hint`               | `hint`          | Hint displayed below the legend and above form fields.          | `string`  | `undefined` |
| `label` _(required)_ | `label`         | Form field label                                                | `string`  | `undefined` |
| `name` _(required)_  | `name`          | Name attribute for the date input.                              | `string`  | `undefined` |
| `required`           | `required`      | Specifies if a form field is required or not.                   | `boolean` | `false`     |


## Dependencies

### Depends on

- [gcds-fieldset](../gcds-fieldset)
- [gcds-select](../gcds-select)
- [gcds-input](../gcds-input)

### Graph
```mermaid
graph TD;
  gcds-date-input --> gcds-fieldset
  gcds-date-input --> gcds-select
  gcds-date-input --> gcds-input
  gcds-fieldset --> gcds-hint
  gcds-fieldset --> gcds-error-message
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  style gcds-date-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
