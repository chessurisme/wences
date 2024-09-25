import { logError } from '../error-manager';

const applyAttributes = (element, attributes) => {
	Object.entries(attributes).forEach(([key, value]) => {
		typeof value === 'string'
			? element.setAttribute(key, value)
			: logError('SA-2', { value: typeof value });
	});
};

export { applyAttributes };
