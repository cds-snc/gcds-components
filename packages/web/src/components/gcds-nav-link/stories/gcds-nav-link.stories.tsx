import { eventProp } from '../../../utils/storybook/component-properties';

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
    external: {
      control: 'select',
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

    // Events
    gcdsClick: {
      action: 'click',
      ...eventProp,
    },
    gcdsFocus: {
      action: 'focus',
      ...eventProp,
    },
    gcdsBlur: {
      action: 'blur',
      ...eventProp,
    },
  },
};

class GcdsNavLinkArgs {
  href!: string;
  current?: boolean;
  external?: boolean;
  default!: string;
}

const Template = (args: GcdsNavLinkArgs) =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-nav-link
  href="${args.href}"
  ${args.current ? `current` : null}
  ${args.external ? `external` : null}
>
  ${args.default}
</gcds-nav-link>

<!-- React code -->
<GcdsNavLink
  href="${args.href}"
  ${args.current ? `current` : null}
  ${args.external ? `external` : null}
>
  ${args.default}
</GcdsNavLink>
`.replace(/\s\snull\n/g, '');

const TemplateTopNav = (args: GcdsNavLinkArgs) =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav label="Top nav example">
  <gcds-nav-link
    href="${args.href}"
    ${args.current ? `current` : null}
    ${args.external ? `external` : null}
  >
    ${args.default}
  </gcds-nav-link>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav label="Top nav example">
  <GcdsNavLink
    href="${args.href}"
    ${args.current ? `current` : null}
    ${args.external ? `external` : null}
  >
    ${args.default}
  </GcdsNavLink>
</GcdsTopNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = (args: GcdsNavLinkArgs) =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-nav-link
  href="${args.href}"
  ${args.current ? `current` : null}
>
  ${args.default}
</gcds-nav-link>
`.replace(/\s\snull\n/g, '');

export const Default: { args: GcdsNavLinkArgs } = Template.bind({});
Default.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const Current: { args: GcdsNavLinkArgs } = Template.bind({});
Current.args = {
  href: '#link',
  current: true,
  default: 'Nav link',
};

export const External: { args: GcdsNavLinkArgs } = Template.bind({});
External.args = {
  href: '#link',
  external: true,
  default: 'Nav link',
};

export const DefaultTopNav: { args: GcdsNavLinkArgs } = TemplateTopNav.bind({});
DefaultTopNav.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const CurrentTopNav: { args: GcdsNavLinkArgs } = TemplateTopNav.bind({});
CurrentTopNav.args = {
  href: '#link',
  current: true,
  default: 'Nav link',
};

export const ExternalTopNav: { args: GcdsNavLinkArgs } = TemplateTopNav.bind({});
ExternalTopNav.args = {
  href: '#link',
  external: true,
  default: 'Nav link',
};

export const Props: { args: GcdsNavLinkArgs } = Template.bind({});
Props.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};

export const Playground: { args: GcdsNavLinkArgs } = TemplatePlayground.bind({});
Playground.args = {
  href: '#link',
  current: false,
  default: 'Nav link',
};
