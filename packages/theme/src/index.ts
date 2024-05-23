import { Theme } from 'vitepress'
import Layout from './app/Layout'
import DefaultTheme from 'vitepress/theme'

import './app/styles/index.css'

export default {
  ...DefaultTheme,
  Layout: Layout
} satisfies Theme