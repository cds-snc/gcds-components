export default {
  title: 'Components/Breadcrumb item',

  argTypes: {
    // Props
    href: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },

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
<gcds-breadcrumbs-item href="${args.href}">${args.default || 'Home'}</gcds-breadcrumbs-item>

<!-- React code -->
<GcdsBreadcrumbsItem href="${args.href}">${args.default || 'Home'}</GcdsBreadcrumbsItem>

`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-breadcrumbs-item href="${args.href}">${args.default || 'Home'}</gcds-breadcrumbs-item>
`;

// ------ Breadcrumbs default ------

export const Default = Template.bind({});
Default.args = {
  href: '#home',
  default: '',
};

// ------ Breadcrumbs events & props ------

export const Props = Template.bind({});
Props.args = {
  href: '#home',
  default: '',
};

// ------ Breadcrumbs playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  href: '#home',
  default: '',
};
