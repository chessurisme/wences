import { WencesConfig } from '../configs';
/**
 * Element lifecycle management interfaces
 * @module Lifecycle
 */

/**
 * Interface for managing element lifecycle events
 * @interface ElementLifecycle
 */
export interface ElementLifecycle {
	/**
	 * Called when the element is mounted to the DOM
	 */
	onMount?: () => void;

	/**
	 * Called when the element is removed from the DOM
	 */
	onUnmount?: () => void;

	/**
	 * Called when the element's configuration is updated
	 * @param {WencesConfig} prevConfig Previous configuration
	 * @param {WencesConfig} nextConfig New configuration
	 */
	onUpdate?: (prevConfig: WencesConfig, nextConfig: WencesConfig) => void;
}
