([Français](#journal-des-modifications))

# Changelog

## [0.32.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.31.0...gcds-components-v0.32.0)
Released on: 2025-02-19

### :bug: :wrench: Bug Fixes

* Navigation components (`gcds-top-nav`, `gcds-nav-group`) display and interaction issues ([#748](https://github.com/cds-snc/gcds-components/issues/748)) ([0169b14](https://github.com/cds-snc/gcds-components/commit/0169b14bd17c1e65f1531b7df0df9e062776f30b))
* Remove gcds-fieldset dependancy from gcds-date-input ([#746](https://github.com/cds-snc/gcds-components/issues/746)) ([3e103ee](https://github.com/cds-snc/gcds-components/commit/3e103eecccf045862865b3b20cc4390a9942bd28))


### :pencil: Documentation

* We've updated the property descriptions of `card-title-tag` for `<gcds-card>` and `notice-title-tag` for `<gcds-notice>` to provide a better and clearer explanation of how it works ([#745](https://github.com/cds-snc/gcds-components/issues/745)) ([96341ed](https://github.com/cds-snc/gcds-components/commit/96341ed5dc388991235eee49564625b7719d717f))


### :art: Styles
We've done some work to align our styles with Canada.ca:

* Updated the paddings for `<gcds-footer>` ([#755](https://github.com/cds-snc/gcds-components/issues/755)) ([890c216](https://github.com/cds-snc/gcds-components/commit/890c2160333ef5bba5f668ca7bf59f831c57a403))
* Updated `<gcds-footer>` styles ([#754](https://github.com/cds-snc/gcds-components/issues/754)) ([1cf8a6f](https://github.com/cds-snc/gcds-components/commit/1cf8a6fefb0245f173d0f562db80945ff43508a4))
* Updated `<gcds-breadcrumb-item>` font size ([#742](https://github.com/cds-snc/gcds-components/issues/742)) ([adf4260](https://github.com/cds-snc/gcds-components/commit/adf4260b94e19b0ef939d32e90a7f374d5d3e7d0))
* Updated `<date-modified>` font size ([#751](https://github.com/cds-snc/gcds-components/issues/751)) ([a403b7d](https://github.com/cds-snc/gcds-components/commit/a403b7d95c69019a48828949d964249b93a1b61b))
* Updated `<gcds-lang-toggle>` font size ([#741](https://github.com/cds-snc/gcds-components/issues/741)) ([c7b7c21](https://github.com/cds-snc/gcds-components/commit/c7b7c211d62dec5d7d603fe894f50da4e5bf64fe))
* Updated `<gcds-search>` styles ([#743](https://github.com/cds-snc/gcds-components/issues/743)) ([3697498](https://github.com/cds-snc/gcds-components/commit/369749807db05e0e0ac3235e1ac05c50568665a5))

## [0.31.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.30.0...gcds-components-v0.31.0)

Released on: 2025-01-22

### :rocket: New Features

* add grid gap property for more flexibility ([#732](https://github.com/cds-snc/gcds-components/issues/732)) ([2af7915](https://github.com/cds-snc/gcds-components/commit/2af7915306f0a32f6af32a24336857ce300756d8))
* update installation instructions to match documentation site ([#718](https://github.com/cds-snc/gcds-components/issues/718)) ([e5c3bee](https://github.com/cds-snc/gcds-components/commit/e5c3bee5c724f85db9afe6970b3acee83e5c3d33))


### :bug: :wrench: Bug Fixes

* **gcds-button:** Prevent gcdsClick event if button is disabled ([#724](https://github.com/cds-snc/gcds-components/issues/724)) ([1cd508a](https://github.com/cds-snc/gcds-components/commit/1cd508a87c95b38a1937f421580ab8d846112f9a))
* **gcds-link:** Display property to allow normal link wrap behaviour ([#731](https://github.com/cds-snc/gcds-components/issues/731)) ([b0f357c](https://github.com/cds-snc/gcds-components/commit/b0f357c61c7a951a92f24b1de1b4c2a61e92fc10))
* **gcds-notice:** Add accessible labels to identify notice type ([#721](https://github.com/cds-snc/gcds-components/issues/721)) ([450d182](https://github.com/cds-snc/gcds-components/commit/450d18215ee15c33cdcd6991defc764f65e236e7))
* **gcds-pagination:** Add tabindex="0" to &lt;a&gt; tags to function in webkit browsers ([#723](https://github.com/cds-snc/gcds-components/issues/723)) ([7256590](https://github.com/cds-snc/gcds-components/commit/7256590d0f5517e87fb7e1d10439a7d3b9f7e579))
* **gcds-textarea:** Properly set value in shadow-root textarea ([#730](https://github.com/cds-snc/gcds-components/issues/730)) ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
* input size property description ([#728](https://github.com/cds-snc/gcds-components/issues/728)) ([f6fa41b](https://github.com/cds-snc/gcds-components/commit/f6fa41b64653160493cc8857e0fb1933234a5050))


### :arrows_counterclockwise: Code Refactoring

* remove mobile stacking from breadcrumbs ([#729](https://github.com/cds-snc/gcds-components/issues/729)) ([cf70cf6](https://github.com/cds-snc/gcds-components/commit/cf70cf6afea17bc7a3ba745fe4851b95306e280e))
* update component spacing + pagination arrows ([#726](https://github.com/cds-snc/gcds-components/issues/726)) ([a00e60d](https://github.com/cds-snc/gcds-components/commit/a00e60dcb389d4577af4c6f5e450718a35574391))

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.1...gcds-components-v0.30.0)

Released on: 2024-12-17

### :rocket: New Features

* **angular:** Update angular dependencies to v19 ([#709](https://github.com/cds-snc/gcds-components/issues/709)) ([ab1c12b](https://github.com/cds-snc/gcds-components/commit/ab1c12b822e13040ac8da7e66c5e9ada9aea1180))


### :art: Styles

* improve print design for details component ([#711](https://github.com/cds-snc/gcds-components/issues/711)) ([e68a3bf](https://github.com/cds-snc/gcds-components/commit/e68a3bf78a4a50fe8836cec64ca30557d5298871))


### :arrows_counterclockwise: Code Refactoring

* adjust form element spacing ([#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.0...gcds-components-v0.29.1)

Released on: 2024-12-11

### :bug: :wrench: Bug Fixes

* breadcrumbs item arrow display ([#706](https://github.com/cds-snc/gcds-components/issues/706)) ([f455e4d](https://github.com/cds-snc/gcds-components/commit/f455e4dd38263cb9bea787f2d2c207ddf0df95b3))

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.28.0...gcds-components-v0.29.0)

Released on: 2024-12-11

### :rocket: New Features

* New gcds-notice component ([#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))

### :arrows_counterclockwise: Code Refactoring

* adjust breadcrumbs margin ([#701](https://github.com/cds-snc/gcds-components/issues/701)) ([9ea1447](https://github.com/cds-snc/gcds-components/commit/9ea1447f1f78eb60901bba4d38765dbc25df264c))

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0)

Released on 2024-12-05

### :rotating_light: Breaking changes

* update components with new typography + spacing tokens ([#695](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

We've made small adjustments to all typography and spacing sizes across the design system. GC Design System components are now closer in appearance to their counterparts on Canada.ca.

These updates were introduced with the [latest release of our design tokens](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**If you are using this package**_
Upgrade your version number to this release version to receive the changes in font sizes, line heights and spacing values.

### Spacing changes

The valid variables used for the properties in the following components have been updated. While some options remain unchanged, the underlying values they contain (in pixels) have been modified. Check the spacing section of our tokens release for the updated pixel values.

_Example_: If you were previously using `400` for the `margin` property on `gcds-container`, it will be updated to `32px`. If you want to keep its previous size of `24px`, you need to change your code to use `300` instead. Here is a [visual mapping guide](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) to help you identify the values you need to use.

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

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0)

Released on 2024-11-21

### :rocket: New Features

* **gcds-file-uploader:** Add files prop for ease of access to uploaded files ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))

### :bug: :wrench: Bug Fixes

* Allow skipping blocking form submission with validate-on attribute ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* error-message property blocking form submission. ([#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* **gcds-fieldset:** Add CSS to allow form components to maintain responsive layout ([#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))

### :arrows_counterclockwise: Code Refactoring

* adjust details font sizes and summary + panel padding ([#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
* improve date-modified validation ([#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
* remove focus colour from label, hint and legend ([#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3)

Released on 2024-10-10

### :bug: :wrench: Bug Fixes

* **gcds-error-summary:** focusing gcds element from manual error-links list ([#666](https://github.com/cds-snc/gcds-components/issues/666)) ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
* **gcds-select:** Update available options in select if changed ([#655](https://github.com/cds-snc/gcds-components/issues/655)) ([e7a16cb](https://github.com/cds-snc/gcds-components/commit/e7a16cb6b6d4b5e54887431b2eb2931bfaf1380a))

### :arrows_counterclockwise: Code Refactoring

* **gcds-signature:** Signature alternative text to be bilingual ([#660](https://github.com/cds-snc/gcds-components/issues/660)) ([146e8b2](https://github.com/cds-snc/gcds-components/commit/146e8b29fbd216d655c93266fed0185b540b1712))

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2)

Released on 2024-09-25

### :bug: :wrench: Bug Fixes

* Fix typos in tokens ([#646](https://github.com/cds-snc/gcds-components/issues/646)) ([4c8d850](https://github.com/cds-snc/gcds-components/commit/4c8d850569feafc538aa0e9593ba96cfdf9b97c2))
* **gcds-sr-only:** Align with WCAG technique C7 ([#642](https://github.com/cds-snc/gcds-components/issues/642)) ([3cbe8bc](https://github.com/cds-snc/gcds-components/commit/3cbe8bc08d021849fa16269800fb08e12d4db037))
* Update tokens to fix FIP red and date-input legend font weight ([#650](https://github.com/cds-snc/gcds-components/issues/650)) ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))
* Update tokens to inherit fixes for FIP red and legend font weight ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1)

Released on: 2024-09-16

### :bug: :wrench: Bug Fixes

* add mobile font size to search component ([#640](https://github.com/cds-snc/gcds-components/issues/640)) ([2f8efa3](https://github.com/cds-snc/gcds-components/commit/2f8efa337a49411da258e4b2c9dea64a50021cbf))

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0)

Released on: 2024-09-12

### :rocket: New Features

* add value attribute to gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))

### :bug: :wrench: Bug Fixes

* various small design bug fixes ([#634](https://github.com/cds-snc/gcds-components/issues/634)) ([8eefbe4](https://github.com/cds-snc/gcds-components/commit/8eefbe4def6d385f8130df4ddb4a2065ae4f6c57))

## [0.25.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.0...gcds-components-v0.25.1)

Released on: 2024-08-22

### :bug: :wrench: Bug Fixes

- Build to allow new tokens to be imported in react-ssr package ([#624](https://github.com/cds-snc/gcds-components/issues/624)) ([88790c7](https://github.com/cds-snc/gcds-components/commit/88790c76f6571abc7d1505a492cea6591cbd97cc))
- Margin and spacing issues in gcds-card ([#617](https://github.com/cds-snc/gcds-components/issues/617)) ([2d39bdc](https://github.com/cds-snc/gcds-components/commit/2d39bdc52a51da82e5fa0b55c569dd316d355176))

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.1...gcds-components-v0.25.0)

Released on: 2024-08-19

### :rotating_light: Breaking changes

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

### :rocket: New Features

- Add gcds-date-input component ([#607](https://github.com/cds-snc/gcds-components/issues/607)) ([ce0b4cc](https://github.com/cds-snc/gcds-components/commit/ce0b4ccdbcc9b25ebd8fb8e5b5ca03f4d49332a5))
- add new main-container prop to container ([#613](https://github.com/cds-snc/gcds-components/issues/613)) ([4eef9b3](https://github.com/cds-snc/gcds-components/commit/4eef9b394d17bac749bd78d5131e97df4e97f7e9))
- update gcds-card (breaking change) ([#578](https://github.com/cds-snc/gcds-components/issues/578)) ([4a72105](https://github.com/cds-snc/gcds-components/commit/4a72105de07e5bb5675241729c443e4bb6f89925))
- updates to stepper component (breaking change + new tag attribute) ([#573](https://github.com/cds-snc/gcds-components/issues/573)) ([0f8bd2f](https://github.com/cds-snc/gcds-components/commit/0f8bd2f3031557beca5377765928c13e0a362025))

### :arrows_counterclockwise: Code Refactoring

- change fieldset legend required to span ([#612](https://github.com/cds-snc/gcds-components/issues/612)) ([ca5108f](https://github.com/cds-snc/gcds-components/commit/ca5108f0d29327b62cd9b694b44203b8bdc7250e))

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.0...gcds-components-v0.24.1)

Released on: 2024-08-13

### :bug: :wrench: Bug Fixes

- update small design misalignments in various components ([#608](https://github.com/cds-snc/gcds-components/issues/608)) ([9bcb4ae](https://github.com/cds-snc/gcds-components/commit/9bcb4aef1004ea45b4ad0a2855b2322cfedbe799))

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.23.0...gcds-components-v0.24.0)

Released on: 2024-08-01

### :rocket: New Features

- add visited state to link component ([#602](https://github.com/cds-snc/gcds-components/issues/602)) ([da4e524](https://github.com/cds-snc/gcds-components/commit/da4e524708e74ec485c9bec1805e09b3c67e125c))

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.4...gcds-components-v0.23.0)

Released on: 2024-07-31

### :rocket: New Features

- add react ssr package (canary version) ([#587](https://github.com/cds-snc/gcds-components/issues/587)) ([bf3fd1e](https://github.com/cds-snc/gcds-components/commit/bf3fd1ee11429ae9ff97047547f6bcedd2fd8c3d))

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.3...gcds-components-v0.22.4)

Released on: 2024-07-29

### :bug: :wrench: Bug Fixes

- roll back changes to the angular build process ([#597](https://github.com/cds-snc/gcds-components/issues/597)) ([0b62c3a](https://github.com/cds-snc/gcds-components/commit/0b62c3ab4a1ac4f65401b92fba732f9166c9e39d))

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.2...gcds-components-v0.22.3)

Released on: 2024-07-29

### :arrows_counterclockwise: Code Refactoring

- update error message design ([#592](https://github.com/cds-snc/gcds-components/issues/592)) ([5f1b94e](https://github.com/cds-snc/gcds-components/commit/5f1b94e83076c8b97a4f110ac7269acc15cc67f4))

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.1...gcds-components-v0.22.2)

Released on: 2024-07-10

### :bug: :wrench: Bug Fixes

- Safari a11y issues with links and nav group focus ([#583](https://github.com/cds-snc/gcds-components/issues/583)) ([d7c3fb9](https://github.com/cds-snc/gcds-components/commit/d7c3fb91f0fb475926371be62395e33b635153a4))
- Remove rxjs events to avoid duplicate custom events in @cdssnc/gcds-component-angular ([#566](https://github.com/cds-snc/gcds-components/issues/566)) ([9bf46ac](https://github.com/cds-snc/gcds-components/commit/9bf46ac49c7ffd3a1569430a0a138136e639fc9c))

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.0...gcds-components-v0.22.1)

Released on: 2024-05-27

### :bug: :wrench: Bug Fixes

- misaligned of FR theme and topic menu button (bug) ([#541](https://github.com/cds-snc/gcds-components/issues/541)) ([c524215](https://github.com/cds-snc/gcds-components/commit/c5242158b75838eb4366b0c254029597b87bcab4))

### :arrows_counterclockwise: Code Refactoring

- update input component to increase input width calculation ([#536](https://github.com/cds-snc/gcds-components/issues/536)) ([d6204f3](https://github.com/cds-snc/gcds-components/commit/d6204f327d639b304df7bb49006c60ef1950b7f8))

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.21.0...gcds-components-v0.22.0)

Released on: 2024-05-21

### :rocket: New Features

- Add/create @cdssnc/gcds-components-vue package ([#516](https://github.com/cds-snc/gcds-components/issues/516)) ([3933498](https://github.com/cds-snc/gcds-components/commit/3933498c007bb3628badb0a9c751980bb01ecd25))ß
- Add @Outputs to angular wrapper components ([#529](https://github.com/cds-snc/gcds-components/issues/529)) ([0660093](https://github.com/cds-snc/gcds-components/commit/0660093997b9f23ddc4745a0599df66c793a6e51))
- Add dist-hydrate-app output ([#524](https://github.com/cds-snc/gcds-components/issues/524)) ([c448c59](https://github.com/cds-snc/gcds-components/commit/c448c59f56c367e8f408becffaa3edaf3ef8d280))

### :bug: :wrench: Bug Fixes

- Emit change event from form components ([#523](https://github.com/cds-snc/gcds-components/issues/523)) ([d956370](https://github.com/cds-snc/gcds-components/commit/d9563707bb5f26ac8da7ee0cbd2c5f343ec624d3))

## [0.21.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.20.0...gcds-components-v0.21.0)

Released on: 2024-05-08

### :rotating_light: Breaking changes

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

### :rocket: New Features

- add tag prop to gcds-sr-only component ([#484](https://github.com/cds-snc/gcds-components/issues/484)) ([dfb7285](https://github.com/cds-snc/gcds-components/commit/dfb7285a14b477f4c4f71750e8b09d3ca5c193a9))
- Component rewrites (form-associated, gcds-radio-group, CSS rewrites) ([#486](https://github.com/cds-snc/gcds-components/issues/486)) ([ae05841](https://github.com/cds-snc/gcds-components/commit/ae0584172bb2219f907074c48235ae8b4f8719f5))

### :bug: :wrench: Bug Fixes

- Update utility functions for more usability ([#495](https://github.com/cds-snc/gcds-components/issues/495)) ([a0e8fbb](https://github.com/cds-snc/gcds-components/commit/a0e8fbbf5ed8004f72f4e51ca2f2da4ef70a37ef))

## [0.20.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.1...gcds-components-v0.20.0)

Released on: 2024-03-14

### :rocket: New Features

- set allowed values for grid tag property to limit misuse ([#470](https://github.com/cds-snc/gcds-components/issues/470)) ([a686d09](https://github.com/cds-snc/gcds-components/commit/a686d09dab4cf40548448ccdc7e050d6322afb24))

### :bug: :wrench: Bug Fixes

- React package: invalid path for types ([#471](https://github.com/cds-snc/gcds-components/issues/471)) ([f859d43](https://github.com/cds-snc/gcds-components/commit/f859d438e9a79184d83157b92a97f855376777ac))

## [0.19.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.0...gcds-components-v0.19.1)

Released on: 2024-02-22

### :bug: :wrench: Bug Fixes

- Fixes identified in OCADU report (a11y and usability) ([#446](https://github.com/cds-snc/gcds-components/issues/446)) ([09095a5](https://github.com/cds-snc/gcds-components/commit/09095a52f41e40a243455874daf2c147c18d89b1))

## v0.19.0

### :rotating_light: Breaking changes

- button component - remove button-style prop ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

### :bug: :wrench: Bug Fixes

- move toggle navigation focusout logic form top-nav to nav-group ([#387](https://github.com/cds-snc/gcds-components/pull/387)) ([a72f91f](https://github.com/cds-snc/gcds-components/commit/a72f91fb975ded03151fc0eee2cc376ddb2b22c4))

### :arrows_counterclockwise: Code Refactoring

- replace gcds-button skip-to-href in gcds-header with gcds-link component ([#451](https://github.com/cds-snc/gcds-components/issues/451)) ([f3a052b](https://github.com/cds-snc/gcds-components/commit/f3a052b3e79a8fa8fdf8d9724c47deb43b09977c))
- button component css rewrite ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

## v0.18.1

### :bug: :wrench: Bug Fixes

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) - Export ContentValues from gcds-grid to fix angular package build

## v0.18.0

### :rocket: New features

- Grid functionality
  - Ability to add individually sized grid columns to grids as well as allowing to set equal height rows.

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) - Add light variant to link component

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) - Link variant property name fix
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) - File uploader validation fix
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) - Updated Header slots in storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) - Fixed storybook resources link
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) - Updated instructions for font awesome in README

## v0.17.1

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) - Update stencil build configuration for better integration with multiple frameworks (Nextjs and create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2f41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) - fix: change slot styles to initial

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) - Update demo content

## v0.17.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/305 - [2ffc292](https://github.com/cds-snc/gcds-components/commit/2ffc292828fd5eed53a4eb33cbe753da08f9dde0) - New `gcds-link` component to allow users to navigate to a new page, website or section on the current page.

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) - Add default value for margin top + bottom for text component
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) - Improve storybook a11y for live demos.

## v0.16.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/306 - [c972bef](https://github.com/cds-snc/gcds-components/commit/c972befacb6961fed73c983df1fb4fda6cbc9ca5) - New `gcds-heading` to render headings in GCDS styles

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) - Fix slot CSS in gcds-breadcrumbs-item to display text underline

## v0.15.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) -  New `gcds-text` component to render text content in GCDS style
- https://github.com/cds-snc/gcds-components/pull/315 - [8117534](https://github.com/cds-snc/gcds-components/commit/8117534ffe52c998be9e09002f1dbbe1ec528f48) - New `gcds-sr-only` component to hide text content only available to assistive technologies

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) - Update media query in `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) - Remove nav landmark label to prevent confusion in `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) - Set default property values in `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) - Add box-shadow on focus to components for consistent focus state
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) - Add slot styles to help :jigsaw: patch Chrome accessibility issues to components that use text based slots

## v0.14.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/223 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - New `gcds-topic-menu` component for canada.ca compliance

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) - Update mobile view and French text in `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) - Set `columns` property to required in `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) - Accessibility fix for `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) - Accessibility fix for `gcds-nav-group`

## v0.13.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/212 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - New `gcds-search` component for canada.ca compliance

### :rotating_light: Breaking changes

- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - `topnav` slot in the `gcds-header` component has been renamed to `skip-to-nav`

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) - Update `gcds-top-nav` component style to match design files
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) - Update hover styles for `gcds-file-uploader` and `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Update text in `gcds-file-uploader` button to `Choose file`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) - Remove icon from `gcds-file-uploader` button label

## v0.12.1

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) - Accessibility fixes for `gcds-file-uploader` and navigation components

## v0.12.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) - Add `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` and `gcds-nav-link` components to library
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Add `type` prop to `gcds-date-modified` to display "Version" number if needed

### :rotating_light: Breaking changes

- Site menu component (`gcds-site-menu`)
  - `gcds-site-menu` has been removed from the component library, replaced with `gcds-top-nav`

- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - `sub-heading` prop has been removed from the `gcds-error-summary` component

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Add `experimentalImportInjection` to build to help integration of components with bundlers like Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Fix `onChange` event for `gcds-checkbox`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Update form error styling

## v0.11.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/183 - [b64db5d](https://github.com/cds-snc/gcds-components/commit/b64db5d0877adfdd38d400b2a0687d039760b08d) - New `gcds-card` component to display related pieces of information as a single unit

### :rotating_light: Breaking changes

- Container component (`gcds-container`)
  - `container` property has been renamed `size`

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) - Add margin + padding props to `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) - Add border prop to `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) - Update `requiredFileInput` validator to use `FileList` instead of `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) - Update `requiredFileInput` validator to use `FileList` instead of `value`

## v0.10.3

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) - Change alert title from h5 tag to p + strong tag
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) - change pagination border to be more consistent with text and background colour

## v0.10.2

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) - Add value to error summary links in storybook story to display error summary instead of blank screen
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) - Update french text for error summary default heading
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) - Update demo with new UF name + add gcds-container

## v0.10.1

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) - Update prop description of `gcds-breadcrumbs`

## v0.10.0

### :rocket: New features

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) - New `gcds-error-summary` component for form validation on submit.
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) - Update `@cdssnc/gcds-components-angular` to use Angular v15. Package will no longer work with Angular v14.

### :jigsaw: Patch

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) - Add missing "About this site" heading to gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) - States and styles of `gcds-lang-toggle` and `gcds-button` have been updated to be consistent with Figma library
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) - Fix display issue showing an extra chevron when using hide-canada-link attribute in gcds-breadcrumbs
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) - Change gcds-fieldset to no longer use shadowDom to match other form components

---

# Journal des modifications

Tout changement important à ce projet sera consigné dans le présent fichier.

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0)

Version publiée le : 2024-12-05

### :rotating_light: Changements non rétrocompatibles

* mise à jour des composants avec de nouvelles typographies + nouvelles unités de style d'espacement ([#695 en anglais](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

Nous avons apporté de petits ajustements à toutes les tailles de typographie et d'espacement dans le système de design. Les composants du système de design GC ressemblent maintenant davantage à leurs homologues sur Canada.ca.

Ces mises à jour ont été introduites avec la [dernière version de nos unités de style de conception.](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**Si vous utilisez ce paquetage,**_
mettez à jour votre numéro de version vers cette version de publication pour recevoir les modifications des tailles de police, des hauteurs de ligne et des valeurs d'espacement.

### Changement d’espacement

Les variables valides utilisées pour les propriétés dans les composants suivants ont été mises à jour. Bien que certaines options restent inchangées, les valeurs sous-jacentes qu'elles contiennent (en pixels) ont été modifiées. Vérifiez la section d'espacement de notre publication d'unité de style pour les valeurs de pixel mises à jour.

Exemple: Si vous utilisiez auparavant 400 pour la propriété de marge sur gcds-container, elle sera mise à jour à 32px. Si vous souhaitez conserver sa taille précédente de 40px, vous devez modifier votre code pour utiliser 450 à la place. Voici un [guide de cartographie visuelle](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) pour vous aider à identifier les valeurs que vous devez utiliser.

Mettez à jour votre code uniquement _si vous utilisez ces propriétés_, sinon les nouvelles valeurs par défaut seront appliquées automatiquement.

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

### Changements de typographie

Mettez à jour uniquement si vous utilisez la valeur de légende pour la propriété de taille dans les composants suivants.
* [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - Changer `caption` à `text-small`
* [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - Changer `caption`  à `text-small`

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0)

Version publiée le : 2024-11-21

### :rocket: Nouvelle fonctionnalité

* **gcds-file-uploader:** Ajouter des propriétés d’extension pour les fichiers et faciliter l'accès aux fichiers téléversés ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))

### :bug: :wrench: Corrections de bogues

* Autoriser le contournement de la soumission de formulaire bloquant avec l'attribut validate-on ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* Propriété du message d'erreur bloquant la soumission du formulaire. ([#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* **gcds-fieldset:** Ajoutez du CSS pour permettre aux composants de formulaire de maintenir une mise en page réactive ([#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))

### :arrows_counterclockwise: Refactorisation de code

* ajuster les tailles de police pour le composant détails et le résumé +  remplissage du panneau ([#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
* améliorer la validation du gcds-date-modified ([#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
* supprimer la couleur de focus pour l'étiquette,  l'indice et la légende ([#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3)

Version publiée le : 2024-10-10

### :bug: :wrench: Corrections de bogues

* **gcds-error-summary:** focaliser l'élément gcds de la liste des liens d'erreur manuels ([#666](https://github.com/cds-snc/gcds-components/issues/666)) ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
* **gcds-select:** Mise à jour des options disponibles lorsqu'elles sont modifiées pour le composant sélection. ([#655](https://github.com/cds-snc/gcds-components/issues/655)) ([e7a16cb](https://github.com/cds-snc/gcds-components/commit/e7a16cb6b6d4b5e54887431b2eb2931bfaf1380a))

### :arrows_counterclockwise: Refactorisation de code

* **gcds-signature:** Texte de remplacement de la signature pour permettre le bilinguisme ([#660](https://github.com/cds-snc/gcds-components/issues/660)) ([146e8b2](https://github.com/cds-snc/gcds-components/commit/146e8b29fbd216d655c93266fed0185b540b1712))

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2)

Version publiée le : 2024-09-25

### :bug: :wrench: Corrections de bogues

* Corriger les fautes de frappe dans les unités de style ([#646](https://github.com/cds-snc/gcds-components/issues/646)) ([4c8d850](https://github.com/cds-snc/gcds-components/commit/4c8d850569feafc538aa0e9593ba96cfdf9b97c2))
* **gcds-sr-only:** Alignement avec la technique WCAG C7 ([#642](https://github.com/cds-snc/gcds-components/issues/642)) ([3cbe8bc](https://github.com/cds-snc/gcds-components/commit/3cbe8bc08d021849fa16269800fb08e12d4db037))
* Mise à jour des unités de style pour corriger le rouge du PFIM (Programme fédéral de l’image de marque) et corriger la taille de la police pour la légende du gcds-date-input ([#650](https://github.com/cds-snc/gcds-components/issues/650)) ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1)

Version publiée le : 2024-09-16

### :bug: :wrench: Corrections de bogues

* ajouter la taille de police pour la version mobile du composant recherche ([#640](https://github.com/cds-snc/gcds-components/issues/640)) ([2f8efa3](https://github.com/cds-snc/gcds-components/commit/2f8efa337a49411da258e4b2c9dea64a50021cbf))

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0)

Version publiée le : 2024-09-12

### :rocket: Nouvelle fonctionnalité

* Ajouter la valeur de l'attribut pour le bouton gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))

### :bug: :wrench: Corrections de bogues

* divers petits correctifs de bogues de conception ([#634](https://github.com/cds-snc/gcds-components/issues/634)) ([8eefbe4](https://github.com/cds-snc/gcds-components/commit/8eefbe4def6d385f8130df4ddb4a2065ae4f6c57))


## [0.25.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.0...gcds-components-v0.25.1)

Version publiée le : 2024-08-22

### :jigsaw: Correctif

- Créé afin de permettre les nouvelles unités de style à être importées dans le paquet react-ssr ([#624](https://github.com/cds-snc/gcds-components/issues/624)) ([88790c7](https://github.com/cds-snc/gcds-components/commit/88790c76f6571abc7d1505a492cea6591cbd97cc))
- Problèmes de marge et d'espacement dans gcds-card ([#617](https://github.com/cds-snc/gcds-components/issues/617)) ([2d39bdc](https://github.com/cds-snc/gcds-components/commit/2d39bdc52a51da82e5fa0b55c569dd316d355176))

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.1...gcds-components-v0.25.0)

Version publiée le : 2024-08-19

### :rotating_light: Changements de ruptures de code

Le composants Carte et Indicateur d'étape ont eu une refonte et des changements à la structure de leur API.

#### Mises à jour au composant Carte

La propriété `type` sera enlevée et le composant supporte maintenant les lien d'interactions seulement. Veuillez noter que l'utilisation de `type=action` ne sera pas supporté dans cette version.

La propriété `tag` sera remplacée par la nouvelle propriété `badge`.

La propriété `title-element` sera remplacée par la nouvelle propriété `card-title-tag`.

Arrêt du support pour (`slot="footer"`) car nous n'avons pas observé d'utilité pour cet élément.

**Nouveau**: Nous ajoutons un `slot` afin de supporter l'affichage du formattage de texte HTML dans le composant Carte. Vous pouvez toujours utiliser la propriété `description` avec une valeur de text simple seulement.

##### Vieille implémentation

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

##### Nouvelle implémentation

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

#### Mises à jour au composant Indicateur d'étape

**Nouveau**: Une nouvelle propriété `tag` sera disponible afin de donner au développeur l'option de choisir la bonne en-tête pour générer l'élément.

**Nouveau (obligatoire)**: Le composant requiert maintenant du texte ou un élément dans le `slot` afin d'afficher l'élément d'en-tête. C'est une propriété obligatoire et le composant ne sera pas généré sans elle.

Si vous avez des problèmes avec le changement, ‌‌[contactez-nous](https://design-system.alpha.canada.ca/en/contact/).

##### Vieille implémentation

```html
<gcds-stepper
  current-step=""
  total-steps=""
></gcds-stepper>
```

##### Nouvelle implémentation

```html
<gcds-stepper
  current-step=""
  total-steps=""
  tag=""
>
  <slot></slot>
</gcds-stepper>
```

### :rocket: Nouvelles fonctionnalités

- Ajout du composant gcds-date-input ([#607](https://github.com/cds-snc/gcds-components/issues/607)) ([ce0b4cc](https://github.com/cds-snc/gcds-components/commit/ce0b4ccdbcc9b25ebd8fb8e5b5ca03f4d49332a5))
- Ajout d'une nouvelle propriété `main-container` au conteneur ([#613](https://github.com/cds-snc/gcds-components/issues/613)) ([4eef9b3](https://github.com/cds-snc/gcds-components/commit/4eef9b394d17bac749bd78d5131e97df4e97f7e9))
- Mise à jour de gcds-card (changement de ruptures de code) ([#578](https://github.com/cds-snc/gcds-components/issues/578)) ([4a72105](https://github.com/cds-snc/gcds-components/commit/4a72105de07e5bb5675241729c443e4bb6f89925))
- Mises à jour au composant Indicateur d'étape (changement de ruptures de code + nouvel attribut tag) ([#573](https://github.com/cds-snc/gcds-components/issues/573)) ([0f8bd2f](https://github.com/cds-snc/gcds-components/commit/0f8bd2f3031557beca5377765928c13e0a362025))

### :arrows_counterclockwise: Optimisation du code

- changer l'étiquette du `fieldset legend required` de `strong` à `span` ([#612](https://github.com/cds-snc/gcds-components/issues/612)) ([ca5108f](https://github.com/cds-snc/gcds-components/commit/ca5108f0d29327b62cd9b694b44203b8bdc7250e))

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.0...gcds-components-v0.24.1)

Version publiée le : 2024-08-13

### :jigsaw: Correctif

- Mise à jour de mauvais alignements de design pour plusieurs composants ([#608](https://github.com/cds-snc/gcds-components/issues/608)) ([9bcb4ae](https://github.com/cds-snc/gcds-components/commit/9bcb4aef1004ea45b4ad0a2855b2322cfedbe799))

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.23.0...gcds-components-v0.24.0)

Version publiée le : 2024-08-01

### :rocket: Nouvelles fonctionnalités

- Ajout d'un statut visité au composant Lien ([#602](https://github.com/cds-snc/gcds-components/issues/602)) ([da4e524](https://github.com/cds-snc/gcds-components/commit/da4e524708e74ec485c9bec1805e09b3c67e125c))

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.4...gcds-components-v0.23.0)

Version publiée le : 2024-07-31

### :rocket: Nouvelles fonctionnalités

- Ajout du paquest React ssr (version canary) ([#587](https://github.com/cds-snc/gcds-components/issues/587)) ([bf3fd1e](https://github.com/cds-snc/gcds-components/commit/bf3fd1ee11429ae9ff97047547f6bcedd2fd8c3d))

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.3...gcds-components-v0.22.4)

Version publiée le : 2024-07-29

### :jigsaw: Correctif

- Revenir en arrière sur les changements au processus de déploiement Angular ([#597](https://github.com/cds-snc/gcds-components/issues/597)) ([0b62c3a](https://github.com/cds-snc/gcds-components/commit/0b62c3ab4a1ac4f65401b92fba732f9166c9e39d))

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.2...gcds-components-v0.22.3)

Version publiée le : 2024-07-29

### :arrows_counterclockwise: Optimisation du code

- Mise à jour au design des messages d'erreurs ([#592](https://github.com/cds-snc/gcds-components/issues/592)) ([5f1b94e](https://github.com/cds-snc/gcds-components/commit/5f1b94e83076c8b97a4f110ac7269acc15cc67f4))

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.1...gcds-components-v0.22.2)

Version publiée le : 2024-07-10

### :jigsaw: Correctif

- Problèmes d'accessibilité sur Safari avec les liens et le focus du groupe de navigation ([#583](https://github.com/cds-snc/gcds-components/issues/583)) ([d7c3fb9](https://github.com/cds-snc/gcds-components/commit/d7c3fb91f0fb475926371be62395e33b635153a4))
- Retrait des événements rxjs afin d'éviter la duplication des évènements personnalisés dans @cdssnc/gcds-component-angular ([#566](https://github.com/cds-snc/gcds-components/issues/566)) ([9bf46ac](https://github.com/cds-snc/gcds-components/commit/9bf46ac49c7ffd3a1569430a0a138136e639fc9c))

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.0...gcds-components-v0.22.1)

Version publiée le : 2024-05-27

### :jigsaw: Correctif

- Mauvais alignements du bouton dans le menu thème et sujet en français (correctif) ([#541](https://github.com/cds-snc/gcds-components/issues/541)) ([c524215](https://github.com/cds-snc/gcds-components/commit/c5242158b75838eb4366b0c254029597b87bcab4))

### :arrows_counterclockwise: Optimisation du code

- Mise à jour du composant Champ de saisie afin d'augmenter le calcul de la largeur du champ ([#536](https://github.com/cds-snc/gcds-components/issues/536)) ([d6204f3](https://github.com/cds-snc/gcds-components/commit/d6204f327d639b304df7bb49006c60ef1950b7f8))

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.21.0...gcds-components-v0.22.0)

Version publiée le : 2024-05-21

### :rocket: Nouvelles fonctionnalités

- Ajout/création du paquet @cdssnc/gcds-components-vue ([#516](https://github.com/cds-snc/gcds-components/issues/516)) ([3933498](https://github.com/cds-snc/gcds-components/commit/3933498c007bb3628badb0a9c751980bb01ecd25))ß
- Ajout de @Outputs au composants pour Angular ([#529](https://github.com/cds-snc/gcds-components/issues/529)) ([0660093](https://github.com/cds-snc/gcds-components/commit/0660093997b9f23ddc4745a0599df66c793a6e51))
- Ajout de `dist-hydrate-app`. ([#524](https://github.com/cds-snc/gcds-components/issues/524)) ([c448c59](https://github.com/cds-snc/gcds-components/commit/c448c59f56c367e8f408becffaa3edaf3ef8d280))

### :jigsaw: Correctif

- Émettre l'évènement `change` venant des composants de formulaire ([#523](https://github.com/cds-snc/gcds-components/issues/523)) ([d956370](https://github.com/cds-snc/gcds-components/commit/d9563707bb5f26ac8da7ee0cbd2c5f343ec624d3))

## [0.21.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.20.0...gcds-components-v0.21.0)

Version publiée le : 2024-05-08

### :rotating_light: Changements de ruptures de code

#### Transition des éléments personnalisés associés au formulaire

Nous avons mis des efforts substentiels afin de migrer nos composants au éléments personnalisés associés au formulaire. Les composants du Sytème de design GC vont maintenant utiliser le shadow DOM (document object model). Le shadow DOM améliore le contrôle et l'encapsulation de la stylisation et permet aux composants de formulaire d'être intégré aux fonctionnalités natives du navigateur pour la validation et l'accessibilité.

Ce changement requiert que tous les composants aient l'attribut `name`. Voici une liste des composants du Système de design GC visés par ce changement:

- Téléverseur de fichiers (`gcds-file-uploader`)
- Champ de saisie (`gcds-input`)
- Sélection (`gcds-select`)
- Zone de texte (`gcds-textarea`)

##### Changements requis pour les composants de formulaire

- Ajoutez un attribut `name`
- Votre code devrait ressembler à ceci:

```html
<gcds-file-uploader name="" uploader-id="" label=""></gcds-file-uploader>
<gcds-input name="" input-id="" label=""></gcds-input>
<gcds-select name="" select-id="" label=""></gcds-select>
<gcds-textarea name="" textarea-id="" label=""></gcds-textarea>
```

#### Shadow-dom

Les composants qui suivent seront mis à jour pour utiliser le shadow DOM comme les autres composants du Système de design GC:

- Pagination (`gcds-pagination`)
- Recherche (`gcds-search`)
- Signature (`gcds-signature`)

#### Groupe radio

Inclus dans cette transition, le composant `gcds-radio` sera abandonné en faveur du nouveau composant `gcds-radio-group`. Le composant Groupe de boutons radio permet un meilleur contrôle sur les composants natif HTML de formulaire dans un environnement shadow DOM.

##### Vieille implémentation

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

##### Nouvelle implémentation

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

### :rocket: Nouvelles fonctionnalités

- Ajout de la propriété `tag` au composant gcds-sr-only ([#484](https://github.com/cds-snc/gcds-components/issues/484)) ([dfb7285](https://github.com/cds-snc/gcds-components/commit/dfb7285a14b477f4c4f71750e8b09d3ca5c193a9))
- Réécriture de composants (associés au fomulaire, gcds-radio-group, réécriture CSS) ([#486](https://github.com/cds-snc/gcds-components/issues/486)) ([ae05841](https://github.com/cds-snc/gcds-components/commit/ae0584172bb2219f907074c48235ae8b4f8719f5))

### :jigsaw: Correctif

- Mise à jour de fonctions d'utilités pour améliorer l'utilisabilité ([#495](https://github.com/cds-snc/gcds-components/issues/495)) ([a0e8fbb](https://github.com/cds-snc/gcds-components/commit/a0e8fbbf5ed8004f72f4e51ca2f2da4ef70a37ef))

## [0.20.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.1...gcds-components-v0.20.0)

Version publiée le : 2024-03-14

### :rocket: Nouvelles fonctionnalités

- définir les valeurs permises pour la propriété d'étiquette de la grille afin de limiter les mauvaises utilisations ([#470](https://github.com/cds-snc/gcds-components/issues/470)) ([a686d09](https://github.com/cds-snc/gcds-components/commit/a686d09dab4cf40548448ccdc7e050d6322afb24))

### :jigsaw: Correctif

- Paquet React: chemin invalide pour les types ([#471](https://github.com/cds-snc/gcds-components/issues/471)) ([f859d43](https://github.com/cds-snc/gcds-components/commit/f859d438e9a79184d83157b92a97f855376777ac))

## [0.19.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.0...gcds-components-v0.19.1)

Version publiée le : 2024-02-22

### :jigsaw: Correctif

- Correctifs identifiés dans le rapport d'accessibilité (accessibilité et utilisabililté) ([#446](https://github.com/cds-snc/gcds-components/issues/446)) ([09095a5](https://github.com/cds-snc/gcds-components/commit/09095a52f41e40a243455874daf2c147c18d89b1))

## v0.19.0

### :rotating_light: Changements de ruptures de code

- Composant Bouton - enlever la propriété `button-style prop` ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

### :jigsaw: Correctif

- changement de la logistique de la sortie de focus de la bascule de langue de `top-nav` à `nav-group` ([#387](https://github.com/cds-snc/gcds-components/pull/387)) ([a72f91f](https://github.com/cds-snc/gcds-components/commit/a72f91fb975ded03151fc0eee2cc376ddb2b22c4))

### :arrows_counterclockwise: Optimisation du code

- remplacer le `skip-to-href` du `gcds-button` dans `gcds-header` avec le composant `gcds-link` ([#451](https://github.com/cds-snc/gcds-components/issues/451)) ([f3a052b](https://github.com/cds-snc/gcds-components/commit/f3a052b3e79a8fa8fdf8d9724c47deb43b09977c))
- réécriture du CSS du composant Bouton ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

## v0.18.1

### Changement mineur

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) — Exportation de ContentValues à partir de gcds-grid pour corriger la version du paquet Angular

## v0.18.0

### :rocket: Nouvelles fonctionnalités

- Fonctionnalité pour le composant grille
  - Possibilité d’ajouter des colonnes de grille dont la taille est individuellement définie et de définir des lignes de hauteur égale.

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) — Ajout de la variante Light au composant lien

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) — Correction du nom de propriété pour les variantes du composant lien
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) — Correction de la validation pour le téléverseur de fichiers
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) — Mise à jour des emplacements (slots) du composant en-tête dans Storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) — Correction du lien Ressources dans Storybook
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) — Mise à jour des instructions pour Font Awesome dans le README

## v0.17.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) \- Mise à jour de la configuration de la génération de gabarits pour une meilleure intégration avec plusieurs infrastructures (Nextjs et create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2F41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) \- Correctif : réinitialisation des styles d’emplacement

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) \- Mise à jour du contenu de la démo

## v0.17.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/305 - [2ffc292](https://github.com/cds-snc/gcds-components/commit/2ffc292828fd5eed53a4eb33cbe753da08f9dde0) - Nouveau composant `gcds-link` permettant la navigation vers une nouvelle page, un site web our une section à l`intérieur de la page courante.

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) - Ajout de valeur par défaut pour la marge du haut et du bas du composant texte
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) - Amélioration de l`accessibilité de `storybook` pour la section démos

## v0.16.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/306 - [c972bef](https://github.com/cds-snc/gcds-components/commit/c972befacb6961fed73c983df1fb4fda6cbc9ca5) - Nouveau composant `gcds-heading` pour générer les en-têtes avec les styles du SDGC

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) - CSS `slot` dans `gcds-breadcrumbs-item` corrigé afin d`afficher le text souligné

## v0.15.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) - Nouveau composant `gcds-text` pour générer du contenu texte dans les styles du SDGC
- https://github.com/cds-snc/gcds-components/pull/315 - [8117534](https://github.com/cds-snc/gcds-components/commit/8117534ffe52c998be9e09002f1dbbe1ec528f48) - Nouveau composant `gcds-sr-only` pour cacher le contenu du texte disponible seulement avec des technologies d`assistance

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) - Mise à jour de `media query` dans `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) - Étiquette `nav langdmark` supprimée pour prévenir la confusion dans `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) - Déterminer les valeurs par défaut des propriétés dans `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) - L`option `box-shadow` ajouté au focus pour les composants afin d`avoir une constance du `focus state`
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) - Ajout de styles pour la balise `slot` pour régler des problèmes d`accessibilité dans Chrome pour les composants qui utilisent cette balise avec du texte

## v0.14.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/223 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Nouveau composant `gcds-topic-menu` pour la conformité avec canada.ca

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) - Affichage mobile et texte français mis à jour pour le composant `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) - Propriété `columns` (colonnes) définit comme obligatoire pour le composant `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) - Correctif d’accessibilité appliqué pour le composant `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) - Correctif d’accessibilité appliqué pour le composant `gcds-nav-group`

## v0.13.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/212 - [c8f0aa1](https://github.com/cds-snc/gcds-components/commit/c8f0aa1107404b5093731548f072d22e8bb699a3) - Nouveau composant `gcds-search` pour la conformité avec canada.ca

### :rotating_light: Changements de ruptures de code

- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Élément `topnav` du composant `gcds-header` renommé à `skip-to-nav`

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) - Styles d’éléments en survol pour le composant `gcds-top-nav` mis à jour afin d’être conformes au fichier de design
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) - Styles d’éléments en survol pour les composants `gcds-file-uploader` et `gcds-pagination` mis à jour
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) - Texte de bouton du composant `gcds-file-uploader` modifié à `Parcourir`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) - Icône retirée de l’étiquette de bouton pour le composant `gcds-file-uploader`

## v0.12.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) - Correctifs d’accessibilité appliqués pour les composants `gcds-file-uploader` et navigation

## v0.12.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) - Composants `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link` ajoutés à la bibliothèque
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Propriété `type` ajoutée au composant `gcds-date-modified` afin d’afficher le numéro de version au besoin

### :rotating_light: Changements de ruptures de code

- Composant menu de navigation globale (`gcds-site-menu`)
  - Composant `gcds-site-menu` retiré de la bibliothèque de composant et remplacé par `gcds-top-nav`

- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Propriété `sub-heading` (sous-titre) supprimée du composant `gcds-error-summary`

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - `experimentalImportInjection` ajouté à la version afin d’aider l’intégration de composants nécessitant des installations regroupées comme Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - Évènement `onChange` corrigé pour le composant `gcds-checkbox`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) - Styles des erreurs de formulaire mis à jour

## v0.11.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/183 - [b64db5d](https://github.com/cds-snc/gcds-components/commit/b64db5d0877adfdd38d400b2a0687d039760b08d) - Nouveau composant `gcds-card` permettant d’afficher une série de renseignements connexes dans un seul élément

### :rotating_light: Changements de ruptures de code

- Composant boîte (`gcds-container`)
  - Propriété `container` (boîte) renommée à `size` (taille)

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) - Propriétés margin et padding (marge et marge intérieure) ajoutées au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) - Propriété border (bordure) ajoutée au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) - Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) - Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`

## v0.10.3

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) - Titre de l’alerte modifiée d’une balise h5 à une balise p + strong
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) - Bordure du composant pagination modifiée pour agencer avec le texte et la couleur de fond

## v0.10.2

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) - Valeur ajoutée aux liens du résumé des erreurs dans storybook afin d’afficher le résumé des erreurs plutôt qu’un écran vide
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) - Texte français mis à jour dans l’en-tête par défaut du résumé des erreurs
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) - Nouveau nom UF et composant gcds-container ajoutés à la démonstration

## v0.10.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) - Descriptions des propriétés du composant `gcds-breadcrumbs` mises à jour

## v0.10.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) -  Nouveau composant `gcds-error-summary` permettant la validation de formulaires avant la soumission
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) - Le dépôt `@cdssnc/gcds-components-angular` a été mis à jour vers Angular v15. Le package ne fonctionnera plus avec Angular v14.

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) - En-tête manquant « À propos de ce site » ajouté au composant gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) - États et styles des composants `gcds-lang-toggle` et `gcds-button` mis à jour afin d’être conformes à la bibliothèque Figma
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) - Problème d’affichage résolu. Le chevron de trop qui s’affichait lorsqu’on utilisait l’attribut hide-canada-link dans le composant gcds-breadcrumbs a été supprimé.
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) - Composant gcds-fieldset modifié pour ne plus utiliser shadowDom, conformément aux autres composants de formulaire
