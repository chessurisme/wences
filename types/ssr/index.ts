/**
 * Server-side rendering configuration interfaces
 * @module SSR
 */

/**
 * Configuration interface for server-side rendering options
 * @interface SSRConfig
 */
export interface SSRConfig {
	hydratable?: boolean;
	streamable?: boolean;
	deferHydration?: boolean;
	clientOnly?: boolean;
}

/**
 * Configuration interface for performance monitoring
 * @interface PerformanceConfig
 */
export interface PerformanceConfig {
	measureRender?: boolean;
	debugMode?: boolean;
	logLevel?: 'error' | 'warn' | 'info' | 'debug';
	metrics?: {
		captureTimings?: boolean;
		captureMemory?: boolean;
		customMetrics?: Record<string, () => number>;
	};
}
