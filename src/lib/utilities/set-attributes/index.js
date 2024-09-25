import { validateParameters } from '../validate-parameters';
import { applyAttributes } from './apply-attributes';
import { logError } from '../error-manager';

/**
 * Sets attributes on a specified HTML element after validating the parameters. If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the attributes will be applied. Must be a valid HTMLElement.
 * @param {Object} attributes - An object containing key-value pairs of attributes to apply to the element.
 * @param {string} attributes.key - The attribute name to set on the element.
 * @param {string} attributes.value - The value to assign to the attribute. Only string values are accepted; non-string values will trigger an error log.
  
 * @returns {void}
 */
const setAttributes = (element, attributes) => {
	validateParameters(element, attributes)
		? applyAttributes(element, attributes)
		: logError('SA-1');
};

export { setAttributes };
