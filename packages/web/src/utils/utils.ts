export function format(label: string): string {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

export const inheritAttributes = (el: HTMLElement, shadowElement: HTMLElement, attributes: string[] = []) => {
  const attributeObject = {};

  attributes.forEach(attr => {
    if (el.hasAttribute(attr) || (shadowElement && shadowElement.hasAttribute(attr))) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
}

export const assignLanguage = (el: HTMLElement) => {
  let lang = "";
  if(!el.getAttribute('lang')) {
    if (document.documentElement.getAttribute('lang') == 'en' || !document.documentElement.getAttribute('lang')) {
      lang = 'en';
    } else {
      lang = 'fr';
    }
  } else if(el.getAttribute('lang') == 'en') {
    lang = 'en';
  } else {
    lang = 'fr';
  }

  return lang;
}

export const observerConfig = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['lang']
  };

 // For validation - check if element has a checked checkbox/radio sibling
export const elementGroupCheck = (name) => {
  let hasCheck = false;
  const element = document.querySelectorAll<HTMLFormElement>(`input[name=${name}]`);
  for (var i = 0; i < element.length; i++) {
    if (element[i].checked) {
      hasCheck = true;
    }
  }
  return !hasCheck;
}