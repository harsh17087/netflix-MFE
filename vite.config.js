import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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