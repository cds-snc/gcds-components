import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Radio',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['RadioChange', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    radioId: {
      name: 'radio-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    checked: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    required: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    ...langProp,

    // Events
    gcdsRadioChange: {
      action: 'RadioChnage',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-radio
  radio-id="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-radio>

<!-- React code -->
<GcdsRadio
  radioId="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsRadio>
`).replace(/\s\snull\n/g, '');

const TemplatePlayground = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-radio
  radio-id="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-radio>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  radioId: 'radio',
  label: 'Label',
  name: 'radioDefault',
  hint: 'Description or example to make the option clearer.',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};

export const Disabled = Template.bind({});
Disabled.args = {
  radioId: 'radioCDisabled',
  label: 'Label',
  name: 'radio',
  hint: 'Description or example to make the option clearer.',
  required: false,
  disabled: true,
  value: '',
  checked: false,
  lang: 'en'
};

export const Checked = Template.bind({});
Checked.args = {
  radioId: 'radioChecked',
  label: 'Label',
  name: 'radio',
  hint: 'Description or example to make the option clearer.',
  required: false,
  disabled: false,
  value: '',
  checked: true,
  lang: 'en'
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  radioId: 'radio',
  label: 'Label',
  name: 'radio',
  hint: 'Description or example to make the option clearer.',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};