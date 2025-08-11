import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',    // Output folder inside frontend directory
    emptyOutDir: true   // Clean output folder before each build
  }
});
