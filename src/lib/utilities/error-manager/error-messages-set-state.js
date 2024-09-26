const setStateErrorMessages = {
	'SS-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SS-2': (props) =>
		`Invalid value: The value of "${props.key}" must be a boolean.`
};

export { setStateErrorMessages };
