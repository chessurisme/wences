import { logError } from '../error-manager';

/**
 * Applies a set of attributes to a specified HTML element. If an attribute's value is not a string, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the attributes will be applied. Must be a valid HTMLElement.
 * @param {Object} attributes - An object containing key-value pairs of attributes to apply to the element.
 * @param {string} attributes.key - The attribute name to set on the element.
 * @param {string} attributes.value - The value to assign to the attribute. Only string values are accepted; non-string values will trigger an error log.
 *
 * @returns {void}
 */
const applyAttributes = (element, attributes) => {
	Object.entries(attributes).forEach(([key, value]) => {
		typeof value === 'string'
			? element.setAttribute(key, value)
			: logError('SA-2', { value: typeof value });
	});
};

export { applyAttributes };
