import { validateParameters } from '../validate-parameters';
import { applyAttributes } from './apply-attributes';
import { logError } from '../error-manager';

/**
 * Sets accessibility attributes on a specified HTML element after validating the parameters. If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the attributes will be applied. Must be a valid HTMLElement.
 * @param {Object} accessibility - An object containing key-value pairs of attributes to apply to the element.
 * @param {string} accessibility.value - The value to assign to the attribute. Only string values are accepted; non-string values will trigger an error log.
 *
 * @returns {HTMLElement | void} - The modified element or void if an error occurred.
 */
const setAccessibility = (element, accessibility) => {
	if (!validateParameters(element, accessibility)) {
		return logError('SAC-1');
	}

	applyAttributes(element, accessibility);

	return element;
};

export { setAccessibility };
