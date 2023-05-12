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

/**
* Handle event for keyboard control of menu
* @param {Event} event
* @param {Element} menu
* @param {any[]} queue
*/
export async function handleKeyDownMenu(event, menu, queue) {
  let key = event.keyCode || event.which;
  let currentIndex = queue.indexOf(document.activeElement);
  let activeElement = queue[currentIndex];

  // Down arrow
  if (key == 40) {
    event.preventDefault();
    // If on last item, jump to first item
    if (currentIndex + 1 > queue.length - 1) {
      if (queue[0].nodeName == "GCDS-MENU-LINK") {
        (queue[0] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (queue[0].nodeName == "GCDS-MENU-GROUP") {
        (queue[0] as HTMLGcdsMenuGroupElement).focusTrigger();
      }
    // Jump to next item
    } else {
      if (queue[currentIndex + 1].nodeName == "GCDS-MENU-LINK") {
        (queue[currentIndex + 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (queue[currentIndex + 1].nodeName == "GCDS-MENU-GROUP") {
        (queue[currentIndex + 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }
    }
  // Up arrow
  } else if (key == 38) {
    event.preventDefault();
    // If on first item, jump to last item
    if (currentIndex - 1 < 0) {
      if (queue[queue.length - 1].nodeName == "GCDS-MENU-LINK") {
        (queue[queue.length - 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (queue[queue.length - 1].nodeName == "GCDS-MENU-GROUP") {
        (queue[queue.length - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }
    // Jump to previous item
    } else {
      if (queue[currentIndex - 1].nodeName == "GCDS-MENU-LINK") {
        (queue[currentIndex - 1] as HTMLGcdsMenuLinkElement).focusLink();
      } else if (queue[currentIndex - 1].nodeName == "GCDS-MENU-GROUP") {
        (queue[currentIndex - 1] as HTMLGcdsMenuGroupElement).focusTrigger();
      }
    }
  // Right arrow
  } else if (key == 39) {
    event.preventDefault();
    // If current item is group-menu trigger
    if (activeElement.nodeName == "GCDS-MENU-GROUP" && !activeElement.hasAttribute("open")) {
      await openMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
    }
  // Left || ESC
  } else if (key == 37 || key == 27) {
    event.preventDefault();
    // Currently focusing a gcds-menu-group
    if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
      await closeMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
    // Currently focus within a gcds-menu-group
    } else if (activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {
      await closeMenuGroup(activeElement.parentNode as HTMLGcdsMenuGroupElement, menu);
    }
  // Tab
  // Does not do anything in sidebar
  } else if (key == 9 && menu.nodeName != "GCDS-SIDEBAR-MENU") {
    // On open menu trigger
    if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
      event.preventDefault();
      await (activeElement as HTMLGcdsMenuGroupElement).toggleMenu();
    // In open menu group
    } else if(activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {
      event.preventDefault();
      await closeMenuGroup(activeElement.parentNode as HTMLGcdsMenuGroupElement, menu);
    }
  // Enter || Spacebar
  } else if (key == 13 || key == 32) {
    if (activeElement.nodeName == "GCDS-MENU-GROUP") {
      event.preventDefault();
      if (activeElement.hasAttribute("open")) {
        await closeMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
      } else {
        await openMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
      }
    }
  }
};


/**
* Open menu group
* @param {Element} groupTrigger
* @param {Element} menu
*/
async function openMenuGroup(groupTrigger, menu) {
  await groupTrigger.toggleMenu();

  if (groupTrigger.children[0].nodeName == "GCDS-MENU-GROUP") {
    setTimeout(() => {
      (groupTrigger.children[0] as HTMLGcdsMenuGroupElement).focusTrigger();
    }, 10);
  } else if (groupTrigger.children[0].nodeName == "GCDS-MENU-LINK") {
    setTimeout(() => {
      (groupTrigger.children[0] as HTMLGcdsMenuLinkElement).focusLink();
    }, 10);
  }

  if (menu.nodeName == "GCDS-SIDEBAR-MENU") {
    menu.updateMenuItemQueue(menu);
  } else {
    menu.updateMenuItemQueue(groupTrigger, true);
  }
}

/**
* Close menu group
* @param {Element} groupTrigger
* @param {Element} menu
*/
async function closeMenuGroup(groupTrigger, menu) {
  await groupTrigger.toggleMenu();
  groupTrigger.focusTrigger();

  menu.updateMenuItemQueue(menu);
}

/**
* Return array of child elements of passed element
* @param {Element} el
* @return {any[]} indexedItems
*/
export async function getMenuItems(el) {
  let indexedItems: Array<any> = Array.from(el.children);
  let length = indexedItems.length;

  for (let i = 0; i < length; i++) {
    if (indexedItems[i].nodeName == "GCDS-MENU-GROUP" && (indexedItems[i] as HTMLGcdsMenuGroupElement).open) {
      let groupChildren = await getMenuItems(indexedItems[i]);
      indexedItems.splice(i +1, 0, ...groupChildren);
    }
  }

  return indexedItems;
}
