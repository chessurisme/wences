import { appendText } from '../append-text';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('appendText', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should append text inside a paragraph element when valid text is provided', () => {
			const text = 'Hello, World!';

			appendText(element, text);

			expect(element.childElementCount).toBe(1);
			expect(element.firstChild.tagName).toBe('P');
			expect(element.firstChild.textContent).toBe(text);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should allow appending multiple texts to the same element', () => {
			const texts = ['Hello, World!', 'Welcome to testing!'];

			texts.forEach((text) => appendText(element, text));

			expect(element.childElementCount).toBe(2);
			expect(element.children[0].textContent).toBe(texts[0]);
			expect(element.children[1].textContent).toBe(texts[1]);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when text is not a string (number)', () => {
			const invalidText = 123;

			appendText(element, invalidText);

			expect(element.childElementCount).toBe(0);
			expect(logError).toHaveBeenCalledWith('SC-3');
		});

		it('should log an error when text is an object', () => {
			const invalidText = { message: 'Hello' };

			appendText(element, invalidText);

			expect(element.childElementCount).toBe(0);
			expect(logError).toHaveBeenCalledWith('SC-3');
		});

		it('should log an error when text is an array', () => {
			const invalidText = ['Hello', 'World'];

			appendText(element, invalidText);

			expect(element.childElementCount).toBe(0);
			expect(logError).toHaveBeenCalledWith('SC-3');
		});

		it('should log an error when text is undefined', () => {
			appendText(element, undefined);

			expect(element.childElementCount).toBe(0);
			expect(logError).toHaveBeenCalledWith('SC-3');
		});

		it('should log an error when text is null', () => {
			appendText(element, null);

			expect(element.childElementCount).toBe(0);
			expect(logError).toHaveBeenCalledWith('SC-3');
		});
	});

	describe('Others', () => {
		it('should not add text or log an error for an empty string', () => {
			appendText(element, '');

			expect(element.childElementCount).toBe(1);
			expect(element.firstChild.textContent).toBe('');
			expect(logError).not.toHaveBeenCalled();
		});

		it('should create a new paragraph element for each append operation', () => {
			appendText(element, 'First Text');
			appendText(element, 'Second Text');

			expect(element.childElementCount).toBe(2);
			expect(element.children[0].tagName).toBe('P');
			expect(element.children[0].textContent).toBe('First Text');
			expect(element.children[1].tagName).toBe('P');
			expect(element.children[1].textContent).toBe('Second Text');
		});
	});
});
