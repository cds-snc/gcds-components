export default {
  title: 'Components/Fieldset',

  argTypes: {
    // Props
    hint: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    legend: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    legendSize: {
      name: 'legend-size',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      description:
        'Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.',
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-fieldset
  legend="${args.legend}"
  legend-size="${args.legendSize}"
  ${args.hint ? `hint="${args.hint}"` : null}
>
  ${
    args.default
      ? args.default
      : `<gcds-input
    input-id="${args.fieldsetId}-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></gcds-input>
  <gcds-select
    select-id="fieldset-select"
    label="Select label"
    hint="Hint / Example message."
    default-value="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </gcds-select>`
  }
</gcds-fieldset>

<!-- React code -->
<GcdsFieldset
  legend="${args.legend}"
  legendSize="${args.legendSize}"
  ${args.hint ? `hint="${args.hint}"` : null}
>
    ${
      args.default
        ? args.default
        : `<GcdsInput
    inputId="${args.fieldsetId}-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></GcdsInput>
  <GcdsSelect
    selectId="fieldset-select"
    label="Select label"
    hint="Hint / Example message."
    defaultValue="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </GcdsSelect>`
    }
</GcdsFieldset>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-fieldset
  legend="${args.legend}"
  legend-size="${args.legendSize}"
  ${args.hint ? `hint="${args.hint}"` : null}
>
  <gcds-input
    input-id="fieldset-input"
    label="Input label"
    hint="Hint / Example message."
    size="6"
  ></gcds-input>
  <gcds-select
    select-id="fieldset-select"
    label="Select label"
    hint="Hint / Example message."
    default-value="Select option."
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
    <option value="6">Option 6</option>
    <option value="7">Option 7</option>
    <option value="8">Option 8</option>
  </gcds-select>
</gcds-fieldset>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  legend: 'Legend',
  legendSize: 'h2',
  hint: 'Hint / Example message.',
};

export const SizeH2 = Template.bind({});
SizeH2.args = {
  legend: 'Legend',
  legendSize: 'h2',
  hint: 'Hint / Example message.',
};

export const SizeH3 = Template.bind({});
SizeH3.args = {
  legend: 'Legend',
  legendSize: 'h3',
  hint: 'Hint / Example message.',
  default: '',
};

export const SizeH4 = Template.bind({});
SizeH4.args = {
  legend: 'Legend',
  legendSize: 'h4',
  hint: 'Hint / Example message.',
  default: '',
};

export const SizeH5 = Template.bind({});
SizeH5.args = {
  legend: 'Legend',
  legendSize: 'h5',
  hint: 'Hint / Example message.',
  default: '',
};

export const SizeH6 = Template.bind({});
SizeH6.args = {
  legend: 'Legend',
  legendSize: 'h6',
  hint: 'Hint / Example message.',
  default: '',
};

export const Props = Template.bind({});
Props.args = {
  legend: 'Legend',
  legendSize: 'h2',
  hint: 'Hint / Example message.',
  default: '',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  legend: 'Legend',
  legendSize: 'h2',
  hint: 'Hint / Example message.',
  default: '',
};
