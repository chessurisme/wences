/**
 * Validates the parameters to ensure the element is a valid HTML element and the object is a valid non-empty object.
 *
 * @param {HTMLElement} element - The HTML element to validate. Must be a valid HTMLElement with a nodeType of 1.
 * @param {Object} object - The configuration object to validate. Must be a non-null object with at least one key.
 *
 * @returns {boolean} - Returns `true` if both the element and object are valid, otherwise `false`.
 */
const validateParameters = (element, object) => {
	if (
		!element ||
		element === undefined ||
		element === null ||
		typeof element !== 'object' ||
		element.nodeType !== 1
	) {
		return false;
	}

	if (
		object === undefined ||
		object === null ||
		!object ||
		typeof object !== 'object' ||
		Object.keys(object).length === 0
	) {
		return false;
	}

	return true;
};

export { validateParameters };
