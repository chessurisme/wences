import { validateParameters } from '../validate-parameters';
import { applyStyles } from './apply-style';
import { logError } from '../error-manager';

/**
 * Sets inline styles on a specified HTML element after validating the parameters.
 * If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the styles will be applied. Must be a valid HTMLElement.
 * @param {Object} styles - An object containing key-value pairs where each key represents a CSS property (in camelCase) and each value is either a string or a nested object for custom properties.
 *
 * @returns {void}
 */
const setStyles = (element, styles) => {
	validateParameters(element, styles)
		? applyStyles(element, styles)
		: logError('SSt-1');
};

export { setStyles };
