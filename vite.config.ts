
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 修复某些库寻找 process 变量导致的构建错误
    'process.env': {},
  },
  build: {
    rollupOptions: {
      // 关键：将这些依赖标记为外部依赖，
      // 这样 Vite 构建时就会跳过对它们的打包，直接使用 index.html 里的 importmap
      external: [
        'react',
        'react-dom',
        'react-dom/client',
        'framer-motion',
        'lucide-react'
      ],
    },
  },
  optimizeDeps: {
    // 确保开发环境下排除这些库以使用 CDN 版本
    exclude: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react'
    ],
  },
});
