import { logError } from '..';
import { errorMessages } from '../error-messages';

console.error = jest.fn();

describe('logError', () => {
	beforeEach(() => {
		console.error.mockClear();
	});

	describe('Happy Cases', () => {
		it('should log a general error message for a valid code (G-1)', () => {
			const errorCode = 'G-1';

			logError(errorCode);

			expect(console.error).toHaveBeenCalledWith(errorMessages[errorCode]);
		});

		it('should log a formatted error message for a valid code with props (SA-2)', () => {
			const errorCode = 'SA-2';
			const props = { value: 'number' };

			logError(errorCode, props);

			expect(console.error).toHaveBeenCalledWith(
				`Invalid value: Ensure the value in attributes is a string, but it is a/an number.`
			);
		});
	});

	describe('Edge Cases', () => {
		it('should log an unknown error message for an invalid code', () => {
			const invalidErrorCode = 'INVALID_CODE';

			logError(invalidErrorCode);

			expect(console.error).toHaveBeenCalledWith(
				`Unknown error code: ${invalidErrorCode}`
			);
		});

		it('should log a formatted message even if the props object has additional properties (SA-2)', () => {
			const errorCode = 'SA-2';
			const props = { value: 'boolean', extraProp: 'not needed' };

			logError(errorCode, props);

			expect(console.error).toHaveBeenCalledWith(
				`Invalid value: Ensure the value in attributes is a string, but it is a/an boolean.`
			);
		});
	});

	describe('Others', () => {
		it('should log an error message when props is not provided for a function-based error (SA-2)', () => {
			const errorCode = 'SA-2';

			logError(errorCode);

			expect(console.error).toHaveBeenCalledWith(
				`Invalid value: Ensure the value in attributes is a string, but it is a/an undefined.`
			);
		});

		it('should log the error message when no error code is passed', () => {
			const errorCode = undefined;

			logError(errorCode);

			expect(console.error).toHaveBeenCalledWith(
				`Unknown error code: ${errorCode}`
			);
		});
	});
});
