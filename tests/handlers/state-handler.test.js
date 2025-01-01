import { JSDOM } from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import StateHandler from '../../src/handlers/state-handler';

// Set up the DOM environment
const dom = new JSDOM('<!DOCTYPE html><button id="test-element"></button>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.SVGElement = window.SVGElement;

describe('StateHandler', () => {
	let element, stateHandler;

	beforeEach(() => {
		element = document.getElementById('test-element');
		stateHandler = new StateHandler(element);
	});

	describe('Happy Path', () => {
		it('should apply valid boolean attributes correctly', () => {
			const config = {
				disabled: true,
				hidden: true,
				autofocus: false
			};

			stateHandler.apply(config);

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(element.hasAttribute('hidden')).toBe(true);
			expect(element.hasAttribute('autofocus')).toBe(false);
		});
	});

	describe('Edge Cases', () => {
		it('should throw an error for invalid boolean attributes', () => {
			expect(() =>
				stateHandler.apply({
					invalidAttr: true
				})
			).toThrow('"invalidAttr" is not a valid boolean attribute');
		});

		it('should handle an empty configuration without errors', () => {
			expect(() => stateHandler.apply({})).not.toThrow();
		});

		it('should handle case-insensitive attribute names', () => {
			const config = {
				DISABLED: true,
				Hidden: false
			};

			stateHandler.apply(config);

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(element.hasAttribute('hidden')).toBe(false);
		});
	});

	describe('Others', () => {
		it('should remove attributes when set to false', () => {
			const config = {
				disabled: true,
				hidden: true,
				autofocus: true
			};

			stateHandler.apply(config);

			// Modify the attributes
			stateHandler.apply({
				disabled: false,
				hidden: false
			});

			expect(element.hasAttribute('disabled')).toBe(false);
			expect(element.hasAttribute('hidden')).toBe(false);
			expect(element.hasAttribute('autofocus')).toBe(true);
		});
	});
});
