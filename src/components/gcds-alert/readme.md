# gcds-alert



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute           | Description                                              | Type                                                | Default     |
| --------------------------- | ------------------- | -------------------------------------------------------- | --------------------------------------------------- | ----------- |
| `alertHeading` _(required)_ | `alert-heading`     | Defines the alert heading.                               | `string`                                            | `undefined` |
| `alertRole`                 | `alert-role`        | Defines alert role.                                      | `"destructive" \| "info" \| "success" \| "warning"` | `'info'`    |
| `dismissHandler`            | --                  | Callback when the close button is clicked.               | `Function`                                          | `undefined` |
| `hideCloseBtn`              | `hide-close-btn`    | Defines if the alert's close button is displayed or not. | `boolean`                                           | `false`     |
| `maxContentWidth`           | `max-content-width` | Defines the max width of the alert content.              | `"fluid" \| "lg" \| "md" \| "sm" \| "xs"`           | `'lg'`      |
| `positionFixed`             | `position-fixed`    | Defines if the alert's position is fixed.                | `boolean`                                           | `true`      |


## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `gcdsDismiss` | Events      | `CustomEvent<void>` |


## Dependencies

### Depends on

- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-alert --> gcds-icon
  style gcds-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
