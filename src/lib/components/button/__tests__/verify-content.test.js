import { verifyContent } from '../verify-content';

describe('verifyContent', () => {
	describe('Happy Cases', () => {
		it('should return true for valid content with text, icon, type, href, and target', () => {
			const content = {
				text: 'Sample Text',
				icon: document.createElement('svg'),
				type: 'primary',
				href: 'https://example.com',
				target: '_blank'
			};
			expect(verifyContent(content)).toBe(true);
		});

		it('should return true for content with only text', () => {
			const content = {
				text: 'Only Text'
			};
			expect(verifyContent(content)).toBe(true);
		});

		it('should return true for content with valid href and target', () => {
			const content = {
				href: 'https://valid-url.com',
				target: '_self'
			};
			expect(verifyContent(content)).toBe(true);
		});
	});

	describe('Edge Cases', () => {
		it('should return true for empty content (no text, icon, href, etc.)', () => {
			const content = {};
			expect(verifyContent(content)).toBe(true);
		});

		it('should return false for a text value that is a boolean (instead of a string)', () => {
			const content = {
				text: false
			};
			expect(verifyContent(content)).toBe(false);
		});

		it('should return false if the icon is a number instead of a valid type', () => {
			const content = {
				icon: 123
			};
			expect(verifyContent(content)).toBe(false);
		});

		it('should return true for valid content with target as a named frame (not a reserved word)', () => {
			const content = {
				target: 'customFrame'
			};
			expect(verifyContent(content)).toBe(true);
		});
	});

	describe('Others', () => {
		it('should return false if text is a number instead of a string', () => {
			const content = {
				text: 123
			};
			expect(verifyContent(content)).toBe(false);
		});

		it('should return false for invalid type (not "primary", "secondary", "tertiary")', () => {
			const content = {
				type: 'quaternary'
			};
			expect(verifyContent(content)).toBe(false);
		});
	});
});
