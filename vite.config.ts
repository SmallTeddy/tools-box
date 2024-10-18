import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import path from 'path'

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],

      // global imports to register
      imports: [
        // vue auto import
        'vue',
        // vue-router auto import
        {
          'vue-router': [
            'createRouter',
            'createWebHistory'
          ]
        },
        // @vueuse/core auto import
        {
          '@vueuse/core': [
            'createGlobalState',
            'useStorage',
            'useColorMode',
            'useFullscreen'
          ]
        },
        // @/store auto import
        {
          '@/store': [
            'useGlobalState'
          ]
        },
        // i18n
        {
          'vue-i18n': [
            'useI18n',
            'createI18n'
          ]
        }
      ]
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },

  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 忽略后缀
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
}));
