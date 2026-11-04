export default {
  title: 'Components/Combobox',
  argTypes: {
    enableSelectAll: { name: 'enable-select-all', control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const options = JSON.stringify([
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'content', label: 'Content' },
  { value: 'research', label: 'Research' },
]);

const Template = args => `
<gcds-combobox
  combobox-id="combobox-demo"
  label="Topics"
  name="topics"
  options='${options}'
  placeholder="Search and select topics"
  ${args.enableSelectAll ? 'enable-select-all' : ''}
  ${args.required ? 'required' : ''}
  ${args.disabled ? 'disabled' : ''}
></gcds-combobox>
`;

export const Default = Template.bind({});
Default.args = { enableSelectAll: true, required: false, disabled: false };
