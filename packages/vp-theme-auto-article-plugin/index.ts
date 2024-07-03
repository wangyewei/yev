import type { Plugin } from 'vite'
import { type SiteConfig } from 'vitepress'
export default function VPThemeSnowAutoArticlePlugin(): Plugin {
  return {
    name: 'vp-theme-snow-auto-article-plugin',
    async config(config) {
      console.log(config)
    }
  }
}
