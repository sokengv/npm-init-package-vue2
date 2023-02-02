import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'lv-button',
      fileName: (format) => `lv-button.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      },
    },
  },
  
  plugins: [vue()],
  resolve: {
    dedupe: ['vue']
  },
})
