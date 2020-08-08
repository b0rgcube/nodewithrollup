import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy-assets-to';
import cleaner from 'rollup-plugin-cleaner';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
	output: {
		file: 'build/index.js',
        format: 'es',
		sourcemap: true
	},
	plugins: [
        production && cleaner({  // Only remove ./build when building for production.
            targets: [
              './build/'
            ]
        }),
        copy({
            assets: [
                './assets',
            ],
            outputDir: 'build'
        }),
        json(),
        resolve(),
        commonjs(),
    ]
};