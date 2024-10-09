const setAccessibilityErrorMessages = {
	'SAC-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SAC-2': (props) =>
		`Invalid value: Ensure the value in accessibility attribute is a string, but it is a/an ${props.value}.`
};

export { setAccessibilityErrorMessages };
