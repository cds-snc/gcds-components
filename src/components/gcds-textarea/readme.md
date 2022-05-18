# gcds-textarea



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                            | Type      | Default     |
| ------------------------ | -------------------------- | ---------------------------------------------------------------------- | --------- | ----------- |
| `cols`                   | `cols`                     | Defines width for textarea cols (the min-width for textarea's is 50%). | `number`  | `undefined` |
| `disabled`               | `disabled`                 | Specifies if a textarea element is disabled or not.                    | `boolean` | `false`     |
| `errorMessage`           | `error-message`            | Error message for an invalid textarea element.                         | `string`  | `undefined` |
| `hideLabel`              | `hide-label`               | Specifies if the label is hidden or not.                               | `boolean` | `undefined` |
| `hint`                   | `hint`                     | Hint displayed below the label and above the textarea field.           | `string`  | `undefined` |
| `label`                  | `label`                    | Form field label                                                       | `string`  | `undefined` |
| `required`               | `required`                 | Specifies if a form field is required or not.                          | `boolean` | `undefined` |
| `rows`                   | `rows`                     | Default value for textarea rows.                                       | `number`  | `5`         |
| `textareaCharacterCount` | `textarea-character-count` | Sets the maxlength attribute for the textarea element.                 | `number`  | `undefined` |
| `textareaId`             | `textarea-id`              | Id + name attribute for a textarea element.                            | `string`  | `undefined` |
| `value`                  | `value`                    | Default value for an input element.                                    | `string`  | `undefined` |


## Events

| Event        | Description                            | Type                |
| ------------ | -------------------------------------- | ------------------- |
| `gcdsBlur`   | Emitted when the textarea loses focus. | `CustomEvent<void>` |
| `gcdsChange` | Update value based on user input.      | `CustomEvent<any>`  |
| `gcdsFocus`  | Emitted when the textarea has focus.   | `CustomEvent<void>` |


## Dependencies

### Depends on

- [gcds-label](../gcds-label)
- [gcds-hint](../gcds-hint)
- [gcds-error-message](../gcds-error-message)

### Graph
```mermaid
graph TD;
  gcds-textarea --> gcds-label
  gcds-textarea --> gcds-hint
  gcds-textarea --> gcds-error-message
  style gcds-textarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
