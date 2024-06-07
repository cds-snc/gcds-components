export default {
  title: 'Components/Screen reader only',

  argTypes: {
    // Props
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'p' },
      },
      type: {
        required: false,
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
<gcds-sr-only ${args.tag != 'p' ? `tag="${args.tag}"` : null}>
  ${args.default}
</gcds-sr-only>

<!-- React code -->
<GcdsSrOnly ${args.tag != 'p' ? `tag="${args.tag}"` : null}>
  ${args.default}
</GcdsSrOnly>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-sr-only ${args.tag != 'p' ? `tag="${args.tag}"` : null}>
  ${args.default}
</gcds-sr-only>
`;

// ------ Screen reader only default ------

export const Default = Template.bind({});
Default.args = {
  default: 'Text only seen by assistive technologies',
  tag: 'p',
};

// ------ Screen reader only tag ------

export const Tag = Template.bind({});
Tag.args = {
  default: 'Text only seen by assistive technologies',
  tag: 'h2',
};

// ------ Screen reader only  events & props ------

export const Props = Template.bind({});
Props.args = {
  default: 'Text only seen by assistive technologies',
  tag: 'p',
};

// ------ Screen reader only  playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  default: 'Text only seen by assistive technologies',
  tag: 'p',
};
