import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint' //导入包

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: [
        'src/**/*.js',
        'src/**/*.vue',
        'src/*.js',
        'src/*.vue',
        'src/**/*.ts',
        'src/*.ts',
        'src/**/*.tsx',
        'src/*.tsx'
      ]
    })
  ],
  base: './', // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      '@': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/store': path.resolve(__dirname, 'src/store')
    }
  },
  server: {
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //host: 'localhost',  // 指定服务器主机名
    port: 3000, // 指定服务器端口
    proxy: {
      // 为开发服务器配置自定义代理规则
    }
  },
  build: {
    outDir: 'dist',
    // 9月更新
    assetsDir: 'assets', //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: './packages/index.ts',
      name: 'vtszsy-tools'
    }
  },
  // 配置scss全局变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/common.scss";`
      },
      less: {
        javascriptEnabled: true
      }
    }
  }
})
