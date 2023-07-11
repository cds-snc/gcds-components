export default {
  title: 'Components/Side navigation',

  argTypes: {
    // Props
    label: {
      name: 'label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    position: {
      control: { type: 'radio' },
      options: ['static', 'sticky'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'static' }
      },
    },
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-side-nav
  label="${args.label}"
  ${args.position != 'static' ? `position=${args.position}` : null}
>
  <gcds-nav-link href="#">Installation</gcds-nav-link>
  <gcds-nav-link href="#">Foundations</gcds-nav-link>
  <gcds-nav-link href="#">Components</gcds-nav-link>

  <gcds-nav-group heading="Contact us">
    <gcds-nav-link href="#">Form</gcds-nav-link>
    <gcds-nav-link href="#">GitHub</gcds-nav-link>
    <gcds-nav-link href="#">Slack</gcds-nav-link>

    <gcds-nav-group heading="Sub level 2">
      <gcds-nav-link href="#">Link</gcds-nav-link>
      <gcds-nav-link href="#">Link</gcds-nav-link>
      <gcds-nav-link href="#">Link</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
</gcds-side-nav>

// React code
<GcdsSideNav
  label="${args.label}"
  ${args.position != 'static' ? `position=${args.position}` : null}
>
  <GcdsNavLink href="#">Installation</GcdsNavLink>
  <GcdsNavLink href="#">Foundations</GcdsNavLink>
  <GcdsNavLink href="#">Components</GcdsNavLink>

  <GcdsNavGroup heading="Contact us">
    <GcdsNavLink href="#">Form</GcdsNavLink>
    <GcdsNavLink href="#">GitHub</GcdsNavLink>
    <GcdsNavLink href="#">Slack</GcdsNavLink>

    <GcdsNavGroup heading="Sub level 2">
      <GcdsNavLink href="#">Link</GcdsNavLink>
      <GcdsNavLink href="#">Link</GcdsNavLink>
      <GcdsNavLink href="#">Link</GcdsNavLink>
    </GcdsNavGroup>
  </GcdsNavGroup>
</GcdsSideNav>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  label: 'Side navigation',
  position: 'static',
};
