# Figma vs Code Components Comparison

Generated on: 2025-10-08T17:07:26.723Z

## Summary
- **Figma Components**: 51
- **Code Components**: 42
- **Matching Components**: 28
- **Figma Only**: 23
- **Code Only**: 14


## Figma Only Components
- Slide-up menu
- Tab grouping (desktop)
- Wordmark
- Desktop sort filter container
- Screenreader-only
- Table
- Row
- Filters
- Filter pill
- Desktop filter
- Header cell
- Filter panel
- Row select slot
- Row title container
- Sort order
- Language toggle
- Navigation tabs (desktop)
- Mobile navigation
- Vertical space
- Side nav - landmark label
- Side nav - nav group
- Side nav - link
- Side navigation

## Code Only Components
- gcds-alert
- gcds-breadcrumbs-item
- gcds-fieldset
- gcds-grid
- gcds-grid-col
- gcds-hint
- gcds-label
- gcds-lang-toggle
- gcds-nav-group
- gcds-nav-link
- gcds-phase-banner
- gcds-side-nav
- gcds-sr-only
- gcds-verify-banner


## Text area ↔ gcds-textarea

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `autofocus` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `characterCount` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `cols` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `hideLabel` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `minlength` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `rows` | `—` | `number` | ❌ | — | `5` | ❌ | — | — | ❌ |
| `textareaId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `validity` | `—` | `validitystate` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Text ↔ gcds-text

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Default margins?` | `variant` | `—` | ❌ | `true` | — | ❌ | `false`, `true` | — | ❌ |
| `Style` | `variant` | `—` | ❌ | `Normal` | — | ❌ | `Italic`, `Normal` | — | ❌ |
| `Text#9935:1` | `string` | `—` | ❌ | `This is the text component. It has properties to adjust the size, style, and weight of the text.` | — | ❌ | — | — | ❌ |
| `Weight` | `variant` | `—` | ❌ | `Regular` | — | ❌ | `Bold`, `Regular` | — | ❌ |
| `characterLimit` | `—` | `boolean` | ❌ | — | `true` | ❌ | — | — | ❌ |
| `display` | `—` | `string` | ❌ | — | `block` | ❌ | — | `block`, `flex`, `inline`, `inline-block`, `inline-flex`, `none` | ❌ |
| `marginBottom` | `—` | `string` | ❌ | — | `300` | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `marginTop` | `—` | `string` | ❌ | — | `0` | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `textRole` | `—` | `string` | ❌ | — | `primary` | ❌ | — | `light`, `primary`, `secondary` | ❌ |
| `Size` | `variant` | `string` | ❌ | `Body` | `body` | ❌ | `Body`, `Small` | `body`, `small` | ❌ |



## Container ↔ gcds-container

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Show border` | `variant` | `—` | ❌ | `True` | — | ❌ | `True`, `False` | — | ❌ |
| `border` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `centered` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `mainContainer` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `margin` | `—` | `string` | ❌ | — | — | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `tag` | `—` | `string` | ❌ | — | `div` | ❌ | — | — | ❌ |
| `Padding` | `variant` | `string` | ✅ | `0` | — | ❌ | `0`, `50`, `100`, `150`, `200`, `250`, `300`, `400`, `450`, `500`, `550`, `600`, `700`, `800`, `900`, `1000`, `25`, `75`, `125`, `175`, `225`, `350`, `650`, `750`, `850`, `950`, `1050`, `1100`, `1150`, `1200`, `1250` | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ✅ |
| `Size` | `variant` | `string` | ❌ | `Full` | `full` | ❌ | `Full`, `XL`, `LG`, `MD`, `SM`, `XS` | `full`, `lg`, `md`, `sm`, `xl`, `xs` | ❌ |



## Search ↔ gcds-search

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Mobile` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Default` | — | ❌ | `Active + Focus (button)`, `Focus (button)`, `Focus (input)`, `Default`, `Hover (button` | — | ❌ |
| `action` | `—` | `string` | ❌ | — | `/sr/srb.html` | ❌ | — | — | ❌ |
| `method` | `—` | `string` | ❌ | — | `get` | ❌ | — | `get`, `post` | ❌ |
| `name` | `—` | `string` | ❌ | — | `q` | ❌ | — | — | ❌ |
| `placeholder` | `—` | `string` | ❌ | — | `Canada.ca` | ❌ | — | — | ❌ |
| `searchId` | `—` | `string` | ❌ | — | `search` | ❌ | — | — | ❌ |
| `suggested` | `—` | `string[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Date Modified ↔ gcds-date-modified

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Date#7063:0` | `string` | `—` | ❌ | `2023-01-30` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `Version number#7171:0` | `string` | `—` | ❌ | `1.0.0` | — | ❌ | — | — | ❌ |
| `Type` | `variant` | `string` | ❌ | `Date modified` | `date` | ❌ | `Date modified`, `Version` | `date`, `version` | ❌ |



## Signature ↔ gcds-signature

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Large` | — | ❌ | `Small`, `Large` | — | ❌ |
| `Lang` | `variant` | `—` | ❌ | `EN` | — | ❌ | `EN`, `FR` | — | ❌ |
| `hasLink` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `type` | `—` | `string` | ❌ | — | `signature` | ❌ | — | `signature`, `wordmark` | ❌ |
| `variant` | `—` | `string` | ❌ | — | `colour` | ❌ | — | `colour`, `white` | ❌ |



## Pagination ↔ gcds-pagination

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `currentPage` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `display` | `—` | `string` | ❌ | — | `list` | ❌ | — | `list`, `simple` | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `nextHref` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `nextLabel` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `previousHref` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `previousLabel` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `totalPages` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `url` | `—` | `object \| string` | ❌ | — | — | ❌ | — | — | ❌ |



## Date input ↔ gcds-date-input

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Error?#29557:0` | `boolean` | `—` | ❌ | `false` | — | ❌ | — | — | ❌ |
| `Locale` | `variant` | `—` | ❌ | `EN` | — | ❌ | `EN`, `FR` | — | ❌ |
| `Type` | `variant` | `—` | ❌ | `M/D/Y` | — | ❌ | `M/D/Y`, `M/Y`, `D/M/Y` | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `format` | `—` | `string` | ❌ | — | — | ❌ | — | `compact`, `full` | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `legend` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Radios ↔ gcds-radios

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `Error?#21536:0` | `boolean` | `—` | ❌ | `false` | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `legend` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `options` | `—` | `radioobject[] \| string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Card ↔ gcds-card

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Badge?#23967:0` | `boolean` | `—` | ❌ | `false` | — | ❌ | — | — | ❌ |
| `Description?#6323:0` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Description#6323:3` | `string` | `—` | ❌ | `Description or supporting text relating to the headline. ` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop (4 columns)` | — | ❌ | `Desktop (4 columns)`, `Desktop (6 columns)`, `Mobile (1 column)` | — | ❌ |
| `Image?#6322:0` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Rest` | — | ❌ | `Hover`, `Focus`, `Rest` | — | ❌ |
| `Title#24363:20` | `string` | `—` | ❌ | `Headline` | — | ❌ | — | — | ❌ |
| `badge` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `cardTitle` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `cardTitleTag` | `—` | `string` | ❌ | — | `a` | ❌ | — | `a`, `h3`, `h4`, `h5`, `h6` | ❌ |
| `description` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `href` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `imgAlt` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `imgSrc` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Topic menu ↔ gcds-topic-menu

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `Language` | `variant` | `—` | ❌ | `EN` | — | ❌ | `EN`, `FR` | — | ❌ |
| `home` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |



## Error Summary ↔ gcds-error-summary

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Heading#2402:4` | `string` | `—` | ❌ | `There was a problem` | — | ❌ | — | — | ❌ |
| `errorLinks` | `—` | `object \| string` | ❌ | — | — | ❌ | — | — | ❌ |
| `heading` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `listen` | `—` | `boolean` | ❌ | — | `true` | ❌ | — | — | ❌ |



## Error Message ↔ gcds-error-message

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Error message#2687:21` | `string` | `—` | ❌ | `Error message.` | — | ❌ | — | — | ❌ |
| `messageId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Stepper ↔ gcds-stepper

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Current step#24469:1` | `string` | `—` | ❌ | `1` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Heading level` | `variant` | `—` | ❌ | `H2` | — | ❌ | `H2`, `H3`, `H1` | — | ❌ |
| `Step title#27027:0` | `string` | `—` | ❌ | `Step title` | — | ❌ | — | — | ❌ |
| `Total steps#24469:0` | `string` | `—` | ❌ | `4` | — | ❌ | — | — | ❌ |
| `currentStep` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `tag` | `—` | `string` | ❌ | — | `h2` | ❌ | — | `h1`, `h2`, `h3` | ❌ |
| `totalSteps` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |



## Footer ↔ gcds-footer

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Base Band#16853:0` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Contextual Navigation Band#16853:2` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Mobile` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `Main Band#16853:1` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `contextualHeading` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `contextualLinks` | `—` | `object \| string` | ❌ | — | — | ❌ | — | — | ❌ |
| `display` | `—` | `string` | ❌ | — | `compact` | ❌ | — | `compact`, `full` | ❌ |
| `subLinks` | `—` | `object \| string` | ❌ | — | — | ❌ | — | — | ❌ |
| `wordmarkVariant` | `—` | `string` | ❌ | — | — | ❌ | — | `colour`, `white` | ❌ |



## Header ↔ gcds-header

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Breadcrumbs?#20036:0` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Mobile` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Navigation?#2928:2` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Search?#20036:5` | `boolean` | `—` | ❌ | `true` | — | ❌ | — | — | ❌ |
| `Skip to main content?#3031:0` | `boolean` | `—` | ❌ | `false` | — | ❌ | — | — | ❌ |
| `langHref` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `signatureHasLink` | `—` | `boolean` | ❌ | — | `true` | ❌ | — | — | ❌ |
| `signatureVariant` | `—` | `string` | ❌ | — | — | ❌ | — | `colour`, `white` | ❌ |
| `skipToHref` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Select ↔ gcds-select

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `defaultValue` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `selectId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## File Uploader ↔ gcds-file-uploader

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `File uploaded` | `variant` | `—` | ❌ | `False` | — | ❌ | `False`, `true` | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Default` | — | ❌ | `Default`, `Disabled`, `Error`, `Error + Focus`, `Focus`, `Focus file`, `Error + Focus file` | — | ❌ |
| `accept` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `files` | `—` | `filelist` | ❌ | — | — | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `multiple` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `uploaderId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string[]` | ❌ | — | `[]` | ❌ | — | — | ❌ |



## Checkboxes ↔ gcds-checkboxes

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Error?#21388:0` | `boolean` | `—` | ❌ | `false` | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `legend` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `options` | `—` | `checkboxobject[] \| string` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string \| string[]` | ❌ | — | `[]` | ❌ | — | — | ❌ |



## Details ↔ gcds-details

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Details Content#25812:0` | `string` | `—` | ❌ | `Learn more about this topic` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Default` | — | ❌ | `Default`, `Focus`, `Hover` | — | ❌ |
| `Summary Content#2754:0` | `string` | `—` | ❌ | `Additional information` | — | ❌ | — | — | ❌ |
| `detailsTitle` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `Open?` | `variant` | `boolean` | ❌ | `false` | `false` | ✅ | `false`, `true` | — | ❌ |



## Link ↔ gcds-link

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Link text#9502:1` | `string` | `—` | ❌ | `Link` | — | ❌ | — | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Default` | — | ❌ | `Default`, `Hover`, `Focus`, `Visited` | — | ❌ |
| `display` | `—` | `string` | ❌ | — | `inline` | ❌ | — | `block`, `inline` | ❌ |
| `download` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `external` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `href` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `rel` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `size` | `—` | `string` | ❌ | — | `inherit` | ❌ | — | `inherit`, `regular`, `small` | ❌ |
| `target` | `—` | `string` | ❌ | — | `_self` | ❌ | — | — | ❌ |
| `variant` | `—` | `string` | ❌ | — | `default` | ❌ | — | `default`, `light` | ❌ |
| `Type` | `variant` | `string` | ❌ | `Standard` | — | ❌ | `Download`, `External`, `Email`, `Telephone`, `Standard` | — | ❌ |



## Breadcrumbs  ↔ gcds-breadcrumbs

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `Root` | `variant` | `—` | ❌ | `Canada.ca` | — | ❌ | `Canada.ca`, `Custom` | — | ❌ |
| `Trail length` | `variant` | `—` | ❌ | `1` | — | ❌ | `1`, `2`, `4`, `5`, `6`, `3` | — | ❌ |
| `hideCanadaLink` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |



## Input ↔ gcds-input

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `autocomplete` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `autofocus` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `errorMessage` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `form` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `hideLabel` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `hint` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `inputId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `max` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `maxlength` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `min` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `minlength` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `pattern` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `readonly` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `required` | `—` | `boolean` | ❌ | — | `false` | ❌ | — | — | ❌ |
| `size` | `—` | `number` | ❌ | — | — | ❌ | — | — | ❌ |
| `step` | `—` | `number` | ❌ | — | — | ❌ | — | `any` | ❌ |
| `type` | `—` | `string` | ❌ | — | `text` | ❌ | — | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | ❌ |
| `validateOn` | `—` | `string` | ❌ | — | `blur` | ❌ | — | `blur`, `other`, `submit` | ❌ |
| `validator` | `—` | `(string \| validatorentry \| validator&lt;string&gt;)[]` | ❌ | — | — | ❌ | — | — | ❌ |
| `validity` | `—` | `validitystate` | ❌ | — | — | ❌ | — | — | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Heading ↔ gcds-heading

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Default margins?` | `variant` | `—` | ❌ | `true` | — | ❌ | `true`, `false` | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Text#26888:16` | `string` | `—` | ❌ | `Heading` | — | ❌ | — | — | ❌ |
| `characterLimit` | `—` | `boolean` | ❌ | — | `true` | ❌ | — | — | ❌ |
| `marginBottom` | `—` | `string` | ❌ | — | `300` | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `marginTop` | `—` | `string` | ❌ | — | — | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `Tag` | `variant` | `string` | ✅ | `h1` | — | ❌ | `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | ✅ |



## Notice ↔ gcds-notice

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `Message#33105:2` | `string` | `—` | ❌ | `Message ` | — | ❌ | — | — | ❌ |
| `Title#33105:3` | `string` | `—` | ❌ | `Title` | — | ❌ | — | — | ❌ |
| `noticeTitle` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `noticeTitleTag` | `—` | `string` | ❌ | — | — | ❌ | — | `h2`, `h3`, `h4`, `h5` | ❌ |
| `Type` | `variant` | `string` | ❌ | `Danger` | — | ❌ | `Danger`, `Warning`, `Info`, `Success` | `danger`, `info`, `success`, `warning` | ❌ |



## Button ↔ gcds-button

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Button label#2934:0` | `string` | `—` | ❌ | `Button label` | — | ❌ | — | — | ❌ |
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Desktop`, `Mobile` | — | ❌ |
| `State` | `variant` | `—` | ❌ | `Rest` | — | ❌ | `Rest`, `Hover`, `Focus`, `Active + Focus`, `Disabled` | — | ❌ |
| `buttonId` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `disabled` | `—` | `boolean` | ❌ | — | — | ❌ | — | — | ❌ |
| `download` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `href` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `name` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `rel` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `size` | `—` | `string` | ❌ | — | `regular` | ❌ | — | `regular`, `small` | ❌ |
| `target` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `type` | `—` | `string` | ❌ | — | `button` | ❌ | — | `button`, `link`, `reset`, `submit` | ❌ |
| `value` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `buttonRole` | `variant` | `string` | ❌ | `Primary` | `primary` | ❌ | `Start`, `Primary`, `Secondary`, `Danger`, `Small - Danger`, `Small - Primary`, `Small - Secondary` | `danger`, `primary`, `secondary`, `start` | ❌ |



## Top-nav ↔ gcds-top-nav

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Menu-alignment` | `variant` | `—` | ❌ | `Left` | — | ❌ | `Left`, `Right` | — | ❌ |
| `Viewport` | `variant` | `—` | ❌ | `Small` | — | ❌ | `Large`, `Small` | — | ❌ |
| `alignment` | `—` | `string` | ❌ | — | `left` | ❌ | — | `center`, `left`, `right` | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |



## Icon ↔ gcds-icon

**Variant groups (Figma):**
—

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
| `Device` | `variant` | `—` | ❌ | `Desktop` | — | ❌ | `Mobile`, `Desktop` | — | ❌ |
| `label` | `—` | `string` | ❌ | — | — | ❌ | — | — | ❌ |
| `marginLeft` | `—` | `string` | ❌ | — | — | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `marginRight` | `—` | `string` | ❌ | — | — | ❌ | — | `0`, `25`, `50`, `75`, `100`, `125`, `150`, `175`, `200`, `225`, `250`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1050`, `1100`, `1150`, `1200`, `1250` | ❌ |
| `Name` | `variant` | `string` | ❌ | `&lt;info-circle&gt;` | — | ❌ | `&lt;checkmark-circle&gt;`, `&lt;chevron-down&gt;`, `&lt;chevron-left&gt;`, `&lt;chevron-right&gt;`, `&lt;chevron-up&gt;`, `&lt;close&gt;`, `&lt;download&gt;`, `&lt;email&gt;`, `&lt;exclamation-circle&gt;`, `&lt;external&gt;`, `&lt;info-circle&gt;`, `&lt;phone&gt;`, `&lt;search&gt;`, `&lt;warning-triangle&gt;` | `checkmark-circle`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `close`, `download`, `email`, `exclamation-circle`, `external`, `info-circle`, `phone`, `search`, `warning-triangle` | ❌ |
| `Size` | `variant` | `string` | ❌ | `h1` | `inherit` | ❌ | `text (140%)`, `text (160%)`, `h3`, `h2`, `text small`, `h5`, `h6`, `h4`, `h1` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `inherit`, `text`, `text-small` | ❌ |


