
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'framer-motion',
        'lucide-react'
      ],
    },
    outDir: 'dist',
    minify: 'esbuild'
  },
  server: {
    hmr: true
  }
});
