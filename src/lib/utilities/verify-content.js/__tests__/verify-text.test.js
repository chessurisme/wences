import { verifyText } from '../verify-text';

describe('verifyText', () => {
	describe('Happy Cases', () => {
		it('should return true for a valid string text', () => {
			expect(verifyText('Valid String')).toBe(true);
		});

		it('should return true if text is undefined (optional case)', () => {
			expect(verifyText(undefined)).toBe(true); // Allowing undefined as valid input
		});
	});

	describe('Edge Cases', () => {
		it('should return true for an empty string', () => {
			expect(verifyText('')).toBe(true); // Empty string is a valid string
		});
	});

	describe('Others', () => {
		it('should return false if text is a number', () => {
			expect(verifyText(123)).toBe(false); // Invalid number type
		});

		it('should return false if text is a boolean', () => {
			expect(verifyText(true)).toBe(false); // Invalid boolean type
		});

		it('should return false if text is an object', () => {
			expect(verifyText({})).toBe(false); // Invalid object type
		});

		it('should return false if text is an array', () => {
			expect(verifyText(['array'])).toBe(false); // Invalid array type
		});

		it('should return false if text is null', () => {
			expect(verifyText(null)).toBe(false); // Invalid null type
		});
	});
});
