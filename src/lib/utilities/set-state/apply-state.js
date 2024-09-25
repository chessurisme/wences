import { logError } from '../error-manager';

const applyState = (element, state) => {
	Object.entries(state).forEach(([key, value]) => {
		if (typeof value !== 'boolean') return logError('SS-2', { key: key });

		value ? element.setAttribute(key, '') : element.removeAttribute(key);
	});
};

export { applyState };
