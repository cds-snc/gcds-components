# gcds-sr-only



<!-- Auto Generated Below -->


## Overview

The screenreader-only component is text information only accessible with assistive technologies.

## Properties

| Property | Attribute | Description                                    | Type                                                            | Default |
| -------- | --------- | ---------------------------------------------- | --------------------------------------------------------------- | ------- |
| `tag`    | `tag`     | Sets the appropriate HTML tag for the content. | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"` | `'p'`   |


## Slots

| Slot        | Description                             |
| ----------- | --------------------------------------- |
| `"default"` | Slot for the hidden accessible content. |


## Dependencies

### Used by

 - [gcds-card](../gcds-card)
 - [gcds-checkboxes](../gcds-checkboxes)
 - [gcds-file-uploader](../gcds-file-uploader)
 - [gcds-footer](../gcds-footer)
 - [gcds-lang-toggle](../gcds-lang-toggle)
 - [gcds-notice](../gcds-notice)
 - [gcds-radios](../gcds-radios)
 - [gcds-search](../gcds-search)
 - [gcds-stepper](../gcds-stepper)
 - [gcds-topic-menu](../gcds-topic-menu)

### Graph
```mermaid
graph TD;
  gcds-card --> gcds-sr-only
  gcds-checkboxes --> gcds-sr-only
  gcds-file-uploader --> gcds-sr-only
  gcds-footer --> gcds-sr-only
  gcds-lang-toggle --> gcds-sr-only
  gcds-notice --> gcds-sr-only
  gcds-radios --> gcds-sr-only
  gcds-search --> gcds-sr-only
  gcds-stepper --> gcds-sr-only
  gcds-topic-menu --> gcds-sr-only
  style gcds-sr-only fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
