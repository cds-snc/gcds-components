import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router, provideRouter } from '@angular/router';
import { GcdsRouterDirective } from '../../src/lib/directives/gcds-router-link';
import { provideGcdsRouting } from '../../src/lib/gcds-routing';

const REGISTRY_KEY = Symbol.for('gcds.nav.registry');

@Component({
  template: `
    <gcds-nav-link id="legacy" href="/about" routerLink="/about"></gcds-nav-link>
    <gcds-nav id="nav" gcdsRouterLink></gcds-nav>
  `,
  imports: [GcdsRouterDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class HostComponent {}

@Component({ template: '' })
class EmptyComponent {}

const gcdsClick = (detail: unknown) =>
  new CustomEvent('gcdsClick', { detail, bubbles: true, cancelable: true });

describe('GcdsRouterDirective', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideRouter([{ path: '**', component: EmptyComponent }])],
    });
    router = TestBed.inject(Router);
    jest.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
  });

  const setup = () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  };

  it('navigates on a plain click', () => {
    const legacy = setup().querySelector('#legacy')!;
    const event = gcdsClick('/about');

    legacy.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/about', expect.anything());
  });

  it('leaves modifier clicks to the browser (open in new tab)', () => {
    const legacy = setup().querySelector('#legacy')!;

    // Captured before the click reaches the shadow DOM, like a real ctrl/cmd click
    legacy.dispatchEvent(new MouseEvent('click', { ctrlKey: true }));
    const event = gcdsClick('/about');
    legacy.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('uses detail.path and shouldRoute from gcds-nav', () => {
    const nav = setup().querySelector('#nav')!;

    const skipped = gcdsClick({ href: 'https://canada.ca', path: 'https://canada.ca', shouldRoute: false });
    nav.dispatchEvent(skipped);
    expect(skipped.defaultPrevented).toBe(false);

    const routed = gcdsClick({ href: '../blog/', path: '/blog/', shouldRoute: true });
    nav.dispatchEvent(routed);
    expect(routed.defaultPrevented).toBe(true);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/blog/', expect.anything());
  });
});

describe('provideGcdsRouting', () => {
  afterEach(() => {
    delete (globalThis as any)[REGISTRY_KEY];
  });

  it('registers a navigation handler that strips the base href', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: EmptyComponent }]),
        provideGcdsRouting(),
      ],
    });

    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);
    jest.spyOn(location, 'normalize').mockImplementation(path => path.replace(/^\/app/, ''));
    jest.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    await TestBed.inject(Router).navigateByUrl('/start');

    const registry = (globalThis as any)[REGISTRY_KEY];
    expect(typeof registry.navigate).toBe('function');

    registry.navigate('/app/about', {});
    expect(router.navigateByUrl).toHaveBeenCalledWith('/about');
  });

  it('updates the current page after navigation', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: EmptyComponent }]),
        provideGcdsRouting(),
      ],
    });

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/components/button');

    expect((globalThis as any)[REGISTRY_KEY].currentHref).toBe('/components/button');
  });
});
