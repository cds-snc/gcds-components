import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { execSync } from 'child_process';

export const config: Config = {
  namespace: 'gcds',
  globalStyle:
    '../../node_modules/@cdssnc/gcds-tokens/build/web/css/tokens.css',
  srcDir: './src',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@cdssnc/gcds-components',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      // outputType should be set to 'component' for Stencil projects using the dist output. Otherwise if using the custom elements output, outputType should be set to 'scam' or 'standalone'.
      outputType: 'component',
      componentCorePackage: '@cdssnc/gcds-components',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@cdssnc/gcds-components',
      proxiesFile: '../vue/lib/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true,
    },
    {
      type: 'dist-custom-elements',
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
    {
      name: 'postBuildCopy',
      async buildEnd() {
        try {
          // copy MapML dependency
          execSync('node ./scripts/copyMapMLFiles.js', { stdio: 'inherit' });
          console.log('MapML files copied successfully to dist/gcds/gcds-map');
        } catch (err) {
          console.error('Error copying MapML files:', err);
        }
      },
    }
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
    experimentalSlotFixes: true
  },
};
