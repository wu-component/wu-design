import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias'


export default defineConfig({
    input: './src/ui/index.ts',
    output: [
        {
            file: 'dist/ui/index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        alias({
            entries: [{
                find: '@',
                replacement: new URL('./src', import.meta.url).pathname
            }]
        }),
        typescript({
            lib: ["es5", "es6", "dom"],
            target: "es5", // 输出目标
            noEmitOnError: false, // 运行时是否验证ts错误
        }),
        nodeResolve(),
        commonjs(),
        vue(),
        postcss(),
        babel({                       // 指定 babel 处理文件类型
            babelHelpers: 'bundled',    // 如果 vue 存在 jsx 语法，
            extensions: ['.js', '.jsx', '.vue', '.ts', 'tsx'] // 则会从 babel.config.js, 调用 @vue/babel-plugin-jsx 处理
        })
    ],
    external: [
        /^vue(\/.+|$)/,
        'vue'
    ]
})

