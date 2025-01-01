/**
 * Handles appending content elements to an HTML element.
 * Supports `HTMLElement`, `SVGElement`, and `Text` nodes as valid children.
 * @class ContentsHandler
 */
class ContentsHandler {
	#element;

	/**
	 * @param {HTMLElement|SVGElement} element - The HTML or SVG element to append content to.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			throw new TypeError('Provided element must be an instance of HTMLElement or SVGElement');
		}
		this.#element = element;
	}

	/**
	 * Applies content configurations to the element.
	 *
	 * @param {Object} config - Configuration object.
	 * @param {Array} config.children - Array of valid children (HTMLElement, SVGElement, or Text nodes).
	 */
	apply(config) {
		const { children = [] } = config.contents || {};

		if (!Array.isArray(children)) {
			throw new TypeError('children must be an array');
		}

		children.forEach((child) => {
			if (!(child instanceof HTMLElement || child instanceof SVGElement || child instanceof window.Text)) {
				throw new TypeError('Each child must be an instance of HTMLElement, SVGElement, or Text');
			}
			this.#element.appendChild(child);
		});
	}
}

export default ContentsHandler;
