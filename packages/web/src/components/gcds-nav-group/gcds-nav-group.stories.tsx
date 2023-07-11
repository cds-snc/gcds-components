export default {
  title: 'Components/Navigation group',

  argTypes: {
    // Props
    heading: {
      name: 'heading',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    open: {
      name: 'open',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-nav-group
  heading="${args.heading}"
  ${args.open ? `open` : null}
>
  <gcds-nav-link href="#">Form</gcds-nav-link>
  <gcds-nav-link href="#">GitHub</gcds-nav-link>
  <gcds-nav-link href="#">Slack</gcds-nav-link>
</gcds-nav-group>

// React code
<GcdsNavGroup
  heading="${args.heading}"
  ${args.open ? `open` : null}
>
  <GcdsNavLink href="#">Form</GcdsNavLink>
  <GcdsNavLink href="#">GitHub</GcdsNavLink>
  <GcdsNavLink href="#">Slack</GcdsNavLink>
</GcdsNavGroup>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  heading: 'Navigation group',
  open: false,
};
