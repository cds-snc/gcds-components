import { html } from 'lit-html';

export default {
  title: 'Components/Checkbox',

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
    checkboxId: {
      name: 'checkbox-id',
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
    checked: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    lang: {
      control: 'radio',
      options: ['en', 'fr'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' }
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
<gcds-checkbox
  checkbox-id="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</gcds-checkbox>

// React code
<GcdsCheckbox
  checkboxId="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</GcdsCheckbox>
`;

export const Default = Template.bind({});
Default.args = {
  checkboxId: 'checkbox',
  label: 'Checkbox label',
  name: 'checkbox',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};