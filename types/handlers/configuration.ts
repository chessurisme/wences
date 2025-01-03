/**
 * Base handler interface for all configuration types
 */
export interface ConfigurationHandler<T> {
	apply(config: T): void;
}
