import { logError } from '../error-manager';

/**
 * Applies styles to a specified HTML element based on the provided styles object.
 * The keys in the object represent CSS property names (in camelCase), and the values are either strings or nested objects for custom properties.
 * Logs errors for non-string values and invalid nested styles.
 *
 * @param {HTMLElement} element - The HTML element to which the styles will be applied. Must be a valid HTMLElement.
 * @param {Object} styles - An object containing key-value pairs where each key represents a CSS property (in camelCase) and each value is either a string or a nested object.
 * @param {string|Object} styles.style - A string representing the CSS value, or an object for nested custom properties (e.g., `{ "--custom": { "property": "value" } }`).
 *
 * @returns {void}
 */
const applyStyles = (element, styles) => {
	Object.entries(styles).forEach(([key, value]) => {
		if (typeof value === 'string') {
			element.style[key] = value;
			return;
		}

		if (typeof value === 'object' || Object.entries(value).length !== 0) {
			Object.entries(value).forEach(([nestedKey, nestedValue]) => {
				typeof nestedValue === 'string'
					? element.style.setProperty(`${key}-${nestedKey}`, nestedValue)
					: logError('SSt-3', { key: nestedKey, parentKey: key });
			});
			return;
		}

		logError('SSt-2', { key: key });
	});
};

export { applyStyles };
