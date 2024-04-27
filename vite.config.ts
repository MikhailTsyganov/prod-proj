import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [svgr({ include: '**/*.svg' }), react(), eslint({ include: './eslintrc.js'})],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend')
  }
})
