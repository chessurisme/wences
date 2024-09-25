import { validateParameters } from '../validate-parameters';
import { applyBehavior } from './apply-behavior';

const setBehavior = (element, behavior) => {
	validateParameters(element, behavior)
		? applyBehavior(element, behavior)
		: logError('SB-1');
};

export { setBehavior };
