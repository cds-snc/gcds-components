export default {
  title: 'Components/Container',

  argTypes: {
    // Props
    border: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    centered: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    mainContainer: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    margin: {
      control: { type: 'select' },
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
      },
    },
    padding: {
      control: { type: 'select' },
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
      },
    },
    size: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    tag: {
      control: 'text',
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
<gcds-container ${args.size != 'full' ? `size="${args.size}"` : null} ${
    args.border ? 'border' : null
  } ${args.centered ? 'centered' : null} ${
    args.tag != 'div' ? `tag="${args.tag}"` : null
  } ${
    args.mainContainer ? 'main-container' : null
  } ${args.margin ? `margin="${args.margin}"` : null} ${
    args.padding ? `padding="${args.padding}"` : null
  }>
  ${args.default ? args.default : null}
</gcds-container>

<!-- React code -->
<GcdsContainer ${args.size != 'full' ? `size="${args.size}"` : null} ${
    args.border ? 'border' : null
  } ${args.centered ? `centered` : null} ${
    args.tag != 'div' ? `tag="${args.tag}"` : null
  } ${
    args.mainContainer ? 'mainContainer' : null
  } ${args.margin ? `margin="${args.margin}"` : null} ${
    args.padding ? `padding="${args.padding}"` : null
  }>
  ${args.default ? args.default : null}
</GcdsContainer>
`.replace(/ null/g, '');

const TemplateMargin = () =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-container size="md" border margin="0">Margin 0</gcds-container>
<gcds-container size="md" border margin="50">Margin 50</gcds-container>
<gcds-container size="md" border margin="100">Margin 100</gcds-container>
<gcds-container size="md" border margin="150">Margin 150</gcds-container>
<gcds-container size="md" border margin="200">Margin 200</gcds-container>
<gcds-container size="md" border margin="250">Margin 250</gcds-container>
<gcds-container size="md" border margin="300">Margin 300</gcds-container>
<gcds-container size="md" border margin="400">Margin 400</gcds-container>
<gcds-container size="md" border margin="450">Margin 450</gcds-container>
<gcds-container size="md" border margin="500">Margin 500</gcds-container>
<gcds-container size="md" border margin="550">Margin 550</gcds-container>
<gcds-container size="md" border margin="600">Margin 600</gcds-container>
<gcds-container size="md" border margin="700">Margin 700</gcds-container>
<gcds-container size="md" border margin="800">Margin 800</gcds-container>
<gcds-container size="md" border margin="900">Margin 900</gcds-container>
<gcds-container size="md" border margin="1000">Margin 1000</gcds-container>

<!-- React code -->
<GcdsContainer size="md" border margin="0">Margin 0</GcdsContainer>
<GcdsContainer size="md" border margin="50">Margin 50</GcdsContainer>
<GcdsContainer size="md" border margin="100">Margin 100</GcdsContainer>
<GcdsContainer size="md" border margin="150">Margin 150</GcdsContainer>
<GcdsContainer size="md" border margin="200">Margin 200</GcdsContainer>
<GcdsContainer size="md" border margin="250">Margin 250</GcdsContainer>
<GcdsContainer size="md" border margin="300">Margin 300</GcdsContainer>
<GcdsContainer size="md" border margin="400">Margin 400</GcdsContainer>
<GcdsContainer size="md" border margin="450">Margin 450</GcdsContainer>
<GcdsContainer size="md" border margin="500">Margin 500</GcdsContainer>
<GcdsContainer size="md" border margin="550">Margin 550</GcdsContainer>
<GcdsContainer size="md" border margin="600">Margin 600</GcdsContainer>
<GcdsContainer size="md" border margin="700">Margin 700</GcdsContainer>
<GcdsContainer size="md" border margin="800">Margin 800</GcdsContainer>
<GcdsContainer size="md" border margin="900">Margin 900</GcdsContainer>
<GcdsContainer size="md" border margin="1000">Margin 1000</GcdsContainer>
`.replace(/ null/g, '');

const TemplatePadding = () =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-container size="md" border padding="0">Padding 0</gcds-container>
<gcds-container size="md" border padding="50">Padding 50</gcds-container>
<gcds-container size="md" border padding="100">Padding 100</gcds-container>
<gcds-container size="md" border padding="150">Padding 150</gcds-container>
<gcds-container size="md" border padding="200">Padding 200</gcds-container>
<gcds-container size="md" border padding="250">Padding 250</gcds-container>
<gcds-container size="md" border padding="300">Padding 300</gcds-container>
<gcds-container size="md" border padding="400">Padding 400</gcds-container>
<gcds-container size="md" border padding="450">Padding 450</gcds-container>
<gcds-container size="md" border padding="500">Padding 500</gcds-container>
<gcds-container size="md" border padding="550">Padding 550</gcds-container>
<gcds-container size="md" border padding="600">Padding 600</gcds-container>
<gcds-container size="md" border padding="700">Padding 700</gcds-container>
<gcds-container size="md" border padding="800">Padding 800</gcds-container>
<gcds-container size="md" border padding="900">Padding 900</gcds-container>
<gcds-container size="md" border padding="1000">Padding 1000</gcds-container>

<!-- React code -->
<GcdsContainer size="md" border padding="0">Padding 0</GcdsContainer>
<GcdsContainer size="md" border padding="50">Padding 50</GcdsContainer>
<GcdsContainer size="md" border padding="100">Padding 100</GcdsContainer>
<GcdsContainer size="md" border padding="150">Padding 150</GcdsContainer>
<GcdsContainer size="md" border padding="200">Padding 200</GcdsContainer>
<GcdsContainer size="md" border padding="250">Padding 250</GcdsContainer>
<GcdsContainer size="md" border padding="300">Padding 300</GcdsContainer>
<GcdsContainer size="md" border padding="400">Padding 400</GcdsContainer>
<GcdsContainer size="md" border padding="450">Padding 450</GcdsContainer>
<GcdsContainer size="md" border padding="500">Padding 500</GcdsContainer>
<GcdsContainer size="md" border padding="550">Padding 550</GcdsContainer>
<GcdsContainer size="md" border padding="600">Padding 600</GcdsContainer>
<GcdsContainer size="md" border padding="700">Padding 700</GcdsContainer>
<GcdsContainer size="md" border padding="800">Padding 800</GcdsContainer>
<GcdsContainer size="md" border padding="900">Padding 900</GcdsContainer>
<GcdsContainer size="md" border padding="1000">Padding 1000</GcdsContainer>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-container
  ${args.size != 'full' ? `size="${args.size}"` : null}
  ${args.border ? 'border' : null}
  ${args.centered ? 'centered' : null}
  ${args.tag != 'div' ? `tag="${args.tag}"` : null}
  ${args.mainContainer ? `main-container="${args.mainContainer}"` : null}
  ${args.margin ? `margin="${args.margin}"` : null}
  ${args.padding ? `padding="${args.padding}"` : null}
>
  ${args.default ? args.default : null}
</gcds-container>
`;

// ------ Container default ------

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  border: true,
  centered: false,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container sizes ------

export const SizeFull = Template.bind({});
SizeFull.args = {
  size: 'full',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "full". You can replace this text with any content or other components.</p>',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  size: 'xl',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "xl". You can replace this text with any content or other components.</p>',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  size: 'lg',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "lg". You can replace this text with any content or other components.</p>',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  size: 'md',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "md". You can replace this text with any content or other components.</p>',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  size: 'sm',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "sm". You can replace this text with any content or other components.</p>',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  size: 'xs',
  border: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default:
    '<p>This is a responsive container, the size is set to "xs". You can replace this text with any content or other components.</p>',
};

// ------ Container centered ------

export const Centered = Template.bind({});
Centered.args = {
  size: 'sm',
  border: true,
  centered: true,
  tag: 'div',
  mainContainer: false,
  padding: '400',
  default: '<p>This container is centered.</p>',
};

// ------ Main page container ------

export const MainContainer = Template.bind({});
MainContainer.args = {
  size: 'xl',
  border: true,
  tag: 'main',
  mainContainer: true,
  padding: '400',
  default: '<p>This container is the main page container.</p>',
};

// ------ Container margin ------

export const Margin = TemplateMargin.bind({});
Margin.args = {};

// ------ Container padding ------

export const Padding = TemplatePadding.bind({});
Padding.args = {};

// ------ Container events & props ------

export const Props = Template.bind({});
Props.args = {
  size: 'md',
  tag: 'div',
  mainContainer: false,
  padding: '400',
  centered: false,
  border: true,
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  size: 'full',
  tag: 'div',
  mainContainer: false,
  padding: '400',
  centered: false,
  border: true,
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};
