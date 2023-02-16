import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Textarea',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    hideLabel: {
      name: 'hide-label',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
    textareaId: {
      name: 'textarea-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    rows: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' }
      },
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

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-textarea
  textarea-id="${args.textareaId}"
  label="${args.label}"
  hint="${args.hint}"
  error-message="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  rows="${args.rows}"
  value="${args.value}"
  hide-label="${args.hideLabel}"
  lang="${args.lang}"
>
</gcds-textarea>

// React code
<GcdsTextarea
  textareaId="${args.textareaId}"
  label="${args.label}"
  hint="${args.hint}"
  errorMessage="${args.errorMessage}"
  required="${args.required}"
  disabled="${args.disabled}"
  rows="${args.rows}"
  value="${args.value}"
  hideLabel="${args.hideLabel}"
  lang="${args.lang}"
>
</GcdsTextarea>
`;

export const Default = Template.bind({});
Default.args = {
  textareaId: '',
  label: 'Textarea label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  rows: '',
  value: '',
  hideLabel: false,
  lang: 'en',
};