import { validateParameters } from '../validate-parameters';
import { applyBehavior } from './apply-behavior';
import { logError } from '../error-manager';

const setBehavior = (element, behavior) => {
	validateParameters(element, behavior)
		? applyBehavior(element, behavior)
		: logError('SB-1');
};

export { setBehavior };
