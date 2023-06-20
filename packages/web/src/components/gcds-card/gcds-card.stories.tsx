export default {
  title: 'Components/Card',

  argTypes: {
    // Props
    cardTitle: {
      name: 'card-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    href: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    tag: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    description: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    imgSrc: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    imgAlt: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    type: {
      control: 'radio',
      options: ['link', 'action'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'link' }
      },
    },

    // Slots
    footer: {
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
<gcds-card
  card-title="${args.cardTitle}"
  ${args.href ? `href="${args.href}"` : null}
  ${args.type != 'link' ? `type="action"` : null}
  ${args.tag ? `tag="${args.tag}"` : null}
  ${args.description ? `description="${args.description}"` : null}
  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}
  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}
>
  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}
</gcds-card>

// React code
<GcdsCard
  cardTitle="${args.cardTitle}"
  ${args.href ? `href="${args.href}"` : null}
  ${args.type != 'link' ? `type="action"` : null}
  ${args.tag ? `tag="${args.tag}"` : null}
  ${args.description ? `description="${args.description}"` : null}
  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}
  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}
>
  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}
</GcdsCard>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Title of the article',
  href: '#',
  type: 'link',
  tag: '',
  description: '',
  imgSrc: '',
  imgAlt: '',
  footer: '',
};
