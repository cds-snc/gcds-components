import { langProp } from '../../../utils/storybook/component-properties';

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
    ...langProp,

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

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null } ${args.lang != "en" ? `lang="${args.lang}"` : null}>
  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>

<!-- React code -->
<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${args.lang != "en" ? `lang="${args.lang}"` : null}>
  <GcdsBreadcrumbsItem href="${args.href}">Home page</GcdsBreadcrumbsItem>
  <GcdsBreadcrumbsItem href="${args.href}">Parent page link</GcdsBreadcrumbsItem>
</GcdsBreadcrumbs>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
<gcds-breadcrumbs
  ${args.hideCanadaLink ? `hide-canada-link` : null }
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <gcds-breadcrumbs-item href="${args.href}">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="${args.href}">Parent page link</gcds-breadcrumbs-item>
</gcds-breadcrumbs>
`);

// ------ Breadcrumbs default ------

export const Default = Template.bind({});
Default.args = {
  hideCanadaLink: false,
  href: '#',
  lang: 'en',
};

// ------ Breadcrumbs Canada link ------

export const WithoutCanadaLink = Template.bind({});
WithoutCanadaLink.args = {
  hideCanadaLink: true,
  href: '#',
  lang: 'en',
};

// ------ Breadcrumbs events & props ------

export const Props = Template.bind({});
Props.args = {
  hideCanadaLink: false,
  href: '#',
  lang: 'en',
};

// ------ Breadcrumbs playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  hideCanadaLink: false,
  href: '#',
  lang: 'en',
};
