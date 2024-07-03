import { defineConfigWithTheme } from 'vitepress'
// TODO: export ts interfaces
// @ts-ignore
import { VPSnowTheme } from 'vitepress-theme-snow'
import footerTemplate from './footer-template'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPSnowTheme>({
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  base: '/',
  title: 'Yev',
  description: "Yev's personal blog site",
  lastUpdated: true,
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
            { title: 'Introduce', path: '/en/about/me' },
            { title: 'Sponsor Me', path: 'sponsor' }
          ]
        },
        {
          title: 'State Of Mind',
          icon: 'FaSolidEmotion',
          path: '/emotions',
          children: [
            { title: 'predestination', path: '/zh/diary/predestination' }
          ]
        }
      ]
    },
    footer: {
      links: [
        {
          name: 'About',
          links: [
            { name: 'About this site', href: '/about/site/' },
            { name: 'About me', href: '/about/me' },
            {
              name: 'About this project',
              href: '/en/about/project/'
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
      template: footerTemplate
    }
  }
})
