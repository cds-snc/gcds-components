import {defineCustomElements} from '../loader';
import gcdsTheme from './gcds-theme';

defineCustomElements();


export const parameters = {
  docs: {
    theme: gcdsTheme,
  },
};