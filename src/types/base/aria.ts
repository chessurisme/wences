/**
 * ARIA-related type definitions and interfaces for accessibility support
 * @module ARIA
 */

/**
 * Comprehensive list of valid ARIA roles as defined in the WAI-ARIA specification
 * @typedef {string} AriaRole
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
 * Type for boolean ARIA attributes
 * @typedef {('true' | 'false' | boolean)} AriaBoolean
 */
export type AriaBoolean = 'true' | 'false' | boolean;

/**
 * Type for tristate ARIA attributes
 * @typedef {('true' | 'false' | 'mixed' | boolean)} AriaTristate
 */
export type AriaTristate = 'true' | 'false' | 'mixed' | boolean;

/**
 * Type for ARIA live region attributes
 * @typedef {('assertive' | 'off' | 'polite')} AriaLive
 */
export type AriaLive = 'assertive' | 'off' | 'polite';

/**
 * Type for ARIA orientation attributes
 * @typedef {('horizontal' | 'vertical')} AriaOrientation
 */
export type AriaOrientation = 'horizontal' | 'vertical';

/**
 * Type for ARIA sort attributes
 * @typedef {('ascending' | 'descending' | 'none' | 'other')} AriaSort
 */
export type AriaSort = 'ascending' | 'descending' | 'none' | 'other';

/**
 * Interface defining all possible ARIA attributes and their values
 * @interface AriaAttributes
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
	'aria-relevant'?:
		| 'additions'
		| 'additions removals'
		| 'additions text'
		| 'all'
		| 'removals'
		| 'removals additions'
		| 'removals text'
		| 'text'
		| 'text additions'
		| 'text removals';
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
