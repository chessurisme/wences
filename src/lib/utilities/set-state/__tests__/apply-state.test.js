import { applyState } from '../apply-state';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('applyState', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('textarea');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should set attribute when state value is true', () => {
			const state = { disabled: true };

			applyState(element, state);

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should remove attribute when state value is false', () => {
			element.setAttribute('disabled', '');
			const state = { disabled: false };

			applyState(element, state);

			expect(element.hasAttribute('disabled')).toBe(false);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should set multiple attributes correctly', () => {
			const state = { disabled: true, readOnly: true };

			applyState(element, state);

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(element.hasAttribute('readonly')).toBe(true);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should remove multiple attributes correctly', () => {
			element.setAttribute('disabled', '');
			element.setAttribute('readonly', '');
			const state = { disabled: false, readOnly: false };

			applyState(element, state);

			expect(element.hasAttribute('disabled')).toBe(false);
			expect(element.hasAttribute('readonly')).toBe(false);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when the state value is not a boolean', () => {
			const state = { disabled: 'true' };

			applyState(element, state);

			expect(logError).toHaveBeenCalledWith('SS-2', { key: 'disabled' });
			expect(element.hasAttribute('disabled')).toBe(false);
		});

		it('should log an error for multiple invalid state values', () => {
			const state = { disabled: 'active', readOnly: 1 };

			applyState(element, state);

			expect(logError).toHaveBeenCalledTimes(2);
			expect(logError).toHaveBeenCalledWith('SS-2', { key: 'disabled' });
			expect(logError).toHaveBeenCalledWith('SS-2', { key: 'readOnly' });
		});

		it('should not log errors when state object is empty', () => {
			const state = {};

			applyState(element, state);

			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should not affect the element if state values are all valid', () => {
			const initialState = { disabled: true, readOnly: false };
			const state = { disabled: true, readOnly: false };

			applyState(element, initialState);
			applyState(element, state);

			expect(element.hasAttribute('disabled')).toBe(true);
			expect(element.hasAttribute('readonly')).toBe(false);
			expect(logError).not.toHaveBeenCalled();
		});
	});
});
