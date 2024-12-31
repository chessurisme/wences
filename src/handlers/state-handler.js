class StateHandler {
	#element;
	static #VALID_BOOLEAN_ATTRIBUTES = new Set([
		'allowfullscreen',
		'async',
		'autofocus',
		'autoplay',
		'checked',
		'controls',
		'default',
		'defer',
		'disabled',
		'formnovalidate',
		'hidden',
		'ismap',
		'loop',
		'multiple',
		'muted',
		'nomodule',
		'novalidate',
		'open',
		'playsinline',
		'readonly',
		'required',
		'reversed',
		'selected'
	]);

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		Object.entries(config).forEach(([attr, value]) => {
			if (StateHandler.#VALID_BOOLEAN_ATTRIBUTES.has(attr.toLowerCase())) {
				if (value) {
					this.#element.setAttribute(attr, '');
				} else {
					this.#element.removeAttribute(attr);
				}
			}
		});
	}
}

export default StateHandler;
