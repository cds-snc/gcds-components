import {defineCustomElements} from '../dist/esm/loader';

import '../dist/gcds/gcds.css';
import gcdsTheme from './gcds-theme';

defineCustomElements();

const preview = {
  parameters: {
    docs: {
      // source: {
      //   state: 'open',
      // },
      theme: gcdsTheme,
    },
  },
};

export default preview;
