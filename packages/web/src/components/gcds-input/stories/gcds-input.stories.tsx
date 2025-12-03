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
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
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
    suggestions: {
      control: 'text',
      table: {
        type: {
          summary: `
        {
          label: string;
          value?: string;
        }
        string | object[]
        `,
        },
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
    gcdsSuggestionSelected: {
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
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.inputmode ? `inputmode="${args.inputmode}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.suggestions ? `suggestions='${args.suggestions}'` : null}
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
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.inputmode ? `inputmode="${args.inputmode}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? ` hideLabel` : null}
  ${args.suggestions ? `suggestions='${args.suggestions}'` : null}
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
  ${args.step ? `step="${args.step}"` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete ? `autocomplete="${args.autocomplete}"` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.readonly ? `readonly` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.suggestions ? `suggestions='${args.suggestions}'` : null}
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
  inputmode: '',
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
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Tel = Template.bind({});
Tel.args = {
  inputId: 'input-tel',
  name: 'example-tel',
  type: 'tel',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
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
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  inputId: 'input-autocomplete',
  name: 'example-autocomplete',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: 'given-name',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Autofocus = Template.bind({});
Autofocus.args = {
  inputId: 'input-autofocus',
  name: 'example-autofocus',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: true,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Form = Template.bind({});
Form.args = {
  inputId: 'input-form',
  name: 'example-form',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: 'form',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Max = Template.bind({});
Max.args = {
  inputId: 'input-max',
  name: 'example-max',
  type: 'number',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '100',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Min = Template.bind({});
Min.args = {
  inputId: 'input-min',
  name: 'example-min',
  type: 'number',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '50',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Maxlength = Template.bind({});
Maxlength.args = {
  inputId: 'input-maxlength',
  name: 'example-maxlength',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '7',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Minlength = Template.bind({});
Minlength.args = {
  inputId: 'input-minlength',
  name: 'example-minlength',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '5',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Pattern = Template.bind({});
Pattern.args = {
  inputId: 'input-pattern',
  name: 'example-pattern',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '[A-Z]+',
  step: '',
  suggestions: '',
  readonly: false,
};

export const Step = Template.bind({});
Step.args = {
  inputId: 'input-step',
  name: 'example-step',
  type: 'number',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '10',
  suggestions: '',
  readonly: false,
};

export const Inputmode = Template.bind({});
Inputmode.args = {
  inputId: 'input-inputmode',
  name: 'example-inputmode',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  inputmode: 'numeric',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  readonly: false,
};

export const Readonly = Template.bind({});
Readonly.args = {
  inputId: 'input-readonly',
  name: 'example-readonly',
  type: 'text',
  label: 'Label',
  hint: 'Hint / example message.',
  disabled: false,
  lang: 'en',
  value: 'Readonly',
  inputmode: '',
  autocomplete: '',
  validateOn: 'blur',
  autofocus: false,
  form: '',
  max: '',
  maxlength: '',
  min: '',
  minlength: '',
  pattern: '',
  step: '',
  suggestions: '',
  readonly: true,
};

export const Suggestions = Template.bind({});
Suggestions.args = {
  inputId: 'input-suggestions',
  name: 'example-suggestions',
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
  step: '',
  suggestions: `[
    { "label": "Suggestion A"},
    { "label": "Suggestion B"},
    { "label": "Suggestion C"}
  ]`,
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
  inputmode: '',
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
  step: '',
  suggestions: '',
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
  inputmode: '',
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
  step: '',
  suggestions: '',
  readonly: false,
};
