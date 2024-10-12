function verifyElements(elements, validTypes) {
	const isValidType = (element) => {
		const type = typeof element;

		if (validTypes.includes(type)) {
			return true;
		}

		if (element instanceof HTMLElement && validTypes.includes('HTMLElement')) {
			return true;
		}

		if (element instanceof SVGElement && validTypes.includes('SVGElement')) {
			return true;
		}

		if (Array.isArray(element) && validTypes.includes('Array')) {
			return true;
		}

		const formattedValidTypes = validTypes
			.map((validType) => `"${validType}"`)
			.join(', ');
		console.error(
			`Invalid content: "elements" has invalid types. Make sure each element is one of these valid types: ${formattedValidTypes}.`
		);
		return false;
	};

	return elements.every(isValidType);
}

export { verifyElements };
