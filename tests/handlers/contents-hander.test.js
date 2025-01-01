import { JSDOM } from 'jsdom';
import { describe, it, expect } from '@jest/globals';
import ContentsHandler from '../../src/handlers/contents-handler';

// Set up the DOM environment
const dom = new JSDOM('<!DOCTYPE html><div id="test-element"></div>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.SVGElement = window.SVGElement;

describe('ContentsHandler', () => {
	let element, contentsHandler;

	beforeEach(() => {
		element = document.getElementById('test-element');
		contentsHandler = new ContentsHandler(element);
	});

	describe('Happy Path', () => {
		it('should append valid HTML element children', () => {
			const childElement = document.createElement('div');

			contentsHandler.apply({
				contents: {
					children: [childElement]
				}
			});

			expect(element.contains(childElement)).toBe(true);
		});

		it('should append a valid Text node', () => {
			const textNode = document.createTextNode('Hello, world!');

			contentsHandler.apply({
				contents: {
					children: [textNode]
				}
			});

			expect(element.textContent).toBe('Hello, world!');
		});

		it('should append a valid SVG element', () => {
			const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

			contentsHandler.apply({
				contents: {
					children: [svgElement]
				}
			});

			expect(element.contains(svgElement)).toBe(true);
		});
	});

	describe('Edge Cases', () => {
		it('should throw an error if children is not an array', () => {
			expect(() =>
				contentsHandler.apply({
					contents: {
						children: 'notAnArray'
					}
				})
			).toThrow('children must be an array');
		});

		it('should throw an error if a child is not a valid node', () => {
			expect(() =>
				contentsHandler.apply({
					contents: {
						children: ['invalidChild']
					}
				})
			).toThrow('Each child must be an instance of HTMLElement, SVGElement, or Text');
		});
	});

	describe('Others', () => {
		it('should handle empty children array without errors', () => {
			expect(() =>
				contentsHandler.apply({
					contents: {
						children: []
					}
				})
			).not.toThrow();
		});

		it('should append multiple valid nodes', () => {
			const childElement = document.createElement('div');
			const textNode = document.createTextNode('Hello');
			const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

			contentsHandler.apply({
				contents: {
					children: [childElement, textNode, svgElement]
				}
			});

			expect(element.contains(childElement)).toBe(true);
			expect(element.textContent).toContain('Hello');
			expect(element.contains(svgElement)).toBe(true);
		});
	});
});
