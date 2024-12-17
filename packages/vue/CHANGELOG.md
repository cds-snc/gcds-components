# Changelog

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.29.1...gcds-components-vue-v0.30.0) (2024-12-17)


### :arrows_counterclockwise: Code Refactoring

* adjust form element spacing ([#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.29.1 to ^0.30.0

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.29.0...gcds-components-vue-v0.29.1) (2024-12-11)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.29.0 to ^0.29.1

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.28.0...gcds-components-vue-v0.29.0) (2024-12-11)


### :rocket: New Features

* New gcds-notice component ([#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.28.0 to ^0.29.0

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.27.0...gcds-components-vue-v0.28.0) (2024-12-05)

### :rotating_light: Breaking changes

* update components with new typography + spacing tokens ([#695](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

We've made small adjustments to all typography and spacing sizes across the design system. GC Design System components are now closer in appearance to their counterparts on Canada.ca.

These updates were introduced with the [latest release of our design tokens](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**If you are using this package**_
Upgrade your version number to this release version to receive the changes in font sizes, line heights and spacing values.

### Spacing changes

The valid values have changed for the properties in the following components. While some values still remain, their underlying value in rem or pixels have changed. See the spacing section of our tokens release to check out the new underlying values.

The valid variables used for the properties in the following components have been updated. While some options remain unchanged, the underlying values they contain (in pixels) have been modified. Check the spacing section of our tokens release for the updated pixel values.

_Example_: If you were previously using `400` for the `margin` property on `gcds-container`, it will be updated to `32px`. If you want to keep its previous size of `40px`, you need to change your code to use `450` instead. Here is a [visual mapping guide](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) to help you identify the values you need to use.

Only update your code _if you use these properties_, otherwise the new default values will be applied automatically.

* [**gcds-container**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-container/readme.md)
  - `margin`
  - `padding`
* [**gcds-heading**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-heading/readme.md)
  - `margin-top`
  - `margin-bottom`
* [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - `margin-left`
  - `margin-right`
* [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - `margin-top`
  - `margin-bottom`

### Typography changes

Only update if you use the `caption` value for the `size` property in the following components.
* [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - Change `caption` to `text-small`
* [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - Change `caption` to `text-small`

### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.27.0 to ^0.28.0

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.26.3...gcds-components-vue-v0.27.0) (2024-11-19)


### :rocket: New Features

* **gcds-file-uploader:** Add files prop for ease of access to uploaded files ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.26.3 to ^0.27.0

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.26.2...gcds-components-vue-v0.26.3) (2024-10-09)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.26.2 to ^0.26.3

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.26.1...gcds-components-vue-v0.26.2) (2024-09-25)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.26.1 to ^0.26.2

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.26.0...gcds-components-vue-v0.26.1) (2024-09-16)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.26.0 to ^0.26.1

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.25.1...gcds-components-vue-v0.26.0) (2024-09-12)


### :rocket: New Features

* add value attribute to gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.25.1 to ^0.26.0

## [0.25.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.25.0...gcds-components-vue-v0.25.1) (2024-08-22)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.25.0 to ^0.25.1

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.24.1...gcds-components-vue-v0.25.0) (2024-08-19)


### New Features

* Add gcds-date-input component ([#607](https://github.com/cds-snc/gcds-components/issues/607)) ([ce0b4cc](https://github.com/cds-snc/gcds-components/commit/ce0b4ccdbcc9b25ebd8fb8e5b5ca03f4d49332a5))
* add new main-container prop to container ([#613](https://github.com/cds-snc/gcds-components/issues/613)) ([4eef9b3](https://github.com/cds-snc/gcds-components/commit/4eef9b394d17bac749bd78d5131e97df4e97f7e9))
* update gcds-card (breaking change) ([#578](https://github.com/cds-snc/gcds-components/issues/578)) ([4a72105](https://github.com/cds-snc/gcds-components/commit/4a72105de07e5bb5675241729c443e4bb6f89925))
* updates to stepper component (breaking change + new tag attribute) ([#573](https://github.com/cds-snc/gcds-components/issues/573)) ([0f8bd2f](https://github.com/cds-snc/gcds-components/commit/0f8bd2f3031557beca5377765928c13e0a362025))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.24.1 to ^0.25.0

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.24.0...gcds-components-vue-v0.24.1) (2024-08-13)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.24.0 to ^0.24.1

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.23.0...gcds-components-vue-v0.24.0) (2024-08-01)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.23.0 to ^0.24.0

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.22.4...gcds-components-vue-v0.23.0) (2024-07-31)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.22.4 to ^0.23.0

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.22.3...gcds-components-vue-v0.22.4) (2024-07-29)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.22.3 to ^0.22.4

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.22.2...gcds-components-vue-v0.22.3) (2024-07-29)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.22.2 to ^0.22.3

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.22.1...gcds-components-vue-v0.22.2) (2024-07-10)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.22.1 to ^0.22.2

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.22.0...gcds-components-vue-v0.22.1) (2024-05-27)


### Patch

* **gcds-components-vue:** Synchronize GCDS Components versions


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.22.0 to ^0.22.1

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-vue-v0.21.0...gcds-components-vue-v0.22.0) (2024-05-21)


### New Features

* Add/create @cdssnc/gcds-components-vue package ([#516](https://github.com/cds-snc/gcds-components/issues/516)) ([3933498](https://github.com/cds-snc/gcds-components/commit/3933498c007bb3628badb0a9c751980bb01ecd25))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @cdssnc/gcds-components bumped from ^0.21.0 to ^0.22.0
