import { logError } from '../error-manager';

/**
 * Applies a set of accessibility attributes to a specified HTML element. If an attribute's value is not a string, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the attributes will be applied. Must be a valid HTMLElement.
 * @param {Object} accessibility - An object containing key-value pairs of attributes to apply to the element.
 * @param {string} accessibility.value - The value to assign to the attribute. Only string values are accepted; non-string values will trigger an error log.
 *
 * @returns {HTMLElement | void} - The modified element or void if an error occurred.
 */
const applyAttributes = (element, accessibility) => {
	Object.entries(accessibility).forEach(([key, value]) => {
		if (typeof value !== 'string') {
			return logError('SAC-2', { key, value: typeof value });
		}

		if (key === 'role') {
			return element.setAttribute('role', value);
		}

		if (key.startsWith('aria-')) {
			return element.setAttribute(key, value);
		}

		element.setAttribute(`aria-${key}`, value);
	});

	return element;
};

export { applyAttributes };
