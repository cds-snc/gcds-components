export default {
  title: 'Components/Screen reader only',

  argTypes: {
    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-sr-only>
  ${args.default}
</gcds-sr-only>

<!-- React code -->
<GcdsSrOnly>
  ${args.default}
</GcdsSrOnly>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-sr-only>
  ${args.default}
</gcds-sr-only>
`;

// ------ Screen reader only default ------

export const Default = Template.bind({});
Default.args = {
  default: 'Text only seen by assistive technologies',
};

// ------ Screen reader only  events & props ------

export const Props = Template.bind({});
Props.args = {
  default: 'Text only seen by assistive technologies',
};

// ------ Screen reader only  playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  default: 'Text only seen by assistive technologies',
};
