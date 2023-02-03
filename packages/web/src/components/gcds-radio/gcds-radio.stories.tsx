import { html } from 'lit-html';

export default {
  title: 'Components/Radio',

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
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
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
    onRadioChange: {
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
<gcds-radio
  radio-id="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</gcds-radio>

// React code
<GcdsRadio
  radioId="${args.radioId}"
  label="${args.label}"
  name="${args.name}"
  hint="${args.hint}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  checked="${args.checked}"
  lang="${args.lang}"
>
</GcdsRadio>
`;

export const Default = Template.bind({});
Default.args = {
  radioId: 'radio',
  label: 'Radio label',
  name: 'radio',
  hint: 'This is a hint.',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};