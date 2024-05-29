import { defineConfigWithTheme } from 'vitepress'
import type { VPYevTheme } from 'vitepress-theme-yev'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
  title: "Yev",
  description: "Yev's personal blog site",
  themeConfig: {
    nav: {
      logo: '/avatar.jpg',
      items: [
        { title: '首页', path: '/', icon: 'FaSolidDotCircle' },
        {
          title: '技术', path: '/techology', icon: 'FaSolidCode', children: [
            { title: 'typescript', path: '/typescript' },
            { title: 'git', path: '/git' }
          ]
        },
        {
          title: '手稿', path: '/type', icon: 'FaFilledQulliPen', children: [
            { title: '三生（上）', path: '/love-3' }
          ]
        },
        { title: '心绪', icon: 'FaSolidEmotion', path: '/emotions/' },
      ]
    }
  }
})
