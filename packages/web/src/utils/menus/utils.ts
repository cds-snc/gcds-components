/**
* Handle event for keyboard control of menu
* @param {Event} event
* @param {Element} menu
* @param {any[]} queue
*/
export async function handleKeyDownMenu(event, menu, queue) {
  const key = event.key;
  const currentIndex = queue.indexOf(document.activeElement);
  const activeElement = queue[currentIndex];

  switch(key) {
    // Down arrow
    case 'ArrowDown':
      event.preventDefault();
      // If on last item, jump to first item
      if (currentIndex + 1 > queue.length - 1) {
        await focusElement(0, queue);
      // Jump to next item
      } else {
        await focusElement(currentIndex + 1, queue);
      }
      break;

    // Up arrow
    case 'ArrowUp':
      event.preventDefault();
      // If on first item, jump to last item
      if (currentIndex - 1 < 0) {
        await focusElement(queue.length - 1, queue);
      // Jump to previous item
      } else {
        await focusElement(currentIndex - 1, queue);
      }
      break;

    // Right arrow
    case 'ArrowRight':
      event.preventDefault();
      // If current item is group-menu trigger
      if (activeElement.nodeName == "GCDS-MENU-GROUP" && !activeElement.hasAttribute("open")) {
        await openMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
      }
      break;

    // Left arrow || ESC
    case 'ArrowLeft':
    case 'Escape':
      event.preventDefault();
      // Currently focusing a gcds-menu-group
      if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
        await closeMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
      // Currently focus within a gcds-menu-group
      } else if (activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {
        await closeMenuGroup(activeElement.parentNode as HTMLGcdsMenuGroupElement, menu);
      }
      break;

    // Tab - only in site-menu
    case 'Tab':
      if (menu.nodeName != "GCDS-SIDEBAR-MENU") {
        // On open menu trigger
        if (activeElement.nodeName == "GCDS-MENU-GROUP" && activeElement.hasAttribute("open")) {
          event.preventDefault();
          await (activeElement as HTMLGcdsMenuGroupElement).toggleMenu();
        // In open menu group
        } else if(activeElement.parentNode.nodeName == "GCDS-MENU-GROUP") {
          event.preventDefault();
          await closeMenuGroup(activeElement.parentNode as HTMLGcdsMenuGroupElement, menu);
        }
      }
      break;

    // ENTER || SPACEBAR
    case 'Enter':
    case ' ':
      if (activeElement.nodeName == "GCDS-MENU-GROUP") {
        event.preventDefault();
        if (activeElement.hasAttribute("open")) {
          await closeMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
        } else {
          await openMenuGroup(activeElement as HTMLGcdsMenuGroupElement, menu);
        }
      }
      break;
  }
};

/**
* Focus menu element
* @param {Number} index
* @param {any[]} queue
*/
async function focusElement(index, queue) {
  if (queue[index].nodeName == "GCDS-MENU-LINK") {
    (queue[index] as HTMLGcdsMenuLinkElement).focusLink();
  } else if (queue[index].nodeName == "GCDS-MENU-GROUP") {
    (queue[index] as HTMLGcdsMenuGroupElement).focusTrigger();
  }
}
  
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

  indexedItems.forEach(async (item) => {
    if (item.nodeName == "GCDS-MENU-GROUP" && (item as HTMLGcdsMenuGroupElement).open) {
      let groupChildren = await getMenuItems(item);
      indexedItems.splice(indexedItems.indexOf(item) + 1, 0, ...groupChildren);
    }
  });

  return indexedItems;
}

  /**
* Create mobile menu element in passed menu
* @param {HTMLElement} menu
*/
export async function configureMobileMenu(menu: HTMLElement) {
    console.log(menu)
  let children = Array.from(menu.children);

  let menuGroup = document.createElement("gcds-menu-group") as HTMLGcdsMenuGroupElement;
  menuGroup.heading = "Menu";
  menuGroup.classList.add('gcds-mobile-menu');

  for (let element of children) {
    if (!element.hasAttribute("slot")) {
      menuGroup.appendChild(element);
    }
  }

  menu.appendChild(menuGroup);
}

/**
* Unpack menu items from mobile menu in passed menu
* @param {HTMLElement} menu
*/
export async function unpackMobileMenu(menu: HTMLElement) {
  let mobileMenuChildren = [];
  let mobileMenu: Element;

  for (let item of Array.from(menu.children)) {
    if (!item.hasAttribute("slot")) {
      mobileMenuChildren = Array.from(item.children);
      mobileMenu = item;
    }
  }

  for (let element of mobileMenuChildren) {
    menu.appendChild(element);
  }

  mobileMenu.remove();
}