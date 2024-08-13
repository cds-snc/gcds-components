export default {
  title: 'Components/Error message',

  argTypes: {
    // Props
    messageId: {
      name: 'message-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
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
<gcds-error-message message-id="${args.messageId}">
  ${args.default}
</gcds-error-message>

<!-- React code -->
<GcdsErrorMessage messageId="${args.messageId}">
  ${args.default}"
</GcdsErrorMessage>
`;

const TemplatePlayground = args => `
<gcds-error-message message-id="${args.messageId}">
  ${args.default}
</gcds-error-message>
`;

// ------ Error message default ------

export const Default = Template.bind({});
Default.args = {
  messageId: 'message-default',
  default: 'Error message.',
};

// ------ Error message events & props ------

export const Props = Template.bind({});
Props.args = {
  messageId: 'message-props',
  default: 'Error message.',
};

// ------ Error message playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  messageId: 'message-playground',
  default: 'Error message.',
};
