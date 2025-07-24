# gcds-error-summary



<!-- Auto Generated Below -->


## Overview

An error summary is a list of user errors in a form.

## Properties

| Property     | Attribute     | Description                                                                              | Type               | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------- | ------------------ | ----------- |
| `errorLinks` | `error-links` | Object of list items for error list. Format: { link-href: link-label }                   | `object \| string` | `undefined` |
| `heading`    | `heading`     | Set error summary heading                                                                | `string`           | `undefined` |
| `listen`     | `listen`      | Specifies if the error summary should listen for GcdsError event to generate error list. | `boolean`          | `true`      |


## Events

| Event       | Description                             | Type                  |
| ----------- | --------------------------------------- | --------------------- |
| `gcdsBlur`  | Emitted when the link loses focus.      | `CustomEvent<void>`   |
| `gcdsClick` | Emitted when the link has been clicked. | `CustomEvent<string>` |
| `gcdsFocus` | Emitted when the link has focus.        | `CustomEvent<void>`   |


## Dependencies

### Depends on

- [gcds-heading](../gcds-heading)
- [gcds-link](../gcds-link)

### Graph
```mermaid
graph TD;
  gcds-error-summary --> gcds-heading
  gcds-error-summary --> gcds-link
  gcds-link --> gcds-icon
  style gcds-error-summary fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
