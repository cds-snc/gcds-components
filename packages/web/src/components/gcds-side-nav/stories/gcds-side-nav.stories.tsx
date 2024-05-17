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
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-side-nav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>

  <gcds-nav-group open-trigger="Features" menu-label="Features">
    <gcds-nav-group open-trigger="Build and manage forms yourself" menu-label="Build and manage forms yourself sublevel">
      <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
      <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
      <gcds-nav-link href="#">Test forms before publishing</gcds-nav-link>
    </gcds-nav-group>

    <gcds-nav-group open-trigger="Publish trusted, user-friendly forms" menu-label="Publish trusted, user-friendly forms sublevel">
      <gcds-nav-link href="#">Forms that people can fill out anywhere</gcds-nav-link>
      <gcds-nav-link href="#">Forms that save time and effort</gcds-nav-link>
      <gcds-nav-link href="#">Forms with the GC look and feel</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>

  <gcds-nav-link href="#">Guidance</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-side-nav>

<!-- React code -->
<GcdsSideNav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <GcdsNavLink href="#">Why GC Forms</GcdsNavLink>

  <GcdsNavGroup openTrigger="Features" menuLabel="Features">
    <GcdsNavGroup openTrigger="Build and manage forms yourself" menuLabel="Build and manage forms yourself sublevel">
      <GcdsNavLink href="#">Review in both official languages side-by-side</GcdsNavLink>
      <GcdsNavLink href="#">Get form responses delivered securely</GcdsNavLink>
      <GcdsNavLink href="#">Test forms before publishing</GcdsNavLink>
    </GcdsNavGroup>

    <GcdsNavGroup openTrigger="Publish trusted, user-friendly forms" menuLabel="Publish trusted, user-friendly forms sublevel">
      <GcdsNavLink href="#">Forms that people can fill out anywhere</GcdsNavLink>
      <GcdsNavLink href="#">Forms that save time and effort</GcdsNavLink>
      <GcdsNavLink href="#">Forms with the GC look and feel</GcdsNavLink>
    </GcdsNavGroup>
  </GcdsNavGroup>

  <GcdsNavLink href="#">Guidance</GcdsNavLink>
  <GcdsNavLink href="#">Contact us</GcdsNavLink>
</GcdsSideNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-side-nav
  label="${args.label}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  <gcds-nav-link href="#">Why GC Forms</gcds-nav-link>

  <gcds-nav-group open-trigger="Features" menu-label="Features">
    <gcds-nav-group open-trigger="Build and manage forms yourself" menu-label="Build and manage forms yourself sublevel">
      <gcds-nav-link href="#">Review in both official languages side-by-side</gcds-nav-link>
      <gcds-nav-link href="#">Get form responses delivered securely</gcds-nav-link>
      <gcds-nav-link href="#">Test forms before publishing</gcds-nav-link>
    </gcds-nav-group>

    <gcds-nav-group open-trigger="Publish trusted, user-friendly forms" menu-label="Publish trusted, user-friendly forms sublevel">
      <gcds-nav-link href="#">Forms that people can fill out anywhere</gcds-nav-link>
      <gcds-nav-link href="#">Forms that save time and effort</gcds-nav-link>
      <gcds-nav-link href="#">Forms with the GC look and feel</gcds-nav-link>
    </gcds-nav-group>
  </gcds-nav-group>

  <gcds-nav-link href="#">Guidance</gcds-nav-link>
  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-side-nav>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  label: 'GC Forms',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  label: 'GC Forms',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  label: 'GC Forms',
  lang: 'en',
};
