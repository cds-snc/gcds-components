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
    args.target ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null} ${
    args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null} ${
    args.type ? `type="${args.type}"` : null
  }>${args.default}</gcds-link>

<!-- React code -->
<GcdsLink ${args.display != 'inline' ? `display="${args.display}"` : null} ${
    args.href ? `href="${args.href}"` : null
  } ${args.rel ? `rel="${args.rel}"` : null} ${
    args.target ? `target="${args.target}"` : null
  } ${args.size != 'regular' && args.size ? `size="${args.size}"` : null} ${
    args.external ? `external` : null
  } ${args.download ? `download="${args.download}"` : null} ${
    args.type ? `type="${args.type}"` : null
  }>${args.default}</GcdsLink>
link.
`.replace(/ null/g, '');

const TemplateSizes = () => `
<!-- Web component code (Angular, Vue) -->
<gcds-link href="" size="regular">This is a regular link.</gcds-link>
<gcds-link href="" size="small">This is a small link.</gcds-link>

<!-- React code -->
<GcdsLink href="" size="regular">This is a regular link</GcdsLink>
<GcdsLink href="" size="small">This is a small link</GcdsLink>
`;

const TemplatePlayground = args => `
<gcds-link ${args.display != 'inline' ? `display="${args.display}"` : null} ${
  args.href ? `href="${args.href}"` : null
} ${args.rel ? `rel="${args.rel}"` : null} ${
  args.target ? `target="${args.target}"` : null
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
  display: 'inline',
  href: '#',
  rel: '',
  target: '',
  size: '',
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

export const TemplateSizesExample = TemplateSizes.bind({});

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
