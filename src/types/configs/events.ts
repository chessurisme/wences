import { EventHandlerMap, EventHandlerType, EventName } from '../base/events';

/**
 * Configuration for DOM events
 * @remarks
 * Allows both prefixed and unprefixed event names
 */
export type EventsConfig = EventHandlerMap & {
	[key in `on${Capitalize<EventName>}`]?: EventHandlerType<EventName>;
};
