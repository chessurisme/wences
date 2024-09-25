import { validateParameters } from '../validate-parameters';
import { applyState } from './apply-state';
import { logError } from '../error-manager';

function setState(element, state) {
	validateParameters(element, state)
		? applyState(element, state)
		: logError('SS-1');
}

export { setState };
