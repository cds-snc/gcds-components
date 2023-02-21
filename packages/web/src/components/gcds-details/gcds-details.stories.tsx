export default {
  title: 'Components/Details',

  argTypes: {
    // Props
    detailsTitle: {
      name: 'details-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    open: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-details
  details-title="${args.detailsTitle}"
  ${args.open ? `open` : null}
>
  ${args.default}
</gcds-details>

// React code
<GcdsDetails
  detailsTitle="${args.detailsTitle}"
  ${args.open ? `open` : null}
>
  ${args.default}
</GcdsDetails>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  detailsTitle: 'Find out more',
  open: false,
  default: 'Extra content',
};
