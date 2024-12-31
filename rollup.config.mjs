import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		name: 'MyBundle',
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**'
		}),
		serve({
			open: true,
			contentBase: ['dist'],
			port: 3000
		}),
		terser(),
		visualizer({
			filename: 'stats.html',
			open: true
		})
	]
};
