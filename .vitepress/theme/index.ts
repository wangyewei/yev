import type { Theme } from 'vitepress'
import YevTheme from 'vitepress-theme-snow'
import 'vitepress-theme-snow/dist/styles/index.css'
import VercelLayoutVue from './layout/VercelLayout.vue'
export default {
  ...YevTheme,
  Layout: VercelLayoutVue
} satisfies Theme
