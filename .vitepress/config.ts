import { defineConfigWithTheme } from 'vitepress'
import { VPYevTheme } from 'vitepress-theme-yev'
import footerTemplate from './footer-template'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<VPYevTheme>({
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
            { title: 'Introduce', path: 'en/about/me' }
            // { title: 'Sponsor Me', path: 'sponsor' }
          ]
        },
        // {
        //   title: 'Techonologies',
        //   path: '/techology',
        //   icon: 'FaSolidCode',
        //   children: [
        //     { title: 'TypeScript', path: '/typescript' },
        //     { title: 'Git', path: '/git' },
        //     { title: 'GIS', path: '/gis' },
        //     { title: 'Digital twin', path: '/digi' },
        //     { title: 'Vue', path: '/vue' }
        //   ]
        // },
        // {
        //   title: 'Manuscripts',
        //   path: '/type',
        //   icon: 'FaFilledQulliPen',
        //   children: [{ title: 'Talk', path: '/diary' }]
        // },
        {
          title: 'State Of Mind',
          icon: 'FaSolidEmotion',
          path: '/emotions',
          children: [
            { title: 'predestination', path: 'zh/diary/predestination' }
            // { title: 'Excerpt', path: '/excerpt' }
          ]
        }
      ]
    },
    footer: {
      links: [
        {
          name: 'About',
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
      template: footerTemplate
    }
  }
})
