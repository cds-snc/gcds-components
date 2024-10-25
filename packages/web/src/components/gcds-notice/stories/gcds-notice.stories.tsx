import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Notice',

  argTypes: {
    // Props
    noticeTitle: {
      name: 'notice-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    noticeTitleTag: {
      name: 'notice-title-tag',
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'danger', 'info', 'warning'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
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
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-notice type="${args.type}" notice-title-tag="${args.noticeTitleTag}" notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-notice>

<!-- React code -->
<GcdsNotice type="${args.type}" noticeTitleTag="${args.noticeTitleTag}" noticeTitle="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<GcdsText>${args.default}</GcdsText>` : null}
</GcdsNotice>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-notice type="${args.type}" notice-title-tag="${args.noticeTitleTag}" notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-notice>
`;

// ------ Notice default ------

export const Default = Template.bind({});
Default.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice success ------

export const Success = Template.bind({});
Success.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice danger ------

export const Danger = Template.bind({});
Danger.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'danger',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice info ------

export const Info = Template.bind({});
Info.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'info',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice warning ------

export const Warning = Template.bind({});
Warning.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'warning',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h2 ------

export const h2 = Template.bind({});
h2.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h3 ------

export const h3 = Template.bind({});
h3.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h3',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h4 ------

export const h4 = Template.bind({});
h4.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h4',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h5 ------

export const h5 = Template.bind({});
h5.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h5',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice events & props ------

export const Props = Template.bind({});
Props.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  type: 'success',
  default: 'Message.',
  lang: 'en',
};
