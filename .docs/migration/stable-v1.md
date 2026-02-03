# Migrating from `@cdssnc/gcds-components` to `@gcds-core/components`

Version migration guide
-----------------------
This document helps you migrate from older versions of `@cdssnc/gcds-components` to the stable `@gcds-core/components` package. Each migration path is listed below. Follow the section that matches your current version.

## Migration paths

| From version | To version | Section                                       |
|--------------|------------|-----------------------------------------------|
| 0.47.0       | 1.0.0      | [0.47.0 → 1.0.0](#migrating-from-0470-to-100) |
| 0.48.0       | 1.0.0      | _(coming soon)_                               |

---

# Migrating from 0.47.0 to 1.0.0

This section covers the breaking changes introduced as part of the **component API alignment work** leading to the **stable `v1.0.0` release**.

The changes are grouped into the following categories:
1. [Component API Removals and Breaking Changes](#component-api-removals-and-breaking-changes)
2. [New properties and features](#new-properties-and-features)
3. [React SSR package removal](#react-ssr-package-removal)

## Component API Removals and Breaking Changes

This table is an index of all API removals and breaking changes. Click a component to jump to its detailed migration instructions.

| Component         | Removed API/Prop/Feature                             |
|-------------------|------------------------------------------------------|
| [Card](#card)              | `a` value for `cardTitleTag`                         |
| [Container](#container)         | `centered`, `mainContainer` |
| [Footer](#footer)            | `wordmarkVariant`                                    |
| [Grid](#grid)              | `centered`                                           |
| [Header](#header)            | `signatureVariant`                                   |
| [Link](#link)              | `variant`                                            |
| [Notice](#notice)            | `type`                                               |
| [PhaseBanner](#phasebanner)       | `<gcds-phase-banner>`                                |
| [Textarea](#textarea)          | `characterCount`                                     |
| [TopNav](#topnav)            | `alignment`                                          |
| [VerifyBanner](#verifybanner)      | `<gcds-verify-banner>`                               |

---

### Card
**Removed:** `a` value for the `cardTitleTag` property
- Remove `cardTitleTag="a"` from all `<gcds-card>` components. By default, the Card component uses an anchor tag (`<gcds-link>`) so it is not necessary to set this property.

### Container
**Removed:** `centered`, `mainContainer`

If you are using:
- `centered` → replace with `align="center"`
- `mainContainer` **or** `size="xl" main-container` → replace with `layout="page"`
  - Additionally, add `tag="main"` if this is the main content container.

### Footer
**Removed:** `wordmarkVariant`
- Remove the `wordmarkVariant` attribute from all `<gcds-footer>` components.
  - Using the <code>white</code> variant of the <code>gcds-signature</code> component within the <code>gcds-footer</code> component creates colour contrast problems. Removing the option to use the <code>white</code> variant of the <code>gcds-signature</code> component ensures a better built-in accessibility for the <code>gcds-footer</code> component.


### Grid
**Removed:** `centered`

If you are using:
- `centered` → replace with `align="center"`

### Header
**Removed:** `signatureVariant`
- Remove the `signatureVariant` attribute from all `<gcds-header>` components.
  - Using the <code>white</code> variant of the <code>gcds-signature</code> component within the <code>gcds-header</code> component renders the <code>gcds-signature</code> in white while leaving the rest of the built in elements in their normal colour scheme. This creates a disconnect between the signature and the rest of the components. If a developer needs to use a <code>white</code> signature, the signature can still be passed in the <code>signature</code> slot.

### Link
**Removed:** `variant`

If you are using:
- `variant` → replace with `linkRole`

### Notice
**Removed:** `type`

If you are using:
- `type` → replace with `noticeRole`

### PhaseBanner
**Removed:** `<gcds-phase-banner>`
- Remove all usage of `<gcds-phase-banner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.

### Textarea
**Removed:** `characterCount`
If you are using:
- `characterCount` → replace with `maxlength`
  - Additionally, add the `hideLimit` attribute if you want to hide the character counter.

### TopNav
**Removed:** `alignment`

If you are using:
- `alignment="left"` → use `align="end"`
- `alignment="right"` → use `align="start"`
- `alignment="center"` → remove the attribute (center is no longer supported; default is left-aligned)
  - Center-aligned headers create usability and design issues. They add a third visual focal point, rely on perfect symmetry that’s difficult to maintain—especially with long titles or shrinking viewports—and offer unclear benefits. Providing only left- or right-aligned options helps maintain consistent, opinionated design conventions across the GC, while adding a third option introduces unnecessary fragmentation.

### VerifyBanner
**Removed:** `<gcds-verify-banner>`

- Remove all usage of `<gcds-verify-banner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.


---

## New properties and features

This table is an index of all new properties and features. Click a component to jump to its detailed migration instructions.
| Component         | New API/Prop/Feature                             |
|-------------------|--------------------------------------------------|
| [Card](#card-new)              | `target`, `rel`                                 |
| [Checkboxes](#checkboxes-new)       | `form`, `validity`, `hideLegend`          |
| [DateInput](#dateinput-new)         | `max`, `min`, `validity`, `<component>-id`              |
| [FileUploader](#fileuploader-new)       | `hideLabel`, `form`, `validity`                       |
| [Heading](#heading-new)           | `headingRole`                                 |
| [Radios](#radios-new)             | `form`, `validity`, `hideLegend`, `<component>-id`            |
| [Select](#select-new)              | `hideLabel`, `form`, `validity`                        |
| [Textarea](#textarea-new)           | `hideLimit`, `form`, `readonly`, `validity`                     | 
|-------------------|--------------------------------------------------|

### Card new

**New properties:** `target`, `rel`
- You can now set the `target` and `rel` properties on `<gcds-card>` components to control link behaviour and security.
- Example:
```html
<gcds-card
  card-title="Example Card"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
></gcds-card>
```

### Checkboxes new
**New properties:** `form`, `validity`, `hideLegend`
- You can now set the `form`, `validity`, and `hideLegend` properties on `<gcds-checkboxes>` components.
- Example:
```html
<gcds-checkboxes
  legend="Select options"
  form="myForm"
  validity="invalid"
  hide-legend
></gcds-checkboxes>
```

### DateInput new
**New properties:** `max`, `min`, `validity`, `<component>-id`
- You can now set the `max`, `min`, `validity`, and `<component>-id` properties on `<gcds-date-input>` components.
- Example:
```html
<gcds-date-input
  label="Select a date"
  max="2024-12-31"
  min="2024-01-01"
  validity="valid"
  date-input-id="dateInput1"
></gcds-date-input>
```

### FileUploader new
**New properties:** `hideLabel`, `form`, `validity`
- You can now set the `hideLabel`, `form`, and `validity` properties on `<gcds-file-uploader>` components.
- Example:
```html
<gcds-file-uploader
  label="Upload your file"
  hide-label
  form="uploadForm"
  validity="valid"
></gcds-file-uploader>
```

### Heading new
**New property:** `headingRole`
- You can now set the `headingRole` property on `<gcds-heading>` components.
- Example:
```html
<gcds-heading
  level="2"
  heading-role="section-title"
>Section Title</gcds-heading>
``` 

### Radios new
**New properties:** `form`, `validity`, `hideLegend`, `<component>-id`
- You can now set the `form`, `validity`, `hideLegend`, and `<component>-id` properties on `<gcds-radios>` components.
- Example:
```html
<gcds-radios
  legend="Choose an option"
  form="optionsForm"
  validity="invalid"
  hide-legend
  radios-id="radios1"
  options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"
></gcds-radios>
```

### Select new
**New properties:** `hideLabel`, `form`, `validity`
- You can now set the `hideLabel`, `form`, and `validity` properties
- Example:
```html
<gcds-select
  label="Choose an option"
  hide-label
  form="selectForm"
  validity="valid"
></gcds-select>
``` 

### Textarea new
**New properties:** `hideLimit`, `form`, `readonly`, `validity`
- You can now set the `hideLimit`, `form`, `readonly`, and `validity` properties on `<gcds-textarea>` components.
- Example:
```html
<gcds-textarea
  label="Your message"
  hide-limit
  form="messageForm"
  readonly
  validity="valid"
></gcds-textarea>
```


---

# Migrating from 0.47.0 to 1.0.0

This section covers the breaking changes introduced as part of the **component API alignment work** leading to the **stable `v1.0.0` release**.

The changes are grouped into the following categories:
1. API renames and replacements  
2. Behaviour and configuration changes  
3. Removed components  
4. Framework-specific changes (React + SSR)  

---
## List of ALL affected components


(start of verified list)
Textarea - removed `characterCount`. added (replaced) by `maxlength` and `hideLimit` maxlength replaces characterCount (now native, now allows you to hide the character counter with `hideLimit`)
  if: `characterCount="X"`
  replace with: `maxlength="X"`
TopNav - removed `alignment`, added `align`
  if: `alignment="left"`
  replace with: `align="end"`
  if: `alignment="center"`
  remove the attribute (default is left aligned now, center is no longer supported)
  if: `alignment="right"`
  replace with: `align="start"`
Footer - removed `wordmarkVariant`
  if using `wordmarkVariant`
  remove the attribute, validate branding and contrast
Container - Removed `centered` and `mainContainer`, added `align` and `layout`
  Container - container / size replaced with X
  if: `size="xl" main-container`
  replace with: `layout="page"` additionally, add `tag="main"` if it's the main content container
  if: `centered`
  replace with: `align="center"`
Grid - added `align` property, removed `centered`
  if: `centered`
  replace with: `align="center"`
Alert - no changes
PhaseBanner - removed
VerifyBanner - removed
Link - removed `variant` replaced with `linkRole`
  if: `variant="X"`
  replace with: `link-role="X"`
Notice - removed `type` replaced with `noticeRole`
  if: `type="X"`
  replace with: `notice-role="X"`
Header - removed `signatureVariant`
  if using `signatureVariant`
  remove the attribute, validate branding and contrast
Card - removed `cardTitleTag` value of `a`
  if: `card-title-tag="a"`
  remove the attribute, by default it uses `<gcds-link>` which is rendered as an `<a>` tag


Added / new features:
FileUploader / Checkboxes / Select - added new `hideLabel` property
Radios / Checkboxes / DateInput - added <component-name>-id to all of these copmonents
Textarea - added `hideLimit` property for use with maxlength
Card - added target, and rel
Heading - added `headingRole` prop


Form components:
Added the following properties to form components:
| Component | Property |
|-----------|----------|
| Textarea | `form` - `readonly` - `validity` |
| Select | `form` - `validity` - `hideLabel` |
| Radios | `form` - `validity` - `hideLegend` |
| Checkboxes | `form` - `validity` - `hideLegend` |
| DateInput | `max` -  `min` - `validity` |
| FileUploader | `form` - `validity` - `hideLabel` |

(end of verified list)
## 1. API renames & replacements

These changes require **direct updates to existing attributes or properties**.

### Container & layout

**Affected components**
- `gcds-container`
- `gcds-grid`
- `gcds-top-nav`

**What changed**  
Boolean or ambiguous layout properties have been replaced with explicit, semantic attributes.

| Component | Before | After |
|---------|--------|-------|
| `gcds-container` | `centered` | `align="center"` |
|  | `main-container` | `layout="main"` |
| `gcds-grid` | `centered` | `align="center"` |
| `gcds-top-nav` | `alignment` (incl. `center`) | `align` (no `center` option) |

**What to do**
- Replace boolean layout attributes with `align` and `layout`
- Update `gcds-top-nav` to use a supported alignment value (`left`, `right`, etc.)

---

### Links & messaging

**Affected components**
- `gcds-link`
- `gcds-notice`

| Component | Before | After |
|---------|--------|-------|
| `gcds-link` | `variant` | `link-role` |
| `gcds-notice` | `type` | `notice-role` |

**What to do**
- Rename the affected attributes
- Validate visual and semantic behaviour after the update

---

## 2. Behaviour & configuration changes

These changes modify **how a component behaves**, not just its API surface.

### Textarea character limits

**Affected component**
- `gcds-textarea`

**What changed**
- `character-count` has been removed
- Native HTML `maxlength` is now used
- New optional attribute: `hide-limit`

**Before**
```html
<gcds-textarea character-count="200"></gcds-textarea>
```

**After**

```html
<gcds-textarea maxlength="200"></gcds-textarea>
```

**Optional**

```html
<gcds-textarea maxlength="200" hide-limit></gcds-textarea>
```

---

### Card title semantics

**Affected component**

* `gcds-card`

**What changed**

* `a` is no longer a valid value for `card-title-tag`

**What to do**

* Replace `a` with a supported heading tag
* Move any links inside the title content instead of using the tag itself

---

### Header & footer variants

**Affected components**

* `gcds-header`
* `gcds-footer`

**What changed**
Variant-based branding properties have been removed.

| Component     | Removed property    |
| ------------- | ------------------- |
| `gcds-header` | `signature-variant` |
| `gcds-footer` | `wordmark-variant`  |

**What to do**

* Remove the properties
* Validate branding, contrast, and EN/FR rendering

---

## 3. Removed components

These components were **never officially documented** and are being removed to clarify the codebase before `v1.0.0`.

### Removed

* `gcds-phase-banner`
* `gcds-verify-banner`

**What to do**

* Remove usage from templates
* Replace with a supported pattern (commonly `gcds-notice`)

---

## 4. Framework-specific changes (React + SSR)

### ⛔ `@cdssnc/gcds-components-react-ssr` removed

This change **only affects teams using React with server-side rendering**.

**Why**

* The package was experimental
* It has not met the stability and maintenance requirements for `v1.0.0`

**What to do**

* Remove the `@cdssnc/gcds-components-react-ssr` dependency
* Follow the supported React SSR integration approach

➡️ **Next steps for React users**
See the dedicated guide:

**Using GCDS with React and Next.js (SSR)**
*[Click here for instructions](../v1-nextjs.md)*

This guide covers:

* Using GCDS web components in Next.js
* Client-only hydration patterns
* Supported Stencil SSR tooling

---

## 5. New default behaviour (no action required)

### Base font import

* A base Google Fonts import has been added to the components package
* Components render with correct typography when used in isolation
* No duplicate font loading occurs when CSS Shortcuts is also present

**Optional checks**

* Content Security Policy allows Google Fonts
* Performance budgets remain acceptable

---

## Summary

* Most breaking changes are **direct API renames**
* A small number of **behaviour changes** require markup updates
* Two undocumented components were removed
* React SSR users must follow a **separate migration path**

Once on `1.0.0`, the API is considered stable:

* No breaking changes in minor or patch releases
* Full alignment between design and code

---

# [Placeholder] Migrating from 0.48.0 to 1.0.0

_(Add migration notes here if/when needed)_

---

# Alphabetical List of Component Changes

This section summarizes all breaking and notable changes for each component, grouped by removals/major changes first, then additions/renames, and sorted alphabetically within each group. Use this as a quick reference for migration.

| Component         | Change Type         | Before (old API/prop)         | After (new API/prop) / Notes                |
|-------------------|---------------------|-------------------------------|---------------------------------------------|
| PhaseBanner       | Component removal   | `<gcds-phase-banner>`         | Remove usage                                |
| VerifyBanner      | Component removal   | `<gcds-verify-banner>`        | Remove usage                                |
| Footer            | API removal         | `wordmarkVariant`             | Remove attribute, validate branding/contrast |
| Header            | API removal         | `signatureVariant`            | Remove attribute, validate branding/contrast |
| Card              | API removal         | `cardTitleTag="a"`            | Remove attribute; use `<gcds-link>` instead |
| TopNav            | API rename/removal  | `alignment` (`left`, `center`, `right`) | `align` (`end`, `start`), remove `center`   |
| Container         | API rename/removal  | `centered`, `mainContainer`, `size="xl" main-container` | `align="center"`, `layout="page"`, add `tag="main"` if main content |
| Grid              | API rename/addition | `centered`                    | `align="center"`                           |
| Link              | API rename          | `variant`                     | `linkRole`                                  |
| Notice            | API rename          | `type`                        | `noticeRole`                                |
| Textarea          | API rename/addition | `characterCount`              | `maxlength`, `hideLimit`, `form`, `readonly`, `validity` |
| Card              | API addition        |                               | `target`, `rel` added                       |
| Checkboxes        | API addition        |                               | `hideLabel`, `form`, `validity`, `hideLegend`|
| DateInput         | API addition        |                               | `max`, `min`, `validity`, `<component>-id`  |
| FileUploader      | API addition        |                               | `hideLabel`, `form`, `validity`             |
| Heading           | API addition        |                               | `headingRole` prop                          |
| Radios            | API addition        |                               | `form`, `validity`, `hideLegend`, `<component>-id` |
| Select            | API addition        |                               | `hideLabel`, `form`, `validity`             |
| Alert             | No changes          |                               |                                             |
