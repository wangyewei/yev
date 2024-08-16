import type { Plugin } from 'vite'
import { resolveAlias } from './alias'

export default function VPThemeSnowPlugin(): Plugin {
  return {
    name: 'vp-theme-snow-plugin',

    config() {
      return {
        resolve: {
          alias: resolveAlias()
        }
      }
    }
  }
}
