export default {
  title: 'Components/Details',

  argTypes: {
    // Props
    detailsTitle: {
      name: 'details-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    open: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
<gcds-details details-title="${args.detailsTitle}" ${args.open ? `open` : null}>
  ${args.default}
</gcds-details>

<!-- React code -->
<GcdsDetails detailsTitle="${args.detailsTitle}" ${args.open ? `open` : null}>
  ${args.default}
</GcdsDetails>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-details details-title="${args.detailsTitle}" ${args.open ? `open` : null}>
  ${args.default}
</gcds-details>
`;

// ------ Details default ------

export const Default = Template.bind({});
Default.args = {
  detailsTitle: 'Learn more about this topic',
  open: false,
  default: 'Additional information.',
};

// ------ Details open ------

export const Open = Template.bind({});
Open.args = {
  detailsTitle: 'Learn more about this topic',
  open: true,
  default: 'Additional information.',
};

// ------ Details events & props ------

export const Props = Template.bind({});
Props.args = {
  detailsTitle: 'Learn more about this topic',
  open: false,
  default: 'Additional information.',
};

// ------ Details playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  detailsTitle: 'Learn more about this topic',
  open: false,
  default: 'Additional information.',
};
