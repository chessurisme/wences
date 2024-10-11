import { verifyHref } from '../verify-href';

describe('verifyHref', () => {
	describe('Happy Cases', () => {
		it('should return true for a valid absolute URL', () => {
			expect(verifyHref('https://www.example.com')).toBe(true);
			expect(verifyHref('http://example.org')).toBe(true);
		});

		it('should return true for a valid relative URL', () => {
			expect(verifyHref('/relative/path')).toBe(true);
			expect(verifyHref('./another/path')).toBe(true);
			expect(verifyHref('../parent/path')).toBe(true);
		});

		it('should return true for an internal link (hash)', () => {
			expect(verifyHref('#section1')).toBe(true);
			expect(verifyHref('#top')).toBe(true);
		});

		it('should return true for a valid "javascript:" URL', () => {
			expect(verifyHref('javascript:void(0)')).toBe(true);
		});

		it('should return true for undefined', () => {
			expect(verifyHref(undefined)).toBe(true);
		});
	});

	describe('Edge Cases', () => {
		it('should return true for an empty string (since it could be interpreted as current page)', () => {
			expect(verifyHref('')).toBe(true);
		});

		it('should return true for a protocol-relative URL', () => {
			expect(verifyHref('//example.com')).toBe(true);
		});

		it('should return true for a custom protocol like mailto or tel', () => {
			expect(verifyHref('mailto:someone@example.com')).toBe(true);
			expect(verifyHref('tel:+1234567890')).toBe(true);
		});
	});

	describe('Others', () => {
		it('should return false for non-string values but undefined', () => {
			expect(verifyHref(null)).toBe(false);
			expect(verifyHref(undefined)).toBe(true);
			expect(verifyHref(123)).toBe(false);
			expect(verifyHref([])).toBe(false);
			expect(verifyHref({})).toBe(false);
		});
	});
});
