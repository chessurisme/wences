import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{
		languageOptions: {
			globals: globals.browser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: ['@eslint'],
		extends: [pluginJs.configs.recommended],
		rules: {
			'no-undef': 'error',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'eqeqeq': 'error',
			'curly': 'error'
		}
	}
];
