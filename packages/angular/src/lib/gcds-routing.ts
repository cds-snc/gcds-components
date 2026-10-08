import {
  DestroyRef,
  EnvironmentProviders,
  NgZone,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { setCurrentHref, setNavigationHandler } from '@gcds-core/components';

/**
 * Connect every gcds-nav on the page to the Angular router:
 * - internal link clicks navigate with the router (new tab clicks and external links are left to the browser)
 * - the current page is highlighted from the router state
 *
 * @example
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideRouter(routes), provideGcdsRouting()],
 * };
 */
export function provideGcdsRouting(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      const router = inject(Router);
      const location = inject(Location);
      const zone = inject(NgZone);
      const destroyRef = inject(DestroyRef);

      // Paths from gcds-nav include the base href, the router expects them without it
      const removeHandler = setNavigationHandler(path =>
        zone.run(() => router.navigateByUrl(location.normalize(path))),
      );

      const subscription = router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          setCurrentHref(location.prepareExternalUrl(event.urlAfterRedirects));
        }
      });

      destroyRef.onDestroy(() => {
        removeHandler();
        subscription.unsubscribe();
        setCurrentHref(null);
      });
    }),
  ]);
}
