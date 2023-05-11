export function format(label: string): string {
  return (label ? ` ${label}` : 'Fallback Button Label');
}

export const inheritAttributes = (el: HTMLElement, shadowElement: HTMLElement, attributes: string[] = []) => {
  const attributeObject = {};

  // Check for any aria or data attributes
  for (let i = 0; i < el.attributes.length; i++) {
    let attr = el.attributes[i];
    if (attr.name.includes("aria-") || attr.name.includes("data-")) {
      attributeObject[attr.name] = attr.value;
      el.removeAttribute(attr.name);
    }
  }

  // Check for attributes defined by component
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

export const UpDownArrowMenuMovement = (key, children) => {
  let currentIndex = children.indexOf(document.activeElement);
  console.log(`${document.activeElement.nodeName} - ${currentIndex}`)

  if (key == 40) {

    if (currentIndex + 1 > children.length - 1) {

      if (children[0].nodeName == "GCDS-MENU-LINK") {
        (children[0] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (children[0].nodeName == "GCDS-MENU-GROUP") {
        (children[0] as HTMLGcdsMenuGroupElement).focusTrigger();
      }

    } else {

      if (children[currentIndex + 1].nodeName == "GCDS-MENU-LINK") {
        (children[currentIndex + 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (children[currentIndex + 1].nodeName == "GCDS-MENU-GROUP") {
        (children[currentIndex + 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }

    }
  } else if (key == 38) {

    if (currentIndex - 1 < 0) {

      if (children[children.length - 1].nodeName == "GCDS-MENU-LINK") {
        (children[children.length - 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (children[children.length - 1].nodeName == "GCDS-MENU-GROUP") {
        (children[children.length - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }

    } else {

      if (children[currentIndex - 1].nodeName == "GCDS-MENU-LINK") {
        (children[currentIndex - 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (children[currentIndex - 1].nodeName == "GCDS-MENU-GROUP") {
        (children[currentIndex - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }

    }
  }
}