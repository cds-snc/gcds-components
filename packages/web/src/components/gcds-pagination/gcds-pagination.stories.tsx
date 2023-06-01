import { langProp } from '../../utils/storybook/component-properties';

export default {
  title: 'Components/Pagination',

  argTypes: {
    // Props
    label: {
      name: 'label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    display: {
      control: 'radio',
      options: ['list', 'simple'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'list' }
      },
    },
    nextHref: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    nextLabel: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    previousHref: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    previousLabel: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    totalPages: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    currentPage: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
    },
    url: {
      name: 'url',
      control: 'text',
      description: '{ "queryStrings": { "key": "value" }, "fragment": string }',
      table: {
        type: { summary: 'string/object' },
        defaultValue: { summary: '-' }
      },
    },
    ...langProp,
  },
};

const Template = (args) => (`
// Web Component (Angular, Vue)
<gcds-pagination
  ${args.display != "list" ? `display="${args.display}"` : null}
  label="${args.label}"
  ${args.display == "list" ?
  `${args.totalPages ? `total-pages="${args.totalPages}"` : null}
  ${args.currentPage ? `current-page="${args.currentPage}"` : null}
  ${args.url ? `url='${args.url}'` : null}`
  :
  `${args.previousHref ? `previous-href="${args.previousHref}"` : null}
  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}
  ${args.nextHref ? `next-href="${args.nextHref}"` : null}
  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`
  }
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</gcds-pagination>

// React code
<GcdsPagination
  ${args.display != "list" ? `display="${args.display}"` : null}
  label="${args.label}"
  ${args.display == "list" ?
  `${args.totalPages ? `totalPages="${args.totalPages}"` : null}
  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}
  ${args.url ? `url='${args.url}'` : null}`
  :
  `${args.previousHref ? `previousHref="${args.previousHref}"` : null}
  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}
  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}
  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`
  }
  ${args.lang != "en" ? `lang="${args.lang}"` : null}
>
</GcdsPagination>
`).replace(/\s\snull\n/g, '');

export const Default = Template.bind({});
Default.args = {
  display: 'list',
  label: 'Pagination',
  currentPage: '5',
  totalPages: '10',
  url: '',
  previousHref: '#previous',
  previousLabel: '',
  nextHref: '#next',
  nextLabel: '',
  lang: 'en'
};