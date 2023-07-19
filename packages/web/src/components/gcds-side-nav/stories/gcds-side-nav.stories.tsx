import { langProp } from '../../../utils/storybook/component-properties';

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
    // position: {
    //   control: { type: 'radio' },
    //   options: ['static', 'sticky'],
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: 'static' }
    //   },
    // },
    ...langProp,
  },
};

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-side-nav
  label="${args.label}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Installation</gcds-nav-link>
  <gcds-nav-link href="#">Foundations</gcds-nav-link>
  <gcds-nav-link href="#">Components</gcds-nav-link>

  <gcds-nav-group open-trigger="Contact us" menu-label="Contact">
    <gcds-nav-link href="#">Form</gcds-nav-link>
    <gcds-nav-link href="#">GitHub</gcds-nav-link>
    <gcds-nav-link href="#">Slack</gcds-nav-link>

    <gcds-nav-group open-trigger="Sub level 2" menu-label="sublevel">
      <gcds-nav-link href="#">Link</gcds-nav-link>
      <gcds-nav-link href="#">Link</gcds-nav-link>
      <gcds-nav-link href="#">Link</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
</gcds-side-nav>

<!-- React code -->
<GcdsSideNav
  label="${args.label}"
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <GcdsNavLink href="#">Installation</GcdsNavLink>
  <GcdsNavLink href="#">Foundations</GcdsNavLink>
  <GcdsNavLink href="#">Components</GcdsNavLink>

  <GcdsNavGroup openTrigger="Contact us" menuLabel="Contact">
    <GcdsNavLink href="#">Form</GcdsNavLink>
    <GcdsNavLink href="#">GitHub</GcdsNavLink>
    <GcdsNavLink href="#">Slack</GcdsNavLink>

    <GcdsNavGroup openTrigger="Sub level 2" menuLabel="sublevel">
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
  lang: 'en'
};
