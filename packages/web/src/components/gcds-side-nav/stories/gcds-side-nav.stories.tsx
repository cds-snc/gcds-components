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
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
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

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-side-nav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>

  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>

    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
</gcds-side-nav>

<!-- React code -->
<GcdsSideNav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>
  <GcdsNavLink href="#">Nav link</GcdsNavLink>

  <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label">
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>
    <GcdsNavLink href="#">Nav link</GcdsNavLink>

    <GcdsNavGroup openTrigger="Nav group label" menuLabel="Nav group label sublevel">
      <GcdsNavLink href="#">Nav link</GcdsNavLink>
      <GcdsNavLink href="#">Nav link</GcdsNavLink>
      <GcdsNavLink href="#">Nav link</GcdsNavLink>
    </GcdsNavGroup>
  </GcdsNavGroup>
</GcdsSideNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-side-nav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>

  <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>

    <gcds-nav-group open-trigger="Nav group label" menu-label="Nav group label sublevel">
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
      <gcds-nav-link href="#">Nav link</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>
</gcds-side-nav>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  lang: 'en',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Side navigation label',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  label: 'Label',
  lang: 'en',
};
