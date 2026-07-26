/**
 * Configuration secondaire : produit un aperçu du site en un seul fichier HTML
 * (CSS et JS inlinés), utile pour partager le rendu sans hébergement.
 * La configuration de production reste vite.config.js.
 *
 *   npx vite build --config vite.config.singlefile.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-single',
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 100_000_000,
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    }
  }
})
