export default {
  title: 'Components/Navigation link',

  argTypes: {
    // Props
    href: {
      name: 'href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    current: {
      name: 'current',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-nav-link
  href="${args.href}"
  ${args.current ? `current` : null}
>
  ${args.default}
</gcds-nav-link>

<!-- React code -->
<GcdsNavLink
  href="${args.href}"
  ${args.current ? `current` : null}
>
  ${args.default}
</GcdsNavLink>
`.replace(/\s\snull\n/g, '');

const TemplateTopNav = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav label="Top nav example">
  <gcds-nav-link
    href="${args.href}"
    ${args.current ? `current` : null}
  >
    ${args.default}
  </gcds-nav-link>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav label="Top nav example">
  <GcdsNavLink
    href="${args.href}"
    ${args.current ? `current` : null}
  >
    ${args.default}
  </GcdsNavLink>
</GcdsTopNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-nav-link
  href="${args.href}"
  ${args.current ? `current` : null}
>
  ${args.default}
</gcds-nav-link>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const Current = Template.bind({});
Current.args = {
  href: '#link',
  current: true,
  default: 'Nav link',
};

export const DefaultTopNav = TemplateTopNav.bind({});
DefaultTopNav.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const CurrentTopNav = TemplateTopNav.bind({});
CurrentTopNav.args = {
  href: '#link',
  current: true,
  default: 'Nav link',
};

export const Props = Template.bind({});
Props.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};
