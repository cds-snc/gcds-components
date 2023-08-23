export default {
  title: 'Components/Navigation link',

  argTypes: {
    // Props
    href: {
      name: 'href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    current: {
      name: 'current',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
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
  },
};

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
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
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  href: '#link',
  current: false,
  default: "Nav link"
};
