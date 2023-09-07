const formProps = {
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

const langProp = {
  lang: {
    control: 'radio',
    options: ['en', 'fr'],
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'en' },
    },
  },
};

const validatorProps = {
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

export default {
  formProps,
  validatorProps,
  langProp,
};
