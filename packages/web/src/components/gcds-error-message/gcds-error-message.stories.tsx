export default {
  title: 'Components/Error message',

  argTypes: {
    // Props
    messageId: {
      name: 'message-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    message: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-error-message
  message-id="${args.messageId}"
  message="${args.message}"
>
</gcds-error-message>

// React code
<GcdsErrorMessage
  messageId="${args.messageId}"
  message="${args.message}"
>
</GcdsErrorMessage>
`;

export const Default = Template.bind({});
Default.args = {
  messageId: '',
  message: 'This is an error message.',
};
