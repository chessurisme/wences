import { JSDOM } from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import StyleHandler from '../../src/handlers/style-handler';

// Set up the DOM environment
const dom = new JSDOM('<!DOCTYPE html><div id="test-element"></div>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.SVGElement = window.SVGElement;

describe('StyleHandler', () => {
	let element, styleHandler;

	beforeEach(() => {
		element = document.getElementById('test-element');
		styleHandler = new StyleHandler(element);
	});

	describe('Happy Path', () => {
		it('should apply valid camelCase styles', () => {
			const config = {
				backgroundColor: 'red',
				color: 'white'
			};

			styleHandler.apply(config);

			expect(element.style.backgroundColor).toBe('red');
			expect(element.style.color).toBe('white');
		});

		it('should apply valid kebab-case styles', () => {
			const config = {
				'font-size': '16px',
				'margin-top': '10px'
			};

			styleHandler.apply(config);

			expect(element.style.fontSize).toBe('16px');
			expect(element.style.marginTop).toBe('10px');
		});
	});

	describe('Edge Cases', () => {
		it('should throw an error for invalid style properties', () => {
			expect(() =>
				styleHandler.apply({
					invalidProperty: 'value'
				})
			).toThrow('"invalidProperty" is not a valid style property');
		});

		it('should handle an empty configuration without errors', () => {
			expect(() => styleHandler.apply({})).not.toThrow();
		});

		it('should handle a mix of camelCase and kebab-case styles', () => {
			const config = {
				'backgroundColor': 'blue',
				'font-size': '20px'
			};

			styleHandler.apply(config);

			expect(element.style.backgroundColor).toBe('blue');
			expect(element.style.fontSize).toBe('20px');
		});
	});
});
