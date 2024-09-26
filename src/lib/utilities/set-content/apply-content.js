import { logError } from '../error-manager';
import { appendText } from './append-text';
import { appendIcon } from './append-icon';
import { appendElements } from './append-elements';

/**
 * Applies content to a specified HTML element based on the provided content object. 
 * Supports text, icons, and multiple elements. Logs an error for unsupported content keys.
 *
 * @param {HTMLElement} element - The HTML element to which the content will be applied. Must be a valid HTMLElement.
 * @param {Object} content - An object containing key-value pairs for content to apply.
 * @param {string} [content.text] - (Optional) The text to append to the element (used by `appendText`).
 * @param {string} [content.icon] - (Optional) The Lucide icon name to append to the element (used by `appendIcon`).
 * @param {Array<HTMLElement|SVGElement>} [content.elements] - (Optional) An array of elements to append to the element (used by `appendElements`).
 * @param {number} [content.index] - (Optional) An index value for indexed component.
 * 
 * @returns {void}
 */
const applyContent = (element, content) => {
	Object.entries(content).forEach(([key, value]) => {
		switch (key) {
			case 'text':
				appendText(element, value);
				break;
			case 'icon':
				appendIcon(element, value);
				break;
			case 'elements':
				appendElements(element, value);
				break;
			case 'index':
				break;
			default:
				logError('SC-2', { key: key });
		}
	});
};

export { applyContent };
