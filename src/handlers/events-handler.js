class EventsHandler {
	#element;

	constructor(element) {
		this.#element = element;
	}

	apply(config) {
		Object.entries(config).forEach(([eventName, handler]) => {
			const normalizedEventName = eventName.toLowerCase().replace(/^on/, '');
			this.#element.addEventListener(normalizedEventName, handler);
		});
	}
}

export default EventsHandler;
