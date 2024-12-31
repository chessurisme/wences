/**
 * Core type definitions for HTML elements and attributes
 */

/**
 * Represents all possible HTML tag names
 * @remarks
 * This type ensures that only valid HTML elements can be created
 * It extends the built-in HTMLElementTagNameMap for complete coverage
 */
export type HTMLTagName = keyof HTMLElementTagNameMap;

/**
 * Utility type for extracting element type from tag name
 * @template T - The HTML tag name
 * @example
 * type DivElement = ElementType<'div'> // returns HTMLDivElement
 */
export type ElementType<T extends HTMLTagName> = HTMLElementTagNameMap[T];

/**
 * Comprehensive ARIA-related type definitions
 */

/**
 * All possible ARIA roles as defined in WAI-ARIA specification
 * @see https://www.w3.org/TR/wai-aria-1.1/#role_definitions
 */
export type AriaRole =
| 'alert'
| 'alertdialog'
| 'application'
| 'article'
| 'banner'
| 'button'
| 'cell'
| 'checkbox'
| 'columnheader'
| 'combobox'
| 'complementary'
| 'contentinfo'
| 'definition'
| 'dialog'
| 'directory'
| 'document'
| 'feed'
| 'figure'
| 'form'
| 'grid'
| 'gridcell'
| 'group'
| 'heading'
| 'img'
| 'link'
| 'list'
| 'listbox'
| 'listitem'
| 'log'
| 'main'
| 'marquee'
| 'math'
| 'menu'
| 'menubar'
| 'menuitem'
| 'menuitemcheckbox'
| 'menuitemradio'
| 'navigation'
| 'none'
| 'note'
| 'option'
| 'presentation'
| 'progressbar'
| 'radio'
| 'radiogroup'
| 'region'
| 'row'
| 'rowgroup'
| 'rowheader'
| 'scrollbar'
| 'search'
| 'searchbox'
| 'separator'
| 'slider'
| 'spinbutton'
| 'status'
| 'switch'
| 'tab'
| 'table'
| 'tablist'
| 'tabpanel'
| 'term'
| 'textbox'
| 'timer'
| 'toolbar'
| 'tooltip'
| 'tree'
| 'treegrid'
| 'treeitem';

/**
 * Valid values for various ARIA states and properties
 */
export type AriaBoolean = 'true' | 'false' | boolean;
export type AriaTristate = 'true' | 'false' | 'mixed' | boolean;
export type AriaLive = 'assertive' | 'off' | 'polite';
export type AriaOrientation = 'horizontal' | 'vertical';
export type AriaSort = 'ascending' | 'descending' | 'none' | 'other';

/**
 * Comprehensive mapping of ARIA attributes to their allowed values
 */
export interface AriaAttributes {
  'aria-activedescendant'?: string;
  'aria-atomic'?: AriaBoolean;
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  'aria-busy'?: AriaBoolean;
  'aria-checked'?: AriaTristate;
  'aria-colcount'?: number;
  'aria-colindex'?: number;
  'aria-colspan'?: number;
  'aria-controls'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
  'aria-describedby'?: string;
  'aria-details'?: string;
  'aria-disabled'?: AriaBoolean;
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
  'aria-errormessage'?: string;
  'aria-expanded'?: AriaBoolean;
  'aria-flowto'?: string;
  'aria-grabbed'?: AriaBoolean;
  'aria-haspopup'?: AriaBoolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  'aria-hidden'?: AriaBoolean;
  'aria-invalid'?: AriaBoolean | 'grammar' | 'spelling';
  'aria-keyshortcuts'?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-level'?: number;
  'aria-live'?: AriaLive;
  'aria-modal'?: AriaBoolean;
  'aria-multiline'?: AriaBoolean;
  'aria-multiselectable'?: AriaBoolean;
  'aria-orientation'?: AriaOrientation;
  'aria-owns'?: string;
  'aria-placeholder'?: string;
  'aria-posinset'?: number;
  'aria-pressed'?: AriaTristate;
  'aria-readonly'?: AriaBoolean;
  'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
  'aria-required'?: AriaBoolean;
  'aria-roledescription'?: string;
  'aria-rowcount'?: number;
  'aria-rowindex'?: number;
  'aria-rowspan'?: number;
  'aria-selected'?: AriaBoolean;
  'aria-setsize'?: number;
  'aria-sort'?: AriaSort;
  'aria-valuemax'?: number;
  'aria-valuemin'?: number;
  'aria-valuenow'?: number;
  'aria-valuetext'?: string;
}

/**
 * Comprehensive event handling type definitions
 */

/**
 * All possible DOM event names without 'on' prefix
 * @remarks
 * Includes both standard DOM events and custom events
 */
export type EventName = keyof HTMLElementEventMap;

/**
 * Utility type to convert event names to their handler types
 * @template T - The event name
 * @example
 * type ClickHandler = EventHandlerType<'click'> // returns (e: MouseEvent) => void
 */
export type EventHandlerType<T extends EventName> = (evt: HTMLElementEventMap[T]) => void;

/**
 * Type for generic event handlers
 */
export type EventHandler = (event: Event) => void;

/**
 * Maps event names to their handler types
 */
export type EventHandlerMap = {
  [K in EventName]?: EventHandlerType<K>;
};

/**
 * CSS style-related type definitions
 */

/**
 * All possible CSS properties in camelCase
 * @remarks
 * Derived from React's CSS properties for completeness
 */
export interface CSSProperties extends React.CSSProperties {
  [key: string]: string | number | undefined;
}

/**
 * Valid CSS length units
 */
export type CSSLengthUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%';

/**
 * Type for CSS length values
 */
export type CSSLength = number | `${number}${CSSLengthUnit}`;

/**
 * Configuration interfaces for Wences
 */

/**
 * Configuration for accessibility attributes
 * @remarks
 * Combines ARIA roles and attributes without requiring 'aria-' prefix
 */
export interface AccessibilityConfig extends Partial<Omit<AriaAttributes, 'role'>> {
  role?: AriaRole;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Configuration for general HTML attributes
 */
export interface GeneralConfig {
  class?: string;
  id?: string;
  name?: string;
  title?: string;
  tabIndex?: number;
  lang?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
  slot?: string;
  spellcheck?: boolean;
  translate?: 'yes' | 'no';
  draggable?: boolean;
  hidden?: boolean;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Configuration for CSS styles
 */
export interface StyleConfig extends CSSProperties {}

/**
 * Configuration for DOM events
 * @remarks
 * Allows both prefixed and unprefixed event names
 */
export interface EventsConfig extends EventHandlerMap {
  [key: `on${Capitalize<EventName>}`]?: EventHandler;
}

/**
 * Configuration for boolean state attributes
 */
export interface StateConfig {
  [key in BooleanAttribute]?: boolean;
}

/**
 * Configuration for child elements
 * @remarks
 * Children must be valid HTML elements
 */
export interface ContentsConfig {
  children: HTMLElement[];
}

/**
 * Main configuration interface
 */
export interface WencesConfig {
  accessibility?: AccessibilityConfig;
  general?: GeneralConfig;
  style?: StyleConfig;
  events?: EventsConfig;
  state?: StateConfig;
  contents?: ContentsConfig;
}

/**
 * Type definitions for configuration handlers
 */

/**
 * Base handler interface for all configuration types
 */
export interface ConfigurationHandler<T> {
  apply(config: T): void;
}

/**
 * Specific handler implementations
 */
export declare class AccessibilityHandler implements ConfigurationHandler<AccessibilityConfig> {
  constructor(element: HTMLElement);
  apply(config: AccessibilityConfig): void;
}

export declare class ContentsHandler implements ConfigurationHandler<ContentsConfig> {
  constructor(element: HTMLElement);
  apply(config: ContentsConfig): void;
}

export declare class EventsHandler implements ConfigurationHandler<EventsConfig> {
  constructor(element: HTMLElement);
  apply(config: EventsConfig): void;
}

export declare class StateHandler implements ConfigurationHandler<StateConfig> {
  constructor(element: HTMLElement);
  apply(config: StateConfig): void;
}

export declare class GeneralHandler implements ConfigurationHandler<GeneralConfig> {
  constructor(element: HTMLElement);
  apply(config: GeneralConfig): void;
}

export declare class StyleHandler implements ConfigurationHandler<StyleConfig> {
  constructor(element: HTMLElement);
  apply(config: StyleConfig): void;
}

/**
 * Main Wences class definition with method documentation
 */
export declare class Wences<T extends HTMLTagName = HTMLTagName> {
  /**
   * Creates a new Wences instance
   * @param tagName - The HTML tag name for the element
   * @param config - Configuration object for the element
   * @throws {Error} If tagName is invalid
   * @throws {Error} If config is invalid
   */
  constructor(tagName: T, config?: WencesConfig);

  /**
   * Returns the underlying DOM element
   * @returns The created HTML element
   */
  getElement(): ElementType<T>;

  /**
   * Appends the element to a parent element or selector
   * @param parent - Parent element or selector string
   * @returns The Wences instance for chaining
   * @throws {Error} If parent element is not found
   */
  appendTo(parent: Element | string): this;
}

/**
 * Defines all valid boolean attributes for HTML elements
 * These attributes can be present without a value
 */
export type BooleanAttribute =
  | 'allowfullscreen'
  | 'allowpaymentrequest'
  | 'async'
  | 'autofocus'
  | 'autoplay'
  | 'checked'
  | 'controls'
  | 'default'
  | 'defer'
  | 'disabled'
  | 'formnovalidate'
  | 'hidden'
  | 'ismap'
  | 'itemscope'
  | 'loop'
  | 'multiple'
  | 'muted'
  | 'nomodule'
  | 'novalidate'
  | 'open'
  | 'playsinline'
  | 'readonly'
  | 'required'
  | 'reversed'
  | 'selected'
  | 'truespeed';

/**
 * Custom error types for configuration validation
 */
export class WencesConfigError extends Error {
  constructor(message: string, public code: string, public context?: unknown) {
    super(message);
    this.name = 'WencesConfigError';
  }
}

/**
 * Utility type for deep partial configurations
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Type-safe configuration merger
 */
export type ConfigMerger<T> = {
  merge(target: T, source: DeepPartial<T>): T;
  clone(config: T): T;
};

/**
 * Lifecycle event handlers
 */
export interface ElementLifecycle {
  onMount?: () => void;
  onUnmount?: () => void;
  onUpdate?: (prevConfig: WencesConfig, nextConfig: WencesConfig) => void;
}

/**
 * Extended Wences configuration with lifecycle
 */
export interface ExtendedWencesConfig extends WencesConfig {
  lifecycle?: ElementLifecycle;
}

/**
 * Performance monitoring configuration
 */
export interface PerformanceConfig {
  measureRender?: boolean;
  debugMode?: boolean;
  logLevel?: 'error' | 'warn' | 'info' | 'debug';
  metrics?: {
    captureTimings?: boolean;
    captureMemory?: boolean;
    customMetrics?: Record<string, () => number>;
  };
}

/**
 * Server-side rendering configuration
 */
export interface SSRConfig {
  hydratable?: boolean;
  streamable?: boolean;
  deferHydration?: boolean;
  clientOnly?: boolean;
}

/**
 * Validation result type
 */
export interface ValidationResult {
  valid: boolean;
  errors: WencesConfigError[];
  warnings: string[];
}

/**
 * Configuration validator interface
 */
export interface ConfigValidator {
  validate(config: WencesConfig): ValidationResult;
  validateProperty(path: string[], value: unknown): ValidationResult;
}

export default Wences;
