import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Слушать все интерфейсы (аналог --host)
    port: 5173
  }
})
