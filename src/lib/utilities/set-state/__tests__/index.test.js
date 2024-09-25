import { setState } from '..';
import { applyState } from '../apply-state';
import { logError } from '../../error-manager';
import { validateParameters } from '../../validate-parameters';

jest.mock('../apply-state');
jest.mock('../../validate-parameters');
jest.mock('../../error-manager');

describe('setState', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('textarea');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should call applyState when parameters are valid', () => {
			const state = { disabled: true };
			validateParameters.mockReturnValue(true);

			setState(element, state);

			expect(validateParameters).toHaveBeenCalledWith(element, state);
			expect(applyState).toHaveBeenCalledWith(element, state);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when parameters are invalid', () => {
			const state = { disabled: true };
			validateParameters.mockReturnValue(false);

			setState(element, state);

			expect(validateParameters).toHaveBeenCalledWith(element, state);
			expect(applyState).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SS-1');
		});

		it('should handle empty state objects gracefully', () => {
			const state = {};
			validateParameters.mockReturnValue(true);

			setState(element, state);

			expect(validateParameters).toHaveBeenCalledWith(element, state);
			expect(applyState).toHaveBeenCalledWith(element, state);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should not affect the element if validateParameters fails', () => {
			const state = { disabled: true };
			validateParameters.mockReturnValue(false);

			setState(element, state);

			expect(validateParameters).toHaveBeenCalledWith(element, state);
			expect(applyState).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SS-1');
		});
	});
});
