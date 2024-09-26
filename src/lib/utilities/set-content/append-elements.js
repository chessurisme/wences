import { logError } from '../error-manager';

/**
 * Appends multiple HTML or SVG elements to a specified HTML element.
 * Logs an error if the provided elements are not in an array or if any element is not of a supported type.
 *
 * @param {HTMLElement} element - The HTML element to which the elements will be appended. Must be a valid HTMLElement.
 * @param {Array<HTMLElement|SVGElement>} elements - An array of elements to append.
 *   Each element must be either an HTML element or an SVG element; non-supported types will trigger an error log.
 *
 * @returns {void}
 */
const appendElements = (element, elements) => {
	if (!Array.isArray(elements)) return logError('SC-5');

	elements.forEach((valueElement) => {
		if (
			valueElement instanceof HTMLElement ||
			valueElement instanceof SVGElement
		) {
			element.appendChild(valueElement);
			return;
		}

		logError('SC-6');
	});
};

export { appendElements };
