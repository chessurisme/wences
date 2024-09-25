import { validateParameters } from '../validate-parameters';
import { applyAttributes } from './apply-attributes';
import { logError } from '../error-manager';

const setAttributes = (element, attributes) => {
	validateParameters(element, attributes)
		? applyAttributes(element, attributes)
		: logError('SA-1');
};

export { setAttributes };
