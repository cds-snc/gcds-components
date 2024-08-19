import { langProp } from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Pagination',

  argTypes: {
    // Props
    label: {
      name: 'label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      type: {
        required: true,
      },
    },
    display: {
      control: 'select',
      options: ['list', 'simple'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'list' },
      },
    },
    nextHref: {
      name: 'next-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    nextLabel: {
      name: 'next-label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    previousHref: {
      name: 'previous-href',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    previousLabel: {
      name: 'previous-label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    totalPages: {
      name: 'total-pages',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    currentPage: {
      name: 'current-page',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    url: {
      name: 'url',
      control: 'text',
      description: '{ "queryStrings": { "key": "value" }, "fragment": string }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' },
      },
    },
    ...langProp,
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-pagination
  ${args.display != 'list' ? `display="${args.display}"` : null}
  label="${args.label}"
  ${
    args.display == 'list'
      ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}
  ${args.currentPage ? `current-page="${args.currentPage}"` : null}
  ${args.url ? `url='${args.url}'` : null}`
      : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}
  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}
  ${args.nextHref ? `next-href="${args.nextHref}"` : null}
  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-pagination>

<!-- React code -->
<GcdsPagination
  ${args.display != 'list' ? `display="${args.display}"` : null}
  label="${args.label}"
  ${
    args.display == 'list'
      ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}
  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}
  ${args.url ? `url='${args.url}'` : null}`
      : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}
  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}
  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}
  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</GcdsPagination>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args =>
  `
<!-- Web component code (Angular, Vue) -->
<gcds-pagination
  ${args.display != 'list' ? `display="${args.display}"` : null}
  label="${args.label}"
  ${
    args.display == 'list'
      ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}
  ${args.currentPage ? `current-page="${args.currentPage}"` : null}
  ${args.url ? `url='${args.url}'` : null}`
      : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}
  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}
  ${args.nextHref ? `next-href="${args.nextHref}"` : null}
  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`
  }
  ${args.lang != 'en' ? `lang="${args.lang}"` : null}
>
</gcds-pagination>
`.replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '',
  previousHref: '#previous',
  previousLabel: '',
  nextHref: '#next',
  nextLabel: '',
  lang: 'en',
};

export const SimpleEn = Template.bind({});
SimpleEn.args = {
  display: 'simple',
  label: 'Pagination',
  currentPage: '',
  totalPages: '',
  url: '',
  previousHref: '#previous',
  previousLabel: 'Title of page',
  nextHref: '#next',
  nextLabel: '3 of 3',
  lang: 'en',
};

export const SimpleFr = Template.bind({});
SimpleFr.args = {
  display: 'simple',
  label: 'Pagination',
  currentPage: '',
  totalPages: '',
  url: '',
  previousHref: '#previous',
  previousLabel: 'Titre de la page',
  nextHref: '#next',
  nextLabel: '3 du 3',
  lang: 'fr',
};

export const ListEn = Template.bind({});
ListEn.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '',
  previousHref: '',
  previousLabel: '',
  nextHref: '',
  nextLabel: '',
  lang: 'en',
};

export const ListFr = Template.bind({});
ListFr.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '',
  previousHref: '',
  previousLabel: '',
  nextHref: '',
  nextLabel: '',
  lang: 'fr',
};

export const UrlOffset = Template.bind({});
UrlOffset.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '{"queryStrings": { "querystring::offset": 10 }, "fragment": "main" }',
  previousHref: '',
  previousLabel: '',
  nextHref: '',
  nextLabel: '',
  lang: 'en',
};

export const UrlMatch = Template.bind({});
UrlMatch.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '{"queryStrings": { "querystring::match": 10 }, "fragment": "main" }',
  previousHref: '',
  previousLabel: '',
  nextHref: '',
  nextLabel: '',
  lang: 'en',
};

export const Props = Template.bind({});
Props.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '',
  previousHref: '#previous',
  previousLabel: '',
  nextHref: '#next',
  nextLabel: '',
  lang: 'en',
};

export const Playground = TemplatePlayground.bind({});
Playground.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '9',
  totalPages: '15',
  url: '',
  previousHref: '#previous',
  previousLabel: '',
  nextHref: '#next',
  nextLabel: '',
  lang: 'en',
};
