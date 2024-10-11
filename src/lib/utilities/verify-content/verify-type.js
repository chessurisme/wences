/**
 * Verifies if a given type is valid based on a list of valid types.
 *
 * @param {string} type - The type to be verified.
 * @param {Array} validTypes - An array of valid types to compare against.
 * @returns {boolean} Returns true if the type is valid, otherwise false.
 */
function verifyType(type, validTypes) {
	if (!Array.isArray(validTypes)) {
		console.error(
			`Invalid parameter: "validTypes" is not an array but a type of ${typeof validTypes} `
		);
		return false;
	}

	if (!validTypes.includes(type) || typeof type !== 'string') {
		const formattedValidTypes = validTypes
			.map((validType) => `"${validType}"`)
			.join(', ');
		console.error(
			`Invalid content: "type" must be one of the valid types ${formattedValidTypes}.`
		);

		return false;
	}

	return true;
}

export { verifyType };
