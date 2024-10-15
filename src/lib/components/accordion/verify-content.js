import { verifyType } from '../../utilities/verify-content/verify-type';

function verifyContent(content) {
	const { sections, headerNameTag, headerText } = content;

	if (!Array.isArray(sections)) {
		console.error(
			'Invalid content: "sections" must not be empty. It must be an array of object, with "title" and "panel" as a key.'
		);
		return false;
	}

	if (
		headerNameTag !== undefined &&
		!verifyType(headerNameTag, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b'])
	) {
		return false;
	}

	if (headerText !== undefined && typeof headerText !== 'string') {
		console.error('Invalid content: "headerText" must be a type of string.');
		return false;
	}

	return true;
}

export { verifyContent };
