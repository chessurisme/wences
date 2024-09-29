import { verifyConfig } from '../avatar-verify-config';

describe('verifyConfig', () => {
	let consoleErrorSpy;

	beforeEach(() => {
		consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
	});

	describe('Happy Cases', () => {
		it('should not log any errors when the config is valid', () => {
			const validConfig = {
				attribute: {
					src: 'some-src'
				}
			};

			verifyConfig(validConfig);

			expect(consoleErrorSpy).not.toHaveBeenCalled();
		});
	});

	describe('Edge Cases', () => {
		it('should log "Invalid input: Config is empty." if config is null', () => {
			verifyConfig(null);

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Invalid input: Config is empty.'
			);
		});

		it('should log "Invalid input: Config is empty." if attribute is missing', () => {
			const invalidConfig = {};

			verifyConfig(invalidConfig);

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Invalid input: Config is empty.'
			);
		});

		it('should log "Invalid input: The src attribute is not found in the config." if src is missing', () => {
			const invalidConfig = {
				attribute: {}
			};

			verifyConfig(invalidConfig);

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Invalid input: The src attribute is not found in the config.'
			);
		});
	});
});
