import { langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Header',

  argTypes: {
    // Props
    langHref: {
      name: 'lang-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    skipToHref: {
      name: 'skip-to-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    signatureHasLink: {
      name: 'signature-has-link',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
    },
    signatureVariant: {
      name: 'signature-variant',
      control: 'radio',
      options: ['colour', 'white'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'colour' }
      },
    },
    ...langProp,

    // Slots
    menu: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
    breadcrumb: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
    search: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
    toggle: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
    banner: {
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
<gcds-header
  lang-href="${args.langHref}"
  skip-to-href="${args.skipToHref}"
  ${!args.signatureHasLink ? `signature-has-link="${args.signatureHasLink}"` : null}
  ${args.signatureVariant != "colour" ? `signature-variant="${args.signatureVariant}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  ${args.menu ? `<div slot="menu">${args.menu}</div>` : null}
  ${args.breadcrumb ? `<div slot="breadcrumb">${args.breadcrumb}</div>` : null}
  ${args.search ? `<div slot="search">${args.search}</div>` : null}
  ${args.toggle ? `<div slot="toggle">${args.toggle}</div>` : null}
  ${args.banner ? `<div slot="banner">${args.banner}</div>` : null}
</gcds-header>

<!-- React code -->
<GcdsHeader
  langHref="${args.langHref}"
  skipToHref="${args.skipToHref}"
  ${!args.signatureHasLink ? `signatureHasLink="${args.signatureHasLink}"` : null}
  ${args.signatureVariant != "colour" ? `signatureVariant="${args.signatureVariant}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  ${args.menu ? `<div slot="menu">${args.menu}</div>` : null}
  ${args.breadcrumb ? `<div slot="menu">${args.breadcrumb}</div>` : null}
  ${args.search ? `<div slot="menu">${args.search}</div>` : null}
  ${args.toggle ? `<div slot="toggle">${args.toggle}</div>` : null}
  ${args.banner ? `<div slot="banner">${args.banner}</div>` : null}
</GcdsHeader>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  langHref: '#',
  skipToHref: '#',
  signatureHasLink: true,
  signatureVariant: 'colour',
  menu: '',
  breadcrumb: '',
  search: '',
  toggle: '',
  banner: '',
  lang: 'en'
};