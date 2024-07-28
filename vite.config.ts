// vite.config.ts
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    alias: {
      '@': '/app/frontend',
    },
  },
  build: {
    rollupOptions: {
      input: '/app/frontend/entrypoints/application.js',
    },
  },
})