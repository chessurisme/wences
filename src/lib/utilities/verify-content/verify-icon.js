/**
 * Verifies if the provided icon is valid.
 *
 * @param {SVGElement|HTMLElement|string} icon - The icon to be verified.
 * @returns {boolean} Returns true if the icon is valid, otherwise false.
 */
function verifyIcon(icon) {
	if (
		icon === '' ||
		typeof icon === 'number' ||
		typeof icon === 'boolean' ||
		Array.isArray(icon) ||
		icon === null ||
		(typeof icon === 'object' &&
			!(icon instanceof SVGElement) &&
			!(icon instanceof HTMLElement))
	) {
		console.error(
			'Invalid content: "icon" must be an SVGElement, HTMLElement, or string.'
		);
		return false;
	}

	return (
		icon instanceof SVGElement ||
		icon instanceof HTMLElement ||
		typeof icon === 'string' ||
		icon === undefined
	);
}

export { verifyIcon };
