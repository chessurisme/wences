declare module 'wences' {
	interface AccessibilityOptions {
		[key: string]: string;
	}

	interface ContentsOptions {
		children: HTMLElement[];
	}

	interface EventsOptions {
		[key: string]: (event: Event) => void;
	}

	interface StateOptions {
		[key: string]: boolean;
	}

	interface GeneralOptions {
		[key: string]: string;
	}

	interface StyleOptions {
		[key: string]: string;
	}

	interface WencesOptions {
		accessibility?: AccessibilityOptions;
		contents?: ContentsOptions;
		events?: EventsOptions;
		state?: StateOptions;
		general?: GeneralOptions;
		style?: StyleOptions;
	}

	export default class Wences {
		constructor(tagName?: string, options?: WencesOptions);
		getElement(): HTMLElement;
	}
}
