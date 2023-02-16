import {defineCustomElements} from '../loader';

import './../../../styles/global.css';
import gcdsTheme from './gcds-theme';

defineCustomElements();

export const parameters = {
  docs: {
    source: {
      state: 'open',
    },
    theme: gcdsTheme,
  },
};