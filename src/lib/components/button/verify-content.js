import { verifyText } from '../../utilities/verify-content/verify-text';
import { verifyIcon } from '../../utilities/verify-content/verify-icon';
import { verifyHref } from '../../utilities/verify-content/verify-href';
import { verifyType } from '../../utilities/verify-content/verify-type';

/**
 * Verify content object properties.
 * @param {object} content - The content object to verify.
 * @returns {boolean} - Returns true if all properties meet the criteria, false otherwise.
 */
function verifyContent(content) {
	const { text, icon, type, href, target } = content;

	if (text !== undefined && !verifyText(text)) {
		return false;
	}

	if (icon !== undefined && !verifyIcon(icon)) {
		return false;
	}

	if (type !== undefined) {
		const validButtonTypes = ['primary', 'secondary', 'tertiary'];
		if (!verifyType(type, validButtonTypes)) {
			return false;
		}
	}

	if (href !== undefined && !verifyHref(href)) {
		return false;
	}

	if (target !== undefined && typeof target !== 'string') {
		console.error(
			'Invalid parameter: "target" must be one of "_blank", "_self", "_parent", "_top", or a valid frame name.'
		);
		return false;
	}

	return true;
}

export { verifyContent };
