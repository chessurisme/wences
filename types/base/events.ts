/**
 * Event handling type definitions and interfaces
 * @module Events
 */

/**
 * Type representing all possible DOM event names
 * @typedef {keyof HTMLElementEventMap} EventName
 */
export type EventName = keyof HTMLElementEventMap;

/**
 * Type for creating event handler functions for specific events
 * @template T The event name
 * @typedef {Function} EventHandlerType
 */
export type EventHandlerType<T extends EventName> = (evt: HTMLElementEventMap[T]) => void;

/**
 * Type for generic event handlers
 * @typedef {Function} EventHandler
 */
export type EventHandler = (event: Event) => void;

/**
 * Interface mapping event names to their handler types
 * @interface EventHandlerMap
 */
export type EventHandlerMap = {
	[K in EventName]?: EventHandlerType<K>;
};
