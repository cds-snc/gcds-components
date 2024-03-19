// Original code from https://github.com/luwes/wesc

import React from 'react';
import 'element-internals-polyfill';

declare global {
  interface HTMLElement {
    connectedCallback(): void;
  }
}

// TODO: find some way to automate this
const delFocusElements = [
  'gcds-button',
  'gcds-checkbox',
  'gcds-fieldset',
  'gcds-file-uploader',
  'gcds-input',
  'gcds-radio-group',
  'gcds-select',
  'gcds-textarea',
];

export async function render(children) {
  const container = document.createElement('div');
  renderChildren(children, container);
  document.body.appendChild(container);
  container.remove();

  return children;
}

function renderChildren(children, parent: HTMLElement) {
  for (const node of children ?? []) {
    if (typeof node.type === 'string') {
      const element = createElement(node.type, node.props);

      if (element) {
        parent.appendChild(element);
        renderChildren(node.props.children, element);

        if (node.type.includes('-')) {
          const originalConnected = element.connectedCallback;
          element.connectedCallback = function () {
            originalConnected?.call(element);

            // Some web components defer updates. Add a timeout larger than micro task.
            setTimeout(() => {
              if (!element.shadowRoot) {
                return;
              }

              const styles = Array.from(element.shadowRoot.querySelectorAll('style') ?? []);
              for (const style of styles) {
                style.textContent = minimizeCss(style.textContent ?? '');
              }

              renderCustomElements(element.shadowRoot);

              const templateProps = {
                shadowrootmode: element.shadowRoot.mode ?? 'open',
                dangerouslySetInnerHTML: {
                  __html: element.shadowRoot.innerHTML,
                },
              };

              if (delFocusElements.includes(node.type)) {
                templateProps['shadowrootdelegatesfocus'] = 'true';
              }

              const templateShadowRoot = React.createElement('template', templateProps);

              if (node.props.children) {
                node.props.children.unshift(templateShadowRoot);
              } else {
                node.props.children = [templateShadowRoot];
              }

              Object.assign(node.props, attributesToProps(element.attributes));

              if (typeof node.props.style === 'string') {
                node.props.style = parseStyle(node.props.style);
              }
            }, 0);
          };
        }
      }
    }
  }
}

const renderCustomElements = (shadowRoot: ShadowRoot) => {
  // Find all custom elements in the shadow root
  const customElements = Array.from(shadowRoot.innerHTML.matchAll(/<([a-z0-9]+-[\w-]+)/g)).map(([, e]) => e);
  for (const element of customElements) {
    const elementShadowRoot = shadowRoot.querySelector(element)?.shadowRoot;

    if (elementShadowRoot) {
      const template = document.createElement('template');
      template.setAttribute('shadowrootmode', 'open');
      template.innerHTML = elementShadowRoot?.innerHTML;
      renderCustomElements(elementShadowRoot);
      shadowRoot.querySelector(element)?.appendChild(template);
    }
  }
};

const reservedReactProperties = new Set(['children', 'localName', 'ref']);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createElement = (type: string, props: Record<string, any>) => {
  const element = document.createElement(type);

  for (let name in props) {
    if (reservedReactProperties.has(name)) {
      continue;
    }

    const value = props[name];

    if (name === 'style') {
      if (typeof value === 'string') {
        element.style.cssText = value;
      } else {
        if (value) {
          for (name in value) {
            setStyle(element.style, name, value[name]);
          }
        }
      }
    } else if (name !== 'dangerouslySetInnerHTML') {
      if (
        name !== 'width' &&
        name !== 'height' &&
        name !== 'href' &&
        name !== 'list' &&
        name !== 'form' &&
        name !== 'tabIndex' &&
        name !== 'download' &&
        name !== 'rowSpan' &&
        name !== 'colSpan' &&
        name in element
      ) {
        try {
          element[name] = value ?? '';
          continue;
        } catch {
          //
        }
      }

      if (typeof value === 'function') {
        // never serialize functions as attribute values
      } else if ((value !== null || value !== undefined) && (value !== false || name[4] === '-')) {
        element.setAttribute(name.toLowerCase(), value);
      } else {
        element.removeAttribute(name);
      }
    }
  }

  return element;
};

const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

const setStyle = (style: CSSStyleDeclaration, key: string, value?: string | number | null) => {
  if (key[0] === '-') {
    style.setProperty(key, `${value ?? ''}`);
  } else if (value === null || value === undefined) {
    style[key] = '';
  } else if (typeof value !== 'number' || IS_NON_DIMENSIONAL.test(key)) {
    style[key] = value;
  } else {
    style[key] = `${value}px`;
  }
};

const attributesToProps = (attributes: NamedNodeMap) =>
  Array.from(attributes).reduce((props, { name, value }) => ({ ...props, [name]: value }), {});

const parseStyle = (style: string) =>
  style.split(';').reduce((styles, property) => {
    const [name, value] = property.split(':');

    return { ...styles, [name.trim()]: value.trim() };
  }, {});

const minimizeCss = (content: string) =>
  content
    .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
    // now all comments, newlines and tabs have been removed
    .replace(/ {2,}/g, ' ')
    // now there are no more than single adjacent spaces left
    .replace(/ ([{:}]) /g, '$1')
    .replace(/([;,]) /g, '$1')
    .replace(/ !/g, '!');
