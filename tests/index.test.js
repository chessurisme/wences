import { JSDOM } from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import Wences from '../src';

const dom = new JSDOM('<!DOCTYPE html><div id="test-element"></div>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.SVGElement = window.SVGElement;
globalThis.MouseEvent = window.MouseEvent;

describe('Wences', () => {
	describe('Initialization', () => {
		it('should create an element with the default tag name "div"', () => {
			const wences = new Wences();
			const element = wences.getElement();

			expect(element.tagName.toLowerCase()).toBe('div');
		});

		it('should create an element with a custom tag name', () => {
			const wences = new Wences('button');
			const element = wences.getElement();

			expect(element.tagName.toLowerCase()).toBe('button');
		});

		it('should throw an error for invalid tag names', () => {
			expect(() => new Wences('invalidtagname!')).toThrow('Invalid HTML tag name');
		});
	});

	describe('Configuration Application', () => {
		it('should apply styles to the element', () => {
			const config = {
				style: {
					backgroundColor: 'red',
					color: 'white'
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			expect(element.style.backgroundColor).toBe('red');
			expect(element.style.color).toBe('white');
		});

		it('should apply general attributes to the element', () => {
			const config = {
				general: {
					id: 'test-id',
					title: 'test-title'
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			expect(element.getAttribute('id')).toBe('test-id');
			expect(element.getAttribute('title')).toBe('test-title');
		});

		it('should apply boolean state attributes to the element', () => {
			const config = {
				state: {
					disabled: true,
					hidden: true
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(element.hasAttribute('hidden')).toBe(true);
		});

		it('should apply event listeners to the element', () => {
			const clickHandler = jest.fn();

			const config = {
				events: {
					onclick: clickHandler
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			element.click();

			expect(clickHandler).toHaveBeenCalledTimes(1);
		});

		it('should apply accessibility attributes to the element', () => {
			const config = {
				accessibility: {
					'role': 'button',
					'aria-label': 'test-label'
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			expect(element.getAttribute('role')).toBe('button');
			expect(element.getAttribute('aria-label')).toBe('test-label');
		});

		it('should apply contents to the element', () => {
			const config = {
				contents: {
					children: [document.createElement('span'), document.createElement('p')]
				}
			};

			const wences = new Wences('div', config);
			const element = wences.getElement();

			expect(element.children.length).toBe(2);
			expect(element.children[0].tagName.toLowerCase()).toBe('span');
			expect(element.children[1].tagName.toLowerCase()).toBe('p');
		});
	});

	describe('Edge Cases', () => {
		it('should handle an empty configuration object without errors', () => {
			const wences = new Wences('div', {});
			const element = wences.getElement();

			expect(element.tagName.toLowerCase()).toBe('div');
		});

		it('should throw an error for unknown configuration keys', () => {
			const config = {
				unknownKey: {}
			};

			expect(() => new Wences('div', config)).not.toThrow();
		});
	});
});
