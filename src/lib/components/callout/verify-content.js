import { verifyIcon } from '../../utilities/verify-content/verify-icon';
import { verifyText } from '../../utilities/verify-content/verify-text';
import { verifyType } from '../../utilities/verify-content/verify-type';

function verifyContent(content) {
	const { type, title, icon, body } = content;

	if (type !== undefined) {
		const validCalloutTypes = ['success', 'warning', 'error', 'info', 'custom'];
		if (!verifyType(type, validCalloutTypes)) return false;
	}

	if (title !== undefined || typeof title !== 'string') {
		return verifyText(title, 'title');
	}

	if (icon !== undefined) {
		return verifyIcon(icon);
	}

	if (body) {
		return verifyText(body, 'body');
	}

	return true;
}

export { verifyContent };
