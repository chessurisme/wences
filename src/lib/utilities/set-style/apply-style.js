import { logError } from '../error-manager';

const applyStyles = (element, styles) => {
	Object.entries(styles).forEach(([key, value]) => {
		if (typeof value === 'string') {
			element.style[key] = value;
			return;
		}

		if (typeof value === 'object' || Object.entries(value).length !== 0) {
			Object.entries(value).forEach(([nestedKey, nestedValue]) => {
				typeof nestedValue === 'string'
					? element.style.setProperty(`${key}-${nestedKey}`, nestedValue)
					: logError('SSt-3', { key: nestedKey, parentKey: key });
			});
			return;
		}

		logError('SSt-2', { key: key });
	});
};

export { applyStyles };
