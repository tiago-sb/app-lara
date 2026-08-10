import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/etherpad-api': {
        target: 'http://localhost:9001',
        rewrite: (path) => path.replace(/^\/etherpad-api/, '/api'),
        changeOrigin: true,
      },
      '/lara-api': {
        target: 'http://localhost:8081',
        rewrite: (path) => path.replace(/^\/lara-api/, ''),
        changeOrigin: true,
      },
      '/sistema-api': {
        target: 'http://localhost:8000',
        rewrite: (path) => path.replace(/^\/sistema-api/, ''),
        changeOrigin: true,
      },
      '/camera': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/camera/, '')
      }
    }
  }
})