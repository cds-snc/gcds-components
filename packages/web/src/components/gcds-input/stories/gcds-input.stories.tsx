import {
  langProp,
  validatorProps,
  eventProp,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Input',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    hideLabel: {
      name: 'hide-label',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    inputId: {
      name: 'input-id',
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
    size: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'search', 'text', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    autocomplete: {
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
    autofocus: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
    maxlength: {
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
    minlength: {
      control: 'text',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
    },
    pattern: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    placeholder: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    readonly: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    step: {
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
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  name="${args.name}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.form ? `form="${args.value}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}
  ${args.min ? `min="${args.min}"` : null}
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.pattern ? `pattern="${args.pattern}"` : null}
  ${args.placeholder ? `placeholder="${args.placeholder}"` : null}
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-input>

<!-- React code -->
<GcdsInput
  inputId="${args.inputId}"
  label="${args.label}"
  name="${args.name}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.form ? `form="${args.value}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}
  ${args.min ? `min="${args.min}"` : null}
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.pattern ? `pattern="${args.pattern}"` : null}
  ${args.placeholder ? `placeholder="${args.placeholder}"` : null}
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? ` hideLabel` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsInput>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  name="${args.name}"
  ${args.type != 'text' ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.form ? `form="${args.value}"` : null}
  ${args.max ? `max="${args.max}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}
  ${args.min ? `min="${args.min}"` : null}
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.pattern ? `pattern="${args.pattern}"` : null}
  ${args.placeholder ? `placeholder="${args.placeholder}"` : null}
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-input>
`;

// ------ Input default ------

export const Default = Template.bind({});
Default.args = {
  inputId: 'input-default',
  name: 'example-default',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  lang: 'en',
  autocomplete: '',
  hideLabel: false,
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

// ------ Input states ------

export const Disabled = Template.bind({});
Disabled.args = {
  inputId: 'input-disabled',
  name: 'example-disabled',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: true,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Error = Template.bind({});
Error.args = {
  inputId: 'input-error',
  name: 'example-error',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  required: true,
  errorMessage: 'Error message or validation message.',
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Required = Template.bind({});
Required.args = {
  inputId: 'input-required',
  name: 'example-required',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  required: true,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  readonly: false,
};

// ------ Input types ------

export const Email = Template.bind({});
Email.args = {
  inputId: 'input-email',
  name: 'example-email',
  type: 'email',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Number = Template.bind({});
Number.args = {
  inputId: 'input-number',
  name: 'example-number',
  type: 'number',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  readonly: false,
};

export const Password = Template.bind({});
Password.args = {
  inputId: 'input-password',
  name: 'example-password',
  type: 'password',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Search = Template.bind({});
Search.args = {
  inputId: 'input-search',
  name: 'example-search',
  type: 'search',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Text = Template.bind({});
Text.args = {
  inputId: 'input-text',
  name: 'example-text',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

export const Url = Template.bind({});
Url.args = {
  inputId: 'input-url',
  name: 'example-url',
  type: 'url',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

// ------ Input events & props ------

export const Props = Template.bind({});
Props.args = {
  inputId: 'input-default',
  name: 'example-default',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  errorMessage: '',
  required: false,
  disabled: false,
  size: null,
  value: '',
  lang: 'en',
  autocomplete: '',
  hideLabel: false,
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};

// ------ Input playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  inputId: 'input-playground',
  name: 'input',
  type: 'text',
  label: 'Input label',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  autocomplete: '',
  hideLabel: false,
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  placeholder: '',
  step: '',
  readonly: false,
};
