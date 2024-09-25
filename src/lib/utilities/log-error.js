const logError = (code, props = {}) => {
	const errorList = [
		// General
		{
			code: 'G-1',
			message: 'Parameter is empty.'
		},

		// Set Attribute (SA)
		{
			code: 'SA-1',
			message:
				'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.'
		},
		{
			code: 'SA-2',
			message: `A value in attributes is not string, but ${props.value}.`
		}
	];

	errorList.forEach(({ code: codeInList, message }) => {
		if (codeInList === code) {
			console.error(message);
		}
	});
};

export { logError };
