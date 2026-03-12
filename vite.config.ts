import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
      rollupTypes: true, // This is highly recommended to create a single clean index.d.ts
      compilerOptions: {
        noEmit: false, // OVERRIDE the noEmit setting here
      },
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ApenIcons',
      formats: ['es', 'umd'],
      fileName: (format) => `apen-icons.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});