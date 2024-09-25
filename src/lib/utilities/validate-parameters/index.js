const validateParameters = (element, object) => {
	return (
		element instanceof HTMLElement &&
		typeof object === 'object' &&
		object !== null &&
		Object.entries(object).length !== 0
	);
};

export { validateParameters };
