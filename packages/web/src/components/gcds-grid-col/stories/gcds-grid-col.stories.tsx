export default {
  title: 'Components/Grid column',

  argTypes: {
    // Props
    desktop: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12' },
      },
    },
    tablet: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4', '5', '6'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '6' },
      },
    },
    tag: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
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
<gcds-grid>
  <gcds-grid-col ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
      args.tablet ? `tablet="${args.tablet}"` : null
    } ${args.desktop ? `desktop="${args.desktop}"` : null}>${args.default ? args.default : null}</gcds-grid-col>
  <gcds-grid-col ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
      args.tablet ? `tablet="${args.tablet}"` : null
    } ${args.desktop ? `desktop="${args.desktop}"` : null}>${args.default ? args.default : null}</gcds-grid-col>
</gcds-grid>

<!-- React code -->
<GcdsGrid>
  <GcdsGridCol ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.tablet ? `tablet="${args.tablet}"` : null
    } ${args.desktop ? `desktop="${args.desktop}"` : null}>${args.default ? args.default : null}</GcdsGridCol>
  <GcdsGridCol ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.tablet ? `tablet="${args.tablet}"` : null
    } ${args.desktop ? `desktop="${args.desktop}"` : null}>${args.default ? args.default : null}</GcdsGridCol>
</GcdsGrid>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-grid>
  <gcds-grid-col
    ${args.tag != 'div' ? `tag="${args.tag}"` : null}
    ${args.tablet ? `Tablet="${args.tablet}"` : null}
    ${args.desktop ? `Desktop="${args.desktop}"` : null}
  >
    ${args.default ? args.default : null}
  </gcds-grid-col>
  <gcds-grid-col
    ${args.tag != 'div' ? `tag="${args.tag}"` : null}
    ${args.tablet ? `Tablet="${args.tablet}"` : null}
    ${args.desktop ? `Desktop="${args.desktop}"` : null}
  >
    ${args.default ? args.default : null}
  </gcds-grid-col>
</gcds-grid>
`;

// ------ Grid column default ------

export const Default = Template.bind({});
Default.args = {
  desktop: '6',
  tablet: '3',
  tag: 'div',
  default: `This is some example content to display the grid column component.`,
};

// ------ Grid column viewport sizes ------

export const Tablet = Template.bind({});
Tablet.args = {
  desktop: '',
  tablet: '3',
  tag: 'div',
  default: `This is some example content to display the grid column component.`,
};

export const Desktop = Template.bind({});
Desktop.args = {
  desktop: '6',
  tablet: '3',
  tag: 'div',
  default: `This is some example content to display the grid column component.`,
};

// ------ Grid column tag ------

export const Tag = Template.bind({});
Tag.args = {
  desktop: '6',
  tablet: '3',
  tag: 'p',
  default: `This is some example content to display the grid column component.`,
};

// ------ Grid column events & props ------

export const Props = Template.bind({});
Props.args = {
  desktop: '6',
  tablet: '3',
  tag: 'div',
  default: `This is some example content to display the grid column component.`,
};

// ------ Grid column playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  desktop: '6',
  tablet: '3',
  tag: 'div',
  default: `This is some example content to display the grid column component.`,
};
