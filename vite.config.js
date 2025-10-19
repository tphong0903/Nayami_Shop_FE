import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nayami-shop-fe.vercel.app/',
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    proxy: {
      '/api': {
        // target: 'https://nayamishop.id.vn',
        target: 'https://localhost:8081',
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
