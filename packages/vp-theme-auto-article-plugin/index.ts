import type { Plugin } from 'vite'
import { Dirent, promises as fs } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface VPThemeSnowAutoArticleOptions {
  base?: string
  output?: string
  ignores?: string[]
  inputs?: string[]
}

export type Article = {
  title: string
  url: string
}

const IGNORE_FILES_ARR = ['node_modules', '.git', '.github', '.vscode']

export default function VPThemeSnowAutoArticlePlugin(
  options: VPThemeSnowAutoArticleOptions = {}
): Plugin {
  const {
    base = '.',
    output = '.vitepress/articles.json',
    inputs = []
  } = options
  let { ignores = [] } = options
  ignores = ignores.concat(IGNORE_FILES_ARR)

  return {
    name: 'vp-theme-snow-auto-article-plugin',
    async buildStart() {
      const articles = await scanArticles(base, ignores, inputs)
      await fs.writeFile(output, JSON.stringify(articles, null, 2))
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/__generate_articles') {
          const articles = await scanArticles(base, ignores, inputs)
          res.end('Articles JSON generated')
        } else {
          next()
        }
      })
    }
  }
}

async function scanArticles(
  base: string,
  ignores: string[],
  inputs: string[]
): Promise<Record<string, Article>> {
  const articles: Record<string, Article> = {}

  for (const input of inputs) {
    const inputPath = join(base, input)
    const entries = await fs.readdir(inputPath, { withFileTypes: true })

    for (const entry of entries) {
      if (shouldSkip(entry, ignores)) continue

      const fullPath = join(inputPath, entry.name)

      if (entry.isDirectory()) {
        const indexPath = join(fullPath, 'index.md')
        try {
          await fs.access(indexPath)
          const nestedEntries = await fs.readdir(fullPath, {
            withFileTypes: true
          })

          for (const nestedEntry of nestedEntries) {
            if (nestedEntry.isFile() && nestedEntry.name.endsWith('.md')) {
              const nestedFullPath = join(fullPath, nestedEntry.name)
              const fileContent = await fs.readFile(nestedFullPath, 'utf-8')
              const { data } = matter(fileContent)
              const key = nestedFullPath
                .replace(`${base}/`, '')
                .replace('.md', '')
              articles[key] = {
                title: data.title,
                url: data?.articlePath || key
              }
            }
          }
        } catch (err) {
          continue
        }
      }
    }
  }
  return articles
}

function shouldSkip(file: Dirent, ignores: string[]): boolean {
  return ignores.some((ignore) => file.name.includes(ignore))
}
