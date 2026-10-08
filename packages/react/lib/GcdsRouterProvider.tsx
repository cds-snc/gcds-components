// GcdsRouterProvider.tsx
import React, { useEffect, useRef } from 'react';
import {
  setCurrentHref,
  setNavigationHandler,
} from '@gcds-core/components';

export interface GcdsRouterProviderProps {
  /**
   * Router navigate function, e.g. `useNavigate()` (React Router) or `useRouter().push` (Next.js)
   */
  navigate: (path: string) => unknown;
  /**
   * Current path from the router, e.g. `useLocation().pathname` or `usePathname()`.
   * Used to highlight the current page in every gcds-nav.
   */
  currentHref?: string;
  /**
   * Optional prefetch function, e.g. `useRouter().prefetch` (Next.js).
   * Called when a navigation link is hovered or focused.
   */
  prefetch?: (path: string) => unknown;
  /**
   * Router basename / basePath when the app is not served from the domain root
   */
  basename?: string;
  /**
   * Set when using HashRouter (links like "#/about")
   */
  hash?: boolean;
  children?: React.ReactNode;
}

/**
 * Connects every gcds-nav on the page to your router:
 * internal link clicks use client side navigation (new tab clicks and external
 * links are left to the browser) and the current page follows the router.
 *
 * @example
 * <GcdsRouterProvider navigate={useNavigate()} currentHref={useLocation().pathname}>
 *   <App />
 * </GcdsRouterProvider>
 */
export function GcdsRouterProvider({
  navigate,
  currentHref,
  prefetch,
  basename = '',
  hash = false,
  children,
}: GcdsRouterProviderProps) {
  // Keep the latest functions without re-registering on every render
  const navigateRef = useRef(navigate);
  const prefetchRef = useRef(prefetch);
  navigateRef.current = navigate;
  prefetchRef.current = prefetch;

  const base = basename.replace(/\/+$/, '');

  useEffect(() => {
    // Paths from gcds-nav include the basename, the router expects them without it
    const stripBase = (path: string) => {
      if (!base || !path.startsWith(base)) return path;
      const rest = path.slice(base.length);
      if (rest === '') return '/';
      return /^[/?#]/.test(rest) ? rest : path;
    };

    return setNavigationHandler(path => navigateRef.current(stripBase(path)), {
      prefetch: path => prefetchRef.current?.(stripBase(path)),
    });
  }, [base]);

  useEffect(() => {
    if (currentHref != null) {
      // HashRouter locations have no "#", hash routes are matched as "#/path"
      setCurrentHref(hash ? `#${currentHref}` : `${base}${currentHref}`);
    }
  }, [currentHref, base, hash]);

  // Go back to automatic detection when the provider unmounts
  useEffect(() => () => setCurrentHref(null), []);

  return <>{children}</>;
}
