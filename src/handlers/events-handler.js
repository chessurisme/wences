/**
 * Handles event attachment for an HTML element.
 * Supports valid DOM event names, both with and without the "on" prefix.
 */
class EventsHandler {
	#element;

	/**
	 * @param {HTMLElement|SVGElement} element - The HTML or SVG element to attach events to.
	 */
	constructor(element) {
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			throw new TypeError('Provided element must be an instance of HTMLElement or SVGElement');
		}
		this.#element = element;
	}

	/**
	 * Applies event configurations to the element.
	 *
	 * @param {Object} config - Configuration object.
	 * @param {Object} config.events - Object with event names as keys and functions as values.
	 */
	apply(config) {
		const { events = {} } = config;

		if (typeof events !== 'object' || Array.isArray(events)) {
			throw new TypeError('events must be an object');
		}

		Object.entries(events).forEach(([eventName, handler]) => {
			if (typeof handler !== 'function') {
				throw new TypeError(`Handler for event "${eventName}" must be a function`);
			}

			const normalizedEventName = eventName.toLowerCase().replace(/^on/, '');

			// Validate that the normalized event name is a valid DOM event
			if (!this.#isValidEvent(normalizedEventName)) {
				throw new Error(`"${eventName}" is not a valid DOM event name`);
			}

			this.#element.addEventListener(normalizedEventName, handler);
		});
	}

	/**
	 * Checks if the event name is a valid DOM event.
	 *
	 * @param {string} eventName - The event name to validate.
	 * @returns {boolean} - True if the event name is valid, otherwise false.
	 */
	#isValidEvent(eventName) {
		const dummy = document.createElement('div');

		// Check if it's a valid event for a DOM element, window, or document
		return `on${eventName}` in dummy || `on${eventName}` in window || `on${eventName}` in document;
	}
}

export default EventsHandler;
