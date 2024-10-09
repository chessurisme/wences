import { applyAttributes } from '../apply-attributes';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('applyAttributes', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	it('should apply valid accessibility attributes to the element', () => {
		const accessibility = {
			'role': 'button',
			'aria-label': 'Click me'
		};

		applyAttributes(element, accessibility);

		expect(element.getAttribute('role')).toBe('button');
		expect(element.getAttribute('aria-label')).toBe('Click me');
		expect(logError).not.toHaveBeenCalled();
	});

	it('should log an error if a non-string value is provided for an attribute', () => {
		const accessibility = {
			role: 'button',
			invalid: 123 // Non-string value
		};

		applyAttributes(element, accessibility);

		expect(element.getAttribute('role')).toBe('button'); // Should apply valid role
		expect(element.getAttribute('invalid')).toBeNull(); // Should not apply invalid attribute
		expect(logError).toHaveBeenCalledWith('SAC-2', {
			key: 'invalid',
			value: 'number'
		});
	});

	it('should log an error if a boolean value is provided for an attribute', () => {
		const accessibility = {
			role: 'button',
			invalid: true // Boolean value
		};

		applyAttributes(element, accessibility);

		expect(element.getAttribute('role')).toBe('button'); // Should apply valid role
		expect(element.getAttribute('invalid')).toBeNull(); // Should not apply invalid attribute
		expect(logError).toHaveBeenCalledWith('SAC-2', {
			key: 'invalid',
			value: 'boolean'
		});
	});

	it('should apply attributes without aria- prefix for regular keys', () => {
		const accessibility = {
			role: 'button',
			title: 'A title' // Regular attribute
		};

		applyAttributes(element, accessibility);

		expect(element.getAttribute('role')).toBe('button');
		expect(element.getAttribute('aria-title')).toBe('A title');
		expect(logError).not.toHaveBeenCalled();
	});
});
