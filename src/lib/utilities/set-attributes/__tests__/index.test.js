import { setAttributes } from '..';
import { validateParameters } from '../../validate-parameters';
import { applyAttributes } from '../apply-attributes';
import { logError } from '../../error-manager';

jest.mock('../../validate-parameters');
jest.mock('../apply-attributes');
jest.mock('../../error-manager');

describe('setAttributes', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should apply attributes when parameters are valid', () => {
			const attributes = {
				class: 'fruit',
				id: 'apple'
			};
			validateParameters.mockReturnValue(true);
			setAttributes(element, attributes);
			expect(applyAttributes).toHaveBeenCalledWith(element, attributes);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when parameters are invalid', () => {
			const attributes = {
				class: 'fruit'
			};
			validateParameters.mockReturnValue(false);
			setAttributes(element, attributes);
			expect(logError).toHaveBeenCalledWith('SA-1');
			expect(applyAttributes).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should not log an error if attributes are an empty object and parameters are valid', () => {
			const attributes = {};
			validateParameters.mockReturnValue(true);
			setAttributes(element, attributes);
			expect(applyAttributes).toHaveBeenCalledWith(element, attributes);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should call validateParameters with the correct arguments', () => {
			const attributes = { class: 'fruit' };
			validateParameters.mockReturnValue(true);
			setAttributes(element, attributes);
			expect(validateParameters).toHaveBeenCalledWith(element, attributes);
		});
	});
});
