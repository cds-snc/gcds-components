import {
  langProp,
  eventProp,
  validatorProps,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Radios',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['RadioChange', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
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
    options: {
      control: 'text',
      table: {
        type: {
          summary: `
        {
          id: string;
          label: string;
          value: string;
          hint?: string;
          checked?: boolean;
          required?: boolean;
          disabled?: boolean;
        }
        string | object[]`,
        },
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    ...langProp,
    ...validatorProps,

    // Events
    gcdsChange: {
      action: 'RadioChange',
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
<gcds-radios
  name="${args.name}"
  legend="${args.legend}"
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-radios>

<!-- React code -->
<GcdsRadios
  name="${args.name}"
  legend="${args.legend}"
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsRadios>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-radios
  name="${args.name}"
  legend="${args.legend}"
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-radios>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  name: 'radioDefault',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const Hint = Template.bind({});
Hint.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}
  ]`,
  hint: 'Hint text',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const Required = Template.bind({});
Required.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: true,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: true,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const CheckedProp = Template.bind({});
CheckedProp.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "checked": true}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const CheckedValue = Template.bind({});
CheckedValue.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: 'radio1',
  validateOn: 'blur',
  lang: 'en',
};

export const Error = Template.bind({});
Error.args = {
  name: 'radioDefault',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: 'Error message',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  name: 'radio',
  legend: 'Legend',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};
