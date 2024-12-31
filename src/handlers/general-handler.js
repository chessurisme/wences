class GeneralHandler {
	#element;

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		Object.entries(config).forEach(([key, value]) => {
			this.#element.setAttribute(key, value);
		});
	}
}

export default GeneralHandler;
