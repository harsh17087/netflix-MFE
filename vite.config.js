import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  server: {
    open: true,
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'MyMicrofrontend',
      formats: ['es','system'],
      fileName: (format) => `my-netflixclone-microfrontend.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'single-spa': 'singleSpa',
        },
      },
    },
  },
});