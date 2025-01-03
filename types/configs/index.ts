import { AccessibilityConfig } from './accessibility';
import { ContentsConfig } from './contents';
import { EventsConfig } from './events';
import { GeneralConfig } from './general';
import { StyleConfig } from './style';
import { BooleanAttribute } from '../base/boolean-attribute';

/**
 * Configuration interface for creating and managing HTML elements through the Wences library.
 * This interface provides a structured way to define all aspects of an HTML element,
 * including accessibility features, general attributes, styling, event handling,
 * boolean states, and child elements.
 *
 * @interface WencesConfig
 */
export interface WencesConfig {
	/**
	 * Configuration for accessibility features, including ARIA attributes and roles.
	 * Helps ensure your elements are accessible to assistive technologies and comply
	 * with WCAG guidelines.
	 *
	 * @example
	 * accessibility: {
	 *   role: 'button',
	 *   'label': 'Submit form',  // aria-label
	 *   'disabled': false        // aria-disabled
	 * }
	 *
	 * @see {@link AccessibilityConfig}
	 */
	accessibility?: AccessibilityConfig;

	/**
	 * General HTML attributes like `id`, `class`, `name`, and other standard element properties.
	 * Controls the basic behavior and identification of the element.
	 *
	 * @example
	 * general: {
	 *   id: 'username-input',
	 *   name: 'username',
	 *   class: 'form-input'
	 * }
	 *
	 * @see {@link GeneralConfig}
	 */
	general?: GeneralConfig;

	/**
	 * CSS styling configuration using camelCase property names.
	 * Provides complete control over the element's appearance through standard CSS properties
	 * and values.
	 *
	 * @example
	 * style: {
	 *   backgroundColor: '#007bff',
	 *   padding: '10px 20px',
	 *   borderRadius: '4px',
	 *   color: 'white'
	 * }
	 *
	 * @see {@link StyleConfig}
	 */
	style?: StyleConfig;

	/**
	 * Event handler configuration for DOM events.
	 * Allows attaching event listeners to the element for user interactions and other DOM events.
	 *
	 * @example
	 * events: {
	 *   click: (event) => console.log('Button clicked', event),
	 *   input: (event) => handleInput(event.target.value)
	 * }
	 *
	 * @see {@link EventsConfig}
	 */
	events?: EventsConfig;

	/**
	 * Boolean attribute states like `disabled`, `hidden`, or `checked`.
	 * These control the element's state through HTML boolean attributes.
	 *
	 * @example
	 * state: {
	 *   disabled: true,
	 *   hidden: false
	 * }
	 */
	state?: { [key in BooleanAttribute]?: boolean };

	/**
	 * Configuration for child elements.
	 * Defines the element's contents through an array of HTML elements or text nodes.
	 *
	 * @example
	 * // Adding child elements to a container
	 * contents: {
	 *   children: [
	 *     document.createElement('div'),
	 *     document.createTextNode('Hello, world!')
	 *   ]
	 * }
	 *
	 * @see {@link ContentsConfig}
	 */
	contents?: ContentsConfig;
}
