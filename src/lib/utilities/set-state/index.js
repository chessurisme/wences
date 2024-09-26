import { validateParameters } from '../validate-parameters';
import { applyState } from './apply-state';
import { logError } from '../error-manager';

/**
 * Sets the state of a specified HTML element after validating the parameters.
 * If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element whose state will be set. Must be a valid HTMLElement.
 * @param {Object} states - An object containing key-value pairs representing the state to set on the element.
 * @param {boolean} states.state - A boolean value indicating whether to set or remove the corresponding attribute.
 *
 * @returns {void}
 */
function setState(element, state) {
	validateParameters(element, state)
		? applyState(element, state)
		: logError('SS-1');
}

export { setState };
