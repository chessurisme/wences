import { applyBehavior } from '../apply-behavior';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('applyBehavior', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('button'); // Change to any element as needed
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should add event listeners for valid behavior functions', () => {
			const mockClickHandler = jest.fn();
			const behavior = { onclick: mockClickHandler };

			applyBehavior(element, behavior);
			element.click(); // Simulate a click

			expect(mockClickHandler).toHaveBeenCalled();
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error when behavior value is not a function', () => {
			const behavior = { onclick: 'not a function' };

			applyBehavior(element, behavior);

			expect(logError).toHaveBeenCalledWith('SB-2', { key: 'onclick' });
		});

		it('should log an error when the event type is not valid for the element', () => {
			const mockClickHandler = jest.fn();
			const behavior = { oninvalid: mockClickHandler }; // 'oninvalid' not supported on <button>

			applyBehavior(element, behavior);

			expect(logError).toHaveBeenCalledWith('SB-3', {
				tagName: 'button',
				eventType: 'invalid'
			});
			expect(mockClickHandler).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should log an error when the event key is invalid (non-function)', () => {
			const behavior = { onmouseover: 123 };

			applyBehavior(element, behavior);

			expect(logError).toHaveBeenCalledWith('SB-2', { key: 'onmouseover' });
		});

		it('should not add an event listener if behavior is an empty object', () => {
			const behavior = {};

			applyBehavior(element, behavior);

			expect(logError).not.toHaveBeenCalled();
		});
	});
});
