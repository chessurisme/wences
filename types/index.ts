/**
 * Main entry point for the Wences library
 * @module Wences
 */

import { HTMLTagName, ElementType } from './base/core';
import { WencesConfig } from './configs';

/**
 * Main class for creating and managing HTML elements
 * @class Wences
 * @template T The HTML tag name
 */
export declare class Wences<T extends HTMLTagName = HTMLTagName> {
	/**
	 * Creates a new Wences instance
	 * @param {T} tagName The HTML tag name
	 * @param {WencesConfig} [config] Configuration object
	 * @throws {WencesConfigError} If the configuration is invalid
	 */
	constructor(tagName: T, config?: WencesConfig);

	/**
	 * Gets the underlying DOM element
	 * @returns {ElementType<T>} The HTML element
	 */
	getElement(): ElementType<T>;

	/**
	 * Appends the element to a parent element
	 * @param {Element | string} parent Parent element or selector
	 * @returns {this} The Wences instance for chaining
	 * @throws {Error} If parent element is not found
	 */
	appendTo(parent: Element | string): this;
}

export default Wences;
