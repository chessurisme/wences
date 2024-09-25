import { applyAttributes } from '../apply-attributes';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('applyAttributes', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should set attributes correctly when provided valid string values', () => {
			const attributes = {
				class: 'fruit',
				id: 'apple'
			};
			applyAttributes(element, attributes);
			expect(element.getAttribute('class')).toBe('fruit');
			expect(element.getAttribute('id')).toBe('apple');
		});
	});

	describe('Edge Cases', () => {
		it('should log an error for non-string attribute values', () => {
			const attributes = {
				valid: 'string',
				invalid: 123
			};
			applyAttributes(element, attributes);
			expect(logError).toHaveBeenCalledWith('SA-2', { value: 'number' });
		});

		it('should log an error for boolean attribute values', () => {
			const attributes = {
				valid: 'string',
				invalid: true
			};
			applyAttributes(element, attributes);
			expect(logError).toHaveBeenCalledWith('SA-2', { value: 'boolean' });
		});
	});

	describe('Others', () => {
		it('should not log errors when all attribute values are strings', () => {
			const attributes = {
				class: 'fruit',
				id: 'banana'
			};
			applyAttributes(element, attributes);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should not set attributes if no attributes are provided', () => {
			applyAttributes(element, {});
			expect(element.attributes.length).toBe(0);
		});
	});
});
