# gcds-nav-link



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description       | Type      | Default     |
| ------------------- | --------- | ----------------- | --------- | ----------- |
| `current`           | `current` | Current page flag | `boolean` | `undefined` |
| `href` _(required)_ | `href`    | Link href         | `string`  | `undefined` |


## Events

| Event       | Description                             | Type                  |
| ----------- | --------------------------------------- | --------------------- |
| `gcdsBlur`  | Emitted when the link loses focus.      | `CustomEvent<void>`   |
| `gcdsClick` | Emitted when the link has been clicked. | `CustomEvent<string>` |
| `gcdsFocus` | Emitted when the link has focus.        | `CustomEvent<void>`   |


## Methods

### `focusLink() => Promise<void>`

Focus the link element

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | Slot for the navigation link content. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
