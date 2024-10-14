import { verifyType } from '../../../utilities/verify-content/verify-type';

function verifyConfig(config) {
	const { content } = config;
	const { type, items, case: characterCase } = content;

	if (
		!type ||
		!verifyType(type, [
			'roman',
			'alphabet',
			'number',
			'disc',
			'circle',
			'square',
			'triangle',
			'hyphen',
			'custom'
		])
	) {
		console.error(
			'Invalid content: "type" must not be empty. Make sure it is set to "roman", "alphabet", "number", "disc", "circle", "square", "triangle", "hyphen"  or "custom".'
		);
		return false;
	}

	if (items !== undefined && !Array.isArray(items)) {
		console.error('Invalid content: "items" must be an array.');
		return false;
	}

	if (Array.isArray(items)) {
		items.forEach((item) => {
			if (typeof item === 'object' && !item.content) {
				console.error('Invalid content: "items.content" must not be empty.');
				return false;
			}

			if (typeof item === 'object' && !item.list) {
				console.error('Invalid content: "items.list" must not be empty.');
				return false;
			}
		});
	}

	if (
		characterCase !== undefined &&
		!verifyType(characterCase, ['lower', 'upper'])
	) {
		console.error(
			'Invalid content: "case" must be a type of "lower" or "upper".'
		);
		return false;
	}

	return true;
}

export { verifyConfig };
