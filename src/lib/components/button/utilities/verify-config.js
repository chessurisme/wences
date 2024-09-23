function verifyConfig(config) {
	const { content } = config;

	if (!content) {
		console.error('Button content is required.');
		return false;
	}

	const conditionList = [
		{
			condition: content.elements,
			message: 'Buttons cannot have elements.'
		},
		{
			condition: !content.text && !content.icon,
			message: 'Buttons cannot be empty.'
		}
	];

	conditionList.forEach(({ condition, message }) => {
		if (condition) {
			console.error(message);
			return false;
		}
	});

	return true;
}

export { verifyConfig };
