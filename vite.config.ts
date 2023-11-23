import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
      sourceDir: resolve('./src'),
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@style',
        replacement: fileURLToPath(
          new URL('./src/scss/abstract', import.meta.url)
        ),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
      },
    ],
  },
  css: {
    modules: {
      generateScopedName(name) {
        return name;
      },
      localsConvention: 'camelCaseOnly',
    },
  },
});
