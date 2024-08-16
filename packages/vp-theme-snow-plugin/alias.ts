// import { createRequire } from 'module'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import type { AliasOptions } from 'vite'

// const require = createRequire(import.meta.url)
const PKG_ROOT = resolve(fileURLToPath(import.meta.url), './')

export const DIST_CLIENT_PATH = resolve(PKG_ROOT, '.vitepress')
export const APP_PATH = join(DIST_CLIENT_PATH, 'app')

export const VIRTUAL_DATA_ID = '@virtualData'
export const SITE_DATA_REQUEST_PATH = '/' + VIRTUAL_DATA_ID

export function resolveAlias(): AliasOptions {
  const paths = {
    [VIRTUAL_DATA_ID]: SITE_DATA_REQUEST_PATH
  }

  const alias = [
    ...Object.keys(paths).map((p) => ({
      find: p,
      replacement: paths[p]
    }))
  ]

  return alias
}
