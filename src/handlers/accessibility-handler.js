/**
 * Handles accessibility attributes for an HTML element.
 * Supports `role` and `aria-` prefixed attributes, including transformations like `current` to `aria-current`.
 * @class AccessibilityHandler
 */
class AccessibilityHandler {
	#element;

	/**
	 * @param {HTMLElement} element - The HTML element to apply accessibility attributes.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement)) {
			throw new TypeError('Provided element is not an instance of HTMLElement');
		}
		this.#element = element;
	}

	/**
	 * Applies accessibility configurations to the element.
	 *
	 * @param {Object} config - Accessibility attributes to apply.
	 * Valid keys include `role`, `aria-` prefixed attributes, and transformed attributes.
	 */
	apply(config) {
		Object.entries(config).forEach(([key, value]) => {
			if (key === 'role') {
				this.#element.setAttribute('role', value);
				return;
			}

			if (key.startsWith('aria-')) {
				this.#element.setAttribute(key, value);
				return;
			}

			if (key.startsWith('aria') && key.charAt(4).toUpperCase() === key.charAt(4)) {
				const attributeName = `aria-${key.slice(4).toLowerCase()}`;
				this.#element.setAttribute(attributeName, value);
				return;
			}

			if (!key.startsWith('aria-') && ['current'].includes(key)) {
				const attributeName = `aria-${key.toLowerCase()}`;
				this.#element.setAttribute(attributeName, value);
				return;
			}
		});
	}
}

export default AccessibilityHandler;
