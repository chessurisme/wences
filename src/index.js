import AccessibilityHandler from './handlers/accessibility-handler';
import ContentsHandler from './handlers/contents-handler';
import EventsHandler from './handlers/events-handler';
import StateHandler from './handlers/state-handler';
import GeneralHandler from './handlers/general-handler';
import StyleHandler from './handlers/style-handler';

class Wences {
	#element;
	#handlers;

	constructor(tagName = 'div', config = {}) {
		this.#validateTag(tagName);
		this.#element = document.createElement(tagName);

		this.#handlers = {
			accessibility: new AccessibilityHandler(this.#element),
			contents: new ContentsHandler(this.#element),
			events: new EventsHandler(this.#element),
			state: new StateHandler(this.#element),
			general: new GeneralHandler(this.#element),
			style: new StyleHandler(this.#element)
		};

		this.#applyConfig(config);
	}

	#validateTag(tagName) {
		try {
			document.createElement(tagName);
			return true;
		} catch (error) {
			throw new Error(`Invalid HTML tag name: ${tagName} - ${error}`);
		}
	}

	#applyConfig(config) {
		Object.entries(this.#handlers).forEach(([key, handler]) => {
			if (config[key]) {
				handler.apply(config[key]);
			}
		});
	}

	getElement() {
		return this.#element;
	}
}

export default Wences;
