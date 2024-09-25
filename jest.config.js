module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	setupFiles: ['<rootDir>/jest.setup.js']
};
