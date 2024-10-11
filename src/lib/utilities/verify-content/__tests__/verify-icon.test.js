import { verifyIcon } from '../verify-icon';

describe('verifyIcon', () => {
	describe('Happy Cases', () => {
		it('should return true for a valid SVGElement', () => {
			const svgElement = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'svg'
			);
			expect(verifyIcon(svgElement)).toBe(true);
		});

		it('should return true for a valid HTMLElement', () => {
			const htmlElement = document.createElement('div');
			expect(verifyIcon(htmlElement)).toBe(true);
		});

		it('should return true for a valid string', () => {
			expect(verifyIcon('icon-name')).toBe(true);
		});

		it('should return true if icon is undefined (optional case)', () => {
			expect(verifyIcon(undefined)).toBe(true); // Allowing undefined as valid input
		});
	});

	describe('Edge Cases', () => {
		it('should return false for an empty string', () => {
			expect(verifyIcon('')).toBe(false); // Empty string is not a valid icon
		});
	});

	describe('Others', () => {
		it('should return false for a number', () => {
			expect(verifyIcon(123)).toBe(false); // Invalid number type
		});

		it('should return false for a boolean', () => {
			expect(verifyIcon(true)).toBe(false); // Invalid boolean type
		});

		it('should return false for an object', () => {
			expect(verifyIcon({})).toBe(false); // Invalid object type
		});

		it('should return false for an array', () => {
			expect(verifyIcon(['icon'])).toBe(false); // Invalid array type
		});

		it('should return false for null', () => {
			expect(verifyIcon(null)).toBe(false); // Invalid null type
		});
	});
});
