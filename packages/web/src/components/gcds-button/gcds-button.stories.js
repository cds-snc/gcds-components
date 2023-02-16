export default {
  title: 'Components/Button',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click', 'change', 'focus', 'blur']
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
    buttonId: {
      name: 'button-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
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

    // Link props
    download: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    href: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    rel: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    target: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
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
    gcdsClick: {
      action: 'click',
      table: {
        category: 'Events | Événements',
      }
    },
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

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-button
  type="${args.type}"
  button-role="${args.buttonRole}"
  button-style="${args.buttonStyle}"
  button-id="${args.buttonId}"
  size="${args.size}"
  disabled="${args.disabled}"
  name="${args.name}"
  href="${args.href}"
  rel="${args.rel}"
  target="${args.target}"
  download="${args.download}"
>
  ${args.default}
</gcds-button>

// React code
<GcdsButton
  type="${args.type}"
  buttonRole="${args.buttonRole}"
  buttonStyle="${args.buttonStyle}"
  buttonId="${args.buttonId}"
  size="${args.size}"
  disabled="${args.disabled}"
  name="${args.name}"
  href="${args.href}"
  rel="${args.rel}"
  target="${args.target}"
  download="${args.download}"
>
  ${args.default}
</GcdsButton>
`;

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  buttonRole: 'primary',
  buttonStyle: 'solid',
  buttonId: '',
  size: 'regular',
  disabled: false,
  name: '',
  href: '',
  rel: '',
  target: '',
  download: '',
  default: 'Button label'
};