import { formProps, langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Select',

  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['change', 'focus', 'blur']
    }
  },

  argTypes: {
    // Props
    selectId: {
      name: 'select-id',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
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
<gcds-select
  select-id="${args.selectId}"
  label="${args.label}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.defaultValue ? `default-value="${args.defaultValue}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</gcds-select>

// React code
<GcdsSelect
  selectId="${args.selectId}"
  label="${args.label}"
  ${args.hint ? `hint="${args.hint}"` : null}
  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}
  ${args.required ? `required` : null}
  ${args.disabled ? `disabled` : null}
  ${args.value ? `value="${args.value}"` : null}
  ${args.defaultValue ? `defaultValue="${args.defaultValue}"` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</GcdsSelect>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  selectId: 'select',
  label: 'Select label',
  hint: 'This is a hint.',
  errorMessage: '',
  required: false,
  disabled: false,
  value: '',
  defaultValue: 'Choose an option.',
  lang: 'en',
};