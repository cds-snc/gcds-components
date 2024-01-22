([Français](#journal-des-modifications))

# Changelog

All notable changes to this project will be documented in this file.

## [0.18.0](https://github.com/cds-snc/gcds-components/compare/v0.17.1...v0.18.0) (2024-01-22)


### Features

* add light link-variant to link component ([#358](https://github.com/cds-snc/gcds-components/issues/358)) ([34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0))
* add new grid functionality ([#356](https://github.com/cds-snc/gcds-components/issues/356)) ([3a1a9c6](https://github.com/cds-snc/gcds-components/commit/3a1a9c694245ae2fad37cf7878618aa7a0584841))


### Bug Fixes

* File-uploader not validating properly ([#364](https://github.com/cds-snc/gcds-components/issues/364)) ([ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58))
* header slots in story ([#362](https://github.com/cds-snc/gcds-components/issues/362)) ([a96c1f8](https://github.com/cds-snc/gcds-components/commit/a96c1f8512d6bfd3a0445727a0530d7d07f35838))
* header slots in story ([#362](https://github.com/cds-snc/gcds-components/issues/362)) ([ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf))
* link variant prop name ([#363](https://github.com/cds-snc/gcds-components/issues/363)) ([ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141))
* update font awesome instructions in readme ([#353](https://github.com/cds-snc/gcds-components/issues/353)) ([e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9))
* update renovate base branch ([#370](https://github.com/cds-snc/gcds-components/issues/370)) ([e8d0947](https://github.com/cds-snc/gcds-components/commit/e8d09475be5f0f46e64f233f7803117c90d8733f))

## v0.18.1

### Minor

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) - Export ContentValues from gcds-grid to fix angular package build

## v0.18.0

### New features

- Grid functionality
  - Ability to add individually sized grid columns to grids as well as allowing to set equal height rows.


### Minor

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) - Add light variant to link component

### Patch

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) - Link variant property name fix
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) - File uploader validation fix
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) - Updated Header slots in storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) - Fixed storybook resources link
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) - Updated instructions for font awesome in README

## v0.17.1

### Patch

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) - Update stencil build configuration for better integration with multiple frameworks (Nextjs and create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2f41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) - fix: change slot styles to initial

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) - Update demo content

## v0.17.0

### New features

- Link component (`gcds-link`)
  - New `gcds-link` component to allow users to navigate to a new page, website or section on the current page.

### Minor

- https://github.com/cds-snc/gcds-components/pull/305 - [2ffc292](https://github.com/cds-snc/gcds-components/commit/2ffc292828fd5eed53a4eb33cbe753da08f9dde0) - Add `gcds-link` to component library

### Patch

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) - Add default value for margin top + bottom for text component
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) - Improve storybook a11y for live demos.

## v0.16.0

### New features

- Heading component (`gcds-heading`)
  - New `gcds-heading` to render headings in GCDS styles

### Minor

- https://github.com/cds-snc/gcds-components/pull/306 - [c972bef](https://github.com/cds-snc/gcds-components/commit/c972befacb6961fed73c983df1fb4fda6cbc9ca5) - Add `gcds-heading` to component library

### Patch

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) - Fix slot CSS in gcds-breadcrumbs-item to display text underline

## v0.15.0

### New features

- Text component (`gcds-text`)
  - New `gcds-text` to render text content in GCDS style
- Screen reader only component (`gcds-sr-only`)
  - New `gcds-sr-only` to hide text content only available to assistive technologies

### Minor

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) - Add `gcds-text` to component library
- https://github.com/cds-snc/gcds-components/pull/315 - [8117534](https://github.com/cds-snc/gcds-components/commit/8117534ffe52c998be9e09002f1dbbe1ec528f48) - Add `gcds-sr-only` to component library

### Patch

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) - Update media query in `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) - Remove nav landmark label to prevent confusion in `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) - Set default property values in `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) - Add box-shadow on focus to components for consistent focus state
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) - Add slot styles to help patch Chrome accessibility issues to components that use text based slots

## v0.14.0

### New features

- Theme and topic menu component (`gcds-topic-menu`)
  - New `gcds-topic-menu` component for canada.ca compliance

### Minor

- https://github.com/cds-snc/gcds-components/pull/223 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Add `gcds-topic-menu` to component library

### Patch

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) - Update mobile view and French text in `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) - Set `columns` property to required in `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) - Accessibility fix for `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) - Accessibility fix for `gcds-nav-group`

## v0.13.0

### New features

- Search component (`gcds-search`)
  - New `gcds-search` component for canada.ca compliance

### Breaking changes

- Header component (`gcds-header`)
  - `topnav` slot in the `gcds-header` has been renamed to `skip-to-nav`

### Minor

- https://github.com/cds-snc/gcds-components/pull/212 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Add `gcds-search` to component library
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Rename `topnav` slot in `gcds-header` to `skip-to-nav`

### Patch

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) - Update `gcds-top-nav` component style to match design files
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) - Update hover styles for `gcds-file-uploader` and `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Update text in `gcds-file-uploader` button to `Choose file`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) - Remove icon from `gcds-file-uploader` button label

## v0.12.1

### Patch

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) - Accessibility fixes for `gcds-file-uploader` and navigation components

## v0.12.0

### New features

- Navigation components (`gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` and `gcds-nav-link`)
  - Navigation components to provide options for main navigation landmarks
- Date modified type (`gcds-date-modified`)
  - Added `type` prop to chose between displaying "Date modified" and "Version"

### Breaking changes

- Site menu component (`gcds-site-menu`)
  - `gcds-site-menu` has been removed from the component library, replaced with `gcds-top-nav`
- Error summary (`gcds-error-summary`)
  - `sub-heading` prop has been removed from the `gcds-error-summary`

### Minor

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) - Add `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` and `gcds-nav-link` components to library
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Update form error styling
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Remove `sub-heading` from `gcds-error-summary`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Add `type` prop to `gcds-date-modified` to display "Version" number if needed

### Patch

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Add `experimentalImportInjection` to build to help integration of components with bundlers like Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Fix `onChange` event for `gcds-checkbox`

## v0.11.0

### New features

- Card component (`gcds-card`)
  - New `gcds-card` component to display related pieces of information as a single unit

### Breaking changes

- Container component (`gcds-container`)
  - `container` property has been renamed `size`

### Minor

- https://github.com/cds-snc/gcds-components/pull/183 - [b64db5d](https://github.com/cds-snc/gcds-components/commit/b64db5d0877adfdd38d400b2a0687d039760b08d) - Add `gcds-card` component to library

### Patch

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) - Add margin + padding props to `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) - Add border prop to `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) - Update `requiredFileInput` validator to use `FileList` instead of `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) - Update `requiredFileInput` validator to use `FileList` instead of `value`

## v0.10.3

### Patch

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) - Change alert title from h5 tag to p + strong tag
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) - change pagination border to be more consistent with text and background colour

## v0.10.2

### Patch

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) - Add value to error summary links in storybook story to display error summary instead of blank screen
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) - Update french text for error summary default heading
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) - Update demo with new UF name + add gcds-container

## v0.10.1

### Patch

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) - Update prop description of `gcds-breadcrumbs`

## v0.10.0

### New features

- Error summary component
  - New `gcds-error-summary` component for form validation on submit.
- Angular v15 update
  - Update `@cdssnc/gcds-components-angular` to use Angular v15. Package will no longer work with Angular v14.

### Minor

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) - Add `gcds-error-summary` to component library
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) - Update `@cdssnc/gcds-components-angular` to use Angular v15

### Patch

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) - Add missing "About this site" heading to gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) - States and styles of `gcds-lang-toggle` and `gcds-button` have been updated to be consistent with Figma library
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) - Fix display issue showing an extra chevron when using hide-canada-link attribute in gcds-breadcrumbs
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) - Change gcds-fieldset to no longer use shadowDom to match other form components

---

# Journal des modifications

Tout changement important à ce projet sera consigné dans le présent fichier.

## v0.17.0

### Nouvelles fonctionnalités

- Composant lien (`gcds-link`)
  - Nouveau composant `gcds-link` permettant la navigation vers une nouvelle page, un site web our une section à l`intérieur de la page courante

### Mineur

- https://github.com/cds-snc/gcds-components/pull/305 - [2ffc292](https://github.com/cds-snc/gcds-components/commit/2ffc292828fd5eed53a4eb33cbe753da08f9dde0) - Composant `gcds-link` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) - Ajout de valeur par défaut pour la marge du haut et du bas du composant texte
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) - Amélioration de l`accessibilité de `storybook` pour la section démos

## v0.16.0

### Nouvelles fonctionnalités

- Composant en-têtes (`gcds-heading`)
  - Nouveau composant `gcds-heading` pour générer les en-têtes avec les styles du SDGC

### Mineur

- https://github.com/cds-snc/gcds-components/pull/306 - [c972bef](https://github.com/cds-snc/gcds-components/commit/c972befacb6961fed73c983df1fb4fda6cbc9ca5) - Composant `gcds-heading` ajouté à la biliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) - CSS `slot` dans `gcds-breadcrumbs-item` corrigé afin d`afficher le text souligné

## v0.15.0

### Nouvelles fonctionnalités

- Composant texte (`gcds-text`)
  - Nouveau composant `gcds-text` pour générer du contenu texte dans les styles du SDGC
- Composant lecteur d`écran seulement (`gcds-sr-only`)
  - Nouveau composant `gcds-sr-only` pour cacher le contenu du texte disponible seulement avec des technologies d`assistance

### Mineur

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) - Composant `gcds-text` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/315 - [8117534](https://github.com/cds-snc/gcds-components/commit/8117534ffe52c998be9e09002f1dbbe1ec528f48) - Composant `gcds-sr-only` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) - Mise à jour de `media query` dans `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) - Étiquette `nav langdmark` supprimée pour prévenir la confusion dans `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) - Déterminer les valeurs par défaut des propriétés dans `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) - L`option `box-shadow` ajouté au focus pour les composants afin d`avoir une constance du `focus state`
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) -  Ajout de styles pour la balise `slot` pour régler des problèmes d`accessibilité dans Chrome pour les composants qui utilisent cette balise avec du texte

## v0.14.0

### Nouvelles fonctionnalités

- Composant menu des thèmes et sujets (`gcds-topic-menu`)
  - Nouveau composant `gcds-topic-menu` pour la conformité avec canada.ca

### Mineur

- https://github.com/cds-snc/gcds-components/pull/223 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Composant `gcds-topic-menu` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) - Affichage mobile et texte français mis à jour pour le composant `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) - Propriété `columns` (colonnes) définit comme obligatoire pour le composant `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) - Correctif d’accessibilité appliqué pour le composant `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) - Correctif d’accessibilité appliqué pour le composant `gcds-nav-group`

## v0.13.0

### Nouvelles fonctionnalités

- Composant recherche (`gcds-search`)
  - Nouveau composant `gcds-search` pour la conformité avec canada.ca

### Changements cassants

- Composant en-tête (`gcds-header`)
  - L’élément `topnav` du composant `gcds-header` a été renommé à `skip-to-nav`

### Mineur

- https://github.com/cds-snc/gcds-components/pull/212 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Composant `gcds-search` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Élément `topnav` du composant `gcds-header` renommé à `skip-to-nav`

### Correctif

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) - Styles d’éléments en survol pour le composant `gcds-top-nav` mis à jour afin d’être conformes au fichier de design
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) - Styles d’éléments en survol pour les composants `gcds-file-uploader` et `gcds-pagination` mis à jour
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Texte de bouton du composant `gcds-file-uploader` modifié à `Parcourir`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) - Icône retirée de l’étiquette de bouton pour le composant `gcds-file-uploader`

## v0.12.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) - Correctifs d’accessibilité appliqués pour les composants `gcds-file-uploader` et navigation

## v0.12.0

### Nouvelles fonctionnalités

- Composants de navigation (`gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link`)
  - Composants de navigation offrant différentes options pour les principaux repères de navigation
- Type pour le composant date de modification (`gcds-date-modified`)
  - Popriété `type` ajoutée au composant pour distinguer entre la « date de modification » et la « version »

### Changements cassants

- Composant menu de navigation globale (`gcds-site-menu`)
  - Composant `gcds-site-menu` retiré de la bibliothèque de composant et remplacé par `gcds-top-nav`
- Résumé des erreurs (`gcds-error-summary`)
  - Propriété `sub-heading` (sous-titre) supprimée du composant `gcds-error-summary`

### Mineur

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) - Composants `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link` ajoutés à la bibliothèque
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Styles des erreurs de formulaire mis à jour
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - `sub-heading` supprimé du composant `gcds-error-summary`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Propriété `type` ajoutée au composant `gcds-date-modified` afin d’afficher le numéro de version au besoin

### Correctif

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - `experimentalImportInjection` ajouté à la version afin d’aider l’intégration de composants nécessitant des installations regroupées comme Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Évènement `onChange` corrigé pour le composant `gcds-checkbox`

## v0.11.0

### Nouvelles fonctionnalités

- Composant carte (`gcds-card`)
  - Nouveau composant `gcds-card` permettant d’afficher une série de renseignements connexes dans un seul élément

### Changements cassants

- Composant boîte (`gcds-container`)
  - Propriété `container` (boîte) renommée à `size` (taille)

### Mineur

- https://github.com/cds-snc/gcds-components/pull/183 - [b64db5d](https://github.com/cds-snc/gcds-components/commit/b64db5d0877adfdd38d400b2a0687d039760b08d) - Composant `gcds-card` ajouté à la bibliothèque de composants

### Correctif

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) - Propriétés margin et padding (marge et marge intérieure) ajoutées au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) - Propriété border (bordure) ajoutée au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) - Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) - Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`

## v0.10.3

### Correctif

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) - Titre de l’alerte modifiée d’une balise h5 à une balise p + strong
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) - Bordure du composant pagination modifiée pour agencer avec le texte et la couleur de fond

## v0.10.2

### Correctif

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) - Valeur ajoutée aux liens du résumé des erreurs dans storybook afin d’afficher le résumé des erreurs plutôt qu’un écran vide
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) - Texte français mis à jour dans l’en-tête par défaut du résumé des erreurs
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) - Nouveau nom UF et composant gcds-container ajoutés à la démonstration

## v0.10.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) - Descriptions des propriétés du composant `gcds-breadcrumbs` mises à jour

## v0.10.0

### Nouvelles fonctionnalités

- Composant résumé des erreurs
  - Nouveau composant `gcds-error-summary` permettant la validation de formulaires avant la soumission
- Mise à jour vers Angular v15
  - Le dépôt `@cdssnc/gcds-components-angular` a été mis à jour vers Angular v15. Le package ne fonctionnera plus avec Angular v14.

### Mineur

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) - Composant `gcds-error-summary` ajouté à la bibliothèque de composants
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) - Dépôt `@cdssnc/gcds-components-angular` mis à jour vers Angular v15

### Correctif

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) - En-tête manquant « À propos de ce site » ajouté au composant gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) - États et styles des composants `gcds-lang-toggle` et `gcds-button` mis à jour afin d’être conformes à la bibliothèque Figma
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) - Problème d’affichage résolu. Le chevron de trop qui s’affichait lorsqu’on utilisait l’attribut hide-canada-link dans le composant gcds-breadcrumbs a été supprimé.
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) - Composant gcds-fieldset modifié pour ne plus utiliser shadowDom, conformément aux autres composants de formulaire
