import { html } from 'lit-html';

export default {
  title: 'Components/Input',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click']
    }
  },

  argTypes: {
    // Props
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    hideLabel: {
      name: 'hide-label',
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
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    autocomplete: {
      control: { type: 'select' },
      options: ['on', 'off'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'off' }
      }
    },

    // Events
    onClick: {
      action: 'onClick',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => html`
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
>
</gcds-input>

// React code
<GcdsInput
  inputId="${args.inputId}"
  label="${args.label}"
  type="${args.type}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  size="${args.size}"
  value="${args.value}"
  autocomplete="${args.autocomplete}"
  hideLabel="${args.hideLabel}"
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
};