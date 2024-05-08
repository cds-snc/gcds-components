# gcds-details



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute       | Description                                             | Type      | Default     |
| --------------------------- | --------------- | ------------------------------------------------------- | --------- | ----------- |
| `detailsTitle` _(required)_ | `details-title` | The details title summarizes the panel content.         | `string`  | `undefined` |
| `open`                      | `open`          | Defines if the details panel is open by default or not. | `boolean` | `false`     |


## Events

| Event       | Description                                | Type                |
| ----------- | ------------------------------------------ | ------------------- |
| `gcdsBlur`  | Emitted when the details loses focus.      | `CustomEvent<void>` |
| `gcdsClick` | Emitted when the details has been clicked. | `CustomEvent<void>` |
| `gcdsFocus` | Emitted when the details has focus.        | `CustomEvent<void>` |


## Methods

### `toggle() => Promise<void>`

Methods

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
