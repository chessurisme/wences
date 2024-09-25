import { errorMessages } from './error-messages';

/**
 * Logs an error message based on the provided error code. If the error message is a function, it is executed with the provided props.
 * Otherwise, it logs the error message directly. If the error code is not found, it logs an unknown error message.
 *
 * @param {string} code - The error code used to retrieve the error message.
 * @param {Object} [props={}] - Optional properties to pass to the error message function if applicable.
 *
 * @returns {void}
 */
const logError = (code, props = {}) => {
	const errorMessage = errorMessages[code];

	if (typeof errorMessage === 'function') {
		console.error(errorMessage(props));
	} else if (errorMessage) {
		console.error(errorMessage);
	} else {
		console.error(`Unknown error code: ${code}`);
	}
};

export { logError };
