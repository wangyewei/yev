import { Theme } from 'vitepress'
import Layout from './Layout'
import DefaultTheme from 'vitepress/theme'
export default {
  ...DefaultTheme,
  Layout: Layout
} satisfies Theme