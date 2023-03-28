import {defineCustomElements} from '../loader';

import '../dist/gcds/gcds.css';
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