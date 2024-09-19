function setBehavior(element, behavior) {
	if (!validateParameters(element, behavior)) return;

	const tagName = element.tagName.toLowerCase();

	Object.entries(behavior).forEach(([key, value]) => {
		const eventType = key.startsWith('on')
			? key.substring(2).toLowerCase()
			: key.toLowerCase();

		if (isValidEvent(tagName, eventType)) {
			element.addEventListener(eventType, value);
		}
	});
}

function validateParameters(element, behavior) {
	if (!element || !(element instanceof HTMLElement)) {
		console.error('Invalid element. Must be an instance of HTMLElement.');
		return false;
	}

	if (!behavior || typeof behavior !== 'object') {
		console.error('Invalid behavior. Must be a non-null object.');
		return false;
	}

	if (Object.keys(behavior).length === 0) {
		console.error('Behavior object is empty.');
		return false;
	}

	for (const [key, value] of Object.entries(behavior)) {
		const eventType = key.startsWith('on')
			? key.substring(2).toLowerCase()
			: key.toLowerCase();

		if (!isValidEvent(element.tagName.toLowerCase(), eventType)) {
			console.error(
				`Invalid event type "${key}" for element type "${element.tagName.toLowerCase()}".`
			);
			return false;
		}

		if (typeof value !== 'function') {
			console.error(`Behavior "${key}" must be a function.`);
			return false;
		}
	}

	return true;
}

function isValidEvent(tagName, eventType) {
	const testElement = document.createElement(tagName);
	return eventType in testElement;
}

export { setBehavior };
