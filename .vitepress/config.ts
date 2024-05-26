import { defineConfigWithTheme } from 'vitepress'
import type { VPYevTheme } from 'vitepress-theme-yev'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
  title: "Yev",
  description: "Yev's personal blog site",
  themeConfig: {
    nav: {
      logo: 'https://avatars.githubusercontent.com/u/49926816?v=4',
      items: [
        { title: '首页', path: '/', icon: 'FaSolidDotCircle' },
        {
          title: '技术', path: '/techology', children: [
            { title: 'typescript', path: '/typescript' },
            { title: 'git', path: '/git' }
          ]
        },
        {
          title: '手稿', path: '/type', children: [
            { title: '三生（上）', path: '/love-3' }
          ]
        },
        { title: '心绪', path: '/emotions' },
      ]
    }
  }
})
