import { defineConfigWithTheme } from 'vitepress'
import type { VPYevTheme } from 'vitepress-theme-yev'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
  title: 'Yev',
  description: "Yev's personal blog site",
  themeConfig: {
    nav: {
      logo: '/avatar.jpg',
      items: [
        {
          title: '首页',
          path: '/',
          icon: 'FaSolidDotCircle',
          children: [
            { title: '自述', path: 'intro' },
            { title: '赞助', path: 'sponsor' }
          ]
        },
        {
          title: '技术',
          path: '/techology',
          icon: 'FaSolidCode',
          children: [
            { title: 'TypeScript', path: '/typescript' },
            { title: 'Git', path: '/git' },
            { title: 'GIS', path: '/gis' },
            { title: '数字孪生', path: '/digi' },
            { title: 'Vue', path: '/vue' }
          ]
        },
        {
          title: '手稿',
          path: '/type',
          icon: 'FaFilledQulliPen',
          children: [{ title: '三生（上）', path: '/love-3' }]
        },
        {
          title: '心绪',
          icon: 'FaSolidEmotion',
          path: '/emotions/',
          children: [
            { title: '日记', path: '/diary' },
            { title: '书摘', path: '/excerpt' }
          ]
        }
      ]
    }
  }
})
