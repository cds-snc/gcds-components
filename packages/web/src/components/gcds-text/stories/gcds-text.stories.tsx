export default {
  title: 'Components/Text',

  argTypes: {
    // Props
    characterLimit: {
      name: 'character-limit',
      control: 'boolean',
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
        defaultValue: { summary: '-' },
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
        defaultValue: { summary: '-' },
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
    textStyle: {
      name: 'text-style',
      control: { type: 'select' },
      options: ['italic', 'normal'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    weight: {
      control: { type: 'select' },
      options: ['bold', 'regular'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-text ${
    args.textRole != 'primary' ? `text-role="${args.textRole}"` : null
  } ${args.size != 'body' ? `size="${args.size}"` : null} ${
    !args.characterLimit ? `character-limit="${args.characterLimit}"` : null
  } ${args.display != 'block' ? `display="${args.display}"` : null} ${
    args.marginTop ? `margin-top="${args.marginTop}"` : null
  } ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null} ${
    args.textStyle != 'normal' ? `text-style="${args.textStyle}"` : null
  } ${args.weight != 'regular' ? `weight="${args.weight}"` : null}>
  ${args.default}
</gcds-text>

<!-- React code -->
<GcdsText ${
    args.textRole != 'primary' ? `textRole="${args.textRole}"` : null
  } ${args.size != 'body' ? `size="${args.size}"` : null} ${
    !args.characterLimit ? `characterLimit="${args.characterLimit}"` : null
  } ${args.display != 'block' ? `display="${args.display}"` : null} ${
    args.marginTop ? `marginTop="${args.marginTop}"` : null
  } ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null} ${
    args.textStyle != 'normal' ? `textStyle="${args.textStyle}"` : null
  } ${args.weight != 'regular' ? `weight="${args.weight}"` : null}>
  ${args.default}
</GcdsText>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-text
  ${args.textRole != 'primary' ? `text-role="${args.textRole}"` : null}
  ${args.size != 'body' ? `size="${args.size}"` : null}
  ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null}
  ${args.display != 'block' ? `display="${args.display}"` : null}
  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}
  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}
  ${args.textStyle != 'normal' ? `text-style="${args.textStyle}"` : null}
  ${args.weight != 'regular' ? `weight="${args.weight}"` : null}
>
  ${args.default}
</gcds-text>
`;

// ------ Text default ------

export const Default = Template.bind({});
Default.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text role ------

export const Primary = Template.bind({});
Primary.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const Secondary = Template.bind({});
Secondary.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'secondary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const Light = Template.bind({});
Light.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'light',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text size ------

export const SizeBody = Template.bind({});
SizeBody.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const SizeCaption = Template.bind({});
SizeCaption.args = {
  characterLimit: true,
  display: 'block',
  size: 'caption',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text character limit ------

export const CharacterLimit = Template.bind({});
CharacterLimit.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const NoCharacterLimit = Template.bind({});
NoCharacterLimit.args = {
  characterLimit: false,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text style ------

export const StyleNormal = Template.bind({});
StyleNormal.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const StyleItalic = Template.bind({});
StyleItalic.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'italic',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text weight ------

export const WeightRegular = Template.bind({});
WeightRegular.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

export const WeightBold = Template.bind({});
WeightBold.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'bold',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text events & props ------

export const Props = Template.bind({});
Props.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};

// ------ Text playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  characterLimit: true,
  display: 'block',
  size: 'body',
  textRole: 'primary',
  textStyle: 'normal',
  weight: 'regular',
  default:
    'This is some example content to display the gcds-text component. It is a paragraph displaying non-heading content with matching GC Design System styles to provide accessible text sizes and colour contrast.',
};
