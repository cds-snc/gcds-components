/**
 * Public item shape accepted by `<gcds-nav items="...">`.
 */
export interface NavItem {
  /** Visible text of the link or group trigger */
  label: string;
  /** Link destination. Omit to make the item a group. */
  href?: string;
  /** Marks the link as the current page. When any item sets this, automatic detection is turned off. */
  current?: boolean;
  /** Home link / site title. Only allowed at the top level. */
  home?: boolean;
  /** Link points outside of the application. Never handled by the router. */
  external?: boolean;
  /** Extra attributes for the rendered link, e.g. `data-*` analytics attributes */
  attributes?: Record<string, string>;
  /** Child items. Makes the item a group. */
  children?: NavItem[];
}

export type NavVariant = 'top' | 'side';

/**
 * Normalized node every input is converted into. Rendering only ever uses this.
 */
export interface NavNode {
  /** Stable key built from the label path, used for open state and ids */
  id: string;
  label: string;
  href?: string;
  home: boolean;
  current: boolean;
  /** Explicitly marked as current by the author */
  explicitCurrent: boolean;
  external: boolean;
  attributes: Record<string, string>;
  children: NavNode[];
  /** True when a descendant is the current page */
  containsCurrent: boolean;
  /** Where the node came from: the light DOM element or the item object */
  source: Element | NavItem;
}

/**
 * Detail of the `gcdsClick` event emitted by `gcds-nav`.
 */
export interface GcdsNavClickDetail {
  /** href as authored */
  href: string;
  /** href converted to path + search + hash when same origin; what routers should navigate to */
  path: string;
  /** Label of the clicked item */
  label: string;
  /** The item object (items input) or the source element (child element input) */
  item: NavItem | Element;
  external: boolean;
  /**
   * True for a plain left click on an internal link without modifier keys.
   * When false, the browser should be left to handle the click (new tab, external link, ...).
   */
  shouldRoute: boolean;
}

/**
 * Function called for clicks that should be handled by the app router.
 */
export type NavigationHandler = (
  path: string,
  detail: GcdsNavClickDetail,
) => void;

export type PrefetchHandler = (path: string) => void;
