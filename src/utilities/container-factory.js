import { setAttributes } from './set-attributes';
import { setEvents } from './set-events';

const containerFactory = (tagName, attributes, props, events) => {
	const element = document.createElement(`${tagName}`);

	if (attributes) {
		setAttributes(element, attributes);
	}

	if (props) {
		element.textContent = props.text;
	}

	if (events) {
		setEvents(element, events);
	}

	return element;
};

export { containerFactory };
