import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'gcds',
  globalStyle: '../../styles/global.css',
  srcDir: './src',
  outputTargets: [
    react({
      componentCorePackage: 'gcds-components',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require('postcss-nested'),
        require('cssnano')
      ]
    }),
    inlineSvg()
  ],
  testing: {
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$': "@stencil/core/testing/jest-preprocessor"
    },
  },
  buildEs5: 'prod'
};
