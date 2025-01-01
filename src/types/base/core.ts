/**
 * Core type definitions and interfaces for the Wences library
 * @module Core
 */

/**
 * Represents all possible HTML tag names from the DOM specification
 * @typedef {keyof HTMLElementTagNameMap} HTMLTagName
 */
export type HTMLTagName = keyof HTMLElementTagNameMap;

/**
 * Utility type that maps an HTML tag name to its corresponding element type
 * @template T The HTML tag name
 * @typedef {HTMLElementTagNameMap[T]} ElementType
 * @example
 * type DivElement = ElementType<'div'> // Returns HTMLDivElement
 * type SpanElement = ElementType<'span'> // Returns HTMLSpanElement
 */
export type ElementType<T extends HTMLTagName> = HTMLElementTagNameMap[T];

/**
 * Base interface for all configuration handlers in the Wences library
 * Provides a consistent way to apply configurations to HTML elements
 * @interface ConfigurationHandler
 * @template T The type of configuration this handler processes
 */
export interface ConfigurationHandler<T> {
	/**
	 * Applies the provided configuration to an HTML element
	 * @param {T} config The configuration to apply
	 */
	apply(config: T): void;
}

/**
 * Creates a deep partial type from a given type T
 * Makes all properties optional recursively
 * @template T The type to make partially optional
 * @typedef {Object} DeepPartial
 */
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Interface for merging and cloning configurations
 * @interface ConfigMerger
 * @template T The type of configuration to merge/clone
 */
export type ConfigMerger<T> = {
	/**
	 * Merges a partial configuration into a complete configuration
	 * @param {T} target The base configuration
	 * @param {DeepPartial<T>} source The partial configuration to merge
	 * @returns {T} The merged configuration
	 */
	merge(target: T, source: DeepPartial<T>): T;

	/**
	 * Creates a deep clone of a configuration
	 * @param {T} config The configuration to clone
	 * @returns {T} A deep copy of the configuration
	 */
	clone(config: T): T;
};
