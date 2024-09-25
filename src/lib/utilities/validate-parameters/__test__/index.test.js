import { validateParameters } from '..';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html>`);
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;

describe('validateParameters', () => {
	let validElement;
	let invalidElement;
	let validObject;
	let invalidObject;
	let emptyObject;

	beforeEach(() => {
		validElement = document.createElement('div');
		invalidElement = '';
		validObject = {
			class: 'fruit',
			id: 'apple'
		};
		invalidObject = '';
		emptyObject = {};
	});

	describe('Happy Cases', () => {
		it('should return true if the element is an instance of HTMLElement', () => {
			const result = validateParameters(validElement, validObject);
			expect(result).toBe(true);
		});

		it('should return true if the object is a typeof object and not empty', () => {
			const result = validateParameters(validElement, validObject);
			expect(result).toBe(true);
		});
	});

	describe('Edge Cases', () => {
		it('should return false if there is no parameter included', () => {
			const result = validateParameters();
			expect(result).toBe(false);
		});

		it('should return false if the element is not an instance of HTMLElement', () => {
			const result = validateParameters(invalidElement, validObject);
			expect(result).toBe(false);
		});

		it('should return false if the object is not a typeof object', () => {
			const result = validateParameters(validElement, undefined);
			expect(result).toBe(false);
		});

		it('should return false if the object is empty or has a length of 0', () => {
			const result = validateParameters(validElement, emptyObject);
			expect(result).toBe(false);
		});
	});

	describe('Others', () => {
		it('should return false if the object is a string, number, array, boolean, bigInt, symbol, or function', () => {
			const testCases = [
				'string',
				123,
				[],
				true,
				BigInt(123),
				Symbol('sym'),
				() => {}
			];

			testCases.forEach((invalidType) => {
				const result = validateParameters(validElement, invalidType);
				expect(result).toBe(false);
			});
		});

		it('should return false if the object is null or undefined', () => {
			const resultNull = validateParameters(validElement, null);
			const resultUndefined = validateParameters(validElement, undefined);
			expect(resultNull).toBe(false);
			expect(resultUndefined).toBe(false);
		});

		it('should return false if the element is null or undefined', () => {
			const resultNull = validateParameters(null, validObject);
			const resultUndefined = validateParameters(undefined, validObject);
			expect(resultNull).toBe(false);
			expect(resultUndefined).toBe(false);
		});
	});
});
