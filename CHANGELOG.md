([Français](#journal-des-modifications))

# Changelog

## [0.36.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.35.0...gcds-components-v0.36.0)

Released on: 2025-06-17

### :bug: :wrench: Bug Fixes

- **gcds-checkboxes:** Add logic to make sure a prechecked checkbox's value is removed on change ([#878](https://github.com/cds-snc/gcds-components/issues/878)) ([10ac050](https://github.com/cds-snc/gcds-components/commit/10ac050f4642e6399a9901054f0754dc8a2383ed))
- **gcds-card:** Remove redundant z-index from card and fix focus state ([#879](https://github.com/cds-snc/gcds-components/issues/879)) ([3a284d6](https://github.com/cds-snc/gcds-components/commit/3a284d65e41b06580bf250d56e85bd5c9e72ecbf))

### :arrows_counterclockwise: Code Refactoring

Refactor form validation and validators in the GC Design System components to allow more descriptive error messages. Validators will also take validators written in the old format and convert them into the new format to not produce any breaking changes for teams who have written their own validators.

- Refactor form validators to allow more descriptive error messages ([#846](https://github.com/cds-snc/gcds-components/issues/846)) ([bdf945e](https://github.com/cds-snc/gcds-components/commit/bdf945eba33c51ceec0c4be526ecbe77ad664763))

#### Changes

- Validators now only have validate which returns an object of `{ valid: boolean, reasons: { en: string, fr: string }, errors?: object }`.
- All form components have been updated to have `validate-on` set to `blur` by default
- Tests have been added for each form component to test default validation, a custom validator and a custom validator in the old format.

##### Old implementation

Custom validator using the old implementation to allow validation of `min length`, `max length` or `value` between `min` and `max` for the `gcds-input` component:

```html
<gcds-input
  input-id="form-name"
  id="text-input"
  label="Name"
  hint="Please enter your full name."
  required
></gcds-input>

<script>
  // Old implementation of validator
  const getLengthValidator = (min, max) => {
    // Create errorMessage object
    let errorMessage = {};

    if (min && max) {
      errorMessage['en'] =
        `You must enter between ${min} and ${max} characters`;
      errorMessage['fr'] =
        `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
      errorMessage['en'] = `You must enter at least ${min} characters`;
      errorMessage['fr'] = `French You must enter at least ${min} characters`;
    } else if (max) {
      errorMessage['en'] = `You must enter less than ${max} characters`;
      errorMessage['fr'] = `French You must enter less than ${max} characters`;
    }

    return {
      validate: value => {
        value = value || '';

        if (min && max) {
          return min <= value.length && value.length <= max;
        }

        if (min) {
          return min <= value.length;
        }

        if (max) {
          return value.length <= max;
        }

        return true;
      },
      errorMessage,
    };
  };

  // Get the text input
  const textInput = document.getElementById('text-input');

  // Assign the validator
  textInput.validator = [getLengthValidator(1, 5)];
</script>
```

##### New implementation

Custom validator using the new implementation to allow validation of `min length`, `max length` or `value` between `min` and `max` for the `gcds-input` component:

```html
<gcds-input
  input-id="form-name"
  id="text-input"
  label="Name"
  hint="Please enter your full name."
  required
></gcds-input>

<script>
  // New implementation of validator
  const getLengthValidator = (min, max) => {
    // Create errorMessage object
    let errorMessage = {};

    if (min && max) {
      errorMessage['en'] =
        `You must enter between ${min} and ${max} characters`;
      errorMessage['fr'] =
        `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
      errorMessage['en'] = `You must enter at least ${min} characters`;
      errorMessage['fr'] = `French You must enter at least ${min} characters`;
    } else if (max) {
      errorMessage['en'] = `You must enter less than ${max} characters`;
      errorMessage['fr'] = `French You must enter less than ${max} characters`;
    }

    return {
      validate: value => {
        value = value || '';
        let valid = true;

        if (min && max) {
          valid = min <= value.length && value.length <= max;
        }

        if (min) {
          valid = min <= value.length;
        }

        if (max) {
          valid = value.length <= max;
        }

        console.log(value, value.length, valid, min, max);

        return {
          valid,
          reason: errorMessage,
        };
      },
    };
  };

  // Get the text input
  const textInput = document.getElementById('text-input');

  // Assign the validator
  textInput.validator = [getLengthValidator(1, 5)];
</script>
```

## [0.35.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.3...gcds-components-v0.35.0)

Released on: 2025-06-04

### :rotating_light: Breaking changes

We’ve made changes to the `Radio Group` and `Checkbox` components to clarify their structure and make them easier to use – especially when it comes to validation and visual hierarchy.

In earlier versions, these components were typically wrapped in a `Fieldset` component, which served two purposes:

- Grouping related form elements
- Acting as the label container for radio or checkbox groups

This created a few challenges

- Validation had to be handled on the parent `Fieldset`, which wasn't intuitive
- Visual hierarchy became inconsistent—section legends (like for “Personal Info”) and control group labels (like “Yes or No?”) looked the same, even though they serve different purposes

To address this, we’ve changed the purpose and behavior of these components

- **Redefined `Fieldset` Usage:** The `Fieldset` component will now be used exclusively for grouping related form sections, with visual styling that reflects its role as a section or group heading.

- **New `Radios` and `Checkboxes` Components:** These components now include an internal `fieldset` and handle their own labeling and validation, simplifying implementation and improving accessibility.

- **Deprecation of `Radio Group` and `Checkbox`:** The older `Radio Group` and `Checkbox` components will be deprecated immediately. Continued use may lead to inconsistent behavior and accessibility challenges.

**What's Improved?**

- **More semantic structure**: Each component now better reflects its intended use and meaning in HTML.
- **Simplified validation**: You no longer need to manually handle validation at the parent level – it’s built into the components where you can use validators.
- **Clearer visual hierarchy**: Section headings and group labels are now styled appropriately based on context.
- **Less boilerplate**: There’s no need to wrap these components manually in a `Fieldset` or manage duplicate legends.

#### Action Required: Component-by-Component Guide

##### Fieldset

If you're using `Fieldset` with other form components, you will have to update your code with the following:

- **Update usage:** Remove it if you’re using it to wrap the previous `Radio Group` and `Checkbox` components. The new `Radios` and `Checkboxes` components come with a built-in `fieldset` now.

- **Set legend size (required):** Use the new `legend-size` property to set the legend’s heading level from **H2** to **H6**, adjusting font size for proper hierarchy and accessibility.

- **Remove validation:** `Fieldset` no longer handles validation, which was previously only used for radio and checkbox groups. Remove any usage of `validate-on` and `validator` on the component.

- **Remove deprecated properties:** `fieldset-id`, `required`, `error-message`, and `disabled`. These were previously used only for validation.

Here’s a code example to show the changes:

###### Before:

```html
<gcds-fieldset
  fieldset-id="field-required"
  legend="Legend text"
  hint="This is hint text."
  required
  error-message="This is an error message"
>
  // Grouped form components
</gcds-fieldset>
```

###### After:

```html
<gcds-fieldset legend="Legend text" legend-size="h3" hint="This is hint text.">
  // Grouped form components
</gcds-fieldset>
```

##### Radio Group to Radios

Here’s how to change your `Radio Group` component usage to the new `Radios` component:

- **Swap the component**: Replace `gcds-radio-group` with `gcds-radios`. It now includes a built-in `fieldset` and legend. If you haven’t done so yet, remove the `Fieldset` or `fieldset` wrapper around it.

- **Use the legend property (required):** Define the group label using `legend`; manual group labeling is no longer needed.

- **Access the selected value:** Use the `value` property to set and get the selected radio button’s value directly.

- **New form properties:** Supports new properties like `required`, `hint`, `error-message`, `disabled`, `validator`, and `validate-on` for validation and user feedback.

- **Remove manual validation wrappers:** Validation is handled internally; no need to wrap with `gcds-fieldset`.

###### Before:

```html
<gcds-fieldset
  fieldset-id="radioFieldset"
  legend="Radio Options"
  hint="Choose one option."
  required=""
>
  <gcds-radio-group
    name="radioDefault"
    options='[{
      "label": "Label for radio 1",
      "id": "radio1",
      "value": "radio1",
      "hint": "Description or example to make the option clearer."
    },{
      "label": "Label for radio 2",
      "id": "radio2",
      "value": "radio2",
      "hint": "Description or example to make the option clearer."
    }]'
  >
  </gcds-radio-group>
</gcds-fieldset>
```

###### After:

```html
<gcds-radios
  name="radioDefault"
  legend="Radio Options"
  hint="Choose one option."
  options=`[{
    "id": "radio1",
    "label": "Label for radio 1",
    "value": "radio1",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  },{
    "id": "radio2",
    "label": "Label for radio 2",
    "value": "radio2",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  }]`
  required=""
  error-message="An error message to display"
  disabled=""
  value=""
  validator=""
  validate-on="submit"
>
</gcds-radios>
```

##### Checkbox to Checkboxes

Here’s how to change your Checkbox component usage to the new Checkboxes component:

- **Swap the component:** Replace `gcds-checkbox` with `gcds-checkboxes`. It now includes a built-in `fieldset` in cases where it is appropriate, and `legend`. If you haven’t done so yet, remove the `Fieldset` or `fieldset` wrapper around it.

- **Use the `legend` property:** Define the group label using `legend`. You no longer need individual `label` properties.

- **Configure with `options`.** Use the new `options` property to define each checkbox's `label`, `value`, and `checked` state.

```javascript
// Options array
let options = [
  {
    id: 'checkId1',
    label: 'Option One',
    value: 'value-1',
    checked: '',
    hint: 'Description or example to make the option clearer.',
  },
  {
    id: 'checkId2',
    label: 'Option Two',
    value: 'value-2',
    checked: '',
    hint: 'Description or example to make the option clearer.',
  },
];
```

- **Handle values as an array:** The `value` property now sets and returns an array of all selected checkbox values.

```javascript
// Set the selected checkbox values
let selectedCheckboxes = ['option1', 'option2'];
```

- **Remove deprecated properties:** Remove `label`, `checkbox-id`, and `checked`. These are now part of the `options` object.

- **Skip the wrapper.** No need to wrap in `gcds-fieldset` — validation is handled inside the component.

To recap, here’s a full code example of the changes.

###### Before:

```html
<gcds-fieldset
  fieldset-id="fieldId"
  legend="Group Label"
  hint="Optional hint text."
>
  <gcds-checkbox
    checkbox-id="checkId1"
    label="Option One"
    value="value-1"
    name="group-name"
    hint="Description or example to make the option clearer."
  ></gcds-checkbox>
  <gcds-checkbox
    checkbox-id="checkId2"
    label="Option Two"
    value="value-2"
    name="group-name"
    hint="Description or example to make the option clearer."
  ></gcds-checkbox>
</gcds-fieldset>
```

###### After:

```html
<gcds-checkboxes
  name="checkboxOptions"
  legend="Group Label"
  hint="Optional hint text."
  options=`[{
    "id": "checkId1",
    "label": "Option One",
    "value": "value-1",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  },{
    "id": "checkId2",
    "label": "Option Two",
    "value": "value-2",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  }]`
  required=""
  error-message="An error message to display"
  disabled=""
  value="['value-1', 'value-1']"
  validator=""
  validate-on="submit"
>
</gcds-checkboxes>
```

Or, if you’d like to use your defined variables in a JS framework like React for example:

```javascript
<GcdsCheckboxes
  name="checkboxOptions"
  legend="Group Label"
  hint="Optional hint text."
  options={checkboxOptions}
  required=""
  error-message="An error message to display"
  disabled=""
  value={selectedCheckboxes}
  validator=""
  validate-on="submit"
></GcdsCheckboxes>
```

### :rocket: New Features

- Rework fieldset and new gcds-radios and gcds-checkboxes components ([#845](https://github.com/cds-snc/gcds-components/issues/845)) ([44339cc](https://github.com/cds-snc/gcds-components/commit/44339ccc9b05b3ea5a66ef599b1b7bff63974ea5))

### :bug: :wrench: Bug Fixes

- align structural markup for link and search with GCWeb ([#859](https://github.com/cds-snc/gcds-components/issues/859)) ([183d77d](https://github.com/cds-snc/gcds-components/commit/183d77d4f3b91fad8a2c7115b234dc5709742beb))
- SVG aria labels ([#850](https://github.com/cds-snc/gcds-components/issues/850)) ([936fb72](https://github.com/cds-snc/gcds-components/commit/936fb72caf3a6e4137f552ede13629ce6bd79c3b))
- update installation instructions to remove outdated file ([e8bee81](https://github.com/cds-snc/gcds-components/commit/e8bee8145d9f08ad0c493e21f0e2b31065e5d78b))

### :no_entry: Remove

- **gcds-radio-group + gcds-checkbox:** Remove old radio group and checkbox components ([#860](https://github.com/cds-snc/gcds-components/issues/860)) ([8e3025f](https://github.com/cds-snc/gcds-components/commit/8e3025f58744f25192195aae2fac04b567df7584))

## [0.34.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.2...gcds-components-v0.34.3)

Released on: 2025-05-07

### :art: Styles

- fix details list spacing ([#839](https://github.com/cds-snc/gcds-components/issues/839)) ([57e3a71](https://github.com/cds-snc/gcds-components/commit/57e3a71c23d2ea4e99c08b3504b8d575711457f9))
- fix inconsistent text scaling across desktop + mobile styles for multiple components ([#838](https://github.com/cds-snc/gcds-components/issues/838)) ([d6ff2d0](https://github.com/cds-snc/gcds-components/commit/d6ff2d00fc2194ccf9d63bbd0966ed274d64be90))

## [0.34.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.1...gcds-components-v0.34.2)

Released on: 2025-04-29

### :bug: :wrench: Bug Fixes

- **gcds-card:** Ensure shadow dom are structuraly valid according to spec ([#821](https://github.com/cds-snc/gcds-components/issues/821)) ([fe67947](https://github.com/cds-snc/gcds-components/commit/fe6794729de41224945cb7d53fd8785367044214))
- Prevent click event on disabled button ([#829](https://github.com/cds-snc/gcds-components/issues/829)) ([4c69273](https://github.com/cds-snc/gcds-components/commit/4c692736eff6f5153dad640df9d5ce38008a1134))

### :art: Styles

- Add background colour to checkboxes and radios ([#828](https://github.com/cds-snc/gcds-components/issues/828)) ([91233af](https://github.com/cds-snc/gcds-components/commit/91233afb4e1f2bb32a3f156a8c008ab9d31d9f23))
- update top-nav design ([#822](https://github.com/cds-snc/gcds-components/issues/822)) ([9d01580](https://github.com/cds-snc/gcds-components/commit/9d01580c4fcf8afe2ee105d1dbc0c874259cb92e))

## [0.34.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.0...gcds-components-v0.34.1)

Released on: 2025-04-16

### :bug: :wrench: Bug Fixes

- **hotfix**: Icon font face URL not resolving properly in the global `gcds.css` file ([#813](https://github.com/cds-snc/gcds-components/issues/813)) ([86464ff](https://github.com/cds-snc/gcds-components/commit/86464ffcbc73d5cab491699d6f93f834f2968781))

## [0.34.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.33.1...gcds-components-v0.34.0)

Released on: 2025-04-14

### :rotating_light: Breaking changes

#### Icon component updates

The GC Design System team has designed and copyrighted a custom-built set of icons for the Government of Canada. The Icon component now uses the custom GCDS Icon font for improved consistency and guidance, replacing the previously used icons from FontAwesome.

- replace Font Awesome with GCDS icons font ([#757](https://github.com/cds-snc/gcds-components/issues/757)) ([b747bfc](https://github.com/cds-snc/gcds-components/commit/b747bfcd7e9ac135ed87486a2b85766d2557b5c3))
- remove icon props icon-style and fixed-width ([#761](https://github.com/cds-snc/gcds-components/pull/761)) ([2b91787](https://github.com/cds-snc/gcds-components/commit/2b91787b215c38f074a1ae26ebf032805e357fba))

#### Benefits

This change brings several important benefits:

- We have removed the dependency on the third-party FontAwesome package. The new icon font will be integrated into the components package, eliminating the need to maintain the FontAwesome CDN link.
- Increased visual consistency for a more unified appearance across Government of Canada services to foster trust and accessibility.

#### Property changes

The `fixed-width` and `icon-style` properties have been removed. Icons are now properly sized by default and adopt a unified style for enhanced consistency across GC services. If your code utilizes these properties, please remove them to ensure compatibility with the new font and avoid tech debt.

Only update your code if you use these properties, otherwise, the new default values will be applied automatically.

- [gcds-icon](https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-icon)
  - `fixed-width`
  - `icon-style`

#### Updated Icon `names`

With this update, Icon `names` have been updated to align with the custom GCDS Icons font. Existing icon `names` have changed, requiring updates to your code. Please revise any usage of old icon `names` to reflect these changes. You can find an overview of all available `names` in the [gcds-icon readme](https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-icon).

#### Remove existing FontAwesome dependencies

You will be able to remove any existing FontAwesome dependencies (such as CDN links, npm packages, etc.) if you choose to exclusively use the GC Design System icon component going forward.

### :bug: :wrench: Bug Fixes

- **gcds-file-uploader:** ability to drag and drop files onto file input ([#801](https://github.com/cds-snc/gcds-components/issues/801)) ([159f347](https://github.com/cds-snc/gcds-components/commit/159f347abec31490c7734043a2c14e845c17096e))
- improve layout shift for components ([#798](https://github.com/cds-snc/gcds-components/issues/798)) ([00c0bbb](https://github.com/cds-snc/gcds-components/commit/00c0bbbde169986423c154c17f35e595370d1c23))
- update spacing between links and small typo in footer sub band ([#805](https://github.com/cds-snc/gcds-components/issues/805)) ([a4e1c2a](https://github.com/cds-snc/gcds-components/commit/a4e1c2a3273e9744143590d47ff7ee2b40671a43))

## [0.33.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.33.0...gcds-components-v0.33.1) (2025-04-02)

### :bug: :wrench: Bug Fixes

- GC signature cut off on mobile devices ([#796](https://github.com/cds-snc/gcds-components/issues/796)) ([1603172](https://github.com/cds-snc/gcds-components/commit/1603172413d6427b7f1a34f96a990461a33c5c7d))
- mandatory elements issues ([#793](https://github.com/cds-snc/gcds-components/issues/793)) ([3fbd544](https://github.com/cds-snc/gcds-components/commit/3fbd54469d1634890a814a972e255fc4717405cf))
- Mobile top-nav menu closing in Safari ([#785](https://github.com/cds-snc/gcds-components/issues/785)) ([913eb3c](https://github.com/cds-snc/gcds-components/commit/913eb3c6ed82a5b02161a792470e465f3068bd33))

## [0.33.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.32.0...gcds-components-v0.33.0)

Released on 2025-03-18

### :rocket: New Features

- **gcds-button:** Add start button role ([#775](https://github.com/cds-snc/gcds-components/issues/775)) ([1b519b4](https://github.com/cds-snc/gcds-components/commit/1b519b4d82158476192b7a28ce0a55e2e233dc9f))

### :art: Styles

- update header spacing and border colour + width ([#776](https://github.com/cds-snc/gcds-components/issues/776)) ([bfc184e](https://github.com/cds-snc/gcds-components/commit/bfc184eea624aa39e5966285b433e6399286a030))

## [0.32.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.31.0...gcds-components-v0.32.0)

Released on: 2025-02-19

### :bug: :wrench: Bug Fixes

- Navigation components (`gcds-top-nav`, `gcds-nav-group`) display and interaction issues ([#748](https://github.com/cds-snc/gcds-components/issues/748)) ([0169b14](https://github.com/cds-snc/gcds-components/commit/0169b14bd17c1e65f1531b7df0df9e062776f30b))
- Remove gcds-fieldset dependancy from gcds-date-input ([#746](https://github.com/cds-snc/gcds-components/issues/746)) ([3e103ee](https://github.com/cds-snc/gcds-components/commit/3e103eecccf045862865b3b20cc4390a9942bd28))

### :pencil: Documentation

- We've updated the property descriptions of `card-title-tag` for `gcds-card` and `notice-title-tag` for `gcds-notice` to provide a better and clearer explanation of how it works ([#745](https://github.com/cds-snc/gcds-components/issues/745)) ([96341ed](https://github.com/cds-snc/gcds-components/commit/96341ed5dc388991235eee49564625b7719d717f))

### :art: Styles

We've done some work to align our styles with Canada.ca:

- Updated the paddings for `gcds-footer` ([#755](https://github.com/cds-snc/gcds-components/issues/755)) ([890c216](https://github.com/cds-snc/gcds-components/commit/890c2160333ef5bba5f668ca7bf59f831c57a403))
- Updated `gcds-footer` styles ([#754](https://github.com/cds-snc/gcds-components/issues/754)) ([1cf8a6f](https://github.com/cds-snc/gcds-components/commit/1cf8a6fefb0245f173d0f562db80945ff43508a4))
- Updated `gcds-breadcrumb-item` font size ([#742](https://github.com/cds-snc/gcds-components/issues/742)) ([adf4260](https://github.com/cds-snc/gcds-components/commit/adf4260b94e19b0ef939d32e90a7f374d5d3e7d0))
- Updated `date-modified` font size ([#751](https://github.com/cds-snc/gcds-components/issues/751)) ([a403b7d](https://github.com/cds-snc/gcds-components/commit/a403b7d95c69019a48828949d964249b93a1b61b))
- Updated `gcds-lang-toggle` font size ([#741](https://github.com/cds-snc/gcds-components/issues/741)) ([c7b7c21](https://github.com/cds-snc/gcds-components/commit/c7b7c211d62dec5d7d603fe894f50da4e5bf64fe))
- Updated `gcds-search` styles ([#743](https://github.com/cds-snc/gcds-components/issues/743)) ([3697498](https://github.com/cds-snc/gcds-components/commit/369749807db05e0e0ac3235e1ac05c50568665a5))

## [0.31.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.30.0...gcds-components-v0.31.0)

Released on: 2025-01-22

### :rocket: New Features

- add grid gap property for more flexibility ([#732](https://github.com/cds-snc/gcds-components/issues/732)) ([2af7915](https://github.com/cds-snc/gcds-components/commit/2af7915306f0a32f6af32a24336857ce300756d8))
- update installation instructions to match documentation site ([#718](https://github.com/cds-snc/gcds-components/issues/718)) ([e5c3bee](https://github.com/cds-snc/gcds-components/commit/e5c3bee5c724f85db9afe6970b3acee83e5c3d33))

### :bug: :wrench: Bug Fixes

- **gcds-button:** Prevent gcdsClick event if button is disabled ([#724](https://github.com/cds-snc/gcds-components/issues/724)) ([1cd508a](https://github.com/cds-snc/gcds-components/commit/1cd508a87c95b38a1937f421580ab8d846112f9a))
- **gcds-link:** Display property to allow normal link wrap behaviour ([#731](https://github.com/cds-snc/gcds-components/issues/731)) ([b0f357c](https://github.com/cds-snc/gcds-components/commit/b0f357c61c7a951a92f24b1de1b4c2a61e92fc10))
- **gcds-notice:** Add accessible labels to identify notice type ([#721](https://github.com/cds-snc/gcds-components/issues/721)) ([450d182](https://github.com/cds-snc/gcds-components/commit/450d18215ee15c33cdcd6991defc764f65e236e7))
- **gcds-pagination:** Add tabindex="0" to &lt;a&gt; tags to function in webkit browsers ([#723](https://github.com/cds-snc/gcds-components/issues/723)) ([7256590](https://github.com/cds-snc/gcds-components/commit/7256590d0f5517e87fb7e1d10439a7d3b9f7e579))
- **gcds-textarea:** Properly set value in shadow-root textarea ([#730](https://github.com/cds-snc/gcds-components/issues/730)) ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
- input size property description ([#728](https://github.com/cds-snc/gcds-components/issues/728)) ([f6fa41b](https://github.com/cds-snc/gcds-components/commit/f6fa41b64653160493cc8857e0fb1933234a5050))

### :arrows_counterclockwise: Code Refactoring

- remove mobile stacking from breadcrumbs ([#729](https://github.com/cds-snc/gcds-components/issues/729)) ([cf70cf6](https://github.com/cds-snc/gcds-components/commit/cf70cf6afea17bc7a3ba745fe4851b95306e280e))
- update component spacing + pagination arrows ([#726](https://github.com/cds-snc/gcds-components/issues/726)) ([a00e60d](https://github.com/cds-snc/gcds-components/commit/a00e60dcb389d4577af4c6f5e450718a35574391))

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.1...gcds-components-v0.30.0)

Released on: 2024-12-17

### :rocket: New Features

- **angular:** Update angular dependencies to v19 ([#709](https://github.com/cds-snc/gcds-components/issues/709)) ([ab1c12b](https://github.com/cds-snc/gcds-components/commit/ab1c12b822e13040ac8da7e66c5e9ada9aea1180))

### :art: Styles

- improve print design for details component ([#711](https://github.com/cds-snc/gcds-components/issues/711)) ([e68a3bf](https://github.com/cds-snc/gcds-components/commit/e68a3bf78a4a50fe8836cec64ca30557d5298871))

### :arrows_counterclockwise: Code Refactoring

- adjust form element spacing ([#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.0...gcds-components-v0.29.1)

Released on: 2024-12-11

### :bug: :wrench: Bug Fixes

- breadcrumbs item arrow display ([#706](https://github.com/cds-snc/gcds-components/issues/706)) ([f455e4d](https://github.com/cds-snc/gcds-components/commit/f455e4dd38263cb9bea787f2d2c207ddf0df95b3))

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.28.0...gcds-components-v0.29.0)

Released on: 2024-12-11

### :rocket: New Features

- New gcds-notice component ([#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))

### :arrows_counterclockwise: Code Refactoring

- adjust breadcrumbs margin ([#701](https://github.com/cds-snc/gcds-components/issues/701)) ([9ea1447](https://github.com/cds-snc/gcds-components/commit/9ea1447f1f78eb60901bba4d38765dbc25df264c))

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0)

Released on 2024-12-05

### :rotating_light: Breaking changes

- update components with new typography + spacing tokens ([#695](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

We've made small adjustments to all typography and spacing sizes across the design system. GC Design System components are now closer in appearance to their counterparts on Canada.ca.

These updates were introduced with the [latest release of our design tokens](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**If you are using this package**_
Upgrade your version number to this release version to receive the changes in font sizes, line heights and spacing values.

### Spacing changes

The valid variables used for the properties in the following components have been updated. While some options remain unchanged, the underlying values they contain (in pixels) have been modified. Check the spacing section of our tokens release for the updated pixel values.

_Example_: If you were previously using `400` for the `margin` property on `gcds-container`, it will be updated to `32px`. If you want to keep its previous size of `24px`, you need to change your code to use `300` instead. Here is a [visual mapping guide](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) to help you identify the values you need to use.

Only update your code _if you use these properties_, otherwise the new default values will be applied automatically.

- [**gcds-container**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-container/readme.md)
  - `margin`
  - `padding`
- [**gcds-heading**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-heading/readme.md)
  - `margin-top`
  - `margin-bottom`
- [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - `margin-left`
  - `margin-right`
- [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - `margin-top`
  - `margin-bottom`

### Typography changes

Only update if you use the `caption` value for the `size` property in the following components.

- [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - Change `caption` to `text-small`
- [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - Change `caption` to `text-small`

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0)

Released on 2024-11-21

### :rocket: New Features

- **gcds-file-uploader:** Add files prop for ease of access to uploaded files ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))

### :bug: :wrench: Bug Fixes

- Allow skipping blocking form submission with validate-on attribute ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
- error-message property blocking form submission. ([#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
- **gcds-fieldset:** Add CSS to allow form components to maintain responsive layout ([#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))

### :arrows_counterclockwise: Code Refactoring

- adjust details font sizes and summary + panel padding ([#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
- improve date-modified validation ([#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
- remove focus colour from label, hint and legend ([#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3)

Released on 2024-10-10

### :bug: :wrench: Bug Fixes

- **gcds-error-summary:** focusing gcds element from manual error-links list ([#666](https://github.com/cds-snc/gcds-components/issues/666)) ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
- **gcds-select:** Update available options in select if changed ([#655](https://github.com/cds-snc/gcds-components/issues/655)) ([e7a16cb](https://github.com/cds-snc/gcds-components/commit/e7a16cb6b6d4b5e54887431b2eb2931bfaf1380a))

### :arrows_counterclockwise: Code Refactoring

- **gcds-signature:** Signature alternative text to be bilingual ([#660](https://github.com/cds-snc/gcds-components/issues/660)) ([146e8b2](https://github.com/cds-snc/gcds-components/commit/146e8b29fbd216d655c93266fed0185b540b1712))

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2)

Released on 2024-09-25

### :bug: :wrench: Bug Fixes

- Fix typos in tokens ([#646](https://github.com/cds-snc/gcds-components/issues/646)) ([4c8d850](https://github.com/cds-snc/gcds-components/commit/4c8d850569feafc538aa0e9593ba96cfdf9b97c2))
- **gcds-sr-only:** Align with WCAG technique C7 ([#642](https://github.com/cds-snc/gcds-components/issues/642)) ([3cbe8bc](https://github.com/cds-snc/gcds-components/commit/3cbe8bc08d021849fa16269800fb08e12d4db037))
- Update tokens to fix FIP red and date-input legend font weight ([#650](https://github.com/cds-snc/gcds-components/issues/650)) ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))
- Update tokens to inherit fixes for FIP red and legend font weight ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1)

Released on: 2024-09-16

### :bug: :wrench: Bug Fixes

- add mobile font size to search component ([#640](https://github.com/cds-snc/gcds-components/issues/640)) ([2f8efa3](https://github.com/cds-snc/gcds-components/commit/2f8efa337a49411da258e4b2c9dea64a50021cbf))

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0)

Released on: 2024-09-12

### :rocket: New Features

- add value attribute to gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))

### :bug: :wrench: Bug Fixes

- various small design bug fixes ([#634](https://github.com/cds-snc/gcds-components/issues/634)) ([8eefbe4](https://github.com/cds-snc/gcds-components/commit/8eefbe4def6d385f8130df4ddb4a2065ae4f6c57))

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
  <slot name="”footer”"></slot>
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
<gcds-stepper current-step="" total-steps=""></gcds-stepper>
```

##### New implementation

```html
<gcds-stepper current-step="" total-steps="" tag="">
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

- https://github.com/cds-snc/gcds-components/pull/311 - [39c2135](https://github.com/cds-snc/gcds-components/commit/39c2135f3f9eb6ef3fcfa834cb0ab8cfdbc1c498) - New `gcds-text` component to render text content in GCDS style
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

## [0.35.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.34.3...gcds-components-v0.35.0)

Version publiée le : 2025-06-04

### Changement non rétrocompatible : jeu de champs, groupe de boutons radio, case à cocher

Nous avons apporté des modifications aux composants `groupe de boutons radio` et `case à cocher` afin de clarifier leur structure et de les rendre plus faciles à utiliser, en particulier en ce qui concerne la validation et la hiérarchie visuelle.

Dans les versions antérieures, ces composants étaient généralement enveloppés d’un composant `jeu de champs` pour deux raisons :

- Regrouper les éléments connexes d’un formulaire
- Agir à titre de conteneur d’étiquettes pour les groupes de boutons radio ou de cases à cocher.

Cela posait quelques défis.

- La gestion de la validation devait se faire au moyen d’un composant `jeu de champs` parent, ce qui n’était pas intuitif.
- La hiérarchie visuelle est devenue incohérente — les légendes de section (p. ex. « Renseignements personnels ») et les étiquettes de groupes de contrôle (p. ex. « Oui ou Non? ») se ressemblaient, même s’ils servaient différentes fonctions.

Pour y remédier, nous avons modifié le but et le comportement de ces composants.

- **Emploi redéfini du composant `jeu de champs` :** Le composant `jeu de champs` sera désormais utilisé exclusivement pour regrouper les sections de formulaires connexes, avec un style visuel qui reflète son rôle de titre de section ou de groupe.

- **Nouveaux composants `boutons radio` et `cases à cocher` :** Ces composants comprennent désormais un `jeu de champs` interne et leurs propres fonctions d’étiquetage et de validation, ce qui simplifie leur mise en œuvre et améliore leur accessibilité.

- **Mise hors service des composants `groupe de boutons radio` et `case à cocher` :** Les anciens composants `groupe de boutons radio` et `case à cocher` seront immédiatement mis hors service. Des comportements incohérents et des défis en matière d’accessibilité pourraient survenir si vous continuez à les utiliser.

**Quelles sont les améliorations?**

- **Structure plus sémantique** : L’emploi et la signification prévus de chaque composant sont maintenant mieux reflétés dans le code HTML.
- **Validation simplifiée** : Il n’est plus nécessaire de gérer manuellement la validation au niveau parent — elle est intégrée dans les composants qui permettent l’utilisation de valideurs.
- **Hiérarchie visuelle plus claire**: Les titres de section et les étiquettes de groupe portent maintenant les styles appropriés en fonction de leur contexte.
- **Moins de travail manuel :** Il n’est pas nécessaire d’envelopper ces composants manuellement dans un `jeu de champs` ni de gérer les légendes en double.

#### Mesures à prendre : Guide par composant

##### Jeu de champs

Si vous utilisez le composant `jeu de champs` avec d’autres composants de formulaire, vous devrez mettre à jour votre code avec les éléments suivants :

- **Mettre à jour l’emploi :** Supprimez-le si vous l’utilisez pour envelopper les anciens composants `groupe de boutons radio` et `case à cocher`. Les composants `boutons radio` et `cases à cocher` comportent maintenant un élément `fieldset` intégré.

- **Régler la taille de police de la légende (obligatoire) :** Utilisez la nouvelle propriété `legend-size` pour définir le niveau de titre de la légende de **H2** à **H6**, en ajustant la taille de la police pour une hiérarchie et une accessibilité appropriées.

- **Supprimer la fonction de validation :** Le composant `jeu de champs` ne prend plus en charge la fonction de validation, qui n’était auparavant utilisée que pour les groupes de boutons radio et de cases à cocher. Supprimez tout emploi de `validate-on` et `validator` du composant.

- **Supprimer les propriétés obsolètes :** `fieldset-id`, `required`, `error-message` et `disabled`. Ceux-ci étaient auparavant utilisés uniquement pour la validation.

Voici un exemple de code pour montrer les changements :

###### Avant :

```html
<gcds-fieldset
  fieldset-id="field-required"
  legend="Legend text"
  hint="This is hint text."
  required
  error-message="This is an error message"
>
  // Grouped form components
</gcds-fieldset>
```

###### Après :

```html
<gcds-fieldset legend="Legend text" legend-size="h3" hint="This is hint text.">
  // Grouped form components
</gcds-fieldset>
```

##### Transition du composant groupe de boutons radio au composant boutons radio

Voici comment modifier l’instance de votre composant `groupe de boutons radio` pour employer le nouveau composant `boutons radio` :

- **Échanger les composants :** Remplacez `gcds-radio-group` par `gcds-radios`. Un élément `fieldset` et une légende y sont maintenant intégrés. Si vous ne l’avez pas encore fait, retirez l’enveloppe `jeu de champs` ou `fieldset`.

- **Utiliser la propriété \<legend\> (obligatoire) :** Définissez l’étiquette de groupe à l’aide de la propriété `legend`; l’étiquette manuelle de groupe n’est plus nécessaire.

- **Accéder à la valeur sélectionnée :** Utilisez la propriété `value` pour définir et obtenir directement la valeur du bouton radio sélectionné.

- **Nouvelles propriétés de formulaire :** Prise en charge de nouvelles propriétés comme `required`, `hint`, `error-message`, `disabled`, `validator` et `validate-on` pour la validation et les commentaires des utilisateur·rice·s.

- **Supprimer les enveloppes de validation manuelle :** La validation est gérée en interne; il n’est pas nécessaire d’utiliser une enveloppe `gcds-fieldset`.

###### Avant :

```html
<gcds-fieldset
  fieldset-id="radioFieldset"
  legend="Radio Options"
  hint="Choose one option."
  required=""
>
  <gcds-radio-group
    name="radioDefault"
    options='[{
      "label": "Label for radio 1",
      "id": "radio1",
      "value": "radio1",
      "hint": "Description or example to make the option clearer."
    },{
      "label": "Label for radio 2",
      "id": "radio2",
      "value": "radio2",
      "hint": "Description or example to make the option clearer."
    }]'
  >
  </gcds-radio-group>
</gcds-fieldset>
```

###### Après :

```html
<gcds-radios
  name="radioDefault"
  legend="Radio Options"
  hint="Choose one option."
  options=`[{
    "id": "radio1",
    "label": "Label for radio 1",
    "value": "radio1",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  },{
    "id": "radio2",
    "label": "Label for radio 2",
    "value": "radio2",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  }]`
  required=""
  error-message="An error message to display"
  disabled=""
  value=""
  validator=""
  validate-on="submit"
>
</gcds-radios>
```

##### Transition du composant case à cocher au composant cases à cocher

Voici comment modifier l’instance de votre composant case à cocher pour employer le nouveau composant cases à cocher :

- **Échanger les composants :** Remplacez `gcds-checkbox` par `gcds-checkboxes`. Un élément `jeu de champs` y est maintenant intégré pour les situations qui l’exigent, ainsi qu’une propriété `légende`. Si vous ne l’avez pas encore fait, retirez l’enveloppe `jeu de champs` ou `fieldset`.

- **Utiliser la propriété `legend` (obligatoire) :** Définissez l’étiquette du groupe en utilisant `legend`. Vous n’avez plus besoin de propriétés `label` individuelles.

- **Configurer à l’aide de la propriété `options`.** Utilisez la nouvelle propriété `options` pour définir l’état `label`, `value` et `checked` de chaque case à cocher.

```javascript
// Options array
let options = [
  {
    id: 'checkId1',
    label: 'Option One',
    value: 'value-1',
    checked: '',
    hint: 'Description or example to make the option clearer.',
  },
  {
    id: 'checkId2',
    label: 'Option Two',
    value: 'value-2',
    checked: '',
    hint: 'Description or example to make the option clearer.',
  },
];
```

- **Traiter les valeurs sous forme de tableau :** La propriété `value` définit et retourne maintenant un tableau de toutes les valeurs de cases à cocher sélectionnées.

```javascript
// Set the selected checkbox values
let selectedCheckboxes = ['option1', 'option2'];
```

- **Supprimer les propriétés obsolètes :** Supprimez `label`, `checkbox-id` et `checked`. Celles-ci font maintenant partie de l’objet `options`.

- **Sauter l’enveloppe.** Il n’est pas nécessaire d’appliquer une enveloppe `gcds-fieldset` — la validation est gérée à même le composant.

Pour récapituler, voici un exemple des changements en code intégral.

###### Avant :

```html
<gcds-fieldset
  fieldset-id="fieldId"
  legend="Group Label"
  hint="Optional hint text."
>
  <gcds-checkbox
    checkbox-id="checkId1"
    label="Option One"
    value="value-1"
    name="group-name"
    hint="Description or example to make the option clearer."
  ></gcds-checkbox>
  <gcds-checkbox
    checkbox-id="checkId2"
    label="Option Two"
    value="value-2"
    name="group-name"
    hint="Description or example to make the option clearer."
  ></gcds-checkbox>
</gcds-fieldset>
```

###### Après :

```html
<gcds-checkboxes
  name="checkboxOptions"
  legend="Group Label"
  hint="Optional hint text."
  options=`[{
    "id": "checkId1",
    "label": "Option One",
    "value": "value-1",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  },{
    "id": "checkId2",
    "label": "Option Two",
    "value": "value-2",
    "checked": "",
    "hint": "Description or example to make the option clearer.",
  }]`
  required=""
  error-message="An error message to display"
  disabled=""
  value="['value-1', 'value-1']"
  validator=""
  validate-on="submit"
>
</gcds-checkboxes>
```

Ou encore, si vous préférez utiliser vos propres variables définies dans un cadre JS comme React :

```javascript
<GcdsCheckboxes
  name="checkboxOptions"
  legend="Group Label"
  hint="Optional hint text."
  options={checkboxOptions}
  required=""
  error-message="An error message to display"
  disabled=""
  value={selectedCheckboxes}
  validator=""
  validate-on="submit"
></GcdsCheckboxes>
```

### :rocket: Nouvelles fonctionnalités

- Retravailler le fieldset et les nouveaux composants gcds-radios et gcds-checkboxes ([#845](https://github.com/cds-snc/gcds-components/issues/845)) ([44339cc](https://github.com/cds-snc/gcds-components/commit/44339ccc9b05b3ea5a66ef599b1b7bff63974ea5))

### :bug: :wrench: Corrections de bogues

- aligner le balisage structurel pour les liens et la recherche avec GCWeb ([#859](https://github.com/cds-snc/gcds-components/issues/859)) ([183d77d](https://github.com/cds-snc/gcds-components/commit/183d77d4f3b91fad8a2c7115b234dc5709742beb))
- Étiquettes d’air SVG ([#850](https://github.com/cds-snc/gcds-components/issues/850)) ([936fb72](https://github.com/cds-snc/gcds-components/commit/936fb72caf3a6e4137f552ede13629ce6bd79c3b))
- mettre à jour les instructions d'installation pour supprimer le fichier obsolète ([e8bee81](https://github.com/cds-snc/gcds-components/commit/e8bee8145d9f08ad0c493e21f0e2b31065e5d78b))

### :no_entry: Retirer

- **gcds-radio-group + gcds-checkbox:** Supprimer les anciens composants du groupe radio et de la case à cocher ([#860](https://github.com/cds-snc/gcds-components/issues/860)) ([8e3025f](https://github.com/cds-snc/gcds-components/commit/8e3025f58744f25192195aae2fac04b567df7584))

## [0.33.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.32.0...gcds-components-v0.33.0)

Version publiée le : 2025-03-18

### :rocket: Nouvelles fonctionnalités

- **gcds-button :** Ajout du rôle bouton de démarrage ([\#775](https://github.com/cds-snc/gcds-components/issues/775)) ([1b519b4](https://github.com/cds-snc/gcds-components/commit/1b519b4d82158476192b7a28ce0a55e2e233dc9f))

### :art: Styles

- Mise à jour de l'espacement de l'en-tête et de la couleur + la largeur de la bordure ([\#776](https://github.com/cds-snc/gcds-components/issues/776)) ([bfc184e](https://github.com/cds-snc/gcds-components/commit/bfc184eea624aa39e5966285b433e6399286a030))

## [0.32.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.31.0...gcds-components-v0.32.0)

Version publiée le : 2025-02-19

### :bug: :wrench: Corrections de bogues

- Problèmes d’affichage et d’interaction ([\#748](https://github.com/cds-snc/gcds-components/issues/748)) ([0169b14](https://github.com/cds-snc/gcds-components/commit/0169b14bd17c1e65f1531b7df0df9e062776f30b)) avec les composants de navigation (`gcds-top-nav`, `gcds-nav-group`)
- Retrait de la dépendance gcds-fieldset du composant gcds-date-input ([\#746](https://github.com/cds-snc/gcds-components/issues/746)) ([3e103ee](https://github.com/cds-snc/gcds-components/commit/3e103eecccf045862865b3b20cc4390a9942bd28))

### :pencil: Documentation

- Nous avons mis à jour les descriptions de propriété de `card-title-tag` pour `gcds-card` et `notice-title-tag` pour `gcds-notice` afin de décrire plus clairement son fonctionnement ([\#745](https://github.com/cds-snc/gcds-components/issues/745)) ([96341ed](https://github.com/cds-snc/gcds-components/commit/96341ed5dc388991235eee49564625b7719d717f))

### :art: Styles

Des travaux ont été fait pour harmoniser nos styles avec ceux de Canada.ca :

- Mise à jour du dégagement intérieur pour `gcds-footer` ([\#755](https://github.com/cds-snc/gcds-components/issues/755)) ([890c216](https://github.com/cds-snc/gcds-components/commit/890c2160333ef5bba5f668ca7bf59f831c57a403))
- Mise à jour des styles pour `gcds-footer` ([\#754](https://github.com/cds-snc/gcds-components/issues/754)) ([1cf8a6f](https://github.com/cds-snc/gcds-components/commit/1cf8a6fefb0245f173d0f562db80945ff43508a4))
- Mise à jour de la taille de police pour `gcds-breadcrumb-item` ([\#742](https://github.com/cds-snc/gcds-components/issues/742)) ([adf4260](https://github.com/cds-snc/gcds-components/commit/adf4260b94e19b0ef939d32e90a7f374d5d3e7d0))
- Mise à jour de la taille de police pour `date-modified` ([\#751](https://github.com/cds-snc/gcds-components/issues/751)) ([a403b7d](https://github.com/cds-snc/gcds-components/commit/a403b7d95c69019a48828949d964249b93a1b61b))
- Mise à jour de la taille de police pour `gcds-lang-toggle` ([\#741](https://github.com/cds-snc/gcds-components/issues/741)) ([c7b7c21](https://github.com/cds-snc/gcds-components/commit/c7b7c211d62dec5d7d603fe894f50da4e5bf64fe))
- Mise à jour des styles pour `gcds-search` ([\#743](https://github.com/cds-snc/gcds-components/issues/743)) ([3697498](https://github.com/cds-snc/gcds-components/commit/369749807db05e0e0ac3235e1ac05c50568665a5))

## [0.31.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.30.0...gcds-components-v0.31.0)

Version publiée le : 2025-01-22

### :rocket: Nouvelles fonctionnalités

- ajout de la propriété d'écart de grille pour plus de flexibilité ([\#732](https://github.com/cds-snc/gcds-components/issues/732)) ([2af7915](https://github.com/cds-snc/gcds-components/commit/2af7915306f0a32f6af32a24336857ce300756d8))
- mise à jour des instructions d'installation pour correspondre au site de documentation ([\#718](https://github.com/cds-snc/gcds-components/issues/718)) ([e5c3bee](https://github.com/cds-snc/gcds-components/commit/e5c3bee5c724f85db9afe6970b3acee83e5c3d33))

### :bug: :wrench: Corrections de bogues

- **gcds-button :** Empêchement de l'événement gcdsClick si le bouton est désactivé ([\#724](https://github.com/cds-snc/gcds-components/issues/724)) ([1cd508a](https://github.com/cds-snc/gcds-components/commit/1cd508a87c95b38a1937f421580ab8d846112f9a))
- **gcds-link :** Propriété d'affichage pour permettre un comportement normal de retour à la ligne des liens ([\#731](https://github.com/cds-snc/gcds-components/issues/731)) ([b0f357c](https://github.com/cds-snc/gcds-components/commit/b0f357c61c7a951a92f24b1de1b4c2a61e92fc10))
- **gcds-notice :** Ajout des étiquettes accessibles pour identifier le type d'avis ([\#721](https://github.com/cds-snc/gcds-components/issues/721)) ([450d182](https://github.com/cds-snc/gcds-components/commit/450d18215ee15c33cdcd6991defc764f65e236e7))
- **gcds-pagination :** Ajout de tabindex="0" aux balises <a> pour le fonctionnement dans les navigateurs webkit ([\#723](https://github.com/cds-snc/gcds-components/issues/723)) ([7256590](https://github.com/cds-snc/gcds-components/commit/7256590d0f5517e87fb7e1d10439a7d3b9f7e579))
- **gcds-textarea :** Valeur correctement définie dans la zone de texte shadow-root ([\#730](https://github.com/cds-snc/gcds-components/issues/730)) ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
- Description de la propriété de taille de saisie ([\#728](https://github.com/cds-snc/gcds-components/issues/728)) ([f6fa41b](https://github.com/cds-snc/gcds-components/commit/f6fa41b64653160493cc8857e0fb1933234a5050))

### :arrows_counterclockwise: Refactorisation du code

- Retrait de l'empilement du chemin d’accès sur les appareils mobiles ([\#729](https://github.com/cds-snc/gcds-components/issues/729)) ([cf70cf6](https://github.com/cds-snc/gcds-components/commit/cf70cf6afea17bc7a3ba745fe4851b95306e280e))
- Mise à jour de l'espacement des composants + flèches de pagination ([\#726](https://github.com/cds-snc/gcds-components/issues/726)) ([a00e60d](https://github.com/cds-snc/gcds-components/commit/a00e60dcb389d4577af4c6f5e450718a35574391))

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.1...gcds-components-v0.30.0)

Version publiée le : 2024-12-17

### :rocket: Nouvelles fonctionnalités

- **angular :** Mise à jour des dépendances angular vers la v19 ([\#709](https://github.com/cds-snc/gcds-components/issues/709)) ([ab1c12b](https://github.com/cds-snc/gcds-components/commit/ab1c12b822e13040ac8da7e66c5e9ada9aea1180))

### :art: Styles

- Amélioration du design d'impression pour le composant détails ([\#711](https://github.com/cds-snc/gcds-components/issues/711)) ([e68a3bf](https://github.com/cds-snc/gcds-components/commit/e68a3bf78a4a50fe8836cec64ca30557d5298871))

### :arrows_counterclockwise: Refactorisation du code

- Ajustement de l'espacement des éléments de formulaire ([\#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.0...gcds-components-v0.29.1)

Version publiée le : 2024-12-11

### :bug: :wrench: Corrections de bogues

- affichage de l’élément flèche du chemin d’accès ([\#706](https://github.com/cds-snc/gcds-components/issues/706)) ([f455e4d](https://github.com/cds-snc/gcds-components/commit/f455e4dd38263cb9bea787f2d2c207ddf0df95b3))

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.28.0...gcds-components-v0.29.0)

Version publiée le : 2024-12-11

### :rocket: Nouvelles fonctionnalités

- Nouveau composant gcds-notice ([\#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))

### :arrows_counterclockwise: Refactorisation du code

- Ajustement de la marge des chemins d’accès ([\#701](https://github.com/cds-snc/gcds-components/issues/701)) ([9ea1447](https://github.com/cds-snc/gcds-components/commit/9ea1447f1f78eb60901bba4d38765dbc25df264c))

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0)

Version publiée le : 2024-12-05

### :rotating_light: Changements non rétrocompatibles

- mise à jour des composants avec de nouvelles typographies + nouvelles unités de style d'espacement ([#695 en anglais](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

Nous avons apporté de petits ajustements à toutes les tailles de typographie et d'espacement dans le système de design. Les composants du système de design GC ressemblent maintenant davantage à leurs homologues sur Canada.ca.

Ces mises à jour ont été introduites avec la [dernière version de nos unités de style de conception.](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**Si vous utilisez ce paquetage,**_
mettez à jour votre numéro de version vers cette version de publication pour recevoir les modifications des tailles de police, des hauteurs de ligne et des valeurs d'espacement.

### Changement d’espacement

Les variables valides utilisées pour les propriétés dans les composants suivants ont été mises à jour. Bien que certaines options restent inchangées, les valeurs sous-jacentes qu'elles contiennent (en pixels) ont été modifiées. Vérifiez la section d'espacement de notre publication d'unité de style pour les valeurs de pixel mises à jour.

Exemple: Si vous utilisiez auparavant 400 pour la propriété de marge sur gcds-container, elle sera mise à jour à 32px. Si vous souhaitez conserver sa taille précédente de 40px, vous devez modifier votre code pour utiliser 450 à la place. Voici un [guide de cartographie visuelle](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) pour vous aider à identifier les valeurs que vous devez utiliser.

Mettez à jour votre code uniquement _si vous utilisez ces propriétés_, sinon les nouvelles valeurs par défaut seront appliquées automatiquement.

- [**gcds-container**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-container/readme.md)
  - `margin`
  - `padding`
- [**gcds-heading**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-heading/readme.md)
  - `margin-top`
  - `margin-bottom`
- [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - `margin-left`
  - `margin-right`
- [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - `margin-top`
  - `margin-bottom`

### Changements de typographie

Mettez à jour uniquement si vous utilisez la valeur de légende pour la propriété de taille dans les composants suivants.

- [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - Changer `caption` à `text-small`
- [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - Changer `caption` à `text-small`

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0)

Version publiée le : 2024-11-21

### :rocket: Nouvelle fonctionnalité

- **gcds-file-uploader:** Ajouter des propriétés d’extension pour les fichiers et faciliter l'accès aux fichiers téléversés ([#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))

### :bug: :wrench: Corrections de bogues

- Autoriser le contournement de la soumission de formulaire bloquant avec l'attribut validate-on ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
- Propriété du message d'erreur bloquant la soumission du formulaire. ([#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
- **gcds-fieldset:** Ajoutez du CSS pour permettre aux composants de formulaire de maintenir une mise en page réactive ([#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))

### :arrows_counterclockwise: Refactorisation de code

- ajuster les tailles de police pour le composant détails et le résumé + remplissage du panneau ([#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
- améliorer la validation du gcds-date-modified ([#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
- supprimer la couleur de focus pour l'étiquette, l'indice et la légende ([#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3)

Version publiée le : 2024-10-10

### :bug: :wrench: Corrections de bogues

- **gcds-error-summary:** focaliser l'élément gcds de la liste des liens d'erreur manuels ([#666](https://github.com/cds-snc/gcds-components/issues/666)) ([290e271](https://github.com/cds-snc/gcds-components/commit/290e2712868a0ab691e4a3be66f5615f6a8e2e7f))
- **gcds-select:** Mise à jour des options disponibles lorsqu'elles sont modifiées pour le composant sélection. ([#655](https://github.com/cds-snc/gcds-components/issues/655)) ([e7a16cb](https://github.com/cds-snc/gcds-components/commit/e7a16cb6b6d4b5e54887431b2eb2931bfaf1380a))

### :arrows_counterclockwise: Refactorisation de code

- **gcds-signature:** Texte de remplacement de la signature pour permettre le bilinguisme ([#660](https://github.com/cds-snc/gcds-components/issues/660)) ([146e8b2](https://github.com/cds-snc/gcds-components/commit/146e8b29fbd216d655c93266fed0185b540b1712))

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2)

Version publiée le : 2024-09-25

### :bug: :wrench: Corrections de bogues

- Corriger les fautes de frappe dans les unités de style ([#646](https://github.com/cds-snc/gcds-components/issues/646)) ([4c8d850](https://github.com/cds-snc/gcds-components/commit/4c8d850569feafc538aa0e9593ba96cfdf9b97c2))
- **gcds-sr-only:** Alignement avec la technique WCAG C7 ([#642](https://github.com/cds-snc/gcds-components/issues/642)) ([3cbe8bc](https://github.com/cds-snc/gcds-components/commit/3cbe8bc08d021849fa16269800fb08e12d4db037))
- Mise à jour des unités de style pour corriger le rouge du PFIM (Programme fédéral de l’image de marque) et corriger la taille de la police pour la légende du gcds-date-input ([#650](https://github.com/cds-snc/gcds-components/issues/650)) ([3c602da](https://github.com/cds-snc/gcds-components/commit/3c602dad949fcf16781cdef16be04c6870c94876))

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1)

Version publiée le : 2024-09-16

### :bug: :wrench: Corrections de bogues

- ajouter la taille de police pour la version mobile du composant recherche ([#640](https://github.com/cds-snc/gcds-components/issues/640)) ([2f8efa3](https://github.com/cds-snc/gcds-components/commit/2f8efa337a49411da258e4b2c9dea64a50021cbf))

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0)

Version publiée le : 2024-09-12

### :rocket: Nouvelle fonctionnalité

- Ajouter la valeur de l'attribut pour le bouton gcds-button ([#635](https://github.com/cds-snc/gcds-components/issues/635)) ([085d964](https://github.com/cds-snc/gcds-components/commit/085d96416e75e807f51a0d4e18b45e6114ac497a))

### :bug: :wrench: Corrections de bogues

- divers petits correctifs de bogues de conception ([#634](https://github.com/cds-snc/gcds-components/issues/634)) ([8eefbe4](https://github.com/cds-snc/gcds-components/commit/8eefbe4def6d385f8130df4ddb4a2065ae4f6c57))

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
  <slot name="”footer”"></slot>
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
<gcds-stepper current-step="" total-steps=""></gcds-stepper>
```

##### Nouvelle implémentation

```html
<gcds-stepper current-step="" total-steps="" tag="">
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

- https://github.com/cds-snc/gcds-components/pull/144 - [d88d5f2](https://github.com/cds-snc/gcds-components/commit/d88d5f21e82dfb55b14aba6c0a98da03c17833e1) - Nouveau composant `gcds-error-summary` permettant la validation de formulaires avant la soumission
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) - Le dépôt `@cdssnc/gcds-components-angular` a été mis à jour vers Angular v15. Le package ne fonctionnera plus avec Angular v14.

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) - En-tête manquant « À propos de ce site » ajouté au composant gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) - États et styles des composants `gcds-lang-toggle` et `gcds-button` mis à jour afin d’être conformes à la bibliothèque Figma
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) - Problème d’affichage résolu. Le chevron de trop qui s’affichait lorsqu’on utilisait l’attribut hide-canada-link dans le composant gcds-breadcrumbs a été supprimé.
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) - Composant gcds-fieldset modifié pour ne plus utiliser shadowDom, conformément aux autres composants de formulaire
