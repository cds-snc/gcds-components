import {
  langProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Date Input',

  argTypes: {
    // Props
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
    format: {
      control: { type: 'select' },
      options: ['full', 'compact'],
      table: {
        type: { summary: 'boolean' },
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
      description: 'Full: YYYY-MM-DD, compact: YYYY-MM',
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
    gcdsInput: {
      action: 'input',
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
<gcds-date-input
  legend="${args.legend}"
  name="${args.name}"
  format="${args.format}"
  ${args.value ? `value="${args.value}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-date-input>

<!-- React code -->
<GcdsDateInput
  legend="${args.legend}"
  name="${args.name}"
  format="${args.format}"
  ${args.value ? `value="${args.value}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsDateInput>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
<gcds-date-input
  legend="${args.legend}"
  name="${args.name}"
  format="${args.format}"
  ${args.value ? `value="${args.value}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-date-input>
`;

// ------ Date input default ------

export const Default = Template.bind({});
Default.args = {
  name: 'example-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Full English ------

export const FullEN = Template.bind({});
FullEN.args = {
  name: 'FullEN-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Full French ------

export const FullFR = Template.bind({});
FullFR.args = {
  name: 'FullFR-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'fr',
  validateOn: '',
};

// ------ Date input Format Compact English ------

export const CompactEN = Template.bind({});
CompactEN.args = {
  name: 'CompactEN-default',
  legend: 'Date input',
  format: 'compact',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Compact French ------

export const CompactFR = Template.bind({});
CompactFR.args = {
  name: 'CompactFR-default',
  legend: 'Date input',
  format: 'compact',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'fr',
  validateOn: '',
};

// ------ Date input Format Required ------

export const Required = Template.bind({});
Required.args = {
  name: 'required-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: true,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Hint ------

export const DefaultState = Template.bind({});
DefaultState.args = {
  name: 'hint-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: 'Hint / example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Error ------

export const Error = Template.bind({});
Error.args = {
  name: 'error-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: 'Enter the date.',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Disabled ------

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: true,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Props ------

export const Props = Template.bind({});
Props.args = {
  name: 'props-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

// ------ Date input Format Playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  name: 'playground-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
};

