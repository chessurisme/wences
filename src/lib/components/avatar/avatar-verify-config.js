const verifyConfig = (config) => {
	if (!config || Object.entries(config).length === 0) {
		return console.error('Invalid input: Config is empty.');
	}

	const conditionList = [
		{
			condition: !config.attribute,
			message: 'Invalid input: No attribute found in the config.'
		},
		{
			condition: !config.attribute.src,
			message: 'Invalid input: The src attribute is not found in the config.'
		}
	];

	for (const item of conditionList) {
		if (item.condition) {
			console.error(item.message);
			return;
		}
	}
};

export { verifyConfig };
