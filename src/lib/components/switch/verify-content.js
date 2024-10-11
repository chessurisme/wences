function verifyContent(content) {
	const { on, off } = content;

	if (!on || !off) {
		console.error('Invalid content: "on" and "off" cannot be empty.');
		return false;
	}

	if (typeof on !== 'function') {
		console.error(`Invalid content: "on" must be a function.`);
		return false;
	}

	if (typeof off !== 'function') {
		console.error(`Invalid content: "off" must be a function.`);
		return false;
	}

	return true;
}

export { verifyContent };
