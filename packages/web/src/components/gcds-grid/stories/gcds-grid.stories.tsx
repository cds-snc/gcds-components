export default {
  title: 'Components/Grid',

  argTypes: {
    // Props
    columns: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    columnsTablet: {
      name: 'columns-tablet',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    columnsDesktop: {
      name: 'columns-desktop',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    container: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    display: {
      control: { type: 'select' },
      options: ['grid', 'inline-grid'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'grid' },
      },
    },
    equalRowHeight: {
      name: 'equal-row-height',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    tag: {
      control: { type: 'select' },
      options: [
        'article',
        'aside',
        'div',
        'dl',
        'main',
        'nav',
        'ol',
        'section',
        'ul',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
      },
    },
    alignContent: {
      name: 'align-content',
      control: { type: 'select' },
      options: [
        'center',
        'end',
        'space-around',
        'space-between',
        'space-evenly',
        'start',
        'stretch',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    justifyContent: {
      name: 'justify-content',
      control: { type: 'select' },
      options: [
        'center',
        'end',
        'space-around',
        'space-between',
        'space-evenly',
        'start',
        'stretch',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    placeContent: {
      name: 'place-content',
      control: { type: 'select' },
      options: [
        'center',
        'end',
        'space-around',
        'space-between',
        'space-evenly',
        'start',
        'stretch',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    alignItems: {
      name: 'align-items',
      control: { type: 'select' },
      options: ['baseline', 'center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    justifyItems: {
      name: 'justify-items',
      control: { type: 'select' },
      options: ['center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    placeItems: {
      name: 'place-items',
      control: { type: 'select' },
      options: ['center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
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
<gcds-grid ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.container != 'full' ? `container="${args.container}"` : null
  } ${
    args.columnsDesktop ? `columns-desktop="${args.columnsDesktop}"` : null
  } ${args.columnsTablet ? `columns-tablet="${args.columnsTablet}"` : null} ${
    args.columns ? `columns="${args.columns}"` : null
  } ${args.alignContent ? `align-content="${args.alignContent}"` : null} ${
    args.justifyContent ? `justify-content="${args.justifyContent}"` : null
  } ${args.placeContent ? `place-content="${args.placeContent}"` : null} ${
    args.alignItems ? `align-items="${args.alignItems}"` : null
  } ${args.justifyItems ? `justify-items="${args.justifyItems}"` : null} ${
    args.placeItems ? `place-items="${args.placeItems}"` : null
  } ${args.equalRowHeight ? `equal-row-height` : null}>
  ${args.default ? args.default : null}
</gcds-grid>

<!-- React code -->
<GcdsGrid ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.container != 'full' ? `container="${args.container}"` : null
  } ${args.columnsDesktop ? `columnsDesktop="${args.columnsDesktop}"` : null} ${
    args.columnsTablet ? `columnsTablet="${args.columnsTablet}"` : null
  } ${args.columns ? `columns="${args.columns}"` : null} ${
    args.alignContent ? `alignContent="${args.alignContent}"` : null
  } ${args.justifyContent ? `justifyContent="${args.justifyContent}"` : null} ${
    args.placeContent ? `placeContent="${args.placeContent}"` : null
  } ${args.alignItems ? `alignItems="${args.alignItems}"` : null} ${
    args.justifyItems ? `justifyItems="${args.justifyItems}"` : null
  } ${args.placeItems ? `placeItems="${args.placeItems}"` : null} ${
    args.equalRowHeight ? `equalRowHeight` : null
  }>
  ${args.default ? args.default : null}
</GcdsGrid>
`.replace(/ null/g, '');

const TemplateIndividual = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-grid>
  <gcds-grid-col tablet="3" desktop="6">${
    args.default ? args.default : null
  }</gcds-grid-col>
  <gcds-grid-col tablet="3" desktop="6">${
    args.default ? args.default : null
  } </gcds-grid-col>
</gcds-grid>

<!-- React code -->
<GcdsGrid>
  <GcdsGridCol tablet="3" desktop="6">${
    args.default ? args.default : null
  }</GcdsGridCol>
  <GcdsGridCol tablet="3" desktop="6">${
    args.default ? args.default : null
  }</GcdsGridCol>
</GcdsGrid>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-grid
  ${args.tag != 'div' ? `tag="${args.tag}"` : null}
  ${args.container != 'full' ? `container="${args.container}"` : null}
  ${args.columnsDesktop ? `columns-desktop="${args.columnsDesktop}"` : null}
  ${args.columnsTablet ? `columns-tablet="${args.columnsTablet}"` : null}
  ${args.columns ? `columns="${args.columns}"` : null}
  ${args.alignContent ? `align-content="${args.alignContent}"` : null}
  ${args.justifyContent ? `justify-content="${args.justifyContent}"` : null}
  ${args.placeContent ? `place-content="${args.placeContent}"` : null}
  ${args.alignItems ? `align-items="${args.alignItems}"` : null}
  ${args.justifyItems ? `justify-items="${args.justifyItems}"` : null}
  ${args.placeItems ? `place-items="${args.placeItems}"` : null}
  ${args.equalRowHeight ? `equal-row-height` : null}
>
  ${args.default ? args.default : null}
</gcds-grid>
`;

// ------ Grid default ------

export const Default = Template.bind({});
Default.args = {
  columnsDesktop: '1fr 1fr 1fr 1fr',
  columnsTablet: '1fr 1fr',
  columns: '1fr',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

// ------ Grid columns ------

export const Columns = Template.bind({});
Columns.args = {
  columns: '1fr',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const ColumnsTablet = Template.bind({});
ColumnsTablet.args = {
  columns: '1fr',
  columnsTablet: '1fr 1fr',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const ColumnsDesktop = Template.bind({});
ColumnsDesktop.args = {
  columnsDesktop: '1fr 1fr 1fr 1fr',
  columnsTablet: '1fr 1fr',
  columns: '1fr',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

// ------ Grid types ------

export const Fluid = Template.bind({});
Fluid.args = {
  columnsDesktop: '1fr 1fr 1fr 1fr',
  columnsTablet: '1fr 1fr',
  columns: '1fr',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const Fixed = Template.bind({});
Fixed.args = {
  columns: 'repeat(auto-fit, minmax(100px, 250px))',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const Hybrid = Template.bind({});
Hybrid.args = {
  columns: 'repeat(auto-fit, minmax(400px, 1fr))',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const Individual = TemplateIndividual.bind({});
Individual.args = {
  container: 'full',
  tag: 'div',
  default: 'This is some example content to display the grid component.',
};

// ------ Grid tag ------

export const Tag = Template.bind({});
Tag.args = {
  columns: 'repeat(auto-fit, minmax(100px, 250px))',
  columnsDesktop: '',
  columnsTablet: '',
  container: 'full',
  tag: 'article',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

// ------ Grid events & props ------

export const Props = Template.bind({});
Props.args = {
  columns: 'repeat(auto-fit, minmax(100px, 200px))',
  columnsDesktop: '',
  columnsTablet: '',
  container: 'full',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

// ------ Grid playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  container: 'full',
  columns: 'repeat(auto-fit, minmax(250px, 1fr))',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};
