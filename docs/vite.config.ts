import { resolve } from 'path'
// import FightingSetupNamePlugin from '@fighting-design/vite-plugin-vue-fighting-setup-name'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [
      /** 设置组件名插件 */
      // FightingSetupNamePlugin()
    ],
    optimizeDeps: {
      exclude: ['vitepress']
    },
    /**
     * 定义全局常量替换方式
     *
     * @see define https://cn.vitejs.dev/config/shared-options.html#define
     */
    define: {
      /** 检测是否为生产环境 */
      __DEV__: process.env.NODE_ENV !== 'production'
    },
    server: {
      port: 9999,
      fs: {
        /**
         * 可以为项目根目录的上一级提供服务
         *
         * @see allow https://cn.vitejs.dev/config/server-options.html#server-fs-allow
         */
        allow: [resolve(__dirname, '..', '..')]
      }
    },
    resolve: {
      alias: {
        /*'fighting-design': resolve(__dirname, '../packages/fighting-design/index.ts'),
        '@fighting-design/fighting-icon': resolve(
          __dirname,
          '../packages/fighting-icon/index.ts'
        )*/
      }
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule): void => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
}
