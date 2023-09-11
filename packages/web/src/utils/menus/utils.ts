/**
 * Handle event for keyboard control of nav
 * @param {Event} event
 * @param {Element} nav
 * @param {any[]} queue
 */
export async function handleKeyDownNav(event, nav, queue) {
  const key = event.key;
  const currentIndex = queue.indexOf(
    document.activeElement == nav
      ? document.activeElement.shadowRoot.activeElement
      : document.activeElement,
  );
  const activeElement = queue[currentIndex];

  switch (key) {
    // Down arrow
    case 'ArrowDown':
      event.preventDefault();
      // If on last item, jump to first item
      if (currentIndex + 1 > queue.length - 1) {
        await focusNavItem(0, queue);
        // Jump to next item
      } else {
        await focusNavItem(currentIndex + 1, queue);
      }
      break;

    // Up arrow
    case 'ArrowUp':
      event.preventDefault();
      // If on first item, jump to last item
      if (currentIndex - 1 < 0) {
        await focusNavItem(queue.length - 1, queue);
        // Jump to previous item
      } else {
        await focusNavItem(currentIndex - 1, queue);
      }
      break;

    // Right arrow
    case 'ArrowRight':
      event.preventDefault();
      if (
        activeElement.nodeName == 'GCDS-NAV-GROUP' &&
        !activeElement.hasAttribute('open')
      ) {
        await toggleNavGroup(activeElement, nav);
      }
      break;

    // Left arrow || ESC
    case 'ArrowLeft':
    case 'Escape':
      event.preventDefault();
      // Currently focusing a gcds-nav-group
      if (
        activeElement.nodeName == 'GCDS-NAV-GROUP' &&
        activeElement.hasAttribute('open')
      ) {
        await toggleNavGroup(activeElement, nav);
        // Currently focus within a gcds-nav-group
      } else if (activeElement.parentNode.nodeName == 'GCDS-NAV-GROUP') {
        await toggleNavGroup(activeElement.parentNode, nav);
      } else if (
        activeElement.parentNode == nav &&
        (await (
          activeElement.parentNode as HTMLGcdsTopNavElement
        ).getNavSize()) == 'mobile'
      ) {
        await toggleNavGroup(queue[queue.length - 1], nav);
      }
      break;

    // Tab - only in top-nav
    case 'Tab':
      if (nav.nodeName != 'GCDS-SIDE-NAV') {
        // On open nav trigger
        if (
          activeElement.nodeName == 'GCDS-NAV-GROUP' &&
          activeElement.hasAttribute('open')
        ) {
          event.preventDefault();
          await toggleNavGroup(activeElement, nav);
          // In open nav group
        } else if (activeElement.parentNode.nodeName == 'GCDS-NAV-GROUP') {
          event.preventDefault();
          await toggleNavGroup(activeElement.parentNode, nav);
        }
      }
      break;

    // ENTER || SPACEBAR
    case 'Enter':
    case ' ':
      if (activeElement.nodeName == 'GCDS-NAV-GROUP') {
        event.preventDefault();
        await toggleNavGroup(activeElement, nav);
      }
      break;
  }
}

/**
 * Focus nav element
 * @param {Number} index
 * @param {any[]} queue
 */
async function focusNavItem(index, queue) {
  if (queue[index].nodeName == 'GCDS-NAV-LINK') {
    (queue[index] as HTMLGcdsNavLinkElement).focusLink();
  } else if (queue[index].nodeName == 'GCDS-NAV-GROUP') {
    (queue[index] as HTMLGcdsNavGroupElement).focusTrigger();
  }
}

/**
 *
 * @param {Element} group
 * @param {Element} nav
 */
async function toggleNavGroup(group, nav) {
  const navGroup = group as HTMLGcdsNavGroupElement;

  // Close nav group
  if (navGroup.hasAttribute('open')) {
    await navGroup.toggleNav();
    navGroup.focusTrigger();

    nav.updateNavItemQueue(nav);

    // Open nav group
  } else {
    await navGroup.toggleNav();

    setTimeout(async () => {
      await focusNavItem(
        0,
        document.activeElement == nav ? nav.children : navGroup.children,
      );
    }, 10);

    if (nav.nodeName == 'GCDS-SIDE-NAV') {
      nav.updateNavItemQueue(nav);
    } else {
      nav.updateNavItemQueue(
        document.activeElement == nav ? nav : navGroup,
        document.activeElement == nav ? false : true,
      );
    }
  }
}

/**
 * Return array of child elements of passed element
 * @param {Element} el
 * @return {any[]} indexedItems
 */
export async function getNavItems(el) {
  const indexedItems: Array<any> = Array.from(el.children);

  indexedItems.forEach(async item => {
    if (
      item.nodeName == 'GCDS-NAV-GROUP' &&
      (item as HTMLGcdsNavGroupElement).open
    ) {
      const groupChildren = await getNavItems(item);
      indexedItems.splice(indexedItems.indexOf(item) + 1, 0, ...groupChildren);
    }
  });

  return indexedItems;
}
