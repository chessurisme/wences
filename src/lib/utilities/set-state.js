function setState(element, state) {
	if (!validateParameters(element, state)) return;

	Object.entries(state).forEach(([key, value]) => {
		value ? element.setAttribute(key, '') : element.removeAttribute(key);
	});
}

function validateParameters(element, state) {
	if (!element || !(element instanceof HTMLElement)) {
		console.error('Invalid element. Must be an instance of HTMLElement.');
		return false;
	}

	if (!state || typeof state !== 'object') {
		console.error('Invalid state. Must be a non-null object.');
		return false;
	}

	if (Object.keys(state).length === 0) {
		console.error('State object is empty.');
		return false;
	}

	const invalidKeys = Object.keys(state).filter(
		(key) => !isValidBooleanAttribute(element.tagName.toLowerCase(), key)
	);

	if (invalidKeys.length > 0) {
		console.error(
			`Invalid states keys: ${invalidKeys.join(', ')}. Expected valid boolean HTML attributes for element type "${element.tagName.toLowerCase()}".`
		);
		return false;
	}

	for (const [key, value] of Object.entries(state)) {
		if (typeof value !== 'boolean') {
			console.error(`Invalid value for "${key}". Must be a boolean.`);
			return false;
		}
	}

	return true;
}

function isValidBooleanAttribute(tagName, attributeName) {
	const testElement = document.createElement(tagName);

	testElement.setAttribute(attributeName, '');
	const hasAttribute = testElement.hasAttribute(attributeName);

	testElement.removeAttribute(attributeName);

	return hasAttribute;
}

export { setState };
