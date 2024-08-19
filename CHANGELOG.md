([Français](#journal-des-modifications))

# Changelog

All notable changes to this project will be documented in this file.

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.1...gcds-components-v0.25.0) (2024-08-19)

### Breaking changes

The Card and Stepper components have been redesigned and will have some changes in their API structure.

#### Updates to the Card component

The property `type` will be removed as the component will now only support link interactions. If you’re using `type=action`, note that this will be unsupported in this release.

The `tag` property will be replaced by a new property named `badge`.

The property `title-element` will be replaced by a new property named `card-title-tag`.

We’re dropping support for the `footer` slot (`slot="footer"`). We’re removing it as we haven’t observed any use of the slot.

**New**: We’ve introduced a `slot` to support the display of HTML text formatting within the Card component. You can still use the description property for this purpose with a simple string value (text) only.

##### Old implementation

```html
<gcds-card
  type="link"
  card-title=""
  href=""
  title-element=""
  description=""
  tag=""
  img-src=""
  img-alt=""
>
 <slot name=”footer”></slot>
</gcds-card>
```

##### New implementation

```html
<gcds-card
  card-title=""
  href=""
  card-title-tag="a"
  description=""
  badge=""
  img-src=""
  img-alt=""
>
 <slot></slot>
</gcds-card>
```

#### Updates to the Stepper component

**New**: A new `tag` property will be available to allow the developer to choose the right heading to render the element.

**New (required)**: The stepper will now require text or an element passed into the `slot` to display the heading element. It’s a required property and the component will not render without it.

If you experience issues with the change, ‌‌[contact us](https://design-system.alpha.canada.ca/en/contact/).

##### Old implementation

```html
<gcds-stepper
  current-step=""
  total-steps=""
></gcds-stepper>
```

##### New implementation

```html
<gcds-stepper
  current-step=""
  total-steps=""
  tag=""
>
  <slot></slot>
</gcds-stepper>
```

### New Features

- Add gcds-date-input component ([#607](https://github.com/cds-snc/gcds-components/issues/607)) ([ce0b4cc](https://github.com/cds-snc/gcds-components/commit/ce0b4ccdbcc9b25ebd8fb8e5b5ca03f4d49332a5))
- add new main-container prop to container ([#613](https://github.com/cds-snc/gcds-components/issues/613)) ([4eef9b3](https://github.com/cds-snc/gcds-components/commit/4eef9b394d17bac749bd78d5131e97df4e97f7e9))
- update gcds-card (breaking change) ([#578](https://github.com/cds-snc/gcds-components/issues/578)) ([4a72105](https://github.com/cds-snc/gcds-components/commit/4a72105de07e5bb5675241729c443e4bb6f89925))
- updates to stepper component (breaking change + new tag attribute) ([#573](https://github.com/cds-snc/gcds-components/issues/573)) ([0f8bd2f](https://github.com/cds-snc/gcds-components/commit/0f8bd2f3031557beca5377765928c13e0a362025))

### Code Refactoring

- change fieldset legend required to span ([#612](https://github.com/cds-snc/gcds-components/issues/612)) ([ca5108f](https://github.com/cds-snc/gcds-components/commit/ca5108f0d29327b62cd9b694b44203b8bdc7250e))

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.0...gcds-components-v0.24.1) (2024-08-13)

### Bug Fixes

- update small design misalignments in various components ([#608](https://github.com/cds-snc/gcds-components/issues/608)) ([9bcb4ae](https://github.com/cds-snc/gcds-components/commit/9bcb4aef1004ea45b4ad0a2855b2322cfedbe799))

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.23.0...gcds-components-v0.24.0) (2024-08-01)

### New Features

- add visited state to link component ([#602](https://github.com/cds-snc/gcds-components/issues/602)) ([da4e524](https://github.com/cds-snc/gcds-components/commit/da4e524708e74ec485c9bec1805e09b3c67e125c))

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.4...gcds-components-v0.23.0) (2024-07-31)

### New Features

- add react ssr package (canary version) ([#587](https://github.com/cds-snc/gcds-components/issues/587)) ([bf3fd1e](https://github.com/cds-snc/gcds-components/commit/bf3fd1ee11429ae9ff97047547f6bcedd2fd8c3d))

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.3...gcds-components-v0.22.4) (2024-07-29)

### Bug Fixes

- roll back changes to the angular build process ([#597](https://github.com/cds-snc/gcds-components/issues/597)) ([0b62c3a](https://github.com/cds-snc/gcds-components/commit/0b62c3ab4a1ac4f65401b92fba732f9166c9e39d))

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.2...gcds-components-v0.22.3) (2024-07-29)

### Code Refactoring

- update error message design ([#592](https://github.com/cds-snc/gcds-components/issues/592)) ([5f1b94e](https://github.com/cds-snc/gcds-components/commit/5f1b94e83076c8b97a4f110ac7269acc15cc67f4))

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.1...gcds-components-v0.22.2) (2024-07-10)

### Bug Fixes

- Safari a11y issues with links and nav group focus ([#583](https://github.com/cds-snc/gcds-components/issues/583)) ([d7c3fb9](https://github.com/cds-snc/gcds-components/commit/d7c3fb91f0fb475926371be62395e33b635153a4))
- Remove rxjs events to avoid duplicate custom events in @cdssnc/gcds-component-angular ([#566](https://github.com/cds-snc/gcds-components/issues/566)) ([9bf46ac](https://github.com/cds-snc/gcds-components/commit/9bf46ac49c7ffd3a1569430a0a138136e639fc9c))

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.0...gcds-components-v0.22.1) (2024-05-27)

### Bug Fixes

- misaligned of FR theme and topic menu button (bug) ([#541](https://github.com/cds-snc/gcds-components/issues/541)) ([c524215](https://github.com/cds-snc/gcds-components/commit/c5242158b75838eb4366b0c254029597b87bcab4))

### Code Refactoring

- update input component to increase input width calculation ([#536](https://github.com/cds-snc/gcds-components/issues/536)) ([d6204f3](https://github.com/cds-snc/gcds-components/commit/d6204f327d639b304df7bb49006c60ef1950b7f8))

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.21.0...gcds-components-v0.22.0) (2024-05-21)

### New Features

- Add/create @cdssnc/gcds-components-vue package ([#516](https://github.com/cds-snc/gcds-components/issues/516)) ([3933498](https://github.com/cds-snc/gcds-components/commit/3933498c007bb3628badb0a9c751980bb01ecd25))ß
- Add @Outputs to angular wrapper components ([#529](https://github.com/cds-snc/gcds-components/issues/529)) ([0660093](https://github.com/cds-snc/gcds-components/commit/0660093997b9f23ddc4745a0599df66c793a6e51))
- Add dist-hydrate-app output ([#524](https://github.com/cds-snc/gcds-components/issues/524)) ([c448c59](https://github.com/cds-snc/gcds-components/commit/c448c59f56c367e8f408becffaa3edaf3ef8d280))

### Bug Fixes

- Emit change event from form components ([#523](https://github.com/cds-snc/gcds-components/issues/523)) ([d956370](https://github.com/cds-snc/gcds-components/commit/d9563707bb5f26ac8da7ee0cbd2c5f343ec624d3))

## [0.21.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.20.0...gcds-components-v0.21.0) (2024-05-08)

### Breaking changes

#### Transition to form-associated custom elements

We've undertaken significant efforts to migrate our components to form-associated custom elements. GC Design System form components will now use the shadow DOM (document object model). The shadow DOM provides improved encapsulation and control over styling and lets form components integrate with native browser features for validation and accessibility. This feature depends on HTMLElement API attachInternals which is supported in most browsers.

This change will require all form components to have the name attribute. Here's a list of the GC Design System components affected by the change:

- File uploader (`gcds-file-uploader`)
- Input (`gcds-input`)
- Select (`gcds-select`)
- Text area (`gcds-textarea`)

##### Required changes for form components

- Add a `name` attribute
- Your code should look similar to the following:

```html
<gcds-file-uploader name="" uploader-id="" label=""></gcds-file-uploader>
<gcds-input name="" input-id="" label=""></gcds-input>
<gcds-select name="" select-id="" label=""></gcds-select>
<gcds-textarea name="" textarea-id="" label=""></gcds-textarea>
```

#### Shadow-dom

The following components will be updated to now use the shadow DOM like other GC Design System components:

- Pagination (`gcds-pagination`)
- Search (`gcds-search`)
- Signature (`gcds-signature`)

#### Radio group

As part of the transition, our `gcds-radio` component will be deprecated in favour of a new component `gcds-radio-group`. The radio group component allows for better (native HTML) form controls in a shadow DOM environment.

##### Old implementation

```html
<gcds-radio
  radio-id="radio-1"
  name="radio-example"
  label="Label 1"
  value="label-1"
>
</gcds-radio>
<gcds-radio
  radio-id="radio-2"
  name="radio-example"
  label="Label 2"
  value="label-2"
>
</gcds-radio>
```

##### New implementation

```html
<gcds-radio-group
  name="radio-example"
  options="[{
      'id': 'radio-1',
      'label': 'Label 1',
      'value': 'label-1'}, {
      'id': 'radio-2',
      'label': 'Label 2',
      'value': 'label-2'}]"
>
</gcds-radio-group>
```

### New Features

- add tag prop to gcds-sr-only component ([#484](https://github.com/cds-snc/gcds-components/issues/484)) ([dfb7285](https://github.com/cds-snc/gcds-components/commit/dfb7285a14b477f4c4f71750e8b09d3ca5c193a9))
- Component rewrites (form-associated, gcds-radio-group, CSS rewrites) ([#486](https://github.com/cds-snc/gcds-components/issues/486)) ([ae05841](https://github.com/cds-snc/gcds-components/commit/ae0584172bb2219f907074c48235ae8b4f8719f5))

### Bug Fixes

- Update utility functions for more usability ([#495](https://github.com/cds-snc/gcds-components/issues/495)) ([a0e8fbb](https://github.com/cds-snc/gcds-components/commit/a0e8fbbf5ed8004f72f4e51ca2f2da4ef70a37ef))

## [0.20.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.1...gcds-components-v0.20.0) (2024-03-14)

### New Features

- set allowed values for grid tag property to limit misuse ([#470](https://github.com/cds-snc/gcds-components/issues/470)) ([a686d09](https://github.com/cds-snc/gcds-components/commit/a686d09dab4cf40548448ccdc7e050d6322afb24))

### Bug Fixes

- React package: invalid path for types ([#471](https://github.com/cds-snc/gcds-components/issues/471)) ([f859d43](https://github.com/cds-snc/gcds-components/commit/f859d438e9a79184d83157b92a97f855376777ac))

## [0.19.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.0...gcds-components-v0.19.1) (2024-02-22)

### Bug Fixes

- Fixes identified in OCADU report (a11y and usability) ([#446](https://github.com/cds-snc/gcds-components/issues/446)) ([09095a5](https://github.com/cds-snc/gcds-components/commit/09095a52f41e40a243455874daf2c147c18d89b1))

## v0.19.0

### Breaking changes

- button component - remove button-style prop ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

### Bug Fixes

- move toggle navigation focusout logic form top-nav to nav-group ([#387](https://github.com/cds-snc/gcds-components/pull/387)) ([a72f91f](https://github.com/cds-snc/gcds-components/commit/a72f91fb975ded03151fc0eee2cc376ddb2b22c4))

### Code Refactoring

- replace gcds-button skip-to-href in gcds-header with gcds-link component ([#451](https://github.com/cds-snc/gcds-components/issues/451)) ([f3a052b](https://github.com/cds-snc/gcds-components/commit/f3a052b3e79a8fa8fdf8d9724c47deb43b09977c))
- button component css rewrite ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

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

## v0.18.1

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) — Exportation de ContentValues à partir de gcds-grid pour corriger la version du paquet Angular

## v0.18.0

### Nouvelles fonctionnalités

- Fonctionnalité pour le composant grille
  - Possibilité d’ajouter des colonnes de grille dont la taille est individuellement définie et de définir des lignes de hauteur égale.

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) — Ajout de la variante Light au composant lien

### Correctif

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) — Correction du nom de propriété pour les variantes du composant lien
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) — Correction de la validation pour le téléverseur de fichiers
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) — Mise à jour des emplacements (slots) du composant en-tête dans Storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) — Correction du lien Ressources dans Storybook
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) — Mise à jour des instructions pour Font Awesome dans le README

## v0.17.1

### Correctif

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) \- Mise à jour de la configuration de la génération de gabarits pour une meilleure intégration avec plusieurs infrastructures (Nextjs et create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2F41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) \- Correctif : réinitialisation des styles d’emplacement

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) \- Mise à jour du contenu de la démo

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
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) - Ajout de styles pour la balise `slot` pour régler des problèmes d`accessibilité dans Chrome pour les composants qui utilisent cette balise avec du texte

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
