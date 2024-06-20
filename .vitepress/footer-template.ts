import { VPYevTheme } from 'vitepress-theme-yev/src/index.ts'

export default [
  {
    type: 'small',
    children: [
      {
        type: 'span',
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
        type: 'a',
        text: 'Innei',
        props: {
          href: ' https://github.com/Innei',
          style: 'text-decoration-line: underline;'
        }
      },
      {
        type: 'span',
        text: '|'
      },
      {
        type: 'span',
        text: 'Based on '
      },
      {
        type: 'a',
        text: 'Vitepress-theme-yev',
        props: {
          href: 'https://github.com/wangyewei/vitepress-theme-yev',
          style: 'text-decoration-line: underline;'
        }
      },
      {
        type: 'span',
        text: ' | '
      },
      {
        type: 'span',
        text: 'Licensed Under '
      },
      {
        type: 'a',
        text: 'CC BY-NC 4.0',
        props: {
          href: 'https://creativecommons.org/licenses/by-nc/4.0/legalcode',
          style: 'text-decoration-line: underline;'
        }
      }
    ],
    className: 'flex items-center gap-[4px] flex-wrap'
  }
] satisfies VPYevTheme['footer']['template']
