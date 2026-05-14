import {
  langProp,
  eventProp
} from '../../../utils/storybook/component-properties';

export default {
  title: 'Components/Table',

  argTypes: {
    // Props
    columns: {
      control: 'text',
      table: {
        type: {
          summary: `
        {
          field: string;
          header: string;
          sort?: boolean;
          sortDirection?: "asc" | "desc";
          alignment?: "start" | "center" | "end";
          rowHeader?: boolean;
          slotted?: boolean;
        }
        string | object[]`,
        },
        defaultValue: { summary: '-' },
      },
    },
    data: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    filter: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    filterValue: {
      name: 'filter-value',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    pagination: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    paginationSize: {
      name: 'pagination-size',
      control: 'number',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '10' },
      },
    },
    paginationCurrentPage: {
      name: 'pagination-current-page',
      control: 'number',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1' },
      },
    },
    paginationSizeOptions: {
      name: 'pagination-size-options',
      control: 'number',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '[10, 25, 50, 0, ]' },
      },
    },
    sort: {
      control: { type: 'select' },
      options: [false, true],
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    ...langProp,

    // Slots
    caption: {
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
    gcdsTableStateChange: {
      action: 'click',
      ...eventProp,
    }
  },
};

const Template = args =>
  `
<!-- Web component code (HTML, Vue) -->
<gcds-table
  columns='${args.columns}'
  data='${args.data}'
  ${args.filter ? `filter` : null}
  ${args.filterValue ? `filter-value="${args.filterValue}"` : null}
  ${args.pagination ? `pagination` : null}
  ${args.paginationCurrentPage != 1 ? `pagination-current-page="${args.paginationCurrentPage}"` : null}
  ${args.paginationSize != 10 ? `pagination-size="${args.paginationSize}"` : null}
  ${args.paginationSizeOptions != '[10, 25, 50, 0,]' ? `pagination-size-options="${args.paginationSizeOptions}"` : null}
  ${args.sort ? `sort` : null}
>
  ${args.caption}
</gcds-table>

<!-- Web component code (Angular) -->
<gcds-table-ng
  columns="${args.columns}"
  data="${args.data}"
  ${args.filter ? `filter` : null}
  ${args.filterValue ? `filter-value="${args.filterValue}"` : null}
  ${args.pagination ? `pagination` : null}
  ${args.paginationCurrentPage ? `pagination-current-page="${args.paginationCurrentPage}"` : null}
  ${args.paginationSize != 10 ? `pagination-size="${args.paginationSize}"` : null}
  ${args.paginationSizeOptions ? `pagination-size-options="${args.paginationSizeOptions}"` : null}
  ${args.sort ? `sort` : null}
>
  ${args.caption}
</gcds-table-ng>

<!-- React code -->
<GcdsTable
  columns="${args.columns}"
  data="${args.data}"
  ${args.filter ? `filter` : null}
  ${args.filterValue ? `filterValue="${args.filterValue}"` : null}
  ${args.pagination ? `pagination` : null}
  ${args.paginationCurrentPage != '1' ? `paginationCurrentPage="${args.paginationCurrentPage}"` : null}
  ${args.paginationSize != 10 ? `paginationSize="${args.paginationSize}"` : null}
  ${args.paginationSizeOptions != '[10, 25, 50, 0,]' ? `paginationSizeOptions="${args.paginationSizeOptions}"` : null}
  ${args.sort ? `sort` : null}
>
  ${args.caption != '' ? args.caption : null}
</GcdsTable>
`.replace(/\s\snull\n/g, '');

const TemplatePlayground = args => `
<gcds-table
  columns='${args.columns}'
  data='${args.data}'
  ${args.filter ? `filter` : null}
  ${args.filterValue ? `filter-value="${args.filterValue}"` : null}
  ${args.pagination ? `pagination` : null}
  ${args.paginationCurrentPage ? `pagination-current-page="${args.paginationCurrentPage}"` : null}
  ${args.paginationSize != 10 ? `pagination-size="${args.paginationSize}"` : null}
  ${args.paginationSizeOptions ? `pagination-size-options="${args.paginationSizeOptions}"` : null}
  ${args.sort ? `sort` : null}
>
  ${args.caption}
</gcds-table>
`;

const tableColumns = [
  {
    field: 'id',
    header: 'ID',
  },
  {
    field: 'application',
    header: 'Application',
  },
  {
    field: 'status',
    header: 'Status',
  },
];

const statuses = ["Approved", "Pending review", "Under review", "Rejected"];

const makeRows = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    application: `Application ${i + 1}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));


const defaultTableProperties = {
  columns: JSON.stringify(tableColumns),
  data: JSON.stringify(makeRows(25)),
  filter: false,
  filterValue: '',
  pagination: false,
  paginationCurrentPage: 1,
  paginationSize: 10,
  paginationSizeOptions: `[10, 25, 50, 0,]`,
  caption: '',
}

// ------ Table default ------

export const Props = Template.bind({});
Props.args = defaultTableProperties;

export const Default = Template.bind({});
Default.args = defaultTableProperties;

// ------ Table filter ------

export const Filter = Template.bind({});
Filter.args = {
  ...defaultTableProperties,
  filter: true,
};

// ------ Table filter value ------

export const FilterValue = Template.bind({});
FilterValue.args = {
  ...defaultTableProperties,
  filter: true,
  filterValue: 'Approved',
};

// ------ Table pagination ------

export const Pagination = Template.bind({});
Pagination.args = {
  ...defaultTableProperties,
  pagination: true,
};

// ------ Table pagination current page ------

export const PaginationCurrentPage = Template.bind({});
PaginationCurrentPage.args = {
  ...defaultTableProperties,
  pagination: true,
  paginationCurrentPage: 2,
};

// ------ Table pagination size ------

export const PaginationSize = Template.bind({});
PaginationSize.args = {
  ...defaultTableProperties,
  pagination: true,
  paginationSize: 25,
};

// ------ Table pagination size options ------

export const PaginationSizeOptions = Template.bind({});
PaginationSizeOptions.args = {
  ...defaultTableProperties,
  pagination: true,
  paginationSizeOptions: '[5, 10, 15, 20, 0]',
};

// ------ Table sort ------

export const Sort = Template.bind({});
Sort.args = {
  ...defaultTableProperties,
  sort: true,
};

// ------ Table columns sortDirection ------

export const ColumnsSort = Template.bind({});
ColumnsSort.args = {
  ...defaultTableProperties,
  sort: true,
  columns: JSON.stringify([
    {
      field: 'id',
      header: 'ID',
    },
    {
      field: 'application',
      header: 'Application',
    },
    {
      field: 'status',
      header: 'Status',
      sortDirection: 'asc'
    },
  ])
};

// ------ Table columns rowHeader ------

export const ColumnsRowHeader = Template.bind({});
ColumnsRowHeader.args = {
  ...defaultTableProperties,
  sort: true,
  columns: JSON.stringify([
    {
      field: 'id',
      header: 'ID',
      rowHeader: true,
    },
    {
      field: 'application',
      header: 'Application',
    },
    {
      field: 'status',
      header: 'Status',
    },
  ])
};

// ------ Table playground ------

export const Playground = TemplatePlayground.bind({});
Playground.args = defaultTableProperties;
