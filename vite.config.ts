import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcssPresetEnv from 'postcss-preset-env'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  plugins: [react()],
})
