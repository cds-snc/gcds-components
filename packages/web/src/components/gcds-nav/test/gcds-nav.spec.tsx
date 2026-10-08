import { newSpecPage } from '@stencil/core/testing';
import { GcdsNav } from '../gcds-nav';
import { GcdsNavLink } from '../../gcds-nav-link/gcds-nav-link';
import { GcdsNavGroup } from '../../gcds-nav-group/gcds-nav-group';

const REGISTRY_KEY = Symbol.for('gcds.nav.registry');

const mockMatchMedia = (mobile: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: mobile,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  });
};

const components = [GcdsNav, GcdsNavLink, GcdsNavGroup];

describe('gcds-nav', () => {
  beforeEach(() => {
    delete globalThis[REGISTRY_KEY];
    mockMatchMedia(false);
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders a side navigation from child elements', async () => {
    const page = await newSpecPage({
      components,
      html: `
        <gcds-nav variant="side" label="GC Design System">
          <gcds-nav-link href="/start">Start to use</gcds-nav-link>
          <gcds-nav-group open-trigger="Contact" menu-label="Contact">
            <gcds-nav-link href="/contact">Contact us</gcds-nav-link>
          </gcds-nav-group>
        </gcds-nav>
      `,
    });

    const root = page.root.shadowRoot;
    const nav = root.querySelector('nav');
    const heading = root.querySelector('.gcds-nav__heading');
    const trigger = root.querySelector('.gcds-nav__trigger');
    const sublist = root.getElementById(trigger.getAttribute('aria-controls'));

    expect(nav.getAttribute('aria-labelledby')).toBe(heading.id);
    expect(heading.textContent).toBe('GC Design System');
    expect(root.querySelector('a').getAttribute('href')).toBe('/start');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.hasAttribute('aria-haspopup')).toBe(false);
    expect(sublist.hasAttribute('hidden')).toBe(true);

    // Children are data only and render nothing themselves
    const link = page.root.querySelector('gcds-nav-link');
    expect(link.shadowRoot.querySelector('a')).toBeNull();
    expect(link.getAttribute('role')).toBeNull();
  });

  it('toggles a side navigation group', async () => {
    const page = await newSpecPage({
      components,
      html: `
        <gcds-nav variant="side" label="Side">
          <gcds-nav-group open-trigger="Contact">
            <gcds-nav-link href="/contact">Contact us</gcds-nav-link>
          </gcds-nav-group>
        </gcds-nav>
      `,
    });

    const trigger = page.root.shadowRoot.querySelector('button');
    trigger.click();
    await page.waitForChanges();

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
  });

  it('renders a top navigation from the items attribute', async () => {
    const page = await newSpecPage({
      components,
      html: `
        <gcds-nav
          variant="top"
          label="Main"
          alignment="end"
          items='[
            { "label": "Home", "href": "/", "home": true },
            { "label": "About", "href": "/about/", "attributes": { "data-analytics": "about", "aria-label": "ignored" } },
            { "label": "Products", "children": [{ "label": "Notify", "href": "/notify/" }] }
          ]'
        ></gcds-nav>
      `,
    });

    const root = page.root.shadowRoot;
    const home = root.querySelector('.gcds-nav__link--home');
    const about = root.querySelector('.gcds-nav__link--top');

    expect(root.querySelector('nav').getAttribute('aria-label')).toBe('Main');
    expect(home.textContent).toBe('Home');
    expect(root.querySelector('.gcds-nav__list--end')).not.toBeNull();
    expect(about.getAttribute('data-analytics')).toBe('about');
    expect(about.hasAttribute('aria-label')).toBe(false);
    expect(
      root.querySelector('.gcds-nav__trigger--dropdown').textContent,
    ).toContain('Products');
  });

  it('accepts items as a property', async () => {
    const page = await newSpecPage({
      components,
      html: `<gcds-nav variant="top" label="Main"></gcds-nav>`,
    });

    page.root.items = [{ label: 'Blog', href: '/blog/' }];
    await page.waitForChanges();

    expect(page.root.shadowRoot.querySelector('a').textContent).toBe('Blog');
  });

  it('adds hidden new tab text and noopener for target _blank', async () => {
    const page = await newSpecPage({
      components,
      html: `<gcds-nav variant="top" label="Main" items='[{ "label": "Canada.ca", "href": "https://www.canada.ca/", "attributes": { "target": "_blank" } }]'></gcds-nav>`,
    });

    const link = page.root.shadowRoot.querySelector('a');
    expect(link.getAttribute('rel')).toBe('noopener');
    expect(link.querySelector('gcds-sr-only').textContent).toContain(
      'opens in a new tab',
    );
  });

  it('marks the current page from currentHref and expands its group', async () => {
    const page = await newSpecPage({
      components,
      html: `
        <gcds-nav variant="side" label="Side" current-href="/components/button/">
          <gcds-nav-group open-trigger="Components">
            <gcds-nav-link href="/components/alert/">Alert</gcds-nav-link>
            <gcds-nav-link href="/components/button">Button</gcds-nav-link>
          </gcds-nav-group>
        </gcds-nav>
      `,
    });

    const root = page.root.shadowRoot;
    const current = root.querySelector('[aria-current="page"]');

    expect(current.textContent).toBe('Button');
    expect(
      root.querySelector('.gcds-nav__trigger').getAttribute('aria-expanded'),
    ).toBe('true');
  });

  it('warns about invalid values', async () => {
    await newSpecPage({
      components,
      html: `<gcds-nav variant="top" label="Main" alignment="right"></gcds-nav>`,
    });

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('alignment "right" is not supported'),
    );
  });

  it('renders French text', async () => {
    mockMatchMedia(true);
    const page = await newSpecPage({
      components,
      html: `<gcds-nav variant="top" label="Principal" lang="fr" items='[{ "label": "A", "href": "/a" }]'></gcds-nav>`,
    });

    expect(
      page.root.shadowRoot.querySelector('.gcds-nav__menu-trigger').textContent,
    ).toBe('Menu');
    expect(
      page.root.shadowRoot.querySelector('.gcds-nav__close').textContent,
    ).toContain('Fermer');
  });

  describe('mobile', () => {
    it('combines every nav into one menu owned by the top nav', async () => {
      mockMatchMedia(true);
      const page = await newSpecPage({
        components,
        html: `
          <gcds-nav id="side" variant="side" label="Side" items='[{ "label": "Side link", "href": "/side" }]'></gcds-nav>
          <gcds-nav id="top" variant="top" label="Top" items='[{ "label": "Top link", "href": "/top" }]'></gcds-nav>
        `,
      });

      const side = page.body.querySelector('#side') as HTMLGcdsNavElement;
      const top = page.body.querySelector('#top') as HTMLGcdsNavElement;

      expect(side.hasAttribute('hidden')).toBe(true);
      expect(side.shadowRoot.querySelector('button')).toBeNull();

      const trigger = top.shadowRoot.querySelector('.gcds-nav__menu-trigger');
      const dialog = top.shadowRoot.getElementById(
        trigger.getAttribute('aria-controls'),
      );
      const sections = Array.from(dialog.querySelectorAll('nav'));

      expect(trigger.getAttribute('aria-haspopup')).toBe('dialog');
      expect(dialog.nodeName).toBe('DIALOG');
      expect(sections.map(s => s.textContent)).toEqual([
        expect.stringContaining('Top link'),
        expect.stringContaining('Side link'),
      ]);
    });

    it('keeps a separate menu when mobile-menu="separate"', async () => {
      mockMatchMedia(true);
      const page = await newSpecPage({
        components,
        html: `
          <gcds-nav id="side" variant="side" label="Side" mobile-menu="separate" items='[{ "label": "Side link", "href": "/side" }]'></gcds-nav>
          <gcds-nav id="top" variant="top" label="Top" items='[{ "label": "Top link", "href": "/top" }]'></gcds-nav>
        `,
      });

      const side = page.body.querySelector('#side');
      const top = page.body.querySelector('#top');

      expect(
        side.shadowRoot.querySelector('.gcds-nav__menu-trigger'),
      ).not.toBeNull();
      expect(top.shadowRoot.querySelectorAll('dialog nav')).toHaveLength(1);
    });

    it('hands the menu to the side nav when the top nav is removed', async () => {
      mockMatchMedia(true);
      const page = await newSpecPage({
        components,
        html: `
          <gcds-nav id="top" variant="top" label="Top" items='[{ "label": "Top link", "href": "/top" }]'></gcds-nav>
          <gcds-nav id="side" variant="side" label="Side" items='[{ "label": "Side link", "href": "/side" }]'></gcds-nav>
        `,
      });

      page.body.querySelector('#top').remove();
      await page.waitForChanges();

      const side = page.body.querySelector('#side');
      expect(side.hasAttribute('hidden')).toBe(false);
      expect(
        side.shadowRoot.querySelector('.gcds-nav__menu-trigger'),
      ).not.toBeNull();
    });
  });
});
