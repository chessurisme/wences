function verifyConfig(config) {
	const { content } = config;

	if (!content) {
		console.error('Tab content is required.');
		return false;
	}

	const conditionList = [
		{
			condition: !content.elements || content.elements.length === 0,
			message: 'Tab cannot have no button elements.'
		},
		{
			condition: (() => {
				for (let element of content.elements) {
					if (!(element instanceof HTMLButtonElement)) {
						content.elements = [];
						return true;
					}
				}
				return false;
			})(),
			message: 'Tab elements must be all in button.'
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
