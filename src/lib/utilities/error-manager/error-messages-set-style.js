const setStyleErrorMessages = {
	'SSt-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SSt-2': (props) =>
		`Invalid value: Style property "${props.key}" must be a string or an object.`,
	'SSt-3': (props) =>
		`Invalid value: Style property "${props.key} in ${props.parentKey} must be a string."`
};

export { setStyleErrorMessages };
