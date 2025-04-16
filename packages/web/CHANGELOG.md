# Changelog

## [0.34.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.0...gcds-components-v0.34.1)

Released on: 2025-04-16

### :bug: :wrench: Bug Fixes

* **hotfix**: Icon font face URL not resolving properly in the global `gcds.css` file ([#813](https://github.com/cds-snc/gcds-components/issues/813)) ([86464ff](https://github.com/cds-snc/gcds-components/commit/86464ffcbc73d5cab491699d6f93f834f2968781))

## [0.34.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.33.1...gcds-components-v0.34.0)

Released on: 2025-04-14

### :rotating_light: Breaking changes

#### Icon component updates

The GC Design System team has designed and copyrighted a custom-built set of icons for the Government of Canada. The Icon component now uses the custom GCDS Icon font for improved consistency and guidance, replacing the previously used icons from FontAwesome.

* replace Font Awesome with GCDS icons font ([#757](https://github.com/cds-snc/gcds-components/issues/757)) ([b747bfc](https://github.com/cds-snc/gcds-components/commit/b747bfcd7e9ac135ed87486a2b85766d2557b5c3))
* remove icon props icon-style and fixed-width ([#761](https://github.com/cds-snc/gcds-components/pull/761)) ([2b91787](https://github.com/cds-snc/gcds-components/commit/2b91787b215c38f074a1ae26ebf032805e357fba))

#### Benefits

This change brings several important benefits:

* We have removed the dependency on the third-party FontAwesome package. The new icon font will be integrated into the components package, eliminating the need to maintain the FontAwesome CDN link.
* Increased visual consistency for a more unified appearance across Government of Canada services to foster trust and accessibility.

#### Property changes

The `fixed-width` and `icon-style` properties have been removed. Icons are now properly sized by default and adopt a unified style for enhanced consistency across GC services. If your code utilizes these properties, please remove them to ensure compatibility with the new font and avoid tech debt.

Only update your code if you use these properties, otherwise, the new default values will be applied automatically.

* [gcds-icon](https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-icon)
  * `fixed-width`
  * `icon-style`

#### Updated Icon `names`

With this update, Icon `names` have been updated to align with the custom GCDS Icons font. Existing icon `names` have changed, requiring updates to your code. Please revise any usage of old icon `names` to reflect these changes. You can find an overview of all available `names` in the [gcds-icon readme](https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-icon).

#### Remove existing FontAwesome dependencies

You will be able to remove any existing FontAwesome dependencies (such as CDN links, npm packages, etc.) if you choose to exclusively use the GC Design System icon component going forward.


### :bug: :wrench: Bug Fixes

* **gcds-file-uploader:** ability to drag and drop files onto file input ([#801](https://github.com/cds-snc/gcds-components/issues/801)) ([159f347](https://github.com/cds-snc/gcds-components/commit/159f347abec31490c7734043a2c14e845c17096e))
* improve layout shift for components ([#798](https://github.com/cds-snc/gcds-components/issues/798)) ([00c0bbb](https://github.com/cds-snc/gcds-components/commit/00c0bbbde169986423c154c17f35e595370d1c23))
* update spacing between links and small typo in footer sub band ([#805](https://github.com/cds-snc/gcds-components/issues/805)) ([a4e1c2a](https://github.com/cds-snc/gcds-components/commit/a4e1c2a3273e9744143590d47ff7ee2b40671a43))

## [0.33.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.33.0...gcds-components-v0.33.1) (2025-04-02)

### :bug: :wrench: Bug Fixes

* GC signature cut off on mobile devices ([#796](https://github.com/cds-snc/gcds-components/issues/796)) ([1603172](https://github.com/cds-snc/gcds-components/commit/1603172413d6427b7f1a34f96a990461a33c5c7d))
* mandatory elements issues ([#793](https://github.com/cds-snc/gcds-components/issues/793)) ([3fbd544](https://github.com/cds-snc/gcds-components/commit/3fbd54469d1634890a814a972e255fc4717405cf))
* Mobile top-nav menu closing in Safari ([#785](https://github.com/cds-snc/gcds-components/issues/785)) ([913eb3c](https://github.com/cds-snc/gcds-components/commit/913eb3c6ed82a5b02161a792470e465f3068bd33))

## [0.33.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.32.0...gcds-components-v0.33.0) (2025-03-18)


### :rocket: New Features

* **gcds-button:** Add start button role ([#775](https://github.com/cds-snc/gcds-components/issues/775)) ([1b519b4](https://github.com/cds-snc/gcds-components/commit/1b519b4d82158476192b7a28ce0a55e2e233dc9f))


### :art: Styles

* update header spacing and border colour + width ([#776](https://github.com/cds-snc/gcds-components/issues/776)) ([bfc184e](https://github.com/cds-snc/gcds-components/commit/bfc184eea624aa39e5966285b433e6399286a030))

## [0.32.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.31.0...gcds-components-v0.32.0) (2025-02-19)


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

## [0.31.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.30.0...gcds-components-v0.31.0) (2025-01-22)


### :rocket: New Features

* add grid gap property for more flexibility ([#732](https://github.com/cds-snc/gcds-components/issues/732)) ([2af7915](https://github.com/cds-snc/gcds-components/commit/2af7915306f0a32f6af32a24336857ce300756d8))
* update installation instructions to match documentation site ([#718](https://github.com/cds-snc/gcds-components/issues/718)) ([e5c3bee](https://github.com/cds-snc/gcds-components/commit/e5c3bee5c724f85db9afe6970b3acee83e5c3d33))


### :bug: :wrench: Bug Fixes

* **gcds-button:** Prevent gcdsClick event if button is disabled ([#724](https://github.com/cds-snc/gcds-components/issues/724)) ([1cd508a](https://github.com/cds-snc/gcds-components/commit/1cd508a87c95b38a1937f421580ab8d846112f9a))
* **gcds-link:** Display property to allow normal link wrap behaviour ([#731](https://github.com/cds-snc/gcds-components/issues/731)) ([b0f357c](https://github.com/cds-snc/gcds-components/commit/b0f357c61c7a951a92f24b1de1b4c2a61e92fc10))
* **gcds-notice:** Add accessible labels to identify notice type ([#721](https://github.com/cds-snc/gcds-components/issues/721)) ([450d182](https://github.com/cds-snc/gcds-components/commit/450d18215ee15c33cdcd6991defc764f65e236e7))
* **gcds-pagination:** Add tabindex="0" to &lt;a&gt; tags to function in webkit browsers ([#723](https://github.com/cds-snc/gcds-components/issues/723)) ([7256590](https://github.com/cds-snc/gcds-components/commit/7256590d0f5517e87fb7e1d10439a7d3b9f7e579))
* **gcds-textarea:** Properly set value in shadow-root textarea ([#730](https://github.com/cds-snc/gcds-components/issues/730)) ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
* **gcds-textarea:** Properly set value in shadowroot textarea ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
* input size property description ([#728](https://github.com/cds-snc/gcds-components/issues/728)) ([f6fa41b](https://github.com/cds-snc/gcds-components/commit/f6fa41b64653160493cc8857e0fb1933234a5050))


### :arrows_counterclockwise: Code Refactoring

* remove mobile stacking from breadcrumbs ([#729](https://github.com/cds-snc/gcds-components/issues/729)) ([cf70cf6](https://github.com/cds-snc/gcds-components/commit/cf70cf6afea17bc7a3ba745fe4851b95306e280e))
* update component spacing + pagination arrows ([#726](https://github.com/cds-snc/gcds-components/issues/726)) ([a00e60d](https://github.com/cds-snc/gcds-components/commit/a00e60dcb389d4577af4c6f5e450718a35574391))

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.1...gcds-components-v0.30.0) (2024-12-17)


### :rocket: New Features

* **angular:** Update angular dependencies to v19 ([#709](https://github.com/cds-snc/gcds-components/issues/709)) ([ab1c12b](https://github.com/cds-snc/gcds-components/commit/ab1c12b822e13040ac8da7e66c5e9ada9aea1180))


### :art: Styles

* improve print design for details component ([#711](https://github.com/cds-snc/gcds-components/issues/711)) ([e68a3bf](https://github.com/cds-snc/gcds-components/commit/e68a3bf78a4a50fe8836cec64ca30557d5298871))


### :arrows_counterclockwise: Code Refactoring

* adjust form element spacing ([#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.0...gcds-components-v0.29.1) (2024-12-11)


### :bug: :wrench: Bug Fixes

* breadcrumbs item arrow display ([#706](https://github.com/cds-snc/gcds-components/issues/706)) ([f455e4d](https://github.com/cds-snc/gcds-components/commit/f455e4dd38263cb9bea787f2d2c207ddf0df95b3))

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.28.0...gcds-components-v0.29.0) (2024-12-11)


### :rocket: New Features

* New gcds-notice component ([#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))


### :arrows_counterclockwise: Code Refactoring

* adjust breadcrumbs margin ([#701](https://github.com/cds-snc/gcds-components/issues/701)) ([9ea1447](https://github.com/cds-snc/gcds-components/commit/9ea1447f1f78eb60901bba4d38765dbc25df264c))

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0) (2024-12-05)

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

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0) (2024-11-19)


### :rocket: New Features

* **gcds-file-uploader:** Add files prop for ease of access to uploaded files ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))


### :bug: :wrench: Bug Fixes

* Allow skipping blocking form submission with validate-on attribute ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* error-message property blocking form submission. ([#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* **gcds-fieldset:** Add CSS to allow form components to maintain responsive layout ([#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))
* **gcds-fieldset:** Add CSS to allow form components to maintin responsive layout ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))


### :arrows_counterclockwise: Code Refactoring

* adjust details font sizes and summary + panel padding ([#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
* improve date-modified validation ([#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
* remove focus colour from label, hint and legend ([#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3) (2024-10-09)


### :bug: :wrench: Bug Fixes

* error summary focusing gcds element from error-links list ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
* **gcds-error-summary:** focusing gcds element from manual error-links list ([#666](https://github.com/cds-snc/gcds-components/issues/666)) ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
* Update available options in select if changed ([#655](https://github.com/cds-snc/gcds-components/issues/655)) ([e7a16cb](https://github.com/cds-snc/gcds-components/commit/e7a16cb6b6d4b5e54887431b2eb2931bfaf1380a))


### :pencil: Documentation

* Fix typo with main-container attribute in storybook ([#659](https://github.com/cds-snc/gcds-components/issues/659)) ([52cf8e8](https://github.com/cds-snc/gcds-components/commit/52cf8e884f09d9d20cfbd4736e7d1fdbddc8edb2))


### :arrows_counterclockwise: Code Refactoring

* **gcds-signature:** Signature alternative text to be bilingual ([#660](https://github.com/cds-snc/gcds-components/issues/660)) ([146e8b2](https://github.com/cds-snc/gcds-components/commit/146e8b29fbd216d655c93266fed0185b540b1712))

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2) (2024-09-25)


### :bug: :wrench: Bug Fixes

* Fix typos in tokens ([#646](https://github.com/cds-snc/gcds-components/issues/646)) ([4c8d850](https://github.com/cds-snc/gcds-components/commit/4c8d850569feafc538aa0e9593ba96cfdf9b97c2))
* **gcds-sr-only:** Align with WCAG technique C7 ([#642](https://github.com/cds-snc/gcds-components/issues/642)) ([3cbe8bc](https://github.com/cds-snc/gcds-components/commit/3cbe8bc08d021849fa16269800fb08e12d4db037))
* Update tokens to fix FIP red and date-input legend font weight ([#650](https://github.com/cds-snc/gcds-components/issues/650)) ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))
* Update tokens to inherit fixes for FIP red and legend font weight ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1) (2024-09-16)


### :bug: :wrench: Bug Fixes

* add mobile font size to search component ([#640](https://github.com/cds-snc/gcds-components/issues/640)) ([2f8efa3](https://github.com/cds-snc/gcds-components/commit/2f8efa337a49411da258e4b2c9dea64a50021cbf))

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0) (2024-09-12)


### :rocket: New Features

* add value attribute to gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))


### :bug: :wrench: Bug Fixes

* various small design bug fixes ([#634](https://github.com/cds-snc/gcds-components/issues/634)) ([8eefbe4](https://github.com/cds-snc/gcds-components/commit/8eefbe4def6d385f8130df4ddb4a2065ae4f6c57))

## [0.25.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.0...gcds-components-v0.25.1) (2024-08-22)


### Bug Fixes

* Build to allow new tokens to be imported in react-ssr package ([#624](https://github.com/cds-snc/gcds-components/issues/624)) ([88790c7](https://github.com/cds-snc/gcds-components/commit/88790c76f6571abc7d1505a492cea6591cbd97cc))
* Margin and spacing issues in gcds-card ([#617](https://github.com/cds-snc/gcds-components/issues/617)) ([2d39bdc](https://github.com/cds-snc/gcds-components/commit/2d39bdc52a51da82e5fa0b55c569dd316d355176))

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.1...gcds-components-v0.25.0) (2024-08-19)


### New Features

* Add gcds-date-input component ([#607](https://github.com/cds-snc/gcds-components/issues/607)) ([ce0b4cc](https://github.com/cds-snc/gcds-components/commit/ce0b4ccdbcc9b25ebd8fb8e5b5ca03f4d49332a5))
* add new main-container prop to container ([#613](https://github.com/cds-snc/gcds-components/issues/613)) ([4eef9b3](https://github.com/cds-snc/gcds-components/commit/4eef9b394d17bac749bd78d5131e97df4e97f7e9))
* update gcds-card (breaking change) ([#578](https://github.com/cds-snc/gcds-components/issues/578)) ([4a72105](https://github.com/cds-snc/gcds-components/commit/4a72105de07e5bb5675241729c443e4bb6f89925))
* updates to stepper component (breaking change + new tag attribute) ([#573](https://github.com/cds-snc/gcds-components/issues/573)) ([0f8bd2f](https://github.com/cds-snc/gcds-components/commit/0f8bd2f3031557beca5377765928c13e0a362025))


### Code Refactoring

* change fieldset legend required to span ([#612](https://github.com/cds-snc/gcds-components/issues/612)) ([ca5108f](https://github.com/cds-snc/gcds-components/commit/ca5108f0d29327b62cd9b694b44203b8bdc7250e))

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.0...gcds-components-v0.24.1) (2024-08-13)


### Bug Fixes

* update small design misalignments in various components ([#608](https://github.com/cds-snc/gcds-components/issues/608)) ([9bcb4ae](https://github.com/cds-snc/gcds-components/commit/9bcb4aef1004ea45b4ad0a2855b2322cfedbe799))

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.23.0...gcds-components-v0.24.0) (2024-08-01)


### New Features

* add visited state to link component ([#602](https://github.com/cds-snc/gcds-components/issues/602)) ([da4e524](https://github.com/cds-snc/gcds-components/commit/da4e524708e74ec485c9bec1805e09b3c67e125c))

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.4...gcds-components-v0.23.0) (2024-07-31)


### New Features

* add react ssr package ([#587](https://github.com/cds-snc/gcds-components/issues/587)) ([bf3fd1e](https://github.com/cds-snc/gcds-components/commit/bf3fd1ee11429ae9ff97047547f6bcedd2fd8c3d))

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.3...gcds-components-v0.22.4) (2024-07-29)


### Bug Fixes

* roll back changes to the angular build process ([#597](https://github.com/cds-snc/gcds-components/issues/597)) ([0b62c3a](https://github.com/cds-snc/gcds-components/commit/0b62c3ab4a1ac4f65401b92fba732f9166c9e39d))

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.2...gcds-components-v0.22.3) (2024-07-29)


### Code Refactoring

* update error message design ([#592](https://github.com/cds-snc/gcds-components/issues/592)) ([5f1b94e](https://github.com/cds-snc/gcds-components/commit/5f1b94e83076c8b97a4f110ac7269acc15cc67f4))

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.1...gcds-components-v0.22.2) (2024-07-10)


### Bug Fixes

* card property typos in Storybook ([17c9d7b](https://github.com/cds-snc/gcds-components/commit/17c9d7b325f2c9b1497914e4924e45163bf16172))
* Safari a11y issues with links and nav group focus ([#583](https://github.com/cds-snc/gcds-components/issues/583)) ([d7c3fb9](https://github.com/cds-snc/gcds-components/commit/d7c3fb91f0fb475926371be62395e33b635153a4))

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.0...gcds-components-v0.22.1) (2024-05-27)


### Bug Fixes

* misaligned of FR theme and topic menu button (bug) ([#541](https://github.com/cds-snc/gcds-components/issues/541)) ([c524215](https://github.com/cds-snc/gcds-components/commit/c5242158b75838eb4366b0c254029597b87bcab4))


### Code Refactoring

* update input component to increase input width calculation ([#536](https://github.com/cds-snc/gcds-components/issues/536)) ([d6204f3](https://github.com/cds-snc/gcds-components/commit/d6204f327d639b304df7bb49006c60ef1950b7f8))

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.21.0...gcds-components-v0.22.0) (2024-05-21)


### New Features

* Add @Outputs to angular wrapper components ([#529](https://github.com/cds-snc/gcds-components/issues/529)) ([0660093](https://github.com/cds-snc/gcds-components/commit/0660093997b9f23ddc4745a0599df66c793a6e51))
* Add dist-hydrate-app output ([#524](https://github.com/cds-snc/gcds-components/issues/524)) ([c448c59](https://github.com/cds-snc/gcds-components/commit/c448c59f56c367e8f408becffaa3edaf3ef8d280))
* Add/create @cdssnc/gcds-components-vue package ([#516](https://github.com/cds-snc/gcds-components/issues/516)) ([3933498](https://github.com/cds-snc/gcds-components/commit/3933498c007bb3628badb0a9c751980bb01ecd25))


### Bug Fixes

* Emit change event from form components ([#523](https://github.com/cds-snc/gcds-components/issues/523)) ([d956370](https://github.com/cds-snc/gcds-components/commit/d9563707bb5f26ac8da7ee0cbd2c5f343ec624d3))

## [0.21.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.20.0...gcds-components-v0.21.0) (2024-05-08)


### New Features

* add tag prop to gcds-sr-only component ([#484](https://github.com/cds-snc/gcds-components/issues/484)) ([dfb7285](https://github.com/cds-snc/gcds-components/commit/dfb7285a14b477f4c4f71750e8b09d3ca5c193a9))

### Changes

* [**Breaking:**](https://github.com/cds-snc/gcds-components/blob/main/CHANGELOG.md#0210-2024-05-08) Component rewrites (form-associated, gcds-radio-group, CSS rewrites)  ([#486](https://github.com/cds-snc/gcds-components/issues/486)) ([ae05841](https://github.com/cds-snc/gcds-components/commit/ae0584172bb2219f907074c48235ae8b4f8719f5))


### Bug Fixes

* Update utility functions for more usability ([#495](https://github.com/cds-snc/gcds-components/issues/495)) ([a0e8fbb](https://github.com/cds-snc/gcds-components/commit/a0e8fbbf5ed8004f72f4e51ca2f2da4ef70a37ef))

## [0.20.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.1...gcds-components-v0.20.0) (2024-03-14)


### New Features

* set allowed values for grid tag property to limit misuse ([#470](https://github.com/cds-snc/gcds-components/issues/470)) ([a686d09](https://github.com/cds-snc/gcds-components/commit/a686d09dab4cf40548448ccdc7e050d6322afb24))

## [0.19.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.0...gcds-components-v0.19.1) (2024-02-22)


### Bug Fixes

* Fixes identified in OCADU report (a11y and usability) ([#446](https://github.com/cds-snc/gcds-components/issues/446)) ([09095a5](https://github.com/cds-snc/gcds-components/commit/09095a52f41e40a243455874daf2c147c18d89b1))

## [0.19.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.18.1...gcds-components-v0.19.0) (2024-02-21)

### Breaking changes

- button component - remove button-style prop ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))

### Bug Fixes

- move toggle navigation focusout logic form top-nav to nav-group ([#387](https://github.com/cds-snc/gcds-components/pull/387)) ([a72f91f](https://github.com/cds-snc/gcds-components/commit/a72f91fb975ded03151fc0eee2cc376ddb2b22c4))

### Code Refactoring

- replace gcds-button skip-to-href in gcds-header with gcds-link component ([#451](https://github.com/cds-snc/gcds-components/issues/451)) ([f3a052b](https://github.com/cds-snc/gcds-components/commit/f3a052b3e79a8fa8fdf8d9724c47deb43b09977c))
- button component css rewrite ([#450](https://github.com/cds-snc/gcds-components/issues/450)) ([f7d4ce4](https://github.com/cds-snc/gcds-components/commit/f7d4ce474b1805c41fb86eec8619bbe8440146e6))
