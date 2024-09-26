import { logError } from '../error-manager';

const appendElements = (element, elements) => {
	if (!Array.isArray(elements)) return logError('SC-5');

	elements.forEach((valueElement) => {
		if (
			valueElement instanceof HTMLElement ||
			valueElement instanceof SVGElement
		) {
			element.appendChild(valueElement);
			return;
		}

		logError('SC-6');
	});
};

export { appendElements };
