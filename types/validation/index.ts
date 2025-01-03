import { WencesConfig } from '../configs';
/**
 * Validation-related types and error handling
 * @module Validation
 */

/**
 * Custom error class for configuration validation
 * @class WencesConfigError
 * @extends Error
 */
export class WencesConfigError extends Error {
	/**
	 * Creates a new WencesConfigError
	 * @param {string} message Error message
	 * @param {string} code Error code
	 * @param {unknown} [context] Additional context
	 */
	constructor(
		message: string,
		public code: string,
		public context?: unknown
	) {
		super(message);
		this.name = 'WencesConfigError';
	}
}

/**
 * Type guard for WencesConfigError
 * @param {Error} error The error to check
 * @returns {error is WencesConfigError} True if error is a WencesConfigError
 */
export function isWencesConfigError(error: Error): error is WencesConfigError {
	return error instanceof WencesConfigError;
}

/**
 * Type guard for ValidationResult
 * @param {unknown} value The value to check
 * @returns {value is ValidationResult} True if value is a ValidationResult
 */

export interface ValidationResult {
	valid: boolean;
	errors: WencesConfigError[];
	warnings: string[];
}

/**
 * Interface for validating Wences configuration objects
 * @interface ConfigValidator
 */
export interface ConfigValidator {
	validate(config: WencesConfig): ValidationResult;
	validateProperty(path: string[], value: unknown): ValidationResult;
}
