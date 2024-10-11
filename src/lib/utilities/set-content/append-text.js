import { logError } from '../error-manager';

/**
 * Appends a paragraph element containing the specified text to a given HTML element.
 * Logs an error if the provided text is not a string.
 *
 * @param {HTMLElement} element - The HTML element to which the text will be appended. Must be a valid HTMLElement.
 * @param {string} text - The text to append to the element. Must be a string; non-string values will trigger an error log.
 * @param {string} [tagName = 'p'] - The tag name to use for text.
 *
 * @returns {HTMLElement | void}
 */
const appendText = (element, text, tagName = 'p') => {
	if (typeof text !== 'string') return logError('SC-3');

	const textHolder = document.createElement(`${tagName}`);
	textHolder.textContent = text;
	element.appendChild(textHolder);

	return element;
};

export { appendText };
