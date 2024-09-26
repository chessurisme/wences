const setContentErrorMessages = {
	'SC-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SC-2': (props) => `Invalid key: Key "${props.key}" is not valid.`,
	'SC-3': 'Invalid value: The text must be a string.',
	'SC-4':
		'Invalid value: The icon must be a string (the name of the icon), DOM element, or an SVG element.',
	'SC-5':
		'Invalid value: The elements must be an array of DOM element or of an SVG element.',
	'SC-6':
		'Invalid element: One of the elements is not a DOM element or of an SVG element.'
};

export { setContentErrorMessages };
