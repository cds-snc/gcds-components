import { html } from 'lit-html';

export default {
  title: 'Components/Button',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click']
    }
  },

  argTypes: {
    // Props
    buttonRole: {
      name: 'button-role',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'skip-to-content'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      },
    },
    buttonStyle: {
      name: 'button-style',
      control: { type: 'select' },
      options: ['solid', 'text-only'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      }
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    size: {
      control: { type: 'select' },
      options: ['regular', 'small'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' }
      },
    },
    type: {
      control: { type: 'select' },
      options: ['submit', 'reset', 'button', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      },
      type: {
        required: true
      }
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
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
<gcds-button
  type="${args.type}"
  button-role="${args.buttonRole}"
  button-style="${args.buttonStyle}"
  size="${args.size}"
  disabled="${args.disabled}"
>
  ${args.default}
</gcds-button>

// React code
<GcdsButton
  type="${args.type}"
  buttonRole="${args.buttonRole}"
  buttonStyle="${args.buttonStyle}"
  size="${args.size}"
  disabled="${args.disabled}"
>
  ${args.default}
</GcdsButton>
`;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  buttonRole: 'primary',
  buttonStyle: 'solid',
  size: 'regular',
  disabled: false,
  default: 'Button text',
};