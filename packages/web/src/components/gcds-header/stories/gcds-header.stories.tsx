import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Header',

  argTypes: {
    // Props
    langHref: {
      name: 'lang-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    skipToHref: {
      name: 'skip-to-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    signatureHasLink: {
      name: 'signature-has-link',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    signatureVariant: {
      name: 'signature-variant',
      control: 'select',
      options: ['colour', 'white'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'colour' },
      },
    },
    ...langProp,

    // Slots
    menu: {
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add a menu to the header. | À utiliser pour ajouter un menu à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
    breadcrumb: {
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add breadcrumbs to the header. | À utiliser pour ajouter un chemin de navigation à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
    search: {
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add a search to the header. | À utiliser pour ajouter une recherche à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
    toggle: {
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add a different language toggle to the header. | À utiliser pour ajouter une bascule de langue différente à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
    banner: {
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add a banner to the header. | À utiliser pour ajouter une bannière à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
    skipTo: {
      name: 'skip-to-nav',
      control: {
        type: 'text',
      },
      description:
        "Use this slot to add a different skip-to-nav link to the header. | À utiliser pour ajouter un lien « passer à la navigation » à l'en-tête.",
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-header
  lang-href="${args.langHref}"
  skip-to-href="${args.skipToHref}"
  ${
    !args.signatureHasLink
      ? `signature-has-link="${args.signatureHasLink}"`
      : null
  }
  ${
    args.signatureVariant != 'colour'
      ? `signature-variant="${args.signatureVariant}"`
      : null
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.menu ? `<div slot="menu">${args.menu}</div>` : null}
  ${args.breadcrumb ? `<div slot="breadcrumb">${args.breadcrumb}</div>` : null}
  ${args.search ? `<div slot="search">${args.search}</div>` : null}
  ${args.skipTo ? `<div slot="skip-to-nav">${args.skipTo}</div>` : null}
  ${args.toggle ? `<div slot="toggle">${args.toggle}</div>` : null}
  ${args.banner ? `<div slot="banner">${args.banner}</div>` : null}
</gcds-header>

<!-- React code -->
<GcdsHeader
  langHref="${args.langHref}"
  skipToHref="${args.skipToHref}"
  ${
    !args.signatureHasLink
      ? `signatureHasLink="${args.signatureHasLink}"`
      : null
  }
  ${
    args.signatureVariant != 'colour'
      ? `signatureVariant="${args.signatureVariant}"`
      : null
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.menu ? `<div slot="menu">${args.menu}</div>` : null}
  ${args.breadcrumb ? `<div slot="breadcrumb">${args.breadcrumb}</div>` : null}
  ${args.search ? `<div slot="search">${args.search}</div>` : null}
  ${args.skipTo ? `<div slot="skip-to-nav">${args.skipTo}</div>` : null}
  ${args.toggle ? `<div slot="toggle">${args.toggle}</div>` : null}
  ${args.banner ? `<div slot="banner">${args.banner}</div>` : null}
</GcdsHeader>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-header
  lang-href="${args.langHref}"
  skip-to-href="${args.skipToHref}"
  ${
    !args.signatureHasLink
      ? `signature-has-link="${args.signatureHasLink}"`
      : null
  }
  ${
    args.signatureVariant != 'colour'
      ? `signature-variant="${args.signatureVariant}"`
      : null
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.menu ? `<div slot="menu">${args.menu}</div>` : null}
  ${args.breadcrumb ? `<div slot="breadcrumb">${args.breadcrumb}</div>` : null}
  ${args.search ? `<div slot="search">${args.search}</div>` : null}
  ${args.toggle ? `<div slot="toggle">${args.toggle}</div>` : null}
  ${args.banner ? `<div slot="banner">${args.banner}</div>` : null}
</gcds-header>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  menu: '',
  breadcrumb: '',
  search: '',
  skipTo: '',
  toggle: '',
  banner: '',
  lang: 'en',
};

export const SkipTo = Template.bind({});
SkipTo.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  skipTo: 'Skip-to-nav slot',
  lang: 'en',
};

export const Banner = Template.bind({});
Banner.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  banner: 'Banner slot',
  lang: 'en',
};

export const Toggle = Template.bind({});
Toggle.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  toggle: 'Toggle slot',
  lang: 'en',
};

export const Menu = Template.bind({});
Menu.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  menu: 'Menu slot',
  lang: 'en',
};

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  breadcrumb: 'Breadcrumbs slot',
  lang: 'en',
};

export const All = Template.bind({});
All.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  skipTo: 'Skip-to-nav slot',
  banner: 'Banner slot',
  toggle: 'Toggle slot',
  menu: 'Menu slot',
  breadcrumb: 'Breadcrumbs slot',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  menu: '',
  breadcrumb: '',
  search: '',
  skipTo: '',
  toggle: '',
  banner: '',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  menu: '',
  breadcrumb: '',
  search: '',
  skipTo: '',
  toggle: '',
  banner: '',
  lang: 'en',
};
