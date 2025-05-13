import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget } from '@stencil/react-output-target';
// import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

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
    // TODO: Configure a SSR friendly react output within @cdssnc/gcds-components-react
    // reactOutputTarget({
    //   outDir: '../react/ssr/',
    //   hydrateModule: '@cdssnc/gcds-components/hydrate',
    //   customElementsDir,
    // }),
    // reactOutputTarget({
    //   componentCorePackage: '@cdssnc/gcds-components',
    //   proxiesFile: '../react/src/components/stencil-generated/index.ts',
    //   includeDefineCustomElements: true,
    // }),
    // angularOutputTarget({
    //   // outputType should be set to 'component' for Stencil projects using the dist output. Otherwise if using the custom elements output, outputType should be set to 'scam' or 'standalone'.
    //   outputType: 'component',
    //   componentCorePackage: '@cdssnc/gcds-components',
    //   directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
    //   directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
    // }),
    vueOutputTarget({
      componentCorePackage: '@cdssnc/gcds-components',
      proxiesFile: '../vue/lib/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      hydrateModule: '@cdssnc/gcds-components/hydrate',
      componentModels: [
        {
          elements: [
            'gcds-input',
            'gcds-textarea',
            'gcds-select',
            'gcds-file-uploader',
            'gcds-select',
            'gcds-date-input',
          ],
          event: 'gcdsChange',
          targetAttr: 'value',
        },
      ],
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
      type: 'dist-hydrate-script',
    },
  ],
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
  },
};
