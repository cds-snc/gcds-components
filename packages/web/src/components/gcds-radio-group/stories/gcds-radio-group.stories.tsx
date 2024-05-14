import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Radio Group',

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
      action: 'RadioChange',
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
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-radio-group
  name="${args.name}"
  options='${args.options}'
>
</gcds-radio-group>

<!-- React code -->
<GcdsRadioGroup
  name="${args.name}"
  options='${args.options}'
>
</GcdsRadioGroup>
`.replace(/\s\snull\n/g, '');

const TemplateError = args =>
  `
<gcds-fieldset
  legend="Fieldset legend"
  fieldset-id="fieldset"
  hint="Radio buttons only validate in fieldset"
  required
>
  <gcds-radio-group
    name="${args.name}"
    options='${args.options}'
  >
  </gcds-radio-group>
</gcds-fieldset>

<!-- Script to provide validated example -->
<script>document.querySelector('[fieldset-id=fieldset').validate();</script>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-radio-group
  name="${args.name}"
  options='${args.options}'
>
</gcds-radio-group>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  name: 'radioDefault',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}
  ]`,
  lang: 'en',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radio',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio1", "hint": "Description or example to make the option clearer.", "disabled": true}]',
  lang: 'en',
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'radio',
  options:
    '[{ "label": "Label", "id": "radio", "value": "radio1", "hint": "Description or example to make the option clearer.", "checked": true}]',
  lang: 'en',
};

export const Error = TemplateError.bind({});
Error.args = {
  name: 'radioDefault',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}
  ]`,
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  name: 'radioDefault',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer."},
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer."}
  ]`,
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  name: 'radio',
  options: `[
    { "label": "Label for radio 1", "id": "radio1", "value": "radio1", "hint": "Description or example to make the option clearer.", },
    { "label": "Label for radio 2", "id": "radio2", "value": "radio2", "hint": "Description or example to make the option clearer.", }
  ]`,
  lang: 'en',
};
