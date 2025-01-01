/**
 * CSS styling type definitions and interfaces
 * @module Style
 */

/**
 * CSS global keyword values
 * @typedef {string} CSSGlobalValues
 */
type CSSGlobalValues = 'inherit' | 'initial' | 'revert' | 'unset';

/**
 * Represents all possible CSS lengths
 * @typedef {string} CSSLength
 */
type CSSLength = number | `${number}${CSSLengthUnit}`;

/**
 * Represents all possible CSS lengths
 * @typedef {string} CSSLength
 */
type CSSLengthUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%' | 'ch' | 'vmin' | 'vmax' | 'ex';

/**
 * Represents all possible CSS colors
 * @typedef {string} CSSColor
 */
type CSSColor = 'transparent' | 'currentColor' | string;

/**
 * Represents all possible CSS times
 * @typedef {string} CSSTime
 */
type CSSTime = `${number}${'s' | 'ms'}`;

/**
 * Represents all possible CSS angles
 * @typedef {string} CSSAngle
 */
type CSSAngle = `${number}${'deg' | 'rad' | 'grad' | 'turn'}`;

/**
 * Comprehensive interface for CSS properties and values
 * @interface StyleConfig
 */

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
	display?:
		| 'block'
		| 'inline'
		| 'inline-block'
		| 'flex'
		| 'inline-flex'
		| 'grid'
		| 'inline-grid'
		| 'flow-root'
		| 'none'
		| 'contents'
		| CSSGlobalValues;
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
	fontSize?:
		| CSSLength
		| 'xx-small'
		| 'x-small'
		| 'small'
		| 'medium'
		| 'large'
		| 'x-large'
		| 'xx-large'
		| 'xxx-large'
		| 'smaller'
		| 'larger'
		| CSSGlobalValues;
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
	cursor?:
		| 'auto'
		| 'default'
		| 'none'
		| 'context-menu'
		| 'help'
		| 'pointer'
		| 'progress'
		| 'wait'
		| 'cell'
		| 'crosshair'
		| 'text'
		| 'vertical-text'
		| 'alias'
		| 'copy'
		| 'move'
		| 'no-drop'
		| 'not-allowed'
		| 'grab'
		| 'grabbing'
		| 'all-scroll'
		| 'col-resize'
		| 'row-resize'
		| 'n-resize'
		| 'e-resize'
		| 's-resize'
		| 'w-resize'
		| 'ne-resize'
		| 'nw-resize'
		| 'se-resize'
		| 'sw-resize'
		| 'ew-resize'
		| 'ns-resize'
		| 'nesw-resize'
		| 'nwse-resize'
		| 'zoom-in'
		| 'zoom-out'
		| CSSGlobalValues;
	pointerEvents?:
		| 'auto'
		| 'none'
		| 'visiblePainted'
		| 'visibleFill'
		| 'visibleStroke'
		| 'visible'
		| 'painted'
		| 'fill'
		| 'stroke'
		| 'all'
		| CSSGlobalValues;
	resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline' | CSSGlobalValues;
	userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all' | CSSGlobalValues;

	// Miscellaneous Properties
	all?: CSSGlobalValues;
	clipPath?: string | CSSGlobalValues;
	filter?: string | CSSGlobalValues;
	mask?: string | CSSGlobalValues;
	mixBlendMode?:
		| 'normal'
		| 'multiply'
		| 'screen'
		| 'overlay'
		| 'darken'
		| 'lighten'
		| 'color-dodge'
		| 'color-burn'
		| 'hard-light'
		| 'soft-light'
		| 'difference'
		| 'exclusion'
		| 'hue'
		| 'saturation'
		| 'color'
		| 'luminosity'
		| CSSGlobalValues;
	// opacity?: number | CSSGlobalValues;
	scrollBehavior?: 'auto' | 'smooth' | CSSGlobalValues;
	scrollMargin?: CSSLength | CSSGlobalValues;
	scrollPadding?: CSSLength | CSSGlobalValues;
	scrollSnapAlign?: 'none' | 'start' | 'end' | 'center' | CSSGlobalValues;
	scrollSnapType?: 'none' | 'x' | 'y' | 'block' | 'inline' | 'both' | 'mandatory' | 'proximity' | CSSGlobalValues;
	textRendering?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | CSSGlobalValues;
	touchAction?:
		| 'auto'
		| 'none'
		| 'pan-x'
		| 'pan-left'
		| 'pan-right'
		| 'pan-y'
		| 'pan-up'
		| 'pan-down'
		| 'pinch-zoom'
		| 'manipulation'
		| CSSGlobalValues;
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
	columnRuleStyle?:
		| 'none'
		| 'hidden'
		| 'dotted'
		| 'dashed'
		| 'solid'
		| 'double'
		| 'groove'
		| 'ridge'
		| 'inset'
		| 'outset'
		| CSSGlobalValues;
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
