import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({mode}) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    'import.meta.env.MODE': JSON.stringify(mode)
  },
  server: {
    port: 3000,
    proxy: {
      '/proxy': {
        target: 'https://supsi-ticket.cloudns.org/supsi-http-client',
        changeOrigin: true,
        secure: true
      }
    },
  }
}))

