import { validateParameters } from '../validate-parameters';
import { applyContent } from './apply-content';
import { logError } from '../error-manager';

/**
 * Sets the content of a specified HTML element after validating the parameters.
 * If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the content will be applied. Must be a valid HTMLElement.
 * @param {Object} content - An object containing key-value pairs for content to apply.
 * @param {string} [content.text] - (Optional) The text to append to the element (used by `appendText`).
 * @param {string} [content.icon] - (Optional) The Lucide icon name to append to the element (used by `appendIcon`).
 * @param {Array<HTMLElement|SVGElement>} [content.elements] - (Optional) An array of elements to append to the element (used by `appendElements`).
 * @param {number} [content.index] - (Optional) An index value for indexed component.
 *
 * @returns {HTMLElement}
 */
const setContent = (element, content) => {
	if (!validateParameters(element, content)) {
		return logError('SC-1');
	}

	applyContent(element, content);

	return element;
};

export { setContent };
