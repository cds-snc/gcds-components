export default {
  title: 'Components/Button',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click', 'change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    buttonRole: {
      name: 'button-role',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    buttonId: {
      name: 'button-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['regular', 'small'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['submit', 'reset', 'button', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },

    // Link props
    download: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    href: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    rel: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    target: {
      control: 'text',
      if: { arg: 'type', eq: 'link' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      description:
        'Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.',
      table: {
        category: 'Slots | Fentes',
      },
    },

    // Events
    gcdsClick: {
      action: 'click',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button ${args.type != 'button' ? `type="${args.type}"` : null} ${
    args.buttonRole != 'primary' ? `button-role="${args.buttonRole}"` : null
  } ${args.buttonId ? `button-id="${args.buttonId}"` : null} ${
    args.size != 'regular' ? `size="${args.size}"` : null
  } ${args.disabled ? `disabled` : null} ${
    args.name ? `name="${args.name}"` : null
  } ${args.type == 'link' && args.href ? `href="${args.href}"` : null} ${
    args.type == 'link' && args.rel ? `rel="${args.rel}"` : null
  } ${args.type == 'link' && args.target ? `target="${args.target}"` : null} ${
    args.type == 'link' && args.download ? `download="${args.download}"` : null
  }>
  ${args.default}
</gcds-button>

<!-- React code -->
<GcdsButton ${args.type != 'button' ? `type="${args.type}"` : null} ${
    args.buttonRole != 'primary' ? `buttonRole="${args.buttonRole}"` : null
  } ${args.buttonId ? `buttonId="${args.buttonId}"` : null} ${
    args.size != 'regular' ? `size="${args.size}"` : null
  } ${args.disabled ? `disabled` : null} ${
    args.name ? `name="${args.name}"` : null
  } ${args.type == 'link' && args.href ? `href="${args.href}"` : null} ${
    args.type == 'link' && args.rel ? `rel="${args.rel}"` : null
  } ${args.type == 'link' && args.target ? `target="${args.target}"` : null} ${
    args.type == 'link' && args.download ? `download="${args.download}"` : null
  }>
  ${args.default}
</GcdsButton>
`.replace(/ null/g, '');

const TemplatePreview = () => `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button>Submit</gcds-button>
<gcds-button button-role="secondary">Cancel</gcds-button>
<gcds-button button-role="danger">Delete</gcds-button>

<!-- React code -->
<GcdsButton>Submit</GcdsButton>
<GcdsButton buttonRole="secondary">Cancel</GcdsButton>
<GcdsButton buttonRole="danger">Delete</GcdsButton>
`;

const TemplateTypes = () => `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button>Button</gcds-button>
<gcds-button type="link">Link</gcds-button>
<gcds-button type="reset">Reset</gcds-button>
<gcds-button type="submit">Submit</gcds-button>

<!-- React code -->
<GcdsButton>Button</GcdsButton>
<GcdsButton type="link">Link</GcdsButton>
<GcdsButton type="reset">Reset</GcdsButton>
<GcdsButton type="submit">Submit</GcdsButton>
`;

const TemplateRoles = () => `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button>Primary</gcds-button>
<gcds-button button-role="secondary">Secondary</gcds-button>
<gcds-button button-role="danger">Danger</gcds-button>

<!-- React code -->
<GcdsButton>Primary</GcdsButton>
<GcdsButton buttonRole="secondary">Secondary</GcdsButton>
<GcdsButton buttonRole="danger">Danger</GcdsButton>
`;

const TemplateTwoButtons = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button ${
    args.buttonRole != 'primary' ? `button-role="${args.buttonRole}"` : null
  } ${args.btnOneSize != 'regular' ? `size="${args.btnOneSize}"` : null} ${
    args.btnOneDisabled ? `disabled` : null
  }>
  ${args.btnOneText}
</gcds-button>
<gcds-button ${
    args.buttonRole != 'primary' ? `button-role="${args.buttonRole}"` : null
  } ${args.btnTwoSize != 'regular' ? `size="${args.btnTwoSize}"` : null} ${
    args.btnTwoDisabled ? `disabled` : null
  }>
  ${args.btnTwoText}
</gcds-button>

<!-- React code -->
<GcdsButton ${
    args.buttonRole != 'primary' ? `buttonRole="${args.buttonRole}"` : null
  } ${args.btnOneSize != 'regular' ? `size="${args.btnOneSize}"` : null} ${
    args.btnOneDisabled ? `disabled` : null
  }>
  ${args.btnOneText}
</GcdsButton>
<GcdsButton ${
    args.buttonRole != 'primary' ? `buttonRole="${args.buttonRole}"` : null
  } ${args.btnTwoSize != 'regular' ? `size="${args.btnTwoSize}"` : null} ${
    args.btnTwoDisabled ? `disabled` : null
  }>
  ${args.btnTwoText}
</GcdsButton>
`.replace(/ null/g, '');

const TemplateBtnIcon = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-button>
  ${args.default} <gcds-icon name="${args.iconName}"></gcds-icon>
</gcds-button>

<!-- React code -->
<GcdsButton>
  ${args.default} <GcdsIcon name="${args.iconName}"></GcdsIcon>
</GcdsButton>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-button
  ${args.type != 'button' ? `type="${args.type}"` : null}
  ${args.buttonRole != 'primary' ? `button-role="${args.buttonRole}"` : null}
  ${args.buttonId ? `button-id="${args.buttonId}"` : null}
  ${args.size != 'regular' ? `size="${args.size}"` : null}
  ${args.disabled ? `disabled` : null}
  ${args.name ? `name="${args.name}"` : null}
  ${args.type == 'link' && args.href ? `href="${args.href}"` : null}
  ${args.type == 'link' && args.rel ? `rel="${args.rel}"` : null}
  ${args.type == 'link' && args.target ? `target="${args.target}"` : null}
  ${args.type == 'link' && args.download ? `download="${args.download}"` : null}
>
  ${args.default}
</gcds-button>
`;

// ------ Buttons overview ------

export const Preview = TemplatePreview.bind({});

// ------ Buttons types ------

export const PreviewTypes = TemplateTypes.bind({});

// ------ Buttons roles ------

export const PreviewRoles = TemplateRoles.bind({});

// ------ Button primary ------

export const PrimaryState = TemplateTwoButtons.bind({});
PrimaryState.args = {
  buttonRole: 'primary',
  btnOneText: 'Primary default',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Primary disabled',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const PrimarySize = TemplateTwoButtons.bind({});
PrimarySize.args = {
  buttonRole: 'primary',
  btnOneText: 'Primary default',
  btnOneSize: 'regular',
  btnTwoText: 'Primary small',
  btnTwoSize: 'small',
};

// ------ Button secondary ------

export const SecondaryState = TemplateTwoButtons.bind({});
SecondaryState.args = {
  buttonRole: 'secondary',
  btnOneText: 'Secondary default',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Secondary disabled',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const SecondarySize = TemplateTwoButtons.bind({});
SecondarySize.args = {
  buttonRole: 'secondary',
  btnOneText: 'Secondary default',
  btnOneSize: 'regular',
  btnTwoText: 'Secondary small',
  btnTwoSize: 'small',
};

// ------ Button danger ------

export const DangerState = TemplateTwoButtons.bind({});
DangerState.args = {
  buttonRole: 'danger',
  btnOneText: 'Danger default',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Danger disabled',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const DangerSize = TemplateTwoButtons.bind({});
DangerSize.args = {
  buttonRole: 'danger',
  btnOneText: 'Danger default',
  btnOneSize: 'regular',
  btnTwoText: 'Danger small',
  btnTwoSize: 'small',
};

// ------ Button with icon ------

export const BtnWithIcon = TemplateBtnIcon.bind({});
BtnWithIcon.args = {
  default: 'Close ',
  iconName: 'times',
};

// ------ Button events & props ------

export const Props = Template.bind({});
Props.args = {
  type: 'button',
  buttonRole: 'primary',
  buttonId: '',
  size: 'regular',
  disabled: false,
  name: '',
  href: '',
  rel: '',
  target: '',
  download: '',
  default: 'Button label',
};

// ------ Button playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  type: 'button',
  buttonRole: 'primary',
  buttonId: '',
  size: 'regular',
  disabled: false,
  name: '',
  href: '',
  rel: '',
  target: '',
  download: '',
  default: 'Button label',
};
