import { setAttributes } from '../../utilities/set-attributes';
import { setBehavior } from '../../utilities/set-behavior';
import { setContent } from '../../utilities/set-content';
import { setState } from '../../utilities/set-state';
import { setStyles } from '../../utilities/set-style';
import './component-config.js';

/**
 * Creates a base HTML component with specified configuration options,
 * allowing for the application of attributes, behaviors, styles, content, and state.
 *
 * @param {ComponentConfig} config - The configuration object for the component.
 * @param {string} [tagName='div'] - The tag name of the component to create (default is 'div').
 *
 * @returns {HTMLElement} The created HTML element configured with the provided options.
 */
const BaseComponent = (config, tagName = 'div') => {
	const { attribute, behavior, style, content, state } = config;

	const component = document.createElement(tagName);

	if (attribute) {
		setAttributes(component, attribute);
	}

	if (behavior) {
		setBehavior(component, behavior);
	}

	if (style) {
		setStyles(component, style);
	}

	if (content) {
		setContent(component, content);
	}

	if (state) {
		setState(component, state);
	}

	return component;
};

export { BaseComponent };
