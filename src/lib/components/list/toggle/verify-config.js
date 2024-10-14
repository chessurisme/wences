import { verifyType } from '../../../utilities/verify-content/verify-type';

function verifyConfig(config) {
	const { content } = config;
	const { type, checkIndex, name, items } = content;

	if (!type || !verifyType(type, ['checkbox', 'radio'])) {
		console.error(
			'Invalid content: "type" must not be empty. Make sure it is set to "checkbox" or "radio".'
		);
		return false;
	}

	if (
		checkIndex !== undefined &&
		(!Array.isArray(checkIndex) ||
			checkIndex.some((index) => typeof index !== 'number'))
	) {
		console.error('Invalid content: "checkIndex" must be an array of number.');
		return false;
	}

	if (items !== undefined && !Array.isArray(items)) {
		console.error('Invalid content: "items" must be an array.');
		return false;
	}

	if (type === 'radio' && checkIndex.length > 1) {
		console.error(
			'Invalid content: "checkIndex" must contain only one item when the "type" is "radio".'
		);
		return false;
	}

	if (typeof name !== 'string' || name.trim() === '') {
		console.error(
			'Invalid content: "name" must not be empty and must be a type of string.'
		);
		return false;
	}

	return true;
}

export { verifyConfig };
