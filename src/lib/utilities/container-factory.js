import { setAttributes } from './set-attributes';
import { setEvents } from './set-events';

const containerFactory = (tagName, attributes, props, events) => {
	const element = document.createElement(`${tagName}`);

	if (attributes) {
		setAttributes(element, attributes);
	}

	if (props) {
		if (props.text) {
			element.textContent = props.text;
		}

		if (props.value) {
			element.value = props.value;
		}

		if (props.hidden === true) {
			element.hidden = true;
		} else {
			element.hidden = false;
		}

		if (props.readOnly === true) {
			element.readOnly = true;
		} else {
			element.readOnly = false;
		}
	}

	if (events) {
		setEvents(element, events);
	}

	return element;
};

export { containerFactory };
