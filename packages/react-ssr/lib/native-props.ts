const REACT_PROP_TO_ATTRIBUTE_NAME_MAP = {
  className: 'class',
  classname: 'class',
  htmlFor: 'for',
  crossOrigin: 'crossorigin',
  viewBox: 'viewBox',
};

const toNativeAttributeName = (name: string, value: unknown): string | undefined => {
  if (name in REACT_PROP_TO_ATTRIBUTE_NAME_MAP) {
    return REACT_PROP_TO_ATTRIBUTE_NAME_MAP[name] as string;
  }

  if (typeof value === 'undefined' || value === false) {
    return undefined;
  }

  if (/[A-Z]/.test(name)) {
    return name.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (substring, offset) => `${offset ? '-' : ''}${substring.toLowerCase()}`);
  }

  return name;
};

export const toNativeAttributeValue = (value: unknown) =>
  typeof value === 'boolean' ? '' : Array.isArray(value) ? value.join(' ') : value;

export const toNativeProps = (props = {}) =>
  Object.entries(props).reduce((transformedProps, [name, value]) => {
    const attributeName = toNativeAttributeName(name, value);

    if (attributeName) {
      transformedProps[attributeName] = toNativeAttributeValue(value);
    }

    return transformedProps;
  }, {});
