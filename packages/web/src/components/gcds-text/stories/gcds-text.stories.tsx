export default {
  title: 'Components/Text',

  argTypes: {
    // Props
    characterLimit: {
      name: 'character-limit',
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    display: {
      control: { type: 'select' },
      options: [
        'block',
        'flex',
        'inline',
        'inline-block',
        'inline-flex',
        'none',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
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
        defaultValue: { summary: '0' },
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
    size: {
      control: { type: 'select' },
      options: ['body', 'caption'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    textRole: {
      name: 'text-role',
      control: { type: 'select' },
      options: ['light', 'primary', 'secondary'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
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
<gcds-text ${
    args.textRole != 'primary' ? `text-role="${args.textRole}"` : null
  } ${args.size != 'body' ? `size="${args.size}"` : null} ${
    !args.characterLimit ? `character-limit="${args.characterLimit}"` : null
  } ${args.display != 'block' ? `display="${args.display}"` : null} ${
    args.marginTop != '0' ? `margin-top="${args.marginTop}"` : null
  } ${
    args.marginBottom != '400' ? `margin-bottom="${args.marginBottom}"` : null
  }>
  ${args.default}
</gcds-text>

<!-- React code -->
<GcdsText ${
    args.textRole != 'primary' ? `textRole="${args.textRole}"` : null
  } ${args.size != 'body' ? `size="${args.size}"` : null} ${
    !args.characterLimit ? `characterLimit="${args.characterLimit}"` : null
  } ${args.display != 'block' ? `display="${args.display}"` : null} ${
    args.marginTop != '0' ? `marginTop="${args.marginTop}"` : null
  } ${
    args.marginBottom != '400' ? `marginBottom="${args.marginBottom}"` : null
  }>
  ${args.default}
</GcdsText>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-text
  ${args.textRole != 'primary' ? `text-role="${args.textRole}"` : null}
  ${args.size != 'body' ? `size="${args.size}"` : null}
  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}
  ${args.display != 'block' ? `display="${args.display}"` : null}
  ${args.marginTop != '0' ? `margin-top="${args.marginTop}"` : null}
  ${args.marginBottom != '400' ? `margin-bottom="${args.marginBottom}"` : null}
>
  ${args.default}
</gcds-text>
`;

// ------ Text default ------

export const Default = Template.bind({});
Default.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text role ------

export const Primary = Template.bind({});
Primary.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const Secondary = Template.bind({});
Secondary.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'secondary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const Light = Template.bind({});
Light.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'light',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text size ------

export const SizeBody = Template.bind({});
SizeBody.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const SizeCaption = Template.bind({});
SizeCaption.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'caption',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text character limit ------

export const CharacterLimit = Template.bind({});
CharacterLimit.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const NoCharacterLimit = Template.bind({});
NoCharacterLimit.args = {
  characterLimit: false,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text events & props ------

export const Props = Template.bind({});
Props.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  characterLimit: true,
  display: 'block',
  marginTop: '0',
  marginBottom: '400',
  size: 'body',
  textRole: 'primary',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};
