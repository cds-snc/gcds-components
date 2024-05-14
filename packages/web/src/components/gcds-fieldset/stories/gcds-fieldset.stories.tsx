import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Fieldset',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['GroupError', 'GroupErrorClear'],
    },
  },

  argTypes: {
    // Props
    fieldsetId: {
      name: 'fieldset-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    legend: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    disabled: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    required: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ...validatorProps,
    ...langProp,

    // Events
    gcdsGroupError: {
      action: 'GroupError',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsGroupErrorClear: {
      action: 'GroupErrorClear',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-input
    input-id="${args.fieldsetId}-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></gcds-input>
  <gcds-select
    select-id="${args.fieldsetId}-select"
    label="Select label"
    hint="Hint / Example message."
    default-value="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </gcds-select>
</gcds-fieldset>

<!-- React code -->
<GcdsFieldset
  fieldsetId="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsInput
    inputId="${args.fieldsetId}-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></GcdsInput>
  <GcdsSelect
    selectId="${args.fieldsetId}-select"
    label="Select label"
    hint="Hint / Example message."
    defaultValue="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </GcdsSelect>
</GcdsFieldset>
`.replace(/\s\snull\n/g, '');

const TemplateRequired = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-checkbox
    checkbox-id="${args.fieldsetId}-check1"
    label="Checkbox 1"
    name="check"
    value="1"
  >
  </gcds-checkbox>
  <gcds-checkbox
    checkbox-id="${args.fieldsetId}-check2"
    label="Checkbox 2"
    name="check"
    value="2"
  >
  </gcds-checkbox>
</gcds-fieldset>

<!-- React code -->
<GcdsFieldset
  fieldsetId="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsCheckbox
    checkboxId="${args.fieldsetId}-check1"
    label="Checkbox 1"
    name="check"
    value="1"
  >
  </GcdsCheckbox>
  <GcdsCheckbox
    checkboxId="${args.fieldsetId}-check2"
    label="Checkbox 2"
    name="check"
    value=""2
  >
  </GcdsCheckbox>
</GcdsFieldset>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-fieldset
  fieldset-id="${args.fieldsetId}"
  legend="${args.legend}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-input
    input-id="${args.fieldsetId}-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></gcds-input>
  <gcds-select
    select-id="${args.fieldsetId}-select"
    label="Select label"
    hint="Hint / Example message."
    default-value="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </gcds-select>
</gcds-fieldset>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  fieldsetId: 'field-default',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Required = TemplateRequired.bind({});
Required.args = {
  fieldsetId: 'field-required',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: true,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Disabled = Template.bind({});
Disabled.args = {
  fieldsetId: 'field-disabled',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: true,
  validateOn: 'blur',
  lang: 'en',
};

export const Error = Template.bind({});
Error.args = {
  fieldsetId: 'field-error',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: 'This is an error message',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  fieldsetId: 'field-default',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  fieldsetId: 'field-playground',
  legend: 'Legend',
  hint: 'Hint / Example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  validateOn: 'blur',
  lang: 'en',
};
