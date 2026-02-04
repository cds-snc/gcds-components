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
      options: ['end', 'start'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
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
  ${
    args.default ||
    `<gcds-nav-link href="#">Why GC Notify</gcds-nav-link>
  <gcds-nav-link href="#">Why GC Notify</gcds-nav-link>

  <gcds-nav-group  open-trigger="Features" menu-label="Features">
    <gcds-nav-link href="#" current>Create reusable templates</gcds-nav-link>
    <gcds-nav-link href="#">Personalize messages</gcds-nav-link>
    <gcds-nav-link href="#">Schedule messages</gcds-nav-link>
    <gcds-nav-link href="#">Send messages automatically</gcds-nav-link>
  </gcds-nav-group>

  <gcds-nav-link href="#">Contact us</gcds-nav-link>`
  }
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
  ${
    args.default ||
    `<GcdsNavLink href="#">Why GC Notify</GcdsNavLink>
  <GcdsNavLink href="#">Why GC Notify</GcdsNavLink>

  <GcdsNavGroup  openTrigger="Features" menuLabel="Features">
    <GcdsNavLink href="#" current>Create reusable templates</GcdsNavLink>
    <GcdsNavLink href="#">Personalize messages</GcdsNavLink>
    <GcdsNavLink href="#">Schedule messages</GcdsNavLink>
    <GcdsNavLink href="#">Send messages automatically</GcdsNavLink>
  </GcdsNavGroup>

  <GcdsNavLink href="#">Contact us</GcdsNavLink>`
  }
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
  ${
    args.default ||
    `<gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
    <gcds-nav-link href="#">Nav link</gcds-nav-link>
  </gcds-nav-group>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  <gcds-nav-link href="#">Nav link</gcds-nav-link>
  `
  }
</gcds-top-nav>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  label: 'Top navigation',
  alignment: 'end',
  home: 'GC Notify',
  lang: 'en',
  default: '',
};

export const Home = Template.bind({});
Home.args = {
  label: 'Top navigation',
  alignment: 'end',
  home: 'GC Notify',
  lang: 'en',
  default: '',
};

export const End = Template.bind({});
End.args = {
  label: 'Top navigation',
  alignment: 'end',
  home: '',
  lang: 'en',
  default: '',
};

export const Start = Template.bind({});
Start.args = {
  label: 'Top navigation',
  alignment: 'start',
  home: '',
  lang: 'en',
  default: '',
};

export const Props = Template.bind({});
Props.args = {
  label: 'Top navigation',
  alignment: 'end',
  home: 'GC Notify',
  lang: 'en',
  default: '',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  label: 'Top navigation',
  alignment: 'end',
  home: 'GC Notify',
  lang: 'en',
  default: '',
};
