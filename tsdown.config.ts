import { defineConfig } from 'tsdown'

export default defineConfig({
  workspace: ['lib'],
  entry: 'src/index.ts',
  format: 'es',
  dts: {
    oxc: true,
    sourcemap: true,
  },
  sourcemap: true,
  exports: true,
})
