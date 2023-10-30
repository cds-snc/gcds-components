export default {
  title: 'Components/Grid',

  argTypes: {
    // Props
    columns: {
      control: 'text',
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
=======
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
>>>>>>> develop
    },
    columnsTablet: {
      name: 'columns-tablet',
      control: 'text',
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
      }
=======
        defaultValue: { summary: '-' },
      },
>>>>>>> develop
    },
    columnsDesktop: {
      name: 'columns-desktop',
      control: 'text',
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
      }
=======
        defaultValue: { summary: '-' },
      },
>>>>>>> develop
    },
    container: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
=======
        defaultValue: { summary: '-' },
>>>>>>> develop
      },
    },
    display: {
      control: { type: 'select' },
      options: ['grid', 'inline-grid'],
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: 'grid' }
=======
        defaultValue: { summary: 'grid' },
>>>>>>> develop
      },
    },
    gap: {
      control: { type: 'select' },
<<<<<<< HEAD
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
=======
      options: [
        '0',
        '50',
        '100',
        '150',
        '200',
        '250',
        '300',
        '400',
        '450',
        '500',
        '550',
        '600',
        '700',
        '800',
        '900',
        '1000',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
>>>>>>> develop
      },
    },
    tag: {
      control: 'text',
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: 'div' }
      }
=======
        defaultValue: { summary: 'div' },
      },
>>>>>>> develop
    },
    alignContent: {
      name: 'align-content',
      control: { type: 'select' },
<<<<<<< HEAD
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
=======
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
>>>>>>> develop
      },
    },
    justifyContent: {
      name: 'justify-content',
      control: { type: 'select' },
<<<<<<< HEAD
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
=======
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
>>>>>>> develop
      },
    },
    placeContent: {
      name: 'place-content',
      control: { type: 'select' },
<<<<<<< HEAD
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
=======
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
>>>>>>> develop
      },
    },
    alignItems: {
      name: 'align-items',
      control: { type: 'select' },
      options: ['baseline', 'center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
=======
        defaultValue: { summary: '-' },
>>>>>>> develop
      },
    },
    justifyItems: {
      name: 'justify-items',
      control: { type: 'select' },
      options: ['center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
=======
        defaultValue: { summary: '-' },
>>>>>>> develop
      },
    },
    placeItems: {
      name: 'place-items',
      control: { type: 'select' },
      options: ['center', 'end', 'start', 'stretch'],
      table: {
        type: { summary: 'string' },
<<<<<<< HEAD
        defaultValue: { summary: '-' }
=======
        defaultValue: { summary: '-' },
>>>>>>> develop
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
<<<<<<< HEAD
      }
=======
      },
>>>>>>> develop
    },
  },
};

<<<<<<< HEAD
const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-grid ${args.tag != "div" ? `tag="${args.tag}"`: null} ${args.container != "full" ? `container="${args.container}"`: null} ${args.columnsDesktop ? `columns-desktop="${args.columnsDesktop}"` : null} ${args.columnsTablet ? `columns-tablet="${args.columnsTablet}"` : null} ${args.columns ? `columns="${args.columns}"` : null} ${args.gap ? `gap="${args.gap}"` : null} ${args.alignContent ? `align-content="${args.alignContent}"` : null} ${args.justifyContent ? `justify-content="${args.justifyContent}"` : null} ${args.placeContent ? `place-content="${args.placeContent}"` : null} ${args.alignItems ? `align-items="${args.alignItems}"` : null} ${args.justifyItems ? `justify-items="${args.justifyItems}"` : null} ${args.placeItems ? `place-items="${args.placeItems}"` : null}>
=======
const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-grid ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.container != 'full' ? `container="${args.container}"` : null
  } ${
    args.columnsDesktop ? `columns-desktop="${args.columnsDesktop}"` : null
  } ${args.columnsTablet ? `columns-tablet="${args.columnsTablet}"` : null} ${
    args.columns ? `columns="${args.columns}"` : null
  } ${args.gap ? `gap="${args.gap}"` : null} ${
    args.alignContent ? `align-content="${args.alignContent}"` : null
  } ${
    args.justifyContent ? `justify-content="${args.justifyContent}"` : null
  } ${args.placeContent ? `place-content="${args.placeContent}"` : null} ${
    args.alignItems ? `align-items="${args.alignItems}"` : null
  } ${args.justifyItems ? `justify-items="${args.justifyItems}"` : null} ${
    args.placeItems ? `place-items="${args.placeItems}"` : null
  }>
>>>>>>> develop
  ${args.default ? args.default : null}
</gcds-grid>

<!-- React code -->
<<<<<<< HEAD
<GcdsGrid ${args.tag != "div" ? `tag="${args.tag}"`: null} ${args.container != "full" ? `container="${args.container}"`: null} ${args.columnsDesktop ? `columnsDesktop="${args.columnsDesktop}"` : null} ${args.columnsTablet ? `columnsTablet="${args.columnsTablet}"` : null} ${args.columns ? `columns="${args.columns}"` : null} ${args.gap ? `gap="${args.gap}"` : null} ${args.alignContent ? `alignContent="${args.alignContent}"` : null} ${args.justifyContent ? `justifyContent="${args.justifyContent}"` : null} ${args.placeContent ? `placeContent="${args.placeContent}"` : null} ${args.alignItems ? `alignItems="${args.alignItems}"` : null} ${args.justifyItems ? `justifyItems="${args.justifyItems}"` : null} ${args.placeItems ? `placeItems="${args.placeItems}"` : null}>
  ${args.default ? args.default : null}
</GcdsGrid>
`).replace(/ null/g, '');

const TemplatePlayground = (args) => (`
<gcds-grid
  ${args.tag != "div" ? `tag="${args.tag}"`: null}
  ${args.container != "full" ? `container="${args.container}"`: null}
=======
<GcdsGrid ${args.tag != 'div' ? `tag="${args.tag}"` : null} ${
    args.container != 'full' ? `container="${args.container}"` : null
  } ${args.columnsDesktop ? `columnsDesktop="${args.columnsDesktop}"` : null} ${
    args.columnsTablet ? `columnsTablet="${args.columnsTablet}"` : null
  } ${args.columns ? `columns="${args.columns}"` : null} ${
    args.gap ? `gap="${args.gap}"` : null
  } ${args.alignContent ? `alignContent="${args.alignContent}"` : null} ${
    args.justifyContent ? `justifyContent="${args.justifyContent}"` : null
  } ${args.placeContent ? `placeContent="${args.placeContent}"` : null} ${
    args.alignItems ? `alignItems="${args.alignItems}"` : null
  } ${args.justifyItems ? `justifyItems="${args.justifyItems}"` : null} ${
    args.placeItems ? `placeItems="${args.placeItems}"` : null
  }>
  ${args.default ? args.default : null}
</GcdsGrid>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-grid
  ${args.tag != 'div' ? `tag="${args.tag}"` : null}
  ${args.container != 'full' ? `container="${args.container}"` : null}
>>>>>>> develop
  ${args.columnsDesktop ? `columns-desktop="${args.columnsDesktop}"` : null}
  ${args.columnsTablet ? `columns-tablet="${args.columnsTablet}"` : null}
  ${args.columns ? `columns="${args.columns}"` : null}
  ${args.gap ? `gap="${args.gap}"` : null}
  ${args.alignContent ? `align-content="${args.alignContent}"` : null}
  ${args.justifyContent ? `justify-content="${args.justifyContent}"` : null}
  ${args.placeContent ? `place-content="${args.placeContent}"` : null}
  ${args.alignItems ? `align-items="${args.alignItems}"` : null}
  ${args.justifyItems ? `justify-items="${args.justifyItems}"` : null}
  ${args.placeItems ? `place-items="${args.placeItems}"` : null}
>
  ${args.default ? args.default : null}
</gcds-grid>
<<<<<<< HEAD
`);
=======
`;
>>>>>>> develop

// ------ Grid default ------

export const Default = Template.bind({});
Default.args = {
  columnsDesktop: '1fr 1fr 1fr 1fr',
  columnsTablet: '1fr 1fr',
  columns: '1fr',
  container: 'full',
  gap: '400',
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
  gap: '200',
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
  gap: '200',
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
  gap: '200',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

// ------ Grid equal width column ------

export const EqualFlexbile = Template.bind({});
EqualFlexbile.args = {
  columnsDesktop: '1fr 1fr 1fr',
  columnsTablet: '1fr 1fr',
  columns: '1fr',
  container: 'full',
  gap: '400',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};

export const EqualWidth = Template.bind({});
EqualWidth.args = {
  columns: 'repeat(auto-fit, minmax(100px, 250px))',
  container: 'full',
  gap: '400',
  tag: 'div',
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
  gap: '400',
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
  gap: '400',
  tag: 'div',
  default: `<p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>
  <p>This is some example content to display the grid component.</p>`,
};
