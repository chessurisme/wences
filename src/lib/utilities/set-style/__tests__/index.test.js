import { setStyles } from '..';
import { applyStyles } from '../apply-style';
import { logError } from '../../error-manager';
import { validateParameters } from '../../validate-parameters';

jest.mock('../apply-style');
jest.mock('../../error-manager');
jest.mock('../../validate-parameters');

describe('setStyles', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should apply styles when parameters are valid', () => {
			const styles = {
				color: 'blue',
				marginTop: '10px'
			};

			validateParameters.mockReturnValue(true);
			setStyles(element, styles);

			expect(validateParameters).toHaveBeenCalledWith(element, styles);
			expect(applyStyles).toHaveBeenCalledWith(element, styles);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error if parameters are invalid', () => {
			const styles = null;

			validateParameters.mockReturnValue(false);
			setStyles(element, styles);

			expect(validateParameters).toHaveBeenCalledWith(element, styles);
			expect(applyStyles).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SSt-1');
		});

		it('should log an error if element is not an HTML element', () => {
			const styles = {
				display: 'block'
			};
			const invalidElement = 'not-an-element';

			validateParameters.mockReturnValue(false);
			setStyles(invalidElement, styles);

			expect(validateParameters).toHaveBeenCalledWith(invalidElement, styles);
			expect(applyStyles).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SSt-1');
		});

		it('should log an error if styles is not an object', () => {
			const styles = 'not-an-object';

			validateParameters.mockReturnValue(false);
			setStyles(element, styles);

			expect(validateParameters).toHaveBeenCalledWith(element, styles);
			expect(applyStyles).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SSt-1');
		});
	});

	describe('Others', () => {
		it('should log an error if both parameters are invalid', () => {
			const invalidElement = 'not-an-element';
			const invalidStyles = 'not-an-object';

			validateParameters.mockReturnValue(false);
			setStyles(invalidElement, invalidStyles);

			expect(validateParameters).toHaveBeenCalledWith(
				invalidElement,
				invalidStyles
			);
			expect(applyStyles).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SSt-1');
		});

		it('should not apply styles or log an error for an empty styles object', () => {
			const styles = {};

			validateParameters.mockReturnValue(true);
			setStyles(element, styles);

			expect(validateParameters).toHaveBeenCalledWith(element, styles);
			expect(applyStyles).toHaveBeenCalledWith(element, styles);
			expect(logError).not.toHaveBeenCalled(); // No error for empty styles object
		});

		it('should apply nested styles correctly when parameters are valid', () => {
			const styles = {
				margin: {
					top: '10px',
					bottom: '20px'
				}
			};

			validateParameters.mockReturnValue(true);
			setStyles(element, styles);

			expect(validateParameters).toHaveBeenCalledWith(element, styles);
			expect(applyStyles).toHaveBeenCalledWith(element, styles);
			expect(logError).not.toHaveBeenCalled();
		});
	});
});
