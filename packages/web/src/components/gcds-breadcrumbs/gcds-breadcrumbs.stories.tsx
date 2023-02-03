import { html } from 'lit-html';

export default {
  title: 'Components/Breadcrumbs',

  argTypes: {
    // Props
    hideCanadaLink: {
      name: 'hide-canada-link',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    href: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
  },
};

const Template = (args) => html`
// Web Component (Angular, Vue)
<gcds-breadcrumbs
  hide-canada-link="${args.hideCanadaLink}"
>
  <gcds-breadcrumbs-item href="${args.href}">Travel and tourism</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="${args.href}">Immigration and citizenship</gcds-breadcrumbs-item>
</gcds-breadcrumbs>

// React code
<GcdsBreadcrumbs
  hideCanadaLink="${args.hideCanadaLink}"
>
  <GcdsBreadcrumbsItem href="${args.href}">Travel and tourism</GcdsBreadcrumbsItem>
  <GcdsBreadcrumbsItem href="${args.href}">Immigration and citizenship</GcdsBreadcrumbsItem>
</GcdsBreadcrumbs>
`;

export const Example = Template.bind({});
Example.args = {
  hideCanadaLink: false,
  href: '#',
  // default: `
  //   <gcds-breadcrumbs-item>Travel and tourism</gcds-breadcrumbs-item>
  //   <gcds-breadcrumbs-item>Immigration and citizenship</gcds-breadcrumbs-item>
  // `,
};