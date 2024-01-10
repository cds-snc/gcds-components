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
import { omitEventCallbacks, useEventListeners } from './lib/utils.js';
import { GcdsWrapper } from './lib/client'; 

if (!customElements.get('${elementName}')) {
  ${defineCustomElementFunction}();
}

const customEvents = ${customEvents.length > 0 ? `['${customEvents.join(`', '`)}']` : '[]'};
const ${toPascalCase(elementName)}WebComponent = React.forwardRef(({ children = [], ...props }, ref) => {
  const nonEventProps = omitEventCallbacks(customEvents, props);
  const nativeProps = {};

  for (const p in nonEventProps) {
    nativeProps[p.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()] = nonEventProps[p];
  }

  if (nativeProps.wrapped) {
    delete nativeProps.wrapped;
  }

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('${elementName}', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('${elementName}', { ...nativeProps, ref }, children);
});

function ${toPascalCase(elementName)}(props) {
  if (!props['noSSR'] && typeof window == 'undefined') {
    let cloned = [];

    // Pass wrapped prop to children GCDS components
    if (Array.isArray(props.children)) {
      for (let x = 0; x< props.children.length; x++) {
        if (props.children[x].type && props.children[x].type.toString().includes('Gcds')) {
          cloned.push(React.cloneElement(props.children[x], { wrapped: true, key: x }));
        } else if (typeof props.children[x] == 'string') {
          cloned.push(props.children[x]);
        } else {
          cloned.push(React.cloneElement(props.children[x], { key: x }));
        }
      }
    } else if (typeof props.children == 'object') {
      if (props.children.type && props.children.type.toString().includes('Gcds')) {
        cloned.push(React.cloneElement(props.children, { wrapped: true, key: 0 }));
      } else {
        cloned.push(React.cloneElement(props.children, { key: 0 }));
      }
    } else if (typeof props.children == 'string') {
      cloned = props.children;
    }

    // Render without GcdsWrapper if wrapped: true
    if (props.wrapped) {
      return(
        <${toPascalCase(elementName)}WebComponent {...props}>
          {cloned}
        </${toPascalCase(elementName)}WebComponent>
      )
    }

    return(
      <GcdsWrapper>
        <${toPascalCase(elementName)}WebComponent {...props}>
          {cloned}
        </${toPascalCase(elementName)}WebComponent>
      </GcdsWrapper>
    )
  } else {
    return (
      <${toPascalCase(elementName)}WebComponent {...props}>
        {props.children}
      </${toPascalCase(elementName)}WebComponent>
    )
  }
}

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
type IsEnum<T> = T extends ${enums.join(' | ')} ? true : false;
type EnumsToStringLiterals<T> = {
  [K in keyof T]: Exclude<IsEnum<T[K]> extends true ? \`\${T[K]}\` : T[K], 'undefined'>;
};

${elements.map((elementName) => toTypeDeclaration(elementName, customEvents[elementName])).join('\n')}

${toExport(elements.map(toPascalCase).join(',\n'))}
`;

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
