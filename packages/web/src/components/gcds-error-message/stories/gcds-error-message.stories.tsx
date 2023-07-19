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

const Template = (args) => (`
<!-- Web component code (Angular, Vue) -->
<gcds-error-message
  message-id="${args.messageId}"
  message="${args.message}"
>
</gcds-error-message>

<!-- React code -->
<GcdsErrorMessage
  messageId="${args.messageId}"
  message="${args.message}"
>
</GcdsErrorMessage>
`).replace(/\s\snull\n/g, '');

const TemplatePlayground = (args) => (`
<gcds-error-message
  message-id="${args.messageId}"
  message="${args.message}"
>
</gcds-error-message>
`);

// ------ Error message default ------

export const Default = Template.bind({});
Default.args = {
  messageId: 'message-id',
  message: 'This is an error message.',
};

// ------ Error message events & props ------

export const Props = Template.bind({});
Props.args = {
  messageId: 'message-id',
  message: 'This is an error message.',
};

// ------ Error message playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  messageId: '',
  message: 'This is an error message.',
};
