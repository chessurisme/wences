/**
 * Verifies if the provided href is a valid URL.
 *
 * @param {string} href - The href to be verified (optional).
 * @returns {boolean} Returns true if the href is a valid URL or undefined, otherwise false.
 */
function verifyHref(href) {
	if (href === undefined) {
		return true;
	}

	if (typeof href !== 'string') {
		console.error('Invalid content: "href" must be a string.');
		return false;
	}

	if (href === '') {
		return true;
	}

	return isValidHref(href);
}

/**
 * Helper function to check if a string is a valid href.
 * @param {string} href - The href string to check.
 * @returns {boolean} - Returns true if the href is valid (absolute URL, relative URL, or other protocols), false otherwise.
 */
function isValidHref(href) {
	/**
	 * Helper function to check if a string is a valid href using regular expressions.
	 * @param {string} href - The href string to check.
	 * @returns {boolean} - Returns true if the href is valid (absolute URL, relative URL, or other protocols), false otherwise.
	 */
	const protocolPattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
	const absoluteUrlPattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\/[^\s/$.?#].[^\s]*$/i;
	const relativeUrlPattern = /^[\.\/]/;
	const fragmentPattern = /^#/;
	const javascriptPattern = /^javascript:/i;

	return (
		absoluteUrlPattern.test(href) ||
		relativeUrlPattern.test(href) ||
		fragmentPattern.test(href) ||
		protocolPattern.test(href) ||
		javascriptPattern.test(href)
	);
}

export { verifyHref };
