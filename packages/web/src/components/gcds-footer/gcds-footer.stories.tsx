import { html } from 'lit-html';

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
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' }
      },
    },
    lang: {
      control: 'radio',
      options: ['en', 'fr'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' }
      },
    },
  },
};

const Template = (args) => html`
// Web Component (Angular, Vue)
<gcds-footer
  display="${args.display}"
  contextual-heading="${args.contextualHeading}"
  contextual-links="${args.contextualLinks}"
  lang="${args.lang}"
>
</gcds-footer>

// React code
<GcdsFooter
  display="${args.display}"
  contextualHeading="${args.contextualHeading}"
  contextualLinks="${args.contextualLinks}"
  lang="${args.lang}"
>
</GcdsFooter>
`;

export const Default = Template.bind({});
Default.args = {
  display: 'compact',
  contextualHeading: '',
  contextualLinks: '',
  lang: 'en'
};