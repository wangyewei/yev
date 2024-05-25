import { defineConfigWithTheme } from 'vitepress'
import type { VPYevTheme } from 'vitepress-theme-yev'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
  title: "Yev",
  description: "Yev's personal blog site",
  themeConfig: {
    nav: {
      logo: 'https://avatars.githubusercontent.com/u/49926816?v=4'
    }
  }
})
