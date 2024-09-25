import { logError } from '../error-manager';

/**
 * Applies event listeners to a specified HTML element based on the provided behavior object. The keys are event types (e.g., 'click', 'onmouseover'),
 * and the values are the corresponding event handler functions. Logs an error if the event handler is not a function or if the event type is not valid.
 *
 * @param {HTMLElement} element - The HTML element to which the event listeners will be applied. Must be a valid HTMLElement.
 * @param {Object} behavior - An object where keys represent event types (e.g., 'click', 'onmouseover') and values are the corresponding event handler functions.
 * @param {function} behavior.eventHandler - The event handler function to bind to the event type. Non-function values will trigger an error log.
 *
 * @returns {void}
 */
const applyBehavior = (element, behavior) => {
	const tagName = element.tagName.toLowerCase();

	Object.entries(behavior).forEach(([key, value]) => {
		if (typeof value !== 'function') return logError('SB-2', { key: key });

		const eventType = key.startsWith('on')
			? key.substring(2).toLowerCase()
			: key.toLowerCase();

		eventType in document.createElement(tagName)
			? element.addEventListener(eventType, value)
			: logError('SB-3', { tagName: tagName, eventType: eventType });
	});
};

export { applyBehavior };
