import { AriaAttributes, AriaRole } from '../base/aria';

/**
 * Configuration for accessibility attributes
 * @remarks
 * Combines ARIA roles and attributes without requiring 'aria-' prefix
 */
export interface AccessibilityConfig extends Partial<Omit<AriaAttributes, 'role'>> {
	role?: AriaRole;
	[key: string]: string | number | boolean | undefined;
}
