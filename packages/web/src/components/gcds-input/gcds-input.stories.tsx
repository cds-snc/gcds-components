import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Input',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    hideLabel: {
      name: 'hide-label',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    inputId: {
      name: 'input-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    size: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      },
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'search', 'text', 'url'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    },
    autocomplete: {
      control: { type: 'select' },
      options: ['on', 'off'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    ...formProps,
    ...langProp,

    // Events
    gcdsChange: {
      action: 'change',
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
// Web Component (Angular, Vue)
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  ${args.type != "text" ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete != "off" ? `autocomplete="${args.autocomplete}"` : null}
  ${args.hideLabel ? `hide-label` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-input>

// React code
<GcdsInput
  inputId="${args.inputId}"
  label="${args.label}"
  ${args.type != "text" ? `type="${args.type}"` : null}
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.size ? `size="${args.size}"` : null}
  ${args.autocomplete != "off" ? `autocomplete="${args.autocomplete}"` : null}
  ${args.hideLabel ? ` hideLabel` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsInput>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  inputId: 'input',
  label: 'Input label',
  type: 'text',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  size: '',
  value: '',
  autocomplete: 'off',
  hideLabel: false,
  lang: 'en',
};