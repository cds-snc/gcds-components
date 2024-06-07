export default {
  title: 'Components/Heading',

  argTypes: {
    // Props
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    characterLimit: {
      name: 'character-limit',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    marginTop: {
      name: 'margin-top',
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
        defaultValue: { summary: 'h1: 0, h2-h6: 500' },
      },
    },
    marginBottom: {
      name: 'margin-bottom',
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
        defaultValue: { summary: '400' },
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
<gcds-heading tag="${args.tag}" ${
    !args.characterLimit ? `character-limit="${args.characterLimit}"` : null
  } ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${
    args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null
  }>
  ${args.default}
</gcds-heading>

<!-- React code -->
<GcdsHeading tag="${args.tag}" ${
    !args.characterLimit ? `characterLimit="${args.characterLimit}"` : null
  } ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${
    args.marginBottom ? `marginBottom="${args.marginBottom}"` : null
  }>
  ${args.default}
</GcdsHeading>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-heading
  tag="${args.tag}"
  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}
  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}
>
  ${args.default}
</gcds-heading>
`;

// ------ Heading default ------

export const Default = Template.bind({});
Default.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading',
};

// ------ Heading level ------

export const LevelH1 = Template.bind({});
LevelH1.args = {
  tag: 'h1',
  characterLimit: true,
  default: 'Heading level 1',
};

export const LevelH2 = Template.bind({});
LevelH2.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading level 2',
};

export const LevelH3 = Template.bind({});
LevelH3.args = {
  tag: 'h3',
  characterLimit: true,
  default: 'Heading level 3',
};

export const LevelH4 = Template.bind({});
LevelH4.args = {
  tag: 'h4',
  characterLimit: true,
  default: 'Heading level 4',
};

export const LevelH5 = Template.bind({});
LevelH5.args = {
  tag: 'h5',
  characterLimit: true,
  default: 'Heading level 5',
};

export const LevelH6 = Template.bind({});
LevelH6.args = {
  tag: 'h6',
  characterLimit: true,
  default: 'Heading level 6',
};

// ------ Heading events & props ------

export const Props = Template.bind({});
Props.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading',
};

// ------ Heading playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading',
};
