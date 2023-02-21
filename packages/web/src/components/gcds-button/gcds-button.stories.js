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

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-button
  ${args.type != "button" ? `type="${args.type}"`: null}
  ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null}
  ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}
  ${args.buttonId ? `button-id="${args.buttonId}"` : null}
  ${args.size != "regular" ? `size="${args.size}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.name ? `name="${args.name}"` : null}
  ${args.type == "link" && args.href ? `href="${args.href}"` : null}
  ${args.type == "link" && args.rel ? `rel="${args.rel}"` : null}
  ${args.type == "link" && args.target ? `target="${args.target}"` : null}
  ${args.type == "link" && args.download ? `download="${args.download}"` : null}
>
  ${args.default}
</gcds-button>

// React code
<GcdsButton
  ${args.type != "button" ? `type="${args.type}"` : null}
  ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null}
  ${args.buttonStyle != "solid" ? `buttonStyle="${args.buttonStyle}"` : null}
  ${args.buttonId ? `buttonId="${args.buttonId}"` : null}
  ${args.size != "regular" ? `size="${args.size}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.name ? `name="${args.name}"` : null}
  ${args.type == "link" && args.href ? `href="${args.href}"` : null}
  ${args.type == "link" && args.rel ? `rel="${args.rel}"` : null}
  ${args.type == "link" && args.target ? `target="${args.target}"` : null}
  ${args.type == "link" && args.download ? `download="${args.download}"` : null}
>
  ${args.default}
</GcdsButton>
`).replace(/\s\snull\n/g, '');

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