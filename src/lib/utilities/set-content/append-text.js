import { logError } from '../error-manager';

const appendText = (element, text) => {
	if (typeof text !== 'string') return logError('SC-3');

	const textHolder = document.createElement('p');
	textHolder.textContent = text;
	element.appendChild(textHolder);
};

export { appendText };
