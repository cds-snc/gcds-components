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
      options: ['regular', 'small', 'inherit'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      },
    },
    display: {
      control: 'select',
      options: ['inline', 'inline-block', 'block'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inline' },
      },
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
        defaultValue: { summary: '_self' },
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
        defaultValue: { summary: '-' },
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
  },
};

const Template = args =>
  `
This is an example of
<!-- Web component code (Angular, Vue) -->
<gcds-link ${args.display != 'inline' ? `display="${args.display}"` : null} ${
    args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null} ${
    args.target != '_self' ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null} ${
    args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null} ${
    args.type ? `type="${args.type}"` : null
  }>${args.default}</gcds-link>

<!-- React code -->
<GcdsLink ${args.display != 'inline' ? `display="${args.display}"` : null} ${
    args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null} ${
    args.target != '_self' ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null} ${
    args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null} ${
    args.type ? `type="${args.type}"` : null
  }>${args.default}</GcdsLink>
link.
`.replace(/ null/g, '');

const TemplateSizes = () => `
<!-- Web component code (Angular, Vue) -->
<gcds-link href="#">This is a regular link.</gcds-link>
<gcds-link href="#" size="small">This is a small link.</gcds-link>
<gcds-heading tag="h2"><gcds-link href="#" size="inherit">This is link with size set to inherit.</gcds-link></gcds-heading>

<!-- React code -->
<GcdsLink href="#">This is a regular link</GcdsLink>
<GcdsLink href="#" size="small">This is a small link</GcdsLink>
<GcdsHeading tag="h2"><GcdsLink href="#" size="inherit">This is link with size set to inherit.</GcdsLink></GcdsHeading>
`;

const TemplatePlayground = args => `
<gcds-link ${args.display != 'inline' ? `display="${args.display}"` : null} ${
  args.href ? `href="${args.href}"` : null
} ${args.rel ? `rel="${args.rel}"` : null} ${
  args.target && args.target != '_self' ? `target="${args.target}"` : null
} ${args.size != 'regular' && args.size ? `size="${args.size}"` : null} ${
  args.external ? `external` : null
} ${args.download ? `download="${args.download}"` : null} ${
  args.type ? `type="${args.type}"` : null
}>  ${args.default}
</gcds-link>
`;

// ------ Link Default ------
export const Default = Template.bind({});
Default.args = {
  display: 'inline',
  href: '#',
  rel: '',
  target: '_self',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

// ------ Link events & props ------
export const Props = Template.bind({});
Props.args = {
  display: 'inline',
  href: '#',
  rel: '',
  target: '_self',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

export const External = Template.bind({});
External.args = {
  display: 'inline',
  href: 'http://design-system.alpha.canada.ca',
  rel: '',
  target: '_self',
  size: 'regular',
  external: true,
  download: '',
  type: '',
  default: 'an external',
};

export const Download = Template.bind({});
Download.args = {
  href: 'long-filename.pdf',
  display: 'inline',
  target: '_self',
  size: 'regular',
  download: 'file.pdf',
  type: 'application/pdf',
  default: 'a file download (PDF, 1.5 MB)',
};

export const Email = Template.bind({});
Email.args = {
  display: 'inline',
  target: '_self',
  size: 'regular',
  href: 'mailto:test@test.com?subject=Test%20Email',
  default: 'an email address',
};

export const Phone = Template.bind({});
Phone.args = {
  display: 'inline',
  target: '_self',
  size: 'regular',
  href: 'tel:1234567890',
  default: 'a phone number',
};

export const TemplateSizesExample = TemplateSizes.bind({});

// ------ Link playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  display: 'inline',
  href: '',
  rel: '',
  target: '_self',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'Link text',
};
