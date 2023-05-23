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