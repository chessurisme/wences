function verifyContent(content) {
	const { thumbnail, text, removable } = content;

	if (
		thumbnail !== undefined &&
		!(
			typeof thumbnail === 'string' ||
			thumbnail instanceof HTMLElement ||
			thumbnail instanceof SVGElement ||
			thumbnail instanceof Image
		)
	) {
		console.error(
			'Invalid content: "thumbnail" must be a type of string or an instance of an HTMLElement, Image or of an SVGElement.'
		);
		return false;
	}

	if (typeof text !== 'string') {
		console.error('Invalid content: "text" must be a type of string.');
		return false;
	}

	if (removable !== undefined && typeof removable !== 'boolean') {
		console.error('Invalid content: "removable" must be a type of boolean.');
		return false;
	}

	return true;
}

export { verifyContent };
