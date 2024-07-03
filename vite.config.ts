import { defineConfig } from 'vite'
import VPThemeSnowAutoArticlePlugin from './packages/vp-theme-auto-article-plugin'
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  plugins: [VPThemeSnowAutoArticlePlugin()]
})
