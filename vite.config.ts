import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //host: 'localhost',  // 指定服务器主机名
    port: 3000, // 指定服务器端口
    proxy: {
      // 为开发服务器配置自定义代理规则
    },
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./src/packages/index.ts",
      name: "vtszsy-tools",
    },
  },
});


