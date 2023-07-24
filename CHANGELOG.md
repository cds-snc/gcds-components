# Changelog

All notable changes to this project will be documented in this file.

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