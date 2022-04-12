export function format(label: string): string {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

export const inheritAttributes = (el: HTMLElement, attributes: string[] = []) => {
  const attributeObject = {};

  attributes.forEach(attr => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
}