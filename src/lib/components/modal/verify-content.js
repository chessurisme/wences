function verifyContent(content) {
	const { removable, elements } = content;

	if (removable !== 'undefined' && typeof removable !== 'boolean') {
		console.error('Invalid content: "removable" must be a type of boolean.');
		return false;
	}

	if (
		!Array.isArray(elements) &&
		elements.every(
			(element) =>
				element instanceof HTMLElement || element instanceof SVGElement
		)
	) {
		console.error(
			'Invalid content: "elements" must be a type of array of HTMLElement or SVGElement.'
		);
		return false;
	}

	return true;
}

export { verifyContent };
