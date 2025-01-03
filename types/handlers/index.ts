/**
 * Handler class implementations for different configuration types
 * @module Handlers
 */

import { ConfigurationHandler } from './configuration';
import { AccessibilityConfig } from '../configs/accessibility';
import { ContentsConfig } from '../configs/contents';
import { EventsConfig } from '../configs/events';
import { GeneralConfig } from '../configs/general';
import { StyleConfig } from '../configs/style';
import { StateConfig } from '../configs/state';

/**
 * Handler for accessibility-related configurations
 * @class AccessibilityHandler
 * @implements {ConfigurationHandler<AccessibilityConfig>}
 */
export declare class AccessibilityHandler implements ConfigurationHandler<AccessibilityConfig> {
	constructor(element: HTMLElement);
	apply(config: AccessibilityConfig): void;
}

/**
 * Handler for contents-related configurations
 * @class ContentsHandler
 * @implements {ConfigurationHandler<ContentsConfig>}
 */
export declare class ContentsHandler implements ConfigurationHandler<ContentsConfig> {
	constructor(element: HTMLElement);
	apply(config: ContentsConfig): void;
}

/**
 * Handler for events-related configurations
 * @class EventsHandler
 * @implements {ConfigurationHandler<EventsConfig>}
 */
export declare class EventsHandler implements ConfigurationHandler<EventsConfig> {
	constructor(element: HTMLElement);
	apply(config: EventsConfig): void;
}

/**
 * Handler for state-related configurations
 * @class StateHandler
 * @implements {ConfigurationHandler<StateConfig>}
 */
export declare class StateHandler implements ConfigurationHandler<StateConfig> {
	constructor(element: HTMLElement);
	apply(config: StateConfig): void;
}

/**
 * Handler for generic configurations
 * @class GeneralHandler
 * @implements {ConfigurationHandler<GeneralConfig>}
 */
export declare class GeneralHandler implements ConfigurationHandler<GeneralConfig> {
	constructor(element: HTMLElement);
	apply(config: GeneralConfig): void;
}

/**
 * Handler for contents-related configurations
 * @class StyleHandler
 * @implements {ConfigurationHandler<StyleConfig>}
 */
export declare class StyleHandler implements ConfigurationHandler<StyleConfig> {
	constructor(element: HTMLElement);
	apply(config: StyleConfig): void;
}
