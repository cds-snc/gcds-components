import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/File uploader',

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
    gcdsChange: {
      action: 'change',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      }
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      }
    },
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-file-uploader
  uploader-id="${args.uploaderId}"
  label="${args.label}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.accept ? `accept="${args.accept}"` : null}
  ${args.multiple ? `multiple` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-file-uploader>

// React code
<GcdsFileUploader
  uploaderId="${args.uploaderId}"
  label="${args.label}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.accept ? `accept="${args.accept}"` : null}
  ${args.multiple ? `multiple` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsFileUploader>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  uploaderId: 'uploader',
  label: 'File uploader label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  accept: '',
  multiple: false,
  lang: 'en',
};