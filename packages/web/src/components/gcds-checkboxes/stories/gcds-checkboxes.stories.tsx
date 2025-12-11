import {
  langProp,
  validatorProps,
  eventProp,
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Checkboxes',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['change', 'focus', 'blur'],
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
    options: {
      control: 'text',
      table: {
        type: {
          summary: `
        {
          id: string;
          label: string;
          value?: string;
          hint?: string;
          checked?: boolean;
        }
        string | object[]`,
        },
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
        type: { summary: 'string | Array<string>' },
        defaultValue: { summary: '[]' },
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
    hideLabel: {
      name: 'hide-label',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    hideLegend: {
      name: 'hide-legend',
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
    gcdsInput: {
      action: 'input',
      ...eventProp,
    },
    gcdsChange: {
      action: 'change',
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
<gcds-checkboxes
  name="${args.name}"
  ${args.legend ? `legend="${args.legend}"` : null}
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value='${args.value}'` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.form ? `form="${args.form}"` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.hideLegend ? `hide-legend` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-checkboxes>

<!-- React code -->
<GcdsCheckboxes
  name="${args.name}"
  legend="${args.legend}"
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value='${args.value}'` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.form ? `form="${args.form}"` : null}
  ${args.hideLabel ? `hideLabel` : null}
  ${args.hideLegend ? `hideLegend` : null}
  ${args.validateOn != 'blur' ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsCheckboxes>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-checkboxes
  name="${args.name}"
  legend="${args.legend}"
  options='${args.options}'
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value='${args.value}'` : null}
  ${args.autofocus ? `autofocus` : null}
  ${args.form ? `form="${args.form}"` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.hideLegend ? `hide-legend` : null}
  ${args.validateOn != 'blur' ? `validate-on="${args.validateOn}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-checkboxes>
`.replace(/\s\snull\n/g, '');

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const DefaultSingle = Template.bind({});
DefaultSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const HintGroup = Template.bind({});
HintGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const HintSingle = Template.bind({});
HintSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: 'Description or example to make the option clearer.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const RequiredGroup = Template.bind({});
RequiredGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: true,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const RequiredSingle = Template.bind({});
RequiredSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: true,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const DisabledGroup = Template.bind({});
DisabledGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: true,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const DisabledSingle = Template.bind({});
DisabledSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: true,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const ErrorGroup = Template.bind({});
ErrorGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: 'Choose an option to continue.',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const ErrorSingle = Template.bind({});
ErrorSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: 'You must check the box to continue.',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
};

export const ValueGroup = Template.bind({});
ValueGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '["checkbox2"]',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const ValueSingle = Template.bind({});
ValueSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '["checkbox1"]',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
};

export const FormGroup = Template.bind({});
FormGroup.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: 'form-id',
};

export const FormSingle = Template.bind({});
FormSingle.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: 'form-id',
};

export const HiddenLegend = Template.bind({});
HiddenLegend.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  hideLegend: true,
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  legend: '',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  hideLabel: true,
};

export const Props = Template.bind({});
Props.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
  hideLabel: false,
  hideLegend: false,
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  legend: 'Legend',
  name: 'checkbox',
  options: `[
    { "label": "Label for checkbox 1", "id": "checkbox1", "value": "checkbox1"},
    { "label": "Label for checkbox 2", "id": "checkbox2", "value": "checkbox2"}
  ]`,
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  validateOn: 'blur',
  lang: 'en',
  autofocus: false,
  form: '',
  hideLabel: false,
  hideLegend: false,
};
