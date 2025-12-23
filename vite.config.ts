
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // 强制将这些依赖设为 external，直接使用 index.html 中的 importmap
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'framer-motion',
        'lucide-react'
      ],
    },
    // 生产环境输出目录，Vercel 默认识别 dist
    outDir: 'dist',
  },
  optimizeDeps: {
    // 开发环境下也排除，保持开发与生产环境的一致性
    exclude: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react'
    ],
  },
});
