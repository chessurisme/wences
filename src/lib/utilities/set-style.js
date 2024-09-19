function setStyles(element, styles) {
	if (!validateParameters(element, styles)) return;

	Object.entries(styles).forEach(([property, value]) => {
		if (typeof value !== 'object' || Array.isArray(value)) {
			element.style[property] = value;
			return;
		}

		Object.entries(value).forEach(([nestedProperty, nestedValue]) => {
			element.style.setProperty(`${property}-${nestedProperty}`, nestedValue);
		});
	});
}

function validateParameters(element, styles) {
	if (!element || !(element instanceof HTMLElement)) {
		console.error('Invalid element. Must be an instance of HTMLElement.');
		return false;
	}

	if (!styles || typeof styles !== 'object') {
		console.error('Invalid styles. Must be a non-null object.');
		return false;
	}

	for (const [key, value] of Object.entries(styles)) {
		if (typeof value !== 'string' && typeof value !== 'object') {
			console.error(`Style property "${key}" must be a string or an object.`);
			return false;
		}
	}

	return true;
}

export { setStyles };
