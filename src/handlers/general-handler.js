/**
 * Handles setting general attributes on an HTML or SVG element.
 * @class GeneralHandler
 */
class GeneralHandler {
	#element;

	/**
	 * @param {HTMLElement|SVGElement} element - The element to apply attributes to.
	 * @throws {TypeError} If the provided element is not an instance of HTMLElement or SVGElement.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			throw new TypeError('Provided element must be an instance of HTMLElement or SVGElement');
		}
		this.#element = element;
	}

	/**
	 * Applies general attributes to the element.
	 *
	 * @param {Object<string, string>} config - Configuration object containing attributes and their values.
	 * @throws {TypeError} If the config is not an object or is an array.
	 * @throws {Error} If an attribute is not valid for the given element.
	 */
	apply(config) {
		if (typeof config !== 'object' || Array.isArray(config)) {
			throw new TypeError('Config must be an object');
		}

		Object.entries(config).forEach(([key, value]) => {
			if (!this.#isValidAttribute(key)) {
				throw new Error(`"${key}" is not a valid attribute for this element`);
			}

			this.#element.setAttribute(key, value);
		});
	}

	/**
	 * Validates if an attribute is valid for the element.
	 *
	 * @param {string} attributeName - The attribute name to validate.
	 * @returns {boolean} True if the attribute is valid, otherwise false.
	 * @private
	 */
	#isValidAttribute(attributeName) {
		const globalAttributes = new Set(['id', 'class', 'title', 'lang', 'dir']);
		const commonAttributes = new Set(['name', 'for', 'tabindex', 'data-*']);
		const inputAttributes = new Set(['type', 'value', 'placeholder', 'min', 'max', 'step', 'pattern', 'maxlength', 'multiple', 'accept']);
		const imageAttributes = new Set(['src', 'alt', 'width', 'height', 'loading']);
		const anchorAttributes = new Set(['href', 'target', 'rel']);
		const iframeAttributes = new Set(['src', 'width', 'height', 'sandbox', 'allow']);
		const svgAttributes = new Set(['x', 'y', 'width', 'height', 'viewBox', 'fill', 'stroke', 'd']);
		const formAttributes = new Set([
			'form',
			'required',
			'readonly',
			'autocomplete',
			'autofocus',
			'formaction',
			'formmethod',
			'formnovalidate',
			'formtarget'
		]);
		const mediaAttributes = new Set(['autoplay', 'controls', 'loop', 'muted', 'preload', 'poster', 'crossorigin']);
		const tableAttributes = new Set(['colspan', 'rowspan', 'headers', 'scope']);
		const securityAttributes = new Set(['referrerpolicy', 'integrity', 'importance', 'fetchpriority', 'decoding']);
		const metaAttributes = new Set(['content', 'charset', 'http-equiv', 'property']);
		const semanticAttributes = new Set(['cite', 'datetime']);
		const scriptAttributes = new Set(['async', 'defer', 'nomodule']);

		const allAttributes = new Set([
			...globalAttributes,
			...commonAttributes,
			...inputAttributes,
			...imageAttributes,
			...anchorAttributes,
			...iframeAttributes,
			...svgAttributes,
			...formAttributes,
			...mediaAttributes,
			...tableAttributes,
			...securityAttributes,
			...metaAttributes,
			...semanticAttributes,
			...scriptAttributes
		]);

		if (attributeName.startsWith('data-')) {
			return true;
		}

		return allAttributes.has(attributeName);
	}
}

export default GeneralHandler;
