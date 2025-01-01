import { JSDOM } from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import AccessibilityHandler from '../../src/handlers/accessibility-handler';

const dom = new JSDOM('<!DOCTYPE html><div id="testElement"></div>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;

describe('AccessibilityHandler', () => {
	let element, accessibilityHandler;

	beforeEach(() => {
		element = document.getElementById('testElement');
		accessibilityHandler = new AccessibilityHandler(element);
	});

	describe('Happy Path', () => {
		it('should correctly apply role attribute', () => {
			accessibilityHandler.apply({ role: 'button' });

			expect(element.getAttribute('role')).toBe('button');
		});

		it('should correctly apply aria-prefixed attributes', () => {
			accessibilityHandler.apply({ 'aria-labelledby': 'description' });

			expect(element.getAttribute('aria-labelledby')).toBe('description');
		});

		it('should transform camelCase aria attributes to kebab-case and apply them', () => {
			accessibilityHandler.apply({ ariaDetails: 'details' });

			expect(element.getAttribute('aria-details')).toBe('details');
		});

		it('should transform `current` to `aria-current` and apply the attribute', () => {
			accessibilityHandler.apply({ current: 'page' });

			expect(element.getAttribute('aria-current')).toBe('page');
		});
	});

	describe('Edge Cases', () => {
		it('should not apply attributes without `role` or valid aria prefix', () => {
			accessibilityHandler.apply({ invalidAttr: 'test' });

			expect(element.hasAttribute('aria-invalidattr')).toBe(false);
		});

		it('should handle empty config without errors', () => {
			expect(() => accessibilityHandler.apply({})).not.toThrow();
		});
	});

	describe('Others', () => {
		it('should overwrite existing attributes if applied again', () => {
			accessibilityHandler.apply({ role: 'button' });
			accessibilityHandler.apply({ role: 'link' });

			expect(element.getAttribute('role')).toBe('link');
		});

		it('should apply multiple attributes in a single call', () => {
			accessibilityHandler.apply({
				role: 'button',
				ariaLabeledby: 'description',
				current: 'page'
			});

			expect(element.getAttribute('role')).toBe('button');
			expect(element.getAttribute('aria-labeledby')).toBe('description');
			expect(element.getAttribute('aria-current')).toBe('page');
		});
	});
});
