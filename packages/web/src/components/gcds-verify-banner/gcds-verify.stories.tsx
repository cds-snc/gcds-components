export default {
  title: 'Components/Verify banner',

  argTypes: {
    // Props
    container: {
      control: { type: 'select' },
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'xl' }
      },
    },
    isFixed: {
      name: 'is-fixed',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-verify-banner
  container="${args.container}"
  is-fixed="${args.isFixed}"
></gcds-verify-banner>

// React code
<GcdsVerifyBanner
  container="${args.container}"
  isFixed="${args.isFixed}"
></GcdsVerifyBanner>
`;

export const Example = Template.bind({});
Example.args = {
  container: 'xl',
  isFixed: false,
};
