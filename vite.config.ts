import { defineConfig } from 'vite'
import VPThemeSnowReplaceImportPlugin from './packages/vp-theme-snow-replace-import'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  plugins: [VPThemeSnowReplaceImportPlugin()]
})
