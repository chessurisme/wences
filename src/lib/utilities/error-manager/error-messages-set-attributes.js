const setAttributesErrorMessages = {
	'SA-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SA-2': (props) =>
		`Invalid value: Ensure the value in attributes is a string, but it is a/an ${props.value}.`
};

export { setAttributesErrorMessages };
