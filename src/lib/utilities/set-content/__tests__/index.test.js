import { setContent } from '..';
import { validateParameters } from '../../validate-parameters';
import { applyContent } from '../apply-content';
import { logError } from '../../error-manager';

jest.mock('../../validate-parameters');
jest.mock('../apply-content');
jest.mock('../../error-manager');

describe('setContent', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should call applyContent when parameters are valid', () => {
			const content = { text: 'Hello World' };
			validateParameters.mockReturnValue(true);

			setContent(element, content);

			expect(validateParameters).toHaveBeenCalledWith(element, content);
			expect(applyContent).toHaveBeenCalledWith(element, content);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should work with multiple content types when parameters are valid', () => {
			const content = {
				text: 'Sample Text',
				icon: 'star',
				elements: [
					document.createElement('div'),
					document.createElement('span')
				]
			};
			validateParameters.mockReturnValue(true);

			setContent(element, content);

			expect(validateParameters).toHaveBeenCalledWith(element, content);
			expect(applyContent).toHaveBeenCalledWith(element, content);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log error "SC-1" when parameters are invalid', () => {
			const content = { text: 'Hello World' };
			validateParameters.mockReturnValue(false);

			setContent(element, content);

			expect(validateParameters).toHaveBeenCalledWith(element, content);
			expect(applyContent).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SC-1');
		});

		it('should log error "SC-1" when element is not a valid HTMLElement', () => {
			const content = { text: 'Invalid Element' };
			validateParameters.mockReturnValue(false);

			setContent(null, content);

			expect(validateParameters).toHaveBeenCalledWith(null, content);
			expect(applyContent).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SC-1');
		});

		it('should log error "SC-1" when content is not a valid object', () => {
			validateParameters.mockReturnValue(false);

			setContent(element, null);

			expect(validateParameters).toHaveBeenCalledWith(element, null);
			expect(applyContent).not.toHaveBeenCalled();
			expect(logError).toHaveBeenCalledWith('SC-1');
		});
	});

	describe('Others', () => {
		it('should not call applyContent or logError if content is an empty object and parameters are valid', () => {
			const content = {};
			validateParameters.mockReturnValue(true);

			setContent(element, content);

			expect(validateParameters).toHaveBeenCalledWith(element, content);
			expect(applyContent).toHaveBeenCalledWith(element, content);
			expect(logError).not.toHaveBeenCalled();
		});
	});
});
