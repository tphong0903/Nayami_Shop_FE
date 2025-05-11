import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nayami-shop-fe.vercel.app/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://nayamishop.id.vn',
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
