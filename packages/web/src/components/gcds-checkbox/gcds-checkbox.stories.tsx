import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Checkbox',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    checkboxId: {
      name: 'checkbox-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    checked: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
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

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-checkbox
  checkbox-id="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-checkbox>

// React code
<GcdsCheckbox
  checkboxId="${args.checkboxId}"
  label="${args.label}"
  name="${args.name}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.checked ? `checked` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsCheckbox>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  checkboxId: 'checkbox',
  label: 'Checkbox label',
  name: 'checkbox',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  checked: false,
  lang: 'en'
};