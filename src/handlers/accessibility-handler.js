class AccessibilityHandler {
	#element;

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		Object.entries(config).forEach(([key, value]) => {
			if (key === 'role') {
				this.#element.setAttribute('role', value);
				return;
			}

			const attributeName = `aria-${key.toLowerCase()}`;
			this.#element.setAttribute(attributeName, value);
		});
	}
}

export default AccessibilityHandler;
