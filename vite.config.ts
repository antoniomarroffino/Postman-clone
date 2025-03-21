import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
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
  }
}))

