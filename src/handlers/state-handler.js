/**
 * Handles the application of boolean attributes on an HTML or SVG element.
 * Boolean attributes are either present (true) or absent (false).
 */
class StateHandler {
	#element;

	/**
	 * A set of valid boolean attributes that can be applied to an element.
	 * These attributes can only have a value of `true` (attribute is present) or `false` (attribute is removed).
	 * @private
	 * @static
	 * @type {Set<string>}
	 */
	static #VALID_BOOLEAN_ATTRIBUTES = new Set([
		'allowfullscreen',
		'async',
		'autofocus',
		'autoplay',
		'checked',
		'controls',
		'default',
		'defer',
		'disabled',
		'formnovalidate',
		'hidden',
		'ismap',
		'loop',
		'multiple',
		'muted',
		'nomodule',
		'novalidate',
		'open',
		'playsinline',
		'readonly',
		'required',
		'reversed',
		'selected'
	]);

	/**
	 * @param {HTMLElement|SVGElement} element - The element to apply boolean attributes to.
	 * @throws {TypeError} If the provided element is not an instance of HTMLElement or SVGElement.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			throw new TypeError('Provided element must be an instance of HTMLElement or SVGElement');
		}
		this.#element = element;
	}

	/**
	 * Applies boolean attributes to the element based on the provided configuration.
	 *
	 * @param {Object<string, boolean>} config - An object where keys are attribute names and values are booleans.
	 * @example
	 * const config = {
	 *     disabled: true,
	 *     hidden: false,
	 *     checked: true
	 * };
	 * handler.apply(config);
	 * @throws {Error} If an attribute in the config is not a valid boolean attribute.
	 */
	apply(config) {
		Object.entries(config).forEach(([attr, value]) => {
			if (StateHandler.#VALID_BOOLEAN_ATTRIBUTES.has(attr.toLowerCase())) {
				if (value) {
					this.#element.setAttribute(attr, '');
				} else {
					this.#element.removeAttribute(attr);
				}
			} else {
				throw new Error(`"${attr}" is not a valid boolean attribute`);
			}
		});
	}
}

export default StateHandler;
