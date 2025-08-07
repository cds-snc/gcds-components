import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Breadcrumbs',

  argTypes: {
    // Props
    hideCanadaLink: {
      name: 'hide-canada-link',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ...langProp,

    // Slots
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
<gcds-breadcrumbs ${args.hideCanadaLink ? `hide-canada-link` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
  ${
    args.default ||
    `<gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>`
  }
</gcds-breadcrumbs>

<!-- React code -->
<GcdsBreadcrumbs ${args.hideCanadaLink ? `hideCanadaLink` : null} ${
    args.lang != 'en' ? `lang="${args.lang}"` : null
  }>
  ${
    args.default ||
    `<GcdsBreadcrumbsItem href="#">Home page</GcdsBreadcrumbsItem>
  <GcdsBreadcrumbsItem href="#">Parent page link</GcdsBreadcrumbsItem>`
  }
</GcdsBreadcrumbs>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-breadcrumbs
  ${args.hideCanadaLink ? `hide-canada-link` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${
    args.default ||
    `<gcds-breadcrumbs-item href="#">Home page</gcds-breadcrumbs-item>
  <gcds-breadcrumbs-item href="#">Parent page link</gcds-breadcrumbs-item>`
  }
</gcds-breadcrumbs>
`;

// ------ Breadcrumbs default ------

export const Default = Template.bind({});
Default.args = {
  hideCanadaLink: false,
  lang: 'en',
};

// ------ Breadcrumbs Canada link ------

export const WithoutCanadaLink = Template.bind({});
WithoutCanadaLink.args = {
  hideCanadaLink: true,
  lang: 'en',
};

// ------ Breadcrumbs events & props ------

export const Props = Template.bind({});
Props.args = {
  hideCanadaLink: false,
  lang: 'en',
  default: '',
};

// ------ Breadcrumbs playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  hideCanadaLink: false,
  lang: 'en',
  default: '',
};
