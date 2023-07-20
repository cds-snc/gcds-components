import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Brand
  brandTitle: 'Government of Canada | Gouvernement du Canada',
  brandUrl: '',
  brandImage: 'https://digital.canada.ca/img/cds/goc--header-logo.svg',
  brandTarget: '_self',

   // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  // UI
  appContentBg: '#fff',
  appBorderColor: '#7d828b',
  appBorderRadius: 0,

  // Toolbar default and active colors
  barTextColor: '#000',

  // Text colors
  textColor: '#000',
  textInverseColor: 'green',

  // Form colors
  inputBorderRadius: '0.1875rem',
});