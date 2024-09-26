import { setAttributes } from '../../utilities/set-attributes';
import { setBehavior } from '../../utilities/set-behavior';
import { setContent } from '../../utilities/set-content';
import { setState } from '../../utilities/set-state';
import { setStyles } from '../../utilities/set-style';

/**
 * @typedef {Object} ComponentConfig
 * @property {Object} [attribute] - An object containing HTML attributes to set on the component.
 * @property {string} [attribute.value] - The value for the HTML attribute (must be a string).
 *
 * @property {Object} [behavior] - An object containing event handlers to set on the component.
 * @property {Function} [behavior.eventType] - The function to call when the specified event occurs (e.g., `click`, `mouseover`).
 *
 * @property {Object} [content] - An object containing content to apply to the component.
 * @property {string|Array<HTMLElement|SVGElement>} [content.value] - The content to set, which can be:
 *    - A string (e.g., text content).
 *    - An array of elements (for multiple DOM elements or SVG elements).
 *    - An icon or an index (for specific content types).
 *
 * @property {Object} [state] - An object containing boolean attributes to apply to the component.
 * @property {boolean} [state.value] - The value for the boolean attribute (true or false).
 *
 * @property {Object} [style] - An object containing styles to apply to the component.
 * @property {string|Object} [style.value] - The value for the CSS property.
 */

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
