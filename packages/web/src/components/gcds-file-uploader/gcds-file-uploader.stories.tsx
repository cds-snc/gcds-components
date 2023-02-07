import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/File Uploader',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    accept: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    multiple: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' }
      },
    },
    uploaderId: {
      name: 'uploader-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    ...formProps,
    ...langProp,

    // Events
    onChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    },
    onFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      }
    },
    onBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-file-uploader
  uploader-id="${args.uploaderId}"
  label="${args.label}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  accept="${args.accept}"
  multiple="${args.multiple}"
  lang="${args.lang}"
>
</gcds-file-uploader>

// React code
<GcdsFileUploader
  uploaderId="${args.uploaderId}"
  label="${args.label}"
  hint="${args.hint}"
  errorMessage="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  value="${args.value}"
  accept="${args.accept}"
  multiple="${args.multiple}"
  lang="${args.lang}"
>
</GcdsFileUploader>
`;

export const Default = Template.bind({});
Default.args = {
  uploaderId: '',
  label: 'File uploader label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  accept: '',
  multiple: true,
  lang: 'en',
};