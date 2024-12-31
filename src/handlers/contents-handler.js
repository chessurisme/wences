class ContentsHandler {
	#element;

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		const { children = [] } = config;

		if (!Array.isArray(children)) {
			throw new Error('children must be an array');
		}

		children.forEach((child) => {
			if (!(child instanceof HTMLElement)) {
				throw new Error('Each child must be an HTML element');
			}
			this.#element.appendChild(child);
		});
	}
}

export default ContentsHandler;
