// Original code from https://github.com/luwes/wesc

// Must go in a client component
// > Otherwise will error:
// > Attempted to call the default export of ... from the server but it's on the client.
// > It's not possible to invoke a client function from the server, it can only be rendered
// > as a Component or passed to props of a Client Component.
export function GcdsWrapper({ children }) {
  if (typeof window === 'undefined') {
    // eslint-disable-next-line import/no-unresolved
    return import('./render.js').then(({ render }) => render(resolve(children)));
  }

  return children;
}

function resolve(children, result = []) {
  const nodes = [].concat(children ?? []);

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
        const props = { ...node.props };
        // Apply extra isAlreadyWrapped prop to GCDS components
        if (node.type.toString().includes('Gcds')) {
          props.isAlreadyWrapped = true;
        }
        resolve(node.type(props), result);
      }
    } else if (typeof node.type === 'object' && typeof node.type.render === 'function') {
      const props = { ...node.props };
      const renderedComp = node.type.render(node.props);
      // Apply extra isAlreadyWrapped attribute to GCDS components
      if (renderedComp.type.includes('gcds-')) {
        props.isAlreadyWrapped = true;
      }
      resolve(node.type.render(props), result);
    }
  }

  return result;
}
