const validateParameters = (element, object) => {
	if (
		!element ||
		element === undefined ||
		element === null ||
		typeof element !== 'object' ||
		element.nodeType !== 1 ||
		element instanceof HTMLElement
	) {
		return false;
	}

	if (
		object === undefined ||
		object === null ||
		!object ||
		typeof object !== 'object' ||
		Object.keys(object).length === 0
	) {
		return false;
	}

	return true;
};

export { validateParameters };
