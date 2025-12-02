import {
  langProp,
  validatorProps,
  eventProp,
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
    form: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    max: {
      control: 'text',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
    },
    min: {
      control: 'text',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
    },

    ...validatorProps,
    ...langProp,

    // Events
    gcdsChange: {
      action: 'change',
      ...eventProp,
    },
    gcdsInput: {
      action: 'input',
      ...eventProp,
    },
    gcdsFocus: {
      action: 'focus',
      ...eventProp,
    },
    gcdsBlur: {
      action: 'blur',
      ...eventProp,
    },
    gcdsError: {
      action: 'invalid',
      ...eventProp,
    },
    gcdsValid: {
      action: 'valid',
      ...eventProp,
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
  ${args.form ? `form="${args.form}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.min ? `min="${args.min}"` : null}
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
  ${args.form ? `form="${args.form}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.min ? `min="${args.min}"` : null}
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
  ${args.form ? `form="${args.form}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.min ? `min="${args.min}"` : null}
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
// ------ Date input Format Form ------

export const Form = Template.bind({});
Form.args = {
  name: 'form-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
  form: 'form-id'
};

// ------ Date input Format Min - full ------

export const FullMin = Template.bind({});
FullMin.args = {
  name: 'min-full-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: 'The date must be after 2000-01-01',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
  min: '2000-01-01'
};
// ------ Date input Format Min - compact ------

export const CompactMin = Template.bind({});
CompactMin.args = {
  name: 'min-compact-default',
  legend: 'Date input',
  format: 'compact',
  value: '',
  hint: 'The date must be after 2000-01',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
  min: '2000-01'
};

// ------ Date input Format Min - full ------

export const FullMax = Template.bind({});
FullMax.args = {
  name: 'max-full-default',
  legend: 'Date input',
  format: 'full',
  value: '',
  hint: 'The date must be before 2000-01-01',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
  max: '2000-01-01'
};
// ------ Date input Format Min - compact ------

export const CompactMax = Template.bind({});
CompactMax.args = {
  name: 'max-compact-default',
  legend: 'Date input',
  format: 'compact',
  value: '',
  hint: 'The date must be before 2000-01',
  errorMessage: '',
  required: false,
  disabled: false,
  lang: 'en',
  validateOn: '',
  max: '2000-01'
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
