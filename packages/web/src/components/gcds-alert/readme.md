# gcds-alert



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute        | Description                                              | Type                                             | Default     |
| ---------------------- | ---------------- | -------------------------------------------------------- | ------------------------------------------------ | ----------- |
| `alertRole`            | `alert-role`     | Defines alert role.                                      | `"danger" \| "info" \| "success" \| "warning"`   | `'info'`    |
| `container`            | `container`      | Defines the max width of the alert content.              | `"full" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"` | `'full'`    |
| `heading` _(required)_ | `heading`        | Defines the alert heading.                               | `string`                                         | `undefined` |
| `hideCloseBtn`         | `hide-close-btn` | Defines if the alert's close button is displayed or not. | `boolean`                                        | `false`     |
| `hideRoleIcon`         | `hide-role-icon` | Defines if the alert's role icon is displayed or not.    | `boolean`                                        | `false`     |
| `isFixed`              | `is-fixed`       | Defines if the alert's position is fixed.                | `boolean`                                        | `false`     |


## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `gcdsDismiss` | Events      | `CustomEvent<void>` |


## Slots

| Slot | Description                             |
| ---- | --------------------------------------- |
|      | Slot for the main content of the alert. |


## Dependencies

### Depends on

- [gcds-container](../gcds-container)
- [gcds-icon](../gcds-icon)

### Graph
```mermaid
graph TD;
  gcds-alert --> gcds-container
  gcds-alert --> gcds-icon
  style gcds-alert fill:#26374a,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
