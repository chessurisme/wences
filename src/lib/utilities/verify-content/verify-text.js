/**
 * Verifies if the input text is a valid string.
 *
 * @param {string} text - The text to be verified.
 * @param {string} [name = 'text'] - The name of string to be verified.
 * @returns {boolean} Returns true if the text is a valid string, otherwise false.
 */
function verifyText(text, name = 'text') {
	if (text !== undefined && typeof text !== 'string') {
		console.error(`Invalid content: "${name}" must be a string.`);
		return false;
	}

	return true;
}

export { verifyText };
