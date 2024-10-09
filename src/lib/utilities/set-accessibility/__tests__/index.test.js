import { setAccessibility } from '..';
import { validateParameters } from '../../validate-parameters';
import { applyAttributes } from '../apply-attributes';
import { logError } from '../../error-manager';

jest.mock('../../validate-parameters');
jest.mock('../apply-attributes');
jest.mock('../../error-manager');

describe('setAccessibility', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	it('should validate parameters and apply accessibility attributes when valid', () => {
		const accessibility = {
			'role': 'button',
			'aria-label': 'Click me'
		};

		validateParameters.mockReturnValue(true);

		setAccessibility(element, accessibility);

		expect(validateParameters).toHaveBeenCalledWith(element, accessibility);
		expect(applyAttributes).toHaveBeenCalledWith(element, accessibility);
		expect(logError).not.toHaveBeenCalled();
	});

	it('should log an error and not apply attributes if parameters are invalid', () => {
		const accessibility = {
			role: 'button'
		};

		validateParameters.mockReturnValue(false);

		setAccessibility(element, accessibility);

		expect(validateParameters).toHaveBeenCalledWith(element, accessibility);
		expect(applyAttributes).not.toHaveBeenCalled();
		expect(logError).toHaveBeenCalledWith('SAC-1');
	});

	it('should return the modified element when parameters are valid', () => {
		const accessibility = {
			'role': 'button',
			'aria-label': 'Submit'
		};

		validateParameters.mockReturnValue(true);

		const result = setAccessibility(element, accessibility);

		expect(result).toBe(element);
	});

	it('should return undefined when parameters are invalid', () => {
		const accessibility = {
			role: 'button'
		};

		validateParameters.mockReturnValue(false);

		const result = setAccessibility(element, accessibility);

		expect(result).toBeUndefined();
	});
});
