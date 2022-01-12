# gcds-button

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                        | Type                              | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `disabled` | `disabled` | Disable button if 'true'                                                                                                                           | `boolean`                         | `false`     |
| `download` | `download` | The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink | `string`                          | `undefined` |
| `href`     | `href`     | The href attribute specifies the URL of the page the link goes to                                                                                  | `string`                          | `undefined` |
| `label`    | `label`    | The button label                                                                                                                                   | `string`                          | `undefined` |
| `rel`      | `rel`      | The rel attribute specifies the relationship between the current document and the linked document                                                  | `string`                          | `undefined` |
| `target`   | `target`   | The target attribute specifies where to open the linked document                                                                                   | `string`                          | `undefined` |
| `type`     | `type`     | Set button types                                                                                                                                   | `"button" \| "reset" \| "submit"` | `undefined` |


## Events

| Event       | Description                          | Type                |
| ----------- | ------------------------------------ | ------------------- |
| `gcdsBlur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `gcdsFocus` | Emitted when the button has focus.   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
