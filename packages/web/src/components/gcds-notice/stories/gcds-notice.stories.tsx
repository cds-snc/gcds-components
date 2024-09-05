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
<gcds-notice type="${args.type}" notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text margin-bottom="0">${args.default}</gcds-text>` : null}
</gcds-notice>

<!-- React code -->
<GcdsNotice type="${args.type}"  noticeTitle="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<GcdsText marginBottom="0">${args.default}</GcdsText>` : null}
</GcdsNotice>
`.replace(/ null/g, '');

const TemplatePlayground = args => `
<gcds-notice type="${args.type}"  notice-title="${args.noticeTitle}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
  ${args.default.trim() != '' ? `<gcds-text margin-bottom="0">${args.default}</gcds-text>` : null}
</gcds-notice>
`;

// ------ Notice default ------

export const Default = Template.bind({});
Default.args = {
  noticeTitle: 'GC Design System notice',
  type: 'success',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice success ------

export const Success = Template.bind({});
Success.args = {
  noticeTitle: 'GC Design System notice',
  type: 'success',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice danger ------

export const Danger = Template.bind({});
Danger.args = {
  noticeTitle: 'GC Design System notice',
  type: 'danger',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice info ------

export const Info = Template.bind({});
Info.args = {
  noticeTitle: 'GC Design System notice',
  type: 'info',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice warning ------

export const Warning = Template.bind({});
Warning.args = {
  noticeTitle: 'GC Design System notice',
  type: 'warning',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice events & props ------

export const Props = Template.bind({});
Props.args = {
  noticeTitle: 'GC Design System notice',
  type: 'success',
  default: 'Provide additional information.',
  lang: 'en',
};

// ------ Notice playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  noticeTitle: 'GC Design System notice',
  type: 'success',
  default: 'Provide additional information.',
  lang: 'en',
};
