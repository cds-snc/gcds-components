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

const TemplatePlayground = (args) => (`
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

const TemplatePreview = () => (`
  // Web Component (Angular, Vue)
  <gcds-button>
    Primary
  </gcds-button>
  <gcds-button button-role="secondary">
    Secondary
  </gcds-button>
  <gcds-button button-role="danger">
    Danger
  </gcds-button>
  <gcds-button button-role="skip-to-content">
    Skip-to-content
  </gcds-button>
  <gcds-button button-style="text-only">
    Text-only
  </gcds-button>

  // React code
  <GcdsButton>
    Primary
  </GcdsButton>
  <GcdsButton buttonRole="secondary">
    Secondary
  </GcdsButton>
  <GcdsButton buttonRole="danger">
    Danger
  </GcdsButton>
  <GcdsButton buttonRole="skip-to-content">
    Skip-to-content
  </GcdsButton>
  <GcdsButton buttonStyle="text-only">
    Text-only
  </GcdsButton>
`).replace(/ null/g, '');

const TemplateTypes = () => (`
  // Web Component (Angular, Vue)
  <gcds-button>
    Button
  </gcds-button>
  <gcds-button type="link">
    Link
  </gcds-button>
  <gcds-button type="reset">
    Reset
  </gcds-button>
  <gcds-button type="submit">
    Submit
  </gcds-button>

  // React code
  <GcdsButton>
    Button
  </GcdsButton>
  <GcdsButton type="link">
    Link
  </GcdsButton>
  <GcdsButton type="reset">
    Reset
  </GcdsButton>
  <GcdsButton type="submit">
    Submit
  </GcdsButton>
`).replace(/ null/g, '');

const TemplateStyles = () => (`
  // Web Component (Angular, Vue)
  <gcds-button>
    Solid
  </gcds-button>
  <gcds-button button-style="text-only">
    Text-only
  </gcds-button>

  // React code
  <GcdsButton>
    Solid
  </GcdsButton>
  <GcdsButton buttonStyle="text-only">
    Text-only
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

// ------ Buttons overview ------

export const Preview = TemplatePreview.bind({});

// ------ Buttons types ------

export const PreviewTypes = TemplateTypes.bind({});

// ------ Buttons styles ------

export const PreviewStyles = TemplateStyles.bind({});

// ------ Button primary ------

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

// ------ Button secondary ------

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

// ------ Button danger ------

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

// ------ Button skip-to-content ------

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

// ------ Button text-only ------

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

// ------ Button playground ------

export const Playground = TemplatePlayground.bind({});
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
