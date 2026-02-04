import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

import {
  vueComponentModels,
  angularValueAccessorBindings,
} from './src/utils/config/config';
const customElementsDir = 'dist/components';

export const config: Config = {
  namespace: 'gcds',
  globalStyle: 'src/assets/css/global.css',
  srcDir: './src',
  outputTargets: [
    reactOutputTarget({
      outDir: '../react/lib/',
      customElementsDir,
    }),
    // TODO: Configure a SSR friendly react output within @gcds-core/components-react
    // reactOutputTarget({
    //   outDir: '../react/ssr/',
    //   hydrateModule: '@gcds-core/components/hydrate',
    //   customElementsDir,
    // }),
    // TODO: Configure a standalone output within @gcds-core/components-angular
    angularOutputTarget({
      // outputType should be set to 'component' for Stencil projects using the dist output. Otherwise if using the custom elements output, outputType should be set to 'scam' or 'standalone'.
      outputType: 'component',
      componentCorePackage: '@gcds-core/components',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      inlineProperties: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@gcds-core/components',
      proxiesFile: '../vue/lib/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      // TODO: Configure the vue package to work in SSR environments
      // hydrateModule: '@gcds-core/components/hydrate',
      componentModels: vueComponentModels,
      customElementsDir,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true,
    },
    {
      // Copy font assets from 'assets' folder to 'dist' folder to ensure they are included in the build output.
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      minify: true,
      externalRuntime: false,
      copy: [
        {
          src: 'assets/fonts/**/*',
          dest: 'dist/gcds/assets/fonts',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'specs/components.json',
      strict: true,
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: '**/*.e2e.html' }],
    },
  ],
  docs: {
    markdown: {
      targetComponent: {
        background: '#26374a',
      },
    },
  },
  plugins: [
    postcss({
      plugins: [require('postcss-nested'), require('cssnano')],
    }),
    inlineSvg(),
    sass(),
  ],
  testing: {
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$': '@stencil/core/testing/jest-preprocessor',
    },
    setupFiles: ['./src/utils/test/setupMock.js'],
  },
  validatePrimaryPackageOutputTarget: true,
  extras: {
    enableImportInjection: true,
    experimentalScopedSlotChanges: true,
    experimentalSlotFixes: true,
    addGlobalStyleToComponents: false,
  },
};
