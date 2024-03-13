export const formProps = {
  disabled: {
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  errorMessage: {
    name: 'error-message',
    control: 'text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '-' },
    },
  },
  hint: {
    control: 'text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '-' },
    },
  },
  label: {
    control: 'text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '-' },
    },
    type: {
      required: true,
    },
  },
  required: {
    control: 'boolean',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  value: {
    control: 'text',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '-' },
    },
  },
};

export const langProp = {
  lang: {
    control: { type: 'select' },
    options: ['en', 'fr'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'en' },
    },
  },
};

export const validatorProps = {
  validateOn: {
    name: 'validate-on',
    control: { type: 'select' },
    options: ['blur', 'other'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'blur' },
    },
  },
};
