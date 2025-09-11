import { getNavItems, toggleNavGroup, focusNavItem } from './utils';

describe('focusNavItem', () => {
  it('should call focusLink on GCDS-NAV-LINK element', async () => {
    const navLink = document.createElement(
      'GCDS-NAV-LINK',
    ) as HTMLGcdsNavLinkElement;
    navLink.focusLink = jest.fn();
    const queue = [navLink];

    await focusNavItem(0, queue);

    expect(navLink.focusLink).toHaveBeenCalled();
  });

  it('should call focusTrigger on GCDS-NAV-GROUP element', async () => {
    const navGroup = document.createElement(
      'GCDS-NAV-GROUP',
    ) as HTMLGcdsNavGroupElement;
    navGroup.focusTrigger = jest.fn();
    const queue = [navGroup];

    await focusNavItem(0, queue);

    expect(navGroup.focusTrigger).toHaveBeenCalled();
  });
});

describe('toggleNavGroup', () => {
  it('should open a closed GCDS-NAV-GROUP', async () => {
    const nav = document.createElement('GCDS-TOP-NAV') as HTMLGcdsTopNavElement;
    const group = document.createElement(
      'GCDS-NAV-GROUP',
    ) as HTMLGcdsNavGroupElement;
    group.hasAttribute = jest.fn(() => false);
    group.toggleNav = jest.fn().mockResolvedValue(undefined);
    group.focusTrigger = jest.fn();
    nav.updateNavItemQueue = jest.fn();

    await toggleNavGroup(group, nav);

    expect(group.toggleNav).toHaveBeenCalled();
    expect(nav.updateNavItemQueue).toHaveBeenCalledWith(nav);
  });

  it('should close an open GCDS-NAV-GROUP', async () => {
    const nav = document.createElement('GCDS-TOP-NAV') as HTMLGcdsTopNavElement;
    const group = document.createElement(
      'GCDS-NAV-GROUP',
    ) as HTMLGcdsNavGroupElement;
    group.hasAttribute = jest.fn(() => true);
    group.toggleNav = jest.fn().mockResolvedValue(undefined);
    group.focusTrigger = jest.fn();
    nav.updateNavItemQueue = jest.fn();

    await toggleNavGroup(group, nav);

    expect(group.toggleNav).toHaveBeenCalled();
    expect(group.focusTrigger).toHaveBeenCalled();
    expect(nav.updateNavItemQueue).toHaveBeenCalledWith(nav);
  });
});

describe('getNavItems', () => {
  it('should return direct children of the element', async () => {
    const el = document.createElement('GCDS-NAV-GROUP');
    const child1 = document.createElement('GCDS-NAV-LINK');
    const child2 = document.createElement('GCDS-NAV-LINK');
    el.appendChild(child1);
    el.appendChild(child2);

    const items = await getNavItems(el);
    expect(items).toEqual([child1, child2]);
  });

  it('should include children of open GCDS-NAV-GROUP elements', async () => {
    const el = document.createElement('div');
    const group = document.createElement(
      'GCDS-NAV-GROUP',
    ) as HTMLGcdsNavGroupElement;
    group.open = true;
    const groupChild = document.createElement('GCDS-NAV-LINK');
    group.appendChild(groupChild);
    el.appendChild(group);

    const items = await getNavItems(el);
    expect(items).toContain(group);
    expect(items).toContain(groupChild);
  });

  it('should not include children of closed GCDS-NAV-GROUP elements', async () => {
    const el = document.createElement('div');
    const group = document.createElement(
      'GCDS-NAV-GROUP',
    ) as HTMLGcdsNavGroupElement;
    group.open = false;
    const groupChild = document.createElement('span');
    group.appendChild(groupChild);
    el.appendChild(group);

    const items = await getNavItems(el);
    expect(items).toContain(group);
    expect(items).not.toContain(groupChild);
  });
});
