import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Radio',

  parameters: {
    actions: {
      argTypesRegex: '^gcds.*',
      handles: ['RadioChange', 'focus', 'blur'],
    },
  },

  argTypes: {
    // Props
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    options: {
      control: 'text',
      table: {
        type: {
          summary: `
        {
          id: string;
          label: string;
          value: string;
          hint?: string;
          checked?: boolean;
          required?: boolean;
          disabled?: boolean;
        }
        string | object[]`,
        },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    ...langProp,

    // Events
    gcdsRadioChange: {
      action: 'RadioChnage',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-radio
  name="${args.name}"
  options='${args.options}'
>
</gcds-radio>

<!-- React code -->
<GcdsRadio
  name="${args.name}"
  options='${args.options}'
>
</GcdsRadio>
`.replace(/\s\snull\n/g, '');

const TemplateError = args =>
  `
<gcds-fieldset
  legend="Fieldset legend"
  fieldset-id="fieldset"
  hint="Radio buttons only validate in fieldset"
  required
>
  <gcds-radio
    name="${args.name}"
    options='${args.options}'
  >
  </gcds-radio>
</gcds-fieldset>

<!-- Script to provide validated example -->
<script>document.querySelector('[fieldset-id=fieldset').validate();</script>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-radio
  name="${args.name}"
  options='${args.options}'
>
</gcds-radio>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  name: 'radioDefault',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio" "hint": "Description or example to make the option clearer." }]',
  lang: 'en',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radio',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio" "hint": "Description or example to make the option clearer.", "disabled": true }]',
  lang: 'en',
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'radio',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio" "hint": "Description or example to make the option clearer.", "checked": true }]',
  lang: 'en',
};

export const Error = TemplateError.bind({});
Error.args = {
  name: 'radioDefault',
  options: `[
    { "label": "Label 1", "id": "radio1", "value": "radio-b1" "hint": "Description or example to make the option clearer." },
    { "label": "Label 2", "id": "radio2", "value": "radio-b2" "hint": "Description or example to make the option clearer." }
  ]`,
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  name: 'radio',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio" "hint": "Description or example to make the option clearer." }]',
  lang: 'en',
};
