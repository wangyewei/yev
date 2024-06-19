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
          title: 'Home',
          path: '/',
          icon: 'FaSolidDotCircle',
          children: [
            { title: 'Intorduce', path: 'en/about/me' },
            { title: 'Sponsor Me', path: 'sponsor' }
          ]
        },
        {
          title: 'Techonologies',
          path: '/techology',
          icon: 'FaSolidCode',
          children: [
            { title: 'TypeScript', path: '/typescript' },
            { title: 'Git', path: '/git' },
            { title: 'GIS', path: '/gis' },
            { title: 'Digital twin', path: '/digi' },
            { title: 'Vue', path: '/vue' }
          ]
        },
        {
          title: 'Manuscripts',
          path: '/type',
          icon: 'FaFilledQulliPen',
          children: [{ title: 'Talk', path: '/diary' }]
        },
        {
          title: 'State Of Mind',
          icon: 'FaSolidEmotion',
          path: '/emotions/',
          children: [
            { title: 'Diary', path: '/diary' },
            { title: 'Excerpt', path: '/excerpt' }
          ]
        }
      ]
    },
    footer: {
      links: [
        {
          name: 'about',
          links: [
            { name: 'About this site', href: '/abouts/site' },
            { name: 'About me', href: '/abouts/me' },
            {
              name: 'About this project',
              href: 'https://github.com/wangyewei/vitepress-theme-yev'
            }
          ]
        },
        {
          name: 'Contact',
          links: [
            { name: 'Email', href: 'mailto:yevwang@qq.com' },
            {
              name: 'GitHub',
              href: 'https://github.com/wangyewei'
            }
          ]
        },
        {
          name: 'More',
          links: [
            { name: 'Software development', href: 'https://06k4.com' },
            { name: 'Industry solutions', href: 'https://06k4.com' }
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
        },
        {
          type: 'div',
          text: 'Licensed Under CC BY-NC-SA 4.0',
          className: 'block mt-4 text-[12px]'
        }
      ]
    }
  }
})
