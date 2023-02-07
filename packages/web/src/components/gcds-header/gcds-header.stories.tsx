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
        defaultValue: { summary: false }
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
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-header
  lang-href="${args.langHref}"
  skip-to-href="${args.skipToHref}"
  signature-has-link="${args.signatureHasLink}"
  signature-variant="${args.signatureVariant}"
  lang="${args.lang}"
>
  ${args.menu && `<div slot="menu">${args.menu}</div>`}
  ${args.breadcrumb && `<div slot="breadcrumb">${args.breadcrumb}</div>`}
  ${args.search && `<div slot="search">${args.search}</div>`}
  ${args.toggle && `<div slot="toggle">${args.toggle}</div>`}
</gcds-header>

// React code
<GcdsHeader
  langHref="${args.langHref}"
  skipToHref="${args.skipToHref}"
  signatureHasLink="${args.signatureHasLink}"
  signatureVariant="${args.signatureVariant}"
  lang="${args.lang}"
>
  ${args.menu && `<div slot="menu">${args.menu}</div>`}
  ${args.breadcrumb && `<div slot="menu">${args.breadcrumb}</div>`}
  ${args.search && `<div slot="menu">${args.search}</div>`}
  ${args.toggle && `<div slot="toggle">${args.toggle}</div>`}
</GcdsHeader>
`;

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
  lang: 'en'
};