/**
 * Verifies if the input text is a valid string.
 *
 * @param {string} text - The text to be verified.
 * @returns {boolean} Returns true if the text is a valid string, otherwise false.
 */
function verifyText(text) {
	if (text !== undefined && typeof text !== 'string') {
		console.error('Invalid content: "text" must be a string.');
		return false;
	}

	return true;
}

export { verifyText };
