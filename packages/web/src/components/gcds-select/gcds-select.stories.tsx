import { html } from 'lit-html';

export default {
  title: 'Components/Select',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
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
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    selectId: {
      name: 'select-id',
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
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },

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

const Template = (args) => html`
// Web Component (Angular, Vue)
<gcds-select
  select-id="${args.selectId}"
  label="${args.label}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  default-value="${args.defaultValue}"
>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</gcds-select>

// React code
<GcdsSelect
  selectId="${args.selectId}"
  label="${args.label}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</GcdsSelect>
`;

export const Default = Template.bind({});
Default.args = {
  selectId: '',
  label: 'Select label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  defaultValue: 'Choose an option.',
};