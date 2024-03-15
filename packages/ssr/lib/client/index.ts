// Original code from https://github.com/luwes/wesc

import { PropsWithChildren } from 'react';

// Must go in a client component
// > Otherwise will error:
// > Attempted to call the default export of ... from the server but it's on the client.
// > It's not possible to invoke a client function from the server, it can only be rendered
// > as a Component or passed to props of a Client Component.
export function GcdsWrapper({ children }: PropsWithChildren) {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line import/no-unresolved
    return import('./render.js').then(({ render }) => render(resolve(children)));
  }

  return children;
}

/* eslint-disable */
function resolve(children: any, result: any[] = []) {
  const nodes: any[] = [].concat(children ?? []);

  for (const node of nodes) {
    if (typeof node === 'string') {
      result.push(node);
    } else if (typeof node.type === 'string') {
      const copy = { ...node, props: { ...node.props } };
      if (copy.props.children) {
        copy.props.children = [];
      }

      resolve(node.props.children, copy.props.children);
      result.push(copy);
    } else if (typeof node.type === 'function') {
      if (/^\s*class\s+/.test(node.type.toString())) {
        // Class component
        const comp = new node.type(node.props);
        const vnode = comp.render();
        resolve(vnode, result);
      } else {
        // Function component
        resolve(node.type(node.props), result);
      }
    } else if (typeof node.type === 'object' && typeof node.type.render === 'function') {
      resolve(node.type.render(node.props), result);
    }
  }

  return result;
}