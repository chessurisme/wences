import { logError } from '../error-manager';

/**
 * Appends an icon to a specified HTML element.
 * Supports both Lucide icons (as strings) and existing HTML or SVG elements.
 * Logs an error if the provided icon is not a supported type.
 *
 * @param {HTMLElement} element - The HTML element to which the icon will be appended. Must be a valid HTMLElement.
 * @param {string|HTMLElement|SVGElement} icon - The icon to append. Can be:
 *   - A string representing a Lucide icon name.
 *   - An existing HTML element.
 *   - An existing SVG element.
 *   Non-supported types will trigger an error log.
 *
 * @returns {void}
 */
const appendIcon = (element, icon) => {
	// Only support Lucide icons as of now
	if (typeof icon === 'string') {
		const iconContainer = document.createElement('i');
		iconContainer.dataset.lucide = icon;

		element.appendChild(iconContainer);
		return;
	}

	if (icon instanceof HTMLElement || icon instanceof SVGElement) {
		element.appendChild(icon);
		return;
	}

	logError('SC-4');
};

export { appendIcon };
