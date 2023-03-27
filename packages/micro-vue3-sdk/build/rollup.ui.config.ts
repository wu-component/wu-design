import vue from 'rollup-plugin-vue';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/ui/index.ts',
    output: [
        {
            file: 'dist/ui/index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        vue(),
        babel({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            babelHelpers: 'bundled',
            presets: [
                [
                    '@babel/preset-env',
                    { corejs: 3, useBuiltIns: false }
                ],
                '@babel/preset-typescript'
            ],
            plugins: [
                /*[
                    '@babel/plugin-transform-runtime', { useESModules: true }
                ]*/
            ]
        })
    ],
    external: ['vue']
}
