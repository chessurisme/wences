import { setBehavior } from '..';
import { validateParameters } from '../../validate-parameters';
import { applyBehavior } from '../apply-behavior';
import { logError } from '../../error-manager';

jest.mock('../../validate-parameters');
jest.mock('../apply-behavior');
jest.mock('../../error-manager');

describe('setBehavior', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('button'); // Change to any element as needed
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should apply behavior when parameters are valid', () => {
			const behavior = { click: jest.fn() };
			validateParameters.mockReturnValue(true);

			setBehavior(element, behavior);

			expect(applyBehavior).toHaveBeenCalledWith(element, behavior);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should apply behavior when key is prefixed', () => {
			const behavior = { onclick: jest.fn() };
			validateParameters.mockReturnValue(true);

			setBehavior(element, behavior);

			expect(applyBehavior).toHaveBeenCalledWith(element, behavior);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when parameters are invalid', () => {
			const behavior = { onclick: jest.fn() };
			validateParameters.mockReturnValue(false);

			setBehavior(element, behavior);

			expect(logError).toHaveBeenCalledWith('SB-1');
			expect(applyBehavior).not.toHaveBeenCalled();
		});

		it('should log an error when a non-event key is provided in the behavior object', () => {
			const behavior = { nonEventKey: jest.fn() };
			validateParameters.mockReturnValue(false);

			setBehavior(element, behavior);
			expect(logError).toHaveBeenCalledWith('SB-1');
		});

		it('should log an error when the key is not a valid event type', () => {
			const behavior = { randomKey: jest.fn() };
			validateParameters.mockReturnValue(false);

			setBehavior(element, behavior);

			expect(logError).toHaveBeenCalledWith('SB-1');
		});
	});

	describe('Others', () => {
		it('should not log an error when an empty behavior object is passed but parameters are valid', () => {
			const behavior = {};
			validateParameters.mockReturnValue(true);

			setBehavior(element, behavior);

			expect(applyBehavior).toHaveBeenCalledWith(element, behavior);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should call validateParameters with the correct arguments', () => {
			const behavior = { onmouseover: jest.fn() };
			validateParameters.mockReturnValue(true);

			setBehavior(element, behavior);

			expect(validateParameters).toHaveBeenCalledWith(element, behavior);
		});
	});
});
