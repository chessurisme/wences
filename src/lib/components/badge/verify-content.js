import { verifyType } from '../../utilities/verify-content/verify-type';
import { verifyText } from '../../utilities/verify-content/verify-text';

function verifyContent(content) {
	const { type, text } = content;

	if (
		type !== undefined ||
		!verifyType(type, [
			'primary',
			'secondary',
			'tertiary',
			'error',
			'warning',
			'success',
			'info',
			'custom'
		])
	) {
		return false;
	}

	if (!verifyText(text)) {
		return false;
	}

	return true;
}

export { verifyContent };
