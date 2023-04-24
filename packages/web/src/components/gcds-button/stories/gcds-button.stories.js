export default {
  title: 'Components/Button',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click', 'change', 'focus', 'blur']
    },
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

const TemplateAll = (args) => (`
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

const TemplateOverview = () => (`
  // Web Component (Angular, Vue)
  <gcds-button>
    Primary label
  </gcds-button>
  <gcds-button button-role="secondary">
    Secondary label
  </gcds-button>
  <gcds-button button-role="danger">
    Danger label
  </gcds-button>
  <gcds-button button-role="skip-to-content">
    Skip-to-content label
  </gcds-button>
  <gcds-button button-style="text-only">
    Text-only label
  </gcds-button>

  // React code
  <GcdsButton>
    Primary label
  </GcdsButton>
  <GcdsButton buttonRole="secondary">
    Secondary label
  </GcdsButton>
  <GcdsButton buttonRole="danger">
    Danger label
  </GcdsButton>
  <GcdsButton buttonRole="skip-to-content">
    Skip-to-content label
  </GcdsButton>
  <GcdsButton buttonStyle="text-only">
    Text-only label
  </GcdsButton>
`).replace(/ null/g, '');

const TemplateBasic = (args) => (`
  // Web Component (Angular, Vue)
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </gcds-button>

  // React code
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </GcdsButton>
`).replace(/ null/g, '');

const TemplateState = (args) => (`
  // Web Component (Angular, Vue)
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </gcds-button>
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null} disabled>
    ${args.disabled}
  </gcds-button>

  // React code
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </GcdsButton>
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null} disabled>
    ${args.disabled}
  </GcdsButton>
`).replace(/ null/g, '');

const TemplateSize = (args) => (`
  // Web Component (Angular, Vue)
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </gcds-button>
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null} size="small">
    ${args.small}
  </gcds-button>

  // React code
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null}>
    ${args.default}
  </GcdsButton>
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != "solid" ? `button-style="${args.buttonStyle}"` : null} size="small">
    ${args.small}
  </GcdsButton>
`).replace(/ null/g, '');

// ------ Overview button with all props ------

export const Playground = TemplateAll.bind({});
Playground.args = {
  type: 'button',
  buttonRole: 'primary',
  buttonStyle: 'solid',
  buttonId: '',
  size: 'regular',
  disabled: false,
  name: '',
  // href: '',
  // rel: '',
  // target: '',
  // download: '',
  default: 'Button label',
};

// ------ Overview of all buttons ------

export const ButtonsOverview = TemplateOverview.bind({});

// ------ Primary button ------

export const Primary = TemplateBasic.bind({});
Primary.args = {
  buttonRole: 'primary',
  buttonStyle: 'solid',
  default: 'Primary default',
};

export const PrimaryState = TemplateState.bind({});
PrimaryState.args = {
  buttonRole: 'primary',
  buttonStyle: 'solid',
  default: 'Primary default',
  disabled: 'Primary disabled',
};

export const PrimarySize = TemplateSize.bind({});
PrimarySize.args = {
  buttonRole: 'primary',
  buttonStyle: 'solid',
  size: 'small',
  default: 'Primary default',
  small: 'Primary small',
};

// ------ Secondary button ------

export const Secondary = TemplateBasic.bind({});
Secondary.args = {
  buttonRole: 'secondary',
  buttonStyle: 'solid',
  default: 'Secondary default',
};

export const SecondaryState = TemplateState.bind({});
SecondaryState.args = {
  buttonRole: 'secondary',
  buttonStyle: 'solid',
  default: 'Secondary default',
  disabled: 'Secondary disabled',
};

export const SecondarySize = TemplateSize.bind({});
SecondarySize.args = {
  buttonRole: 'secondary',
  buttonStyle: 'solid',
  size: 'small',
  default: 'Secondary default',
  small: 'Secondary small',
};

// ------ Danger button ------

export const Danger = TemplateBasic.bind({});
Danger.args = {
  buttonRole: 'danger',
  buttonStyle: 'solid',
  default: 'Danger default',
};

export const DangerState = TemplateState.bind({});
DangerState.args = {
  buttonRole: 'danger',
  buttonStyle: 'solid',
  default: 'Danger default',
  disabled: 'Danger disabled',
};

export const DangerSize = TemplateSize.bind({});
DangerSize.args = {
  buttonRole: 'danger',
  buttonStyle: 'solid',
  size: 'small',
  default: 'Danger default',
  small: 'Danger small',
};

// ------ Skip-to-content button ------

export const SkipToContent = TemplateBasic.bind({});
SkipToContent.args = {
  buttonRole: 'skip-to-content',
  buttonStyle: 'solid',
  default: 'Skip-to-content default',
};

export const SkipToContentState = TemplateState.bind({});
SkipToContentState.args = {
  buttonRole: 'skip-to-content',
  buttonStyle: 'solid',
  default: 'Skip-to-content default',
  disabled: 'Skip-to-content disabled',
};

export const SkipToContentSize = TemplateSize.bind({});
SkipToContentSize.args = {
  buttonRole: 'skip-to-content',
  buttonStyle: 'solid',
  size: 'small',
  default: 'Skip-to-content default',
  small: 'Skip-to-content small',
};

// ------ Text-only button ------

export const TextOnly = TemplateBasic.bind({});
TextOnly.args = {
  buttonRole: 'primary',
  buttonStyle: 'text-only',
  default: 'Text-only default',
};

export const TextOnlyState = TemplateState.bind({});
TextOnlyState.args = {
  buttonRole: 'primary',
  buttonStyle: 'text-only',
  default: 'Text-only default',
  disabled: 'Text-only disabled',
};

export const TextOnlySize = TemplateSize.bind({});
TextOnlySize.args = {
  buttonRole: 'primary',
  buttonStyle: 'text-only',
  size: 'small',
  default: 'Text-only default',
  small: 'Text-only small',
};