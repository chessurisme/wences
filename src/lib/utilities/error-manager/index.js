import { errorMessages } from './error-messages';

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
