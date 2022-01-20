import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

export const config: Config = {
  namespace: 'gcds',
  globalStyle: 'src/styles/global.css',
  outputTargets: [
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
        // require('cssnano')
      ]
    })
  ]
};
