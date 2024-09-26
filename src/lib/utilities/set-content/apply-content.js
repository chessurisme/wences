import { logError } from '../error-manager';
import { appendText } from './append-text';
import { appendIcon } from './append-icon';
import { appendElements } from './append-elements';

const applyContent = (element, content) => {
	Object.entries(content).forEach(([key, value]) => {
		switch (key) {
			case 'text':
				appendText(element, value);
				break;
			case 'icon':
				appendIcon(element, value);
				break;
			case 'elements':
				appendElements(element, value);
				break;
			case 'index':
				break;
			default:
				logError('SC-2', { key: key });
		}
	});
};

export { applyContent };
