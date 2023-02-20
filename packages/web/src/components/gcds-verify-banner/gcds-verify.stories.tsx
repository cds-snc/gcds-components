import { langProp } from '../../utils/storybook/component-properties';

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
    ...langProp,
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-verify-banner
  container="${args.container}"
  is-fixed="${args.isFixed}"
  lang="${args.lang}"
>
</gcds-verify-banner>

// React code
<GcdsVerifyBanner
  container="${args.container}"
  isFixed="${args.isFixed}"
  lang="${args.lang}"
>
</GcdsVerifyBanner>
`;

export const Default = Template.bind({});
Default.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};
