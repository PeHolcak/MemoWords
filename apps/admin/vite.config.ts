import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {'process.env': process.env},
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
      '@constants': resolve(__dirname, './src/constants'),
      '@pages': resolve(__dirname, './src/pages'),
      '@calls': resolve(__dirname, './src/calls'),
      '@types': resolve(__dirname, './src/types')
    },
  },
});
