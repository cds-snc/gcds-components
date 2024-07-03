import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Top navigation',

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
    alignment: {
      control: { type: 'select' },
      options: ['right', 'left', 'center'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
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

    // Slots
    home: {
      control: {
        type: 'text',
      },
      description:
        "Customize the content for the home link. | Personnalisez le contenu du lien d'accueil.",
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-top-nav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${
    args.home
      ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `
      : null
  }
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>

  <gcds-nav-group  open-trigger="Features" menu-label="Features">
    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>
  </gcds-nav-group>

  <gcds-nav-link href="#">Contact us</gcds-nav-link>
</gcds-top-nav>

<!-- React code -->
<GcdsTopNav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${
    args.home
      ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> `
      : null
  }
  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>

  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">
    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>
    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>
    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>
    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>
  </GcdsNavGroup>

  <GcdsNavLink href="#">Contact us</GcdsNavLink>
</GcdsTopNav>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-top-nav
  label="${args.label}"
  alignment="${args.alignment}"
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${
    args.home
      ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `
      : null
  }
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
</gcds-top-nav>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: 'GC Notify',
  lang: 'en',
};

export const Home = Template.bind({});
Home.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: 'GC Notify',
  lang: 'en',
};

export const Right = Template.bind({});
Right.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: '',
  lang: 'en',
};

export const Center = Template.bind({});
Center.args = {
  label: 'Top navigation',
  alignment: 'center',
  home: '',
  lang: 'en',
};

export const Left = Template.bind({});
Left.args = {
  label: 'Top navigation',
  alignment: 'left',
  home: '',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: 'GC Notify',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  label: 'Top navigation',
  alignment: 'right',
  home: 'GC Notify',
  lang: 'en',
};
