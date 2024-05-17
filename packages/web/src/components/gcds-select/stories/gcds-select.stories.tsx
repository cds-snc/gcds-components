import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Select',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    selectId: {
      name: 'select-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    name: {
      name: 'name',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
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
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
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
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    ...validatorProps,
    ...langProp,

    // Events
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-select
  select-id="${args.selectId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}
  ${args.required ? `required` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
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

<!-- React code -->
<GcdsSelect
  selectId="${args.selectId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}
  ${args.required ? `required` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
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
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
<gcds-select
  select-id="${args.selectId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}
  ${args.required ? `required` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
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
`;

// ------ Select default ------

export const Default = Template.bind({});
Default.args = {
  selectId: 'select-default',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  value: '',
  defaultValue: 'Select option.',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: 'blur',
};

// ------ Select states ------

export const Disabled = Template.bind({});
Disabled.args = {
  selectId: 'select-disabled',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  defaultValue: 'Select option.',
  disabled: true,
  lang: 'en',
  validateOn: 'blur',
};

export const Error = Template.bind({});
Error.args = {
  selectId: 'select-error',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  defaultValue: 'Select option.',
  required: true,
  errorMessage: 'Error message or validation message.',
  lang: 'en',
  validateOn: 'blur',
};

export const Required = Template.bind({});
Required.args = {
  selectId: 'select-required',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  defaultValue: 'Select option.',
  required: true,
  lang: 'en',
  validateOn: 'blur',
};

// ------ Select without default value ------

export const WithoutDefaultValue = Template.bind({});
WithoutDefaultValue.args = {
  selectId: 'select-default-value',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  lang: 'en',
  validateOn: 'blur',
};

// ------ Select events & properties ------

export const Props = Template.bind({});
Props.args = {
  selectId: 'select-props',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  value: '',
  defaultValue: 'Select option.',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: 'blur',
};

// ------ Select playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  selectId: 'select-playground',
  label: 'Label',
  name: 'select',
  hint: 'Hint / Example message.',
  value: '',
  defaultValue: 'Select option.',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: 'blur',
};
