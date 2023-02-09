import { langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Footer',

  argTypes: {
    // Props
    display: {
      control: 'radio',
      options: ['compact', 'full'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'compact' }
      },
      type: {
        required: true
      }
    },
    contextualHeading: {
      name: 'contextual-heading',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    contextualLinks: {
      name: 'contextual-links',
      control: 'text',
      description: '{ "link-label": "link-href" }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' }
      },
    },
    subLinks: {
      name: 'sub-links',
      control: 'text',
      description: '{ "link-label": "link-href" }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' }
      },
    },
    ...langProp,
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-footer
  display="${args.display}"
  contextual-heading="${args.contextualHeading}"
  contextual-links='${args.contextualLinks}'
  sub-links='${args.subLinks}'
  lang="${args.lang}"
>
</gcds-footer>

// React code
<GcdsFooter
  display="${args.display}"
  contextualHeading="${args.contextualHeading}"
  contextualLinks='${args.contextualLinks}'
  subLinks='${args.subLinks}'
  lang="${args.lang}"
>
</GcdsFooter>
`;

export const Default = Template.bind({});
Default.args = {
  display: 'compact',
  contextualHeading: '',
  contextualLinks: '',
  subLinks: '',
  lang: 'en'
};