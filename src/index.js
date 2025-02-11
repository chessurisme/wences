import AccessibilityHandler from './handlers/accessibility-handler';
import ContentsHandler from './handlers/contents-handler';
import EventsHandler from './handlers/events-handler';
import StateHandler from './handlers/state-handler';
import GeneralHandler from './handlers/general-handler';
import StyleHandler from './handlers/style-handler';

/**
 * Wences is a lightweight library for creating and managing HTML elements.
 * @class Wences
 */
class Wences {
	#element;
	#handlers;

	/**
	 * Creates a new Wences instance.
	 *
	 * @param {string} tagName The element's tag name. Defaults to 'div'.
	 * @param {Object} config The configuration object. See the README for more information.
	 */
	constructor(tagName = 'div', config = {}) {
		this.#validateTag(tagName);
		this.#element = document.createElement(tagName);

		this.#handlers = {
			accessibility: new AccessibilityHandler(this.#element),
			contents: new ContentsHandler(this.#element),
			events: new EventsHandler(this.#element),
			state: new StateHandler(this.#element),
			general: new GeneralHandler(this.#element),
			style: new StyleHandler(this.#element)
		};

		this.#applyConfig(config);
	}

	/**
	 * Validates the tag name.
	 *
	 * @param {string} tagName The tag name to validate.
	 * @throws {Error} If the tag name is invalid.
	 */
	#validateTag(tagName) {
		try {
			document.createElement(tagName);
			return true;
		} catch (error) {
			throw new Error(`Invalid HTML tag name: ${tagName} - ${error}`);
		}
	}

	/**
	 * Applies the configuration to the element.
	 *
	 * @param {Object} config The configuration object.
	 * @returns {Wences} The current Wences instance.
	 */
	#applyConfig(config) {
		// Process each handler type
		Object.entries(config).forEach(([handlerType, handlerConfig]) => {
			const handler = this.#handlers[handlerType];
			if (handler) {
				// For style configurations
				if (handlerType === 'style') {
					handler.apply(handlerConfig);
				}
				// For general attributes
				else if (handlerType === 'general') {
					Object.entries(handlerConfig).forEach(([key, value]) => {
						handler.apply({ [key]: value });
					});
				}
				// For state attributes
				else if (handlerType === 'state') {
					Object.entries(handlerConfig).forEach(([key, value]) => {
						handler.apply({ [key]: value });
					});
				}
				// For events
				else if (handlerType === 'events') {
					handler.apply({ events: handlerConfig });
				}
				// For accessibility attributes
				else if (handlerType === 'accessibility') {
					Object.entries(handlerConfig).forEach(([key, value]) => {
						handler.apply({ [key]: value });
					});
				}
				// For contents (if implemented)
				else if (handlerType === 'contents') {
					handler.apply({ contents: handlerConfig });
				}
			}
		});

		return this;
	}

	/**
	 * Returns the element.
	 *
	 * @returns {HTMLElement} The element.
	 */
	getElement() {
		return this.#element;
	}

	/**
	 * Appends the element to a parent element.
	 *
	 * @param {Element|string} parent The parent element or CSS selector.
	 * @returns {Wences} The current Wences instance for chaining.
	 */
	appendTo(parent) {
		if (typeof parent === 'string') {
			parent = document.querySelector(parent);
		}

		parent.appendChild(this.#element);
		return this;
	}
}

export default Wences;
