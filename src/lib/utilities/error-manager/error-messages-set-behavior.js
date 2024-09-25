const setBehaviorErrorMessages = {
	'SB-1':
		'Invalid parameters: Ensure the first parameter is a DOM element and the second is a non-null object.',
	'SB-2': (props) =>
		`Invalid value: Behavior "${props.key}" must be a function.`,
	'SB-3': (props) =>
		`Invalid key: There is no such event type ${props.eventType} for ${props.tagName} element.`
};

export { setBehaviorErrorMessages };
