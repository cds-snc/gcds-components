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
    noticeRole: {
      name: 'notice-role',
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
<gcds-notice notice-role="${args.noticeRole}" notice-title-tag="${args.noticeTitleTag}" notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-notice>

<!-- React code -->
<GcdsNotice noticeRole="${args.noticeRole}" noticeTitleTag="${args.noticeTitleTag}" noticeTitle="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<GcdsText>${args.default}</GcdsText>` : null}
</GcdsNotice>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-notice notice-role="${args.noticeRole}" notice-title-tag="${args.noticeTitleTag}" notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text>${args.default}</gcds-text>` : null}
</gcds-notice>
`;

// ------ Notice default ------

export const Default = Template.bind({});
Default.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice success ------

export const Success = Template.bind({});
Success.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice danger ------

export const Danger = Template.bind({});
Danger.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'danger',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice info ------

export const Info = Template.bind({});
Info.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'info',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice warning ------

export const Warning = Template.bind({});
Warning.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'warning',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h2 ------

export const h2 = Template.bind({});
h2.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h3 ------

export const h3 = Template.bind({});
h3.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h3',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h4 ------

export const h4 = Template.bind({});
h4.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h4',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Title tag h5 ------

export const h5 = Template.bind({});
h5.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h5',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice events & props ------

export const Props = Template.bind({});
Props.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};

// ------ Notice playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  noticeTitle: 'Title',
  noticeTitleTag: 'h2',
  noticeRole: 'success',
  default: 'Message.',
  lang: 'en',
};
