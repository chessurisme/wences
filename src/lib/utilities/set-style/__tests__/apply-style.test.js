import { applyStyles } from '../apply-style';
import { logError } from '../../error-manager';

jest.mock('../../error-manager');

describe('applyStyles', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should apply simple styles correctly', () => {
			const styles = {
				color: 'red',
				backgroundColor: 'blue'
			};

			applyStyles(element, styles);

			expect(element.style.color).toBe('red');
			expect(element.style.backgroundColor).toBe('blue');
			expect(logError).not.toHaveBeenCalled();
		});

		it('should apply nested styles correctly', () => {
			const styles = {
				margin: {
					top: '10px',
					bottom: '20px'
				}
			};

			applyStyles(element, styles);

			expect(element.style.getPropertyValue('margin-top')).toBe('10px');
			expect(element.style.getPropertyValue('margin-bottom')).toBe('20px');
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error if the style value is not a string or object', () => {
			const styles = {
				color: 123
			};

			applyStyles(element, styles);

			expect(element.style.color).toBe('');
			expect(logError).toHaveBeenCalledWith('SSt-2', { key: 'color' });
		});

		it('should log an error if nested value is not a string', () => {
			const styles = {
				margin: {
					top: 10
				}
			};

			applyStyles(element, styles);

			expect(element.style.getPropertyValue('margin-top')).toBe('');
			expect(logError).toHaveBeenCalledWith('SSt-3', {
				key: 'top',
				parentKey: 'margin'
			});
		});

		it('should not apply any styles and log an error if an empty object is passed', () => {
			const styles = {};

			applyStyles(element, styles);

			expect(element.style.cssText).toBe('');
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should apply mixed valid and invalid styles, logging errors only for invalid ones', () => {
			const styles = {
				color: 'green',
				fontSize: 16,
				border: {
					width: '1px',
					style: null
				}
			};

			applyStyles(element, styles);

			expect(element.style.color).toBe('green');
			expect(element.style.fontSize).toBe('');
			expect(element.style.getPropertyValue('border-width')).toBe('1px');
			expect(element.style.getPropertyValue('border-style')).toBe('');

			expect(logError).toHaveBeenCalledWith('SSt-2', { key: 'fontSize' });
			expect(logError).toHaveBeenCalledWith('SSt-3', {
				key: 'style',
				parentKey: 'border'
			});
		});
	});
});
