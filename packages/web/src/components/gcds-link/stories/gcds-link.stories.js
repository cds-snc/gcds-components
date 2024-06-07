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
      control: { type: 'select' },
      options: ['regular', 'small', 'inherit'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
    display: {
      control: 'select',
      options: ['inline', 'block'],
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
    variant: {
      control: { type: 'select' },
      options: ['default', 'light'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
      control: 'select',
      options: [false, true],
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
      description:
        'Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.',
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
This is an example of
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-link ${args.display != 'inline' ? `display="${args.display}"` : null} ${
    args.href ? `href="${args.href}"` : null
  } ${args.variant != 'default' ? `variant="${args.variant}"` : null} ${
    args.rel ? `rel="${args.rel}"` : null
  } ${args.target != '_self' ? `target="${args.target}"` : null} ${
    args.size != 'inherit' && args.size ? `size="${args.size}"` : null
  } ${args.external ? `external` : null} ${
    args.download ? `download="${args.download}"` : null
  } ${args.type ? `type="${args.type}"` : null}>${args.default}</gcds-link>

<!-- React code -->
<GcdsLink ${args.display != 'inline' ? `display="${args.display}"` : null} ${
    args.href ? `href="${args.href}"` : null
  } ${args.variant != 'default' ? `variant="${args.variant}"` : null} ${
    args.rel ? `rel="${args.rel}"` : null
  } ${args.target != '_self' ? `target="${args.target}"` : null} ${
    args.size != 'inherit' && args.size ? `size="${args.size}"` : null
  } ${args.external ? `external` : null} ${
    args.download ? `download="${args.download}"` : null
  } ${args.type ? `type="${args.type}"` : null}>${args.default}</GcdsLink>
link.
`.replace(/ null/g, '');

const TemplateSizeInherit = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-heading tag="h4">This is an example of <gcds-link href="#">${args.default}</gcds-link> link</gcds-heading>

<!-- React code -->
<GcdsHeading tag="h4">This is an example of <GcdsLink href="#">${args.default}</GcdsLink> link</GcdsHeading>
`;

const TemplateVariant = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-link href="#" ${
    args.variant != 'default' ? `variant="${args.variant}"` : null
  }>${args.default}</gcds-link>

<!-- React code -->
<GcdsLink href="#" ${
    args.variant != 'default' ? `variant="${args.variant}"` : null
  }>${args.default}</GcdsLink>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-link ${args.display != 'inline' ? `display="${args.display}"` : null} ${
  args.href ? `href="${args.href}"` : null
} ${args.variant != 'default' ? `variant="${args.variant}"` : null} ${
  args.rel ? `rel="${args.rel}"` : null
} ${args.target && args.target != '_self' ? `target="${args.target}"` : null} ${
  args.size != 'inherit' && args.size ? `size="${args.size}"` : null
} ${args.external ? `external` : null} ${
  args.download ? `download="${args.download}"` : null
} ${args.type ? `type="${args.type}"` : null}>  ${args.default}
</gcds-link>
`;

// ------ Link Default ------

export const Default = Template.bind({});
Default.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'inherit',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

// ------ Link with icon ------

export const External = Template.bind({});
External.args = {
  display: 'inline',
  href: 'http://design-system.alpha.canada.ca',
  variant: 'default',
  rel: '',
  target: '_blank',
  size: 'inherit',
  external: true,
  download: '',
  type: '',
  default: 'an external',
};

export const Download = Template.bind({});
Download.args = {
  href: 'long-filename.pdf',
  display: 'inline',
  variant: 'default',
  target: '_self',
  size: 'inherit',
  download: 'file.pdf',
  type: 'application/pdf',
  default: 'a file download (PDF, 1.5 MB)',
};

export const Email = Template.bind({});
Email.args = {
  display: 'inline',
  variant: 'default',
  target: '_self',
  size: 'inherit',
  href: 'mailto:test@test.com?subject=Test%20Email',
  default: 'an email address',
};

export const Phone = Template.bind({});
Phone.args = {
  display: 'inline',
  variant: 'default',
  target: '_self',
  size: 'inherit',
  href: 'tel:1234567890',
  default: 'a phone number',
};

// ------ Link sizes ------

export const SizesSmall = Template.bind({});
SizesSmall.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'small',
  external: false,
  download: '',
  type: '',
  default: 'a size small',
};

export const SizesRegular = Template.bind({});
SizesRegular.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'regular',
  external: false,
  download: '',
  type: '',
  default: 'a size regular',
};

export const SizesInherit = TemplateSizeInherit.bind({});
SizesInherit.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'inherit',
  external: false,
  download: '',
  type: '',
  default: 'a size inherit',
};

// ------ Link roles ------

export const VariantDefault = TemplateVariant.bind({});
VariantDefault.args = {
  default: 'This is a link using the default link variant.',
  variant: 'default',
};

export const VariantLight = TemplateVariant.bind({});
VariantLight.args = {
  default: 'This is a link using the light link variant.',
  variant: 'light',
};

// ------ Link events & props ------

export const Props = Template.bind({});
Props.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'inherit',
  external: false,
  download: '',
  type: '',
  default: 'a GCDS Link component',
};

// ------ Link playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  display: 'inline',
  href: '#',
  variant: 'default',
  rel: '',
  target: '_self',
  size: 'inherit',
  external: false,
  download: '',
  type: '',
  default: 'This is an example link.',
};
