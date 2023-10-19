export default {
  title: 'Components/Link',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click', 'change', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    size: {
      control: { type: 'radio' },
      options: ['regular', 'small'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      },
    },
    display: {
      control: 'select',
      options: ['inline', 'inline-block', 'block'],
    },
    href: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    rel: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    external: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    download: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    type: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
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
  },
};

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
This is an example of
<gcds-link ${
  args.display ? `display="${args.display}"` : null
  } ${args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null
  } ${args.target ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null
  } ${args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null
  } ${args.type ? `type="${args.type}"` : null
  }> ${args.default}</gcds-link>
 link.

<!-- React code -->
<GcdsLink ${
  args.display ? `display="${args.display}"` : null
  } ${args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null
  } ${args.target ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null
  } ${args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null
  } ${args.type ? `type="${args.type}"` : null
  }>
${args.default}</GcdsLink>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-link ${
  args.display ? `display="${args.display}"` : null
} ${args.href ? `href="${args.href}"` : null
} ${args.rel ? `rel="${args.rel}"` : null
} ${args.target ? `target="${args.target}"` : null
} ${args.size != 'regular' && args.size ? `size="${args.size}"` : null
} ${  args.external ? `external` : null
} ${args.download ? `download="${args.download}"` : null
} ${args.type ? `type="${args.type}"` : null
}>  ${args.default}
</gcds-link>
  ${args.default}
</gcds-link>
`;

// ------ Link Default ------
export const Default = Template.bind({});
Default.args = {
  display: '',
  href: '',
  rel: '',
  target: '',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

// ------ Link events & props ------
export const Props = Template.bind({});
Props.args = {
  display: '',
  href: '',
  rel: '',
  target: '',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

export const External = Template.bind({});
External.args = {
  href: 'http://design-system.alpha.canada.ca',
  rel: '',
  target: '',
  size: '',
  external: true,
  download: '',
  type: '',
  default: 'an external',
};

export const Download = Template.bind({});
Download.args = {
  href: 'test.jpg',
  target: '_self',
  size: 'regular',
  download: 'file.pdf',
  type: 'image/jpg',
  default: 'a file download',
};

export const Email = Template.bind({});
Email.args = {
  href: 'mailto:test@test.com?subject=Test%20Email',
  default: 'an email address',
};

export const Phone = Template.bind({});
Phone.args = {
  href: 'tel:1234567890',
  default: 'a phone number',
};

export const Sizes = Template.bind({});
Sizes.args = {
  size: 'small',
  default: 'a small',
};

// ------ Link playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  display: '',
  href: '',
  rel: '',
  target: '',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'Link text',
};
