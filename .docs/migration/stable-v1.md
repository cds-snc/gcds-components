# Migrating from `@cdssnc/gcds-components` to `@gcds-core/components`

Version migration guide
-----------------------
This document helps you migrate from older versions of `@cdssnc/gcds-components` to the stable `@gcds-core/components` package. Each migration path is listed below. Follow the section that matches your current version.

## Migration paths

| From version     | To version | Section                                                           |
|------------------|------------|-------------------------------------------------------------------|
| 0.39.0 or higher | 1.0.0      | [0.39.0 or higher → 1.0.0](#migrating-from-0390-or-higher-to-100) |
| 0.38.0           | 1.0.0      | [0.38.0 → 1.0.0](#migrating-from-0380-to-100)                     |
| 0.34.0           | 1.0.0      | [0.34.0 → 1.0.0](#migrating-from-0340-to-100)                     |
| 0.27.0           | 1.0.0      | [0.27.0 → 1.0.0](#migration-from-0270-to-100)                     |
| Older than 0.27.0| 1.0.0      | [Older than 0.27.0 → 1.0.0](#versions-older-than-0270)             |
---

# Migrating from 0.39.0 or higher to 1.0.0

This section covers the breaking changes introduced as part of the **component API alignment work** leading to the **stable `v1.0.0` release**.

The changes are grouped into the following categories:
1. [Component API Removals and Breaking Changes](#component-api-removals-and-breaking-changes)
2. [New properties and features](#new-properties-and-features)
3. [React SSR package removal](#react-ssr-package-removal)
4. [Base font import (if not using CSS Shortcuts)](#base-font-import-if-not-using-css-shortcuts)

## Component API Removals and Breaking Changes

> [!IMPORTANT]
> This section lists all breaking changes and removed APIs. Review each component's changes carefully and update your codebase accordingly.

| Component                                        | What's changed (removed)       | Type      |
|--------------------------------------------------|--------------------------------|-----------|
| [Card](#card-gcds-card)                          | `a` value for `card-title-tag` | Value     |
| [Container](#container-gcds-container)           | `centered`, `main-container`   | Property  |
| [Footer](#footer-gcds-footer)                    | `wordmark-variant`             | Property  |
| [Grid](#grid-gcds-grid)                          | `centered`                     | Property  |
| [Header](#header-gcds-header)                    | `signature-variant`            | Property  |
| [Link](#link-gcds-link)                          | `variant`                      | Property  |
| [Notice](#notice-gcds-notice)                    | `type`                         | Property  |
| [PhaseBanner](#phasebanner-gcds-phase-banner)    | `<gcds-phase-banner>`          | Component |
| [Textarea](#textarea-gcds-textarea)              | `character-vount`              | Property  |
| [TopNav](#topnav-gcds-top-nav)                   | `alignment`                    | Property  |
| [VerifyBanner](#verifybanner-gcds-verify-banner) | `<gcds-verify-banner>`         | Component  |

---

### Card `<gcds-card>`
**❌ Removed value:** `a` value for the `card-title-tag` property

**👉 Action required:**
- Remove `card-title-tag="a"` from all `<gcds-card>` components.
  - By default, the Card component uses an anchor tag (`<gcds-link>`) so it is not necessary to set this property.

---

### Container `<gcds-container>`
**❌ Removed properties:** `centered`, `main-container`

**👉 Action required:**
- `centered` → replace with `align="center"`
- `main-container` **or** `size="xl" main-container` → replace with `layout="page"`
  - Additionally, add `tag="main"` if this is the main content container.

---

### Footer `<gcds-footer>`
**❌ Removed properties:** `wordmark-variant`

**👉 Action required:**
- Remove the `wordmark-variant` attribute from all `<gcds-footer>` components.
  - Using the <code>white</code> variant of the <code>gcds-signature</code> component within the <code>gcds-footer</code> component creates colour contrast problems. Removing the option to use the <code>white</code> variant of the <code>gcds-signature</code> component ensures a better built-in accessibility for the <code>gcds-footer</code> component.

---

### Grid `<gcds-grid>`
**❌ Removed properties:** `centered`

**👉 Action required:**
- `centered` → replace with `align="center"`

---

### Header `<gcds-header>`
**❌ Removed properties:** `signature-variant`

**👉 Action required:**
- Remove the `signature-variant` attribute from all `<gcds-header>` components.
  - Using the <code>white</code> variant of the <code>gcds-signature</code> component within the <code>gcds-header</code> component renders the <code>gcds-signature</code> in white while leaving the rest of the built in elements in their normal colour scheme. This creates a disconnect between the signature and the rest of the components. If a developer needs to use a <code>white</code> signature, the signature can still be passed in the <code>signature</code> slot.

---

### Link `<gcds-link>`
**❌ Removed properties:** `variant`

**👉 Action required:**
- `variant` → replace with `link-role`

---

### Notice `<gcds-notice>`
**❌ Removed properties:** `type`

**👉 Action required:**
- `type` → replace with `notice-role`

---

### PhaseBanner `<gcds-phase-banner>`
**❌ Removed component:** `<gcds-phase-banner>`

**👉 Action required:**
- Remove all usage of `<gcds-phase-banner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.

---

### Textarea `<gcds-textarea>`
**❌ Removed properties:** `character-count`

**👉 Action required:**
- `character-count` → replace with `maxlength`
  - Additionally, add the `hide-limit` attribute if you want to hide the character counter.

---

### TopNav `<gcds-top-nav>`
**❌ Removed properties:** `alignment`

**👉 Action required:**
- `alignment="left"` → use `align="end"`
- `alignment="right"` → use `align="start"`
- `alignment="center"` → remove the attribute (center is no longer supported; default is left-aligned)
  - Center-aligned headers create usability and design issues. They add a third visual focal point, rely on perfect symmetry that’s difficult to maintain—especially with long titles or shrinking viewports—and offer unclear benefits. Providing only left- or right-aligned options helps maintain consistent, opinionated design conventions across the GC, while adding a third option introduces unnecessary fragmentation.

---

### VerifyBanner `<gcds-verify-banner>`
**❌ Removed component:** `<gcds-verify-banner>`

**👉 Action required:**
- Remove all usage of `<gcds-verify-banner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.


---

## New properties and features

This table is an index of all new properties and features. Click a component to jump to its detailed migration instructions.

| Component                                          | New API/Prop/Feature                               |
|----------------------------------------------------|----------------------------------------------------|
| [Card](#card-gcds-card-1)                          | `target`, `rel`                                    |
| [Checkboxes](#checkboxes-gcds-checkboxes-1)        | `form`, `validity`, `hideLegend`                   |
| [DateInput](#dateinput-gcds-date-input-1)          | `max`, `min`, `validity`, `<component>-id`         |
| [FileUploader](#fileuploader-gcds-file-uploader-1) | `hideLabel`, `form`, `validity`                    |
| [Heading](#heading-gcds-heading-1)                 | `headingRole`                                      |
| [Radios](#radios-gcds-radios-1)                    | `form`, `validity`, `hideLegend`, `<component>-id` |
| [Select](#select-gcds-select-1)                    | `hideLabel`, `form`, `validity`                    |
| [Textarea](#textarea-gcds-textarea-1)              | `hideLimit`, `form`, `readonly`, `validity`        |

### Card `<gcds-card>`
| Property | Attribute | Description | Type | Default |
|----------|-----------|-------------|------|---------|
| `target`   | `target`    | Specifies where to open the linked document (e.g., `_blank`, `_self`). | string | _none_ |
| `rel`      | `rel`       | Specifies the relationship of the target object to the link (e.g., `noopener`, `noreferrer`). | string | _none_ |

### Checkboxes `<gcds-checkboxes>`
| Property   | Attribute   | Description                                 | Type    | Default |
|------------|-------------|---------------------------------------------|---------|---------|
| `form`       | `form`        | Associates the component with a form        | string  | _none_  |
| `validity`   | `validity`    | Sets the validity state                     | string  | _none_  |
| `hideLegend` | `hide-legend` | Hides the legend visually                   | boolean | false   |

### DateInput `<gcds-date-input>`
| Property         | Attribute         | Description                                 | Type    | Default |
|------------------|------------------|---------------------------------------------|---------|---------|
| `max`              | `max`              | Maximum allowed date                        | string  | _none_  |
| `min`              | `min`              | Minimum allowed date                        | string  | _none_  |
| `validity`         | `validity`         | Sets the validity state                     | string  | _none_  |
| `dateInputId`      | `date-input-id`    | Sets a unique id for the component          | string  | _none_  |

### FileUploader `<gcds-file-uploader>`
| Property   | Attribute   | Description                                 | Type    | Default |
|------------|-------------|---------------------------------------------|---------|---------|
| `hideLabel`  | `hide-label`  | Hides the label visually                    | boolean | false   |
| `form`       | `form`        | Associates the component with a form        | string  | _none_  |
| `validity`   | `validity`    | Sets the validity state                     | string  | _none_  |

### Heading `<gcds-heading>`
| Property     | Attribute     | Description                                 | Type    | Default |
|--------------|--------------|---------------------------------------------|---------|---------|
| `headingRole`  | `heading-role` | Sets the ARIA role for the heading          | string  | _none_  |

### Radios `<gcds-radios>`
| Property         | Attribute         | Description                                 | Type    | Default |
|------------------|------------------|---------------------------------------------|---------|---------|
| `form`             | `form`             | Associates the component with a form        | string  | _none_  |
| `validity`         | `validity`         | Sets the validity state                     | string  | _none_  |
| `hideLegend`       | `hide-legend`      | Hides the legend visually                   | boolean | false   |
| `radiosId`         | `radios-id`        | Sets a unique id for the component          | string  | _none_  |

### Select `<gcds-select>`
| Property   | Attribute   | Description                                 | Type    | Default |
|------------|-------------|---------------------------------------------|---------|---------|
| `hideLabel`  | `hide-label`  | Hides the label visually                    | boolean | false   |
| `form`       | `form`        | Associates the component with a form        | string  | _none_  |
| `validity`   | `validity`    | Sets the validity state                     | string  | _none_  |

### Textarea `<gcds-textarea>`
| Property   | Attribute   | Description                                 | Type    | Default |
|------------|-------------|---------------------------------------------|---------|---------|
| `hideLimit`  | `hide-limit`  | Hides the character counter                 | boolean | false   |
| `form`       | `form`        | Associates the component with a form        | string  | _none_  |
| `readonly`   | `readonly`    | Makes the textarea read-only                | boolean | false   |
| `validity`   | `validity`    | Sets the validity state                     | string  | _none_  |

---

## React SSR package removal

> [!IMPORTANT] 
> If you are using React with server-side rendering (SSR), read this section carefully.

In the alpha phase, we provided a dedicated package for React SSR integration: `@cdssnc/gcds-components-react-ssr`. Due to its experimental nature and maintenance challenges, we have decided to remove this package in the stable release.

Stencil, the underlying technology for GCDS components, offers built-in SSR support. We recommend using Stencil's native SSR capabilities for React applications.

**👉 Action required:**
- Remove the `@cdssnc/gcds-components-react-ssr` package from your project dependencies.
- Update your SSR implementation to use Stencil's built-in SSR support. Refer to the [Next.js integration guide](../v1-nextjs.md) for assistance.

### Base font import (if not using CSS Shortcuts)

If you don't use CSS Shortcuts, you previously needed to manually include Google Fonts in your project to ensure correct typography. With the removal of the React SSR package, we have added a base Google Fonts import directly into the components package.

**👉 Action required:**
- Remove any manual Google Fonts imports from your project if you were using the React SSR package.

# Migrating from 0.38.0 to 1.0.0

To migrate from 0.38.0, you need to upgrade to at least 0.39.0 first.

Address the breaking change in 0.39.0, which is detailed in the [0.39 release notes](../../archived/CHANGELOG.md#0390).
A property (`placeholder`) was removed from the `<gcds-input>` component.

**Next steps**: follow the [0.39.0 or higher → 1.0.0](#migrating-from-0390-or-higher-to-100) section above for further instructions.

# Migrating from 0.34.0 to 1.0.0

To migrate from 0.34.0, you need to upgrade to at least 0.35.0 first.
Address the breaking change in 0.35.0, which is detailed in the [0.35 release notes](../../archived/CHANGELOG.md#0350).

**Next steps**: follow the [0.38.0 or higher → 1.0.0](#migrating-from-0380-to-100) section above for further instructions.

# Migration from 0.27.0 to 1.0.0
To migrate from 0.27.0, you need to upgrade to at least 0.28.0 first.
Address the breaking change in 0.28.0, which is detailed in the [0.28 release notes](../../archived/CHANGELOG.md#0280).

**Next steps**: follow the [0.34.0 or higher → 1.0.0](#migrating-from-0340-to-100) section above for further instructions.

# Versions older than 0.27.0
For a complete list of changes in each version, refer to the archived [CHANGELOG](../../archived/CHANGELOG.md) file.