import { defineConfigWithTheme } from 'vitepress'
import type { VPYevTheme } from 'vitepress-theme-yev'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
  title: 'Yev',
  description: "Yev's personal blog site",
  themeConfig: {
    copyright: {
      name: 'Yev Wang',
      startYear: '2024'
    },
    nav: {
      logo: '/avatar.jpg',
      items: [
        {
          title: '首页',
          path: '/',
          icon: 'FaSolidDotCircle',
          children: [
            { title: '自述', path: 'en/about/me' },
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
    },
    footer: {
      links: [
        {
          name: '关于',
          links: [
            { name: '关于本站', href: '/abouts/site' },
            { name: '关于我', href: '/abouts/me' },
            {
              name: '关于此项目',
              href: 'https://github.com/wangyewei/vitepress-theme-yev'
            }
          ]
        },
        {
          name: '联系',
          links: [
            { name: '邮件', href: 'mailto:yevwang@qq.com' },
            {
              name: 'GitHub',
              href: 'https://github.com/wangyewei'
            }
          ]
        },
        {
          name: '更多',
          links: [
            { name: '软件开发', href: 'https://06k4.com' },
            { name: '行业解决方案', href: 'https://06k4.com' }
          ]
        }
      ],
      template: [
        {
          type: 'span',
          children: [
            {
              type: 'div',
              text: 'Powerd by Vercel'
            },
            {
              type: 'span',
              text: '|'
            },
            {
              type: 'span',
              text: 'Designed by Shiro'
            },
            {
              type: 'span',
              text: '|'
            },
            {
              type: 'span',
              text: 'Based on Vitepress-theme-yev'
            }
          ],
          className: 'flex items-center gap-[4px] flex-wrap'
        }
      ]
    }
  }
})
