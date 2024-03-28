# gcds-text



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                         | Type                                                                                                                                         | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `characterLimit` | `character-limit` | Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length. | `boolean`                                                                                                                                    | `true`      |
| `display`        | `display`         | Specifies the display behaviour of the text.                                                                        | `"block" \| "flex" \| "inline" \| "inline-block" \| "inline-flex" \| "none"`                                                                 | `'block'`   |
| `marginBottom`   | `margin-bottom`   | Adds margin below the text.                                                                                         | `"0" \| "100" \| "1000" \| "150" \| "200" \| "250" \| "300" \| "400" \| "450" \| "50" \| "500" \| "550" \| "600" \| "700" \| "800" \| "900"` | `'400'`     |
| `marginTop`      | `margin-top`      | Adds margin above the text.                                                                                         | `"0" \| "100" \| "1000" \| "150" \| "200" \| "250" \| "300" \| "400" \| "450" \| "50" \| "500" \| "550" \| "600" \| "700" \| "800" \| "900"` | `'0'`       |
| `size`           | `size`            | Sets the appropriate HTML tags for the selected size.                                                               | `"body" \| "caption"`                                                                                                                        | `'body'`    |
| `textRole`       | `text-role`       | Sets the main style of the text.                                                                                    | `"light" \| "primary" \| "secondary"`                                                                                                        | `'primary'` |


## Shadow Parts

| Part     | Description |
| -------- | ----------- |
| `"text"` |             |


## Dependencies

### Used by

 - [gcds-card](../gcds-card)
 - [gcds-date-modified](../gcds-date-modified)
 - [gcds-error-message](../gcds-error-message)
 - [gcds-file-uploader](../gcds-file-uploader)
 - [gcds-hint](../gcds-hint)
 - [gcds-textarea](../gcds-textarea)

### Graph
```mermaid
graph TD;
  gcds-card --> gcds-text
  gcds-date-modified --> gcds-text
  gcds-error-message --> gcds-text
  gcds-file-uploader --> gcds-text
  gcds-hint --> gcds-text
  gcds-textarea --> gcds-text
  style gcds-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
