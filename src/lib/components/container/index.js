import { setAccessibility } from '../../utilities/set-accessibility';
import { setAttributes } from '../../utilities/set-attributes';
import { setBehavior } from '../../utilities/set-behavior';
import { setState } from '../../utilities/set-state';
import { setStyles } from '../../utilities/set-style';

/**
 * Creates a container HTML element with specified configuration options,
 * allowing for the application of accessibility settings, attributes, behaviors, styles, and state.
 *
 * @param {Object} config - The configuration object for the container.
 * @param {Object} [config.accessibility] - An object containing accessibility attributes (e.g., role, ARIA attributes).
 * @param {Object} [config.attribute] - An object containing attributes to set on the container element.
 * @param {Object} [config.behavior] - An object containing event handlers to set on the container element.
 * @param {Object} [config.style] - An object containing styles to apply to the container element.
 * @param {Object} [config.state] - An object containing state attributes (e.g., `disabled`, `readonly`) to set on the container element.
 * @param {string} [tagName='div'] - The tag name of the container to create (default is 'div').
 *
 * @returns {HTMLElement} The created HTML element configured with the provided options.
 */
const Container = (config, tagName = 'div') => {
	const { accessibility, attribute, behavior, style, state } = config;

	const component = document.createElement(tagName);

	if (accessibility) {
		setAccessibility(component, accessibility);
	}

	if (attribute) {
		setAttributes(component, attribute);
	}

	if (behavior) {
		setBehavior(component, behavior);
	}

	if (style) {
		setStyles(component, style);
	}

	if (state) {
		setState(component, state);
	}

	return component;
};

export { Container };
