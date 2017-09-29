import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/index.js',
    moduleName: 'jumpTo',
    format: 'umd',
    plugins: [
        babel(),
        resolve()
    ],
    dest: 'dist/jumpto.js'
};
