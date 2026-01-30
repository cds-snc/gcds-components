# Migrating from `@cdssnc/gcds-compoments` to `@gcds-core/components`

Version 0.47.0 to 1.0.0
--------------------------------
This guide will help you migrate from the old alpha package `@cdssnc/gcds-components` to the new stable package `@gcds-core/components`. Please follow the steps below to ensure a smooth transition.


# Migration path: `0.47.0` → `1.0.0`

This migration covers the breaking changes introduced as part of the **component API alignment work** leading to the **stable `v1.0.0` release**.

The changes are grouped into the following categories:
1. API renames and replacements  
2. Behaviour and configuration changes  
3. Removed components  
4. Framework-specific changes (React + SSR)  

---

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
````

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
*(link to new documentation page)*

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
