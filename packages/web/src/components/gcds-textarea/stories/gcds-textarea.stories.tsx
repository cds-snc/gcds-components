import {
  langProp,
  validatorProps,
  eventProp,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Textarea',

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
    textareaId: {
      name: 'textarea-id',
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
    rows: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
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
    maxlength: {
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
    autofocus: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    hideLimit: {
      name: 'hide-limit',
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
<gcds-textarea
  textarea-id="${args.textareaId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.rows ? `rows="${args.rows}"` : null}
  ${args.hideLimit ? `hide-limit` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-textarea>

<!-- React code -->
<GcdsTextarea
  textareaId="${args.textareaId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}maxlength
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.rows ? `rows="${args.rows}"` : null}
  ${args.hideLimit ? `hideLimit` : null}
  ${args.hideLabel ? `hideLabel` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsTextarea>
`.replace(/\s\snull\n/g, '');

// ------ Textarea default ------

const TemplatePlayground = args => `
<gcds-textarea
  textarea-id="${args.textareaId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.maxlength ? `maxlength="${args.maxlength}"` : null}
  ${args.minlength ? `minlength="${args.minlength}"` : null}
  ${args.rows ? `rows="${args.rows}"` : null}
  ${args.hideLimit ? `hide-limit` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-textarea>
`;

// ------ Textarea default ------

export const Default = Template.bind({});
Default.args = {
  textareaId: 'textarea-default',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  validateOn: 'blur',
  lang: 'en',
};

// ------ Textarea states ------

export const Disabled = Template.bind({});
Disabled.args = {
  textareaId: 'textarea-disabled',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  disabled: true,
  validateOn: 'blur',
  lang: 'en',
};

export const Error = Template.bind({});
Error.args = {
  textareaId: 'textarea-error',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  errorMessage: 'Error message or validation message.',
  required: true,
  validateOn: 'blur',
  lang: 'en',
};

export const Required = Template.bind({});
Required.args = {
  textareaId: 'textarea-required',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  required: true,
  validateOn: 'blur',
  lang: 'en',
};

// ------ Textarea maxlength ------

export const Maxlength = Template.bind({});
Maxlength.args = {
  textareaId: 'textarea-minlength',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  maxlength: 20,
  required: true,
  validateOn: 'blur',
  lang: 'en',
};
// ------ Textarea hide limit ------

export const HideLimit = Template.bind({});
HideLimit.args = {
  textareaId: 'textarea-minlength',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  maxlength: 20,
  required: true,
  validateOn: 'blur',
  hideLimit: true,
  lang: 'en',
};

// ------ Textarea minlength ------

export const Minlength = Template.bind({});
Minlength.args = {
  textareaId: 'textarea-minlength',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  minlength: 5,
  required: true,
  validateOn: 'blur',
  lang: 'en',
};

// ------ Textarea rows ------

export const Rows = Template.bind({});
Rows.args = {
  textareaId: 'textarea-rows',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  rows: 10,
  validateOn: 'blur',
  lang: 'en',
};

// ------ Textarea events & props ------

export const Props = Template.bind({});
Props.args = {
  textareaId: 'textarea-props',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  maxlength: '',
  minlength: '',
  errorMessage: '',
  required: false,
  disabled: false,
  rows: '',
  value: '',
  hideLabel: false,
  hideLimit: false,
  autofocus: false,
  validateOn: 'blur',
  lang: 'en',
};

// ------ Textarea playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  textareaId: 'textarea-playground',
  label: 'Label',
  name: 'textarea-name',
  hint: 'Hint / Example message.',
  minlength: '',
  maxlength: '',
  errorMessage: '',
  required: false,
  disabled: false,
  rows: '',
  value: '',
  hideLabel: false,
  hideLimit: false,
  autofocus: false,
  validateOn: 'blur',
  lang: 'en',
};
