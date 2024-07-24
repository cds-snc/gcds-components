import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Card',

  argTypes: {
    // Props
    cardTitle: {
      name: 'card-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    href: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    badge: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    description: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    imgSrc: {
      name: 'img-src',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    imgAlt: {
      name: 'img-alt',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    cardTitleTag: {
      name: 'card-title-tag',
      control: 'select',
      options: ['h3', 'h4', 'h5', 'h6', 'a'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'a' },
      },
    },
    ...langProp,

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

     // Events
    gcdsClick: {
      action: 'click',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsFocus: {
      action: 'focus',
      table: {
        category: 'Events | Événements',
      },
    },
    gcdsBlur: {
      action: 'blur',
      table: {
        category: 'Events | Événements',
      },
    },
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-card
  card-title="${args.cardTitle}"
  ${args.href ? `href="${args.href}"` : null}
  ${args.cardTitleTag != 'a' ? `card-title-tag="${args.cardTitleTag}"` : null}
  ${args.badge ? `badge="${args.badge}"` : null}
  ${args.description ? `description="${args.description}"` : null}
  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}
  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-card>

<!-- React code -->
<GcdsCard
  cardTitle="${args.cardTitle}"
  ${args.href ? `href="${args.href}"` : null}
  ${args.cardTitleTag != 'a' ? `cardTitleTag="${args.cardTitleTag}"` : null}
  ${args.badge ? `badge="${args.badge}"` : null}
  ${args.description ? `description="${args.description}"` : null}
  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}
  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}
</GcdsCard>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-card
  card-title="${args.cardTitle}"
  ${args.href ? `href="${args.href}"` : null}
  ${args.cardTitleTag != 'a' ? `card-title-tag="${args.cardTitleTag}"` : null}
  ${args.badge ? `badge="${args.badge}"` : null}
  ${args.description ? `description="${args.description}"` : null}
  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}
  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-card>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: 'badge',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: '',
  imgAlt: '',
  default: '',
  lang: 'en',
};

export const Description = Template.bind({});
Description.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: '',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: '',
  imgAlt: '',
  default: '',
  lang: 'en',
};

export const Slot = Template.bind({});
Slot.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: '',
  description: '',
  imgSrc: '',
  imgAlt: '',
  default:
    'Description or supporting text relating to the headline.',
    lang: 'en',
};

export const Badge = Template.bind({});
Badge.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: 'Badge',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: '',
  imgAlt: '',
  default: '',
  lang: 'en',
};

export const Image = Template.bind({});
Image.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: '',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: 'https://picsum.photos/480/270',
  imgAlt: 'An image with the card component',
  default: '',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: 'badge',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: '',
  imgAlt: '',
  default: '',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  cardTitle: 'Card title link',
  href: '#',
  cardTitleTag: 'a',
  badge: '',
  description:
    'Description or supporting text relating to the headline.',
  imgSrc: '',
  imgAlt: '',
  default: '',
  lang: 'en',
};
