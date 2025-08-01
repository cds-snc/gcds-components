# gcds-label



<!-- Auto Generated Below -->


## Overview

Label for form fields, providing accessibility and context for users.

## Properties

| Property    | Attribute    | Description                                   | Type      | Default     |
| ----------- | ------------ | --------------------------------------------- | --------- | ----------- |
| `hideLabel` | `hide-label` | Specifies if the label is hidden or not.      | `boolean` | `undefined` |
| `label`     | `label`      | Form field label                              | `string`  | `undefined` |
| `labelFor`  | `label-for`  | Defines the label's for attribute.            | `string`  | `undefined` |
| `required`  | `required`   | Specifies if a form field is required or not. | `boolean` | `undefined` |


## Slots

| Slot | Description                 |
| ---- | --------------------------- |
|      | Slot for the label content. |


## Dependencies

### Used by

 - [gcds-checkboxes](../gcds-checkboxes)
 - [gcds-file-uploader](../gcds-file-uploader)
 - [gcds-input](../gcds-input)
 - [gcds-radios](../gcds-radios)
 - [gcds-search](../gcds-search)
 - [gcds-select](../gcds-select)
 - [gcds-textarea](../gcds-textarea)

### Graph
```mermaid
graph TD;
  gcds-checkboxes --> gcds-label
  gcds-file-uploader --> gcds-label
  gcds-input --> gcds-label
  gcds-radios --> gcds-label
  gcds-search --> gcds-label
  gcds-select --> gcds-label
  gcds-textarea --> gcds-label
  style gcds-label fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
