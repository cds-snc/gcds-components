# gcds-file-uploader

<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute       | Description                                                                 | Type                                                | Default     |
| ------------------------- | --------------- | --------------------------------------------------------------------------- | --------------------------------------------------- | ----------- |
| `accept`                  | `accept`        | Defines the file types the file uploader accepts.                           | `string`                                            | `undefined` |
| `disabled`                | `disabled`      | Specifies if a file uploader element is disabled or not.                    | `boolean`                                           | `false`     |
| `errorMessage`            | `error-message` | Error message for an invalid file uploader element.                         | `string`                                            | `undefined` |
| `hint`                    | `hint`          | Hint displayed below the label.                                             | `string`                                            | `undefined` |
| `label` _(required)_      | `label`         | Form field label.                                                           | `string`                                            | `undefined` |
| `multiple`                | `multiple`      | Boolean that specifies if the user is allowed to select more than one file. | `boolean`                                           | `undefined` |
| `name` _(required)_       | `name`          | Name attribute for file input element.                                      | `string`                                            | `undefined` |
| `required`                | `required`      | Specifies if a form field is required or not.                               | `boolean`                                           | `false`     |
| `uploaderId` _(required)_ | `uploader-id`   | Id attribute for a file uploader element.                                   | `string`                                            | `undefined` |
| `validateOn`              | `validate-on`   | Set event to call validator                                                 | `"blur" \| "other" \| "submit"`                     | `undefined` |
| `validator`               | --              | Array of validators                                                         | `(string \| ValidatorEntry \| Validator<string>)[]` | `undefined` |
| `value`                   | --              | Value for a file uploader element.                                          | `string[]`                                          | `[]`        |


## Events

| Event            | Description                                      | Type                  |
| ---------------- | ------------------------------------------------ | --------------------- |
| `gcdsBlur`       | Emitted when the uploader loses focus.           | `CustomEvent<void>`   |
| `gcdsChange`     | Emitted when the user has made a file selection. | `CustomEvent<any>`    |
| `gcdsError`      | Emitted when the input has a validation error.   | `CustomEvent<object>` |
| `gcdsFocus`      | Emitted when the uploader has focus.             | `CustomEvent<void>`   |
| `gcdsInput`      | Emitted when the user has uploaded a file.       | `CustomEvent<any>`    |
| `gcdsRemoveFile` | Remove file and update value.                    | `CustomEvent<any>`    |
| `gcdsValid`      | Emitted when the input has a validation error.   | `CustomEvent<object>` |


## Methods

### `validate() => Promise<void>`

Call any active validators

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [gcds-label](../gcds-label)
- [gcds-hint](../gcds-hint)
- [gcds-error-message](../gcds-error-message)
- [gcds-sr-only](../gcds-sr-only)
- [gcds-text](../gcds-text)
- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-file-uploader --> gcds-label
  gcds-file-uploader --> gcds-hint
  gcds-file-uploader --> gcds-error-message
  gcds-file-uploader --> gcds-sr-only
  gcds-file-uploader --> gcds-text
  gcds-file-uploader --> gcds-icon
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  style gcds-file-uploader fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
