import { langProp, validatorProps } from '../../utils/storybook/component-properties';

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
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    errorMessage: {
      name: 'error-message',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    label: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    required: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    value: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    ...validatorProps,
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
// Web Component code (Angular, Vue)
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
  ${args.validateOn != "blur" ? `validate-on="${args.validateOn}"` : null}
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
  ${args.validateOn != "blur" ? `validateOn="${args.validateOn}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsFileUploader>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  uploaderId: 'uploader',
  label: 'File uploader label',
  hint: '',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  accept: '',
  multiple: false,
  validateOn: 'blur',
  lang: 'en',
};