export default {
  title: 'Components/Container',

  argTypes: {
    // Props
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    border: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    layout: {
      control: { type: 'select' },
      options: ['full', 'page'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    margin: {
      control: { type: 'select' },
      options: [
        '0',
        '25',
        '50',
        '75',
        '100',
        '125',
        '150',
        '175',
        '200',
        '225',
        '250',
        '300',
        '350',
        '400',
        '450',
        '500',
        '550',
        '600',
        '650',
        '700',
        '750',
        '800',
        '850',
        '900',
        '950',
        '1000',
        '1050',
        '1100',
        '1150',
        '1200',
        '1250',
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
        '25',
        '50',
        '75',
        '100',
        '125',
        '150',
        '175',
        '200',
        '225',
        '250',
        '300',
        '350',
        '400',
        '450',
        '500',
        '550',
        '600',
        '650',
        '700',
        '750',
        '800',
        '850',
        '900',
        '950',
        '1000',
        '1050',
        '1100',
        '1150',
        '1200',
        '1250',
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
  } ${args.align ? `align="${args.align}"` : null} ${
    args.tag != 'div' ? `tag="${args.tag}"` : null
  } ${
    args.layout ? `layout="${args.layout}"` : null
  } ${args.margin ? `margin="${args.margin}"` : null} ${
    args.padding ? `padding="${args.padding}"` : null
  }>
  ${args.default ? args.default : null}
</gcds-container>

<!-- React code -->
<GcdsContainer ${args.size != 'full' ? `size="${args.size}"` : null} ${
    args.border ? 'border' : null
  } ${args.align ? `align="${args.align}"` : null} ${
    args.tag != 'div' ? `tag="${args.tag}"` : null
  } ${
    args.layout ? `layout="${args.layout}"` : null
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
<gcds-container size="md" border margin="25">Margin 25</gcds-container>
<gcds-container size="md" border margin="50">Margin 50</gcds-container>
<gcds-container size="md" border margin="75">Margin 75</gcds-container>
<gcds-container size="md" border margin="100">Margin 100</gcds-container>
<gcds-container size="md" border margin="125">Margin 125</gcds-container>
<gcds-container size="md" border margin="150">Margin 150</gcds-container>
<gcds-container size="md" border margin="175">Margin 175</gcds-container>
<gcds-container size="md" border margin="200">Margin 200</gcds-container>
<gcds-container size="md" border margin="225">Margin 225</gcds-container>
<gcds-container size="md" border margin="250">Margin 250</gcds-container>
<gcds-container size="md" border margin="300">Margin 300</gcds-container>
<gcds-container size="md" border margin="350">Margin 350</gcds-container>
<gcds-container size="md" border margin="400">Margin 400</gcds-container>
<gcds-container size="md" border margin="450">Margin 450</gcds-container>
<gcds-container size="md" border margin="500">Margin 500</gcds-container>
<gcds-container size="md" border margin="550">Margin 550</gcds-container>
<gcds-container size="md" border margin="600">Margin 600</gcds-container>
<gcds-container size="md" border margin="650">Margin 650</gcds-container>
<gcds-container size="md" border margin="700">Margin 700</gcds-container>
<gcds-container size="md" border margin="750">Margin 750</gcds-container>
<gcds-container size="md" border margin="800">Margin 800</gcds-container>
<gcds-container size="md" border margin="850">Margin 850</gcds-container>
<gcds-container size="md" border margin="900">Margin 900</gcds-container>
<gcds-container size="md" border margin="950">Margin 950</gcds-container>
<gcds-container size="md" border margin="1000">Margin 1000</gcds-container>
<gcds-container size="md" border margin="1050">Margin 1050</gcds-container>
<gcds-container size="md" border margin="1100">Margin 1100</gcds-container>
<gcds-container size="md" border margin="1150">Margin 1150</gcds-container>
<gcds-container size="md" border margin="1200">Margin 1200</gcds-container>
<gcds-container size="md" border margin="1250">Margin 1250</gcds-container>

<!-- React code -->
<GcdsContainer size="md" border margin="0">Margin 0</GcdsContainer>
<GcdsContainer size="md" border margin="25">Margin 25</GcdsContainer>
<GcdsContainer size="md" border margin="50">Margin 50</GcdsContainer>
<GcdsContainer size="md" border margin="75">Margin 75</GcdsContainer>
<GcdsContainer size="md" border margin="100">Margin 100</GcdsContainer>
<GcdsContainer size="md" border margin="125">Margin 125</GcdsContainer>
<GcdsContainer size="md" border margin="150">Margin 150</GcdsContainer>
<GcdsContainer size="md" border margin="175">Margin 175</GcdsContainer>
<GcdsContainer size="md" border margin="200">Margin 200</GcdsContainer>
<GcdsContainer size="md" border margin="225">Margin 225</GcdsContainer>
<GcdsContainer size="md" border margin="250">Margin 250</GcdsContainer>
<GcdsContainer size="md" border margin="300">Margin 300</GcdsContainer>
<GcdsContainer size="md" border margin="350">Margin 350</GcdsContainer>
<GcdsContainer size="md" border margin="400">Margin 400</GcdsContainer>
<GcdsContainer size="md" border margin="450">Margin 450</GcdsContainer>
<GcdsContainer size="md" border margin="500">Margin 500</GcdsContainer>
<GcdsContainer size="md" border margin="550">Margin 550</GcdsContainer>
<GcdsContainer size="md" border margin="600">Margin 600</GcdsContainer>
<GcdsContainer size="md" border margin="650">Margin 650</GcdsContainer>
<GcdsContainer size="md" border margin="700">Margin 700</GcdsContainer>
<GcdsContainer size="md" border margin="750">Margin 750</GcdsContainer>
<GcdsContainer size="md" border margin="800">Margin 800</GcdsContainer>
<GcdsContainer size="md" border margin="850">Margin 850</GcdsContainer>
<GcdsContainer size="md" border margin="900">Margin 900</GcdsContainer>
<GcdsContainer size="md" border margin="950">Margin 950</GcdsContainer>
<GcdsContainer size="md" border margin="1000">Margin 1000</GcdsContainer>
<GcdsContainer size="md" border margin="1050">Margin 1050</GcdsContainer>
<GcdsContainer size="md" border margin="1100">Margin 1100</GcdsContainer>
<GcdsContainer size="md" border margin="1150">Margin 1150</GcdsContainer>
<GcdsContainer size="md" border margin="1200">Margin 1200</GcdsContainer>
<GcdsContainer size="md" border margin="1250">Margin 1250</GcdsContainer>
`.replace(/ null/g, '');

const TemplatePadding = () =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-container size="md" border padding="0">Padding 0</gcds-container>
<gcds-container size="md" border padding="25">Padding 25</gcds-container>
<gcds-container size="md" border padding="50">Padding 50</gcds-container>
<gcds-container size="md" border padding="75">Padding 75</gcds-container>
<gcds-container size="md" border padding="100">Padding 100</gcds-container>
<gcds-container size="md" border padding="125">Padding 125</gcds-container>
<gcds-container size="md" border padding="150">Padding 150</gcds-container>
<gcds-container size="md" border padding="175">Padding 175</gcds-container>
<gcds-container size="md" border padding="200">Padding 200</gcds-container>
<gcds-container size="md" border padding="225">Padding 225</gcds-container>
<gcds-container size="md" border padding="250">Padding 250</gcds-container>
<gcds-container size="md" border padding="300">Padding 300</gcds-container>
<gcds-container size="md" border padding="350">Padding 350</gcds-container>
<gcds-container size="md" border padding="400">Padding 400</gcds-container>
<gcds-container size="md" border padding="450">Padding 450</gcds-container>
<gcds-container size="md" border padding="500">Padding 500</gcds-container>
<gcds-container size="md" border padding="550">Padding 550</gcds-container>
<gcds-container size="md" border padding="600">Padding 600</gcds-container>
<gcds-container size="md" border padding="650">Padding 650</gcds-container>
<gcds-container size="md" border padding="700">Padding 700</gcds-container>
<gcds-container size="md" border padding="750">Padding 750</gcds-container>
<gcds-container size="md" border padding="800">Padding 800</gcds-container>
<gcds-container size="md" border padding="850">Padding 850</gcds-container>
<gcds-container size="md" border padding="900">Padding 900</gcds-container>
<gcds-container size="md" border padding="950">Padding 950</gcds-container>
<gcds-container size="md" border padding="1000">Padding 1000</gcds-container>
<gcds-container size="md" border padding="1050">Padding 1050</gcds-container>
<gcds-container size="md" border padding="1100">Padding 1100</gcds-container>
<gcds-container size="md" border padding="1150">Padding 1150</gcds-container>
<gcds-container size="md" border padding="1200">Padding 1200</gcds-container>
<gcds-container size="md" border padding="1250">Padding 1250</gcds-container>

<!-- React code -->
<GcdsContainer size="md" border padding="0">Padding 0</GcdsContainer>
<GcdsContainer size="md" border padding="25">Padding 25</GcdsContainer>
<GcdsContainer size="md" border padding="50">Padding 50</GcdsContainer>
<GcdsContainer size="md" border padding="75">Padding 75</GcdsContainer>
<GcdsContainer size="md" border padding="100">Padding 100</GcdsContainer>
<GcdsContainer size="md" border padding="125">Padding 125</GcdsContainer>
<GcdsContainer size="md" border padding="150">Padding 150</GcdsContainer>
<GcdsContainer size="md" border padding="175">Padding 175</GcdsContainer>
<GcdsContainer size="md" border padding="200">Padding 200</GcdsContainer>
<GcdsContainer size="md" border padding="225">Padding 225</GcdsContainer>
<GcdsContainer size="md" border padding="250">Padding 250</GcdsContainer>
<GcdsContainer size="md" border padding="300">Padding 300</GcdsContainer>
<GcdsContainer size="md" border padding="350">Padding 350</GcdsContainer>
<GcdsContainer size="md" border padding="400">Padding 400</GcdsContainer>
<GcdsContainer size="md" border padding="450">Padding 450</GcdsContainer>
<GcdsContainer size="md" border padding="500">Padding 500</GcdsContainer>
<GcdsContainer size="md" border padding="550">Padding 550</GcdsContainer>
<GcdsContainer size="md" border padding="600">Padding 600</GcdsContainer>
<GcdsContainer size="md" border padding="650">Padding 650</GcdsContainer>
<GcdsContainer size="md" border padding="700">Padding 700</GcdsContainer>
<GcdsContainer size="md" border padding="750">Padding 750</GcdsContainer>
<GcdsContainer size="md" border padding="800">Padding 800</GcdsContainer>
<GcdsContainer size="md" border padding="850">Padding 850</GcdsContainer>
<GcdsContainer size="md" border padding="900">Padding 900</GcdsContainer>
<GcdsContainer size="md" border padding="950">Padding 950</GcdsContainer>
<GcdsContainer size="md" border padding="1000">Padding 1000</GcdsContainer>
<GcdsContainer size="md" border padding="1050">Padding 1050</GcdsContainer>
<GcdsContainer size="md" border padding="1100">Padding 1100</GcdsContainer>
<GcdsContainer size="md" border padding="1150">Padding 1150</GcdsContainer>
<GcdsContainer size="md" border padding="1200">Padding 1200</GcdsContainer>
<GcdsContainer size="md" border padding="1250">Padding 1250</GcdsContainer>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-container
  ${args.size != 'full' ? `size="${args.size}"` : null}
  ${args.border ? 'border' : null}
  ${args.align ? `align="${args.align}"` : null}
  ${args.tag != 'div' ? `tag="${args.tag}"` : null}
  ${args.layout ? `layout="${args.layout}"` : null}
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
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container sizes ------

export const SizeFull = Template.bind({});
SizeFull.args = {
  size: 'full',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "full". You can replace this text with any content or other components.</p>',
};

export const SizeXl = Template.bind({});
SizeXl.args = {
  size: 'xl',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "xl". You can replace this text with any content or other components.</p>',
};

export const SizeLg = Template.bind({});
SizeLg.args = {
  size: 'lg',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "lg". You can replace this text with any content or other components.</p>',
};

export const SizeMd = Template.bind({});
SizeMd.args = {
  size: 'md',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "md". You can replace this text with any content or other components.</p>',
};

export const SizeSm = Template.bind({});
SizeSm.args = {
  size: 'sm',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "sm". You can replace this text with any content or other components.</p>',
};

export const SizeXs = Template.bind({});
SizeXs.args = {
  size: 'xs',
  border: true,
  tag: 'div',
  padding: '300',
  default:
    '<p>This is a responsive container, the size is set to "xs". You can replace this text with any content or other components.</p>',
};

// ------ Container align ------

export const AlignStart = Template.bind({});
AlignStart.args = {
  size: 'sm',
  border: true,
  align: 'start',
  tag: 'div',
  padding: '300',
  default: '<p>This container is aligned to the start.</p>',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  size: 'sm',
  border: true,
  align: 'center',
  tag: 'div',
  padding: '300',
  default: '<p>This container is aligned to the center.</p>',
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
  size: 'sm',
  border: true,
  align: 'end',
  tag: 'div',
  padding: '300',
  default: '<p>This container is aligned to the end.</p>',
};

// ------ Container layout ------

export const LayoutFull = Template.bind({});
LayoutFull.args = {
  size: 'full',
  border: true,
  tag: 'div',
  layout: 'full',
  padding: '300',
  default: '<p>This container spans the full width (100%) of its parent.</p>',
};

export const LayoutPage = Template.bind({});
LayoutPage.args = {
  size: 'full',
  border: true,
  tag: 'main',
  layout: 'page',
  padding: '300',
  default:
    '<p>This container uses a max width of 1140px and switches to 90% width on smaller screens to scale consistently with core page layout components such as the header and footer.</p>',
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
  padding: '300',
  border: true,
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};

// ------ Container playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  size: 'full',
  tag: 'div',
  padding: '300',
  align: 'start',
  border: true,
  default:
    '<p>This is a responsive container, you can replace this text with any content or other components.</p>',
};
