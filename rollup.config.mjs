import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/site/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		postcss({
			extensions: ['.css']
		})
	]
};
