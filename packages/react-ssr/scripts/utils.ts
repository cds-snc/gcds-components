import { parse as babelParse } from '@babel/parser';
import { Statement, TSInterfaceDeclaration, TSModuleDeclaration, TSPropertySignature, TSTypeElement } from '@babel/types';
import { stdout } from 'node:process';
import { NATIVE_GLOBAL_EVENTS, toPascalCase } from '../lib/utils';

const toKebabCase = (input: string) =>
  input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const toExport = (exportName: string) => `export { ${exportName} };`;

const toWebComponentTagName = (eventMapName: string) =>
  toKebabCase(eventMapName.replace('HTML', '').replace('ElementEventMap', ''));

const isElementEventMap = (node: Statement): node is TSInterfaceDeclaration =>
  node.type === 'TSInterfaceDeclaration' && node.id['name'].endsWith('ElementEventMap');

const isGlobalTSModuleDeclaration = (node: Statement): node is TSModuleDeclaration =>
  node.type === 'TSModuleDeclaration' && node.id['name'] === 'global';

const isTSPropertySignature = (node: TSTypeElement): node is TSPropertySignature => node.type === 'TSPropertySignature';

export const parseComponentsEvents = (source: string) => {
  const { body } = babelParse(source, {
    sourceType: 'module',
    plugins: [['typescript', { dts: true }]],
  }).program;

  return body.reduce((events, node) => {
    if (!(isGlobalTSModuleDeclaration(node) && Array.isArray(node.body.body))) {
      return events;
    }

    const statements = node.body.body.filter(isElementEventMap);

    for (const { id, body } of statements) {
      events[toWebComponentTagName(id.name)] = {
        name: id.name,
        events: body.body.filter(isTSPropertySignature).map(({ key }) => key['value']),
      };
    }

    return events;
  }, {});
};

export const parseEnums = (source: string) =>
  source?.match(/export { (([A-Z][A-Z\d_]+,? ?)+) } from ".+exports?";/g)?.flatMap((match) =>
    match
      .split('{')[1]
      .split('}')[0]
      .split(',')
      .map((enumName) => enumName.trim()),
  ) ?? [];

export const toModuleFile = (
  defineCustomElementFunction: string,
  importPath: string,
  elementName: string,
  customEvents: string[] = [],
) => `import React, { useImperativeHandle, useRef } from 'react';
import { ${defineCustomElementFunction} } from '${importPath}';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('${elementName}')) {
  ${defineCustomElementFunction}();
}

const customEvents = ${customEvents.length > 0 ? `['${customEvents.join(`', '`)}']` : '[]'};
const ${toPascalCase(elementName)} = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("${elementName}", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('${elementName}', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('${elementName}', { ...nativeProps, ref }, children);
});

${toExport(toPascalCase(elementName))}
`;

const toTypeDeclaration = (elementName: string, customEvents?: { name: string; events: string[] }) =>
  `declare const ${toPascalCase(
    elementName,
  )}: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.${toPascalCase(
    elementName,
  )}> & {
    slot: string
  } & GlobalEventHandlers${
    customEvents
      ? ` & {
    ${customEvents.events
      .map(
        (eventName) =>
          `on${toPascalCase(eventName)}: (event: ${toPascalCase(elementName)}CustomEvent<${
            customEvents.name
          }['${eventName}']>) => void`,
      )
      .join(',\n  ')}
  }`
      : ''
  }>> & React.RefAttributes<HTMLElement | undefined>>;`;

export const toTypesFile = (
  elements: string[],
  enums: string[],
  customEvents: Record<string, { name: string; events: string[] }>,
) => `import type { Components, ${[
  ...enums,
  ...elements.map((elementName) => `${toPascalCase(elementName)}CustomEvent`),
].join(', ')} } from '@cdssnc/gcds-components';
import type React from 'react';

type GlobalEventHandlers = {
${NATIVE_GLOBAL_EVENTS.map(
  (eventName) => `on${toPascalCase(eventName)}: (event: GlobalEventHandlersEventMap['${eventName}']) => void`,
).join(',\n')}
};
${isEnum(enums)}
type EnumsToStringLiterals<T> = {
  [K in keyof T]: Exclude<IsEnum<T[K]> extends true ? \`\${T[K]}\` : T[K], 'undefined'>;
};

${elements.map((elementName) => toTypeDeclaration(elementName, customEvents[elementName])).join('\n')}

${toExport(elements.map(toPascalCase).join(',\n'))}
`;

export const isEnum = (enums) => (enums.length > 0 ? `type IsEnum<T> = T extends ${enums.join(' | ')} ? true : false;` : '');

export const toIndexFile = (modules: string[]) => `${modules.map((module) => `export * from './${module}';`).join('\n')}\n`;

export const printProgress = (progress: number) => {
  if (!stdout.clearLine) {
    return;
  }

  stdout.clearLine(0);
  stdout.cursorTo(0);
  stdout.write(`Progress: ${parseInt(`${progress}`)}%`);
  if (progress === 100) {
    stdout.write('\n');
  }
};
