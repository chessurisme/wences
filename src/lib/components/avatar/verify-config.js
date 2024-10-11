/**
 * Verify config object properties.
 * @param {object} config - The config object to verify.
 * @returns {boolean} - Returns true if all properties meet the criteria, false otherwise.
 */
function verifyConfig(config) {
	const { src } = config.attribute;

	if (!src) {
		console.error('Invalid content: The "src" must not be empty.');
		return false;
	}

	return true;
}

export { verifyConfig };
