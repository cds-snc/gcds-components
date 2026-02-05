# Migrating from alpha to stable v1
[Français](#migration-de-la-version-alpha-à-la-v1-stable)

This document helps you migrate from older versions of `@cdssnc/gcds-components` to the stable `@gcds-core/components` package. Each migration path is listed below. Follow the section that matches your current version.

## Migration paths
- **[0.39.0 or higher → 1.0.0](#migrating-from-0390-or-higher-to-100)** :star:
- [0.38.0 → 1.0.0](#migrating-from-0380-to-100)
- [0.34.0 → 1.0.0](#migrating-from-0340-to-100)
- [0.27.0 → 1.0.0](#migration-from-0270-to-100)
- [Older than 0.27.0 → 1.0.0](#versions-older-than-0270)

---

# Migrating from 0.39.0 or higher to 1.0.0

This section covers the breaking changes introduced as part of the **component API alignment work** leading to the **stable `v1.0.0` release**.

The changes are grouped into the following categories:
1. [Update your packages and paths](#update-your-packages-and-paths)
2. [Component API Removals and Breaking Changes](#component-api-removals-and-breaking-changes)
3. [New properties and features](#new-properties-and-features)
4. [React SSR package removal](#react-ssr-package-removal-if-using)
5. [Base font import (if not using CSS Shortcuts)](#base-font-import-if-not-using-css-shortcuts)

## Update your packages and paths

You'll need to update your project dependencies to use the new stable packages.
Uninstall the old packages and install the new ones.

| Old Package                         | New Package                                                                      |
|-------------------------------------|----------------------------------------------------------------------------------|
| `@cdssnc/gcds-components`           | `@gcds-core/components`                                                          |
| `@cdssnc/gcds-components-react`     | `@gcds-core/components-react`                                                    |
| `@cdssnc/gcds-components-vue`       | `@gcds-core/components-vue`                                                      |
| `@cdssnc/gcds-components-react-ssr` | *Removed* (see [React SSR package removal](#react-ssr-package-removal-if-using)) |
| `@cdssnc/gcds-components-angular`   | `@gcds-core/components-angular`                                                  |


> [!IMPORTANT]
> You'll need to update all references to the old package names in your codebase to the new package names listed above.
> Replace all `@cdssnc/gcds-components*` paths with the corresponding `@gcds-core/components*` paths.
> Make sure to review your entire codebase for any other references to the old package names and update them accordingly.

To start, change your style and script imports to the new package paths.
```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

to
```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@gcds-core/components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@gcds-core/components/dist/gcds/gcds.esm.js"
></script>
```

## Component API Removals and Breaking Changes

> [!IMPORTANT]
> This section lists all breaking changes and removed APIs. Review each component's changes carefully and update your codebase accordingly.

| Component (HTML / Angular / Vue)                 |                                         | What's changed (removed)                             | Type      |
|--------------------------------------------------|-----------------------------------------|------------------------------------------------------|-----------|
| [Card](#card-gcds-card)                          | [React](#card-gcdscard)                 | `a` value for `card-title-tag`                       | Value     |
| [Container](#container-gcds-container)           | [React](#container-gcdscontainer)       | `centered`, `main-container`                         | Property  |
| [Footer](#footer-gcds-footer)                    | [React](#footer-gcdsfooter)             | `wordmark-variant`                                   | Property  |
| [Grid](#grid-gcds-grid)                          | [React](#grid-gcdsgrid)                 | `centered`                                           | Property  |
| [Header](#header-gcds-header)                    | [React](#header-gcdsheader)             | `signature-variant`                                  | Property  |
| [Link](#link-gcds-link)                          | [React](#link-gcdslink)                 | `variant`                                            | Property  |
| [Notice](#notice-gcds-notice)                    | [React](#notice-gcdsnotice)             | `type`                                               | Property  |
| [PhaseBanner](#phasebanner-gcds-phase-banner)    | [React](#phasebanner-gcdsphasebanner)   | `<gcds-phase-banner>`                                | Component |
| [Textarea](#textarea-gcds-textarea)              | [React](#textarea-gcdstextarea)         | `character-count`                                    | Property  |
| [TopNav](#topnav-gcds-top-nav)                   | [React](#topnav-gcdstopnav)             | `left` \| `center` \| `right` values for `alignment` | Value     |
| [VerifyBanner](#verifybanner-gcds-verify-banner) | [React](#verifybanner-gcdsverifybanner) | `<gcds-verify-banner>`                               | Component |

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
- `centered` → replace with `alignment="center"`
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
- `centered` → replace with `alignment="center"`

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
**❌ Removed values:** `left` | `right` | `center` values for the `alignment` property

**👉 Action required:**
- `alignment="left"` → use `alignment="start"`
- `alignment="right"` → use `alignment="end"`
- `alignment="center"` → remove the attribute (center is no longer supported; default is left-aligned)
  - Center-aligned headers create usability and design issues. They add a third visual focal point, rely on perfect symmetry that’s difficult to maintain—especially with long titles or shrinking viewports—and offer unclear benefits. Providing only left- or right-aligned options helps maintain consistent, opinionated design conventions across the GC, while adding a third option introduces unnecessary fragmentation.

---

### VerifyBanner `<gcds-verify-banner>`
**❌ Removed component:** `<gcds-verify-banner>`

**👉 Action required:**
- Remove all usage of `<gcds-verify-banner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.

---

> **Skip to** [New properties and features](#new-properties-and-features)

--- 

### React `<Gcds*>` components

---
### Card `<GcdsCard>`
**❌ Removed value:** `a` value for the `cardTitleTag` property

**👉 Action required:**
- Remove `cardTitleTag="a"` from all `<GcdsCard>` components.
  - By default, the Card component uses an anchor tag (`<GcdsLink>`) so it is not necessary to set this property.
---

### Container `<GcdsContainer>`
**❌ Removed properties:** `centered`, `mainContainer`

**👉 Action required:**
- `centered` → replace with `alignment="center"`
- `mainContainer={true}` **or** `size="xl" mainContainer={true}` → replace with `layout="page"`
  - Additionally, add `tag="main"` if this is the main content container.
  - 
---

### Footer `<GcdsFooter>`
**❌ Removed properties:** `wordmarkVariant`

**👉 Action required:**
- Remove the `wordmarkVariant` prop from all `<GcdsFooter>` components.
  - Using the <code>white</code> variant of the <code>GcdsSignature</code> component within the <code>GcdsFooter</code> component creates colour contrast problems. Removing the option to use the <code>white</code> variant of the <code>GcdsSignature</code> component ensures a better built-in accessibility for the <code>GcdsFooter</code> component.

---

### Grid `<GcdsGrid>`
**❌ Removed properties:** `centered`

**👉 Action required:**
- `centered={true}` → replace with `alignment="center"`

---

### Header `<GcdsHeader>`
**❌ Removed properties:** `signatureVariant`

**👉 Action required:**
- Remove the `signatureVariant` prop from all `<GcdsHeader>` components.
  - Using the <code>white</code> variant of the <code>GcdsSignature</code> component within the <code>GcdsHeader</code> component renders the <code>GcdsSignature</code> in white while leaving the rest of the built in elements in their normal colour scheme. This creates a disconnect between the signature and the rest of the components. If a developer needs to use a <code>white</code> signature, the signature can still be passed in the <code>signature</code> prop.
---

### Link `<GcdsLink>`
**❌ Removed properties:** `variant`

**👉 Action required:**
- `variant` → replace with `linkRole`
---

### Notice `<GcdsNotice>`
**❌ Removed properties:** `type`

**👉 Action required:**
- `type` → replace with `noticeRole`

---

### PhaseBanner `<GcdsPhaseBanner>`
**❌ Removed component:** `<GcdsPhaseBanner>`

**👉 Action required:**
- Remove all usage of `<GcdsPhaseBanner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.
---

### Textarea `<GcdsTextarea>`
**❌ Removed properties:** `characterCount`

**👉 Action required:**
- `characterCount` → replace with `maxLength`
  - Additionally, add the `hideLimit` prop if you want to hide the character counter.

---

### TopNav `<GcdsTopNav>`
**❌ Removed values:** `left` | `right` | `center` values for the `alignment` property

**👉 Action required:**
- `alignment="left"` → use `alignment="start"`
- `alignment="right"` → use `alignment="end"`
- `alignment="center"` → remove the attribute (center is no longer supported; default is left-aligned)
  - Center-aligned headers create usability and design issues. They add a third visual focal point, rely on perfect symmetry that’s difficult to maintain—especially with long titles or shrinking viewports—and offer unclear benefits. Providing only left- or right-aligned options helps maintain consistent, opinionated design conventions across the GC, while adding a third option introduces unnecessary fragmentation.

---

### VerifyBanner `<GcdsVerifyBanner>`
**❌ Removed component:** `<GcdsVerifyBanner>`

**👉 Action required:**
- Remove all usage of `<GcdsVerifyBanner>` from your codebase.
  - This component was never officially documented. Its removal helps clarify the codebase, preventing any potential confusion or accidental use moving forward.


---

## New properties and features

This table is an index of all new properties and features. Click a component to jump to its detailed migration instructions.

| Component                                          | New API/Prop/Feature                                            |
|----------------------------------------------------|-----------------------------------------------------------------|
| [Card](#card-gcds-card-1)                          | `target`, `rel`                                                 |
| [Checkboxes](#checkboxes-gcds-checkboxes-1)        | `autofocus`, `form`, `hideLabel`, `hideLegend`, `validity`      |
| [DateInput](#dateinput-gcds-date-input-1)          | `autofocus`, `form`, `max`, `min`, `validity`, `<component>-id` |
| [FileUploader](#fileuploader-gcds-file-uploader-1) | `autofocus`, `form`, `hideLabel`, `form`, `validity`            |
| [Heading](#heading-gcds-heading-1)                 | `headingRole`                                                   |
| [Radios](#radios-gcds-radios-1)                    | `autofocus`, `form`, `hideLegend`, `validity`, `<component>-id` |
| [Select](#select-gcds-select-1)                    | `autofocus`, `form`, `hideLabel`, `validity`                    |
| [Textarea](#textarea-gcds-textarea-1)              | `hideLimit`                                                     |

### Card `<gcds-card>`
New properties:

| Property | Attribute | Description                                                                                   | Type   | Default |
|----------|-----------|-----------------------------------------------------------------------------------------------|--------|---------|
| `target` | `target`  | Specifies where to open the linked document (e.g., `_blank`, `_self`).                        | string | _none_  |
| `rel`    | `rel`     | Specifies the relationship of the target object to the link (e.g., `noopener`, `noreferrer`). | string | _none_  |

### Checkboxes `<gcds-checkboxes>`
New properties:

| Property     | Attribute     | Description                                                            | Type      | Default     |
|--------------|---------------|------------------------------------------------------------------------|-----------|-------------|
| `autofocus`  | `autofocus`   | If true, the checkbox will be focused on component render              | `boolean` | `undefined` |
| `form`       | `form`        | Associates the component with a form                                   | string    | _none_      |
| `hideLabel`  | `hide-label`  | For single checkbox, specifies if the label is visually hidden or not. | boolean   | false       |
| `hideLegend` | `hide-legend` | For checkbox groups, specifies if the legend is visually hidden or not | boolean   | false       |
| `validity`   | `validity`    | Sets the validity state                                                | string    | _none_      |

### DateInput `<gcds-date-input>`
New properties:

| Property      | Attribute       | Description                                                    | Type      | Default     |
|---------------|-----------------|----------------------------------------------------------------|-----------|-------------|
| `autofocus`   | `autofocus`     | If true, the file uploader will be focused on component render | `boolean` | `undefined` |
| `form`        | `form`          | Associates the component with a form                           | string    | _none_      |
| `max`         | `max`           | Maximum allowed date                                           | string    | _none_      |
| `min`         | `min`           | Minimum allowed date                                           | string    | _none_      |
| `validity`    | `validity`      | Sets the validity state                                        | string    | _none_      |
| `dateInputId` | `date-input-id` | Sets a unique id for the component                             | string    | _none_      |

### FileUploader `<gcds-file-uploader>`
New properties:

| Property   | Attribute   | Description                                 | Type    | Default |
|------------|-------------|---------------------------------------------|---------|---------|
| `hideLabel`  | `hide-label`  | Hides the label visually                    | boolean | false   |
| `form`       | `form`        | Associates the component with a form        | string  | _none_  |
| `validity`   | `validity`    | Sets the validity state                     | string  | _none_  |

### Heading `<gcds-heading>`
New properties:

| Property     | Attribute     | Description                                 | Type    | Default |
|--------------|--------------|---------------------------------------------|---------|---------|
| `headingRole`  | `heading-role` | Sets the ARIA role for the heading          | string  | _none_  |

### Radios `<gcds-radios>`
New properties:

| Property     | Attribute     | Description                                            | Type      | Default     |
|--------------|---------------|--------------------------------------------------------|-----------|-------------|
| `autofocus`  | `autofocus`   | If true, the input will be focused on component render | `boolean` | `undefined` |
| `form`       | `form`        | Associates the component with a form                   | string    | _none_      |
| `hideLegend` | `hide-legend` | Hides the legend visually                              | boolean   | false       |
| `validity`   | `validity`    | Sets the validity state                                | string    | _none_      |
| `radiosId`   | `radios-id`   | Sets a unique id for the component                     | string    | _none_      |

### Select `<gcds-select>`
New properties:

| Property    | Attribute    | Description                                             | Type      | Default     |
|-------------|--------------|---------------------------------------------------------|-----------|-------------|
| `autofocus` | `autofocus`  | If true, the select will be focused on component render | `boolean` | `undefined` |
| `form`      | `form`       | Associates the component with a form                    | string    | _none_      |
| `hideLabel` | `hide-label` | Hides the label visually                                | boolean   | false       |
| `validity`  | `validity`   | Sets the validity state                                 | string    | _none_      |

### Textarea `<gcds-textarea>`
New properties:

| Property    | Attribute    | Description                 | Type    | Default |
|-------------|--------------|-----------------------------|---------|---------|
| `hideLimit` | `hide-limit` | Hides the character counter | boolean | false   |

---

## React SSR package removal (if using)

> [!IMPORTANT] 
> If you are using the React SSR package (`@cdssnc/gcds-components-react-ssr`), read this section carefully.

In the alpha phase, we provided a dedicated package for React SSR integration: `@cdssnc/gcds-components-react-ssr`. Due to its experimental nature and maintenance challenges, we have decided to remove this package in the stable release.

Stencil, the underlying technology for GCDS components, offers built-in SSR support. We recommend using Stencil's native SSR capabilities for React applications.

**👉 Action required:**
- Remove the `@cdssnc/gcds-components-react-ssr` package from your project dependencies.
  - There is no replacement at this time, but we are actively working on improving SSR support in future releases.

---

### Base font import (if not using CSS Shortcuts)

If you don't use CSS Shortcuts, you previously needed to manually include Google Fonts in your project to ensure correct typography. We have added a base Google Fonts import directly into the components package.

**👉 Action required:**
- Remove any manual Google Fonts imports from your project.

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

---

# Migration de la version alpha à la v1 stable

[English](#migrating-from-alpha-to-stable-v1)

Ce document vous aidera à migrer des versions antérieures de `@cdssnc/gcds-components` vers le paquet stable `@gcds-core/components`. Chaque parcours de migration est indiqué ci-dessous. Suivez la section qui correspond à votre version actuelle.

## Parcours de migration

- **[0.39.0 ou ultérieure → 1.0.0](#migration-de-la-version-0390-ou-dune-version-ultérieure-vers-la-version-100)** :star:
- [0.38.0 → 1.0.0](#migration-de-la-version-0380-à-100)
- [0.34.0 → 1.0.0](#migration-de-la-version-0340-à-100)
- [0.27.0 → 1.0.0](#migration-de-la-version-0270-à-100)
- [Versions antérieures à 0.27.0 → 1.0.0](#versions-antérieures-à-0270)

---

# Migration de la version 0.39.0 ou d’une version ultérieure vers la version 1.0.0

Cette section traite des changements non rétrocompatibles introduits dans le cadre **du travail d’harmonisation des API de composants** en vue de publier la **version stable `v1.0.0`**.

Les changements sont regroupés dans les catégories suivantes :

1. [Mettre à jour les paquets et chemins d’accès](#mettre-à-jour-les-paquets-et-chemins-daccès)
2. [Éléments supprimés et changements non rétrocompatibles aux API de composants](#éléments-supprimés-et-changements-non-rétrocompatibles-aux-api-de-composants)
3. [Nouvelles propriétés et fonctionnalités](#nouvelles-propriétés-et-fonctionnalités)
4. [À supprimer : paquet SSR React](#à-supprimer--paquet-react-ssr-le-cas-échéant)
5. [Importation des polices de base (si vous n’utilisez pas les raccourcis CSS)](#importation-des-polices-de-base-si-vous-nutilisez-pas-les-raccourcis-css)

## Mettre à jour les paquets et chemins d’accès

Vous devrez mettre à jour vos dépendances de projet pour utiliser les nouveaux paquets stables. Désinstallez les anciens paquets et installez les nouveaux.

| Ancien paquet                       | Nouveau paquet                                                                                     |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| `@cdssnc/gcds-components`           | `@gcds-core/components`                                                                            |
| `@cdssnc/gcds-components-react`     | `@gcds-core/components-react`                                                                      |
| `@cdssnc/gcds-components-vue`       | `@gcds-core/components-vue`                                                                        |
| `@cdssnc/gcds-components-react-ssr` | *Supprimé* (voir [À supprimer : paquet SSR React](#à-supprimer--paquet-react-ssr-le-cas-échéant) ) |
| `@cdssnc/gcds-components-angular`   | `@gcds-core/components-angular`                                                                    |

> [!IMPORTANT] 
> Vous devrez mettre à jour toutes les références aux anciens noms de paquet dans votre code base avec les nouveaux noms de paquet indiqués ci-dessus. Remplacez tous les chemins d’accès `@cdssnc/gcds-components*` par les chemins correspondants `@gcds-core/components*`. Assurez-vous d’examiner votre code base en entier afin de cerner toute autre référence aux anciens noms de paquet et les mettre à jour au besoin.

Pour commencer, modifiez vos importations de style et de scripts afin qu’elle vise les nouveaux chemins d’accès des paquets.

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

à

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@gcds-core/components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@gcds-core/components/dist/gcds/gcds.esm.js"
></script>
```

## Éléments supprimés et changements non rétrocompatibles aux API de composants

> [!IMPORTANT] 
> Cette section répertorie tous les changements non rétrocompatibles et les API supprimées. Examinez attentivement les modifications apportées à chaque composant et mettez à jour votre code base en conséquence.

| Composant (HTML/Angular/Vue)                                                   |                                                     | Ce qui a changé (supprimé)       | Type      |
|--------------------------------------------------------------------------------|-----------------------------------------------------|----------------------------------|-----------|
| [Carte](#carte-gcds-card)                                                      | [React](#carte-gcdscard)                            | Valeur `a` pour `card-title-tag` | Valeur    |
| [Conteneur](#conteneur-gcds-container)                                         | [React](#conteneur-gcdscontainer)                   | `centered`, `main-container`     | Propriété |
| [Pied de page](#pied-de-page-gcds-footer)                                      | [React](#pied-de-page-gcdsfooter)                   | `wordmark-variant`               | Propriété |
| [Grille](#grille-gcds-grid)                                                    | [React](#grille-gcdsgrid)                           | `centered`                       | Propriété |
| [En-tête](#en-tête-gcds-header)                                                | [React](#en-tête-gcdsheader)                        | `signature-variant`              | Propriété |
| [Lien](#lien-gcds-link)                                                        | [React](#lien-gcdslink)                             | `variant`                        | Propriété |
| [Avis](#avis-gcds-notice)                                                      | [React](#avis-gcdsnotice)                           | `type`                           | Propriété |
| [Bannière de phase](#bannière-de-phase-gcds-phase-banner)                      | [React](#bannière-de-phase-gcdsphasebanner)         | `<gcds-phase-banner>`            | Composant |
| [Zone de texte](#zone-de-texte-gcds-textarea)                                  | [React](#zone-de-texte-gcdstextarea)                | `character-count`                | Propriété |
| [Barre de navigation supérieure](#barre-de-navigation-supérieure-gcds-top-nav) | [React](#barre-de-navigation-supérieure-gcdstopnav) | `alignment`                      | Propriété |
| [Bannière de vérification](#bannière-de-vérification-gcds-verify-banner)       | [React](#bannière-de-vérification-gcdsverifybanner) | `<gcds-verify-banner>`           | Composant |

---

### Carte `<gcds-card>`

**❌ Valeur supprimée :** valeur `a` de la propriété `card-title-tag`

**👉Mesures à prendre&nbsp;:**

- Retirer `card-title-tag="a"` de tous les composants `<gcds-card>`.
  - Par défaut, le composant Carte utilise une balise d’ancrage (`<gcds-link>`). Il n’est donc pas nécessaire de définir cette propriété.

---

### Conteneur `<gcds-container>`

**❌ Propriétés supprimées :** `centered`, `main-container`

**👉Mesures à prendre&nbsp;:**

- `centered` → à remplacer par `alignment="center"`
- `main-container` **ou** `size="xl" main-container` → à remplacer par `layout="page"`
  - De plus, ajoutez `tag="main"` s’il s’agit du conteneur de contenu principal.

---

### Pied de page `<gcds-footer>`

**❌ Propriétés supprimées :** `wordmark-variant`

**👉Mesures à prendre&nbsp;:**

- Supprimez l’attribut `wordmark-variant` de tous les composants `<gcds-footer>`.
  - L’utilisation de la variante <code>white</code> du composant <code>gcds-signature</code> à l’intérieur du composant <code>gcds-footer</code> crée des problèmes de contraste des couleurs. Retirer l’option d’utiliser la variante <code>white</code> du composant <code>gcds-signature</code> assure une meilleure accessibilité intégrée pour le composant <code>gcds-footer</code>.

---

### Grille `<gcds-grid>`

**❌ Propriétés supprimées :** `centered`

**👉Mesures à prendre&nbsp;:**

- `centered` → à remplacer par `alignment="center"`

---

### En-tête `<gcds-header>`

**❌ Propriétés supprimées :** `signature-variant`

**👉Mesures à prendre&nbsp;:**

- Supprimez l’attribut `signature-variant` de tous les composants `<gcds-header>`.
  - L’utilisation de la variante <code>white</code> du composant <code>gcds-signature</code> à l’intérieur du composant <code>gcds-header</code> affiche le composant <code>gcds-signature</code> en blanc tout en affichant le reste des éléments intégrés dans leur palette de couleurs normale. Cela crée une divergence entre la signature et le reste des composants. Si un développeur ou une développeuse doit utiliser une signature <code>white</code>, la signature peut quand même être passée dans l’emplacement de la <code>signature</code>.

---

### Lien `<gcds-link>`

**❌ Propriétés supprimées :** `variant`

**👉Mesures à prendre&nbsp;:**

- `variant` → à remplacer par `link-role`

---

### Avis `<gcds-notice>`

**❌ Propriétés supprimées :** `type`

**👉Mesures à prendre&nbsp;:**

- `type` → à remplacer par `notice-role`

---

### Bannière de phase `<gcds-phase-banner>`

**❌ Composant supprimé :** `<gcds-phase-banner>`

**👉Mesures à prendre&nbsp;:**

- Supprimez toute utilisation de `<gcds-phase-banner>` dans votre code base.
  - Ce composant n’a jamais été officiellement documenté. Le supprimer aide à clarifier le code base , évitant ainsi toute confusion potentielle ou utilisation accidentelle à l’avenir.

---

### Zone de texte `<gcds-textarea>`

**❌ Propriétés supprimées :** `character-count`

**👉Mesures à prendre&nbsp;:**

- `character-count` → à remplacer par `maxlength`
  - De plus, ajoutez l’attribut `hide-limit` si vous souhaitez masquer le compteur de caractères.

---

### Barre de navigation supérieure `<gcds-top-nav>`

**❌ Valeurs supprimées :** valeurs `left` | `right` | `center` de la propriété `alignment`

**👉Mesures à prendre&nbsp;:**

- `alignment="left"` → utilisez `alignment="start"`
- `alignment="right"` → utilisez `alignment="end"`
- `alignment="center"`  → supprimez l’attribut (la valeur *center* n’est plus prise en charge; la valeur par défaut est *left-aligned*)
  - Les en-têtes centrés créent des problèmes d’utilisabilité et de conception. Ils ajoutent un troisième point focal visuel, s’appuient sur une symétrie parfaite difficile à maintenir—en particulier avec de longs titres ou des fenêtres rétrécissantes—et offrent des avantages incertains. Le fait de ne fournir que des options alignées à gauche ou à droite permet de maintenir des conventions de conception cohérentes et recherchées dans l’ensemble du GC , tandis que l’ajout d’une troisième option introduit une fragmentation inutile.

---

### Bannière de vérification `<gcds-verify-banner>`

**❌ Composant supprimé :** `<gcds-verify-banner>`

**👉Mesures à prendre&nbsp;:**

- Supprimez toute utilisation de `<gcds-verify-banner>` dans votre code base.
  - Ce composant n’a jamais été officiellement documenté. Le supprimer aide à clarifier le code base, évitant ainsi toute confusion potentielle ou utilisation accidentelle à l’avenir.

---

> **Passer à** [Nouvelles propriétés et fonctionnalités](#nouvelles-propriétés-et-fonctionnalités)

---

### Composants React `<Gcds*>`

---

### Carte `<GcdsCard>`

**❌ Valeur supprimée :** valeur `a` de la propriété `cardTitleTag`

**👉Mesures à prendre&nbsp;:**

- Retirer `cardTitleTag="a"` de tous les composants `<GcdsCard>`.
  - Par défaut, le composant Carte utilise une balise d’ancrage (`<GcdsLink>`). Il n’est donc pas nécessaire de définir cette propriété.

---

### Conteneur `<GcdsContainer>`

**❌ Propriétés supprimées :** `centered`, `mainContainer`

**👉Mesures à prendre&nbsp;:**

- `centered` → à remplacer par `alignment="center"`
- `mainContainer={true}` **ou** `size="xl" mainContainer={true}` → à remplacer par `layout="page"`
  - De plus, ajoutez `tag="main"` s’il s’agit du conteneur de contenu principal.
  -

---

### Pied de page `<GcdsFooter>`

**❌ Propriétés supprimées :** `wordmarkVariant`

**👉Mesures à prendre&nbsp;:**

- Supprimez l’attribut `wordmarkVariant` de tous les composants `<GcdsFooter>`.
  - L’utilisation de la variante <code>white</code> du composant <code>GcdsSignature</code> à l’intérieur du composant <code>GcdsFooter</code> crée des problèmes de contraste des couleurs. Retirer l’option d’utiliser la variante <code>white</code> du composant <code>GcdsSignature</code> assure une meilleure accessibilité intégrée pour le composant <code>GcdsFooter</code>.

---

### Grille `<GcdsGrid>`

**❌ Propriétés supprimées :** `centered`

**👉Mesures à prendre&nbsp;:**

- `centered={true}` → à remplacer par `alignment="center"`

---

### En-tête `<GcdsHeader>`

**❌ Propriétés supprimées :** `signatureVariant`

**👉Mesures à prendre&nbsp;:**

- Supprimez l’attribut `signatureVariant` de tous les composants `<GcdsHeader>`.
  - L’utilisation de la variante <code>white</code> du composant <code>GcdsSignature</code> à l’intérieur du composant <code>GcdsHeader</code> affiche le composant <code>GcdsSignature</code> en blanc tout en affichant le reste des éléments intégrés dans leur palette de couleurs normale. Cela crée une divergence entre la signature et le reste des composants. Si un développeur ou une développeuse doit utiliser une signature <code>white</code>, la signature peut quand même être passée dans la propriété <code>signature</code>.

---

### Lien `<GcdsLink>`

**❌ Propriétés supprimées :** `variant`

**👉Mesures à prendre&nbsp;:**

- `variant` → à remplacer par `linkRole`

---

### Avis `<GcdsNotice>`

**❌ Propriétés supprimées :** `type`

**👉Mesures à prendre&nbsp;:**

- `type` → à remplacer par `noticeRole`

---

### Bannière de phase `<GcdsPhaseBanner>`

**❌ Composant supprimé :** `<GcdsPhaseBanner>`

**👉Mesures à prendre&nbsp;:**

- Supprimez toute utilisation de `<GcdsPhaseBanner>` dans votre code base.
  - Ce composant n’a jamais été officiellement documenté. Le supprimer aide à clarifier le code base , évitant ainsi toute confusion potentielle ou utilisation accidentelle à l’avenir.

---

### Zone de texte `<GcdsTextarea>`

**❌ Propriétés supprimées :** `characterCount`

**👉Mesures à prendre&nbsp;:**

- `characterCount` → à remplacer par `maxLength`
  - De plus, ajoutez la propriété `hideLimit` si vous souhaitez masquer le compteur de caractères.

---

### Barre de navigation supérieure `<GcdsTopNav>`

**❌ Valeurs supprimées :** valeurs `left` | `right` | `center` de la propriété `alignment`

**👉Mesures à prendre&nbsp;:**

- `alignment="left"` → utilisez `alignment="start"`
- `alignment="right"` → utilisez `alignment="end"`
- `alignment="center"`  → supprimez l’attribut (la valeur *center* n’est plus prise en charge; la valeur par défaut est *left-aligned*)
  - Les en-têtes centrés créent des problèmes d’utilisabilité et de conception. Ils ajoutent un troisième point focal visuel, s’appuient sur une symétrie parfaite difficile à maintenir—en particulier avec de longs titres ou des fenêtres rétrécissantes—et offrent des avantages incertains. Le fait de ne fournir que des options alignées à gauche ou à droite permet de maintenir des conventions de conception cohérentes et recherchées dans l’ensemble du GC , tandis que l’ajout d’une troisième option introduit une fragmentation inutile.

---

### Bannière de vérification `<GcdsVerifyBanner>`

**❌ Composant supprimé :** `<GcdsVerifyBanner>`

**👉Mesures à prendre&nbsp;:**

- Supprimez toute utilisation de `<GcdsVerifyBanner>` dans votre code base.
  - Ce composant n’a jamais été officiellement documenté. Le supprimer aide à clarifier le code base, évitant ainsi toute confusion potentielle ou utilisation accidentelle à l’avenir.

---

## Nouvelles propriétés et fonctionnalités

Ce tableau est un index de toutes les nouvelles propriétés et fonctionnalités. Cliquez sur un composant pour accéder aux instructions de migration détaillées.

| Composant                                                              | Nouvelle API/propriété/fonctionnalité                           |
|------------------------------------------------------------------------|-----------------------------------------------------------------|
| [Carte](#carte-gcds-card-1)                                            | `target`, `rel`                                                 |
| [Cases à cocher](#cases-à-cocher-gcds-checkboxes)                      | `autofocus`, `form`, `hideLabel`, `hideLegend`, `validity`      |
| [Champ de date](#champ-de-date-gcds-date-input)                        | `autofocus`, `form`, `max`, `min`, `validity`, `<component>-id` |
| [Téléverseur de fichiers](#téléverseur-de-fichiers-gcds-file-uploader) | `autofocus`, `form`, `hideLabel`, `form`, `validity`            |
| [Titre](#titre-gcds-heading)                                           | `headingRole`                                                   |
| [Boutons radio](#boutons-radio-gcds-radios)                            | `autofocus`, `form`, `hideLegend`, `validity`, `<component>-id` |
| [Sélection](#sélection-gcds-select)                                    | `autofocus`, `form`, `hideLabel`, `validity`                    |
| [Zone de texte](#zone-de-texte-gcds-textarea-1)                        | `hideLimit`                                                     |

### Carte `<gcds-card>`

Nouvelles propriétés&nbsp;:

| Propriété | Attribut | Description                                                                            | Type   | Curseur par défaut |
|-----------|----------|----------------------------------------------------------------------------------------|--------|--------------------|
| `target`  | `target` | Indique où ouvrir le document lié (p. ex., `_blank`, `_self`)                          | chaîne | _aucune_           |
| `rel`     | `rel`    | Indique la relation entre l’objet cible et le lien (p. ex., `noopener`, `noreferrer`). | chaîne | _aucune_           |

### Cases à cocher `<gcds-checkboxes>`

Nouvelles propriétés&nbsp;:

| Propriété    | Attribut      | Description                                                                                | Type      | Curseur par défaut |
|--------------|---------------|--------------------------------------------------------------------------------------------|-----------|--------------------|
| `autofocus`  | `autofocus`   | Si `true`, la case à cocher sera ciblée lors du rendu du composant.                        | `boolean` | `undefined`        |
| `form`       | `form`        | Associe le composant à un formulaire.                                                      | chaîne    | _aucune_           |
| `hideLabel`  | `hide-label`  | Pour une seule case à cocher, indique si l’étiquette est masquée visuellement ou non.      | booléen   | false              |
| `hideLegend` | `hide-legend` | Pour les groupes de cases à cocher, indique si la légende est masquée visuellement ou non. | booléen   | false              |
| `validity`   | `validity`    | Définit l’état de validité                                                                 | chaîne    | _aucune_           |

### Champ de date `<gcds-date-input>`

Nouvelles propriétés&nbsp;:

| Propriété     | Attribut        | Description                                                                 | Type      | Curseur par défaut |
|---------------|-----------------|-----------------------------------------------------------------------------|-----------|--------------------|
| `autofocus`   | `autofocus`     | Si `true`, le téléverseur de fichier sera ciblé lors du rendu du composant. | `boolean` | `undefined`        |
| `form`        | `form`          | Associe le composant à un formulaire.                                       | chaîne    | _aucune_           |
| `max`         | `max`           | Date maximale possible                                                      | chaîne    | _aucune_           |
| `min`         | `min`           | Date minimale possible                                                      | chaîne    | _aucune_           |
| `validity`    | `validity`      | Définit l’état de validité                                                  | chaîne    | _aucune_           |
| `dateInputId` | `date-input-id` | Définit un ID unique pour le composant                                      | chaîne    | _aucune_           |

### Téléverseur de fichiers `<gcds-file-uploader>`

Nouvelles propriétés&nbsp;:

| Propriété   | Attribut     | Description                           | Type    | Curseur par défaut |
|-------------|--------------|---------------------------------------|---------|--------------------|
| `hideLabel` | `hide-label` | Masque visuellement l’étiquette       | booléen | false              |
| `form`      | `form`       | Associe le composant à un formulaire. | chaîne  | _aucune_           |
| `validity`  | `validity`   | Définit l’état de validité            | chaîne  | _aucune_           |

### Titre `<gcds-heading>`

Nouvelles propriétés&nbsp;:

| Propriété     | Attribut       | Description                        | Type   | Curseur par défaut |
|---------------|----------------|------------------------------------|--------|--------------------|
| `headingRole` | `heading-role` | Définit le rôle ARIA pour le titre | chaîne | _aucune_           |

### Boutons radio `<gcds-radios>`

Nouvelles propriétés&nbsp;:

| Propriété    | Attribut      | Description                                                          | Type      | Curseur par défaut |
|--------------|---------------|----------------------------------------------------------------------|-----------|--------------------|
| `autofocus`  | `autofocus`   | Si `true`, le champ de saisie sera ciblé lors du rendu du composant. | `boolean` | `undefined`        |
| `form`       | `form`        | Associe le composant à un formulaire.                                | chaîne    | _aucune_           |
| `hideLegend` | `hide-legend` | Masque visuellement la légende                                       | booléen   | false              |
| `validity`   | `validity`    | Définit l’état de validité                                           | chaîne    | _aucune_           |
| `radiosId`   | `radios-id`   | Définit un ID unique pour le composant                               | chaîne    | _aucune_           |

### Sélection `<gcds-select>`

Nouvelles propriétés&nbsp;:

| Propriété   | Attribut     | Description                                                     | Type      | Curseur par défaut |
|-------------|--------------|-----------------------------------------------------------------|-----------|--------------------|
| `autofocus` | `autofocus`  | Si `true`, la sélection sera ciblée lors du rendu du composant. | `boolean` | `undefined`        |
| `form`      | `form`       | Associe le composant à un formulaire.                           | chaîne    | _aucune_           |
| `hideLabel` | `hide-label` | Masque visuellement l’étiquette                                 | booléen   | false              |
| `validity`  | `validity`   | Définit l’état de validité                                      | chaîne    | _aucune_           |

### Zone de texte `<gcds-textarea>`

Nouvelles propriétés&nbsp;:

| Propriété   | Attribut     | Description                      | Type    | Curseur par défaut |
|-------------|--------------|----------------------------------|---------|--------------------|
| `hideLimit` | `hide-limit` | Masque le compteur de caractères | booléen | false              |

---

## À supprimer : paquet React SSR (le cas échéant)

> [!IMPORTANT] 
> Si vous utilisez le paquet React SSR (`@cdssnc/gcds-Components-react-ssr`), lisez attentivement cette section.

Dans la phase alpha, nous avons fourni un paquet consacré à l’intégration de React SSR : `@cdssnc/gcds-components-react-ssr`. En raison de sa nature expérimentale et des difficultés liées à sa maintenance, nous avons décidé de retirer ce paquet de la version stable.

Stencil, la technologie sous-jacente des composants de Système de design GC, prend en charge SSR de façon native. Nous recommandons d’utiliser les capacités SSR natives de Stencil pour les applications React.

**👉Mesures à prendre&nbsp;:**

- Supprimez le paquet `@cdssnc/gcds-components-react-ssr` de vos dépendances de projet.
  - Il n’y a pas de solution de rechange pour l’instant, mais nous travaillons activement à améliorer la prise en charge de SSR dans les prochaines versions.

---

### Importation des polices de base (si vous n’utilisez pas les raccourcis CSS)

Si vous n’utilisez pas les raccourcis CSS, vous deviez auparavant inclure manuellement les polices Google dans votre projet pour garantir une typographie correcte. Nous avons ajouté l’importation des polices Google de base directement dans le paquet de composantes.

**👉Mesures à prendre&nbsp;:**

- Supprimez toute importation manuelle des polices Google de votre projet.

# Migration de la version 0.38.0 à 1.0.0

Pour migrer à partir de la version 0.38.0, vous devez d’abord effectuer une mise à niveau vers au moins la version 0.39.0.

Prenez en charge le changement non rétrocompatible dans la version 0.39.0, décrit dans les [notes de version 0.39](../../archived/CHANGELOG.md#0390-1). Une propriété (`placeholder`) a été supprimée du composant `<gcds-input>`.

**Prochaines étapes**: suivez la section [0.39.0 ou ultérieure → 1.0.0](#migration-de-la-version-0390-ou-dune-version-ultérieure-vers-la-version-100) ci-dessus pour plus d’instructions.

# Migration de la version 0.34.0 à 1.0.0

Pour migrer à partir de la version 0.34.0, vous devez d’abord effectuer une mise à niveau vers au moins la version 0.35.0. Prenez en charge le changement non rétrocompatible dans la version 0.35.0, décrit dans les [notes de version 0.35](../../archived/CHANGELOG.md#0350-1).

**Prochaines étapes**: suivez la section [0.38.0 ou ultérieure → 1.0.0](#migration-de-la-version-0380-à-100) ci-dessus pour plus d’instructions.

# Migration de la version 0.27.0 à 1.0.0

Pour migrer à partir de la version 0.27.0, vous devez d’abord effectuer une mise à niveau vers au moins la version 0.28.0. Prenez en charge le changement non rétrocompatible dans la version 0.28.0, décrit dans les [notes de version 0.28](../../archived/CHANGELOG.md#0280-1).

**Prochaines étapes**: suivez la section [0.34.0 ou ultérieure → 1.0.0](#migration-de-la-version-0340-à-100) ci-dessus pour plus d’instructions.

# Versions antérieures à 0.27.0

Pour obtenir une liste complète des changements dans chaque version, reportez-vous au fichier [CHANGELOG](../../archived/CHANGELOG.md#journal-des-modifications) archivé.