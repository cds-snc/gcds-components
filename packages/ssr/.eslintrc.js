// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  extends: ['prettier', '@smartive/eslint-config'],
  parserOptions: {
    project: ['./packages/ssr/tsconfig.eslint.json'],
    tsconfigRootDir: path.resolve(__dirname, '../../'),
  },
};
