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
    onChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    },
    onFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      }
    },
    onBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-input
  input-id="${args.inputId}"
  label="${args.label}"
  type="${args.type}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  size="${args.size}"
  value="${args.value}"
  autocomplete="${args.autocomplete}"
  hide-label="${args.hideLabel}"
  lang="${args.lang}"
>
</gcds-input>

// React code
<GcdsInput
  inputId="${args.inputId}"
  label="${args.label}"
  type="${args.type}"
  hint="${args.hint}"
  errorMessage="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  size="${args.size}"
  value="${args.value}"
  autocomplete="${args.autocomplete}"
  hideLabel="${args.hideLabel}"
  lang="${args.lang}"
>
</GcdsInput>
`;

export const Default = Template.bind({});
Default.args = {
  inputId: '',
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