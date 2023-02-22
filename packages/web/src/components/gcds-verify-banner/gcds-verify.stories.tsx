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

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-verify-banner
  ${args.container != "xl" ? `container="${args.container}"` : null}
  ${args.isFixed ? `is-fixed` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-verify-banner>

// React code
<GcdsVerifyBanner
  ${args.container != "xl" ? `container="${args.container}"` : null}
  ${args.isFixed ? `isFixed` : null}
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsVerifyBanner>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  container: 'xl',
  isFixed: false,
  lang: 'en',
};
