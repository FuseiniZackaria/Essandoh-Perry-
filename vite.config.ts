import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Explicitly inline an empty PostCSS config so Vite does not search the
  // filesystem upward for a postcss.config.js — on Windows in particular,
  // it can pick up an unrelated global config (e.g. in the user's home
  // folder) from a different project and fail on a missing dependency.
  // Tailwind v4's Vite plugin above handles all Tailwind processing itself
  // and does not go through PostCSS.
  css: {
    postcss: {
      plugins: [],
    },
  },
})
