import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Checkbox',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    checkboxId: {
      name: 'checkbox-id',
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
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    checked: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
<gcds-checkbox
  checkbox-id="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-checkbox>

<!-- React code -->
<GcdsCheckbox
  checkboxId="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsCheckbox>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-checkbox
  checkbox-id="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-checkbox>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  checkboxId: 'checkbox-default',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Required = Template.bind({});
Required.args = {
  checkboxId: 'checkbox-required',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: true,
  disabled: false,
  value: '',
  checked: false,
  validateOn: 'other',
  lang: 'en',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checkboxId: 'checkbox-disabled',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: true,
  value: '',
  checked: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Error = Template.bind({});
Error.args = {
  checkboxId: 'checkbox-error',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: 'You must check the box to continue.',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Checked = Template.bind({});
Checked.args = {
  checkboxId: 'checkbox-checked',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: true,
  validateOn: 'other',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  checkboxId: 'checkbox-default',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  validateOn: 'blur',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  checkboxId: 'checkbox-playground',
  label: 'Label',
  name: 'checkbox',
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  validateOn: 'blur',
  lang: 'en',
};
