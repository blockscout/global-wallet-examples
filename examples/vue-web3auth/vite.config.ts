import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({ include: ['process', 'stream', 'util', 'buffer'], globals: { process: true, Buffer: true, global: true } }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Ensure all process refs (including process2 in Web3Auth deps) get nextTick
      process: fileURLToPath(new URL('./src/polyfills/process.ts', import.meta.url))
    },
  },
  define: {
    // Dependencies (e.g. @blockscout/rootstock-global-wallet, @web3auth) expect Node-style process in the browser
    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development'),
  },
})
