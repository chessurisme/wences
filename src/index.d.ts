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
 * Comprehensive StyleConfig interface for complete CSS property coverage
 * Organized by logical categories for better navigation and understanding
 */

// Utility types for common CSS values
type CSSGlobalValues = 'inherit' | 'initial' | 'revert' | 'unset';
type CSSLength = number | `${number}${CSSLengthUnit}`;
type CSSLengthUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%' | 'ch' | 'vmin' | 'vmax' | 'ex';
type CSSColor = string; // Accepts hex, rgb, rgba, hsl, hsla, named colors
type CSSTime = `${number}${'s' | 'ms'}`;
type CSSAngle = `${number}${'deg' | 'rad' | 'grad' | 'turn'}`;

export interface StyleConfig {
        // Layout Properties
        alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | CSSGlobalValues;
        alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | CSSGlobalValues;
        alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | CSSGlobalValues;
        aspectRatio?: 'auto' | number | `${number}/${number}` | CSSGlobalValues;
        boxSizing?: 'content-box' | 'border-box' | CSSGlobalValues;
        clear?: 'none' | 'left' | 'right' | 'both' | 'inline-start' | 'inline-end' | CSSGlobalValues;
        contain?: 'none' | 'strict' | 'content' | 'size' | 'layout' | 'style' | 'paint' | CSSGlobalValues;
        content?: 'normal' | 'none' | string | CSSGlobalValues;
        display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root' | 'none' | 'contents' | CSSGlobalValues;
        float?: 'none' | 'left' | 'right' | 'inline-start' | 'inline-end' | CSSGlobalValues;
        isolation?: 'auto' | 'isolate' | CSSGlobalValues;
        objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | CSSGlobalValues;
        objectPosition?: string | CSSGlobalValues;
        overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | CSSGlobalValues;
        overflowX?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | CSSGlobalValues;
        overflowY?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | CSSGlobalValues;
        position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | CSSGlobalValues;
        visibility?: 'visible' | 'hidden' | 'collapse' | CSSGlobalValues;
        zIndex?: number | 'auto' | CSSGlobalValues;
      
        // Box Model Properties
        margin?: CSSLength | 'auto' | CSSGlobalValues;
        marginTop?: CSSLength | 'auto' | CSSGlobalValues;
        marginRight?: CSSLength | 'auto' | CSSGlobalValues;
        marginBottom?: CSSLength | 'auto' | CSSGlobalValues;
        marginLeft?: CSSLength | 'auto' | CSSGlobalValues;
        marginBlock?: CSSLength | 'auto' | CSSGlobalValues;
        marginBlockStart?: CSSLength | 'auto' | CSSGlobalValues;
        marginBlockEnd?: CSSLength | 'auto' | CSSGlobalValues;
        marginInline?: CSSLength | 'auto' | CSSGlobalValues;
        marginInlineStart?: CSSLength | 'auto' | CSSGlobalValues;
        marginInlineEnd?: CSSLength | 'auto' | CSSGlobalValues;
        
        padding?: CSSLength | CSSGlobalValues;
        paddingTop?: CSSLength | CSSGlobalValues;
        paddingRight?: CSSLength | CSSGlobalValues;
        paddingBottom?: CSSLength | CSSGlobalValues;
        paddingLeft?: CSSLength | CSSGlobalValues;
        paddingBlock?: CSSLength | CSSGlobalValues;
        paddingBlockStart?: CSSLength | CSSGlobalValues;
        paddingBlockEnd?: CSSLength | CSSGlobalValues;
        paddingInline?: CSSLength | CSSGlobalValues;
        paddingInlineStart?: CSSLength | CSSGlobalValues;
        paddingInlineEnd?: CSSLength | CSSGlobalValues;
      
        width?: CSSLength | 'auto' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        height?: CSSLength | 'auto' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        minWidth?: CSSLength | 'auto' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        maxWidth?: CSSLength | 'none' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        minHeight?: CSSLength | 'auto' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        maxHeight?: CSSLength | 'none' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
      
        // Flexbox Properties
        flex?: string | number | CSSGlobalValues;
        flexBasis?: CSSLength | 'auto' | 'max-content' | 'min-content' | 'fit-content' | CSSGlobalValues;
        flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | CSSGlobalValues;
        flexFlow?: string | CSSGlobalValues;
        flexGrow?: number | CSSGlobalValues;
        flexShrink?: number | CSSGlobalValues;
        flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | CSSGlobalValues;
        justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | CSSGlobalValues;
        order?: number | CSSGlobalValues;
      
        // Grid Properties
        grid?: string | CSSGlobalValues;
        gridArea?: string | CSSGlobalValues;
        gridAutoColumns?: CSSLength | 'auto' | 'min-content' | 'max-content' | 'minmax(min,max)' | CSSGlobalValues;
        gridAutoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense' | CSSGlobalValues;
        gridAutoRows?: CSSLength | 'auto' | 'min-content' | 'max-content' | 'minmax(min,max)' | CSSGlobalValues;
        gridColumn?: string | CSSGlobalValues;
        gridColumnEnd?: string | CSSGlobalValues;
        gridColumnGap?: CSSLength | CSSGlobalValues;
        gridColumnStart?: string | CSSGlobalValues;
        gridGap?: CSSLength | CSSGlobalValues;
        gridRow?: string | CSSGlobalValues;
        gridRowEnd?: string | CSSGlobalValues;
        gridRowGap?: CSSLength | CSSGlobalValues;
        gridRowStart?: string | CSSGlobalValues;
        gridTemplate?: string | CSSGlobalValues;
        gridTemplateAreas?: string | CSSGlobalValues;
        gridTemplateColumns?: string | CSSGlobalValues;
        gridTemplateRows?: string | CSSGlobalValues;
        gap?: CSSLength | CSSGlobalValues;
        rowGap?: CSSLength | CSSGlobalValues;
        // columnGap?: CSSLength | CSSGlobalValues;
      
        // Typography Properties
        color?: CSSColor | CSSGlobalValues;
        fontFamily?: string | CSSGlobalValues;
        fontSize?: CSSLength | 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | CSSGlobalValues;
        fontStyle?: 'normal' | 'italic' | 'oblique' | `oblique ${CSSAngle}` | CSSGlobalValues;
        fontWeight?: number | 'normal' | 'bold' | 'lighter' | 'bolder' | CSSGlobalValues;
        fontVariant?: string | CSSGlobalValues;
        letterSpacing?: CSSLength | 'normal' | CSSGlobalValues;
        lineHeight?: CSSLength | 'normal' | number | CSSGlobalValues;
        textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'match-parent' | CSSGlobalValues;
        textDecoration?: string | CSSGlobalValues;
        textIndent?: CSSLength | CSSGlobalValues;
        textOverflow?: 'clip' | 'ellipsis' | string | CSSGlobalValues;
        textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | CSSGlobalValues;
        whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces' | CSSGlobalValues;
        wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word' | CSSGlobalValues;
        wordSpacing?: CSSLength | 'normal' | CSSGlobalValues;
      
        // Visual Styling Properties
        background?: string | CSSGlobalValues;
        backgroundColor?: CSSColor | CSSGlobalValues;
        backgroundImage?: string | CSSGlobalValues;
        backgroundPosition?: string | CSSGlobalValues;
        backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round' | CSSGlobalValues;
        backgroundSize?: CSSLength | 'auto' | 'cover' | 'contain' | CSSGlobalValues;
        border?: string | CSSGlobalValues;
        borderColor?: CSSColor | CSSGlobalValues;
        borderRadius?: CSSLength | CSSGlobalValues;
        borderStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | CSSGlobalValues;
        borderWidth?: CSSLength | 'thin' | 'medium' | 'thick' | CSSGlobalValues;
        boxShadow?: 'none' | string | CSSGlobalValues;
        opacity?: number | CSSGlobalValues;
        outline?: string | CSSGlobalValues;
        outlineColor?: CSSColor | CSSGlobalValues;
        outlineOffset?: CSSLength | CSSGlobalValues;
        outlineStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | CSSGlobalValues;
        outlineWidth?: CSSLength | 'thin' | 'medium' | 'thick' | CSSGlobalValues;
      
        // Transform Properties
        transform?: 'none' | string | CSSGlobalValues;
        transformOrigin?: string | CSSGlobalValues;
        transformStyle?: 'flat' | 'preserve-3d' | CSSGlobalValues;
        perspective?: CSSLength | 'none' | CSSGlobalValues;
        perspectiveOrigin?: string | CSSGlobalValues;
        backfaceVisibility?: 'visible' | 'hidden' | CSSGlobalValues;
      
        // Transition & Animation Properties
        transition?: string | CSSGlobalValues;
        transitionDelay?: CSSTime | CSSGlobalValues;
        transitionDuration?: CSSTime | CSSGlobalValues;
        transitionProperty?: 'none' | 'all' | string | CSSGlobalValues;
        transitionTimingFunction?: string | CSSGlobalValues;
        animation?: string | CSSGlobalValues;
        animationDelay?: CSSTime | CSSGlobalValues;
        animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | CSSGlobalValues;
        animationDuration?: CSSTime | CSSGlobalValues;
        animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both' | CSSGlobalValues;
        animationIterationCount?: number | 'infinite' | CSSGlobalValues;
        animationName?: string | 'none' | CSSGlobalValues;
        animationPlayState?: 'running' | 'paused' | CSSGlobalValues;
        animationTimingFunction?: string | CSSGlobalValues;
      
        // User Interface Properties
        cursor?: 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'all-scroll' | 'col-resize' | 'row-resize' | 'n-resize' | 'e-resize' | 's-resize' | 'w-resize' | 'ne-resize' | 'nw-resize' | 'se-resize' | 'sw-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'zoom-in' | 'zoom-out' | CSSGlobalValues;
        pointerEvents?: 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | CSSGlobalValues;
        resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline' | CSSGlobalValues;
        userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all' | CSSGlobalValues;
      
        // Miscellaneous Properties
        all?: CSSGlobalValues;
        clipPath?: string | CSSGlobalValues;
        filter?: string | CSSGlobalValues;
        mask?: string | CSSGlobalValues;
        mixBlendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity' | CSSGlobalValues;
        // opacity?: number | CSSGlobalValues;
        scrollBehavior?: 'auto' | 'smooth' | CSSGlobalValues;
        scrollMargin?: CSSLength | CSSGlobalValues;
        scrollPadding?: CSSLength | CSSGlobalValues;
        scrollSnapAlign?: 'none' | 'start' | 'end' | 'center' | CSSGlobalValues;
        scrollSnapType?: 'none' | 'x' | 'y' | 'block' | 'inline' | 'both' | 'mandatory' | 'proximity' | CSSGlobalValues;
        textRendering?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | CSSGlobalValues;
        touchAction?: 'auto' | 'none' | 'pan-x' | 'pan-left' | 'pan-right' | 'pan-y' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation' | CSSGlobalValues;
        willChange?: 'auto' | 'scroll-position' | 'contents' | 'transform' | 'opacity' | string | CSSGlobalValues;

        // Table Properties
        borderCollapse?: 'collapse' | 'separate' | CSSGlobalValues;
        borderSpacing?: CSSLength | CSSGlobalValues;
        captionSide?: 'top' | 'bottom' | 'block-start' | 'block-end' | CSSGlobalValues;
        emptyCells?: 'show' | 'hide' | CSSGlobalValues;
        tableLayout?: 'auto' | 'fixed' | CSSGlobalValues;
        verticalAlign?: CSSLength | 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom' | CSSGlobalValues;

        // Generated Content Properties
        // content?: 'normal' | 'none' | string | CSSGlobalValues;
        quotes?: 'none' | 'auto' | string | CSSGlobalValues;
        counterIncrement?: 'none' | string | CSSGlobalValues;
        counterReset?: 'none' | string | CSSGlobalValues;
        counterSet?: 'none' | string | CSSGlobalValues;

        // Printing Properties
        pageBreakAfter?: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'recto' | 'verso' | CSSGlobalValues;
        pageBreakBefore?: 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'recto' | 'verso' | CSSGlobalValues;
        pageBreakInside?: 'auto' | 'avoid' | CSSGlobalValues;
        orphans?: number | CSSGlobalValues;
        widows?: number | CSSGlobalValues;

        // Mask Properties
        maskImage?: string | CSSGlobalValues;
        maskMode?: 'alpha' | 'luminance' | 'match-source' | CSSGlobalValues;
        maskOrigin?: 'border-box' | 'content-box' | 'padding-box' | CSSGlobalValues;
        maskPosition?: string | CSSGlobalValues;
        maskRepeat?: string | CSSGlobalValues;
        maskSize?: CSSLength | 'auto' | 'cover' | 'contain' | CSSGlobalValues;

        // Writing Mode Properties
        direction?: 'ltr' | 'rtl' | CSSGlobalValues;
        unicodeBidi?: 'normal' | 'embed' | 'isolate' | 'bidi-override' | 'isolate-override' | 'plaintext' | CSSGlobalValues;
        writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr' | CSSGlobalValues;
        textOrientation?: 'mixed' | 'upright' | 'sideways' | CSSGlobalValues;

        // Columns Properties
        columnCount?: number | 'auto' | CSSGlobalValues;
        columnFill?: 'auto' | 'balance' | 'balance-all' | CSSGlobalValues;
        columnGap?: CSSLength | 'normal' | CSSGlobalValues;
        columnRule?: string | CSSGlobalValues;
        columnRuleColor?: CSSColor | CSSGlobalValues;
        columnRuleStyle?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | CSSGlobalValues;
        columnRuleWidth?: CSSLength | 'thin' | 'medium' | 'thick' | CSSGlobalValues;
        columnSpan?: 'none' | 'all' | CSSGlobalValues;
        columnWidth?: CSSLength | 'auto' | CSSGlobalValues;
        columns?: string | CSSGlobalValues;

        // Logical Properties
        inset?: CSSLength | 'auto' | CSSGlobalValues;
        insetBlock?: CSSLength | 'auto' | CSSGlobalValues;
        insetBlockEnd?: CSSLength | 'auto' | CSSGlobalValues;
        insetBlockStart?: CSSLength | 'auto' | CSSGlobalValues;
        insetInline?: CSSLength | 'auto' | CSSGlobalValues;
        insetInlineEnd?: CSSLength | 'auto' | CSSGlobalValues;
        insetInlineStart?: CSSLength | 'auto' | CSSGlobalValues;

        // Allow custom properties and other valid CSS properties
        [key: `--${string}`]: string | number | undefined;
        [key: string]: string | number | undefined | CSSGlobalValues;
}

/**
 * Configuration for DOM events
 * @remarks
 * Allows both prefixed and unprefixed event names
 */
export interface EventsConfig extends EventHandlerMap {
  [key: `on${Capitalize<EventName>}`]?: EventHandlerType<EventName>;
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
/**
 * Configuration interface for creating and managing HTML elements through the Wences library.
 * This interface provides a structured way to define all aspects of an HTML element,
 * including accessibility features, general attributes, styling, event handling,
 * boolean states, and child elements.
 *
 * @interface WencesConfig
 */
export interface WencesConfig {
  /**
   * Configuration for accessibility features, including ARIA attributes and roles.
   * Helps ensure your elements are accessible to assistive technologies and comply
   * with WCAG guidelines.
   *
   * @example
   * accessibility: {
   *   role: 'button',
   *   'label': 'Submit form',  // aria-label
   *   'disabled': false        // aria-disabled
   * }
   *
   * @see {@link AccessibilityConfig}
   */
  accessibility?: AccessibilityConfig;

  /**
   * General HTML attributes like `id`, `class`, `name`, and other standard element properties.
   * Controls the basic behavior and identification of the element.
   *
   * @example
   * general: {
   *   id: 'username-input',
   *   name: 'username',
   *   class: 'form-input'
   * }
   *
   * @see {@link GeneralConfig}
   */
  general?: GeneralConfig;

  /**
   * CSS styling configuration using camelCase property names.
   * Provides complete control over the element's appearance through standard CSS properties
   * and values.
   *
   * @example
   * style: {
   *   backgroundColor: '#007bff',
   *   padding: '10px 20px',
   *   borderRadius: '4px',
   *   color: 'white'
   * }
   *
   * @see {@link StyleConfig}
   */
  style?: StyleConfig;

  /**
   * Event handler configuration for DOM events.
   * Allows attaching event listeners to the element for user interactions and other DOM events.
   *
   * @example
   * events: {
   *   click: (event) => console.log('Button clicked', event),
   *   input: (event) => handleInput(event.target.value)
   * }
   *
   * @see {@link EventsConfig}
   */
  events?: EventsConfig;

  /**
   * Boolean attribute states like `disabled`, `hidden`, or `checked`.
   * These control the element's state through HTML boolean attributes.
   *
   * @example
   * state: {
   *   disabled: true,
   *   hidden: false
   * }
   */
  state?: { [key in BooleanAttribute]?: boolean };

  /**
   * Configuration for child elements.
   * Defines the element's contents through an array of HTML elements or text nodes.
   *
   * @example
   * // Adding child elements to a container
   * contents: {
   *   children: [
   *     document.createElement('div'),
   *     document.createTextNode('Hello, world!')
   *   ]
   * }
   *
   * @see {@link ContentsConfig}
   */
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
