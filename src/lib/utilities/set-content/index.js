import { validateParameters } from '../validate-parameters';
import { applyContent } from './apply-content';
import { logError } from '../error-manager';

const setContent = (element, content) => {
	validateParameters(element, content)
		? applyContent(element, content)
		: logError('SC-1');
};

export { setContent };
