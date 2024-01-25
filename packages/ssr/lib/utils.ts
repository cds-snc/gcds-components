// Original code from https://github.com/luwes/wesc

import { RefObject, useEffect } from 'react';

const REACT_PROP_TO_ATTRIBUTE_NAME_MAP = {
  className: 'class',
  classname: 'class',
  htmlFor: 'for',
  crossOrigin: 'crossorigin',
  viewBox: 'viewBox',
};

export const NATIVE_GLOBAL_EVENTS: (keyof GlobalEventHandlersEventMap)[] = [
  'animationcancel',
  'animationend',
  'animationiteration',
  'animationstart',
  'beforeinput',
  'blur',
  'cancel',
  'change',
  'click',
  'close',
  'contextmenu',
  'copy',
  'cut',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'emptied',
  'error',
  'focus',
  'focusin',
  'focusout',
  'formdata',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'reset',
  'resize',
  'scroll',
  'select',
  'selectionchange',
  'selectstart',
  'slotchange',
  'submit',
  'toggle',
  'touchcancel',
  'touchend',
  'touchmove',
  'touchstart',
  'transitioncancel',
  'transitionend',
  'transitionrun',
  'transitionstart',
  'wheel',
];

export const omitEventCallbacks = (customEvents: string[], props: unknown) => {
  const eventCallbacks = [...customEvents, ...NATIVE_GLOBAL_EVENTS].map((event) => toCallbackName(event));

  return Object.fromEntries(Object.entries(props).filter(([key]) => !eventCallbacks.includes(key)));
};

const clearAndUpper = (text: string) => text.replace(/-/, '').toUpperCase();

export const toPascalCase = (kebabText: string) => kebabText.replace(/(^\w|-\w)/g, clearAndUpper);

const toCallbackName = (name: string) => `on${toPascalCase(name)}`;

export const useEventListeners = (ref: RefObject<HTMLElement>, customEvents: string[], props: unknown) => {
  const events = [...customEvents, ...NATIVE_GLOBAL_EVENTS];
  useEffect(() => {
    const { current } = ref;
    if (!current) {
      return;
    }

    for (const event of events) {
      const callback = props[toCallbackName(event)];
      if (callback) {
        current.addEventListener(event, props[toCallbackName(event)]);
      }
    }

    return () => {
      for (const event of events) {
        const callback = props[toCallbackName(event)];
        if (callback) {
          current.removeEventListener(event, props[toCallbackName(event)]);
        }
      }
    };
  }, [ref]);
};

export const toNativeAttributeName = (name: string, value: unknown) => {
  if (REACT_PROP_TO_ATTRIBUTE_NAME_MAP[name]) {
    return REACT_PROP_TO_ATTRIBUTE_NAME_MAP[name];
  }

  if (typeof value == 'undefined' || (typeof value === 'boolean' && !value)) {
    return undefined;
  }

  if (/[A-Z]/.test(name)) {
    return name.toLowerCase();
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

export const gcdsAttributeGenerator = (tagName: string, props: object) => {
  if (props['class-name']) {
    props['class'] = props['class-name'];
    delete props['class-name'];
  }

  // Server side was always flagging this as wrong so forcing attr="" format
  for (const p in props) {
    if (typeof props[p] == 'boolean') {
      if (p) {
        props[p] = '';
      }
    }
  }

  switch (tagName) {
    case 'gcds-breadcrumbs-item': {
      props['role'] = props['role'] ? props['role'] : 'listitem';
      props['class'] = props['class'] ? `${props['class']} gcds-breadcrumbs-item` : 'gcds-breadcrumbs-item';

      return props;
    }
    case 'gcds-card': {
      props['type'] = props['type'] ? props['type'] : 'link';

      return props;
    }
    case 'gcds-error-message': {
      props['class'] = props['class'] ? `${props['class']} gcds-error-message-wrapper` : 'gcds-error-message-wrapper';
      props['id'] = props['id']
        ? `${props['id']} error-message-${props['message-id']}`
        : `error-message-${props['message-id']}`;

      return props;
    }
    case 'gcds-footer': {
      props['role'] = props['role'] ? props['role'] : 'contentInfo';

      return props;
    }
    case 'gcds-header': {
      props['role'] = props['role'] ? props['role'] : 'banner';

      return props;
    }
    case 'gcds-nav-link': {
      // props['class'] = props['class'] ? `${props['class']} gcds-nav-link--sidenav` : 'gcds-nav-link--sidenav';
      // props['role'] = props['role'] ? props['role'] : 'presentation';

      return props;
    }
    case 'gcds-nav-group': {
      const openClass = props['open'] ? 'gcds-nav-group-expanded' : '';
      if (openClass != '') {
        props['class'] = props['class'] ? `${props['class']} ${openClass}` : openClass;
      } else {
        props['class'] = props['class'] ? `${props['class']}${openClass}` : openClass;
      }
      props['role'] = props['role'] ? props['role'] : 'presentation';

      return props;
    }
    case 'gcds-text': {
      const defaultClass = props['display'] ? `d-${props['display']}` : '';
      if (defaultClass != '') {
        props['class'] = props['class'] ? `${props['class']} ${defaultClass}` : defaultClass;
      } else {
        props['class'] = props['class'] ? `${props['class']}${defaultClass}` : defaultClass;
      }

      return props;
    }
    default: {
      return props;
    }
  }
};
