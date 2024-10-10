import { verifyType } from '../verify-type';

describe('verifyType', () => {
	describe('Happy Cases', () => {
		it('should return true for a valid type in the validTypes array', () => {
			const validTypes = ['primary', 'secondary', 'tertiary'];
			expect(verifyType('primary', validTypes)).toBe(true);
			expect(verifyType('secondary', validTypes)).toBe(true);
			expect(verifyType('tertiary', validTypes)).toBe(true);
		});
	});

	describe('Edge Cases', () => {
		it('should return true for an empty type when validTypes array contains an empty string', () => {
			const validTypes = [''];
			expect(verifyType('', validTypes)).toBe(true);
		});

		it('should return false for an empty validTypes array', () => {
			expect(verifyType('primary', [])).toBe(false);
		});

		it('should return false for a type that matches in case-insensitive manner', () => {
			const validTypes = ['Primary', 'Secondary', 'Tertiary'];
			expect(verifyType('primary', validTypes)).toBe(false);
		});
	});

	describe('Others', () => {
		it('should return false for an invalid type not in the validTypes array', () => {
			const validTypes = ['primary', 'secondary', 'tertiary'];
			expect(verifyType('invalid', validTypes)).toBe(false);
		});

		it('should return false for non-string type input', () => {
			const validTypes = ['primary', 'secondary', 'tertiary'];
			expect(verifyType(123, validTypes)).toBe(false);
			expect(verifyType(null, validTypes)).toBe(false);
			expect(verifyType(undefined, validTypes)).toBe(false);
			expect(verifyType([], validTypes)).toBe(false);
		});

		it('should log an error if validTypes is not an array', () => {
			console.error = jest.fn(); // Mock console.error
			expect(verifyType('primary', 'not-an-array')).toBe(false);
			expect(console.error).toHaveBeenCalledWith(
				expect.stringContaining(
					'Invalid parameter: "validTypes" is not an array'
				)
			);
		});
	});
});
