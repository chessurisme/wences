/**
 * Handles the application of styles to an HTML or SVG element.
 * Supports camelCase and kebab-case style property names.
 * @class StyleHandler
 */
class StyleHandler {
	#element;

	/**
	 * @param {HTMLElement|SVGElement} element - The element to apply styles to.
	 * @throws {TypeError} If the provided element is not an instance of HTMLElement or SVGElement.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			throw new TypeError('Provided element must be an instance of HTMLElement or SVGElement');
		}
		this.#element = element;
	}

	/**
	 * Applies styles to the element based on the provided configuration.
	 *
	 * @param {Object<string, string>} config - An object where keys are CSS property names (camelCase or kebab-case) and values are the CSS values.
	 * @example
	 * const config = {
	 *   style: {
	 *     backgroundColor: 'red',
	 *     color: 'white',
	 *     'font-size': '16px',
	 *   },
	 * };
	 * handler.apply(config.style);
	 */
	apply(config) {
		if (typeof config !== 'object' || Array.isArray(config)) {
			throw new TypeError('Config must be an object');
		}

		Object.entries(config).forEach(([property, value]) => {
			// Convert kebab-case to camelCase for JavaScript style property access
			const normalizedProperty = property.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

			if (normalizedProperty in this.#element.style) {
				this.#element.style[normalizedProperty] = value;
			} else {
				throw new Error(`"${property}" is not a valid style property`);
			}
		});
	}
}

export default StyleHandler;
