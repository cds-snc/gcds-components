import { NavItem, NavNode, NavVariant } from './types';

/**
 * Attributes that may be forwarded from an item to the rendered link.
 * `data-*` attributes are always forwarded.
 * Everything else (e.g. aria-label, class, style) is ignored so the component
 * stays in control of the link's accessible name and styling.
 */
const FORWARDED_ATTRIBUTES = ['lang', 'hreflang', 'rel', 'target', 'download'];

export const MAX_DEPTH: Record<NavVariant, number> = { top: 2, side: 3 };

const warned = new Set<string>();

/**
 * Log a console warning once per message
 */
export function warnOnce(message: string) {
  if (warned.has(message)) return;
  warned.add(message);
  console.warn(`gcds-nav: ${message}`);
}

/**
 * Keep only the attributes we allow on rendered links
 */
export function filterAttributes(
  attributes: Record<string, string> = {},
  label = '',
): Record<string, string> {
  const result: Record<string, string> = {};

  Object.keys(attributes).forEach(name => {
    const lowerName = name.toLowerCase();
    if (
      lowerName.startsWith('data-') ||
      FORWARDED_ATTRIBUTES.includes(lowerName)
    ) {
      result[lowerName] = String(attributes[name]);
    } else if (lowerName.startsWith('aria-')) {
      warnOnce(
        `"${name}" on "${label}" is ignored. The visible label is used as the accessible name so it always matches what users see (WCAG 2.5.3).`,
      );
    }
  });

  return result;
}

function isTruthyAttribute(value: string | null): boolean {
  return value !== null && value !== 'false';
}

function collapseWhitespace(text: string | null): string {
  return (text || '').replace(/\s+/g, ' ').trim();
}

/**
 * Build stable, unique node ids from the label path
 */
function createIdFactory(parentId: string) {
  const used = new Map<string, number>();
  return (label: string) => {
    const base = `${parentId}/${label}`;
    const count = (used.get(base) || 0) + 1;
    used.set(base, count);
    return count > 1 ? `${base}~${count}` : base;
  };
}

function createNode(
  partial: Partial<NavNode> & Pick<NavNode, 'id' | 'label' | 'source'>,
): NavNode {
  return {
    href: undefined,
    home: false,
    current: false,
    explicitCurrent: false,
    external: false,
    attributes: {},
    children: [],
    containsCurrent: false,
    ...partial,
  };
}

/**
 * Read `<gcds-nav-link>` and `<gcds-nav-group>` children into nodes
 */
export function readChildren(parent: Element, parentId = ''): NavNode[] {
  const nextId = createIdFactory(parentId);
  const nodes: NavNode[] = [];

  Array.from(parent.children).forEach(el => {
    const tag = el.nodeName.toLowerCase();

    if (tag === 'gcds-nav-link') {
      const label = collapseWhitespace(el.textContent);
      const attributes: Record<string, string> = {};
      Array.from(el.attributes).forEach(attr => {
        attributes[attr.name] = attr.value;
      });

      nodes.push(
        createNode({
          id: nextId(label),
          label,
          href: el.getAttribute('href') ?? (el as HTMLGcdsNavLinkElement).href,
          home: el.getAttribute('slot') === 'home',
          explicitCurrent:
            isTruthyAttribute(el.getAttribute('current')) ||
            (el as HTMLGcdsNavLinkElement).current === true,
          external: isTruthyAttribute(el.getAttribute('external')),
          attributes: filterAttributes(attributes, label),
          source: el,
        }),
      );
    } else if (tag === 'gcds-nav-group') {
      const label = collapseWhitespace(
        el.getAttribute('open-trigger') ?? el.getAttribute('menu-label'),
      );
      const id = nextId(label);

      nodes.push(
        createNode({
          id,
          label,
          children: readChildren(el, id),
          source: el,
        }),
      );
    }
  });

  return nodes;
}

/**
 * Read an items array (property, attribute or JSON script) into nodes
 */
export function readItems(items: NavItem[], parentId = ''): NavNode[] {
  if (!Array.isArray(items)) {
    warnOnce('"items" must be an array of navigation items.');
    return [];
  }

  const nextId = createIdFactory(parentId);

  return items
    .filter(item => item && typeof item === 'object')
    .map(item => {
      const label = collapseWhitespace(item.label);
      const id = nextId(label);

      return createNode({
        id,
        label,
        href: item.href,
        home: !!item.home,
        explicitCurrent: !!item.current,
        external: !!item.external,
        attributes: filterAttributes(item.attributes, label),
        children: item.children ? readItems(item.children, id) : [],
        source: item,
      });
    });
}

/**
 * Parse the `items` prop which can be an array or a JSON string (attribute)
 */
export function parseItems(items: string | NavItem[]): NavItem[] | null {
  if (items === undefined || items === null || items === '') return null;

  if (typeof items === 'string') {
    try {
      return JSON.parse(items);
    } catch {
      warnOnce(
        '"items" contains invalid JSON. The navigation could not be rendered.',
      );
      return [];
    }
  }

  return items;
}

/**
 * Find `<script type="application/json">` direct child and parse it
 */
export function readJsonScript(host: Element): NavItem[] | null {
  const script = Array.from(host.children).find(
    child =>
      child.nodeName === 'SCRIPT' &&
      child.getAttribute('type') === 'application/json',
  );

  if (!script) return null;

  try {
    return JSON.parse(script.textContent || '[]');
  } catch {
    warnOnce(
      'The <script type="application/json"> contains invalid JSON. The navigation could not be rendered.',
    );
    return [];
  }
}

/**
 * Enforce depth limits and required fields.
 * Invalid nodes are skipped with a warning, the source content is never touched.
 */
export function validate(nodes: NavNode[], variant: NavVariant): NavNode[] {
  const maxDepth = MAX_DEPTH[variant];
  let hasHome = false;

  const walk = (list: NavNode[], level: number): NavNode[] =>
    list.flatMap(node => {
      if (!node.label) {
        warnOnce('Skipped an item without a label.');
        return [];
      }

      const isGroup = node.href === undefined || node.href === null;

      if (isGroup) {
        if (level >= maxDepth) {
          warnOnce(
            `"${node.label}" was skipped. A ${variant} navigation supports a maximum of ${maxDepth} levels.`,
          );
          return [];
        }

        const children = walk(node.children, level + 1);
        if (children.length === 0) {
          warnOnce(`Group "${node.label}" has no items and was skipped.`);
          return [];
        }

        if (node.home) {
          warnOnce(`Group "${node.label}" cannot be the home link.`);
        }

        return [{ ...node, home: false, children }];
      }

      if (node.children.length > 0) {
        warnOnce(
          `"${node.label}" has both an href and child items. Child items were ignored, add an overview link to the group instead.`,
        );
      }

      let home = node.home;
      if (home && (level > 1 || hasHome)) {
        warnOnce(
          `"${node.label}" was rendered as a regular link. Only one top level item can be the home link.`,
        );
        home = false;
      }
      if (home) hasHome = true;

      return [{ ...node, home, children: [] }];
    });

  return walk(nodes, 1);
}

const stripTrailingSlash = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

/**
 * Hash router routes (#/about, #!/about) are pages, plain anchors (#main) are not
 */
export function isHashRoute(hash: string): boolean {
  return /^#!?\//.test(hash || '');
}

/**
 * True when the href points to a hash router route
 */
export function isHashRouteHref(href: string, base: string): boolean {
  try {
    return isHashRoute(new URL(href, base).hash);
  } catch {
    return false;
  }
}

/**
 * Normalize an href for current page comparison. Returns null for other origins
 * and in-page anchors. Hash router routes are kept: "/app/#/about" → "/app#/about".
 */
export function normalizePath(href: string, base: string): string | null {
  if (!href || (href.startsWith('#') && !isHashRoute(href))) return null;

  try {
    const url = new URL(href, base);
    if (url.origin !== new URL(base).origin) return null;

    const path = stripTrailingSlash(
      url.pathname.replace(/\/index\.html?$/, '/'),
    );

    if (isHashRoute(url.hash)) {
      const route = url.hash.replace(/^#!?/, '').split('?')[0];
      return `${path}#${stripTrailingSlash(route)}`;
    }

    return path;
  } catch {
    return null;
  }
}

/**
 * Path an app router should navigate to (same origin) or the original href
 */
export function toRouterPath(href: string, base: string): string {
  try {
    const url = new URL(href, base);
    if (url.origin === new URL(base).origin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch {
    // fall through
  }
  return href;
}

/**
 * Mark the current page and its ancestors.
 * Explicit `current` on any item wins over automatic detection.
 */
export function markCurrent(
  nodes: NavNode[],
  currentHref: string | null,
  base: string,
): NavNode[] {
  const hasExplicit = (list: NavNode[]): boolean =>
    list.some(node => node.explicitCurrent || hasExplicit(node.children));

  const useExplicit = hasExplicit(nodes);
  const currentPath =
    !useExplicit && currentHref ? normalizePath(currentHref, base) : null;
  let found = false;

  const walk = (list: NavNode[]): NavNode[] =>
    list.map(node => {
      if (node.children.length) {
        const children = walk(node.children);
        return {
          ...node,
          current: false,
          children,
          containsCurrent: children.some(c => c.current || c.containsCurrent),
        };
      }

      let current = false;
      if (useExplicit) {
        current = node.explicitCurrent;
      } else if (!found && currentPath && !node.external && node.href) {
        current = normalizePath(node.href, base) === currentPath;
      }
      if (current) found = true;

      return { ...node, current, containsCurrent: false };
    });

  return walk(nodes);
}

/**
 * Ids of every group that contains the current page
 */
export function currentBranchIds(nodes: NavNode[]): string[] {
  return nodes.flatMap(node =>
    node.containsCurrent ? [node.id, ...currentBranchIds(node.children)] : [],
  );
}

/**
 * Short deterministic hash to build valid DOM ids from node ids
 */
export function domId(prefix: string, nodeId: string): string {
  let hash = 5381;
  for (let i = 0; i < nodeId.length; i++) {
    hash = ((hash << 5) + hash + nodeId.charCodeAt(i)) | 0;
  }
  return `${prefix}-${(hash >>> 0).toString(36)}`;
}

/**
 * Signature used to skip re-renders when nothing visible changed
 */
export function signature(nodes: NavNode[]): string {
  return JSON.stringify(nodes, (key, value) =>
    key === 'source' ? undefined : value,
  );
}
