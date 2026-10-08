import {
  currentBranchIds,
  filterAttributes,
  isHashRouteHref,
  markCurrent,
  normalizePath,
  parseItems,
  readChildren,
  readItems,
  readJsonScript,
  toRouterPath,
  validate,
} from './model';
import { NavItem } from './types';

const BASE = 'https://example.ca/en/components/button/';

const strip = nodes =>
  nodes.map(({ label, href, home, current, containsCurrent, children }) => ({
    label,
    href,
    home,
    current,
    containsCurrent,
    children: strip(children),
  }));

describe('nav model', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  describe('readers', () => {
    const items: NavItem[] = [
      { label: 'GC Design System', href: '/en', home: true },
      { label: 'Start to use', href: '/en/start-to-use' },
      {
        label: 'Components',
        children: [
          { label: 'Alert', href: '/en/components/alert/' },
          { label: 'Button', href: '/en/components/button/' },
        ],
      },
    ];

    it('children and items produce the same tree', () => {
      const host = document.createElement('div');
      host.innerHTML = `
        <gcds-nav-link href="/en" slot="home">GC Design System</gcds-nav-link>
        <gcds-nav-link href="/en/start-to-use">
          Start to use
        </gcds-nav-link>
        <gcds-nav-group open-trigger="Components" menu-label="Components">
          <gcds-nav-link href="/en/components/alert/">Alert</gcds-nav-link>
          <gcds-nav-link href="/en/components/button/">Button</gcds-nav-link>
        </gcds-nav-group>
      `;

      expect(strip(readChildren(host))).toEqual(strip(readItems(items)));
    });

    it('falls back to menu-label when open-trigger is missing', () => {
      const host = document.createElement('div');
      host.innerHTML = `<gcds-nav-group menu-label="Contact"><gcds-nav-link href="/c">Contact us</gcds-nav-link></gcds-nav-group>`;

      expect(readChildren(host)[0].label).toBe('Contact');
    });

    it('keeps the source element for each node', () => {
      const host = document.createElement('div');
      host.innerHTML = `<gcds-nav-link href="/a">A</gcds-nav-link>`;

      expect(readChildren(host)[0].source).toBe(host.firstElementChild);
    });

    it('builds unique ids for duplicate labels', () => {
      const nodes = readItems([
        { label: 'Same', href: '/a' },
        { label: 'Same', href: '/b' },
      ]);

      expect(nodes[0].id).not.toBe(nodes[1].id);
    });

    it('parses the JSON script child', () => {
      const host = document.createElement('div');
      host.innerHTML = `<script type="application/json">[{ "label": "A", "href": "/a" }]</script>`;

      expect(readJsonScript(host)).toEqual([{ label: 'A', href: '/a' }]);
    });

    it('warns instead of throwing on invalid JSON', () => {
      expect(parseItems('[{ label: broken')).toEqual([]);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('invalid JSON'),
      );
    });

    it('accepts arrays and JSON strings for items', () => {
      expect(parseItems([{ label: 'A', href: '/a' }])).toHaveLength(1);
      expect(parseItems('[{ "label": "A", "href": "/a" }]')).toHaveLength(1);
      expect(parseItems(undefined)).toBeNull();
    });
  });

  describe('filterAttributes', () => {
    it('forwards data and link attributes only', () => {
      expect(
        filterAttributes({
          'data-gc-analytics-navigation': 'header:About',
          'target': '_blank',
          'class': 'nope',
          'style': 'color:red',
          'href': '/ignored',
        }),
      ).toEqual({
        'data-gc-analytics-navigation': 'header:About',
        'target': '_blank',
      });
    });

    it('ignores aria-label to keep label in name', () => {
      expect(
        filterAttributes({ 'aria-label': 'Go to the homepage' }, 'Home'),
      ).toEqual({});
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('WCAG 2.5.3'));
    });
  });

  describe('validate', () => {
    const deep: NavItem[] = [
      {
        label: 'L1',
        children: [
          {
            label: 'L2',
            children: [
              { label: 'L3 link', href: '/l3' },
              { label: 'L3 group', children: [{ label: 'L4', href: '/l4' }] },
            ],
          },
        ],
      },
    ];

    it('allows 3 levels in a side navigation', () => {
      const result = validate(readItems(deep), 'side');
      const l2 = result[0].children[0];

      expect(l2.children.map(n => n.label)).toEqual(['L3 link']);
    });

    it('allows 2 levels in a top navigation', () => {
      const result = validate(readItems(deep), 'top');

      // L1 only contains a group, which is too deep, so L1 is empty and skipped
      expect(result).toEqual([]);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('maximum of 2 levels'),
      );
    });

    it('only keeps one top level home link', () => {
      const result = validate(
        readItems([
          { label: 'Home', href: '/', home: true },
          { label: 'Other home', href: '/x', home: true },
          {
            label: 'Group',
            children: [{ label: 'Nested home', href: '/y', home: true }],
          },
        ]),
        'side',
      );

      expect(result.map(n => n.home)).toEqual([true, false, false]);
      expect(result[2].children[0].home).toBe(false);
    });

    it('skips items without a label and empty groups', () => {
      const result = validate(
        readItems([
          { label: '', href: '/a' },
          { label: 'Empty', children: [] },
          { label: 'Ok', href: '/ok' },
        ]),
        'side',
      );

      expect(result.map(n => n.label)).toEqual(['Ok']);
    });
  });

  describe('current page', () => {
    const tree = () =>
      validate(
        readItems([
          { label: 'Home', href: '/en', home: true },
          {
            label: 'Components',
            children: [
              { label: 'Alert', href: '/en/components/alert' },
              { label: 'Button', href: '/en/components/button/' },
            ],
          },
        ]),
        'side',
      );

    it('normalizes trailing slashes and index files', () => {
      expect(normalizePath('/en/components/button', BASE)).toBe(
        '/en/components/button',
      );
      expect(normalizePath('/en/components/button/', BASE)).toBe(
        '/en/components/button',
      );
      expect(normalizePath('/en/index.html', BASE)).toBe('/en');
      expect(normalizePath('https://other.ca/en', BASE)).toBeNull();
      expect(normalizePath('#main', BASE)).toBeNull();
    });

    it('marks the current link and its ancestors', () => {
      const result = markCurrent(tree(), BASE, BASE);
      const components = result[1];

      expect(components.containsCurrent).toBe(true);
      expect(components.children[1].current).toBe(true);
      expect(result[0].current).toBe(false);
      expect(currentBranchIds(result)).toEqual([components.id]);
    });

    it('lets explicit current win over the URL', () => {
      const nodes = readItems([
        { label: 'A', href: '/en/components/button/' },
        { label: 'B', href: '/b', current: true },
      ]);
      const result = markCurrent(nodes, BASE, BASE);

      expect(result.map(n => n.current)).toEqual([false, true]);
    });

    it('converts same origin links to router paths', () => {
      expect(toRouterPath('https://example.ca/a?b=1#c', BASE)).toBe('/a?b=1#c');
      expect(toRouterPath('../alert/', BASE)).toBe('/en/components/alert/');
      expect(toRouterPath('https://canada.ca/', BASE)).toBe(
        'https://canada.ca/',
      );
    });
  });

  describe('hash routers', () => {
    const HASH_BASE = 'https://example.ca/app/#/components/button';

    it('keeps hash routes and ignores in-page anchors', () => {
      expect(normalizePath('#/about', HASH_BASE)).toBe('/app#/about');
      expect(normalizePath('#/about/', HASH_BASE)).toBe('/app#/about');
      expect(normalizePath('#!/about', HASH_BASE)).toBe('/app#/about');
      expect(normalizePath('/app/#/about?tab=2', HASH_BASE)).toBe(
        '/app#/about',
      );
      expect(normalizePath('#main-content', HASH_BASE)).toBeNull();
    });

    it('detects hash route links', () => {
      expect(isHashRouteHref('#/about', HASH_BASE)).toBe(true);
      expect(isHashRouteHref('/app/#!/about', HASH_BASE)).toBe(true);
      expect(isHashRouteHref('#main-content', HASH_BASE)).toBe(false);
      expect(isHashRouteHref('/about', HASH_BASE)).toBe(false);
    });

    it('marks the current hash route from the URL', () => {
      const nodes = readItems([
        { label: 'Home', href: '#/' },
        {
          label: 'Components',
          children: [
            { label: 'Alert', href: '#/components/alert' },
            { label: 'Button', href: '#/components/button' },
          ],
        },
      ]);
      const result = markCurrent(nodes, HASH_BASE, HASH_BASE);

      expect(result[0].current).toBe(false);
      expect(result[1].containsCurrent).toBe(true);
      expect(result[1].children.map(n => n.current)).toEqual([false, true]);
    });

    it('matches the "#/path" value framework adapters pass', () => {
      const nodes = readItems([
        { label: 'Alert', href: '#/components/alert' },
        { label: 'Button', href: '#/components/button' },
      ]);
      const result = markCurrent(nodes, '#/components/alert', HASH_BASE);

      expect(result.map(n => n.current)).toEqual([true, false]);
    });
  });
});
