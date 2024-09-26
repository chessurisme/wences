import { validateParameters } from '../validate-parameters';
import { applyBehavior } from './apply-behavior';
import { logError } from '../error-manager';

/**
 * Sets event listeners on a specified HTML element after validating the parameters. If the parameters are invalid, an error is logged.
 *
 * @param {HTMLElement} element - The HTML element to which the event listeners will be applied. Must be a valid HTMLElement.
 * @param {Object} behavior - An object containing key-value pairs where each key represents an event type (e.g., 'click', 'onmouseover')
 *                            and each value is the corresponding event handler function.
 * @param {function} behavior.eventHandler - The event handler function to be associated with the event type. Non-function values will trigger an error log.
 *
 * @returns {void}
 */
const setBehavior = (element, behavior) => {
	validateParameters(element, behavior)
		? applyBehavior(element, behavior)
		: logError('SB-1');
};

export { setBehavior };
