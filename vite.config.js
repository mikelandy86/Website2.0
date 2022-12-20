import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://raw.githubusercontent.com/mikelandy86/Website2.0/main/'
})


// base: '/Website2.0/'