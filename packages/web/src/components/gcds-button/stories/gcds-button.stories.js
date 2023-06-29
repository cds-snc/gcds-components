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

const Template = (args) => (`
// Web Component code (Angular, Vue)
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
  // Web Component code (Angular, Vue)
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
  // Web Component code (Angular, Vue)
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

const TemplateTwoButtons = (args) => (`
  // Web Component code (Angular, Vue)
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.btnOneStyle != "solid" ? `button-style="${args.btnOneStyle}"` : null} ${args.btnOneSize != "regular" ? `size="${args.btnOneSize}"` : null} ${args.btnOneDisabled ? `disabled` : null}>
    ${args.btnOneText}
  </gcds-button>
  <gcds-button ${args.buttonRole != "primary" ? `button-role="${args.buttonRole}"` : null} ${args.btnTwoStyle != "solid" ? `button-style="${args.btnTwoStyle}"` : null} ${args.btnTwoSize != "regular" ? `size="${args.btnTwoSize}"` : null} ${args.btnTwoDisabled ? `disabled` : null}>
    ${args.btnTwoText}
  </gcds-button>

  // React code
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.btnOneStyle != "solid" ? `button-style="${args.btnOneStyle}"` : null} ${args.btnOneSize != "regular" ? `size="${args.btnOneSize}"` : null} ${args.btnOneDisabled ? `disabled` : null}>
    ${args.btnOneText}
  </GcdsButton>
  <GcdsButton ${args.buttonRole != "primary" ? `buttonRole="${args.buttonRole}"` : null} ${args.btnTwoStyle != "solid" ? `button-style="${args.btnTwoStyle}"` : null} ${args.btnTwoSize != "regular" ? `size="${args.btnTwoSize}"` : null} ${args.btnTwoDisabled ? `disabled` : null}>
    ${args.btnTwoText}
  </GcdsButton>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
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
`).replace(/\s\snull\n/g, '');

// ------ Button default ------

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
  default: 'Button label',
};

// ------ Buttons overview ------

export const Preview = TemplatePreview.bind({});

// ------ Buttons types ------

export const PreviewTypes = TemplateTypes.bind({});

// ------ Buttons styles ------

export const PreviewStyles = TemplateTwoButtons.bind({});
PreviewStyles.args = {
  buttonRole: 'primary',
  btnOneText: 'Solid',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnTwoText: 'Text-only',
  btnTwoStyle: 'text-only',
  btnTwoSize: 'regular',
};

// ------ Button primary ------

export const PrimaryState = TemplateTwoButtons.bind({});
PrimaryState.args = {
  buttonRole: 'primary',
  btnOneText: 'Primary default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Primary disabled',
  btnTwoStyle: 'solid',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const PrimarySize = TemplateTwoButtons.bind({});
PrimarySize.args = {
  buttonRole: 'primary',
  btnOneText: 'Primary default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnTwoText: 'Primary small',
  btnTwoStyle: 'solid',
  btnTwoSize: 'small',
};

// ------ Button secondary ------

export const SecondaryState = TemplateTwoButtons.bind({});
SecondaryState.args = {
  buttonRole: 'secondary',
  btnOneText: 'Secondary default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Secondary disabled',
  btnTwoStyle: 'solid',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const SecondarySize = TemplateTwoButtons.bind({});
SecondarySize.args = {
  buttonRole: 'secondary',
  btnOneText: 'Secondary default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnTwoText: 'Secondary small',
  btnTwoStyle: 'solid',
  btnTwoSize: 'small',
};

// ------ Button danger ------

export const DangerState = TemplateTwoButtons.bind({});
DangerState.args = {
  buttonRole: 'danger',
  btnOneText: 'Danger default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Danger disabled',
  btnTwoStyle: 'solid',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const DangerSize = TemplateTwoButtons.bind({});
DangerSize.args = {
  buttonRole: 'danger',
  btnOneText: 'Danger default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnTwoText: 'Danger small',
  btnTwoStyle: 'solid',
  btnTwoSize: 'small',
};

// ------ Button skip-to-content ------

export const SkipToContentState = TemplateTwoButtons.bind({});
SkipToContentState.args = {
  buttonRole: 'skip-to-content',
  btnOneText: 'Skip-to-content default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Skip-to-content disabled',
  btnTwoStyle: 'solid',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const SkipToContentSize = TemplateTwoButtons.bind({});
SkipToContentSize.args = {
  buttonRole: 'skip-to-content',
  btnOneText: 'Skip-to-content default',
  btnOneStyle: 'solid',
  btnOneSize: 'regular',
  btnTwoText: 'Skip-to-content small',
  btnTwoStyle: 'solid',
  btnTwoSize: 'small',
};

// ------ Button text-only ------

export const TextOnlyState = TemplateTwoButtons.bind({});
TextOnlyState.args = {
  buttonRole: 'primary',
  btnOneText: 'Text-only default',
  btnOneStyle: 'text-only',
  btnOneSize: 'regular',
  btnOneDisabled: false,
  btnTwoText: 'Text-only disabled',
  btnTwoStyle: 'text-only',
  btnTwoSize: 'regular',
  btnTwoDisabled: true,
};

export const TextOnlySize = TemplateTwoButtons.bind({});
TextOnlySize.args = {
  buttonRole: 'primary',
  btnOneText: 'Text-only default',
  btnOneSize: 'regular',
  btnOneStyle: 'text-only',
  btnTwoText: 'Text-only small',
  btnTwoSize: 'small',
  btnTwoStyle: 'text-only',
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
  href: '',
  rel: '',
  target: '',
  download: '',
  default: 'Button label',
};
