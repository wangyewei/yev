import { defineConfig } from 'vite'
import VPThemeSnowReplaceImportPlugin from './packages/vp-theme-snow-replace-import'
import VPThemeSnowAutoArticlePlugin from './packages/vp-theme-auto-article-plugin'
import VPThemeSnowPlugin from './packages/vp-theme-snow-plugin'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue'"
  },
  plugins: [
    VPThemeSnowReplaceImportPlugin(),
    VPThemeSnowAutoArticlePlugin({ inputs: ['en/about'] }),
    VPThemeSnowPlugin()
  ],
  optimizeDeps: {
    include: ['vue-router']
  }
})
