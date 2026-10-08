import {
  NavigationHandler,
  NavNode,
  NavVariant,
  PrefetchHandler,
} from './types';

/**
 * Single breakpoint for every nav. Below it, navs collapse into the mobile menu.
 * Layout is switched in JavaScript only, so CSS and JS can never disagree.
 */
export const MOBILE_QUERY = '(max-width: 47.9375em)';

export type MobileRole = 'owner' | 'merged';

/**
 * What the registry needs from each gcds-nav instance
 */
export interface NavInstance {
  el: HTMLElement;
  uid: number;
  variant: NavVariant;
  label: string;
  mobileMenu: 'combined' | 'separate';
  getModel(): NavNode[];
  setMobileRole(role: MobileRole): void;
  /** Called when anything shared changes: screen size, current page, other navs */
  registryChanged(): void;
  activateItem(event: MouseEvent, node: NavNode): boolean;
  closeMobileMenu(): void;
}

interface Registry {
  navs: NavInstance[];
  nextUid: number;
  isMobile: boolean;
  mq?: MediaQueryList;
  navigate?: NavigationHandler;
  prefetch?: PrefetchHandler;
  currentHref?: string | null;
  scrollLock?: { overflow: string } | null;
  urlListeners?: boolean;
}

const REGISTRY_KEY = Symbol.for('gcds.nav.registry');

/**
 * The registry lives on globalThis so every copy of the GCDS bundle on a page
 * (lazy loader, custom elements build, framework packages) shares the same state.
 */
export function getRegistry(): Registry {
  const g = globalThis as unknown as Record<symbol, Registry>;
  if (!g[REGISTRY_KEY]) {
    g[REGISTRY_KEY] = { navs: [], nextUid: 1, isMobile: false };
  }
  return g[REGISTRY_KEY];
}

const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function';

function initMediaQuery(registry: Registry) {
  if (registry.mq || !isBrowser()) return;

  registry.mq = window.matchMedia(MOBILE_QUERY);
  registry.isMobile = registry.mq.matches;
  registry.mq.addEventListener('change', e => {
    registry.isMobile = e.matches;
    if (!e.matches) {
      registry.navs.forEach(nav => nav.closeMobileMenu());
    }
    notifyAll();
  });
}

function initUrlListeners(registry: Registry) {
  if (registry.urlListeners || !isBrowser()) return;
  registry.urlListeners = true;

  // Keep automatic current page detection up to date in single page apps
  // when no framework adapter calls setCurrentHref()
  const update = () => {
    if (registry.currentHref == null) notifyAll();
  };
  window.addEventListener('popstate', update);
  window.addEventListener('hashchange', update);
  const navigation = (window as unknown as { navigation?: EventTarget })
    .navigation;
  navigation?.addEventListener?.('navigatesuccess', update);
}

export function nextUid(): number {
  return getRegistry().nextUid++;
}

export function isMobile(): boolean {
  const registry = getRegistry();
  initMediaQuery(registry);
  return registry.isMobile;
}

export function register(nav: NavInstance) {
  const registry = getRegistry();
  initMediaQuery(registry);
  initUrlListeners(registry);

  if (!registry.navs.includes(nav)) {
    registry.navs.push(nav);
  }
  elect();
}

export function unregister(nav: NavInstance) {
  const registry = getRegistry();
  registry.navs = registry.navs.filter(n => n !== nav);
  nav.closeMobileMenu();
  elect();
}

/**
 * Pick the nav that owns the combined mobile menu:
 * the first top nav, otherwise the first registered nav.
 */
function elect() {
  const registry = getRegistry();
  const combined = registry.navs.filter(n => n.mobileMenu !== 'separate');
  const owner = combined.find(n => n.variant === 'top') ?? combined[0];

  registry.navs.forEach(nav => {
    if (nav.mobileMenu === 'separate' || nav === owner) {
      nav.setMobileRole('owner');
    } else {
      nav.closeMobileMenu();
      nav.setMobileRole('merged');
    }
  });

  notifyAll();
}

export function notifyAll() {
  getRegistry().navs.forEach(nav => nav.registryChanged());
}

/**
 * Navs shown in the mobile menu of the given owner: top navs first, then side navs
 */
export function getSections(owner: NavInstance): NavInstance[] {
  if (owner.mobileMenu === 'separate') return [owner];

  const combined = getRegistry().navs.filter(n => n.mobileMenu !== 'separate');
  return [
    ...combined.filter(n => n.variant === 'top'),
    ...combined.filter(n => n.variant !== 'top'),
  ];
}

/**
 * Prevent page scroll behind the open mobile menu
 */
export function lockScroll() {
  const registry = getRegistry();
  if (registry.scrollLock || !isBrowser()) return;
  const root = document.documentElement;
  registry.scrollLock = { overflow: root.style.overflow };
  root.style.overflow = 'hidden';
}

export function unlockScroll() {
  const registry = getRegistry();
  if (!registry.scrollLock || !isBrowser()) return;
  document.documentElement.style.overflow = registry.scrollLock.overflow;
  registry.scrollLock = null;
}

export function getNavigationHandler(): NavigationHandler | undefined {
  return getRegistry().navigate;
}

export function getPrefetchHandler(): PrefetchHandler | undefined {
  return getRegistry().prefetch;
}

/**
 * Current page used for automatic `current` detection
 */
export function getCurrentHref(): string | null {
  const registry = getRegistry();
  if (registry.currentHref != null) return registry.currentHref;
  return isBrowser() ? window.location.href : null;
}

/**
 * Register the function that handles client side navigation for every gcds-nav on the page.
 * Called for plain left clicks on internal links. Returns a function that removes the handler.
 *
 * @example setNavigationHandler(path => router.push(path))
 */
export function setNavigationHandler(
  handler: NavigationHandler | null,
  options: { prefetch?: PrefetchHandler } = {},
): () => void {
  const registry = getRegistry();
  registry.navigate = handler ?? undefined;
  registry.prefetch = handler ? options.prefetch : undefined;

  return () => {
    if (registry.navigate === handler) {
      registry.navigate = undefined;
      registry.prefetch = undefined;
    }
  };
}

/**
 * Tell every gcds-nav which page is current. Use this with client side routers.
 * Pass null to go back to automatic detection from the browser URL.
 *
 * @example router.afterEach(to => setCurrentHref(to.fullPath))
 */
export function setCurrentHref(href: string | null) {
  const registry = getRegistry();
  if (registry.currentHref === href) return;
  registry.currentHref = href;
  notifyAll();
}
