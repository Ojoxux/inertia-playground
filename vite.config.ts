import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import devServer from '@hono/vite-dev-server'
import { inertiaPages } from '@hono/inertia/vite'

export default defineConfig({
  plugins: [
    inertiaPages({
      pagesDir: 'src/client/pages',
      outFile: 'src/client/pages.gen.ts',
      serverModule: '../server/index',
    }),
    react(),
    devServer({
      entry: 'src/server/index.tsx',
      exclude: [
        /^\/src\/client\/.*/,
        /^\/@.+$/,
        /^\/node_modules\/.*/,
        /^\/.*\.(ts|tsx|css|svg|png|ico)$/,
      ],
    }),
  ],
})
