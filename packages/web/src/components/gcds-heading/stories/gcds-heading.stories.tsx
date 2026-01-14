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
        defaultValue: { summary: 'h1: 0, h2-h6: 600' },
      },
    },
    headingRole: {
      name: 'heading-role',
      control: { type: 'select' },
      options: ['light', 'primary', 'secondary'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    marginBottom: {
      name: 'margin-bottom',
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
        defaultValue: { summary: '300' },
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
<gcds-heading
  tag="${args.tag}"
  ${args.headingRole != 'primary' ? `heading-role="${args.headingRole}"` : null}
  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}
  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}
  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}
>
  ${args.default}
</gcds-heading>

<!-- React code -->
<GcdsHeading
  tag="${args.tag}"
  ${args.headingRole != 'primary' ? `headingRole="${args.headingRole}"` : null}
  ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null}
  ${args.marginTop ? `marginTop="${args.marginTop}"` : null}
  ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}
  >
  ${args.default}
</GcdsHeading>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-heading
  tag="${args.tag}"
  ${args.headingRole != 'primary' ? `heading-role="${args.headingRole}"` : null}
  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}
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
  headingRole: 'primary',
};

export const LevelH2 = Template.bind({});
LevelH2.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading level 2',
  headingRole: 'primary',
};

export const LevelH3 = Template.bind({});
LevelH3.args = {
  tag: 'h3',
  characterLimit: true,
  default: 'Heading level 3',
  headingRole: 'primary',
};

export const LevelH4 = Template.bind({});
LevelH4.args = {
  tag: 'h4',
  characterLimit: true,
  default: 'Heading level 4',
  headingRole: 'primary',
};

export const LevelH5 = Template.bind({});
LevelH5.args = {
  tag: 'h5',
  characterLimit: true,
  default: 'Heading level 5',
  headingRole: 'primary',
};

export const LevelH6 = Template.bind({});
LevelH6.args = {
  tag: 'h6',
  characterLimit: true,
  default: 'Heading level 6',
  headingRole: 'primary',
};

export const rolePrimary = Template.bind({});
rolePrimary.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Primary heading role',
  headingRole: 'primary',
};

export const roleSecondary = Template.bind({});
roleSecondary.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Secondary heading role',
  headingRole: 'secondary',
};

export const roleLight = Template.bind({});
roleLight.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Light heading role',
  headingRole: 'light',
};

// ------ Heading events & props ------

export const Props = Template.bind({});
Props.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading',
  headingRole: 'primary',
};

// ------ Heading playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  tag: 'h2',
  characterLimit: true,
  default: 'Heading',
  headingRole: 'primary',
};
