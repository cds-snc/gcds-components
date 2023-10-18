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
      control: 'text',
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
      control: 'text',
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
      if: { arg: 'download' },
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
<gcds-link ${
  args.display ? `display="${args.display}"` : null
  } ${args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null
  } ${args.target ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null
  } ${args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null
  } ${args.type ? `type="${args.type}"` : null
  }>  ${args.default}
</gcds-link>

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
${args.default}
</GcdsLink>
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
  default: 'Link text',
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
  default: 'Link text',
};

export const External = Template.bind({});
External.args = {
  display: '',
  href: '',
  rel: '',
  target: '',
  size: '',
  external: true,
  download: '',
  type: '',
  default: 'This is an external link',
};

export const Download = Template.bind({});
Download.args = {
  display: 'none',
  href: 'test.jpg',
  rel: '',
  target: '_self',
  size: 'regular',
  external: true,
  download: 'file.pdf',
  type: 'image/jpg',
  default: 'This is an download link',
};

export const Sizes = Template.bind({});
Sizes.args = {
  display: '',
  href: '',
  rel: '',
  target: '',
  size: 'small',
  external: false,
  download: '',
  type: '',
  default: 'Link text',
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
