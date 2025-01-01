import { JSDOM } from 'jsdom';
import { describe, it, expect, jest } from '@jest/globals';
import EventsHandler from '../../src/handlers/events-handler';

const dom = new JSDOM('<!DOCTYPE html><div id="test-element"></div>');
globalThis.window = dom.window;
globalThis.document = window.document;
globalThis.HTMLElement = window.HTMLElement;
globalThis.SVGElement = window.SVGElement;

// Mock MouseEvent in the test environment
globalThis.MouseEvent = dom.window.MouseEvent;
globalThis.Event = dom.window.Event;

describe('EventsHandler', () => {
	let element, eventsHandler;

	beforeEach(() => {
		element = document.getElementById('test-element');
		eventsHandler = new EventsHandler(element);
	});

	describe('Happy Path', () => {
		it('should attach valid events with or without "on" prefix', () => {
			const onClickHandler = jest.fn();
			const mouseOverHandler = jest.fn();

			eventsHandler.apply({
				events: {
					onclick: onClickHandler,
					mouseover: mouseOverHandler
				}
			});

			element.click();
			element.dispatchEvent(new MouseEvent('mouseover'));

			expect(onClickHandler).toHaveBeenCalledTimes(1);
			expect(mouseOverHandler).toHaveBeenCalledTimes(1);
		});

		it('should normalize "on" prefixed event names', () => {
			const onlineHandler = jest.fn();

			eventsHandler.apply({
				events: {
					ononline: onlineHandler
				}
			});

			element.dispatchEvent(new Event('online'));

			expect(onlineHandler).toHaveBeenCalledTimes(1);
		});
	});

	describe('Edge Cases', () => {
		it('should throw an error for non-function handlers', () => {
			expect(() =>
				eventsHandler.apply({
					events: {
						onclick: 'notAFunction'
					}
				})
			).toThrow('Handler for event "onclick" must be a function');
		});

		it('should throw an error for invalid event names', () => {
			expect(() =>
				eventsHandler.apply({
					events: {
						on: () => {}
					}
				})
			).toThrow('"on" is not a valid DOM event name');
		});

		it('should throw an error for invalid keys after "on" normalization', () => {
			expect(() =>
				eventsHandler.apply({
					events: {
						line: () => {}
					}
				})
			).toThrow('"line" is not a valid DOM event name');
		});
	});

	describe('Others', () => {
		it('should handle an empty events object without errors', () => {
			expect(() =>
				eventsHandler.apply({
					events: {}
				})
			).not.toThrow();
		});

		it('should attach multiple valid events', () => {
			const clickHandler = jest.fn();
			const onmouseupHandler = jest.fn();

			eventsHandler.apply({
				events: {
					onclick: clickHandler,
					onmouseup: onmouseupHandler
				}
			});

			element.click(); // Dispatch the click event
			element.dispatchEvent(new MouseEvent('mouseup')); // Dispatch the mouseup event

			expect(clickHandler).toHaveBeenCalledTimes(1);
			expect(onmouseupHandler).toHaveBeenCalledTimes(1);
		});
	});
});
