import { BooleanAttribute } from '../base/boolean-attribute';

/**
 * Configuration for boolean state attributes
 * @interface StateConfig
 *
 */
export type StateConfig = {
	[key in BooleanAttribute]?: boolean;
};
