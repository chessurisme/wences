import { applyContent } from '../apply-content';
import { appendText } from '../append-text';
import { appendIcon } from '../append-icon';
import { appendElements } from '../append-elements';
import { logError } from '../../error-manager';

jest.mock('../append-text');
jest.mock('../append-icon');
jest.mock('../append-elements');
jest.mock('../../error-manager');

describe('applyContent', () => {
	let element;

	beforeEach(() => {
		element = document.createElement('div');
		jest.clearAllMocks();
	});

	describe('Happy Cases', () => {
		it('should call appendText when key is "text"', () => {
			const content = { text: 'Hello World' };
			applyContent(element, content);

			expect(appendText).toHaveBeenCalledWith(element, 'Hello World');
			expect(logError).not.toHaveBeenCalled();
		});

		it('should call appendIcon when key is "icon"', () => {
			const content = { icon: 'star' };
			applyContent(element, content);

			expect(appendIcon).toHaveBeenCalledWith(element, 'star');
			expect(logError).not.toHaveBeenCalled();
		});

		it('should call appendElements when key is "elements"', () => {
			const elements = [
				document.createElement('div'),
				document.createElement('span')
			];
			const content = { elements: elements };
			applyContent(element, content);

			expect(appendElements).toHaveBeenCalledWith(element, elements);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should do nothing for "index" key', () => {
			const content = { index: 3 };
			applyContent(element, content);

			expect(appendText).not.toHaveBeenCalled();
			expect(appendIcon).not.toHaveBeenCalled();
			expect(appendElements).not.toHaveBeenCalled();
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log an error for an unsupported key', () => {
			const content = { unsupportedKey: 'value' };
			applyContent(element, content);

			expect(logError).toHaveBeenCalledWith('SC-2', { key: 'unsupportedKey' });
			expect(appendText).not.toHaveBeenCalled();
			expect(appendIcon).not.toHaveBeenCalled();
			expect(appendElements).not.toHaveBeenCalled();
		});

		it('should not call appendText if "text" value is undefined', () => {
			const content = { text: undefined };
			applyContent(element, content);

			expect(appendText).toHaveBeenCalledWith(element, undefined);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should not call appendIcon if "icon" value is undefined', () => {
			const content = { icon: undefined };
			applyContent(element, content);

			expect(appendIcon).toHaveBeenCalledWith(element, undefined);
			expect(logError).not.toHaveBeenCalled();
		});

		it('should not call appendElements if "elements" value is undefined', () => {
			const content = { elements: undefined };
			applyContent(element, content);

			expect(appendElements).toHaveBeenCalledWith(element, undefined);
			expect(logError).not.toHaveBeenCalled();
		});
	});

	describe('Others', () => {
		it('should do nothing if content is an empty object', () => {
			const content = {};
			applyContent(element, content);

			expect(appendText).not.toHaveBeenCalled();
			expect(appendIcon).not.toHaveBeenCalled();
			expect(appendElements).not.toHaveBeenCalled();
			expect(logError).not.toHaveBeenCalled();
		});

		it('should handle multiple content types together', () => {
			const elements = [
				document.createElement('div'),
				document.createElement('span')
			];
			const content = {
				text: 'Sample Text',
				icon: 'heart',
				elements: elements
			};

			applyContent(element, content);

			expect(appendText).toHaveBeenCalledWith(element, 'Sample Text');
			expect(appendIcon).toHaveBeenCalledWith(element, 'heart');
			expect(appendElements).toHaveBeenCalledWith(element, elements);
			expect(logError).not.toHaveBeenCalled();
		});
	});
});
