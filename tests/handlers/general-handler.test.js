import { JSDOM } from 'jsdom';
import { describe, it, expect, beforeEach } from '@jest/globals';
import GeneralHandler from '../../src/handlers/general-handler';

// Setup JSDOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="test-element"></div></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.SVGElement = dom.window.SVGElement;

describe('GeneralHandler', () => {
	let element;
	let generalHandler;

	beforeEach(() => {
		// Create a fresh element for each test
		element = document.createElement('div');
		element.id = 'test-element';
		generalHandler = new GeneralHandler(element);
	});

	describe('Happy Path', () => {
		it('should apply valid attributes', () => {
			const config = {
				'class': 'primary pop',
				'id': 'apple-fruit',
				'data-fruit': 'apple',
				'name': 'apple',
				'title': 'apple'
			};

			generalHandler.apply(config);

			expect(element.getAttribute('class')).toBe('primary pop');
			expect(element.getAttribute('id')).toBe('apple-fruit');
			expect(element.getAttribute('data-fruit')).toBe('apple');
			expect(element.getAttribute('name')).toBe('apple');
			expect(element.getAttribute('title')).toBe('apple');
		});
	});

	describe('Edge Cases', () => {
		it('should throw an error for invalid attributes', () => {
			expect(() =>
				generalHandler.apply({
					invalidAttr: 'test'
				})
			).toThrow('"invalidAttr" is not a valid attribute for this element');
		});

		it('should throw an error if config is not an object', () => {
			expect(() => generalHandler.apply('notAnObject')).toThrow('Config must be an object');
		});
	});

	describe('Others', () => {
		it('should ignore empty config without errors', () => {
			expect(() => generalHandler.apply({})).not.toThrow();
		});

		it('should overwrite existing attributes if applied again', () => {
			generalHandler.apply({ id: 'initial-id' });
			generalHandler.apply({ id: 'new-id' });

			expect(element.getAttribute('id')).toBe('new-id');
		});
	});
});
