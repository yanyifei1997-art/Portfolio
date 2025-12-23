
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // 强制将核心库设为 external，利用 HTML 中的 importmap 在运行时加载
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'framer-motion',
        'lucide-react'
      ],
    },
    outDir: 'dist',
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react'
    ],
  },
});
