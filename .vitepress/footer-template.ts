import { VPYevTheme } from 'vitepress-theme-snow/src/index.ts'

export default [
  {
    type: 'div',
    children: [
      {
        type: 'div',
        className:
          'flex items-center gap-[8px] flex-wrap justify-center lg:justify-start',
        children: [
          {
            type: 'div',
            children: [
              { type: 'span', text: 'Powerd by ' },
              {
                type: 'a',
                props: {
                  href: 'https://vercel.com'
                },
                text: 'Vercel'
              }
            ]
          },
          {
            type: 'div',
            text: '|'
          },
          {
            type: 'div',
            children: [
              { type: 'span', text: 'Designed by ' },
              {
                type: 'a',
                props: {
                  href: ' https://github.com/Innei'
                },
                text: 'Innei'
              }
            ]
          }
        ]
      },
      {
        type: 'div',
        className:
          'flex items-center gap-[8px] flex-wrap justify-center lg:justify-start',
        children: [
          {
            type: 'div',
            children: [
              { type: 'span', text: 'Based on ' },
              {
                type: 'a',
                props: {
                  href: 'https://github.com/wangyewei/vitepress-theme-snow'
                },
                text: 'Vitepress-theme-snow'
              }
            ]
          }
        ]
      }
    ]
  }
] satisfies VPYevTheme['footer']['template']
