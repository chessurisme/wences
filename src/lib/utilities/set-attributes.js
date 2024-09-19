function setAttributes(element, attributes) {
	if (!validateParameters(element, attributes)) return;

	Object.entries(attributes).forEach(([key, value]) => {
		element.setAttribute(key, value);
	});
}

function validateParameters(element, attributes) {
	if (!element || !(element instanceof HTMLElement)) {
		console.error('Invalid element. Must be an instance of HTMLElement.');
		return false;
	}

	if (!attributes || typeof attributes !== 'object') {
		console.error('Invalid attributes. Must be a non-null object.');
		return false;
	}

	if (Object.keys(attributes).length === 0) {
		console.error('Attributes object is empty.');
		return false;
	}

	for (const [key, value] of Object.entries(attributes)) {
		if (typeof key !== 'string') {
			console.error('Attribute key must be a string.');
			return false;
		}
		if (typeof value !== 'string') {
			console.error(`Attribute "${key}" value should be a string.`);
			return false;
		}
	}

	return true;
}

export { setAttributes };
