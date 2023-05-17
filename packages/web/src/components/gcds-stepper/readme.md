# gcds-stepper



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute      | Description                        | Type     | Default     |
| -------------------------- | -------------- | ---------------------------------- | -------- | ----------- |
| `currentStep` _(required)_ | `current-step` | Defines the current step.          | `number` | `undefined` |
| `totalSteps` _(required)_  | `total-steps`  | Defines the total amount of steps. | `number` | `undefined` |


## Dependencies

### Depends on

- [gcds-menu-group](../gcds-menu-group)

### Graph
```mermaid
graph TD;
  gcds-stepper --> gcds-menu-group
  gcds-menu-group --> gcds-menu-group
  style gcds-stepper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
