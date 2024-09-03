import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, format, join, parse } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';
import { replaceInFile } from 'replace-in-file'
import { parseComponentsEvents, parseEnums, printProgress, toIndexFile, toModuleFile, toTypesFile } from './utils';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, '..', 'dist', 'esm');
const WEB_COMPONENTS_DIST_DIR = join(__dirname, '..', '..', 'web', 'dist');
const COMPONENTS_DIR = join(WEB_COMPONENTS_DIST_DIR, 'components');

const createReactWrapperModules = async ({ entryPoints, distRoot }) => {
  if (!entryPoints?.length) {
    console.error('no entrypoints! bailing');

    return;
  }

  try {
    const modules: string[] = [];
    const types: string[] = [];
    const componentsTypePath = join(WEB_COMPONENTS_DIST_DIR, 'types', 'components.d.ts');
    const componentsTypeSource = readFileSync(componentsTypePath, 'utf-8');
    const componentsEvents = parseComponentsEvents(componentsTypeSource);
    const enums = parseEnums(componentsTypeSource);

    let i = 0;
    for (let importPath of entryPoints) {

      // Build on Window: File prefix required
      importPath = importPath.replace( /^[A-Z]:\\/, 'file://$&' );

      const component = await import(importPath);

      let defineFunctionName = 'd';
      if (component?.d) {
        defineFunctionName = 'd';
      } else if (component?.defineCustomElement) {
        defineFunctionName = 'defineCustomElement';
      } else {
        console.error('no defineCustomElement found for', importPath);
        continue;
      }

      const tagName = Object.values<Record<string, string>>(component).find((value) => Object.keys(value).includes('is'))
        ?.is;
      if (!tagName) {
        console.error('no web component tag name found for', importPath);
        continue;
      }

      const { name } = parse(require.resolve(importPath));
      const modulePath = format({ dir: distRoot, name, ext: '.js' });
      const componentPath = `./components/${name}.js`;
      const componentEvents = componentsEvents[tagName]?.events;
      writeFileSync(modulePath, toModuleFile(defineFunctionName, componentPath, tagName, componentEvents));
      types.push(tagName);
      modules.push(name);
      i++;
      printProgress((i / entryPoints.length) * 100);
    }

    writeFileSync(join(distRoot, 'index.js'), toIndexFile(modules));
    writeFileSync(join(distRoot, '..', 'types', 'index.d.ts'), toTypesFile(types, enums, componentsEvents));
  } catch (err) {
    console.error('unexpected error generating module!', err);
    exit(1);
  }

  console.info('writing modules completed!');
};

// Copy over the required stencil files, add required patch and modify imports in component files
const patchStencil = async () => {

  // Updating stencil import in component files
  const componentOptions = {
    files: './dist/esm/components/*.js',
    from: '@stencil/core/internal/client',
    to: '../lib/stencil',
  };

  await replaceInFile(componentOptions);

  // Patching stencil
  // Will need to check if the from property needs to be updated when we update @stencil/core@4.11.0
  // - 3990 const win = typeof window !== 'undefined' ? window : {};
  // + 3990 const win = typeof window !== 'undefined' ? window : globalThis || {};
  const stencilOptions = {
    files: './dist/esm/lib/stencil/index.js',
    from: "const win = typeof window !== 'undefined' ? window : {};",
    to: "const win = typeof window !== 'undefined' ? window : globalThis || {};",
  };

  try {
    const results = await replaceInFile(stencilOptions);

    if (results[0].hasChanged) {
      createReactWrapperModules({
        entryPoints: readdirSync(COMPONENTS_DIR)
          .filter((file) => file.startsWith('gcds') && file.endsWith('.js') && !file.endsWith('2.js'))
          .map((file) => join(COMPONENTS_DIR, file)),
        distRoot: join(DIST_DIR),
      }).catch((err) => {
        console.error('unexpected error generating module!', err);
        exit(1);
      });
    } else {
      throw new Error('Unable to patch Stencil');
    }
  }
  catch(error) {
    throw new Error(error)
  }

};

patchStencil();
