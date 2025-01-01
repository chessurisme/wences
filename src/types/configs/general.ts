/**
 * Interface for general HTML attributes
 * @interface GeneralConfig
 */
export interface GeneralConfig {
	class?: string;
	id?: string;
	name?: string;
	title?: string;
	tabIndex?: number;
	lang?: string;
	dir?: 'ltr' | 'rtl' | 'auto';
	slot?: string;
	spellcheck?: boolean;
	translate?: 'yes' | 'no';
	draggable?: boolean;
	hidden?: boolean;
	[key: string]: string | number | boolean | undefined;
}
