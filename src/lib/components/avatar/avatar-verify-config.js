const verifyConfig = (config) => {
	const conditionList = [
		{
			condition: !config,
			message: 'Invalid input: Config is empty.'
		},
		{
			condition: !config.attribute,
			message: 'Invalid input: No attribute found in the config.'
		},
		{
			condition: !config.attribute.src,
			message: 'Invalid input: The src attribute is not found in the config.'
		}
	];

	conditionList.forEach((item) => {
		if (item.condition) {
			return console.error(item.message);
		}
	});
};

export { verifyConfig };
