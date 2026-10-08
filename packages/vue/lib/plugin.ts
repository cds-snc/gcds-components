import { App, Plugin } from 'vue';
import { defineCustomElements } from '@gcds-core/components/loader';
import {
  setCurrentHref,
  setNavigationHandler,
} from '@gcds-core/components';

/**
 * Minimal shape of a Vue Router instance, so vue-router stays an optional dependency
 */
export interface GcdsRouterLike {
  push(to: string): unknown;
  resolve(to: string): { href: string };
  afterEach(guard: (to: { fullPath: string }) => unknown): () => void;
  currentRoute: { value: { fullPath: string; matched: unknown[] } };
  options?: { history?: { base?: string } };
}

export interface GcdsComponentsOptions {
  /**
   * Vue Router instance. Connects every gcds-nav on the page to the router:
   * internal link clicks use router.push (new tab clicks and external links are
   * left to the browser) and the current page follows the router.
   */
  router?: GcdsRouterLike;
}

function connectRouter(app: App, router: GcdsRouterLike) {
  const base = (router.options?.history?.base ?? '').replace(/\/+$/, '');

  // Paths from gcds-nav include the router base, router.push expects them without it
  const stripBase = (path: string) => {
    if (!base || !path.startsWith(base)) return path;
    const rest = path.slice(base.length);
    if (rest === '') return '/';
    return /^[/?#]/.test(rest) ? rest : path;
  };

  const removeHandler = setNavigationHandler(path => router.push(stripBase(path)));
  const updateCurrent = (fullPath: string) =>
    setCurrentHref(router.resolve(fullPath).href);

  const removeGuard = router.afterEach(to => updateCurrent(to.fullPath));

  // The plugin may be installed after the initial navigation
  if (router.currentRoute.value.matched.length) {
    updateCurrent(router.currentRoute.value.fullPath);
  }

  // app.onUnmount is available from Vue 3.5
  (app as App & { onUnmount?: (fn: () => void) => void }).onUnmount?.(() => {
    removeHandler();
    removeGuard();
    setCurrentHref(null);
  });
}

/**
 * @example
 * createApp(App).use(router).use(GcdsComponents, { router }).mount('#app');
 */
export const GcdsComponents: Plugin = {
  async install(app: App, options: GcdsComponentsOptions = {}) {
    defineCustomElements();

    if (options.router) {
      connectRouter(app, options.router);
    }
  },
};
