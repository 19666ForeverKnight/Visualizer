import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    electron({
      entry: 'electron/main.js'
    })
  ],
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
