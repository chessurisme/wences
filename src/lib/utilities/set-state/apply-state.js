import { logError } from '../error-manager';

/**
 * Applies state attributes to a specified HTML element based on the provided state object.
 * The keys in the object represent state attributes, and the values are booleans indicating whether to set or remove the attribute.
 * Logs an error if a value is not a boolean.
 *
 * @param {HTMLElement} element - The HTML element to which the state attributes will be applied. Must be a valid HTMLElement.
 * @param {Object} states - An object containing key-value pairs where each key represents a state attribute and each value is a boolean.
 * @param {boolean} states.state - A boolean indicating whether to set (true) or remove (false) the attribute from the element.
 *
 * @returns {void}
 */
const applyState = (element, states) => {
	Object.entries(states).forEach(([key, value]) => {
		if (typeof value !== 'boolean') return logError('SS-2', { key: key });

		value ? element.setAttribute(key, '') : element.removeAttribute(key);
	});
};

export { applyState };
