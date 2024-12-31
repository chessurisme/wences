class StyleHandler {
	#element;

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		Object.entries(config).forEach(([property, value]) => {
			const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
			this.#element.style[cssProperty] = value;
		});
	}
}

export default StyleHandler;
