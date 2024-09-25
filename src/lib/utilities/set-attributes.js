import { logError } from './log-error';

const isValidParameters = (element, attributes) => {
	return (
		element instanceof HTMLElement &&
		typeof attributes === 'object' &&
		attributes !== null &&
		Object.entries(attributes).length !== 0
	);
};

const applyAttributes = (element, attributes) => {
	Object.entries(attributes).forEach(([key, value]) => {
		typeof value === 'string'
			? element.setAttribute(key, value)
			: logError('SA-2', { value: typeof value });
	});
};

const setAttributes = (element, attributes) => {
	isValidParameters(element, attributes)
		? applyAttributes(element, attributes)
		: logError('SA-1');
};

export { setAttributes };
